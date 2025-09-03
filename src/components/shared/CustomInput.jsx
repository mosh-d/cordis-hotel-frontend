import PropTypes from "prop-types";
import { styled } from "styled-components";
import { useState, useRef, useEffect } from "react";
import RoomsAndGuestsPopup from "./RoomsAndGuestsPopup";

const StyledCustomInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  position: relative;

  & label {
    color: var(--cordis-white);
    font-size: var(--text-base);
    font-family: var(--font-family-primary);
    letter-spacing: 0.1em;
  }

  & input {
    font-size: var(--text-xl);
    font-weight: 600;
    border: none;
    background-color: var(--cordis-white);
    padding: 0.5rem 1rem;
    color: var(--cordis-text-color);

    &:focus {
      outline: 1px solid var(--cordis-emphasis);
      outline-offset: 4px;
    }

    /* Style the calendar icon for date inputs */
    &[type="date"] {
      color-scheme: light;
      
      &::-webkit-calendar-picker-indicator {
        /* Filter to convert icon to cordis accent color (light golden/cream) */
        filter: brightness(0) saturate(100%) invert(89%) sepia(45%) saturate(1234%) hue-rotate(359deg) brightness(103%) contrast(96%);
        opacity: 1;
        cursor: pointer;
      }
      
      &::-webkit-inner-spin-button,
      &::-webkit-clear-button {
        display: none;
      }
    }
  }
`;

const StyledRoomsAndGuestsPopup = styled(RoomsAndGuestsPopup)`
`;

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export default function CustomInput({ label, $for, $type = "text", dropdown, onClick, ...props }) {
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
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
    <StyledCustomInput ref={inputRef}>
      <label htmlFor={$for}>{label}</label>
      <StyledInputWrapper>
        <input 
          id={$for} 
          type={$type} 
          onClick={handleInputClick}
          readOnly={dropdown === "true"}
          style={{ cursor: dropdown === "true" ? "pointer" : "text" }}
          {...props} 
        />
        {dropdown === "true" && showPopup && (
          <div ref={popupRef}>
            <StyledRoomsAndGuestsPopup />
          </div>
        )}
      </StyledInputWrapper>
    </StyledCustomInput>
  );
}

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  $for: PropTypes.string.isRequired,
  $type: PropTypes.string,
};