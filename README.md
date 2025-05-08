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

## Screenshots

1. Using existing data ( Small bug: bottom item will seem like it can be edited)
2. Building up structure from scratch
   <img width="400" alt="Screenshot 2025-05-07 at 5 38 15 PM" src="https://github.com/user-attachments/assets/93ff241f-7388-415b-829b-eebb44341fed" />
   <img width="400" alt="Screenshot 2025-05-07 at 5 42 41 PM" src="https://github.com/user-attachments/assets/d62e1f7f-af15-4902-835b-91a25090cbd9" />

## Notes

- This work represents what I can do in an afternoon. I would have loved to do more, and would prioritize better test coverage in a production environment

## Assumptions

- Assumption that data is correct, so the code isn't very defensive
- Considered any performance optimization as out of scope
- In production environment I'd use a third party library for ids

## Testing Approach

Completed:

- Basic structure tests verifying proper DOM hierarchy
- Initial tests for different node types

In progress:

- Extracting node manipulation functions to testable helper modules
- Expanding node type rendering tests

Next steps (with more time):

- End-to-end tests for the full application flow (building structures, naming, removing nodes)
- Comprehensive tests for renaming functionality (which I would refactor using TDD principles)

## Requirements

- [x] User can add Root Folder to tree with "Add root folder" button
- [x] User can name newly created node
- [x] Validation on new item - if name is blank it will be deleted
- [ ] (Skipped) Remove newly added Node by pressing on "Cancel" button during naming. My current implementation uses an blur event to trigger validation, would need a new solution and some design feedback to make this work
- [ ] (In Progress) User can add node as child to folder by clicking on button that shows on hover. Currently we show buttons all the time (they need to be visually hidden to be available to screenreaders), and clicking button just prints something to the console
- [ ] (To Do) When clicking on "Add Child" button user should be able to choose generating a Folder or a File item by choosing the corresponding button
- [ ] (To Do) User should be able to delete any button
- [ ] (To Do) Show JSON structure on page
- [x] Use supplied datamodel. Since I decided to go with React instead of Angular I used the data model as a interface
