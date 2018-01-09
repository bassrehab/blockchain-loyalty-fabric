/*
  Chaincode for points transactions
 */

package main

/* Imports  
* 4 utility libraries for handling bytes, reading and writing JSON, 
formatting, and string manipulation  
* 2 specific Hyperledger Fabric specific libraries for Smart Contracts  
*/ 
import (
	"bytes"
	"encoding/json"
	"fmt"
	"strconv"

	"github.com/hyperledger/fabric/core/chaincode/shim"
	sc "github.com/hyperledger/fabric/protos/peer"
)

// Define the Smart Contract structure
type SmartContract struct {
}

/* Define Points structure, with 4 properties.  
Structure tags are used by encoding/json library
- Holder
- SchemeID
- Timestamp
- Location
*/
type Points struct {
	SchemeID string `json:"schemeid"`
	Timestamp string `json:"timestamp"`
	Location  string `json:"location"`
	Holder  string `json:"holder"`
}

/*
 * The Init method *
 called when the Smart Contract "points-chaincode" is instantiated by the network
 * Best practice is to have any Ledger initialization in separate function 
 -- see initLedger()
 */
func (s *SmartContract) Init(APIstub shim.ChaincodeStubInterface) sc.Response {
	return shim.Success(nil)
}

/*
 * The Invoke method *
 called when an application requests to run the Smart Contract "points-chaincode"
 The app also specifies the specific smart contract function to call with args
 */
func (s *SmartContract) Invoke(APIstub shim.ChaincodeStubInterface) sc.Response {

	// Retrieve the requested Smart Contract function and arguments
	function, args := APIstub.GetFunctionAndParameters()
	// Route to the appropriate handler function to interact with the ledger
	if function == "queryPoints" {
		return s.queryPoints(APIstub, args)
	} else if function == "initLedger" {
		return s.initLedger(APIstub)
	} else if function == "recordPoints" {
		return s.recordPoints(APIstub, args)
	} else if function == "queryAllPoints" {
		return s.queryAllPoints(APIstub)
	} else if function == "changePointsHolder" {
		return s.changePointsHolder(APIstub, args)
	}

	return shim.Error("Invalid Smart Contract function name.")
}

/*
 * The queryPoints method *
Used to view the records of one particular points
It takes one argument -- the key for the points in question
 */
func (s *SmartContract) queryPoints(APIstub shim.ChaincodeStubInterface, args []string) sc.Response {

	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}

	pointsAsBytes, _ := APIstub.GetState(args[0])
	if pointsAsBytes == nil {
		return shim.Error("Could not locate points transaction")
	}
	return shim.Success(pointsAsBytes)
}

/*
 * The initLedger method *
Will add test data (10 point)to our network
This can also be the initial points injection by the operating organization
- Holder
- SchemeID
- Timestamp
- Location
 */
func (s *SmartContract) initLedger(APIstub shim.ChaincodeStubInterface) sc.Response {
	points := []Points{
		Points{SchemeID: "923F", Location: "67.0006, -70.5476", Timestamp: "1504054225", Holder: "Miriam"},
		Points{SchemeID: "M83T", Location: "91.2395, -49.4594", Timestamp: "1504057825", Holder: "Dave"},
		Points{SchemeID: "T012", Location: "58.0148, 59.01391", Timestamp: "1493517025", Holder: "Igor"},
		Points{SchemeID: "P490", Location: "-45.0945, 0.7949", Timestamp: "1496105425", Holder: "Amalea"},
		Points{SchemeID: "S439", Location: "-107.6043, 19.5003", Timestamp: "1493512301", Holder: "Rafa"},
		Points{SchemeID: "J205", Location: "-155.2304, -15.8723", Timestamp: "1494117101", Holder: "Shen"},
		Points{SchemeID: "S22L", Location: "103.8842, 22.1277", Timestamp: "1496104301", Holder: "Leila"},
		Points{SchemeID: "EI89", Location: "-132.3207, -34.0983", Timestamp: "1485066691", Holder: "Yuan"},
		Points{SchemeID: "129R", Location: "153.0054, 12.6429", Timestamp: "1485153091", Holder: "Carlo"},
		Points{SchemeID: "49W4", Location: "51.9435, 8.2735", Timestamp: "1487745091", Holder: "Fatima"},
	}

	i := 0
	for i < len(points) {
		fmt.Println("i is ", i)
		pointsAsBytes, _ := json.Marshal(points[i])
		APIstub.PutState(strconv.Itoa(i+1), pointsAsBytes)
		fmt.Println("Added", points[i])
		i = i + 1
	}

	return shim.Success(nil)
}

/*
 * The recordPoints method *
 */
func (s *SmartContract) recordPoints(APIstub shim.ChaincodeStubInterface, args []string) sc.Response {

	if len(args) != 5 {
		return shim.Error("Incorrect number of arguments. Expecting 5")
	}

	var points = Points{ SchemeID: args[1], Location: args[2], Timestamp: args[3], Holder: args[4] }

	pointsAsBytes, _ := json.Marshal(points)
	err := APIstub.PutState(args[0], pointsAsBytes)
	if err != nil {
		return shim.Error(fmt.Sprintf("Failed to record points catch: %s", args[0]))
	}

	return shim.Success(nil)
}

/*
 * The queryAllPoints method *
allows for assessing all the records added to the ledger(all points catches)
This method does not take any arguments. Returns JSON string containing results. 
 */
func (s *SmartContract) queryAllPoints(APIstub shim.ChaincodeStubInterface) sc.Response {

	startKey := "0"
	endKey := "999"

	resultsIterator, err := APIstub.GetStateByRange(startKey, endKey)
	if err != nil {
		return shim.Error(err.Error())
	}
	defer resultsIterator.Close()

	// buffer is a JSON array containing QueryResults
	var buffer bytes.Buffer
	buffer.WriteString("[")

	bArrayMemberAlreadyWritten := false
	for resultsIterator.HasNext() {
		queryResponse, err := resultsIterator.Next()
		if err != nil {
			return shim.Error(err.Error())
		}
		// Add comma before array members,suppress it for the first array member
		if bArrayMemberAlreadyWritten == true {
			buffer.WriteString(",")
		}
		buffer.WriteString("{\"Key\":")
		buffer.WriteString("\"")
		buffer.WriteString(queryResponse.Key)
		buffer.WriteString("\"")

		buffer.WriteString(", \"Record\":")
		// Record is a JSON object, so we write as-is
		buffer.WriteString(string(queryResponse.Value))
		buffer.WriteString("}")
		bArrayMemberAlreadyWritten = true
	}
	buffer.WriteString("]")

	fmt.Printf("- queryAllPoints:\n%s\n", buffer.String())

	return shim.Success(buffer.Bytes())
}

/*
 * The changePointsHolder method *
The data in the world state can be updated with who has possession. 
This function takes in 2 arguments, points id and new holder name. 
points id, is synonymous with points transaction bucket
 */
func (s *SmartContract) changePointsHolder(APIstub shim.ChaincodeStubInterface, args []string) sc.Response {

	if len(args) != 2 {
		return shim.Error("Incorrect number of arguments. Expecting 2")
	}

	pointsAsBytes, _ := APIstub.GetState(args[0])
	if pointsAsBytes == nil {
		return shim.Error("Could not locate points transaction")
	}
	points := Points{}

	json.Unmarshal(pointsAsBytes, &points)
	// Normally check that the specified argument is a valid holder of points
	// we are skipping this check for this example
	points.Holder = args[1]

	pointsAsBytes, _ = json.Marshal(points)
	err := APIstub.PutState(args[0], pointsAsBytes)
	if err != nil {
		return shim.Error(fmt.Sprintf("Failed to change points holder: %s", args[0]))
	}

	return shim.Success(nil)
}

/*
 * main function *
calls the Start function 
The main function starts the chaincode in the container during instantiation.
 */
func main() {

	// Create a new Smart Contract
	err := shim.Start(new(SmartContract))
	if err != nil {
		fmt.Printf("Error creating new Smart Contract: %s", err)
	}
}