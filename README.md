This React App was created with vite. To run the code:

1. Install the dependencies

```
npm install
```

2. Start the dev server

```
 npm run dev
```
Screenshots
1. Using existing data ( Small bug: bottom item will seem like it can be edited)
2. Building up structure from scratch
<img width="400" alt="Screenshot 2025-05-07 at 5 38 15 PM" src="https://github.com/user-attachments/assets/93ff241f-7388-415b-829b-eebb44341fed" />
<img width="400" alt="Screenshot 2025-05-07 at 5 42 41 PM" src="https://github.com/user-attachments/assets/d62e1f7f-af15-4902-835b-91a25090cbd9" />

Assumptions / Considerations
- There are no tests in this repo. I would add tests ( or start with tests!) in a "real" environment, but here I went with the "no third party library" rule. I think that was probably a mistake and I should have checked.
- Assumption that data is correct, so no error checking, and without tests harder to check for edge cases. Again, would probably make a bit more robust if I would re-do the assignment 
- Using timestamps as Ids. In the "real world" I would use a third party library
- I didn't do as much as I hoped to do, but I think it's representative of what I can do in an afternoon

Requirements
- [X] User can add Root Folder to tree with "Add root folder" button
- [X] User can name newly created node
- [X] Validation on new item - if name is blank it will be deleted
- [ ]  (Skipped) Remove newly added Node by pressing on "Cancel" button during naming. My current implementation uses an blur event to trigger validation, would need a new solution and some design feedback to make this work
- [ ] (In Progress) User can add node as child to folder by clicking on button that shows on hover. Currently we show buttons ( they need to be visually hidden to be available to screenreaders, and clicking button just prints something to the console
- [ ] (To Do) When clicking on "Add Child" button user should be able to choose generating a Folder or a File item by choosing the corresponding button
- [ ] (To Do) User should be able to delete any button
- [ ] (To Do) Show JSON structure on page
- [X] Use supplied datamodel. Since I decided to go with React instead of Angular I used the data model as a interface 
