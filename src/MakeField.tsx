import styled from 'styled-components';
import React from 'react'; 
import { TextField } from '@material-ui/core';
import { FieldProps } from 'formik';

const StyledMakeField = styled.text`
	font-size: 0.8rem;	
`;

const MakeField = ({ children }) => {
	return <StyledMakeField>{children}</StyledMakeField>;
};


export default MakeField;