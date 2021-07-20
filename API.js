/////////////////////////////////////////////////////////////////////////////////////
/*
    Class To execute all queries (Get topoloies, Delete topology, get devices)
*/
/////////////////////////////////////////////////////////////////////////////////////

//Import the required classes
ReadWirte = require ('./ReadWrite');
Queries = require ('./Queries');

//Construct objects from the classes
readWrite = new ReadWirte();
Queries = new Queries();

Queries.GetAllDevicesConnectedToNode("top1","n1");
