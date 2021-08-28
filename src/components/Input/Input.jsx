import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { tokens } from "../../data/tokens";

const StyledTextField = styled(TextField)`
  & .MuiFormLabel-root-Mui-focused {
    color: rgb(${tokens.colors.turquoise});
  }
  & .MuiInputBase-root::after {
    border-botton-color: rgb(${tokens.colors.turquoise});
  }
`;

/**
 * @typedef {object} props
 * @property {string} label
 * @property {string} value
 * @property {'text' | 'email' | 'password' | 'datetime-local'} accepts
 * @property {{value: string} => void} onChange
 */

/**
 * 
 * @param {props} props 
 * @returns {JSX.Element}
 */

export const Input = (props) => {
  const { accepts, label, onChange, value } = props;

  const handleChange = (event) => onChange(event.target.value);

  return (
    <StyledTextField
      value={value}
      label={label}
      InputLabelProps={{ shrink: accepts === 'date' ? true : undefined }}
      disabled={!onChange}
      onChange={handleChange}
      fullWidth
      inputProps={{ type: accepts }}
      variant="filled"
      autoComplete="off"
    />
  );
};

export default Input;
