//SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.8.1;

contract Voting {
    mapping(address => string) public  membersProposal;
    mapping(address => bool) public membershipStatus; 
    address[] public activeMembers;
    address[] public passiveMembers;

    string public mainProposal;
    string[] internal proposalList;
    string[] internal proposalPassed;
    string[] internal proposalRejected;

    address public owner;
    constructor() {
        owner = msg.sender;
    }
    modifier onlyOwner(){
        require(msg.sender == owner, "you are not owner");
        _;
    }
    function changeOwner(address _newOwner) external onlyOwner {
        owner = _newOwner;
    }

    modifier onlyMember(){
        bool status;
        for(uint i=0; i <activeMembers.length; i++) {
            if(activeMembers[i] == msg.sender) {
                status = true;
            }
        }
        require(status == true, "you are not a member");
        _;
    }



    function becomeMember() external payable {
        bool status = false;
        for(uint i=0; i<activeMembers.length; i++) {
            if(activeMembers[i] == msg.sender) {
                status = true;
            }
        }
        require(status == false, "you are already a member");
        require(msg.value >= 1 ether, "pay the membership fee of 1 Matic");
        membershipStatus[msg.sender] = true;
        activeMembers.push(msg.sender);
    }

    function makeProposal(string memory _proposal) external onlyMember {
        proposalList.push(_proposal);
    }

    /*Here the owner is choosing the main proposal from proposal list.
    For this reason, there is no reason to keep it inside the proposal list.
    Because it will later go inside passed or rejected list. 
    Thats why I am using for loop in orderly way to remove main proposal.
    We can start for loop from main proposal index and no need to iterate all list
    because in any case we cannot copy the value of last element to another element.
    Thats why i am finishing for loop at "proposalList.length-1
    */
    function chooseMainProposal(uint _index) external onlyOwner {
        require(_index < proposalList.length, "proposal id number is wrong");
        mainProposal = proposalList[_index];
        for(uint i = _index; i < proposalList.length-1; i++) {
            proposalList[i] = proposalList[i+1];
        }
        proposalList.pop();
    }
    function getAllPro() external view returns(string[] memory) {
        return proposalList;
    }
    function getAllProPassed() external view returns(string[] memory) {
        return proposalPassed;
    }
    function getAllProRejected() external view returns(string[] memory) {
        return proposalRejected;
    }

    /*
    also save members and their proposals in mapping
    also make sure members can make proposal once in a week
    voting functions still missing
    reset yes and no notes uint after closing voting
    */

    //voting result recording
    struct ResultStruct {
        string proposalName;
        uint yesV;
        uint noV;
        uint totalV;
    }
    ResultStruct record;
    mapping(uint => ResultStruct) public resultsMapping;


    //y: yes votes, n: no votes
    uint internal y;
    uint internal n;
    mapping(address => bool) public votingStatus;
    function voteYes() external onlyMember {
        require(votingStatus[msg.sender] == false, "you have already voted");
        votingStatus[msg.sender] = true;
        y++;
    }

    function voteNo() external onlyMember {
        require(votingStatus[msg.sender] == false, "you have already voted");
        votingStatus[msg.sender] = true;
        n++;
    }
    function closeVoting(uint indexMapping) external onlyOwner {
        uint totalVotes = y + n;
        uint percentage1 = y*100;
        uint percentage2 = percentage1/totalVotes;
        if(percentage2 >= 60) {
            proposalPassed.push(mainProposal);
        } else {
            proposalRejected.push(mainProposal);
        }
        record = ResultStruct(mainProposal, y, n, totalVotes);
        resultsMapping[indexMapping] = record;
        n=0;
        y=0;
    }


}