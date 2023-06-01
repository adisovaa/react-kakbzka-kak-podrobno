import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
    on: boolean
}

export const OnOff = (props: PropsType) => {

    // const [on, setOn] = useState(false)

    const onStyle = {
        width: '50px',
        height: '30px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        background: props.on ? 'green' : 'white'
        // background: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '50px',
        height: '30px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '10px',
        background: props.on ? 'white' : 'red'
        // background: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '20px',
        background: props.on ? 'green' : 'red'
    }

    // const onClickHandler = (value: boolean) => {
    //     return props.setOn(value)
    // }

    return (
        <>
            <div>
                {/*<div style={onStyle} onClick={() => onClickHandler(true)}>On</div>*/}
                {/*<div style={offStyle} onClick={() => onClickHandler(false)}>Off</div>*/}
                <div style={onStyle} onClick={() => props.onChange(true)}>On</div>
                <div style={offStyle} onClick={() => props.onChange(false)}>Off</div>
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