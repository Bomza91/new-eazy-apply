import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";
import { tokens } from "../../data/tokens";
import { useNewAccount } from "./NewAccount.useNewAccount";

const InputWrapper = styled.div`
  padding: ${tokens.spacing.s} 0;
`;

export const NewAccount = () => {
  const {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    createAccount,
  } = useNewAccount();
  return (
    <Layout
      title="New Account"
      secondary={["Cancel", "/"]}
      primary={["Create Account", createAccount,
     ]}
    >
      <InputWrapper>
        {" "}
        <Input value={email} label="email" accepts="email" onChange={setEmail} />
      </InputWrapper>
      <InputWrapper>
        {" "}
        <Input value={password} label="Password" accepts="password" onChange={setPassword} />
      </InputWrapper>
      <InputWrapper>
        {" "}
        <Input
          label="Confirm Password"
          accepts="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
      </InputWrapper>
    </Layout>
  );
};
export default NewAccount;
