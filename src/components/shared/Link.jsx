import Text from "./Text";
import styled from "styled-components";

const StyledLink = styled.a`
  border-bottom: 1px solid var(--cordis-accent);
  opacity: 0.7;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLink2 = styled.a`
  opacity: 0.7;

  &:hover {
    cursor: pointer;
  }
`;

export default function Link({ $type, children, ...props }) {
  return (
    <>
      {$type === "secondary" ? (
        <StyledLink2 {...props}>
          <Text
            $color="var(--cordis-accent)"
            $weight="light"
            $size="small"
            style={{ lineHeight: ".7" }}
          >
            {children}
          </Text>
        </StyledLink2>
      ) : (
        <StyledLink {...props}>
          <Text
            $color="var(--cordis-accent)"
            $weight="light"
            $size="small"
            style={{ lineHeight: ".7" }}
          >
            {children}
          </Text>
        </StyledLink>
      )}
    </>
  );
}
