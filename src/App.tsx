import { hot } from "react-hot-loader";
import React from 'react';

const App = () => {
    const [count, setCount] = React.useState<number>(0);

    const increment = () => {
        setCount((count) => count + 1);
    }

    const decrement = () => {
        setCount((count) => count - 1);
    }

    return (
        <div>
            <h1>Hello👋 I'm a React app</h1>
            <h2>I support:
                <ul>
                    <li>TypeScript</li>
                    <li>Hot-Reload</li>
                    <li>Counting ;)</li>
                </ul>
            </h2>
            <h3>Number: <b>{count}</b></h3>
            <button onClick={() => increment()}>Increment</button>{' '}
            <button onClick={() => decrement()}>Decrement</button>{' '}
        </div>
    );
};

export default hot(module)(App);