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

//Read Topology and write it in the memory
readWrite.ReadJSON("topology.json");

//Write a specific topology from memory to JSON file
readWrite.WriteJSON("newTopology.json", "top1");

//Query about which topologies are currently in the memory
Queries.GetAllTopologies();

//Query about which devices are in a given topology
Queries.GetAllDevices("top1");

//Query about which devices are connected to a given netlist node in a given topology
Queries.GetAllDevicesConnectedToNode("top1", "n1");

//Delete a given topology from memory
Queries.DeleteTopology("top1");
