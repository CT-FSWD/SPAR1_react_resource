//Step 4 - AboutComponents - Create the class component below with just basic content and then render in AboutReact to display the changes as you code.

//Class components were much more widely used in previous versions of the React library, as they used to be the only way that you could create a stateful component.

//It is helpful to understand the syntactical difference between class and functional components, in case you come across older components that are built as class components.

import React, { Component } from 'react'
import image from '../../images/statefulcomponents.jpg'

export default class ClassComponents extends Component {
    //Below we create state data for our component to utilize. To do that, we need a constructor method that will be invoked when an instance of this class is created. Said another way, this constructor will be called each time the component is initialized.
    constructor(props) {
        //We need to call the super() first, which calls the constructor for the Component class in React. React components have a special property called state which is what we need to use to define the state data.
        super(props)    
        this.state = {
             counter: Number(0),
             userName: 'Watch here for the change...'
        }
    }

    handleChange = (e) => {
        this.setState({ userName: e });
    }
    
    render() {
        return (
            <article className="components">
                <section className="img-area">
                    <img src={image} alt="Class Component Code" />
                </section>
                <section className="text">
                    <h3>Class Components</h3>
                    <p>Class Components are created from JS classes and extends the Component class from the React library.</p>
                    <br />
                    {/* Step 6 - AboutComponents - Create the two examples below, taking time to test them in the browser. */}
                    <p>Type below and see the result update each time you type:
                        <br />
                        <em>{this.state.userName}</em>
                        <br />
                        <input type="text" placeholder="Enter your name" className="tbUserName" onChange={(e)=> this.handleChange(e.target.value)}/>
                    </p>
                    <div className="text-center">
                        <br />
                        <h4>Keep Count: {this.state.counter}</h4>
                        <button onClick={() => this.setState({ counter: this.state.counter + 1})} className="btn btn-dark m-1">Add 1</button>
                        <button onClick={() => this.setState({ counter: this.state.counter - 1})} className="btn btn-dark m-1">Subtract 1</button>
                    </div>
                </section>
            </article>
        )
    }
}
