//App Setup - Step 1 - Trim the create-react-app of unnecessary files/code:
//1. public folder - delete logo192 and logo512
//2. src folder - delete App.test.js, index.css, reportWebVitals.js, and setupTests.js
//3. index.js - comment the index.css and reportWebVitals imports, create the ReactDOM.render() comment, comment out the reportWebVitals() at the bottom of the file, and import the Bootstrap CSS reference.
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


//ReactDOM.render() is the React library's function call to display the virtual DOM in a specific place in the index.html's structure. It takes in 2 parameters: 
  //1. What do we want to render? (i.e. App component). 
  //2. Where do we want to render it? (i.e. index.html div#root)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Below, we comment out the reportWebVitals() because we do not intend to use it. This is part of trimming the application's file structure, so we are creating as efficient a website as possible.


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
