import { styled } from "styled-components";

const StyledP = styled.p`
  font-size: ${({ $size }) =>
    $size === "extra-small"
      ? "var(--text-xs)"
      : $size === "small"
      ? "var(--text-sm)"
      : $size === "medium"
      ? "var(--text-base)"
      : $size === "large"
      ? "var(--text-lg)"
      : $size === "extra-large"
      ? "var(--text-xl)"
      : "var(--text-base)"};
  font-weight: ${({ $weight }) =>
    $weight === "light"
      ? "300"
      : $weight === "regular"
      ? "400"
      : $weight === "bold"
      ? "700"
      : "400"};
  font-family: ${({ $typeFace }) =>
    $typeFace === "secondary"
      ? "var(--font-family-secondary)"
      : "var(--font-family-primary)"};
  line-height: 1.4;
  letter-spacing: ${({ $spacing }) => $spacing || ".2em"};
  word-spacing: ${({ $wordSpacing }) => $wordSpacing || ".15em"};
  color: ${({ $color }) => $color || "var(--cordis-text-color)"};
  text-align: ${({ $align }) => $align || "left"};
  text-decoration: ${({ $decoration }) => $decoration || "none"};
  text-transform: ${({ $transform }) => $transform || "none"};
  text-overflow: ${({ $overflow }) => $overflow || "clip"};
  white-space: ${({ $wrap }) => $wrap || "normal"};
  opacity: ${({ $opacity }) => $opacity || 1};
`;

const StyledH1 = styled.h1`
  font-size: ${({ $size }) =>
    $size === "extra-small"
      ? "var(--text-xl)"
      : $size === "small"
      ? "var(--text-2xl)"
      : $size === "medium"
      ? "var(--text-3xl)"
      : $size === "large"
      ? "var(--text-4xl)"
      : $size === "extra-large"
      ? "var(--text-5xl)"
      : "var(--text-6xl)"};
  font-weight: ${({ $weight }) =>
    $weight === "light"
      ? "100"
      : $weight === "regular"
      ? "400"
      : $weight === "bold"
      ? "700"
      : "400"};
  font-family: ${({ $typeFace }) =>
    $typeFace === "primary"
      ? "var(--font-family-primary)"
      : "var(--font-family-secondary)"};
  line-height: 1.2;
  letter-spacing: ${({ $spacing }) => $spacing || ".01em"};
  color: ${({ $color }) => $color || "var(--cordis-text-color)"};
  text-align: ${({ $align }) => $align || "left"};
  text-decoration: ${({ $decoration }) => $decoration || "none"};
  text-transform: ${({ $transform }) => $transform || "none"};
  text-overflow: ${({ $overflow }) => $overflow || "clip"};
  white-space: ${({ $wrap }) => $wrap || "normal"};
  opacity: ${({ $opacity }) => $opacity || 1};
`;

const StyledH2 = styled.h2`
  font-size: ${({ $size }) =>
    $size === "extra-small"
      ? "var(--text-xl)"
      : $size === "small"
      ? "var(--text-2xl)"
      : $size === "medium"
      ? "var(--text-3xl)"
      : $size === "large"
      ? "var(--text-4xl)"
      : $size === "extra-large"
      ? "var(--text-5xl)"
      : "var(--text-5xl)"};
  font-weight: ${({ $weight }) =>
    $weight === "light"
      ? "100"
      : $weight === "regular"
      ? "400"
      : $weight === "bold"
      ? "700"
      : "400"};
  font-family: ${({ $typeFace }) =>
    $typeFace === "primary"
      ? "var(--font-family-primary)"
      : "var(--font-family-secondary)"};
  line-height: 1.2;
  letter-spacing: ${({ $spacing }) => $spacing || ".01em"};
  color: ${({ $color }) => $color || "var(--cordis-text-color)"};
  text-align: ${({ $align }) => $align || "left"};
  text-decoration: ${({ $decoration }) => $decoration || "none"};
  text-transform: ${({ $transform }) => $transform || "none"};
  text-overflow: ${({ $overflow }) => $overflow || "clip"};
  white-space: ${({ $wrap }) => $wrap || "normal"};
  opacity: ${({ $opacity }) => $opacity || 1};
`;

const StyledH3 = styled.h3`
  font-size: ${({ $size }) =>
    $size === "extra-small"
      ? "var(--text-xl)"
      : $size === "small"
      ? "var(--text-2xl)"
      : $size === "medium"
      ? "var(--text-3xl)"
      : $size === "large"
      ? "var(--text-4xl)"
      : $size === "extra-large"
      ? "var(--text-5xl)"
      : "var(--text-4xl)"};
  font-weight: ${({ $weight }) =>
    $weight === "light"
      ? "100"
      : $weight === "regular"
      ? "400"
      : $weight === "bold"
      ? "700"
      : "400"};
  font-family: ${({ $typeFace }) =>
    $typeFace === "primary"
      ? "var(--font-family-primary)"
      : "var(--font-family-secondary)"};
  line-height: 1.2;
  letter-spacing: ${({ $spacing }) => $spacing || ".01em"};
  color: ${({ $color }) => $color || "var(--cordis-text-color)"};
  text-align: ${({ $align }) => $align || "left"};
  text-decoration: ${({ $decoration }) => $decoration || "none"};
  text-transform: ${({ $transform }) => $transform || "none"};
  text-overflow: ${({ $overflow }) => $overflow || "clip"};
  white-space: ${({ $wrap }) => $wrap || "normal"};
  opacity: ${({ $opacity }) => $opacity || 1};
`;

function Text({ $type, children, ...props }) {
  return (
    <>
      {$type === "p" ? (
        <StyledP {...props}>{children}</StyledP>
      ) : $type === "h1" ? (
        <StyledH1 {...props}>{children}</StyledH1>
      ) : $type === "h2" ? (
        <StyledH2 {...props}>{children}</StyledH2>
      ) : $type === "h3" ? (
        <StyledH3 {...props}>{children}</StyledH3>
      ) : (
        <StyledP {...props}>{children}</StyledP>
      )}
    </>
  );
}

export default Text;
