/*
1) Manager deploy with 0 min contributer
2) Manager contribute some amount
3) Manager create request with new address (recipient)
4) Manager/contributer approve request 
5) Manager finalize request
6) Recipient should have more eth
*/ 


pragma solidity ^0.4.17;

contract MoneyPoolFactory {
    // Factory Contract creates instances of many contracts
    address[] public deployedMoneyPools;
    
    function createMoneyPool(uint minimum) public {
        address newMoneyPool = new MoneyPool(minimum, msg.sender); // user trying to make new MoneyPool
        deployedMoneyPools.push(newMoneyPool);
    }
    
    function getMoneyPools() public view returns (address[]) {
        return deployedMoneyPools;
    }

}

contract MoneyPool {
    // Request - Where money want to go
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
    uint public approversCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;  
    }
    
    // Constructor
    function MoneyPool(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum; 
    }
    
    // Anyone be contributer 
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    // Manager create request 
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
    
    // Contributer approve request at given index
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);    //person not already voted on request
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
        
    }
    
    // Manager give eth to recipient if approval is majority
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount/2));
        require(!requests[index].complete);
        request.recipient.transfer(request.value);
        request.complete = true;
    }
}