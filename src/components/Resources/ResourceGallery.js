//Step 4 - Read Data - create ResourceGallery minus the useEffect
import React, {useEffect} from 'react'
//Step 6 - Read Data - Import and render SingleResource
import SingleResource from './SingleResource'

export default function ResourceGallery(props) {

    //Step 2 - Lifecycle - Create the useEffect() example below to show when the useEffect() is invoked

    //We will create the useEffect() example below to simply show that when the props change the useEffect will be invoked, displaying a message in the console tab.
    useEffect(() => {
        console.log('useEffect in ResourcesGallery invoked!')
    }, []);
    //Above, if an object is placed in the second param's array, the component will fire off the useEffect as the component first renders and then each time that object is invoked (if it's a function) or modified (if it's state data). 
    //You will get some more exposure to this concept next week, but it is simply important for now to remember that useEffect can be used to update a component without an action from the user or even based on an action by the user.
    return (
        <section className="resourceGallery">
            <table className="table table-bordered table-striped">
                <thead className="bg-dark text-white text-uppercase text-center">
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Version 1 - just for testing, but now we are mapping each resource to a new table row, using the SingleResource component.
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>  */}
                     {/* The map function below is a JS function that allows us to loop through a collection, much like a foreach loop in C#. This allows us to render specific HTML using JSX syntax, mapping each resource in a table row as we have executed below. */}
                    {/* Notice the syntax below has a key property. We must have a unique identifier for components that are mapped from collections. */}
                    {props.resources.map(x => 
                        <SingleResource resource={x} key={x.ResourceId} />
                            )}
                </tbody>
            </table>
        </section>
    )
}
