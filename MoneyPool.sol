pragma solidity ^0.4.17;

contract MoneyPool {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;  
    }
    
    // Constructor
    function MoneyPool(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum; 
    }
    
    // Add to money pool
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({   // memory - pass/copy by value
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);    //person not already voted on request
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
        
    }
    
}