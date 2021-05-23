import styled from 'styled-components';
import React from 'react'; 
import { TextField } from '@material-ui/core';
import { FieldProps } from 'formik';

const StyledModelField = styled.text`
	font-size: 0.8rem;	
`;

const ModelField = ({ children }) => {
	return <StyledModelField>{children}</StyledModelField>;
};


export default ModelField;