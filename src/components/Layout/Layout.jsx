import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Text } from "../Text";
import { Dialog } from "@material-ui/core";
import { Button } from "../Button";
import { Link } from "../Link";
import { Alert } from "../Alert";
import { useHistory } from "react-router-dom";
import "../../types/action";

const COLORS = {
  white: `rgb(${tokens.colors.white})`,
  turquoise: `rgb(${tokens.colors.turquoise})`,
  whiteStronger: `rgb(${tokens.colors.white}) ${tokens.opacity.stronger})`,
  blackStrong: `rgb(${tokens.colors.black}) rgb(${tokens.opacity.strong})`,
};

const Base = styled.div`
  text-align: center;
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
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrap = styled.div`
  padding: ${tokens.spacing.xs};
`;

const LinkWrap = styled.div`
  padding: ${tokens.spacing.m} ${tokens.spacing.xs} ${tokens.spacing.xs};
`;

const NestedChildren = styled.div`
  width: 100%;
  padding: ${tokens.spacing.l} 0;
`;

const BaseWrap = styled.div`
  background: ${({ $inverse }) => ($inverse ? COLORS.turquoise : COLORS.white)};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

const AlertWrap = styled.div`
  padding-bottom: ${tokens.spacing.m};
`;

const Header = styled.header`
padding: ${tokens.spacing.xl} ${tokens.spacing.m} 0};
`;

const OverlayHeader = styled.header`
padding: ${tokens.spacing.xl} ${tokens.spacing.m} 0};
text-align: center;
`;

const Actions = styled.aside`
  padding: 0 ${tokens.spacing.m} ${tokens.spacing.l};
`;

/**
 * @typedef {object} props
 * @property {boolean} overlay
 * @property {JSX.Element} children
 * @property {string} title
 * @property {boolean}
 * @property {boolean} inverse
 * @property {boolean} padded
 * @property {action} [primary]
 * @property {action} [secondary]
 * @property {action} [extra]
 * @property {[tittle: string, description?: string, nature: 'error' | 'validation' | 'resolving']}
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
    overlay,
  } = props;

  const history = useHistory();

  const handleForm = (event) => {
    event.preventDefault();

    if (typeof primary[1] === "string") {
      const newLocation = { pathname: primary[1], state: primary[2] || {} };
      return history.push(newLocation);
    }
    primary[1]();

    if (overlay) {
      return (
        <Dialog open>
          <OverlayHeader>
            <Text size="xl" component="h2">
              {title}
            </Text>
          </OverlayHeader>
          {children}
        </Dialog>
      );
    }
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
          <Nested padded={padded}>
            <NestedChildren>{children}</NestedChildren>
          </Nested>

          <Actions aria-label="actions"> 
            {alert && (
              <AlertWrap>
                <Alert {...alert} />
              </AlertWrap>
            )}

            {secondary && (
              <ButtonWrap>
                <Button
                  action={(form && !primary) || secondary[1]}
                  detail={secondary[1] || {}}
                  inverse={inverse}
                  full
                >
                  {secondary[0]}
                </Button>
              </ButtonWrap>
            )}

            {primary && (
              <ButtonWrap>
                <Button
                  action={form || primary[1]}
                  inverse={inverse}
                  full
                  detail={primary[2] || {}}
                  importance="primary"
                >
                  {primary[0]}
                </Button>
              </ButtonWrap>
            )}

            {extra && (
              <LinkWrap>
                <Link
                  action={extra[1]}
                  detail={extra[2] || {}}
                  inverse={inverse}
                >
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
