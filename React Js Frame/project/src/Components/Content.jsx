import React from 'react'

export default function Content(props) {
  return (
    <div>
        <hr />
        <ul>
            <li>{props.no} | {props.item}</li>
        </ul>
    </div>
  )
}
