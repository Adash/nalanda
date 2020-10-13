import React from 'react'
import styled from 'styled-components'

const SignInOutButton = styled.button`
  color: #edf0f1;
  padding: 4px 15px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  text-decoration: none;

  :hover {
    color: #0056b3;
    background-color: rgba(0, 152, 190, 0.7);
  }
`

export default SignInOutButton
