import React from "react";
import { Alert as MuiAlert } from "@material-ui/lab";
import { CircularProgress } from '@material-ui/core';

const SEVERITY_MAP = {
  error: "error",
  validation: "warning",
  resolving: "info",
};

/**
 * 
 * @typedef {object} props
 * @property {'error' | 'validation' | 'resolving'} nature
 * @property {string} title
 * @property {string} [description]
 
 */

/**
 *
 * @param {props} props
 * @returns {JSX.Element}
 */

export const Alert = (props) => {
  const { nature = "validation", title, description } = props;

  const severity = SEVERITY_MAP[nature];

  return <MuiAlert severity={severity}>{title}123</MuiAlert>;
};

export default Alert;
