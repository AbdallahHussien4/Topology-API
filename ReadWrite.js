////////////////////////////////////////////////////////////////////////
/*
    Class To handle reading and writing between json files and memory.
*/
////////////////////////////////////////////////////////////////////////


var fs = require('fs');  //Library to deal with files

class ReadWrite
{
    ReadJSON(filename)
    {
        var NewTopology = JSON.parse(fs.readFileSync(filename, 'utf8'));
        var Memory = JSON.parse(fs.readFileSync('memory.json', 'utf8'));
        Memory.push(NewTopology);
        fs.writeFileSync("memory.json",JSON.stringify(Memory),"utf-8");
    }

    WriteJSON(filename,TopologyID)
    {
        var Memory = JSON.parse(fs.readFileSync('memory.json', 'utf8'));
        var Topology;
        for (let top = 0; top< Memory.length;top++)
        {
            if(Memory[top]['id'] == TopologyID)
                {
                    Topology = Memory[top];
                    break;
                } 
        }
        fs.writeFileSync("newTopology.json",JSON.stringify(Topology),"utf-8");
    }
}

module.exports = ReadWrite;
