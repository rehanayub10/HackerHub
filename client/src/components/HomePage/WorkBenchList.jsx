import React from 'react'

export default function WorkBenchList({ workbenchArray }) {
    return (
        <div className="workbench-array">
            {
                workbenchArray.map(workbench => {
                    return (
                        <WorkBenchCard name={workbench.name} cover={workbench.cover}/>
                    )
                })
            }
        </div>
    )
}
