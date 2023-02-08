# React Lifing State Lab

Edit multiple JavaScript files in this lab to refactor this app to have multiple components that function as expected.

---

## Lab Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

```
npm install
```

This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will open the Cypress testing window, where you can click to run an individual suite of tests or all of the tests at once.

#### Testing Tips

Keep the following in mind for this lab as you run the tests.

1. The application mockups below are a design reference for if you have time. The main purpose of this lab is to connect all the components and get the tests to pass.

1. While running your tests, you must have a server up and running in another terminal. This means you will have _both_ a terminal window running the actual React application _and_ a terminal window running the tests.

1. When creating a component, make sure to create and import it with the same name as the file name. For example, the component created and exported inside of the `Post.js` file should be `Post`. The tests look for these specific names.

1. While the `cypress-watch-and-reload` package has been installed in this project, sometimes the React application will take longer to reload than the tests. If you feel as though a test should be passing that isn't, try pressing the re-run button in the Cypress tests before asking for help.

## Instructions

You have a fully funtional app. It can:

- Show a list of events
- Create a new event through a form that gets added to the list of events
- Toggles the attendance of any attendee per event
- Toggles show/hide attendee list\*

> **Note:** In the app's present state, when you toggle show/hide attendees it toggles show/hide for all events. Your job will be to create components with their own state so that only the event that is selected has its attendees view toggled to fix this bug (pass the final Cypress test).

You should move the JSX into the correct components:

- [] **Header**. `header` is top level HTML element.
- [] **Footer**. `footer` is top level HTML element.
- [✅] **NewEventForm**. `form` is top level HTML element.
- [✅] **Event**. `li` with className `event` is the top level HTML element.
- [✅] **Attendees**. `button` with text `Show/Hide Attendees` and `div` with className `attendees` are the top level HTML elements.
- [✅] **Attendee**. `div` with className `attendee` is the top level HTML element.

You should maintain the same HTML element heiarchy (you should not need to add or edit HTML elements), however, you will need to move the HTML elements into different components. The filenames and functional component shells are already included in the starter code.

You must pass props down, add state to some of the new components, and lift state in other places to maintain functionality and fix the bug in the app.

![App demo](./ezgif.com-app-demo.gif)
