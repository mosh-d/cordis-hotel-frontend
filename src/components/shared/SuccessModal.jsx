import { styled } from "styled-components";
import Text from "../shared/Text";
import { RiCloseLine } from "react-icons/ri";

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const StyledModal = styled.div`
  background: white;
  padding: 3rem;
  max-width: 40rem;
  width: 90%;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledSuccessIcon = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: var(--cordis-emphasis);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  font-size: 3rem;
`;

export default function SuccessModal({ isOpen, onClose, message = "Message sent successfully!" }) {
  if (!isOpen) return null;

  return (
    <StyledModalOverlay onClick={onClose}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <StyledCloseButton onClick={onClose}>
          <RiCloseLine size={20} />
        </StyledCloseButton>

        <StyledSuccessIcon>✓</StyledSuccessIcon>

        <Text
          $type="h2"
          $size="large"
          $weight="bold"
          $color="var(--cordis-black)"
        >
          Success!
        </Text>

        <Text
          $type="p"
          $color="var(--cordis-black)"
          $weight="light"
          $typeFace="primary"
          style={{ marginTop: '1rem' }}
        >
          {message}
        </Text>
      </StyledModal>
    </StyledModalOverlay>
  );
}
