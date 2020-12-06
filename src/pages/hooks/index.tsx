import React, { useContext, useReducer, useState } from 'react';

import AppContext from '../../contexts/AppContext';
import reducer, { Event, EventType } from '../../reducers';

const Hooks: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <EventFrom />
            <EventsComponent />
        </AppContext.Provider>
    );
};

export default Hooks;

interface EventComponentProps {
    event: Event;
}

const EventComponent: React.FC<EventComponentProps> = ({ event }) => {
    const { dispatch } = useContext(AppContext);

    const id = event.id;
    const deleteEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (confirm(`イベント(id=${id})を削除しても良いですか？`))
            dispatch({ type: EventType.DELETE_EVENT, id: id });
    };
    return (
        <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td>
                <button type="button" onClick={deleteEvent}>
                    削除
                </button>
            </td>
        </tr>
    );
};

const EventsComponent: React.FC = () => {
    const { state } = useContext(AppContext);

    return (
        <>
            <h2>イベント一覧</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>タイトル</th>
                        <th>ボディー</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((event, index) => (
                        <EventComponent key={index} event={event} />
                    ))}
                </tbody>
            </table>

            <style jsx>{`
                h2 {
                    text-align: center;
                }

                table {
                    margin: 0 auto;
                    width: 100%;
                }
            `}</style>
        </>
    );
};

const EventFrom: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch({
            type: EventType.CREATE_EVENT,
            title: title,
            body: body
        });
        setTitle('');
        setBody('');
    };

    const deleteAllEvents = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (confirm('全てのイベントを本当に削除しても良いですか？'))
            dispatch({ type: EventType.DELETE_ALL_EVENTS });
    };
    return (
        <>
            <h2>イベント作成フォーム</h2>
            <form>
                <label htmlFor="formEventTitle">タイトル</label>
                <input
                    type="text"
                    id="formEventTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <label htmlFor="formEventBody">ボディー</label>
                <textarea
                    name="body"
                    id="formEventBody"
                    cols={30}
                    rows={5}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <br />
                <button onClick={addEvent} disabled={title === '' || body === ''}>
                    イベントを作成する
                </button>
                <button onClick={deleteAllEvents} disabled={state.length === 0}>
                    全てのイベントを削除する
                </button>
            </form>
            <style jsx>{`
                form,
                h2 {
                    text-align: center;
                }
            `}</style>
        </>
    );
};
