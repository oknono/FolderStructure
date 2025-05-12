# README

## Getting up and running

This React App was created with vite. To run the code:

1. Install the dependencies

```
npm install
```

2. Start the dev server (on localhost 5173)

```
 npm run dev
```

3. Run tests with

```
npm run test
```

or

```
npm run test:watch
```

## Assumptions

- Assumption that data is correct, so the code isn't very defensive
- Considered any performance optimization as out of scope
- In production environment I'd use a third party library for ids

## Requirements

- [x] User can add Root Folder to tree with "Add root folder" button
- [x] User can name newly created node
- [x] Validation on new item - if name is blank it will be deleted
- [x] Remove newly added Node by pressing on "Cancel" button during naming.
- [x] User can add node as child to folder by clicking on button that shows on hover. Currently shows all the day (make sure that is keyboard accessible, will get to it if enough time)
- [x] When clicking on "Add Child" button user should be able to choose generating a Folder or a File item by choosing the corresponding button
- [x] User should be able to delete any button
- [x] Show JSON structure on page
- [x] Use supplied datamodel. Since I decided to go with React instead of Angular I used the data model as a interface

## To Do

- A folder node should always have children property; and is the only node type that should have this property. Add stricter typechecking
- Optimize performance
  - Minimize re-renders where reasonable
    - Wrap callbacks with useCallback and update state based on previous state to remove all dependencies
    - ? UseMemo for Nodes ?
    - Find better ways to update nodes, without potentially traversing the entire tree
- Styling:
  - nested list markup
  - make hidden buttons keyboard accessuble
  - layout for folder structure and JSON viewer
- Add more testing, especially intergration at `<App />` component level
- Investigate better ways to work with models in React

## Screenshots

<img width="817" alt="Screenshot 2025-05-11 at 5 16 42 PM" src="https://github.com/user-attachments/assets/a1cbad53-7601-4570-81a4-6d857b9d1964" />
<img width="782" alt="Screenshot 2025-05-11 at 5 17 24 PM" src="https://github.com/user-attachments/assets/55134a89-52ce-4ee7-883f-d81b164c8731" />
<img width="766" alt="Screenshot 2025-05-11 at 5 17 35 PM" src="https://github.com/user-attachments/assets/683079ea-ac31-4039-bb56-6fcb66e06352" />
