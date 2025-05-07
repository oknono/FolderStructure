// TODO: Add a FileNode and a FolderNode?

export interface NodeModel {
  id: string;
  type: NodeType;
  name?: string;
  children?: NodeModel[];
}

export type NodeType = "folder" | "file" | "unset" | null;
