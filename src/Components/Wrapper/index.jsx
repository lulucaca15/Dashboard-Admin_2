import React from "react"
import { Div } from './styles'

const DefaultProps = {
    bgColor: "white"
}

const Wrapper = (
    props,
) => {
    return(
        <Div
            bgColor={props.bgColor ? props.bgColor : DefaultProps.bgColor}
            display={props.display}
            height={props.height}
            width={props.width}
            padding={props.padding}
            margin={props.margin}
            align={props.align}
            justify={props.justify}
            position={props.posotion}
        >
            {props.children}
        </Div>
    )
}

export default Wrapper