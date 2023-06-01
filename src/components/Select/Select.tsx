import React, {useEffect, useState} from 'react';
import {ItemType} from "../Accordion/Accordion";
import s from './Select.module.css'

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(true)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    // @ts-ignore
    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (props.items[i + 1]) {
                        props.onChange(props.items[i + 1].value)
                        return;
                    }
                }
            }
            props.onChange(props.items[0].value)
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={s.select}>
            <select>
                <option value='ss'>New York</option>
                <option value='ss'>Chicago</option>
                <option value='ss'>San Francisco</option>
            </select>

            <div className={s.select} onKeyUp={onKeyUp}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={s.items}>
                        {props.items.map(i =>
                            <div onMouseEnter={() => setHoveredElementValue(i.value)}
                                 className={s.item + '' + (hoveredItem === i ? s.select : '')} key={i.value}
                                 onClick={() => onItemClick(i.value)}>{i.title}</div>)}
                    </div>
                }
            </div>
        </div>
    );
};
