import React from "react"

const Log = ({ operationLog }) => {
    return (
        <tr>
            <td>{operationLog.description}</td>
            <td>{operationLog.operatedAt}</td>
        </tr>
    )
}

export default Log;