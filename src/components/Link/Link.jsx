import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { tokens } from "../../data/tokens";
import Text from "../Text";

/**
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {boolean} inverse
 * @property {string | function} action
 */

/**
 *
 * @param {props} props
 * @returns {JSX.Element}
 */

const Base = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  text-decoration: underlined;
  border-width: 0;
  color: ${({ inverse }) => inverse ? `rgba(${tokens.colors.white}, ${tokens.opacity.stronger})` : `rgba(${tokens.colors.black}) ${tokens.opacity.stronger})`} ;
`;

export const Link = (props) => {
  const { action, children, inverse } = props;

  if (typeof action !== "string")
    return (
      <Base inverse={inverse} as="button" onClick={action}>
        <Text inverse={inverse} size="s">{children}</Text>
      </Base>
    );
  return (
    <Base inverse={inverse} as={RouterLink} component="a" to="RouterLink">
      <Text inverse={inverse} size="s">{children}</Text>
    </Base>
  );
};

export default Link;
