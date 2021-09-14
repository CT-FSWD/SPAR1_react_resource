//Step 5 - Read Data - Create SingleResource
import React from 'react'

export default function SingleResource(props) {
    return (
        <tr>
            <td>{props.resource.Name}</td>
            {/* Below is an example of how we can place some inline styling where we want to. Just use two sets of {} and remember that you are writing in JS, so it is fontWeight, not font-weight. */}
            <td><a href={props.resource.Url} target="_blank" rel="noreferrer" style={{fontSize: '1.15em', fontWeight: 'bold'}}>{props.resource.Url}</a></td>
            <td>{props.resource.Category.CategoryName}</td>
            <td>{props.resource.Description !== '' ? props.resource.Description : "Description Not Provided"}</td>
        </tr>
    )
}
