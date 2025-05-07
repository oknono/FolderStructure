export type NodeType = "folder" | "file" | "unset" | null;

export interface NodeModel {
  id: string;
  type: NodeType;
  name?: string;
  children?: NodeModel[];
}
