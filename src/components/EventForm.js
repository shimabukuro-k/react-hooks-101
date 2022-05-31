import React, {useState, useContext} from 'react';

import { CREATE_EVENT } from '../actions';
import { DELETE_ALL_EVENTS } from '../actions';
import AppContext from '../contexts/AppContext';

export const EventForm = () => {
    const {state, dispatch} = useContext(AppContext);
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
  
    const addEvent = e => {
        e.preventDefault()
        dispatch({
            type:CREATE_EVENT,
            title,
            body
        })
        setTitle("");
        setBody("");
    }
  
    const unCreatable = title === "" || body === "" 
  
    const deleteAll = e => {
      e.preventDefault()
      const result = window.confirm("全てのイベントを削除しますか？");
      if (result) dispatch({type:DELETE_ALL_EVENTS})
    }
    
    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                <label htmlFor="formEventTitle">タイトル</label>
                <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlFor="formEventBody">ボディー</label>
                <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
                </div>
                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成</button>
                <button className="btn btn-danger" onClick={deleteAll} disabled={state.length === 0}>全てのイベントを削除</button>
            </form>
        </>
    )
}

export default EventForm