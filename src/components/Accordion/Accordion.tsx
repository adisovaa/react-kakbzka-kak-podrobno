import React from 'react';

export type ItemType = {
    title: string
    value: any
}

export type AccordionType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionType) {
    console.log('Accordion render')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitleProps = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitleProps) {
    console.log('AccordionTitle render')
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody render')
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    )
}
