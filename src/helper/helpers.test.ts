import type { NodeModel } from "../types";
import { addNode, deleteNodeById } from "./helpers";

describe("Helper Functions: manipulate NodeModel", () => {
  describe("removeNodeById", () => {
    it("should return an empty array when structure is empty", () => {
      const emptyStructure: NodeModel[] = [];
      const newStructure = deleteNodeById(emptyStructure, "some_id");
      expect(newStructure).toHaveLength(0);
    });
    it("should remove top level node", () => {
      const idToRemove = "test_id";
      const simpleStructure: NodeModel[] = [
        {
          type: "folder",
          name: "my_first_folder",
          id: idToRemove,
          children: [],
        },
      ];
      const newStructure = deleteNodeById(simpleStructure, idToRemove);
      expect(newStructure).toHaveLength(0);
    });
    it("should remove nested node", () => {
      const idToRemove = "test_id";
      const nestedStructure: NodeModel[] = [
        {
          type: "folder",
          name: "my_first_folder",
          id: "id_1",
          children: [
            {
              type: "folder",
              name: "my_second_folder",
              id: "id_4",
              children: [
                {
                  type: "folder",
                  name: "another_folder",
                  id: "id_6",
                  children: [],
                },
                {
                  type: "file",
                  name: "another_folder",
                  id: idToRemove,
                },
              ],
            },
          ],
        },
        {
          type: "file",
          name: "some_file",
          id: "id_2",
        },
      ];
      expect(nestedStructure).toHaveLength(2);
      // TODO: Figure out more readable way
      expect(nestedStructure[0]?.children?.[0]?.children).toHaveLength(2);
      const newStructure = deleteNodeById(nestedStructure, idToRemove);
      expect(newStructure).toHaveLength(2);
      expect(newStructure[0]?.children?.[0]?.children).toHaveLength(1);
    });
    it("should return an same structure if id doesn't match any node", () => {
      const idToRemove = "nonExistingId";
      const testStructure: NodeModel[] = [
        {
          type: "folder",
          name: "my_first_folder",
          id: "id_1",
          children: [
            {
              type: "folder",
              name: "my_second_folder",
              id: "id_4",
              children: [],
            },
          ],
        },
        {
          type: "file",
          name: "some_file",
          id: "id_2",
        },
      ];
      const newStructure = deleteNodeById(testStructure, idToRemove);
      expect(newStructure).toHaveLength(2);
      expect(newStructure[0]?.children).toHaveLength(1);
    });
  });
  describe("addNode", () => {
    it("should add node to root if no id param is passed", () => {
      const emptyStructure: NodeModel[] = [];
      const newNode: NodeModel = { id: "1", type: "folder" };
      const newStructure = addNode(emptyStructure, newNode);
      expect(newStructure).toHaveLength(1);
    });
    it("should add node to end of root array if no id param is passed", () => {
      const simpleStructure: NodeModel[] = [
        {
          type: "folder",
          name: "my_first_folder",
          id: "1",
          children: [],
        },
      ];
      const newNode: NodeModel = { id: "2", type: "folder" };
      const newStructure = addNode(simpleStructure, newNode);
      expect(newStructure).toHaveLength(2);
      expect(newStructure[1].id).toBe("2");
    });
    it("should add node to children array of folder node with id passed", () => {
      const newNode: NodeModel = { id: "4", type: "folder" };
      const nestedStructure: NodeModel[] = [
        {
          type: "folder",
          name: "my_first_folder",
          id: "1",
          children: [
            {
              type: "folder",
              name: "my_second_folder",
              id: "2",
              children: [
                {
                  type: "folder",
                  name: "another_folder",
                  id: "3",
                  children: [],
                },
              ],
            },
          ],
        },
      ];
      const newStructure = addNode(nestedStructure, newNode, "2");
      expect(newStructure[0]?.children?.[0]?.children).toHaveLength(2);
      expect(newStructure[0]?.children?.[0]?.children?.[1].id).toBe("4");
    });
    it("should not add node to to non-folder node", () => {
      const newNode: NodeModel = { id: "4", type: "folder" };
      const nestedStructure: NodeModel[] = [
        {
          type: "folder",
          name: "my_first_folder",
          id: "1",
          children: [
            {
              type: "file",
              name: "my_second_folder",
              id: "2",
            },
          ],
        },
      ];
      const newStructure = addNode(nestedStructure, newNode, "2");
      expect(newStructure[0].children).toHaveLength(1);
      expect(newStructure[0].children?.[0]).not.toHaveProperty("children");
    });
  });
});
