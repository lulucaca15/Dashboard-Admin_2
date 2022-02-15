import styled from 'styled-components'

export const Paragraph = styled.p`
font-size: ${props => props.fontSize && props.fontSize};
color: ${props => props.color && props.color};
padding: ${props => props.padding && props.padding};
margin: ${props => props.margin && props.margin};
`