import React, {useState} from 'react';
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'New York'},
                    {value: '2', title: 'Chicago'},
                    {value: '3', title: 'San Francisco'},
                ]}/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'New York'},
                    {value: '2', title: 'Chicago'},
                    {value: '3', title: 'San Francisco'},
                ]}/>
    </>
}