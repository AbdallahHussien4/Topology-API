/////////////////////////////////////////////////////////////////////////////////////
/*
    Class To execute all queries (Get topoloies, Delete topology, get devices)
*/
/////////////////////////////////////////////////////////////////////////////////////


var fs = require('fs');  //Library to deal with files

class Queries
{
    GetAllTopologies()
    {
        var Memory = JSON.parse(fs.readFileSync('memory.json', 'utf8'));
        console.log("The topologies in memory are :");
        for (let top = 0; top< Memory.length;top++)
        {
            console.log(Memory[top]['id']);
        }
    }

    DeleteTopology(TopologyID)
    {
        var Memory = JSON.parse(fs.readFileSync('memory.json', 'utf8'));
        for (let top = 0; top< Memory.length;top++)
        {
            if(Memory[top]['id'] == TopologyID)
                {
                    Memory = Memory.filter((top) => { return top.id != TopologyID });
                } 
        }
        fs.writeFileSync("memory.json",JSON.stringify(Memory),"utf-8");
    }

    GetAllDevices(TopologyID)
    {
        var Memory = JSON.parse(fs.readFileSync('memory.json', 'utf8'));
        console.log("The devices in "+TopologyID +" are :");
        for (let top = 0; top< Memory.length;top++)
        {
            if(Memory[top]['id'] == TopologyID)
            {
                for (let device = 0; device< Memory[top]["components"].length;device++)
                {
                    console.log(Memory[top]["components"][device]["id"]);
                }
                break;
            } 
        }
    }

    GetAllDevicesConnectedToNode(TopologyID,Node)
    {
        var Memory = JSON.parse(fs.readFileSync('memory.json', 'utf8'));
        console.log("The devices connected to "+ Node +" are :");
        for (let top = 0; top< Memory.length;top++)
        {
            if(Memory[top]['id'] == TopologyID)
            {
                for (let device = 0; device< Memory[top]["components"].length;device++)
                {
                    for (let node in Memory[top]["components"][device]["netlist"])
                    {
                        if(Memory[top]["components"][device]["netlist"][node] == Node)
                        {
                            console.log(Memory[top]["components"][device]["id"]);
                            break;
                        }
                    }
                }
            } 
        }
    }
}

module.exports = Queries;
