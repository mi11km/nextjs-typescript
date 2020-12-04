import React, { ChangeEvent, useState } from 'react';

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);
    const reset = () => setCount(0);
    const twice = () => setCount(count * 2);
    const divThree = () =>
        setCount((prevCount) => {
            return prevCount % 3 === 0 ? prevCount / 3 : prevCount;
        });

    return (
        <>
            <h2>count: {count}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>+1</button>
            <button onClick={reset}>reset</button>
            <button onClick={twice}>*2</button>
            <button onClick={divThree}>３の倍数のときだけ３で割る</button>
        </>
    );
};

export const App: React.FC<AppProps> = (props) => {
    const [state, setState] = useState(props); // オブジェクトもいけちゃう
    const { name, price } = state;

    const setName = (e: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, name: e.target.value });
    };
    const setPrice = (num: number) => {
        setState({ ...state, price: price + num });
    };
    return (
        <>
            <p>
                現在の{name}は、{price}円です。
            </p>
            <button onClick={() => setPrice(100)}>+100</button>
            <button onClick={() => setPrice(-100)}>-100</button>
            <button onClick={() => setState(props)}>reset</button>
            <input type="text" value={name} onChange={setName} />
        </>
    );
};

App.defaultProps = {
    name: 'サンプル',
    price: 100
};

type AppProps = {
    name: string;
    price: number;
};
