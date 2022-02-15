import React from "react"
import { ListItem } from './styles'
import LineStyle from '@mui/icons-material/LineStyle'

const DefaultProps = {
    bgColor: "white"
}

const Item = (
    props,
) => {
    return(
        <ListItem
            padding={props.padding}
            cursor={props.cursor}
            display={props.display}
            align={props.align}
            border={props.border}
        >
            <LineStyle style={{"margin-right":"5px", "font-size":"20px !important"}}/>
            {props.children}
        </ListItem>
    )
}

export default Item