import Text from "./Text";
import styled from "styled-components";

const StyledLink = styled.a`
  border-bottom: 1px solid var(--cordis-accent);
  opacity: .7;

  &:hover {
    cursor: pointer;
  }
`;

export default function Link({ children, ...props }) {
  return (
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
  );
}
