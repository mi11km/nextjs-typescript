import React, { useEffect, useState } from 'react';

export { Clock, UrlTransition };

function Clock(): JSX.Element {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timeID: NodeJS.Timeout = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timeID);
        };
    }, []); // [] を第２引数に渡すことで マウント時とアンマウント時のみにできる。

    return <h1 className="clock">{date.toLocaleString()}</h1>;
}

function UrlTransition(): JSX.Element {
    const [url, setUrl] = useState('https:example.com');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };
    const handleSubmit = () => {
        open(url);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>urlを入力してください</h2>
            <input type="text" value={url} onChange={handleChange} />
            <input type="submit" value="開く" />
        </form>
    );
}
