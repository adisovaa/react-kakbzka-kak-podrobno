import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
    defaultOff?: boolean
}

export const UncontrolledOnOff = (props: PropsType) => {

    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: '50px',
        height: '30px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        background: on ? 'green' : 'white'
        // background: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '50px',
        height: '30px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '10px',
        background: on ? 'white' : 'red'
        // background: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '20px',
        background: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <>
            <div>
                <div style={onStyle} onClick={onClicked}>On</div>
                <div style={offStyle} onClick={offClicked}>Off</div>
            </div>
            <div style={indicatorStyle}></div>
        </>
    )
}

// export const UncontrolledOnOff = (props: PropsType) => {
//     return (
//         <div>
//             {props.isActive && <button style={{background: 'green'}}>On</button>}
//             {!props.isActive && <button style={{background: 'red'}}>Off</button>}
//             <input type="checkbox" color={'red'}/>
//         </div>
//     )
// }