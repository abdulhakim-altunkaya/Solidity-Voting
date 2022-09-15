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
        (bool success, ) = address(this).call{value: 1 ether}("");
        require(success, "fee transfer failed");
        membershipStatus[msg.sender] = true;
        activeMembers.push(msg.sender);
    }

    
    function makeProposal(string memory _proposal) external onlyMember {
        proposalList.push(_proposal);
    }





}