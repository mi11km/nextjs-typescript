import React, { useReducer, useState } from 'react';

import reducer, { EventType } from '../../reducers';

const Hooks: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, []);
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

    return (
        <React.Fragment>
            <div>
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
                    <button onClick={addEvent}>イベントを作成する</button>
                    <button>全てのイベントを削除する</button>
                </form>

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
                    <tbody></tbody>
                </table>
            </div>
            <style jsx>{`
                div {
                    text-align: center;
                }

                table {
                    margin: 0 auto;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Hooks;
