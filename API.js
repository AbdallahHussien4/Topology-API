///////////////////////////////////
/*
    The main API execution file.
*/
///////////////////////////////////

//Import the required classes
ReadWirte = require("./ReadWrite");
Queries = require("./Queries");

//Construct objects from the classes
readWrite = new ReadWirte();
Queries = new Queries();

///////////////////////////////////
/*
    Test #1
*/
///////////////////////////////////

console.log("////////////////////////////////////////");
console.log("////////////// Test #1 /////////////////");
console.log("////////////////////////////////////////");
//Read Topology and write it in the memory
readWrite.ReadJSON("topology1.json");

//Write a specific topology from memory to JSON file
readWrite.WriteJSON("newTopology1.json", "top1");

//Query about which topologies are currently in the memory
Queries.GetAllTopologies();

//Query about which devices are in a given topology
Queries.GetAllDevices("top1");

//Query about which devices are connected to a given netlist node in a given topology
Queries.GetAllDevicesConnectedToNode("top1", "n1");

//Delete a given topology from memory
Queries.DeleteTopology("top1");

///////////////////////////////////
/*
    Test #2
*/
///////////////////////////////////

console.log("////////////////////////////////////////");
console.log("////////////// Test #2 /////////////////");
console.log("////////////////////////////////////////");

//Read Topology and write it in the memory
readWrite.ReadJSON("topology1.json");
readWrite.ReadJSON("topology2.json");

//Write a specific topology from memory to JSON file
readWrite.WriteJSON("newTopology2.json", "top2");

//Query about which topologies are currently in the memory
Queries.GetAllTopologies();

//Query about which devices are in a given topology
Queries.GetAllDevices("top2");

//Query about which devices are connected to a given netlist node in a given topology
Queries.GetAllDevicesConnectedToNode("top2", "n2");

//Delete a given topology from memory
Queries.DeleteTopology("top2");
