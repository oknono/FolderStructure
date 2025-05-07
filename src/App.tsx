import { useState } from "react";
import "./App.css";
import FolderStructure from "./FolderStructure";
import type { NodeModel } from "./types";

function App() {
  const [nodes, setNodes] = useState<NodeModel[]>([]);

  function addRootFolder() {
    const id = String(Date.now()); //TODO: okay for now, replace with more robust solution
    const newFolder: NodeModel = { type: "folder", id: id };
    setNodes((prev) => [...prev, newFolder]);
  }

  function deleteNode(id: string): void {
    // TODO: Make recursive for non-top level
    const filteredParentNodes = nodes.filter((node) => node.id !== id);
    setNodes(filteredParentNodes);
  }

  return (
    <>
      <header>
        <h1>Folder Structure Maker</h1>
      </header>
      <div className="folder-maker-container">
        <button onClick={addRootFolder}>Add folder to Root</button>
        <FolderStructure nodes={nodes} deleteNode={deleteNode} />
      </div>
    </>
  );
}

export default App;
