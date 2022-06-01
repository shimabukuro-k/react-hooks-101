import React, { useContext } from "react";

import AppContext from "../contexts/AppContext";
import Log from "./Log"

const OperationLog = () => {
    const {state} = useContext(AppContext);

    return (
        <>
        <h4>操作ログ一覧</h4>
        <table className="table table-hover">
        <thead>
            <tr>
                <th>内容</th>
                <th>日時</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                { state.operationLogs.map((operationLog, index) => { 
                    return < Log key={index} operationLog = {operationLog}/>})
                }
            </tbody>
        </table>

        </>
    ) 
}

export default OperationLog;