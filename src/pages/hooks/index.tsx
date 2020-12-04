import React from 'react';

const Hooks: React.FC = () => {
    return (
        <React.Fragment>
            <div>
                <h2>イベント作成フォーム</h2>
                <form>
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input type="text" id="formEventTitle" />
                    <br />
                    <label htmlFor="formEventBody">ボディー</label>
                    <textarea name="body" id="formEventBody" cols={30} rows={5} />

                    <br />
                    <button>イベントを作成する</button>
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
