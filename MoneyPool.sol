pragma solidity ^0.4.17;

contract MoneyPool {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    address[] public approvers;
    
    modifier restricted() {
        require(msg.sender == manager)
        _;  // Code executes here
    }
    
    // Constructor
    function MoneyPool(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum; 
    }
    
    // Add to money pool
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers.push(msg.sender);
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({   // memory - pass/copy by value
            description: description,
            value: value,
            recipient: recipient,
            complete: false
        });
        
        request.push(newRequest);
    }
    
    
}