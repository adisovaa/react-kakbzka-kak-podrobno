import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log('App render')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            {/*<AppTitle title={'hey, I am a title'}/>*/}
            {/*Article 1*/}
            {/*<Accordion title={'first Accordion'} collapsed={true}/>*/}
            {/*<Accordion title={'second Accordion'} collapsed={false}/>*/}


            {/*Article 1*/}
            {/*<UncontrolledRating value={0}/>*/}
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}


            <OnOff onChange={setSwitchOn} on={switchOn}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating onChange={() => ratingValue}/>

            <Accordion titleValue={'first Accordion'}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={[]}
                       onClick={() => setRatingValue}
                       collapsed={accordionCollapsed}/>

            <UncontrolledAccordion titleValue={'first Accordion'}/>
        </div>
    );
}

export function AppTitle(props: any) {
    console.log('AppTitle  render')
    return (
        <div>{props.title}</div>
    )
}

export default App;