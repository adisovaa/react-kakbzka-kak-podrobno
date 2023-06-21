import React, {useEffect, useState} from "react";

export type PropsType = {}

const getTwoDigitString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])


    return <div>
        <span>{getTwoDigitString(date.getHours())}</span>
        :
        <span>{getTwoDigitString(date.getMinutes())}</span>
        :
        <span>{getTwoDigitString(date.getSeconds())}</span>
    </div>
}