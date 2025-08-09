import PropTypes from "prop-types";
import { styled } from "styled-components";

const StyledCustomInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

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
  }
`;

export default function CustomInput({ label, $for, $type = "text", ...props }) {
  return (
    <StyledCustomInput>
      <label htmlFor={$for}>{label}</label>
      <input id={$for} type={$type} {...props} />
    </StyledCustomInput>
  );
}

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  $for: PropTypes.string.isRequired,
  $type: PropTypes.string,
};