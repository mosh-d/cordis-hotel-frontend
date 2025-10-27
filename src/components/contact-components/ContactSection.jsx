import { styled } from "styled-components";
import Text from "../../components/shared/Text";
import CustomInput2 from "../shared/CustomInput2";
import {
  RiTiktokLine,
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiPhoneLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";
import Link from "../shared/Link";
import Button from "../shared/Button";
import { media } from "../../util/breakpoints";
import { useState } from "react";
import { useContactForm } from "../../hooks/useContactForm";
import SuccessModal from "../shared/SuccessModal";

const StyledContactSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6rem 12rem;
  gap: 12rem;

  ${media.tablet} {
    flex-direction: column;
    padding: 6rem;
  }

  ${media.mobile} {
    padding: 6rem 2rem;
  }
`;

const StyledContctInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1.8rem;

  ${media.tablet} {
    width: 100%;
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledUserInfo = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${media.tablet} {
    width: 100%;
  }
`;

const StyledUserInfoRow1 = styled.div`
  display: flex;
  width: 100%;
  gap: 8rem;

  ${media.desktop} {
    gap: 4rem;
  }
`;

const StyledUserInfoRow2 = styled.div`
  margin-top: 2.4rem;
`;

const StyledUserInfoRow3 = styled.div`
  margin-top: 2.4rem;
`;

const StyledUserInfoRow4 = styled.div`
  margin-top: 2.4rem;

  ${media.tablet} {
    display: flex;
    justify-content: center;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1.6rem;
  border: 1px solid var(--cordis-black);
  font-family: var(--font-family-primary);
  font-size: 1.4rem;
  resize: vertical;

  /* Override browser autofill styling */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: var(--cordis-black) !important;
    background-color: white !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    font-size: 1.4rem;
    color: #999;
    font-family: var(--font-family-primary);
  }

  &:focus {
    outline: none;
    border-color: var(--cordis-emphasis);
  }
`;

export default function ContactSection() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Modal state
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Form validation state
  const [formErrors, setFormErrors] = useState({});

  // Contact form hook
  const { loading, error, success, submitEnquiry, resetForm } = useContactForm();

  // Form validation function
  const validateForm = () => {
    const errors = {};

    // Validate required fields
    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = "Name is required (minimum 2 characters)";
    }

    if (!formData.email || !formData.email.includes("@") || !formData.email.includes(".")) {
      errors.email = "Valid email address is required";
    }

    if (!formData.subject || formData.subject.trim().length < 3) {
      errors.subject = "Subject is required (minimum 3 characters)";
    }

    if (!formData.message || formData.message.trim().length < 10) {
      errors.message = "Message is required (minimum 10 characters)";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    // Clear field error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: null,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before making API call
    if (!validateForm()) {
      return;
    }

    const result = await submitEnquiry(formData);

    if (result.success) {
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFormErrors({});
      resetForm();

      // Show success modal
      setShowSuccessModal(true);

      // Auto-hide modal after 3 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);
    }
  };

  // Close modal handler
  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  // Validation state for styling
  const nameIsInvalid = formErrors.name && (!formData.name || formData.name.trim().length < 2);
  const emailIsInvalid = formErrors.email && (!formData.email || !formData.email.includes("@") || !formData.email.includes("."));
  const subjectIsInvalid = formErrors.subject && (!formData.subject || formData.subject.trim().length < 3);
  const messageIsInvalid = formErrors.message && (!formData.message || formData.message.trim().length < 10);

  return (
    <StyledContactSection>
      <StyledContctInfo>
        <Text
          $type="h1"
          $size="extra-large"
          $weight="bold"
          $color="var(--cordis-black)"
        >
          Contact Information
        </Text>
        <Text
          $type="p"
          $typeFace="secondary"
          $size="extra-large"
          $weight="bold"
          $spacing="0.04em"
        >
          Get in touch with us through our contact details below and follow our
          social media pages
        </Text>

        <StyledLinkWrapper>
          <RiPhoneLine color="var(--cordis-text-color)" size="3rem" />
          <Link href="tel:+2349111846281" $type="default">+234 911 184 6281</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiWhatsappLine color="var(--cordis-text-color)" size="3rem" />
          <Link href="https://wa.me/2349111846280" $type="default">+234 911 184 6280</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiMailLine color="var(--cordis-text-color)" size="3rem" />
          <Link href="mailto:info@thecordishotelikeja.com" $type="default">info@thecordishotelikeja.com</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiFacebookLine color="var(--cordis-text-color)" size="3rem" />
          <Link $type="default">thecordidhotelikeja</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiInstagramLine color="var(--cordis-text-color)" size="3rem" />
          <Link $type="default">@thecordishotelikeja</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiTiktokLine color="var(--cordis-text-color)" size="3rem" />
          <Link $type="default">@thecordishotelikeja</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiTwitterXLine color="var(--cordis-text-color)" size="3rem" />
          <Link $type="default">@thecordishotelikeja</Link>
        </StyledLinkWrapper>
      </StyledContctInfo>
      <StyledUserInfo>
        {/* Form validation errors */}
        {Object.keys(formErrors).length > 0 && (
          <div
            style={{
              backgroundColor: "#fee",
              border: "1px solid #fcc",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "2rem",
            }}
          >
            <Text
              $type="h4"
              $color="#d00"
              $weight="bold"
              style={{ marginBottom: "0.5rem" }}
            >
              Please complete the form:
            </Text>
            <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
              {Object.values(formErrors).map((error, index) => (
                <li
                  key={index}
                  style={{ color: "#d00", marginBottom: "0.25rem" }}
                >
                  <Text $size="small" $color="#d00">
                    {error}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <StyledUserInfoRow1>
            <CustomInput2
              header="Your Name"
              $placeholder="eg. John Doe"
              type="text"
              value={formData.name}
              style={{
                color: nameIsInvalid ? "red" : "var(--cordis-black)",
              }}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            <CustomInput2
              header="Your Email"
              $placeholder="example@test.com"
              type="email"
              value={formData.email}
              style={{
                color: emailIsInvalid ? "red" : "var(--cordis-black)",
              }}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </StyledUserInfoRow1>
          <StyledUserInfoRow2>
            <CustomInput2
              header="Subject"
              $placeholder="eg. Inquiry"
              type="text"
              value={formData.subject}
              style={{
                color: subjectIsInvalid ? "red" : "var(--cordis-black)",
              }}
              onChange={(e) => handleInputChange("subject", e.target.value)}
            />
          </StyledUserInfoRow2>
          <StyledUserInfoRow3>
            <Text $type="p" $color="var(--cordis-black)" $weight="light" $typeFace="primary">Message</Text>
            <StyledTextarea
              placeholder="Write a message here"
              value={formData.message}
              style={{
                color: messageIsInvalid ? "red" : "var(--cordis-black)",
                borderColor: messageIsInvalid ? "red" : "var(--cordis-black)",
              }}
              onChange={(e) => handleInputChange("message", e.target.value)}
            />
          </StyledUserInfoRow3>
          <StyledUserInfoRow4>
            <Button $type="ghost" type="submit" disabled={loading}>
              <Text $weight="light" $size="medium">
                {loading ? "Sending..." : "Send Message"}
              </Text>
            </Button>
          </StyledUserInfoRow4>
        </form>
        {/* Status messages positioned outside form to avoid layout issues */}
        {error && (
          <Text $type="p" $color="var(--cordis-error)" $weight="light" $typeFace="primary" style={{ marginTop: '1rem' }}>
            {error}
          </Text>
        )}
      </StyledUserInfo>
      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        message="Message sent successfully!"
      />
    </StyledContactSection>
  );
}
