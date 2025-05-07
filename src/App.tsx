import { useState } from "react";
import FolderStructure from "./FolderStructure";
import type { NodeModel } from "./types";
import "./App.css";
import { deleteNodeById } from "./helper/helpers";

function App() {
  const [nodes, setNodes] = useState<NodeModel[]>([]);

  function addRootFolder() {
    const id = String(Date.now()); //TODO: okay for now, replace with more robust solution
    const newFolder: NodeModel = { type: "folder", id: id };
    setNodes((prev) => [...prev, newFolder]);
  }

  function addNode(newNode: NodeModel, parentNodeId: string): void {
    // TO IMPLEMENT
    console.log(
      `Adding new Node with id ${newNode.id} as child to ${parentNodeId}`
    );
  }

  function deleteNode(id: string): void {
    const filteredNodes = deleteNodeById(nodes, id);
    setNodes(filteredNodes);
  }

  return (
    <>
      <header>
        <h1>Folder Structure Maker</h1>
      </header>
      <div className="folder-maker-container">
        <button onClick={addRootFolder}>Add folder to Root</button>
        <FolderStructure
          nodes={nodes}
          deleteNode={deleteNode}
          addNode={addNode}
        />
      </div>
    </>
  );
}

export default App;
