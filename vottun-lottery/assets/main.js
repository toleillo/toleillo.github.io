const contractAddress = "0x77861cc217640cBB247C22EB4a561547b0E871A9";
const contractAbi = [{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_minimumEth",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "_houseFeePercentage",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
    {
        "inputs": [],
        "name": "enter",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlayers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "houseFeePercentage",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "manager",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minimumEth",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pickWinner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "players",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }];

const web3 = new Web3(window.ethereum);

async function connectWallet() {
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const accounts = await web3.eth.getAccounts();
        const userAccount = accounts[0];

        document.getElementById('walletWrapper').textContent = 'Connected: 0x...' + userAccount.substr(userAccount.length - 6);
    } catch (error) {
        console.error("Error to connect MetaMask:", error);
    }
}

async function participate() {
    await connectWallet();

    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    try {
        const accounts = await web3.eth.getAccounts();
        const userAccount = accounts[0];

        await contract.methods.enter().send({
            from: userAccount,
            value: web3.utils.toWei('0.1', 'ether')
        });

        alert("Transaction success. Participation completed.");

        await updateInfo()
    } catch (error) {
        console.error("Error:", error);
    }
}

async function updateInfo() {
    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    try {
        const totalParticipants = await contract.methods.getPlayers().call();
        const totalStaked = await contract.methods.getBalance().call();

        document.getElementById('totalParticipants').textContent = totalParticipants.length;

        let total = web3.utils.fromWei(totalStaked, 'ether');
        const response = this.httpGet('https://api.binance.com/api/v3/avgPrice?symbol=MATICUSDT');

        document.getElementById('totalETHStaked').textContent = total + ' ('+ (JSON.parse(response).price * total) +'$)';
    } catch (error) {
        console.error("Error on contract info:", error);
    }
}

function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

window.addEventListener("load", (event) => {
    updateInfo();
    connectWallet();
});
