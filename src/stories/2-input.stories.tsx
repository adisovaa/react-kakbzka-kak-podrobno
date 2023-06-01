import React, {ChangeEvent, useRef, useState} from 'react'
import {action} from "@storybook/addon-actions";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <>
        <input onChange={onChangeHandler}/> - {value} </>
}

export const getValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef(null)

    const save = () => {
        // @ts-ignore
        let el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input/>
        <button onClick={save}>save</button>
        - actual value: {value}
    </>
}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}


export const ControlledCheckbox = () => {
    const [checkedValue, setCheckedValue] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckedValue(e.currentTarget.checked)
    }

    return <input type='checkbox' checked={checkedValue} onChange={onChangeHandler}/>
}


export const ControlledSelect = () => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>('1')

    const selectedValueHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        return setSelectedValue(e.currentTarget.value)
    }

    return <select value={selectedValue} onChange={selectedValueHandler}>
        <option value={'1'}>New York</option>
        <option value={'2'}>Chicago</option>
        <option value={'3'}>San Francisco</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input/>


