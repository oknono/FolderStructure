import { useState } from "react";
import {
  addNode as addNodeToStructure,
  deleteNodeById,
  updateNodeById,
} from "./helper/helpers";
import FolderStructure from "./FolderStructure";
import type { NodeModel } from "./types";
import "./App.css";
import JSONViewer from "./JSONViewer";

function App() {
  const [nodes, setNodes] = useState<NodeModel[]>([]);

  function addRootFolder() {
    const id = String(Date.now()); //TODO: okay for now, replace with more robust solution
    const newFolder: NodeModel = { type: "folder", id: id };
    const newNodes = addNodeToStructure(nodes, newFolder);
    setNodes(newNodes);
  }

  function addNode(newNode: NodeModel, parentNodeId: string): void {
    const newNodes = addNodeToStructure(nodes, newNode, parentNodeId);
    setNodes(newNodes);
  }

  function deleteNode(id: string): void {
    const filteredNodes = deleteNodeById(nodes, id);
    setNodes(filteredNodes);
  }

  // TODO: Must be more efficient way
  function updateNode<K extends keyof NodeModel>(
    nodeId: string,
    property: K,
    value: NodeModel[K]
  ): void {
    const updatedNodes = updateNodeById(nodes, nodeId, property, value);
    setNodes(updatedNodes);
  }

  return (
    <>
      <header>
        <h1>Folder Structure Maker</h1>
      </header>
      {/* TODO: Move into own component? Add proper layout */}
      <div className="folder-maker-container">
        <button onClick={addRootFolder}>Add folder to Root</button>
        <FolderStructure
          nodes={nodes}
          deleteNode={deleteNode}
          addNode={addNode}
          updateNode={updateNode}
        />
        <JSONViewer data={nodes} />
      </div>
    </>
  );
}

export default App;
