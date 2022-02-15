import React from "react";
import { Paragraph } from './styles'

const Text = (
    props,
) => {
    return (
        <Paragraph
            fontSize={props.fontSize}
            color={props.color}
            padding={props.padding}
            margin={props.margin}
        >
            {props.children}
        </Paragraph>
    )
}
export default Text