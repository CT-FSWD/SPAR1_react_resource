//Step 1 - AboutComponents - Create the component below, without the counter

//Below we import useState to use React Hooks in this functional component. Hooks allow us to manage state data in a component.
import React, { useState } from 'react'
import image from '../../images/functionalcomponent.jpg'

//Below we pass props in the function's signature, so we can use the helloWorld prop being passed from AboutReact.
export default function FunctionalComponents(props) {
    //Below is a React hook - The first parameter in the array is the state variable itself, which here we call 'counter'. The second parameter is a function that is paired with variable to update the state of that object.
    const [counter, setCounter] = useState(0);

    return (
        <article className="components">
            <section className="image-section">
                <img src={image} alt="Functional Component Code" />
            </section>
            <section className="text">
                <h3>Functional Components</h3>
                <p>See the message below, passing a prop through the functional child component.</p>
                <p className="text-center">
                    <em>{props.helloWorld}</em>
                </p>
                <p>Functional components are one way to break the UI into smaller pieces of content. This type of component has become the standard since Facebook introduced state management tactics like React Hooks and useEffect().</p>
                {/* Step 3 - AboutComponents - create the counter functionality in the UI */}
                {/* Create the call to the counter value below, along with the buttons that will call the setCounter function to update the value. */}
                <div className="text-center">
                    <h4>Keep Count: {counter}</h4>
                    <button className="btn btn-dark" onClick={() => setCounter(counter + 1)}>Add 1</button>
                    <button className="btn btn-dark" onClick={() => setCounter(counter - 1)}>Subtract 1</button>
                </div>
            </section>
        </article>
    )
}
