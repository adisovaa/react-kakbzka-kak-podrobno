import React from "react";
import {Clock} from "./Clock";

export default {
    mode: 'digital' || 'analog'
}

export const BaseAnalogExample = () => {
    return <>
        <Clock/>
    </>
}

export const BaseDigitalExample = () => {
    return <>
        <Clock/>
    </>
}