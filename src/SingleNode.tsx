import { useState } from "react";
import type { NodeModel } from "./types";
import "./SingleNode.css";

interface NodeProps {
  node: NodeModel;
  deleteNode: (id: string) => void;
  addNode: (node: NodeModel, id: string) => void;
}

export default function SingleNode({ node, deleteNode, addNode }: NodeProps) {
  const [canEdit, setCanEdit] = useState(node.name === undefined);
  const [name, setName] = useState(node.name || "");

  function validateNode() {
    setCanEdit(false);
    if (name.trim() === "") {
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

  if (node.type === "unset") {
    return (
      <>
        <button>File</button>
        <button>Folder</button>
      </>
    );
  }
  if (node.type === "folder" || node.type === "file") {
    return (
      <>
        {node.type === "folder" ? (
          <span className="folder-icon" aria-label="Folder" role="img" />
        ) : (
          <span className="file-icon" aria-label="File" role="img" />
        )}

        {canEdit ? (
          <>
            <input
              type="text"
              placeholder={
                node.type === "folder"
                  ? "Enter Folder Name..."
                  : "Enter File Name..."
              }
              autoFocus
              value={name}
              onChange={updateName}
            ></input>
            <button
              className="inline-button"
              onClick={() => deleteNode(node.id)}
            >
              Cancel
            </button>
            <button className="inline-button" onClick={validateNode}>
              Save
            </button>
          </>
        ) : (
          <>
            <span>{name}</span>
            {node.type === "folder" && (
              <button className="inline-button" onClick={createNewNode}>
                Add Child
              </button>
            )}
          </>
        )}
      </>
    );
  }
}
