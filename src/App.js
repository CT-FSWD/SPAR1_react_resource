//App Setup - Step 2 - Comment the original App.js code and rebuild with the basic React library import/App.css file, App component declarative statement, and render an h1 that says 'Hello from React'.

//Below, we import the React library's functionality into this JS function. Functional components are just JS functions that return small sections of the UI.
//Think of imports much like using statements in a C# code file.
import React from 'react'
import './App.css'
//Step 4 - Components - Import and create the AboutReact component in the render below.
import AboutReact from './components/AboutReact/AboutReact'

//Step 2 - Components imported below are able to be used in the render for this component.
import Header from './components/Header'
import Home from './components/Home/Home'

//The export keyword below makes the App component accessible in other files in this application. Think of export much like the public keyword in a C# class.
export default function App() {
  
  return (
    //In the return for a functional component, we render the UI for a specific portion of content. Think of the App component much like the MVC Layout. Items that we want to display across an entire website should be located here. Each 'page' of content will be located inside of its own component tree, and we will decide which component in the tree to render as the user interacts with the nav on the site.
    <div className="site-container">
      {/* This is a JSX comment nested inside of a JSX expression. Anytime we need to call to a dynamic variable (prop or state data), we will use curly braces to display the information in the UI.
       - JSX - JavaScript and XML is an HTML-like syntax that we can use to write HTML structures directly into JS code. The browser uses Babel to then transpile our JSX code into JS so it can interpret what to render.

       NOTE: The use of className above...since we working in JS we use the term className rather than just class in JSX.
      */}
      {/* Render v1: <h1>Hello from the app component!</h1> */}
      <Header/>
      {/* v2: <AboutReact /> */}
      {/*  */}
      <Home />
    </div>
  )
}






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
