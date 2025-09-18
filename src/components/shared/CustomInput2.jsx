import { styled } from "styled-components";
import Text from "./Text";
import RoomsAndGuestsPopup from "../../components/shared/RoomsAndGuestsPopup";
import DatePickerPopup from "./DatePickerPopup";
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
  justify-content: space-between;
  height: 100%;
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

  /* Hide date picker icon for date inputs */
  &[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }

  &[type="date"]::-webkit-inner-spin-button,
  &[type="date"]::-webkit-outer-spin-button {
    display: none;
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

  /* Hide date picker icon for date inputs */
  &[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }

  &[type="date"]::-webkit-inner-spin-button,
  &[type="date"]::-webkit-outer-spin-button {
    display: none;
  }
`;

const StyledRoomsAndGuestsPopup = styled(RoomsAndGuestsPopup)``;

// const StyledDatePickerPopup = styled(DatePickerPopup)``;

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
  type,
  ...props
}) {
  // Use either $type or type prop
  const inputType = $type || type;
  
  // Create dynamic placeholder for date inputs
  const getPlaceholder = () => {
    if (inputType === "date") {
      return props.value ? "" : "mm/dd/yyyy";
    }
    return $placeholder;
  };
  
  const [showPopup, setShowPopup] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const inputRef = useRef(null);
  const popupRef = useRef(null);
  const datePickerRef = useRef(null);

  // Handle click outside to close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Click outside handler triggered", {
        target: event.target,
        showPopup,
        showDatePicker,
        inputRef: inputRef.current,
        popupRef: popupRef.current,
        datePickerRef: datePickerRef.current
      });
      
      // Check if click is outside input and all popups
      const isOutsideInput = inputRef.current && !inputRef.current.contains(event.target);
      const isOutsidePopup = !popupRef.current || !popupRef.current.contains(event.target);
      const isOutsideDatePicker = !datePickerRef.current || !datePickerRef.current.contains(event.target);
      
      if (isOutsideInput && isOutsidePopup && isOutsideDatePicker) {
        console.log("Closing popups");
        setShowPopup(false);
        setShowDatePicker(false);
      }
    };

    if (showPopup || showDatePicker) {
      console.log("Adding click outside listener");
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      console.log("Removing click outside listener");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup, showDatePicker]);

  const handleInputClick = (e) => {
    if (dropdown === "true") {
      e.preventDefault();
      setShowPopup(!showPopup);
    } else if (inputType === "date") {
      e.preventDefault();
      setShowDatePicker(!showDatePicker);
    }
    if (onClick) {
      onClick(e);
    }
    // Don't stop propagation - let click outside handler work
  };

  const handleDateChange = (newValue) => {
    // Create a synthetic event to pass to the onChange handler
    const syntheticEvent = {
      target: {
        value: newValue
      }
    };
    if (props.onChange) {
      props.onChange(syntheticEvent);
    }
  };

  const handleDatePickerClose = () => {
    setShowDatePicker(false);
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
            {inputType === "select" ? (
              <StyledSelect placeholder={$placeholder} {...props}>
                {children}
              </StyledSelect>
            ) : (
              <StyledInput
                placeholder={getPlaceholder()}
                onClick={handleInputClick}
                readOnly={dropdown === "true" || inputType === "date"}
                title={inputType === "date" ? "Click to open date picker" : undefined}
                style={{ cursor: dropdown === "true" || inputType === "date" ? "pointer" : "text" }}
                {...props}
              />
            )}
            {dropdown === "true" && showPopup && (
              <div 
                ref={popupRef}
                onClick={(e) => e.stopPropagation()}
              >
                <StyledRoomsAndGuestsPopup />
              </div>
            )}
            {inputType === "date" && showDatePicker && (
              <div 
                ref={datePickerRef}
                onClick={(e) => e.stopPropagation()}
              >
                <DatePickerPopup
                  value={props.value}
                  onChange={handleDateChange}
                  onClose={handleDatePickerClose}
                  min={props.min}
                  max={props.max}
                />
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
            {inputType === "select" ? (
              <StyledSelectBlack placeholder={$placeholder} {...props}>
                {children}
              </StyledSelectBlack>
            ) : (
              <StyledInputBlack
                placeholder={getPlaceholder()}
                onClick={handleInputClick}
                readOnly={dropdown === "true" || inputType === "date"}
                title={inputType === "date" ? "Click to open date picker" : undefined}
                style={{ cursor: dropdown === "true" || inputType === "date" ? "pointer" : "text" }}
                {...props}
              />
            )}
            {dropdown === "true" && showPopup && (
              <div 
                ref={popupRef}
                onClick={(e) => e.stopPropagation()}
              >
                <StyledRoomsAndGuestsPopup />
              </div>
            )}
            {inputType === "date" && showDatePicker && (
              <div 
                ref={datePickerRef}
                onClick={(e) => e.stopPropagation()}
              >
                <DatePickerPopup
                  value={props.value}
                  onChange={handleDateChange}
                  onClose={handleDatePickerClose}
                  min={props.min}
                  max={props.max}
                />
              </div>
            )}
          </StyledInputWrapper>
        </StyledCustomInput2Black>
      )}
    </>
  );
}
