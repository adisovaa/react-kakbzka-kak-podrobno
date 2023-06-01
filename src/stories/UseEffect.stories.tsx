import React, {useEffect, useState} from 'react';

export const UseEffectStoriesJsx = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        //API
        //setInterval
        //indexDB
        //document.getElementByD
        //document.title = 'User'
        console.log('useEffect in every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        //API
        //setInterval
        //indexDB
        //document.getElementByD
        //document.title = 'User'
        console.log('useEffect only in first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        //API
        //setInterval
        //indexDB
        //document.getElementByD
        //document.title = 'User'
        console.log('useEffect in first render and every counter change')
        document.title = counter.toString()
    }, [counter])


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};
