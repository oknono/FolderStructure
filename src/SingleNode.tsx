import { useState } from "react";
import type { NodeModel } from "./types";
import "./SingleNode.css";

interface NodeProps {
  node: NodeModel;
}

export default function SingleNode({ node }: NodeProps) {
  const [canEdit, setCanEdit] = useState(true);
  const [name, setName] = useState(node.name || "");

  function validateNode() {
    setCanEdit(false);
    if (name === "") {
      setName("DELETE");
    }
  }
  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <li className="node-item">
      <span className="folder-icon" aria-label="Folder" role="img" />
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
        <span>{name}</span>
      )}
    </li>
  );
}
