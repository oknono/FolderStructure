import { useState } from "react";
import type { NodeModel } from "./types";
import "./SingleNode.css";

interface NodeProps {
  node: NodeModel;
  deleteNode: (id: string) => void;
  addNode: (node: NodeModel, id: string) => void;
}

export default function SingleNode({ node, deleteNode, addNode }: NodeProps) {
  const [canEdit, setCanEdit] = useState(true);
  const [name, setName] = useState(node.name || "");

  function validateNode() {
    setCanEdit(false);
    if (name === "") {
      deleteNode(node.id);
    }
  }
  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function createNewNode() {
    const newNode: NodeModel = { id: String(Date.now()), type: "unset" };
    addNode(newNode, node.id);
  }

  // TODO: Refactor for different node types - probably extract into different components
  if (node.type === "unset") {
    return (
      <li className="node-item">
        <button>File</button>
        <button>Folder</button>
      </li>
    );
  }

  return (
    <li className="node-item">
      {node.type === "folder" ? (
        <span className="folder-icon" aria-label="Folder" role="img" />
      ) : (
        <span className="file-icon" aria-label="File" role="img" />
      )}

      {canEdit ? (
        <input
          type="text"
          placeholder="Enter Name..."
          autoFocus
          value={name}
          onChange={updateName}
          onBlur={validateNode}
        ></input>
      ) : (
        <>
          <span>{name}</span>
          {node.type === "folder" && (
            <button className="inline" onClick={createNewNode}>
              Add Child
            </button>
          )}
        </>
      )}
    </li>
  );
}
