import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const UseMemoStories = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= a; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>

            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </div>
    );
};


export const HelpsForReactMemoStories = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= a; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>

            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </div>
    );
};


export const likeUseCallBack = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Redux', 'TypeScript', 'HTML'])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, 'JavaScript' + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])


    const memoizedAddBook2 = useCallback(() => {
        const newUsers = [...books, 'JavaScript' + new Date().getTime()]
        setBooks(newUsers)
    }, [books])


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book addBook={memoizedAddBook} books={books}/>
        </div>
    );
};


type BooksSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

export const BooksSecret = (props: BooksSecretPropsType) => {
    return (
        <div>{
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }</div>
    );
};

const Book = React.memo(BooksSecret)