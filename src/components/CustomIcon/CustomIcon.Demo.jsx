import React from "react";
import { CostomIcon } from "./CostomIcon";
import styled from "styled-components";
import { tokens } from "../../data/tokens";



export const Demo = () => {
  return (
    <div>
      <CostomIcon image="activeCloud" />
      <CostomIcon image="noCloud" />
      <CostomIcon image="email" />

    </div>
  );
};
export default Demo;
