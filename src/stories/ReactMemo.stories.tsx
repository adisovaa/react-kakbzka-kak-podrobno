import React, {useState} from "react";

export default {
    title: 'React Memo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersBundle = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersBundle)


export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Siri', 'Angele', 'Alisa'])
    const onChangeHandler = () => {
        setCounter(counter + 1)
    }

    const addUser = () => {
        const newUsers = [...users, 'Alexa' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={onChangeHandler}>+</button>
        <button onClick={addUser}>add</button>
        <NewMessagesCounter counter={counter}/>
        <Users users={users}/>
    </>
}
