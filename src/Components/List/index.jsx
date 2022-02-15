import React from "react"
import Item from '../List/Item'

const DefaultProps = {
    bgColor: "white"
}

const List = (
    {
        items,
        props,
    }

) => (
    <ul 
        style={{"list-style":"none", "padding": "5px"}}
    >
        {items.map((content) => (
            <Item
                padding="5px"
                cursor="pointer"
                display="flex"
                align="center"
                border="10px"
            >                
                {content.label}                
            </Item>            
        ))}
    </ul>
)


export default List