import React, { useEffect, useState } from 'react';

// useEffect: domのrendering → useEffect(defaultはrenderingのたびに)
export const Effect: React.FC = () => {
    const [message, setMessage] = useState('こんにちは');
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log('This is like componentDidMount or componentDidUpdate');
    });

    useEffect(() => {
        // 最初のレンダリング直後のみに実行
        console.log('This is like componentDidMount');

        return () => {
            console.log('This is like componentWillUnmount');
        };
    }, []);

    // stateのnumが変更されて再レンダリングされた後のみ実行
    useEffect(() => {
        console.log('This callback is for num only');

        return () => {
            console.log('This is called after num rendering unmount');
        };
    }, [num]);

    const renderingPeriod = () => {
        console.log('rendering!');
        return '。';
    };
    return (
        <div>
            <h1>{message + renderingPeriod()}</h1>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <h2>{num}</h2>
            <button onClick={() => setNum(num + 1)}>+1</button>
        </div>
    );
};
