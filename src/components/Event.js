import React, { useContext } from "react"

import {
    DELETE_EVENT,
    ADD_OPERATION_LOG
} from "../actions"
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utilus";


const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext)
    const id = event.id;
    const deleteEvent = () => {
        const result = window.confirm(`ID${id}のイベントを削除しますか？`);
        if (result) {
            dispatch({ type:DELETE_EVENT, id })
            dispatch({
                type:ADD_OPERATION_LOG,
                description:`イベント(ID${id})を削除しました。`,
                operatedAt:timeCurrentIso8601()
            })
        }
    }

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
                <td><button type="button" className="btn btn-danger" onClick={deleteEvent}>削除</button></td>
            </tr>
        </>
    )
}

export default Event