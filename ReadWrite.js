////////////////////////////////////////////////////////////////////////
/*
    Class To handle reading and writing between json files and memory.
*/
////////////////////////////////////////////////////////////////////////

var fs = require("fs"); //Library to deal with files

class ReadWrite {
  //Read Topology and write it in the memory
  ReadJSON(filename) {
    var NewTopology = JSON.parse(fs.readFileSync(filename, "utf8"));
    var Memory = JSON.parse(fs.readFileSync("memory.json", "utf8"));
    Memory.push(NewTopology);
    fs.writeFileSync(
      "memory.json",
      JSON.stringify(Memory, null, "\t"),
      "utf-8"
    );
  }

  //Write a specific topology from memory to JSON file
  WriteJSON(filename, TopologyID) {
    var Memory = JSON.parse(fs.readFileSync("memory.json", "utf8"));
    var Topology;
    for (let top = 0; top < Memory.length; top++) {
      if (Memory[top]["id"] == TopologyID) {
        Topology = Memory[top];
        break;
      }
    }
    fs.writeFileSync(
      filename,
      JSON.stringify(Topology, null, "\t"),
      "utf-8"
    );
  }
}

module.exports = ReadWrite;
