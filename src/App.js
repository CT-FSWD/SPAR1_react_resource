//App Setup - Step 2 - Comment the original App.js code and rebuild with the basic React library import/App.css file, App component declarative statement, and render an h1 that says 'Hello from React'.

//Below, we import the React library's functionality into this JS function. Functional components are just JS functions that return small sections of the UI.
//Think of imports much like using statements in a C# code file.

//Step 16 - Components - add useState to the import below.
import React, { useState } from 'react'
import './App.css'
//Step 4 - Components - Import and create the AboutReact component in the render below.
import AboutReact from './components/AboutReact/AboutReact'

//Step 2 - Components imported below are able to be used in the render for this component.
import Header from './components/Header'
//Step 11 - Components - import and render the Home component
import Home from './components/Home/Home'
//Step 17 - Components - import and render the Footer component
import Footer from './components/Footer'

import SupportingTech from './components/SupportingTech/SupportingTech'

//Step 3 - Functions - Import and create the conditional rendering for Resources
import Resources from './components/Resources/Resources'

//The export keyword below makes the App component accessible in other files in this application. Think of export much like the public keyword in a C# class.
export default function App() {
  //Step 18 - Components - create the hook, callback function, and add the callback function as a prop in the Header component below.

  //Below we will create a React Hook, which is a variable that is created as the component is mounted to the Virtual DOM. We set the state of showContent to equal 'Home' as its initial state. setShowContent() is a function that we can use to manage the state of showContent. We should never try to directly change the value of showContent, but instead we use setShowContent to manage the 'state' of the variable whenever we need to change its value.
  
  //We will pass setShowContent to the Header component (a child of App) to allow the Header to communicate back to the App component as to what the user would like to see.
  const [showContent, setShowContent] = useState('Home');

  
  //Each component will have a return that describes what the component will display to the Virtual DOM.
  return (
    //In the return for a functional component, we render the UI for a specific portion of content. Think of the App component much like the MVC Layout. Items that we want to display across an entire website should be located here. Each 'page' of content will be located inside of its own component tree, and we will decide which component in the tree to render as the user interacts with the nav on the site. Think of the other components in the tree much like individual views that create just a portion of the UI.
    <div className="site-container">
      {/* This is a JSX comment nested inside of a JSX expression. Anytime we need to call to a dynamic variable (prop or state data), we will use curly braces to display the information in the UI.
       - JSX - JavaScript and XML is an HTML-like syntax that we can use to write HTML structures directly into JS code. The browser uses Babel to then transpile our JSX code into JS so it can interpret what to render.

       NOTE: The use of className above...since we working in JS we use the term className rather than just class in JSX.
      */}
      {/* Render v1: <h1>Hello from the app component!</h1> */}
      {/* Below we call the Header component to display its piece of the UI. */}
      <Header setShowContent={setShowContent} />
      {/* v2: <AboutReact /> */}
      {/* Step 23 - Components - Create the conditional rendering for Home and About */}
      {/* Below, we will create conditional rendering based on the showContent state variable's value to render a specific component tree as the user interacts with the navigation. */}
      {showContent === 'Home' &&
        <Home />
      }
      {showContent === 'About' && 
        <AboutReact />
      }
      {showContent === 'Resources' &&
        <Resources />
      }
      {showContent === 'Tech' &&
        <SupportingTech />
      }
      <Footer />
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
