import Text from "./Text";
import styled from "styled-components";

const StyledLink = styled.span`
  border-bottom: ${({ $type }) => $type === "default" ? '1px solid var(--cordis-black)' : '1px solid var(--cordis-accent)'};
  opacity: 0.7;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLink2 = styled.span`
  border-bottom: 1px solid var(--cordis-black);
  opacity: 0.7;

  &:hover {
    cursor: pointer;
  }
`;

export default function Link({ $type, children, ...props }) {
  return (
    <>
      {$type === "default" ? (
        <StyledLink2 {...props}>
          <Text
            $color="var(--cordis-black)"
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
