import React, {useMemo, useState} from 'react';


const generateData = () => {
    return 10
}

// const initialValue = useMemo(generateData, [])

const changer = (state: number) => {
    return state + 1
}
export const Example = () => {
    const [counter, setCounter] = useState(generateData)
    return (
        <div>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </div>
    );
};
