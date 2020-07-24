import React from 'react'

export default function Workbench({name, cover}) {
    return (
        <div className="workbench">
            <img src={cover}></img>
            <h4>{ name }</h4>
        </div>
    )
}
