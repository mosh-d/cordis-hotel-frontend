import { styled } from "styled-components";
import { useState, useEffect } from "react";

const StyledDatePickerPopup = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--cordis-text-color);
  border: 1px solid #ddd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  padding: 1.6rem;
  margin-top: 0.5rem;
`;

const StyledDateInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  background-color: hsla(0, 0%, 100%, .7);
  font-size: 1.4rem;
  font-family: var(--font-family-primary);
  
  &:focus {
    outline: none;
    border-color: var(--cordis-emphasis);
  }
`;

const StyledButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  padding: .5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: var(--font-family-primary);
  
  &:hover {
    background: #f5f5f5;
  }
  
  &.primary {
    background: var(--cordis-emphasis);
    color: white;
    border-color: var(--cordis-emphasis);
    
    &:hover {
      background: var(--cordis-emphasis);
      opacity: 0.9;
    }
  }
`;

export default function DatePickerPopup({ value, onChange, onClose, min, max }) {
  const [tempValue, setTempValue] = useState(value || "");

  useEffect(() => {
    setTempValue(value || "");
  }, [value]);

  const handleApply = () => {
    onChange(tempValue);
    onClose();
  };

  const handleCancel = () => {
    setTempValue(value || "");
    onClose();
  };

  return (
    <StyledDatePickerPopup>
      <StyledDateInput
        type="date"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        min={min}
        max={max}
        autoFocus
      />
      <StyledButtonRow>
        <StyledButton onClick={handleCancel}>
          Cancel
        </StyledButton>
        <StyledButton className="primary" onClick={handleApply}>
          Apply
        </StyledButton>
      </StyledButtonRow>
    </StyledDatePickerPopup>
  );
}
