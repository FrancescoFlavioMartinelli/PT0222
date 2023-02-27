import React from 'react';

import { CustomContext } from './App';

export function CustomComponent(props) {
    const value = React.useContext(CustomContext)

    return (<>
    <h1>
        {value.name}
        <br></br>
        {value.price}
    </h1>
    </>)
}

export function Component1(prop) {

    return (<>
    <h1>comp 1</h1>

        <Component2></Component2>
    </>)
}
export function Component2(prop) {

    return (<>
    <h1>comp 2</h1>
    <CustomComponent></CustomComponent>
    </>)
}