import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}

const callBack = action('accordion mode change value fired')
const onClickCallback = action('accordion mode change value fired')


export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                  collapsed={true}
                                                  onChange={callBack}
                                                  items={[]}
                                                  onClick={onClickCallback}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'}
                                                     collapsed={false}
                                                     onChange={callBack}
                                                     items={[{title: 'Alexa', value: 1}, {title: 'Angele', value: 11},
                                                         {title: 'Siri', value: 12}, {title: 'Alisa', value: 13}]}
                                                     onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: 'Siri', value: 1},
                          {title: 'Alexa', value: 2},
                          {title: 'Alisa', value: 3},
                      ]}
                      onClick={(value) => {
                          alert(`user with id ${value} got job offer`)
                      }}
    />
}
