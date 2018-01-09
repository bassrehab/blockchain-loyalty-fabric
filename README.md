## Loyalty Platform based on Hyperledger Fabric

An app that uses Hyperledger Fabric blockchain as a platform for Loyalty programmes, either in isolation or multiple providers, with additional scope of inter-conversion of points between providers.


### Application Flow


1. Various users (Merchants, Acquirers, exsisting Loyalty providers, Regulators) will interact with the Node.js application.
2. The client (defined by wallet app, Acquirer systems, or existing loyalty platforms) JS will send messages to the backend when the user interacts with the application.
3. Reading or writing the ledger is known as a proposal (for example, querying a specific Point transaction - queryPoints-  or recording a points transaction - recordPoints). This proposal is built by  the application via the SDK, and then sent to the endorsing peers.
4. The endorsing peers will use the application-specific chaincode smart contract to simulate the transaction. If there are no issues, the transaction will be endorsed, and sent back to our application.
5. The application will then send the endorsed proposal to the ordering service via the SDK. The orderer will package many proposals from the whole network into a block. Then, it will broadcast the new block to the committing peers in the network.
6. Finally, each committing peer will validate the block and write it to its ledger. The transaction has now been committed, and any reads will reflect this change.


    
### Key Terms:
1. **Holder:** User/subscriber ID who holds the current points. This may be your system specific ID or users Wallet Id
2. **Transaction Timestamp:** Time stamp when the points txn took place. Advised to use consistent universal time. This can also be 'System' specific transaction. Transactions include, purchase based, redemption based, transfer based (friend to friend), promotion based, conversion based (conversion among other platforms)
3. **Transaction Location:** Location where the transaction originated. Useful for geospatial analytics. Could be Merchant location, etc.
4. **Scheme ID:** Merchants may run multiple schemes under which they can award points. This can be 'System' as well if you want to inject/maintain liquidity in system.
5. **Transaction ID:** A platform generated ID, that identifies any transaction on the platform.


### Asset Definition:
Throughout the app, the asset attributes are defined by:
~~~~
type Points struct {
SchemeID string `json:"schemeid"`
Timestamp string `json:"timestamp"`
Location  string `json:"location"`
Holder  string `json:"holder"`
}
~~~~
    
Additional attributes, like below can be added with complex logic.
    
    - Points Balance
    - Points Value
    - Points Value Currency
    - Origin Merchant Name
    - Origin Creation Date
    - Auto Expire
    - Expiry Date, etc


### Prerequisites (Linux : Ubuntu)
**1. Install cURL**
`$ sudo apt install curl`

**2. Install Docker CE**

`$ sudo apt-get update`

~~~~
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
~~~~
    
`$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
~~~~
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
~~~~  
`$ sudo apt-get update`

`$ sudo apt-get install docker-ce`


On production systems, you should install a specific version of Docker CE instead of always using the latest. This output is truncated. List the available versions.
~~~~
$ apt-cache madison docker-ce

docker-ce | 17.12.0~ce-0~ubuntu | https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
~~~~
   
**3. Optional, Manage Docker as a Non-Root User**

If you don't want to use sudo when you use the docker command, create a Unix group called docker and add users to it. When the docker daemon starts, it makes the ownership of the Unix socket read/writable by the docker group.

_Warning:_ The docker group grants privileges equivalent to the root user. For details on how this impacts security in your system, see Docker Daemon Attack Surface.

****
To create the docker group and add your user:

a) Create the docker group:

`$ sudo groupadd docker`

b) Add your user to the docker group:

`$ sudo usermod -aG docker $USER`

c) Log out and log back in, so that your group membership is re-evaluated.

d) On a desktop Linux environment such as X Windows, log out of your session completely and then log back in.

e) Verify that you can run Docker commands without sudo.

`$ docker run hello-world`

f) This command downloads a test image and runs it in a container. When the container runs, it prints an informational message and exits.
   
   
**4. Docker Compose**
Suggested Docker version 17.03.1-ce or greater, and Docker Compose version 1.9.0 or greater:
   `$ sudo apt update`
   
   `$ sudo apt install docker-compose`
   
 
 **5. Installing Node.js and npm**

Suggested version, node > 6.9 and  < 7.x,
npm > 3.x

`$ sudo bash -c "cat >/etc/apt/sources.list.d/nodesource.list" <<EOL
deb https://deb.nodesource.com/node_6.x xenial main
deb-src https://deb.nodesource.com/node_6.x xenial main
EOL`

`$ curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -`

`$ sudo apt update`

`$ sudo apt install nodejs`

`$ sudo apt install npm`

_verify:_
`$ node --version && npm --version`



**6. Installing Go Language**
Visit https://golang.org/dl/ and make note of the latest stable release (v1.8 or later).

To install Go language, run the following commands in your terminal/command line:

`$ sudo apt update`


`$ sudo curl -O https://storage.googleapis.com/golang/go1.9.2.linux-amd64.tar.gz `

_Note:_ Switch out the black portion of the URL with the correct filename.

`$ sudo tar -xvf go1.9.2.linux-amd64.tar.gz`

`$ sudo mv go /usr/local`

`$ echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.profile`

`$ source ~/.profile`

Check that the Go version is v1.8 or later:

`$ go version`



### Running the Application

1. Remove any existing docker containers to avoid conflict.
`$ docker rm -f $(docker ps -aq)`

2. Start the Fabric Network
`$ ./startFabric.sh`
if getting error about running ./startFabric.sh permission 
`chmod a+x startFabric.sh`


3. Install the required libraries from the package.json file, register the Admin and User components of our network, and start the client application with the following commands:
    
    ~~~~
    $ npm install
    
    $ node registerAdmin.js
    
    $ node registerUser.js
    
    $ node server.js
    ~~~~
    
4. Cleaning up
    ~~~~
    $ docker rm -f $(docker ps -aq)
    $ docker rmi -f $(docker images -a -q)
    ~~~~
    
    
### License ###
See, license.md
