import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Text } from "../Text";
import { Button } from "../Button";
import { Link } from "../Link";
import { Alert } from "../Alert";
import { useHistory } from "react-router-dom";
import "../../types/action";

const COLORS = {
  white: `rgb(${tokens.colors.white})`,
  purple: `rgb(${tokens.colors.purple})`,
  whiteStronger: `rgb(${tokens.colors.white}),${tokens.opacity.stronger}`,
  blackStrong: `rgb(${tokens.colors.black}),${tokens.opacity.strong}`,
};

const Base = styled.div`
  text-align: center;
  padding: ${tokens.spacing.xl} ${tokens.spacing.m} ${tokens.spacing.l};
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ inverse }) =>
    inverse ? COLORS.whiteStronger : COLORS.blackStrong};
  width: 100%;
  max-width: 25rem;
  max-height: 45rem;
  
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const Nested = styled.div`
  padding: ${({ padded }) => (padded ? `0 ${tokens.spacing.m}` : 0)};
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;

const ButtonWrap = styled.div`
  padding: ${tokens.spacing.xs};
`;

const LinkWrap = styled.div`
  padding: ${tokens.spacing.m} ${tokens.spacing.xs} ${tokens.spacing.xs};
`;
const NestedChildren = styled.div`
  width: 100%;
  padding: ${tokens.spacing.m} 0;
`;

const Header = styled.header`
  padding: ${tokens.spacing.xl} ${tokens.spacing.m} 0;
`;
const Actions = styled.aside`
  padding: 0 ${tokens.spacing.m} ${tokens.spacing.l};
`;

const BaseWrap = styled.div`
  background: ${({ $inverse }) => ($inverse ? COLORS.purple : COLORS.white)};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;
const AlertWrap = styled.div`
  padding-bottom: ${tokens.spacing.m};
`;
/**
 *
 * @typedef {[string, string | function, object]} action
 *
 */

/**
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {string} title
 * @property {boolean} inverse
 * @property {boolean} padded
 * @property {action} [primary]
 *  @property {action} [secondary]
 *  @property {action} [extra]
 * @property {{ title: string, dscription?: string, nature: 'error' | 'validation' | 'resolving'}}
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

export const Layout = (props) => {
  const {
    children,
    title,
    padded = false,
    inverse,
    extra,
    primary,
    secondary,
    alert,
    form,
  } = props;

  const history = useHistory();

  const handleForm = (event) => {
    event.preventDefault();
    if (typeof primary[1] === "string") {
      return history.to(primary[1]);
    }
    primary[1]();
  };

  return (
    <BaseWrap $inverse={inverse}>
      <Base>
        <Header>
          <Text size="xl" component="h1" inverse={inverse}>
            {title}
          </Text>
        </Header>

        
          <Content
            as={form ? "form" : "div"}
            onSubmit={form ? handleForm : undefined}
          >
            <main>
            <Nested padded={padded}>
              <NestedChildren>{children} </NestedChildren>
            </Nested>
        
        </main>
        <Actions aria-label="actions">
          {alert && (
            <AlertWrap>
              <Alert {...alert} />
            </AlertWrap>
          )}

          {secondary && (
            <ButtonWrap>
              <Button action={secondary[1]} inverse={inverse} full>
                {secondary[0]}
              </Button>
            </ButtonWrap>
          )}

          {primary && (
            <ButtonWrap>
              <Button
                inverse={inverse}
                action={primary[1]}
                full
                importance="primary"
              >
                {primary[0]}
              </Button>
            </ButtonWrap>
          )}

          {extra && (
            <LinkWrap>
              <Link action={extra[1]} inverse={inverse} full>
                {extra[0]}
              </Link>
            </LinkWrap>
          )}
        </Actions>
        </Content>
      </Base>
    </BaseWrap>
  );
};
export default Layout;
