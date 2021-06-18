import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount( prev => prev + 1);
    };
    const countDown = () => {
        setCount( prev => prev - 1);
    };

    return (
        <div>
            <p>現在のカウント数 : {count}</p>
            <button onClick = {() => countUp()}>up</button>
            <button onClick = {() => countDown()}>Down</button>
        </div>
    );
};

export default Counter;
