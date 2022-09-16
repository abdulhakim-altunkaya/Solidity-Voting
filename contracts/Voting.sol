//SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.8.1;

contract Voting {
    mapping(address => string) public  members;
    mapping(address => bool) public membershipStatus; 
    address[] public activeMembers;
    address[] public passiveMembers;

    string[] public proposalList;
    string[] public proposalPassed;
    string[] public proposalRejected;

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
            } else {
                status = false;
            }
        }
        require(status == true, "you are not a member");
        _;
    }



    function becomeMember() external payable {
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
            proposalList[i] = proposalList[i+1] 
        }
        proposalList.pop();
    }



}