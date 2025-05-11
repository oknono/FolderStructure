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
- [ ] (To Do) When clicking on "Add Child" button user should be able to choose generating a Folder or a File item by choosing the corresponding button
- [ ] (To Do) User should be able to delete any button
- [ ] (To Do) Show JSON structure on page
- [x] Use supplied datamodel. Since I decided to go with React instead of Angular I used the data model as a interface
