//Step 5 - Read Data - Create SingleResource
import React from 'react'

export default function SingleResource(props) {
    return (
        <tr>
            <td>{props.resource.Name}</td>
            <td><a href={props.resource.Url} target="_blank" rel="noreferrer">{props.resource.Url}</a></td>
            <td>{props.resource.Category.CategoryName}</td>
            <td>{props.resource.Description !== '' ? props.resource.Description : "Description Not Provided"}</td>
        </tr>
    )
}
