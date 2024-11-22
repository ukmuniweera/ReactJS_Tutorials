import React from 'react'

export default function Content(props) {
  return (
    <div>
        <ul>
            <li>{props.no} | {props.item}</li>
        </ul>
        <hr />
    </div>
  )
}
