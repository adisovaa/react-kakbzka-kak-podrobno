import React, {useReducer} from 'react';
import {reducer, TOGGLE_CONSTANT} from "./reducer";

export type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion render')

    // const [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}

            <AccordionTitle title={props.titleValue}
                            onClick={() => dispatch({type: TOGGLE_CONSTANT})}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleProps = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleProps) {
    console.log('AccordionTitle render')
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody render')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}