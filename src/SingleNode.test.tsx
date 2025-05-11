import { render, screen } from "@testing-library/react";
import SingleNode from "./SingleNode";
import type { NodeModel } from "./types";

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
    it("should render a input component when name is undefined", () => {
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
      const inputElement = screen.getByPlaceholderText("Enter Folder Name...");
      expect(inputElement).toBeInTheDocument();
      const cancelButton = screen.getByRole("button", { name: "Cancel" });
      const saveButton = screen.getByRole("button", { name: "Save" });
      expect(cancelButton).toBeInTheDocument();
      expect(saveButton).toBeInTheDocument();
    });
    describe("File node component", () => {
      it("should render a file node with file icon", () => {
        const fileNode: NodeModel = {
          id: "123",
          type: "file",
        };

        render(
          <SingleNode
            node={fileNode}
            deleteNode={() => {}}
            addNode={() => {}}
          />
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
          <SingleNode
            node={fileNode}
            deleteNode={() => {}}
            addNode={() => {}}
          />
        );

        const fileButton = screen.getByRole("button", { name: "File" });
        const folderButton = screen.getByRole("button", { name: "File" });
        expect(fileButton).toBeInTheDocument();
        expect(folderButton).toBeInTheDocument();
      });
      it("should render a input component when name is undefined", () => {
        const folderNode: NodeModel = {
          id: "123",
          type: "file",
        };

        render(
          <SingleNode
            node={folderNode}
            deleteNode={() => {}}
            addNode={() => {}}
          />
        );
        const inputElement = screen.getByPlaceholderText("Enter File Name...");
        expect(inputElement).toBeInTheDocument();
      });
    });
  });
});
