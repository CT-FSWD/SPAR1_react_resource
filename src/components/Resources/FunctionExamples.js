//Step 5 - Functions - Create FunctionExamples component
import React, { useState } from 'react'
//Step 10 - Functions - import addTwoNumbers
//Below we import the addTwoNumbers object from the Utilities folder. This is a JS module, which provides efficiency in making sure we only load what is necessary or a component to function properly. It also provides a way to better organize our code, allowing us to place the functions that go with this component in their own file.
//Step 14 - Functions - import login() from functions.js
//Step 15d - import showFavPlace
import { addTwoNumbers, login, showFavPlace } from '../../Utilities/functions';
export default function FunctionExamples() {
    //Step 7 - Functions - create the Hooks for the AddTwoNumbers UX
    const [nbr1, setNbr1] = useState(0);
    const [nbr2, setNbr2] = useState(0);
    const [calcResult, setCalcResult] = useState(null);
    //Step 11 - Functions - create Hooks for login UX
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    //Below we are creating a boolean variable that will serve as our condition for showing feedback in the Login UX. We will start it as null for when the user first loads the page, false for a bad login attempt, and true for logged in.
    const [loggedIn, setLoggedIn] = useState(null);

    //Step 15a - Create the hooks
    const [place, setPlace] = useState('');
    const [placeMessage, setPlaceMessage] = useState('');

    return (
        <aside className="examples">
            <h2>Function Examples</h2>
            {/* Step 8 - Functions - Create the add two numbers experience below */}
            <div className="singleExample">
                <p>Type in two numbers and click add...</p>
                <div className="form-group">
                    <input name="nbr1" type="number" className="form-control" onChange={(e) => setNbr1(e.target.value)} placeholder="Number 1" />
                </div>
                <div className="form-group">
                    <input name="nbr2" type="number" className="form-control" onChange={(e) => setNbr2(e.target.value)} placeholder="Number 2" />
                </div>
                <div className="form-grouop">
                    <button className="btn btn-dark" onClick={() => setCalcResult(addTwoNumbers(nbr1, nbr2))}>Add</button>
                </div>
                {calcResult !== null &&
                    <h3 className="result">Answer: {calcResult}</h3>
                }
            </div>
            {/* Step 12 - Functions - Create the Login UI */}
            <div className="singleExample">
                {(loggedIn === null || loggedIn === false) &&
                    <>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <input name="username" type="text" className="form-control" placeholder="username" onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input name="password" type="text" className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-info" onClick={() => setLoggedIn(login(userName, password))}>Login</button>
                        </div>
                        {loggedIn === false &&
                            <p className="text-danger m-2">
                                Login failed...try again!
                            </p>
                        }
                    </>
                }
                {loggedIn === true &&
                    <h3>Hello {userName}!</h3>
                }
            </div>
            {/* Step 15 - Functions - Minilab */}
             {/* Create an interaction with the user where you ask the user their favorite place to go. Display a custom response back to the user including the place's name. BONUS functionality: If they type in Arizona, tell them its too hot in Arizona and if they type in Canada, tell them to remember their passport!  */}
             {/* Step 15b - Create the UI */}
             <div className="singleExample">
                <p>What is your favorite place to travel?</p>
                <div className="form-group">
                    <input type="text" className="form-control" onChange={(e) => setPlace(e.target.value)} placeholder="Place to travel..." />
                </div>
                <button className="btn btn-warning" onClick={() => setPlaceMessage(showFavPlace(place))}>Submit</button>
                <p className="m-2">{placeMessage}</p>
            </div>
        </aside>
    )
}
