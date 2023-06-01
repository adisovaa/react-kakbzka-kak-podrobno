import React from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callBack = action('on or off clicked')

export const UncontrolledOn = () => <UncontrolledOnOff defaultOn={true} onChange={callBack}/>
export const UncontrolledOff = () => <UncontrolledOnOff defaultOff={false} onChange={callBack}/>
export const BugMode = () => <div> Unsync change when defaultValue rendered</div>
export const DefaultInputValue = () => <input defaultValue={'yo'}/>