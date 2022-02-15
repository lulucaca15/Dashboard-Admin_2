import styled from 'styled-components'

export const ListItem = styled.li`
padding: ${props => props.padding && props.padding};
cursor: ${props => props.cursor && props.cursor};
display: ${props => props.display ? props.display :  ''};
align-items: ${props => props.align && props.align};
&:hover{
    background-color: rgb(228,228,250);
}
border-radius: ${props => props.border && props.border}
`