import styled from 'styled-components'

export const Div = styled.div`
display: ${props => props.display ? props.display :  ''};
background-color: ${props => props.bgColor ? props.bgColor :  '#fff'};

height: ${props => props.height && props.height};
width: ${props => props.width && props.width};

padding: ${props => props.padding && props.padding};
margin: ${props => props.margin && props.margin};

align-items: ${props => props.align && props.align};
justify-content: ${props => props.justify && props.justify};
position: ${props => props.position && props.position};
`