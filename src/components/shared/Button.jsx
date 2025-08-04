import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: border-box;
  width: fit-content;

  background-color: ${({ $type }) =>
    $type === "ghost"
      ? "none"
      : $type === "accent-ghost"
      ? "none"
      : $type === "underlined"
      ? "none"
      : $type === "emphasis"
      ? "var(--cordis-emphasis)"
      : $type === "emphasis2"
      ? "var(--cordis-emphasis)"
      : $type === "emphasis-ghost"
      ? "none"
      : $type === "white"
      ? "var(--cordis-white)"
      : $type === "accent"
      ? "var(--cordis-accent)"
      : "none"};

  & p {
    color: ${({ $type }) =>
      $type === "accent-ghost"
        ? "var(--cordis-accent)"
        : $type === "underlined"
        ? "var(--cordis-black)"
        : $type === "white-ghost"
        ? "var(--cordis-white)"
        : "var(--cordis-black)"};
  }

  padding: 1rem 2rem;
  outline: ${({ $type }) =>
    $type === "accent-ghost"
      ? "2px solid var(--cordis-accent)"
      : $type === "ghost"
      ? "1px solid var(--cordis-black)"
      : $type === "white-ghost"
      ? "2px solid var(--cordis-white)"
      : $type === "emphasis-ghost"
      ? "1px solid var(--cordis-black)"
      : "none"};
  border-bottom: ${({ $type }) =>
    $type === "underlined" ? "2px solid var(--cordis-emphasis)" : "none"};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: scale 0.2s ease-in-out, background-color 0.3s ease-in-out,
        color 0.1s ease-in-out, outline 0.3s ease-in-out;

      background-color: ${({ $type }) =>
        $type === "accent-ghost"
          ? "var(--cordis-accent)"
          : $type === "emphasis-ghost"
          ? "var(--cordis-emphasis)"
          : $type === "ghost"
          ? "var(--cordis-black)"
          : $type === "white-ghost"
          ? "var(--cordis-white)"
          : $type === "underlined"
          ? "var(--cordis-emphasis)"
          : $type === "emphasis"
          ? "rgba(255, 255, 255, 0)"
          : "rgba(255, 255, 255, 0)"};

      & p {
        color: ${({ $type }) =>
          $type === "accent-ghost"
            ? "var(--cordis-black)"
            : $type === "ghost"
            ? "var(--cordis-white)"
            : $type === "underlined"
            ? "var(--cordis-black)"
            : $type === "emphasis"
            ? "var(--cordis-emphasis)"
            : $type === "emphasis2"
            ? "var(--cordis-black)"
            : $type === "accent"
            ? "var(--cordis-accent)"
            : $type === "white"
            ? "var(--cordis-white)"
            : "var(--cordis-black)"};
      }

      outline: ${({ $type }) =>
        $type === "emphasis"
          ? "2px solid var(--cordis-emphasis)"
          : $type === "emphasis2"
          ? "2px solid var(--cordis-black)"
          : $type === "ghost"
          ? "2px solid var(--cordis-black)"
          : $type === "white"
          ? "2px solid var(--cordis-white)"
          : $type === "emphasis"
          ? "2px solid var(--cordis-emphasis)"
          : $type === "accent"
          ? "2px solid var(--cordis-accent)"
          : "none"};
    }
  }

  &:active {
    transition: all 0.1s ease-in-out;
    transform: scale(0.97);

    background-color: ${({ $type }) =>
      $type === "accent-ghost"
        ? "var(--cordis-accent)"
        : $type === "underlined"
        ? "var(--cordis-emphasis)"
        : $type === "white-ghost"
        ? "var(--cordis-white)"
        : $type === "ghost"
        ? "var(--cordis-black)"
        : $type === "emphasis-ghost"
        ? "var(--cordis-emphasis)"
        : $type === "emphasis"
        ? "rgba(255, 255, 255, 0)"
        : "rgba(255, 255, 255, 0)"};

    & p {
      color: ${({ $type }) =>
        $type === "accent-ghost"
          ? "var(--cordis-black)"
          : $type === "underlined"
          ? "var(--cordis-black)"
          : $type === "ghost"
          ? "var(--cordis-white)"
          : $type === "emphasis"
          ? "var(--cordis-emphasis)"
          : $type === "accent"
          ? "var(--cordis-accent)"
          : $type === "white"
          ? "var(--cordis-white)"
          : "var(--cordis-black)"};
    }

    outline: ${({ $type }) =>
      $type === "emphasis"
        ? "2px solid var(--cordis-emphasis)"
        : $type === "emphasis2"
        ? "2px solid var(--cordis-black)"
        : $type === "ghost"
        ? "2px solid var(--cordis-black)"
        : $type === "white"
        ? "2px solid var(--cordis-white)"
        : $type === "emphasis"
        ? "2px solid var(--cordis-emphasis)"
        : $type === "accent"
        ? "2px solid var(--cordis-accent)"
        : "none"};
  }
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
