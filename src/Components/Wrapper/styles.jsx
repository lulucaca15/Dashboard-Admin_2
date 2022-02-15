import styled from 'styled-components'

export const Div = styled.div`
display: ${props => props.display ? props.display :  ''};
background-color: ${props => props.bgColor ? props.bgColor :  '#fff'};
color: ${props => props.color && props.color};

height: ${props => props.height && props.height};
width: ${props => props.width && props.width};

padding: ${props => props.padding && props.padding};
margin: ${props => props.margin && props.margin};
top: ${props => props.top && props.top};
z-index: ${props => props.zIndex && props.zIndex};
flex: ${props => props.flex && props.flex};

align-items: ${props => props.align && props.align};
justify-content: ${props => props.justify && props.justify};
position: ${props => props.position && props.position};
border-radius: ${props => props.border && props.border};
cursor: ${props => props.cursor && props.cursor};
box-shadow: ${props => props.shadow && props.shadow};
`