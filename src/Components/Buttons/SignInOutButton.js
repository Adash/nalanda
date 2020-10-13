import React from 'react'
import styled from 'styled-components'

const RoundButton = styled.button`
  color: #edf0f1;
  padding: 4px 15px;
  background-color: #7cb69b;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  text-decoration: none;

  @media only screen and (max-width: 375px) {
    padding: 2px 9px;
  }

  :hover {
    color: #0056b3;
    background-color: rgba(0, 152, 190, 0.7);
  }
`

export default RoundButton
