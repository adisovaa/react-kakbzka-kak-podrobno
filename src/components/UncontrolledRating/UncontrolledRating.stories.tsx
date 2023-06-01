import React from "react";
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}

const callBack = action('on or off clicked')

export const EmptyStars = () => <UncontrolledRating defaultValue={0} onChange={callBack}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={callBack}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={callBack}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={callBack}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={callBack}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={callBack}/>
