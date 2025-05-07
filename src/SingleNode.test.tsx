import { render, screen } from "@testing-library/react";
import SingleNode from "./SingleNode";
import type { NodeModel } from "./types";

// TODO: Look at mocking patterns

describe("SingleNode Component", () => {
  describe("Folder node component", () => {
    it("should render a folder node with folder icon", () => {
      const folderNode: NodeModel = {
        id: "123",
        type: "folder",
      };

      render(
        <SingleNode
          node={folderNode}
          deleteNode={() => {}}
          addNode={() => {}}
        />
      );

      const folderIcon = screen.getByRole("img", { name: "Folder" });
      expect(folderIcon).toBeInTheDocument();
    });
    // TODO: Add test for checking naming behaviour
    // TODO: Add test for checking for `Add Child` button after naming Node
  });
  describe("File node component", () => {
    it("should render a file node with file icon", () => {
      const fileNode: NodeModel = {
        id: "123",
        type: "file",
      };

      render(
        <SingleNode node={fileNode} deleteNode={() => {}} addNode={() => {}} />
      );

      const fileIcon = screen.getByRole("img", { name: "File" });
      expect(fileIcon).toBeInTheDocument();
    });
  });
  describe("Unset node component", () => {
    it("should render a file node with file icon", () => {
      const fileNode: NodeModel = {
        id: "123",
        type: "unset",
      };

      render(
        <SingleNode node={fileNode} deleteNode={() => {}} addNode={() => {}} />
      );

      const fileButton = screen.getByRole("button", { name: "File" });
      const folderButton = screen.getByRole("button", { name: "File" });
      expect(fileButton).toBeInTheDocument();
      expect(folderButton).toBeInTheDocument();
    });
  });
});
