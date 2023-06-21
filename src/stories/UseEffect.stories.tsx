import React, {useEffect, useState} from 'react';

export const UseEffectStoriesJsx = () => {
    const [fake, setFake] = useState(0)
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
        console.log('useEffect only in first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect in first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [])

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])


    return (
        <div>
            <button onClick={() => setFake(fake + 1)}>fake +</button>
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
        </div>
    );
};


export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('useEffect every render')
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])


    return <>
        <button onClick={() => setCounter(counter + 1)}>counter + 1</button>
    </>
}