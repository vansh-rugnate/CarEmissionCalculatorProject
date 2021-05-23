import styled from 'styled-components';
import React from 'react'; 
import { TextField } from '@material-ui/core';
import { FieldProps } from 'formik';

const StyledMileageField = styled.text`
	font-size: 0.8rem;	
`;

const MileageField = ({ children }) => {
	return <StyledMileageField>{children}</StyledMileageField>;
};


export default MileageField;