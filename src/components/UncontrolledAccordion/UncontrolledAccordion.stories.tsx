import React, {useState} from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

const callBack = action('collapsed or uncollapsed clicked')
export const AccordionModeChanging = () => {
    return <UncontrolledAccordion title={'menu'}/>
}