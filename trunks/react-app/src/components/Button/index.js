import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: palevioletred;
  color: #fff;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`

const Button = () => <StyledButton>Push Me</StyledButton>

export default Button
