import { styled } from "styled-components";
import Text from "./Text";
import RoomsAndGuestsPopup from "../../components/shared/RoomsAndGuestsPopup";
import { useState, useRef, useEffect } from "react";

const StyledCustomInput2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 1rem;
  flex: 1;
  padding-bottom: 0.3rem;
  width: 100%;
  position: relative;
`;

const StyledCustomInput2Black = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* min-width: 20rem; */
  gap: 1rem;
  flex: 1;
  padding-bottom: 0.3rem;
  width: 100%;
`;

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
  border-bottom: 1px solid var(--cordis-accent);

  &:focus-visible {
    outline: none;
    border-color: var(--cordis-emphasis);
  }

  &::placeholder {
    color: var(--cordis-accent);
    font-size: var(--text-sm);
    opacity: 0.5;
    letter-spacing: 0.2rem;
  }
`;
const StyledSelect = styled.select`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: transparent;
  height: 100%;
  width: 100%;
  color: var(--cordis-accent);
  font-size: var(--text-sm);
  letter-spacing: 0.2rem;
  border-bottom: 1px solid var(--cordis-accent);

  &:focus-visible {
    outline: none;
    border-color: var(--cordis-emphasis);
  }

  &::placeholder {
    color: var(--cordis-accent);
    font-size: var(--text-sm);
    opacity: 0.5;
    letter-spacing: 0.2rem;
  }
`;

const StyledSelectBlack = styled.select`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: transparent;
  height: 100%;
  width: 100%;
  color: var(--cordis-black);
  font-size: var(--text-sm);
  letter-spacing: 0.2rem;
  cursor: pointer;
  border-bottom: 1px solid var(--cordis-black);

  &:focus-visible {
    outline: none;
    border-color: var(--cordis-emphasis);
  }

  &::placeholder {
    color: var(--cordis-black);
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
  border-bottom: 1px solid var(--cordis-black);

  &:focus-visible {
    outline: none;
    border-color: var(--cordis-emphasis);
  }

  &::placeholder {
    color: var(--cordis-black);
    font-size: var(--text-sm);
    opacity: 0.5;
    letter-spacing: 0.2rem;
  }
`;

const StyledRoomsAndGuestsPopup = styled(RoomsAndGuestsPopup)``;

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export default function CustomInput2({
  $type,
  $style,
  header,
  $placeholder,
  dropdown,
  children,
  onClick,
  ...props
}) {
  const [showPopup, setShowPopup] = useState(false);
  const inputRef = useRef(null);
  const popupRef = useRef(null);

  // Handle click outside to close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  const handleInputClick = (e) => {
    if (dropdown === "true") {
      e.preventDefault();
      setShowPopup(!showPopup);
    }
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <>
      {$style === "accent" ? (
        <StyledCustomInput2 ref={inputRef}>
          <Text
            $type="p"
            $color="var(--cordis-white)"
            $weight="light"
            $typeFace="primary"
          >
            {header}
          </Text>
          <StyledInputWrapper>
            {$type === "select" ? (
              <StyledSelect placeholder={$placeholder} {...props}>
                {children}
              </StyledSelect>
            ) : (
              <StyledInput
                placeholder={$placeholder}
                onClick={handleInputClick}
                readOnly={dropdown === "true"}
                style={{ cursor: dropdown === "true" ? "pointer" : "text" }}
                {...props}
              />
            )}
            {dropdown === "true" && showPopup && (
              <div ref={popupRef}>
                <StyledRoomsAndGuestsPopup />
              </div>
            )}
          </StyledInputWrapper>
        </StyledCustomInput2>
      ) : (
        <StyledCustomInput2Black ref={inputRef}>
          <Text
            $type="p"
            $color="var(--cordis-black)"
            $weight="light"
            $typeFace="primary"
          >
            {header}
          </Text>
          <StyledInputWrapper>
            {$type === "select" ? (
              <StyledSelectBlack placeholder={$placeholder} {...props}>
                {children}
              </StyledSelectBlack>
            ) : (
              <StyledInputBlack
                placeholder={$placeholder}
                onClick={handleInputClick}
                readOnly={dropdown === "true"}
                style={{ cursor: dropdown === "true" ? "pointer" : "text" }}
                {...props}
              />
            )}
            {dropdown === "true" && showPopup && (
              <div ref={popupRef}>
                <StyledRoomsAndGuestsPopup />
              </div>
            )}
          </StyledInputWrapper>
        </StyledCustomInput2Black>
      )}
    </>
  );
}
