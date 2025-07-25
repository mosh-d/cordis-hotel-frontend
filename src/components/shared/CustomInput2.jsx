import { styled } from "styled-components";
import Text from "./Text";

const StyledCustomInput2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  flex: 1;
  border-bottom: 1px solid var(--cordis-accent);
  padding-bottom: .3rem;
`;

const StyledCustomInput2Black = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 27rem;
  gap: 1rem;
  flex: 1;
  border-bottom: 1px solid var(--cordis-black);
  padding-bottom: .3rem;
`

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: transparent;
  height: 100%;
  width: 100%;
  color: var(--cordis-accent);
  font-size: var(--text-sm);
  letter-spacing: 0.2rem;

   &:focus-visible {
    outline: none;
    border: none;
  }

  &::placeholder {
    color: var(--cordis-accent);
    font-size: var(--text-sm);
    opacity: 0.5;
    letter-spacing: 0.2rem;
  }
`;

const StyledInputBlack = styled.input`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: transparent;
  height: 100%;
  width: 100%;
  color: var(--cordis-black);
  font-size: var(--text-sm);
  letter-spacing: 0.2rem;

  &:focus-visible {
    outline: none;
    border: none;
  }

  &::placeholder {
    color: var(--cordis-black);
    font-size: var(--text-sm);
    opacity: 0.5;
    letter-spacing: 0.2rem;
  }
`;

export default function CustomInput2({ $style, header, $placeholder, ...props }) {
  return(
    <>
    {
      $style === "accent" ? (
      <StyledCustomInput2>
        <Text $type="p" $color="var(--cordis-accent)" $weight="light" $typeFace="primary">{header}</Text>
        <StyledInput placeholder={$placeholder} {...props} />
      </StyledCustomInput2>
      ) : (
        <StyledCustomInput2Black>
          <Text $type="p" $color="var(--cordis-black)" $weight="light" $typeFace="primary">{header}</Text>
          <StyledInputBlack placeholder={$placeholder} {...props} />
        </StyledCustomInput2Black>
      )
    }
    </>
  )
}