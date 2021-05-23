import styled from 'styled-components';
import React from 'react'; 
import { TextField } from '@material-ui/core';
import { FieldProps } from 'formik';

const StyledButton = styled.button`
	text-align: 'center' as center;
	font-size: 0.8rem;
	border-radius: 10px;
    padding: 0.15em 3.75em;
    background: lightgreen;
    color: black;
    border: 2px solid green;
`;

const Button = ({ children }) => {
	return <StyledButton>{children}</StyledButton>;
};




export default Button;
