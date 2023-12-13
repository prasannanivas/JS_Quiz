[
  {
    question:
      "Q1. If you want to import just the Component from the React library, what syntax do you use?",
    code: null,
    options: [
      "import React.Component from 'react'",
      "import [ Component ] from 'react'",
      "import Component from 'react'",
      "import { Component } from 'react'",
    ],
    answer: "import React, { Component } from 'react'",
    explanation:
      "To import just the `Component` from the React library, you use the syntax 'import React, { Component } from 'react'.",
  },
  {
    question:
      "Q2. If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
    code: null,
    options: [
      "Wrap it in the React.memo higher-order component.",
      "Implement the useReducer Hook.",
      "Implement the useMemo Hook.",
      "Implement the shouldComponentUpdate lifecycle method.",
    ],
    answer: "Wrap it in the React.memo higher-order component.",
    explanation:
      "To optimize the rendering performance of a function component that should always render the same way given the same props, you can wrap it in the `React.memo` higher-order component.",
  },
  {
    question:
      "Q3. How do you fix the syntax error that results from running this code?",
    code: 'const person =(firstName, lastName) => {\n  first: firstName,\n  last: lastName\n}\nconsole.log(person("Jill", "Wilson"))',
    options: [
      "Wrap the object in parentheses.",
      "Call the function from another file.",
      "Add a return statement before the first curly brace.",
      "Replace the object with an array.",
    ],
    answer: "Wrap the object in parentheses.",
    explanation:
      'To fix the syntax error, you need to wrap the object in parentheses. The corrected code should look like this:\n\nconst person = (firstName, lastName) => ({\n  first: firstName,\n  last: lastName\n});\nconsole.log(person("Jill", "Wilson"));',
  },
  {
    question:
      "Q4. If you see the following import in a file, what is being used for state management in the component?",
    code: "import React, { useState } from 'react';",
    options: ["React Hooks", "Stateful components", "Math", "Class components"],
    answer: "React Hooks",
    explanation:
      "The import statement 'import React, { useState } from 'react';' indicates that React Hooks, specifically the `useState` hook, is being used for state management in the component.",
  },
  {
    question:
      "Q5. Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?",
    code: "const name = 'Rachel';\nconst age = 31;\nconst person = { name, age };\nconsole.log(person);",
    options: [
      "{{name: 'Rachel', age: 31}}",
      "{name: 'Rachel', age: 31}",
      "{person: 'Rachel', person: 31}",
      "{person: {name: 'Rachel', age: 31}}",
    ],
    answer: "{name: 'Rachel', age: 31}",
    explanation:
      "Using object literal enhancement, the output of the code will be '{name: 'Rachel', age: 31}'.",
  },
  {
    question:
      "Q6. What is the testing library most often associated with React?",
    code: null,
    options: ["Mocha", "Chai", "Sinon", "Jest"],
    answer: "Jest",
    explanation:
      "Jest is the testing library most often associated with React.",
  },
  {
    question:
      "Q7. To get the first item from the array ('cooking') using array destructuring, how do you adjust this line?",
    code: "const topics = ['cooking', 'art', 'history'];",
    options: [
      "const first = ['cooking', 'art', 'history']",
      "const [] = ['cooking', 'art', 'history']",
      "const [, first] = ['cooking', 'art', 'history']",
      "const [first] = ['cooking', 'art', 'history']",
    ],
    answer: "const [, first] = ['cooking', 'art', 'history']",
    explanation:
      "To get the first item from the array using array destructuring, you should adjust the line to 'const [, first] = ['cooking', 'art', 'history'];'.",
  },
  {
    question:
      "Q8. How do you handle passing through the component tree without having to pass props down manually at every level?",
    code: null,
    options: ["React Send", "React Pinpoint", "React Router", "React Context"],
    answer: "React Context",
    explanation:
      "To handle passing through the component tree without manually passing props at every level, you can use React Context.",
  },
  {
    question:
      "Q9. What should the console read when the following code is run?",
    code: "const [, , animal] = ['Horse', 'Mouse', 'Cat'];\nconsole.log(animal);",
    options: ["Horse", "Cat", "Mouse", "undefined"],
    answer: "Cat",
    explanation:
      "The code extracts the third element from the array, which is 'Cat', and logs it to the console.",
  },
  {
    question:
      "Q10. What is the name of the tool used to take JSX and turn it into createElement calls?",
    code: null,
    options: ["JSX Editor", "ReactDOM", "Browser Buddy", "Babel"],
    answer: "Babel",
    explanation:
      "Babel is the tool used to take JSX and turn it into createElement calls.",
  },
  {
    question:
      "Q11. Why might you use useReducer over useState in a React component?",
    code: null,
    options: [
      "When you want to replace Redux",
      "When you need to manage more complex state in an app",
      "When you want to improve performance",
      "When you want to break your production app",
    ],
    answer: "When you need to manage more complex state in an app",
    explanation:
      "useReducer is often preferred over useState when you need to manage more complex state in an app, such as state with intricate logic or dependencies.",
  },
  {
    question:
      "Q11. Why might you use useReducer over useState in a React component?",
    code: null,
    options: [
      "when you want to replace Redux",
      "when you need to manage more complex state in an app",
      "when you want to improve performance",
      "when you want to break your production app",
    ],
    answer: "when you need to manage more complex state in an app",
    explanation:
      "useReducer is preferred over useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.",
  },
  {
    question:
      "Q12. Which props from the props object is available to the component with the following syntax?",
    code: "<Message {...props} />",
    options: [
      "any that have not changed",
      "all of them",
      "child props",
      "any that have changed",
    ],
    answer: "any that have changed",
    explanation:
      "The {...props} syntax spreads all the props onto the Message component. Only the props that have changed will be passed down.",
  },
  {
    question:
      "Q13. Consider the following code from React Router. What do you call :id in the path prop?",
    code: "<Route path='/ :id' />",
    options: [
      "This is a route modal",
      "This is a route parameter",
      "This is a route splitter",
      "This is a route link",
    ],
    answer: "This is a route parameter",
    explanation:
      ":id in the path prop represents a route parameter in React Router, allowing dynamic values to be passed as part of the URL.",
  },
  {
    question:
      "Q14. If you created a component called Dish and rendered it to the DOM, what type of element would be rendered?",
    code: "function Dish() {\n  return <h1>Mac and Cheese</h1>;\n}\n\nReactDOM.render(<Dish />, document.getElementById('root'));",
    options: ["div", "section", "component", "h1"],
    answer: "h1",
    explanation:
      "The Dish component renders an h1 element with the text 'Mac and Cheese,' and it will be the element rendered to the DOM.",
  },
  {
    question:
      "Q15. What does this React element look like given the following code? (Alternative: Given the following code, what does this React element look like?)",
    code: "React.createElement('h1', null, \"What's happening?\");",
    options: [
      "<h1 props={null}>What's happening?</h1>",
      "<h1>What's happening?</h1>",
      '<h1 id="component">What\'s happening?</h1>',
      '<h1 id="element">What\'s happening?</h1>',
    ],
    answer: "<h1>What's happening?</h1>",
    explanation:
      "The React.createElement function creates a React element, and the provided JSX is equivalent to <h1>What's happening?</h1>.",
  },
  {
    question:
      "Q16. What property do you need to add to the Suspense component in order to display a spinner or loading state?",
    code: "function MyComponent() {\n  return (\n    <Suspense>\n      <div>\n        <Message />\n      </div>\n    </Suspense>\n  );\n}",
    options: ["lazy", "loading", "fallback", "spinner"],
    answer: "fallback",
    explanation:
      "The fallback property in the Suspense component is used to define what to display while waiting for the component to load.",
  },
  {
    question:
      "Q17. How would you describe the message variable wrapped in curly braces below?",
    code: "const message = 'Hi there';\nconst element = <p>{message}</p>;",
    options: [
      "a JS function",
      "a JS element",
      "a JS expression",
      "a JSX wrapper",
    ],
    answer: "a JS expression",
    explanation:
      "The message variable wrapped in curly braces inside JSX is a JavaScript expression, as it evaluates to the value of the variable.",
  },
  {
    question: "Q18. What can you use to handle code splitting?",
    code: null,
    options: ["React.memo", "React.split", "React.lazy", "React.fallback"],
    answer: "React.lazy",
    explanation:
      "React.lazy is used for code splitting, allowing you to load components lazily when they are actually needed in the application.",
  },
  {
    question: "Q19. When do you use useLayoutEffect?",
    code: null,
    options: [
      "to optimize for all devices",
      "to complete the update",
      "to change the layout of the screen",
      "when you need the browser to paint before the effect runs",
    ],
    answer: "to change the layout of the screen",
    explanation:
      "useLayoutEffect is used when you need to change the layout of the screen. It runs synchronously after all DOM mutations.",
  },
  {
    question:
      "Q20. What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is not bound correctly)?\nA. <button onClick=this.handleClick>Click Me</button>\nB. <button onClick={event => this.handleClick(event)}>Click Me</button>",
    code: null,
    options: [
      "Button A will not have access to the event object on click of the button",
      "Button A will not fire the handler this.handleClick successfully",
      "There is no difference",
      "Button B will not fire the handler this.handleClick successfully",
    ],
    answer:
      "Button A will not have access to the event object on click of the button",
    explanation:
      "In Button A, this.handleClick is not properly bound, so it will not have access to the event object when clicked.",
  },
  {
    question:
      "Q21. How do you destructure the properties that are sent to the Dish component?",
    code: "function Dish(props) {\n  return (\n    <h1>\n      {props.name} {props.cookingTime}\n    </h1>\n  );\n}",
    options: [
      "function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }",
      "function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }",
      "function Dish(props) { return <h1>{name} {cookingTime}</h1>; }",
      "function Dish(...props) { return <h1>{name} {cookingTime}</h1>; }",
    ],
    answer:
      "function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }",
    explanation:
      "Destructuring the properties directly in the function signature allows you to use them without referring to props.",
  },
  {
    question: "Q22. When might you use React.PureComponent?",
    code: null,
    options: [
      "when you do not want your component to have props",
      "when you have sibling components that need to be compared",
      "when you want a default implementation of shouldComponentUpdate()",
      "when you do not want your component to have state",
    ],
    answer: "when you have sibling components that need to be compared",
    explanation:
      "React.PureComponent is used when you want a component to perform a shallow comparison of props and state to determine whether to re-render.",
  },
  {
    question:
      "Q23. Why is it important to avoid copying the values of props into a component's state where possible?",
    code: null,
    options: [
      "because you should never mutate state",
      "because getDerivedStateFromProps() is an unsafe method to use",
      "because you want to allow a component to update in response to changes in the props",
      "because you want to allow data to flow back up to the parent",
    ],
    answer:
      "because you want to allow a component to update in response to changes in the props",
    explanation:
      "Copying values of props into state can lead to synchronization issues, and it's better to allow the component to update based on changes in props directly.",
  },
  {
    question: "Q24. What is the children prop?",
    code: null,
    options: [
      "a property that adds child components to state",
      "a special property that JSX creates on components that contain both an opening tag and a closing tag, referencing its contents.",
      "a property that lets you set an array as a property",
      "a property that lets you pass data to child elements",
    ],
    answer:
      "a special property that JSX creates on components that contain both an opening tag and a closing tag, referencing its contents.",
    explanation:
      "The children prop is a special prop provided by React that represents the content between the opening and closing tags of a component.",
  },
  {
    question:
      "Q25. Which attribute is React's replacement for using innerHTML in the browser DOM?",
    code: null,
    options: [
      "injectHTML",
      "dangerouslySetInnerHTML",
      "weirdSetInnerHTML",
      "strangeHTML",
    ],
    answer: "dangerouslySetInnerHTML",
    explanation:
      "The dangerouslySetInnerHTML attribute in React is used to set HTML directly from React. It is named 'dangerous' to remind developers to be cautious.",
  },
  {
    question: "Q26. Which of these terms commonly describe React applications?",
    code: null,
    options: ["declarative", "integrated", "closed", "imperative"],
    answer: "declarative",
    explanation:
      "React applications are commonly described as declarative. Declarative programming expresses the logic of a computation without describing its control flow.",
  },
  {
    question: "Q27. When using webpack, why would you need to use a loader?",
    code: null,
    options: [
      "to put together physical file folders",
      "to preprocess files",
      "to load external data",
      "to load the website into everyone's phone",
    ],
    answer: "to preprocess files",
    explanation:
      "In webpack, loaders are used to preprocess files before bundling. They transform files from a source format (like TypeScript) to a format webpack understands.",
  },
  {
    question:
      "Q28. A representation of a user interface that is kept in memory and is synced with the 'real' DOM is called what?",
    code: null,
    options: ["virtual DOM", "DOM", "virtual elements", "shadow DOM"],
    answer: "virtual DOM",
    explanation:
      "A representation of a user interface that is kept in memory and is synced with the 'real' DOM is called the virtual DOM.",
  },
  {
    question:
      "Q29. You have written the following code but nothing is rendering. How do you fix this problem?\nconst Heading = () => {\n  <h1>Hello!</h1>;\n};",
    code: null,
    options: [
      "Add a render function.",
      "Change the curly braces to parentheses or add a return statement before the h1 tag.",
      "Move the h1 to another component.",
      "Surround the h1 in a div.",
    ],
    answer:
      "Change the curly braces to parentheses or add a return statement before the h1 tag.",
    explanation:
      "The Heading component is missing a return statement or parentheses. It should be: `const Heading = () => (<h1>Hello!</h1>);` or `const Heading = () => { return <h1>Hello!</h1>; };`.",
  },
  {
    question:
      "Q30. To create a constant in JavaScript, which keyword do you use?",
    code: null,
    options: ["const", "let", "constant", "var"],
    answer: "const",
    explanation:
      "The `const` keyword is used to create a constant variable in JavaScript, which cannot be reassigned after declaration.",
  },
  {
    question:
      "Q31. What do you call a React component that catches JavaScript errors anywhere in the child component tree?",
    code: null,
    options: [
      "error bosses",
      "error catchers",
      "error helpers",
      "error boundaries",
    ],
    answer: "error boundaries",
    explanation:
      "A React component that catches JavaScript errors anywhere in the child component tree is known as an 'error boundary.'",
  },
  {
    question:
      "Q32. In which lifecycle method do you make requests for data in a class component?",
    code: null,
    options: [
      "constructor",
      "componentDidMount",
      "componentWillReceiveProps",
      "componentWillMount",
    ],
    answer: "componentDidMount",
    explanation:
      "In a class component, you typically make requests for data in the componentDidMount lifecycle method. This ensures that the request is made after the component has been mounted.",
  },
  {
    question:
      "Q33. React components are composed to create a user interface. How are components composed?",
    code: null,
    options: [
      "by putting them in the same file",
      "by nesting components",
      "with webpack",
      "with code splitting",
    ],
    answer: "by nesting components",
    explanation:
      "Components in React are composed by nesting them within each other. This allows you to build complex UIs by combining smaller, reusable components.",
  },
  {
    question:
      "Q34. All React components must act like _ with respect to their props.",
    code: null,
    options: [
      "monads",
      "pure functions",
      "recursive functions",
      "higher-order functions",
    ],
    answer: "pure functions",
    explanation:
      "All React components must act like pure functions with respect to their props. This means that given the same input (props), a component should always render the same output.",
  },
  {
    question: "Q35. What is [e.target.id] called in this code snippet?",
    code: "const handleChange = (e) => {\n  setState((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));\n};",
    options: [
      "a computed property name",
      "a set value",
      "a dynamic key",
      "a JSX code string",
    ],
    answer: "a computed property name",
    explanation:
      "[e.target.id] is called a computed property name in this code snippet. It allows you to use the value of e.target.id as the key for the new property in the object.",
  },
  {
    question: "Q36. What is the name of this component?",
    code: "class Clock extends React.Component {\n  render() {\n    return <h1>Look at the time: {time}</h1>;\n  }\n}",
    options: [
      "Clock",
      "It does not have a name prop.",
      "React.Component",
      "Component",
    ],
    answer: "Clock",
    explanation:
      "The name of this component is Clock, as defined by the class name. Components in React are named based on the class or function name.",
  },
  {
    question: "Q37. What is sent to an Array.map() function?",
    code: "a callback function that is called once for each element in the array\nthe name of another array to iterate over\nthe number of times you want to call the function\na string describing what the function should do",
    options: [
      "a callback function that is called once for each element in the array",
      "the name of another array to iterate over",
      "the number of times you want to call the function",
      "a string describing what the function should do",
    ],
    answer:
      "a callback function that is called once for each element in the array",
    explanation:
      "The Array.map() function is sent a callback function that is called once for each element in the array. This callback function defines the transformation to be applied to each element.",
  },
  {
    question:
      "Q38. Why is it a good idea to pass a function to setState instead of an object?",
    code: null,
    options: [
      "It provides better encapsulation.",
      "It makes sure that the object is not mutated.",
      "It automatically updates a component.",
      "setState is asynchronous and might result in out of sync values.",
    ],
    answer: "setState is asynchronous and might result in out of sync values.",
    explanation:
      "Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state. Passing a function to setState ensures you're working with the latest state.",
  },
  {
    question:
      "Q39. What package contains the render() function that renders a React element tree to the DOM?",
    code: null,
    options: ["React", "ReactDOM", "Render", "DOM"],
    answer: "ReactDOM",
    explanation:
      "The ReactDOM package contains the render() function that is responsible for rendering a React element tree to the DOM. This is the primary entry point for most React applications.",
  },
  {
    question:
      "Q40. How do you set a default value for an uncontrolled form field?",
    code: null,
    options: [
      "Use the value property.",
      "Use the defaultValue property.",
      "Use the default property.",
      "It assigns one automatically.",
    ],
    answer: "Use the defaultValue property.",
    explanation:
      "To set a default value for an uncontrolled form field, you use the defaultValue property. This value will be used initially but won't be updated by subsequent user input.",
  },
  {
    question:
      "Q41. What do you need to change about this code to get this code to run?",
    code: "const clock = (props) => {\n  return <h1>Look at the time: {props.time}</h1>;\n};",
    options: [
      "Add quotes around the return value",
      "Remove this",
      "Remove the render method",
      "Capitalize clock",
    ],
    answer: "Capitalize clock",
    explanation:
      "In JSX, lower-case tag names are considered to be HTML tags. To make it work, you should capitalize the component name 'clock'.",
  },
  {
    question: "Q42. Which Hook could be used to update the document's title?",
    code: "useEffect(function updateTitle() { document.title = name + ' ' + lastname; });",
    options: [
      "useEffect(() => { title = name + ' ' + lastname; });",
      "useEffect(function updateTitle() { name + ' ' + lastname; });",
      "useEffect(function updateTitle() { title = name + ' ' + lastname; });",
      "useEffect(function updateTitle() { title = name + ' ' + lastname; });",
    ],
    answer: "useEffect(() => { title = name + ' ' + lastname; });",
    explanation:
      "The correct way to update the document's title using useEffect is by assigning the new title within the function provided as the effect.",
  },
  {
    question:
      "Q43. Which function from React can you use to wrap Component imports to load them lazily?",
    code: null,
    options: ["fallback", "split", "lazy", "memo"],
    answer: "lazy",
    explanation:
      "The lazy function from React can be used to wrap Component imports and load them lazily, improving the performance of your application by only loading the component when it's needed.",
  },
  {
    question:
      "Q44. How do you invoke setDone only when component mounts, using hooks?",
    code: "function MyComponent(props) {\n  const [done, setDone] = useState(false);\n\n  return <h1>Done: {done}</h1>;\n}",
    options: [
      "useEffect(() => { setDone(true); });",
      "useEffect(() => { setDone(true); }, []);",
      "useEffect(() => { setDone(true); }, [setDone]);",
      "useEffect(() => { setDone(true); }, [done, setDone]);",
    ],
    answer: "useEffect(() => { setDone(true); }, []);",
    explanation:
      "To invoke setDone only when the component mounts, you can pass an empty dependency array [] as the second argument to useEffect. This ensures the effect runs only once after the initial render.",
  },
  {
    question:
      "Q45. Currently, handleClick is being called instead of passed as a reference. How do you fix this?",
    code: "<button onClick={this.handleClick()}>Click this</button>\n<button onClick={this.handleClick.bind(handleClick)}>Click this</button>\n<button onClick={handleClick()}>Click this</button>\n<button onClick={this.handleClick}>Click this</button>\n<button onclick={this.handleClick}>Click this</button>",
    options: [
      "button onClick={this.handleClick}>Click this</button>",
      "button onClick={this.handleClick.bind(handleClick)}>Click this</button>",
      "button onClick={handleClick()}>Click this</button>",
      "button onClick={this.handleClick}>Click this</button>",
      "button onclick={this.handleClick}>Click this</button>",
    ],
    answer: "button onClick={this.handleClick}>Click this</button>",
    explanation:
      "To pass handleClick as a reference rather than calling it immediately, you should use onClick={this.handleClick} without parentheses.",
  },
  {
    question: "Q46. Which answer best describes a function component?",
    code: null,
    options: [
      "A function component is the same as a class component.",
      "A function component accepts a single props object and returns a React element.",
      "A function component is the only way to create a component.",
      "A function component is required to create a React component.",
    ],
    answer:
      "A function component accepts a single props object and returns a React element.",
    explanation:
      "A function component in React is a JavaScript function that accepts a single 'props' object as its argument and returns a React element. It is a simple way to define a component, especially for components that don't need to manage state or lifecycle methods.",
  },
  {
    question: "Q47. Which library does the fetch() function come from?",
    code: null,
    options: [
      "FetchJS",
      "ReactDOM",
      "No library. fetch() is supported by most browsers.",
      "React",
    ],
    answer: "No library. fetch() is supported by most browsers.",
    explanation:
      "The 'fetch()' function is a part of the JavaScript language itself and is not specific to any library or framework. It is supported by most modern browsers and is used for making network requests.",
  },
  {
    question:
      "Q48. What will happen when this useEffect Hook is executed, assuming name is not already equal to John?",
    code: "useEffect(() => {\n  setName('John');\n}, [name]);",
    options: [
      "It will cause an error immediately.",
      "It will execute the code inside the function, but only after waiting to ensure that no other component is accessing the name variable.",
      "It will update the value of name once and not run again until name is changed from the outside.",
      "It will cause an infinite loop.",
    ],
    answer:
      "It will execute the code inside the function, but only after waiting to ensure that no other component is accessing the name variable.",
    explanation:
      "The useEffect Hook is triggered after the component has rendered, and it executes the code inside the function. However, it waits to ensure that no other component is currently accessing the 'name' variable before running again. This helps prevent unnecessary updates and potential infinite loops.",
  },
  {
    question: "Q49. Which choice will not cause a React component to rerender?",
    code: null,
    options: [
      "if the component calls this.setState(...)",
      "the value of one of the component's props changes",
      "if the component calls this.forceUpdate()",
      "one of the component's siblings rerenders",
    ],
    answer: "if the component calls this.forceUpdate()",
    explanation:
      "The forceUpdate() method is used to force a re-render of a React component, but it doesn't trigger a rerender in response to state or prop changes. It is generally recommended to avoid using forceUpdate() and let React handle component updates based on state and props changes.",
  },
  {
    question:
      "Q50. You have created a new method in a class component called handleClick, but it is not working. Which code is missing?",
    code: "class Button extends React.Component{\n\n  constructor(props) {\n    super(props);\n    // Missing line\n  }\n\n  handleClick() {...}\n}",
    options: [
      "this.handleClick.bind(this);",
      "props.bind(handleClick);",
      "this.handleClick.bind();",
      "this.handleClick = this.handleClick.bind(this);",
    ],
    answer: "this.handleClick = this.handleClick.bind(this);",
    explanation:
      "In a class component, if you create a method like 'handleClick', you need to bind it to the current instance of the class in the constructor. This is typically done using 'this.handleClick = this.handleClick.bind(this);' to ensure the correct context ('this') when the method is called.",
  },
  {
    question:
      "Q51. React does not render two sibling elements unless they are wrapped in a fragment. Below is one way to render a fragment. What is the shorthand for this?",
    code: "<React.Fragment>\n  <h1>Our Staff</h1>\n  <p>Our staff is available 9-5 to answer your questions</p>\n</React.Fragment>",
    options: [
      "A <...>\n  <h1>Our Staff</h1>\n  <p>Our staff is available 9-5 to answer your questions</p>\n</...>",
      "B <//>\n  <h1>Our Staff</h1>\n  <p>Our staff is available 9-5 to answer your questions</p>\n<///>",
      "C <>\n  <h1>Our Staff</h1>\n  <p>Our staff is available 9-5 to answer your questions</p>\n</>",
      "D <Frag>\n  <h1>Our Staff</h1>\n  <p>Our staff is available 9-5 to answer your questions</p>\n</Frag>",
    ],
    answer: "C",
    explanation:
      "The shorthand for rendering a fragment in React is to use an empty angle bracket syntax <>...</> instead of <React.Fragment>...</React.Fragment>. This is a concise way to create fragments without adding extra elements to the DOM.",
  },
  {
    question:
      "Q52. If you wanted to display the count state value in the component, what do you need to add to the curly braces in the h1?",
    code: "class Ticker extends React.component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n  }\n  render() {\n    return <h1>{}</h1>;\n  }\n}",
    options: ["this.state.count", "count", "state", "state.count"],
    answer: "this.state.count",
    explanation:
      "To display the 'count' state value in the component, you need to reference it using 'this.state.count' within the curly braces in the JSX. This syntax allows you to access the state property and include it in the rendered output.",
  },
  {
    question:
      "Q53. Per the following code, when is the Hello component assigned to greeting?",
    code: "const greeting = isLoggedIn ? <Hello /> : null;",
    options: [
      "never",
      "when isLoggedIn is true",
      "when a user logs in",
      "when the Hello function is called",
    ],
    answer: "when isLoggedIn is true",
    explanation:
      "In the given code, the Hello component is assigned to the 'greeting' variable when the condition 'isLoggedIn' is true. If 'isLoggedIn' evaluates to true, <Hello /> is assigned to 'greeting'; otherwise, it is assigned the value 'null'.",
  },
  {
    question: "Q54. In the following code block, what type is orderNumber?",
    code: "ReactDOM.render(<Message orderNumber=\"16\" />, document.getElementById('root'));",
    options: ["string", "boolean", "object", "number"],
    answer: "string",
    explanation:
      "In the given code, the 'orderNumber' prop is assigned the value \"16\" as a string. Therefore, the type of 'orderNumber' in this context is a string.",
  },
  {
    question:
      "Q55. You have added a style property to the h1 but there is an unexpected token error when it runs. How do you fix this?",
    code: 'const element = <h1 style={ backgroundColor: "blue" }>Hi</h1>;',
    options: [
      'const element = <h1 style="backgroundColor: "blue"">Hi</h1>;',
      'const element = <h1 style={{backgroundColor: "blue"}}>Hi</h1>;',
      "const element = <h1 style={blue}>Hi</h1>;",
      'const element = <h1 style="blue">Hi</h1>;',
    ],
    answer: 'const element = <h1 style={{backgroundColor: "blue"}}>Hi</h1>;',
    explanation:
      "In JSX, the 'style' attribute expects an object, not a string or a CSS-like syntax. To fix the unexpected token error, you should use double curly braces to create an object for the 'style' property. For example: style={{ backgroundColor: \"blue\" }}",
  },
  {
    question:
      "Q56. Which function is used to update state variables in a React class component?",
    code: null,
    options: ["replaceState", "refreshState", "updateState", "setState"],
    answer: "setState",
    explanation:
      "In React class components, the 'setState' method is used to update state variables. It is a built-in method provided by React, and it is the primary way to trigger a re-render of the component with updated state values.",
  },
  {
    question:
      "Q57. Consider the following component. What is the default color for the star?",
    code: "const Star = ({ selected = false }) => <Icon color={selected ? 'red' : 'grey'} />;",
    options: ["black", "red", "grey", "white"],
    answer: "grey",
    explanation:
      "The default color for the star in the given component is 'grey'. The color is determined by the value of the 'selected' prop. If 'selected' is true, the color is 'red'; otherwise, it is 'grey'.",
  },
  {
    question:
      "Q58. What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is not bound correctly)",
    code: "A. <button onClick=this.handleClick>Click Me</button>\nB. <button onClick={event => this.handleClick(event)}>Click Me</button>",
    options: [
      "Button A will not have access to the event object on click of the button",
      "Button A will not fire the handler this.handleClick successfully",
      "There is no difference",
      "Button B will not fire the handler this.handleClick successfully",
    ],
    answer: "Button A will not fire the handler this.handleClick successfully",
    explanation:
      "In Button A, the 'onClick' attribute should be assigned a function reference, but it is missing parentheses after 'this.handleClick'. Without the parentheses, the function will be invoked immediately when the component renders, rather than waiting for the button click. This will result in an unsuccessful attempt to call 'this.handleClick' on the click event.",
  },
  {
    question:
      "Q59. How would you add to this code, from React Router, to display a component called About?",
    code: 'A\n<Route path="/tid">\n  {\' \'}\n  <About />\n</Route>\nB\n<Route path="/tid" about={Component} />\nC\n<Route path="/tid" route={About} />\nD\n<Route>\n  <About path="/tid" />\n</Route>',
    options: ["A", "B", "C", "D"],
    answer: "C",
    explanation:
      "To add a route for displaying the 'About' component using React Router, you should use option C:\n\n```jsx\n<Route path=\"/tid\" component={About} />\n```\n\nThis ensures that when the path matches \"/tid\", the 'About' component will be rendered.",
  },
  {
    question:
      "Q60. Which class-based component is equivalent to this function component?",
    code: "const Greeting = ({ name }) => <h1>Hello {name}!</h1>;",
    options: [
      "A\nclass Greeting extends React.Component {\n  constructor() {\n    return <h1>Hello {this.props.name}!</h1>;\n  }\n}",
      "B\nclass Greeting extends React.Component {\n  <h1>Hello {this.props.name}!</h1>;\n}",
      "C\nclass Greeting extends React.Component {\n  render() {\n    return <h1>Hello {this.props.name}!</h1>;\n  }\n}",
      "D\nclass Greeting extends React.Component {\n  render({ name }) {\n    return <h1>Hello {name}!</h1>;\n  }\n}",
    ],
    answer: "C",
    explanation:
      "The class-based component equivalent to the given function component is:\n\n```jsx\nclass Greeting extends React.Component {\n  render() {\n    return <h1>Hello {this.props.name}!</h1>;\n  }\n}\n```\n\nOption C provides the correct structure for a class component with a 'render' method that returns JSX based on props.",
  },
  {
    question:
      "Q61. Give the code below, what does the second argument that is sent to the createElement function?",
    code: "ReactDOM.render(\n  <h1>Hi<h1>,\n  document.getElementById('root')\n)",
    options: [
      "where the React element should be added to the DOM",
      "where to call the function",
      "where the root component is",
      "where to create a new JavaScript file",
    ],
    answer: "where the React element should be added to the DOM",
    explanation:
      "In the 'ReactDOM.render' function, the second argument is the container element where the React element should be added to the DOM. In this case, it is 'document.getElementById('root')'. The first argument is the React element to be rendered.",
  },
  {
    question:
      "Q62. Why should you use React Router's Link component instead of a basic <a> tag in React?",
    code: null,
    options: [
      "The link component allows the user to use the browser's Back button.",
      "There is no difference--the Link component is just another name for the <a> tag.",
      "The <a> tag will cause an error when used in React.",
      "The <a> tag triggers a full page reload, while the Link component does not.",
    ],
    answer:
      "The <a> tag triggers a full page reload, while the Link component does not.",
    explanation:
      "When using React Router, using the 'Link' component is preferred over a basic '<a>' tag because the '<a>' tag triggers a full page reload, causing the entire application state to be lost. The 'Link' component in React Router prevents this default behavior and updates the URL without a full page refresh.",
  },
  {
    question:
      "Q63. What is the first argument, x, that is sent to the createElement function?\nReact.createElement(x, y, z);",
    code: null,
    options: [
      "the element that should be created",
      "the order in which this element should be placed on the page",
      "the properties of the element",
      "data that should be displayed in the element",
    ],
    answer: "the element that should be created",
    explanation:
      "In the 'React.createElement' function, the first argument 'x' represents the type of the element that should be created. This can be a string for HTML elements, a function for functional components, or a class for class components.",
  },
  {
    question:
      "Q64. Which class-based lifecycle method would be called at the same time as this effect Hook?",
    code: "useEffect(() => {\n  // do things\n}, []);",
    options: [
      "componentWillUnmount",
      "componentDidMount",
      "render",
      "componentDidUpdate",
    ],
    answer: "componentDidMount",
    explanation:
      "The 'useEffect' Hook with an empty dependency array ([]), as shown in the code, is equivalent to the 'componentDidMount' lifecycle method in a class component. It runs after the initial render and is used for side effects that should only occur once when the component mounts.",
  },
  {
    question:
      "Q65. What is the name of the base component of this component?\nclass Comp extends React.Component {\n  render() {\n    return <h1>Look at the time: {time}</h1>;\n  }\n}\nComp\nh1\nReact.Component\nComponent",
    code: null,
    options: ["Comp", "h1", "React.Component", "Component"],
    answer: "Comp",
    explanation:
      "In the given code, 'Comp' is the name of the class-based component. The class 'Comp' extends 'React.Component', and it renders an '<h1>' element. Therefore, the name of the base component is 'Comp'.",
  },
  {
    question:
      "Q66. When using a portal, what is the first argument?\nReactDOM.createPortal(x, y);",
    code: null,
    options: [
      "the current state",
      "the element to render",
      "the App component",
      "the page",
    ],
    answer: "the element to render",
    explanation:
      "In 'ReactDOM.createPortal', the first argument 'x' is the element to render. This is the child React element that will be rendered into the portal.",
  },
  {
    question: "Q67. What is setCount?\nconst [count, setCount] = useState(0);",
    code: null,
    options: [
      "the initial state value",
      "a variable",
      "a state object",
      "a function to update the state",
    ],
    answer: "a function to update the state",
    explanation:
      "'setCount' is a function returned by the 'useState' Hook, and it is used to update the state variable 'count'. Calling 'setCount' with a new value will trigger a re-render with the updated state.",
  },
  {
    question:
      "Q68. What is the use of map function below?\nconst database = [{ data: 1 }, { data: 2 }, { data: 3 }];\ndatabase.map((user) => <h1>{user.data}</h1>);",
    code: null,
    options: [
      "gives a map of all the entries in the database",
      "returns a heading tag for every entry in the database containing its data",
      "returns one heading tag for all the entries in the database",
      "checks which entry in the database is suitable for heading tag",
    ],
    answer:
      "returns a heading tag for every entry in the database containing its data",
    explanation:
      "The 'map' function is used to transform each element in the 'database' array into a corresponding '<h1>' element containing the 'data' property. It returns an array of these elements.",
  },
  {
    question:
      "Q69. Describe what is happening in this code?\nconst { name: firstName } = props;",
    code: null,
    options: [
      "It is creating a new object that contains the same name property as the props object.",
      "It is assigning the value of the props object's firstName property to a constant called name.",
      "It is retrieving the value of props.name.firstName.",
      "It is assigning the value of the props object's name property to a constant called firstName.",
    ],
    answer:
      "It is assigning the value of the props object's name property to a constant called firstName.",
    explanation:
      "This code uses object destructuring to extract the 'name' property from the 'props' object and assigns it to a constant called 'firstName'. It is a way to rename the 'name' property while destructuring.",
  },
  {
    question:
      "Q70. What is wrong with this code?\nconst MyComponent = ({ names }) => (\n  <h1>Hello</h1>\n  <p>Hello again</p>\n);",
    code: null,
    options: [
      "React components cannot be defined using functions.",
      "React does not allow components to return more than one element.",
      "The component needs to use the return keyword.",
      "String literals must be surrounded by quotes.",
    ],
    answer: "React does not allow components to return more than one element.",
    explanation:
      "In React, a functional component should return a single React element. In this code, there are two separate elements ('<h1>' and '<p>') at the root level, which violates this rule. You can wrap them in a fragment or another container element.",
  },
  {
    question:
      "Q71. When using a portal, what is the second argument?\nReactDOM.createPortal(x, y);",
    code: null,
    options: [
      "the App component",
      "the page",
      "the current state",
      "the DOM element that exists outside of the parent component",
    ],
    answer: "the DOM element that exists outside of the parent component",
    explanation:
      "The second argument 'y' in 'ReactDOM.createPortal' is the DOM element that exists outside of the parent component. It is the target container where the portal children will be rendered.",
  },
  {
    question:
      "Q72. Given this code, what will be printed in the <div> tag?\nconst MyComponent = ({ children }) => (\n  <div>{children.length}</div>\n);\n...\n<MyComponent>\n  <p>\n    Hello <span>World!</span>\n  </p>\n  <p>Goodbye</p>\n</MyComponent>",
    code: null,
    options: [
      "It will produce an error saying 'cannot read property \"length\" of undefined.'",
      "1",
      "undefined",
      "2",
    ],
    answer: "2",
    explanation:
      "The 'children' prop represents the children passed to the 'MyComponent'. In this case, there are two '<p>' elements as children, so 'children.length' will be equal to 2.",
  },
  {
    question:
      "Q73. What is this pattern called?\nconst [count, setCount] = useState(0);",
    code: null,
    options: [
      "object destructuring",
      "array destructuring",
      "spread operating",
      "code pushing",
    ],
    answer: "array destructuring",
    explanation:
      "The code pattern 'const [count, setCount] = useState(0);' is an example of array destructuring. It extracts values from an array (in this case, the return value of 'useState') and assigns them to variables ('count' and 'setCount').",
  },
  {
    question:
      "Q74. What is the first file loaded by the browser in a basic React project?\nsrc/App.js\nsrc/index.js\npublic/manifest.json\npublic/index.html",
    code: null,
    options: [
      "src/App.js",
      "src/index.js",
      "public/manifest.json",
      "public/index.html",
    ],
    answer: "public/index.html",
    explanation:
      "In a basic React project, the first file loaded by the browser is usually 'public/index.html'. This HTML file serves as the entry point and typically includes a root div where the React application will be mounted.",
  },
  {
    question:
      "Q75. The code below is rendering nothing and generates this error: 'ReactDOM is not defined.' How do you fix this issue?\nimport React from 'react';\nimport { createRoot } from 'reactjs-dom';\n\nconst element = <h1>Hi</h1>;\n// Note: error on the line below\nconst root = ReactDOM.createRoot(document.getElementById('root'));\n\nroot.render(element);",
    code: null,
    options: [
      "createRoot(document.getElementById('root'))",
      "ReactDOM(element, document.getElementById('root'))",
      "renderDOM(element, document.getElementById('root'))",
      "DOM(element, document.getElementById('root'))",
    ],
    answer: "createRoot(document.getElementById('root'))",
    explanation:
      "The correct way to create a root using the experimental 'createRoot' function is 'createRoot(document.getElementById('root'))'. The 'ReactDOM' methods are not needed in this case.",
  },
  {
    question:
      "Q76. In this component, how do you display whether the user was logged in or not?\nrender() {\n  const isLoggedIn = this.state.isLoggedIn;\n  return (\n    <div>\n      The user is:\n    </div>\n  );\n}",
    code: null,
    options: [
      "The user is loggedIn ? logged in : not logged in.",
      "Write a function to check the login status.",
      "The user is {isLoggedIn = 'no'}.",
      "The user is {isLoggedIn ? 'logged in.' : 'not logged in'}.",
    ],
    answer: "The user is {isLoggedIn ? 'logged in.' : 'not logged in'}.",
    explanation:
      "The correct way to display whether the user is logged in or not using the 'isLoggedIn' state variable is '{isLoggedIn ? 'logged in.' : 'not logged in'}'. This is a conditional (ternary) operator.",
  },
  {
    question:
      "Q77. You are rendering a list with React when this warning appears in the console: 'Warning: Each child in a list should have a unique 'key' prop.' How do you fix this issue?",
    code: null,
    options: [
      "Add a key prop with the same value to each item in the list",
      "Clear the console warnings",
      "Use the UseId hook to generate a unique key for each element in the list",
      "When iterating over the list items, add a unique property to each list item.",
    ],
    answer: "Add a key prop with the same value to each item in the list",
    explanation:
      "To fix the 'Each child in a list should have a unique 'key' prop' warning, you should add a 'key' prop with a unique value to each item in the list. This helps React efficiently update and reorder elements when the list changes.",
  },
  {
    question:
      "Q78. How would you generate the boilerplate code for a new app that you are building to collect underpants?",
    code: null,
    options: [
      "npm create-react-app collect-underpants",
      "npx start-app collect-underpants",
      "react new collect-underpants",
      "npx create-react-app collect-underpants",
    ],
    answer: "npm create-react-app collect-underpants",
    explanation:
      "The correct command to generate the boilerplate code for a new React app is 'npm create-react-app collect-underpants'. This command uses the 'create-react-app' tool to set up a new React project with the given name ('collect-underpants' in this case).",
  },
  {
    question:
      "Q79. Add the code that will fire the photon torpedoes when the button is clicked.",
    code: "class StarTrekkin extends React.Component {\n  firePhotonTorpedoes(e) {\n    console.log('pew pew');\n  }\n  render() {\n    return; // Missing code\n  }\n}",
    options: [
      "<button onClick={firePhotonTorpedoes()}>Pew Pew</button>",
      "<button onClick={firePhotonTorpedoes}>Pew Pew</button>",
      "<button onClick={this.firePhotonTorpedoes()}>Pew Pew</button>",
      "<button onClick={this.firePhotonTorpedoes}>Pew Pew</button>",
    ],
    answer: "<button onClick={this.firePhotonTorpedoes}>Pew Pew</button>",
    explanation:
      "To add the code that will fire the photon torpedoes when the button is clicked, you should use '<button onClick={this.firePhotonTorpedoes}>Pew Pew</button>'. You want to pass the function reference, not invoke the function immediately.",
  },
  {
    question:
      "Q80. What is the process of deciding whether an update is necessary?",
    code: null,
    options: ["shadow DOM", "fiber", "reconciliation", "setting state"],
    answer: "reconciliation",
    explanation:
      "The process of deciding whether an update is necessary in React is known as 'reconciliation'. React performs a diffing algorithm to determine what has changed in the virtual DOM and efficiently updates only the parts of the actual DOM that need to be changed.",
  },
  {
    question:
      "Q81. React is an open-source project but is maintained by which company?",
    code: null,
    options: ["Intuit", "Twitter", "Facebook", "Snapchat"],
    answer: "Facebook",
    explanation:
      "React is an open-source project primarily maintained by Facebook. It was initially developed by Facebook and later released as an open-source project.",
  },
  {
    question: "Q82. What command can you use to generate a React project?",
    code: null,
    options: ["react-starter", "create-react-app", "react-gen", "react-start"],
    answer: "create-react-app",
    explanation:
      "The command 'create-react-app' is used to generate a new React project. It is a popular tool that sets up a new React application with a sensible default configuration.",
  },
  {
    question:
      "Q83. What is the browser extension called that React developers use to debug applications?",
    code: null,
    options: [
      "React Developer Tools",
      "React Tooling Add-on",
      "React Codewatch",
      "React Debug",
    ],
    answer: "React Developer Tools",
    explanation:
      "React developers use the 'React Developer Tools' browser extension to debug React applications. It provides insights into the component hierarchy and state.",
  },
  {
    question: "Q84. Which tool is not part of Create React App?",
    code: null,
    options: ["React", "jQuery", "webpack", "ReactDOM"],
    answer: "jQuery",
    explanation:
      "jQuery is not part of Create React App. Create React App is a tool that sets up a new React project and includes React itself, webpack, and other necessary tools. jQuery is a separate library and is not included by default.",
  },
  {
    question:
      "Q85. What is the JavaScript syntax extension that is commonly used to create React elements?",
    code: null,
    options: ["HTML", "JavaScriptX", "JSX", "React JavaScript"],
    answer: "JSX",
    explanation:
      "JSX (JavaScript XML) is the syntax extension used to create React elements. It allows you to write XML-like code in JavaScript, making it more convenient to describe the structure of React components.",
  },
  {
    question:
      "Q86. How might you check property types without using Flow or TypeScript?",
    code: null,
    options: [
      "Check Manually.",
      "Use prop-helper.",
      "use prop-types.",
      "user checker-types.",
    ],
    answer: "use prop-types.",
    explanation:
      "You can check property types in React without using Flow or TypeScript by using the 'prop-types' library. It provides a set of utilities for defining the types of component props, helping catch potential errors during development.",
  },
  {
    question:
      "Q87. How do you add an id of heading to the following h1 element?\nlet dish = <h1>Mac and Cheese</h1>;",
    code: null,
    options: [
      "<h1 id={heading}>Mac and Cheese</h1>",
      '<h1 id="heading">Mac and Cheese</h1>',
      '<h1 id:"heading">Mac and Cheese</h1>',
      '<h1 class="heading">Mac and Cheese</h1>',
    ],
    answer: '<h1 id="heading">Mac and Cheese</h1>',
    explanation:
      "To add an id attribute to the 'h1' element, you can use the syntax '<h1 id=\"heading\">Mac and Cheese</h1>'. This sets the id attribute to 'heading'.",
  },
  {
    question:
      'Q88. What value of button will allow you to pass the name of the person to be hugged?\nclass Huggable extends React.Component {\n  hug(id) {\n    console.log("hugging " + id);\n  }\n  render() {\n    let name = "kitten";\n    let button = // Missing code\n    return button;\n  }\n}',
    code: null,
    options: [
      "<button onClick={(name) => this.hug(name)}>Hug Button</button>",
      "<button onClick={this.hug(e, name)}>Hug Button</button>",
      "<button onClick={(e) => hug(name, e)}>Hug Button</button>",
      "<button onClick={(e) => this.hug(name, e)}>Hug Button</button>",
    ],
    answer: "<button onClick={(e) => this.hug(name, e)}>Hug Button</button>",
    explanation:
      "To pass the name of the person to be hugged, you should use the syntax '<button onClick={(e) => this.hug(name, e)}>Hug Button</button>'. This way, the 'hug' function is called with the 'name' and the event 'e' when the button is clicked.",
  },
  {
    question: "Q89. What syntax do you use to create a component in React?",
    code: null,
    options: [
      "a generator",
      "a function or a class",
      "a service worker",
      "a tag",
    ],
    answer: "a function or a class",
    explanation:
      "In React, a component can be created using either a function or a class. Functional components are defined using a function, while class components are defined using a class that extends 'React.Component'.",
  },
  {
    question:
      "Q90. You want to disable a button so that it does not emit any events onClick. Which prop do you use to accomplish this?",
    code: null,
    options: ["onBlur", "onPress", "defaultValue", "disabled"],
    answer: "disabled",
    explanation:
      "To disable a button in React, you should use the 'disabled' prop. Setting 'disabled={true}' or 'disabled={false}' determines whether the button is enabled or disabled.",
  },
  {
    question:
      "Q91. In this function, which is the best way to describe the Dish component?\nfunction Dish() {\n  return (\n    <>\n      <Ingredient />\n      <Ingredient />\n    </>\n  );\n}",
    code: null,
    options: [
      "child component",
      "parent component",
      "nested component",
      "sibling component",
    ],
    answer: "nested component",
    explanation:
      "The 'Dish' component is a nested component within the context of the provided code. It renders two 'Ingredient' components as its children using the React fragment ('<>...</>'). Therefore, 'nested component' is the most accurate description.",
  },
  {
    question: "Q92. When does the componentDidMount function fire?",
    code: null,
    options: [
      "right after the component is added to the DOM",
      "before the component is added to the DOM",
      "right after the component is updated",
      "right after an API call",
    ],
    answer: "right after the component is added to the DOM",
    explanation:
      "The 'componentDidMount' lifecycle method in React is invoked right after the component is added to the DOM. It is a good place to perform initializations, data fetching, or other side effects that need to occur after the component has been rendered.",
  },
  {
    question: "Q93. What might you use webpack for in React development?",
    code: null,
    options: [
      "to fetch remote dependencies used by your app",
      "to split your app into smaller chunks that can be more easily loaded by the browser",
      "to format your code so that it is more readable",
      "to ensure your app is not vulnerable to code injection",
    ],
    answer:
      "to split your app into smaller chunks that can be more easily loaded by the browser",
    explanation:
      "Webpack is a module bundler widely used in React development. One of its primary purposes is to bundle and optimize JavaScript files, allowing developers to split their app into smaller chunks or modules. This helps improve performance by reducing the initial load time and enabling more efficient code splitting.",
  },
  {
    question:
      "Q94. When using the React Developer Tools Chrome extension, what does it mean if the React icon is red?",
    code: null,
    options: [
      "You are using the development build of React.",
      "You are using the production build of React.",
      "You are using webpack.",
      "You are using Create React App.",
    ],
    answer: "You are using the development build of React.",
    explanation:
      "If the React icon is red in the React Developer Tools Chrome extension, it indicates that you are using the development build of React. The development build includes additional warnings and debugging information to aid development but may have reduced performance compared to the production build.",
  },
  {
    question:
      "Q95. How would you modify the constructor to fix this error: \"ReferenceError: Must call super constructor in derived class before accessing 'this'...\"?",
    code: "class TransIsBeautiful extends React.Component {\n  constructor(props){\n  // Missing line\n  console.log(this) ;\n  }\n  ...\n}",
    options: [
      "render(props);",
      "super(props);",
      "super(this);",
      "this.super();",
    ],
    answer: "super(props);",
    explanation:
      "To fix the error 'ReferenceError: Must call super constructor in derived class before accessing 'this'', you should add the 'super(props);' statement as the missing line in the constructor. This ensures that the superclass constructor is called before accessing 'this' in the derived class.",
  },
  {
    question: "Q96. Which language can you not use with React?",
    code: null,
    options: ["Swift.", "JSX.", "Javascipt.", "TypeScript."],
    answer: "Swift.",
    explanation:
      "React primarily works with JavaScript (JSX), and while JSX syntax may resemble other languages, Swift is not a language commonly used in React development. React can be used with JavaScript, JSX, and optionally with TypeScript as a statically typed extension.",
  },
  {
    question:
      "Q97. This code is part of an app that collects Pokemon. How would you print the list of the ones collected so far?\nconstructor(props) {\n    super(props);\n    this.state = {\n        pokeDex: []\n    };\n}",
    code: null,
    options: [
      "console.log(props.pokeDex);",
      "console.log(this.props.pokeDex);",
      "console.log(pokeDex);",
      "console.log(this.state.pokeDex);",
    ],
    answer: "console.log(this.state.pokeDex);",
    explanation:
      "To print the list of collected Pokemon in the provided code, you should use 'console.log(this.state.pokeDex);'. The 'pokeDex' array is part of the component's state, and you access it using 'this.state.pokeDex'.",
  },
  {
    question:
      "Q98. What would be the result of running this code?\nfunction add(x = 1, y = 2) {\n  return x + y;\n}\n\nadd();",
    code: null,
    options: ["null", "3", "0", "undefined"],
    answer: "3",
    explanation:
      "The result of running the provided code would be '3'. The 'add' function has default parameters 'x = 1' and 'y = 2'. When called without arguments ('add()'), the default values are used, and the sum is '1 + 2', resulting in '3'.",
  },
  {
    question: "Q99. Why might you use a React.ref?",
    code: null,
    options: [
      "to refer to another JS file",
      "to bind the function",
      "to call a function",
      "to directly access the DOM node",
    ],
    answer: "to directly access the DOM node",
    explanation:
      "A React ref is used to directly access the DOM node of a React element. Refs provide a way to interact with the underlying DOM or to reference React components. They are commonly used when direct access to a DOM element is necessary, such as for focus management or measurements.",
  },
  {
    question:
      "Q100. What pattern is being used in this code block?\nconst { tree, lake } = nature;",
    code: null,
    options: [
      "function defaults",
      "array destructuring",
      "PRPL pattern",
      "destructuring assignment",
    ],
    answer: "destructuring assignment",
    explanation:
      "The pattern being used in the provided code block is 'destructuring assignment'. It is a JavaScript feature that allows you to unpack values from arrays or properties from objects into distinct variables. In this case, it is extracting the 'tree' and 'lake' properties from the 'nature' object.",
  },
  {
    question:
      'Q101. How would you correct this code block to make sure that the sent property is set to the Boolean value false?\nReactDom.render(\n  <Message sent=false />, document.getElementById("root")\n);',
    code: null,
    options: [
      "<Message sent={false} />,",
      "ReactDom.render(<Message sent=\"false\" />, document.getElementById('root'));",
      '<Message sent="false" />,',
      "ReactDom.render(<Message sent=\"false\" />, document.getElementById('root'));",
    ],
    answer: "<Message sent={false} />,",
    explanation:
      "To ensure that the 'sent' property is set to the Boolean value 'false', you should correct the code block as follows: '<Message sent={false} />,'. This syntax uses curly braces to provide the actual Boolean value.",
  },
  {
    question:
      "Q102. This code is part of an app that collects Pokemon. The useState hook below is a piece of state holding onto the names of the Pokemon collected so far. How would you access the collected Pokemon in state?\nconst PokeDex = (props) => {\n  const [pokeDex, setPokeDex] = useState([]);\n  /// ...\n};",
    code: null,
    options: ["props.pokeDex", "this.props.pokeDex", "setPokeDex()", "pokeDex"],
    answer: "pokeDex",
    explanation:
      "To access the collected Pokemon in the state defined by the 'useState' hook, you should use 'pokeDex'. The 'pokeDex' variable holds the current state value, and you can directly reference it within the functional component.",
  },
  {
    question:
      'Q103. What would you pass to the onClick prop that will allow you to pass the initName prop into the greet handler?\nconst Greeting = ({ initName }) => {\n  const greet = (name) => console.log("Hello, " + name + "!");\n  return <button onClick={ ... }>Greeting Button </button>\n}',
    code: null,
    options: [
      "hug",
      "this.hug(initName)",
      "(name) => this.hug(name)",
      "() => hug(initName)",
    ],
    answer: "(name) => this.hug(name)",
    explanation:
      "To pass the 'initName' prop into the 'greet' handler through the 'onClick' prop, you should use the syntax '(name) => this.hug(name)'. This ensures that the 'hug' function is called with the 'name' argument when the button is clicked.",
  },
  {
    question:
      "Q104. What is the name of the compiler used to transform JSX into JavaScript?",
    code: null,
    options: ["Babel", "JSX Editor", "Browser Buddy", "ReactDOM"],
    answer: "Babel",
    explanation:
      "The name of the compiler used to transform JSX into JavaScript is 'Babel'. Babel is a popular JavaScript compiler that can transform JSX syntax, ES6, and other ECMAScript features into browser-compatible JavaScript code.",
  },
  {
    question:
      "Q105. Which hook is used to prevent a function from being recreated on every component render?",
    code: null,
    options: ["useCallback", "useMemo", "useRef", "useTransition"],
    answer: "useCallback",
    explanation:
      "The 'useCallback' hook is used to prevent a function from being recreated on every component render. It memoizes the function, providing the same function reference across renders unless its dependencies change. This is useful in optimizing performance for functions passed as props.",
  },
  {
    question: "Q106. Why might you use the useRef hook?",
    code: null,
    options: [
      "To bind the function",
      "To call a function",
      "To directly access a DOM",
      "To refer to another JS file",
    ],
    answer: "To directly access a DOM",
    explanation:
      "The 'useRef' hook in React is primarily used to directly access a DOM node or to persist values across renders without causing re-renders. It is commonly used when you need a reference to a DOM element, such as for focus management, animations, or measurements.",
  },
  {
    question: "Q107. Which of the following is required to use React?",
    code: null,
    options: ["JavaScript", "React Router", "Redux", "Prop-Types"],
    answer: "JavaScript",
    explanation:
      "JavaScript is required to use React. React is a JavaScript library for building user interfaces. While additional tools and libraries like React Router, Redux, and Prop-Types can enhance the development experience, JavaScript is the fundamental language for writing React applications.",
  },
  {
    question: "Q108. What is the correct way to get a value from context?",
    code: null,
    options: [
      "const value = useContext(MyContext.Consumer)",
      "const value = useContext(MyContext.Provider)",
      "const value = useContext(MyContext)",
      'const value = useContext({value: "initial value"})',
    ],
    answer: "const value = useContext(MyContext)",
    explanation:
      "The correct way to get a value from context using the 'useContext' hook is 'const value = useContext(MyContext)'. The 'useContext' hook is used to access the current value of a React context, provided by the nearest 'MyContext' provider in the component tree.",
  },
  {
    question: "Q109. Why is ref used?",
    code: null,
    options: [
      "To bind function",
      "To call function",
      "To directly access DOM node",
      "To refer to another JS file",
    ],
    answer: "To directly access DOM node",
    explanation:
      "The 'ref' in React is used to directly access a DOM node or to create a reference to a React component. It allows you to interact with the underlying DOM element or React component instance. Common use cases include managing focus, measurements, or imperative animations.",
  },
  {
    question:
      "Q110. Choose the method which should be overridden to stop the component from updating?",
    code: null,
    options: [
      "componentDidMount",
      "componentDidUpdate",
      "willComponentUpdate",
      "shouldComponentUpdate",
    ],
    answer: "shouldComponentUpdate",
    explanation:
      "The 'shouldComponentUpdate' method is used to determine if the component should re-render. By default, it returns true, but you can override it to implement your own logic for preventing unnecessary updates.",
  },
  {
    question: "Q111. What is the functionality of a “webpack” command?",
    code: null,
    options: [
      "Runs react local development server",
      "Transfers all JS files to down into one file",
      "A module builder",
      "All of the above",
    ],
    answer: "A module builder",
    explanation:
      "Webpack is a module bundler, and its primary functionality is to bundle and transform JavaScript, CSS, and other assets into static files for web applications.",
  },
  {
    question: "Q112. Choose the method which is not a part of ReactDOM?",
    code: null,
    options: [
      "ReactDOM.createPortal()",
      "ReactDOM.hydrate()",
      "ReactDOM.destroy()",
      "ReactDOM.findDOMnode()",
    ],
    answer: "ReactDOM.destroy()",
    explanation:
      "There is no 'ReactDOM.destroy()' method in ReactDOM. The other options ('createPortal()', 'hydrate()', 'findDOMNode()') are valid methods in ReactDOM.",
  },
  {
    question: "Q113. In react, the key should be?",
    code: null,
    options: [
      "Unique among his siblings",
      "Unique in DOM",
      "Does not require to be unique",
      "All of the above",
    ],
    answer: "All of the above",
    explanation:
      "In React, the 'key' should be unique among sibling elements, unique in the DOM, and it is generally recommended to use unique keys. The 'key' prop helps React identify which items have changed, are added, or are removed.",
  },
  {
    question: "Q114. Which company developed ReactJS?",
    code: null,
    options: ["Google", "Meta (ex Facebook)", "Apple", "Twitter"],
    answer: "Meta (ex Facebook)",
    explanation:
      "ReactJS was developed and is maintained by Meta (formerly Facebook).",
  },
  {
    question:
      "Q115. Choose the library which is most often associated with react?",
    code: null,
    options: ["Chai", "Sinon", "Jest", "Mocha"],
    answer: "Jest",
    explanation:
      "Jest is a popular testing library that is often associated with React applications. It provides a test runner, assertion library, and utilities for mocking.",
  },
  {
    question:
      "Q116. What of the following is used in React.js to increase performance?",
    code: null,
    options: [
      "Original DOM",
      "Virtual DOM",
      "Both of the above",
      "None of the above",
    ],
    answer: "Virtual DOM",
    explanation:
      "In React.js, the Virtual DOM is used to increase performance. It is a lightweight copy of the real DOM, and React uses it to minimize direct manipulation of the actual DOM, leading to more efficient updates.",
  },
  {
    question:
      "Q117. Among the following options, choose the one that helps react for keeping their data uni-directional?",
    code: null,
    options: ["DOM", "Flux", "JSX", "Props"],
    answer: "Flux",
    explanation:
      "Flux is an architectural pattern that helps React maintain unidirectional data flow. It is commonly used for managing state in React applications.",
  },
  {
    question:
      "Q118. Which choice is a correct refactor of the Greeting class component into a function component?\n```javascript\nclass Greeting extends React.Component {\n  render() {\n    return <h1>Hello {this.props.name}!<h1>;\n  }\n}\n```",
    code: null,
    options: [
      "const Greeting = (name) => <h1>{name}</h1>",
      "function Greeting(name){return <h1>{name}</h1>;}",
      "const Greeting = props => { <h1>{props.name}</h1> }",
      "const Greeting = ({ name }) => <h1>Hello {name}</h1>;",
    ],
    answer: "const Greeting = ({ name }) => <h1>Hello {name}</h1>;",
    explanation:
      "The correct refactoring of the Greeting class component into a function component is using the destructuring of props. The correct answer is 'const Greeting = ({ name }) => <h1>Hello {name}</h1>;'",
  },
  {
    question:
      'Q119. Why is the waitlist not updating correctly?\n```javascript\nconst Waitlist = () => {\n  const [name, setName] = useState(\'\');\n  const [waitlist, setWaitlist] = useState([]);\n  const onSubmit = (e) => {\n    e.preventDefault();\n    waitlist.push(name);\n  };\n  return (\n    <div>\n      <form onSubmit={onSubmit}>\n        <label>\n          Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />\n        </label>\n        <button type="submit">Add to waitlist</button>\n      </form>\n\n      <ol>\n        {waitlist.map((name) => (\n          <li key={name}>{name}</li>\n        ))}\n      </ol>\n    </div>\n  );\n};\n```',
    code: null,
    options: [
      "waitlist is being mutated directly. Use the setWaitlist function instead to update the waitlist state.",
      "The form is reloading the page each time Add to waitlist is clicked.",
      "The Add to waitlist button is missing a click handler.",
      "There are likely repeated names inside of the waitlist array.",
    ],
    answer:
      "waitlist is being mutated directly. Use the setWaitlist function instead to update the waitlist state.",
    explanation:
      "In React, you should not mutate the state directly. In the provided code, the 'waitlist' array is being mutated directly inside the 'onSubmit' function. Instead, the 'setWaitlist' function should be used to update the state.",
  },
  {
    question:
      'Q120. What is the pattern that is used in the Context.Consumer below?\n```javascript\n<Context.Consumer> {(isLoggedIn)=>{isLoggedIn ? "Online" : "Offline"}} </Context.Consumer>\n```',
    code: null,
    options: [
      "Higher-order component",
      "Wish component",
      "Render Props",
      "Setup Component",
    ],
    answer: "Render Props",
    explanation:
      "The pattern used in the provided code is known as 'Render Props'. It involves passing a function as a prop to a component, allowing the component to render something based on the provided function's result. This is commonly used with the 'Context.Consumer'.",
  },
  {
    question:
      "Q121. In React.js which one of the following is used to create a class for Inheritance?",
    code: null,
    options: ["Create", "Extends", "Inherits", "Delete"],
    answer: "Extends",
    explanation:
      "In React.js, the 'extends' keyword is used to create a class for inheritance. When a class component extends another class component, it inherits its properties and methods.",
  },
  {
    question: "Q122. What is the purpose of render() in React.js?",
    code: null,
    options: [
      "To replace the existing markup",
      "To update the existing markup",
      "Both of the above",
      "None of the above",
    ],
    answer: "To update the existing markup",
    explanation:
      "The 'render()' method in React.js is used to update the existing markup. It returns a React element, and React uses this method to determine what to display on the screen.",
  },
  {
    question: "Q123. What is the use of super(props) in React.js?",
    code: null,
    options: [
      "To call the constructor of the parent class",
      "To initialize this.props in the constructor",
      "Both of the above",
      "None of the above",
    ],
    answer: "To call the constructor of the parent class",
    explanation:
      "In React.js, 'super(props)' is used to call the constructor of the parent class. It is required when you define a constructor in a subclass and want to access the parent class's constructor.",
  },
  {
    question: "Q124. What is Redux in React.js?",
    code: null,
    options: [
      "A state container for JavaScript apps",
      "A tool for building UI components",
      "Both of the above",
      "None of the above",
    ],
    answer: "A state container for JavaScript apps",
    explanation:
      "Redux is a state container for JavaScript apps. It provides a predictable state management system that can be used in various JavaScript frameworks, including React.",
  },
  {
    question:
      "Q125. What is the purpose of the virtual DOM in React.js, and how does it improve performance in web applications??",
    code: null,
    options: [
      "The virtual DOM is used to store user authentication data securely.",
      "The virtual DOM is a backup copy of the actual DOM, created for debugging purposes.",
      "The virtual DOM is a lightweight representation of the actual DOM, and it helps improve performance by minimizing direct manipulation of the real DOM.",
      "The virtual DOM is a database used to store component states.",
    ],
    answer:
      "The virtual DOM is a lightweight representation of the actual DOM, and it helps improve performance by minimizing direct manipulation of the real DOM.",
    explanation:
      "The virtual DOM in React.js is a lightweight copy of the actual DOM. It serves as an in-memory representation of the real DOM and allows React to perform efficient updates by minimizing direct manipulation of the real DOM. This helps improve performance in web applications.",
  },
  {
    question:
      'Q126. You run the following code and get this error message: "invalid hook call." what is wrong with the code?\n',
    code: "javascript\nimport React from 'react';\n\nconst [poked, setPoked] = React.useState(false);\n\nfunction PokeButton() {\n  return <button onClick={() => setPoked(true)}>{poked ? 'You have left a poke.' : 'Poke'}</button>;\n}\n",
    options: [
      "The useState call needs to be called inside of the PokeButton component.",
      "The react package is likely not installed correctly.",
      "useState is not imported correctly. Import useState directly instead of importing react.",
      "PokeButton is a pure function and therefore cannot have any local state.",
    ],
    answer:
      "The useState call needs to be called inside of the PokeButton component.",
    explanation:
      "Hooks, such as 'useState', should be called inside functional components, not at the top level of the module. In the provided code, 'useState' is called outside the 'PokeButton' component, resulting in an 'invalid hook call' error.",
  },
  {
    question:
      'Q127. A colleague comes to you for help on a react component. They say that the poke button renders correctly, however when the button is clicked, this error is shown: "setPoked is not defined". What is wrong with their code?',
    code: "function PokeButton() {\n  const { poked, setPoked } = useState(false);\n  return <button onclick={() => setPoked(true)}>{poked ? 'You have left a poke.' : 'Poke'}</button>;\n}",
    options: [
      "onClick prop should be onclick.",
      "The click handler passed to the onClick prop is inlined. Move this handler into a variable outside of JSX.",
      "They use object destructructing instead of array destructructing. Wrap the poked and setPoked values in an array.",
      "poked and setPoked are not destructured in the correct order.",
    ],
    answer:
      "The click handler passed to the onClick prop is inlined. Move this handler into a variable outside of JSX.",
    explanation:
      "The issue is that the click handler passed to the onClick prop is inlined inside JSX. It should be moved into a variable outside JSX to avoid the 'setPoked is not defined' error.",
  },
  {
    question:
      "Q128. This component is loaded dynamically. What should you replace XXXX with to complete the code?",
    code: "const OtherComponent = React.lazy(() => import('./OtherComponent.js'));\n\nfunction MyComponent() {\n  return (\n    <XXXX fallback={<spinner />}>\n      <OtherComponent />\n    </XXXX>\n  );\n}",
    options: ["Component", "Fragment", "Suspense", "Lazy"],
    answer: "Suspense",
    explanation:
      "When using React.lazy for dynamic component loading, you should use the Suspense component to specify a fallback UI while the component is being loaded.",
  },
  {
    question: "Q129. Elements in lists in React should have __ that are ___ .",
    code: null,
    options: [
      "keys ; unique",
      "keys ; indexes",
      "style ; inline",
      "values ; not-null",
    ],
    answer: "keys ; unique",
    explanation:
      "In React, elements in lists should have keys that are unique among their siblings. This helps React identify which items have changed, been added, or been removed.",
  },
  {
    question:
      "Q130. You want to memorize a callback function so you ensure that React does not recreate the function at each render. Which hook would you use to accomplish this?",
    code: null,
    options: ["useRef", "useMemo", "memo", "useCallback"],
    answer: "useCallback",
    explanation:
      "The useCallback hook is used to memorize a callback function so that it does not get recreated on every component render. This can be useful to optimize performance in certain scenarios.",
  },
  {
    question:
      "Q131. You want to perform a network operation as the result of a change to a component's state named userInput. what would you replace XXXX with?",
    code: "useEffect(callNetworkFunc, XXXX);",
    options: ["[userInput]", "userInput", "undefined", "[]"],
    answer: "[userInput]",
    explanation:
      "In the dependency array of the useEffect hook, you would replace XXXX with [userInput] to specify that the effect should run whenever the userInput state changes.",
  },
  {
    question:
      "Q132. When is the Hello component displayed?\n```javascript\ncode: '<div>{isLoggedIn ? <Hello /> : null}</div>'",
    code: null,
    options: [
      "when isLoggedIn is false",
      "when isLoggedIn is true",
      "when isLoggedIn is false and the Hello function is invoked",
      "never",
    ],
    answer: "when isLoggedIn is true",
    explanation:
      "The Hello component is displayed when the value of isLoggedIn is true, as indicated by the ternary operator in the JSX code.",
  },
  {
    question: "Q133. When do you use useLayoutEffect?",
    code: null,
    options: [
      "to optimize for all devices",
      "to complete the update",
      "to change the layout of the screen",
      "when you need the browser to paint before the effect runs",
    ],
    answer: "when you need the browser to paint before the effect runs",
    explanation:
      "useLayoutEffect is used when you need the browser to paint before the effect runs. It is often used for measurements and DOM manipulations that need to be reflected visually before the browser paints the screen.",
  },
  {
    question: "Q134. What is the difference between state and props in React?",
    code: null,
    options: [
      "Props are set by the parent component, state is set by the child component",
      "Props are passed to a component, state is managed within the component",
      "Props can be updated, state cannot be updated",
      "There is no difference - props and state are the same",
    ],
    answer:
      "Props are passed to a component, state is managed within the component",
    explanation:
      "Props are values passed to a React component from its parent, and they are immutable. State, on the other hand, is managed within the component and can be updated using the setState function. Props are used to pass data into components, while state is used for managing component-internal data.",
  },
  {
    question:
      "Q135. Which language can you not use with React?\n```javascript\ncode: 'Swift.'",
    code: null,
    options: ["Swift.", "JSX.", "Javascipt.", "TypeScript."],
    answer: "Swift.",
    explanation:
      "React is primarily used with JavaScript (JSX). While JSX resembles XML/HTML syntax, Swift is a different programming language and is not used with React.",
  },
  {
    question: "Q136. Which answer best describes a function component?",
    code: null,
    options: [
      "A function component is the same as a class component.",
      "A function component accepts a single props object and returns a React element.",
      "A function component is the only way to create a component.",
      "A function component is required to create a React component.",
    ],
    answer:
      "A function component accepts a single props object and returns a React element.",
    explanation:
      "A function component in React is a simpler way to write components compared to class components. It accepts a single props object as an argument and returns a React element. Function components are often used for presentational components and are introduced with the advent of React Hooks.",
  },
  {
    question: "Q137. Which library does the fetch() function come from?",
    code: null,
    options: [
      "FetchJS",
      "ReactDOM",
      "No library. fetch() is supported by most browsers.",
      "React",
    ],
    answer: "No library. fetch() is supported by most browsers.",
    explanation:
      "The fetch() function is not specific to any library. It is a web API that is supported by most modern browsers for making HTTP requests. While you can use fetch() with React, it is not tied to a particular React library or module.",
  },
  {
    question:
      "Q138. In React, what is the purpose of the key prop when rendering a list of components",
    code: null,
    options: [
      "The key prop is used to provide a unique identifier for the component.",
      "The key prop is used to define the color of the component.",
      "The key prop is required to render a list of components.",
      "The key prop is used by React to optimize updates and identify which items have changed or been added/removed in the list.",
    ],
    answer:
      "The key prop is used by React to optimize updates and identify which items have changed or been added/removed in the list.",
    explanation:
      "The key prop in React is used to provide a hint to React about the identity of items in a list. It helps React identify which items have changed, been added, or been removed, and it is crucial for performance optimization in list rendering.",
  },
  {
    question: "Q139. What is the primary function of React Router?",
    code: null,
    options: [
      "React Router is used for fetching data from APIs.",
      "React Router is used to create animations in React applications.",
      "React Router is used for managing state in React components.",
      "React Router is used for adding navigation and routing to React applications, allowing users to navigate between different views or pages.",
    ],
    answer:
      "React Router is used for adding navigation and routing to React applications, allowing users to navigate between different views or pages.",
    explanation:
      "React Router is a library for adding navigation and routing to React applications. It enables the creation of single-page applications with multiple views or pages. React Router provides components like BrowserRouter, Route, and Link to manage navigation and display different components based on the URL.",
  },
  {
    question: "Q140. When should you use Redux in a React application?",
    code: null,
    options: [
      "Redux is always required in React applications.",
      "Redux should be used when you need to fetch data from APIs.",
      "Redux is used for creating user interfaces but not for state management.",
      "Redux is typically used when you have complex state management needs, such as sharing state between multiple components or handling deeply nested state.",
    ],
    answer:
      "Redux is typically used when you have complex state management needs, such as sharing state between multiple components or handling deeply nested state.",
    explanation:
      "Redux is a state management library often used in React applications with complex state management requirements. It provides a predictable state container that can be shared across components. Redux is beneficial when managing global state, handling asynchronous actions, or sharing state between different parts of an application.",
  },
];
