import { useOutletContext } from "react-router-dom";
import { styled } from "styled-components";
import Booking1 from "../../assets/cordis-booking/CORDIS-BOOKING-1.png";
import { RiArrowLeftLine } from "react-icons/ri";
import Text from "../../components/shared/Text";
import {
  Link as RouterLink,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import CustomInput2 from "../../components/shared/CustomInput2";
import Button from "../../components/shared/Button";
import { media } from "../../util/breakpoints";
import { useEffect, useMemo, useState } from "react";
import { cloudinaryBg } from "../../config/cloudinary";
import { useDynamicRoomData } from "../../hooks/useDynamicRoomData";

//Booking image

//Styles
const StyledRoomBookingPage = styled.form`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;

  ${media.tablet} {
    flex-direction: column;
  }
`;

const StyledRoomBooking = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 55%;
  padding: 6rem;

  ${media.tablet} {
    width: 100%;
  }

  ${media.mobile} {
    padding: 6rem 2rem;
  }
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  gap: 4rem;

  ${media.mobile} {
    flex-direction: column;
    gap: 0;
    padding: 0 2rem;
  }
`;

const StyledInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledInputRow = styled.div`
  display: flex;
  gap: 8rem;
  align-items: flex-end;

  ${media.desktop} {
    gap: 2rem;
  }

  ${media.mobile} {
    flex-direction: column;
    padding: 0 2rem;
  }
`;

const StyledBackArrow = styled.div`
  padding: 1.3rem 0;
  width: 6rem;
  height: 6rem;
  transition: all 0.1s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      transform: translateX(-0.4rem) scale(1.1);
      opacity: 0.7;
    }
  }

  &:active {
    transform: translateX(-0.8rem) scale(1.1);
    opacity: 1;
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
  flex-shrink: 0;

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

const StyledBookingSummary = styled.div`
  background-image: url(${Booking1});
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: center;
  background-position-y: center;
  background-position-x: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  padding: 4.8rem;
  gap: 4.8rem;

  ${media.tablet} {
    width: 100%;
    padding: 4.8rem 6rem;
  }
`;

const StyledConfirmationHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledTextWrapper = styled.div``;

const StyledConfirmationTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledMessagerow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledConfirmationTotalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const StyledPhoneInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  flex: 1;
  padding-bottom: 0.3rem;
`;

const StyledPhoneInputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  align-items: flex-end;
`;

const StyledCountrySelect = styled.select`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: var(--cordis-black);
  font-size: var(--text-sm);
  letter-spacing: 0.2rem;
  border-bottom: 1px solid var(--cordis-black);
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0.5rem 0;
  width: 9rem;

  ${media.mobile} {
    padding: 0;
  }

  &:focus-visible {
    outline: none;
    border-color: var(--cordis-emphasis);
  }
`;

const StyledPhoneInput = styled.input`
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
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0.5rem 0;

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

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }

  ${media.tablet} {
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function RoomBookingPage() {
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("returnTo") || "/";

  // Form validation state
  const [formErrors, setFormErrors] = useState({});
  const [isBookingOnHold, setIsBookingOnHold] = useState(false);
  const [isPayingWithPaystack, setIsPayingWithPaystack] = useState(false);
  const [isRoomAvailable, setIsRoomAvailable] = useState(true);

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    countryCode,
    setCountryCode,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    roomCategory,
    setRoomCategory,
    noOfRooms,
    setNoOfRooms,
    noOfAdults,
    setNoOfAdults,
    noOfChildren,
    setNoOfChildren,
    rollawayBed,
    setRollawayBed,
    roomsAndGuests,
    setRoomsAndGuests,
  } = useOutletContext();

  const navigate = useNavigate();

  // Form validation function
  const validateForm = () => {
    const errors = {};
    const today = new Date().toISOString().split("T")[0];

    // Validate required fields
    if (!firstName || firstName.trim().length < 2) {
      errors.firstName = "First name is required (minimum 2 characters)";
    }

    if (!lastName || lastName.trim().length < 2) {
      errors.lastName = "Last name is required (minimum 2 characters)";
    }

    if (!email || !email.includes("@") || !email.includes(".")) {
      errors.email = "Valid email address is required";
    }

    if (!phoneNumber || phoneNumber.replace(/\s/g, "").length < 9) {
      errors.phoneNumber = "Valid phone number is required (at least 9 digits)";
    }

    if (!checkIn || checkIn < today) {
      errors.checkIn =
        "Valid check-in date is required (must be today or later)";
    }

    if (!checkOut || checkOut < today) {
      errors.checkOut =
        "Valid check-out date is required (must be today or later)";
    }

    if (checkIn && checkOut && checkOut <= checkIn) {
      errors.checkOut = "Check-out date must be after check-in date";
    }

    if (!roomCategory) {
      errors.roomCategory = "Room category selection is required";
    }

    if (!noOfAdults || noOfAdults < 1) {
      errors.noOfAdults = "At least 1 adult is required";
    }

    if (!noOfRooms || noOfRooms < 1 || noOfRooms > 4) {
      errors.noOfRooms = "Number of rooms must be between 1 and 4";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const bookOnHold = async (e) => {
    e.preventDefault();
    
    // Get the correct room info including roomTypeId from API
    const roomInfo = getRoomPriceAndName();
    const apiRoomTypeId = roomInfo.roomTypeId;
    
    // IMMEDIATE DEBUG: Check all critical values
    console.log("🚨 IMMEDIATE DEBUG - bookOnHold called:", {
      roomCategory,
      roomTypeId: apiRoomTypeId,
      roomTypeIdSource: roomInfo.isFromApi ? "API" : "FALLBACK",
      checkIn,
      checkOut,
      noOfAdults,
      noOfChildren,
      hasValidationErrors: !validateForm()
    });

    // Validate form before making API call
    if (!validateForm()) {
      console.log("❌ FORM VALIDATION FAILED");
      // Scroll to top to show validation errors
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    console.log("✅ FORM VALIDATION PASSED");
    setIsBookingOnHold(true);
    
    // Force future dates for testing (override form values)
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7); // Next week
    const nextWeekPlusOne = new Date(nextWeek);
    nextWeekPlusOne.setDate(nextWeekPlusOne.getDate() + 1); // Next week + 1 day
    
    // OVERRIDE form dates for testing
    const bookingCheckIn = nextWeek.toISOString().split('T')[0];
    const bookingCheckOut = nextWeekPlusOne.toISOString().split('T')[0];
    
    console.log("📅 USING FUTURE DATES FOR TESTING:", {
      originalCheckIn: checkIn,
      originalCheckOut: checkOut,
      newCheckIn: bookingCheckIn,
      newCheckOut: bookingCheckOut
    });
    
    // Debug: Log booking parameters
    console.log("🔍 BOOKING DEBUG:", {
      roomCategory,
      apiRoomTypeId,
      checkIn,
      checkOut,
      noOfAdults,
      noOfChildren,
      bookingDates: {
        checkInDate: bookingCheckIn,
        checkOutDate: bookingCheckOut,
        adultNo: noOfAdults || 2,
        childNo: noOfChildren || 1,
        facilityTypeId: 1
      }
    });
    
    // Use the room info we already got at the beginning of the function
    const roomRate = roomInfo.price;
    
    // Debug: Show that we're using raw API rate directly
    console.log("💰 USING RAW API RATE:", {
      roomCategory,
      rawApiRate: roomRate,
      isFromApi: roomInfo.isFromApi,
      usingDirectApiRate: "YES (no calculations or parsing)"
    });
    
    const requestBody = {
      guest: {
        title: "Mrs.",
        firstName: firstName,
        lastName: lastName,
        phone: phoneNumber,
        email: email,
        sex: "Female",
        occupation: "nil",
        countryId: 1,
        address1: "default",
        address2: "nil",
        city: "default",
        stateId: 2,
      },
      reservations: [
        {
          roomTypeId: apiRoomTypeId,
          checkInDate: bookingCheckIn,
          checkOutDate: bookingCheckOut,
          adultNo: String(noOfAdults || 2),
          childNo: String(noOfChildren || 1),
          arrivalTime: "2:00 PM",
          purpose: "Business",
          rate: parseFloat(roomRate).toFixed(2),
          additionalReq: "tea",
          quantity: 1,
        },
      ],
    };

    console.log("📦 BOOKING REQUEST BODY:", requestBody);
    console.log("🔍 COMPARING WITH AVAILABILITY API:", {
      availabilityParams: apiSearchParams,
      bookingParams: {
        checkInDate: bookingCheckIn,
        checkOutDate: bookingCheckOut,
        adultNo: noOfAdults || 2,
        childNo: noOfChildren || 1,
        facilityTypeId: 1
      }
    });

    try {
      console.log("🚀 MAKING BOOKING API CALL:");
      console.log("🔗 URL:", "https://secure.thecordishotelikeja.com/api/hotel/bookings/hold");
      console.log("📦 FULL REQUEST BODY:", JSON.stringify(requestBody, null, 2));
      console.log("🎯 TARGET ROOM:", {
        roomTypeId: requestBody.reservations[0].roomTypeId,
        roomTypeIdSource: roomInfo.isFromApi ? "API" : "FALLBACK",
        checkInDate: requestBody.reservations[0].checkInDate,
        checkOutDate: requestBody.reservations[0].checkOutDate,
        rate: requestBody.reservations[0].rate
      });
      
      // Debug: Log the API room details being used
      console.log("🔍 API ROOM DETAILS:", {
        roomCategory,
        apiRoomTypeId,
        roomName: roomInfo.name,
        isFromApi: roomInfo.isFromApi,
        usingDirectApiMapping: "YES (no more hardcoded mappings)"
      });

      const response = await fetch(
        "https://secure.thecordishotelikeja.com/api/hotel/bookings/hold",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify(requestBody),
          redirect: "follow", // Handle redirects properly
        }
      );

      console.log("📡 Response status:", response.status);
      console.log("📡 Response headers:", response.headers);

      // Check if response is actually JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const textResponse = await response.text();
        console.error("❌ Response is not JSON:", textResponse);
        throw new Error(
          `Expected JSON response but got ${contentType}. Response: ${textResponse.substring(
            0,
            200
          )}...`
        );
      }

      console.log("📡 API RESPONSE STATUS:", response.status);
      console.log("📡 API RESPONSE HEADERS:", Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        // For 422 errors, try to get the response content to see what's wrong
        let errorDetails = "";
        let errorJson = null;
        try {
          const errorResponse = await response.text();
          errorDetails = errorResponse;
          console.error("❌ API ERROR RESPONSE TEXT:", errorResponse);
          
          // Try to parse as JSON
          try {
            errorJson = JSON.parse(errorResponse);
            console.error("❌ API ERROR RESPONSE JSON:", errorJson);
          } catch (jsonError) {
            console.error("❌ Could not parse error response as JSON:", jsonError);
          }
        } catch (e) {
          console.error("❌ Could not read error response:", e);
        }

        throw new Error(
          `HTTP error! status: ${response.status}. ${errorJson?.message || errorDetails || "No additional details"}`
        );
      }

      const data = await response.json();

      console.log("✅ API Response:", data);

      if (data.errorCode === 0) {
        // Navigate with booking data
        navigate(
          `/booking-confirmation?bookingRef=${
            data.bookingRef
          }&message=${encodeURIComponent(data.errorMessage)}`
        );
      } else {
        // Show error message
        throw new Error(data.errorMessage || "Failed to complete booking");
      }
    } catch (error) {
      console.error("❌ Booking Error:", error);
      setIsBookingOnHold(false);

      // Show user-friendly error message
      if (error.message.includes("422")) {
        alert(
          "Booking failed: The server couldn't process your request. Please check all your information and try again."
        );
      } else {
        alert(`Booking failed: ${error.message}`);
      }
    }
  };

  const payWithPaystack = async () => {
    // Validate form before making API call
    if (!validateForm()) {
      // Scroll to top to show validation errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Get the correct room info including roomTypeId from API
    const roomInfo = getRoomPriceAndName();
    const apiRoomTypeId = roomInfo.roomTypeId;
    const roomRate = roomInfo.price; // Use API rate directly
    
    // Calculate total amount including taxes
    const nights = calculateNights();
    const subtotal = roomRate * nights * (parseInt(noOfRooms) || 0);
    const vat = subtotal * 0.075; // 7.5%
    const stateTax = subtotal * 0.05; // 5%
    const totalAmount = subtotal + vat + stateTax;
    
    console.log("💰 PAYSTACK TOTAL CALCULATION:", {
      roomRate,
      nights,
      noOfRooms,
      subtotal,
      vat,
      stateTax,
      totalAmount
    });
    
    setIsPayingWithPaystack(true);
    
    // Prepare booking data for Paystack API
    const bookingData = {
      guest: {
        title: "Mrs.",
        firstName: firstName,
        lastName: lastName,
        phone: phoneNumber,
        email: email,
        sex: "Female",
        occupation: "nil",
        countryId: 1,
        address1: "default",
        address2: "nil",
        city: "default",
        stateId: 2,
      },
      reservations: [
        {
          roomTypeId: apiRoomTypeId,
          checkInDate: checkIn,
          checkOutDate: checkOut,
          adultNo: noOfAdults,
          childNo: noOfChildren,
          arrivalTime: "2:00 PM",
          purpose: "Business",
          totalAmount: totalAmount,
          rate: roomRate,
          additionalReq: "tea",
          quantity: 1,
        },
      ],
    };

    try {
      console.log("🚀 Initializing Paystack payment...");
      console.log("📦 Booking data:", bookingData);

      // Step 1: Initialize payment with backend
      const initResponse = await fetch(
        "https://secure.thecordishotelikeja.com/api/hotel/bookings/paystack",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify(bookingData),
        }
      );

      console.log("📡 Init response status:", initResponse.status);

      if (!initResponse.ok) {
        const errorText = await initResponse.text();
        console.error("❌ Paystack init failed:", errorText);
        throw new Error(`Payment initialization failed: ${errorText}`);
      }

      const initData = await initResponse.json();
      console.log("✅ Paystack init response:", initData);

      const access_code = initData.access_code || initData.data?.access_code;
      const reference = initData.reference || initData.data?.reference;

      if (!access_code) {
        console.error("❌ Missing access_code:", initData);
        throw new Error("Failed to initialize payment (no access code)");
      }

      // Step 2: Create Paystack popup and resume transaction
      const popup = new PaystackPop();
      
      popup.resumeTransaction(access_code, {
        onLoad: (meta) => {
          console.log("💳 Paystack popup loaded", meta);
        },
        onCancel: () => {
          console.log("❌ Payment cancelled by user");
          setIsPayingWithPaystack(false);
          alert("Payment was cancelled. You can try again or choose a different payment method.");
        },
        onSuccess: async (transaction) => {
          console.log("✅ Payment successful!", transaction);
          
          try {
            // Step 3: Verify payment with backend
            const verifyResponse = await fetch(
              "https://secure.thecordishotelikeja.com/api/hotel/payments/resume",
              {
                method: "POST",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                },
                body: JSON.stringify({ reference: transaction.reference }),
              }
            );

            console.log("📡 Verify response status:", verifyResponse.status);

            if (!verifyResponse.ok) {
              const errorText = await verifyResponse.text();
              console.error("❌ Payment verification failed:", errorText);
              throw new Error(`Payment verification failed: ${errorText}`);
            }

            const verifyData = await verifyResponse.json();
            console.log("✅ Payment verification response:", verifyData);

            if (verifyData && verifyData.status) {
              // Payment verified and booking confirmed
              alert(`🎉 Booking confirmed! Reference: ${verifyData.booking_reference || transaction.reference}`);
              
              // Navigate to confirmation page
              navigate(
                `/booking-confirmation?bookingRef=${verifyData.booking_reference || transaction.reference}&message=${encodeURIComponent('Payment successful! Your booking is confirmed.')}`
              );
            } else {
              console.error("❌ Verification failed:", verifyData);
              throw new Error("Payment verification failed. Please contact support.");
            }
          } catch (verifyError) {
            console.error("❌ Error verifying payment:", verifyError);
            setIsPayingWithPaystack(false);
            alert(`Error verifying payment: ${verifyError.message}. Please contact support with your transaction reference: ${transaction.reference}`);
          }
        },
      });

    } catch (error) {
      console.error("❌ Paystack payment error:", error);
      setIsPayingWithPaystack(false);
      alert(`Payment failed: ${error.message}`);
    }
  };

  // Generate search parameters for API
  const apiSearchParams = useMemo(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return {
      checkInDate: checkIn || today.toISOString().split("T")[0],
      checkOutDate: checkOut || tomorrow.toISOString().split("T")[0],
      adultNo: noOfAdults || 2,
      childNo: noOfChildren || 1,
      facilityTypeId: 1,
    };
  }, [checkIn, checkOut, noOfAdults, noOfChildren]);

  // Get API room data for dynamic pricing
  const {
    ROOMS: apiRooms,
    loading,
    error,
    isFromApi,
  } = useDynamicRoomData(apiSearchParams);

  // Debug: Log API rooms data
  if (apiRooms && apiRooms.length > 0) {
    console.log(
      isFromApi
        ? "🌐 BOOKING PAGE: Using live API pricing"
        : "📁 BOOKING PAGE: Using static fallback pricing"
    );
    console.log("🏨 API ROOMS DATA:", apiRooms);
  }

  // Update roomsAndGuests display value when individual values change
  useEffect(() => {
    const updateRoomsAndGuests = () => {
      const roomText = noOfRooms === 1 ? "room" : "rooms";
      const adultText = noOfAdults === 1 ? "adult" : "adults";
      const childText = noOfChildren === 1 ? "child" : "children";
      let display = `${noOfRooms} ${roomText}, ${noOfAdults} ${adultText}`;
      if (noOfChildren > 0) {
        display += `, ${noOfChildren} ${childText}`;
      }
      setRoomsAndGuests(display);
    };
    updateRoomsAndGuests();
  }, [noOfRooms, noOfAdults, noOfChildren, setRoomsAndGuests]);

  const today = new Date().toISOString().split("T")[0];

  const emailIsInvalid = !email.includes("@") || !email.includes(".");
  const phoneNumberIsInvalid = phoneNumber.length < 9;
  // Update noOfRooms validation to allow empty/intermediate values
  const parsedNoOfRooms = parseInt(noOfRooms, 10);
  const noOfRoomsIsInvalid =
    noOfRooms !== "" &&
    (isNaN(parsedNoOfRooms) || parsedNoOfRooms <= 0 || parsedNoOfRooms > 4);
  const checkInIsInvalid = !checkIn || checkIn < today;
  const checkOutIsInvalid = !checkOut || checkOut < today;
  const firstNameIsInvalid = !firstName || firstName.length < 3;
  const lastNameIsInvalid = !lastName || lastName.length < 3;

  //Room price calculation - use API data if available
  const getRoomPriceAndName = () => {
    // Try to get data from API first
    if (apiRooms && apiRooms.length > 0) {
      const selectedRoom = apiRooms.find(
        (room) => room.propName === roomCategory
      );
      if (selectedRoom) {
        // Use API rate directly without any calculations
        const apiPrice = selectedRoom.rawApiRate || 120000; // Use raw API rate or fallback

        return {
          price: apiPrice,
          name: selectedRoom.name,
          isFromApi: true,
          roomTypeId: selectedRoom.roomTypeId,
          rateId: selectedRoom.rateId,
        };
      }
    }

    // Fallback to default data when no API data available
    return {
      price: 120000,
      name: "Selected Room",
      isFromApi: false,
      roomTypeId: null,
      rateId: null,
    };
  };

  const roomInfo = getRoomPriceAndName();
  const rollAwayBedPrice = rollawayBed ? 20000 : 0;
  const roomPrice = roomInfo.price + rollAwayBedPrice;
  const roomName = roomInfo.name;

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const nightText = nights > 1 ? "nights" : "night";
  const subtotal = roomPrice * nights * (parseInt(noOfRooms) || 0);
  const vat = subtotal * 0.075; // 7.5%
  const stateTax = subtotal * 0.05; // 5%
  // const serviceCharge = subtotal * 0.1; // 10%
  const total = subtotal + vat + stateTax; /* + serviceCharge */

  // Phone number formatting function
  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, "");

    // Format based on length
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length <= 10) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
        3,
        6
      )} ${phoneNumber.slice(6)}`;
    } else {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
        3,
        6
      )} ${phoneNumber.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  // Country codes data
  const countryCodes = [
    { code: "+234", country: "NG", name: "Nigeria" },
    { code: "+1", country: "US", name: "United States" },
    { code: "+44", country: "GB", name: "United Kingdom" },
    { code: "+33", country: "FR", name: "France" },
    { code: "+49", country: "DE", name: "Germany" },
    { code: "+86", country: "CN", name: "China" },
    { code: "+91", country: "IN", name: "India" },
    { code: "+81", country: "JP", name: "Japan" },
    { code: "+27", country: "ZA", name: "South Africa" },
    { code: "+254", country: "KE", name: "Kenya" },
    { code: "+233", country: "GH", name: "Ghana" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // The actual booking logic is handled by the button onClick handlers
  };

  let dropdownValue = "true";

  return (
    <>
      <StyledRoomBookingPage onSubmit={handleSubmit}>
        <StyledRoomBooking>
          <StyledHeaderWrapper>
            <RouterLink to={returnTo}>
              <StyledBackArrow>
                <RiArrowLeftLine color="var(--cordis-black)" size="3rem" />
              </StyledBackArrow>
            </RouterLink>
            <Text $type="h2" $weight="bold" $color="var(--cordis-black)">
              Room Reservation
            </Text>
          </StyledHeaderWrapper>

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
          <StyledInputs>
            <StyledInputRow>
              <CustomInput2
                header="First Name"
                $placeholder="eg. John"
                type="text"
                value={firstName}
                style={{
                  color: firstNameIsInvalid ? "red" : "var(--cordis-black)",
                }}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <CustomInput2
                header="Check-In"
                type="date"
                value={checkIn}
                min={today}
                // style={{ color: checkInIsInvalid ? "red" : "var(--cordis-black)" }}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "") {
                    setCheckIn("");
                    return;
                  }
                  const newCheckIn = val < today ? today : val;
                  setCheckIn(newCheckIn);

                  // If check-out is before the new check-in date, update check-out
                  if (checkOut && checkOut < newCheckIn) {
                    setCheckOut(newCheckIn);
                  }
                }}
              />
            </StyledInputRow>
            <StyledInputRow>
              <CustomInput2
                header="Last Name"
                $placeholder="eg. Doe"
                type="text"
                value={lastName}
                style={{
                  color: lastNameIsInvalid ? "red" : "var(--cordis-black)",
                }}
                onChange={(e) => setLastName(e.target.value)}
              />
              <CustomInput2
                header="Check-Out"
                type="date"
                value={checkOut}
                min={checkIn || today}
                // style={{ color: checkOutIsInvalid ? "red" : "var(--cordis-black)" }}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "") {
                    setCheckOut("");
                    return;
                  }
                  const minDate = checkIn || today;
                  setCheckOut(val < minDate ? minDate : val);
                }}
              />
            </StyledInputRow>
            <StyledInputRow>
              <CustomInput2
                header="Email"
                $placeholder="example@email.com"
                type="email"
                value={email}
                style={{
                  color: emailIsInvalid ? "red" : "var(--cordis-black)",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CustomInput2
                header="Room Category"
                $type="select"
                $placeholder="Standard Room"
                name="room-category"
                value={roomCategory}
                onChange={(e) => {
                  // Check if selected room is available before allowing selection
                  const selectedRoom = apiRooms?.find(
                    (room) => room.propName === e.target.value
                  );
                  if (selectedRoom) {
                    const isAvailable =
                      typeof selectedRoom.available === "number"
                        ? selectedRoom.available > 0
                        : typeof selectedRoom.available === "boolean"
                        ? selectedRoom.available
                        : true;
                    if (isAvailable) {
                      setRoomCategory(e.target.value);
                    }
                  } else {
                    // If no API data, allow selection (fallback behavior)
                    setRoomCategory(e.target.value);
                  }
                  console.log(roomCategory);
                }}
              >
                <option value="">Choose a room type</option>
                {/* Generate options dynamically based on API data */}
                {apiRooms && apiRooms.length > 0 ? (
                  // Use API data to determine availability
                  apiRooms.map((room) => {
                    const isAvailable =
                      typeof room.available === "number"
                        ? room.available > 0
                        : typeof room.available === "boolean"
                        ? room.available
                        : true;

                    return (
                      <option
                        key={room.propName}
                        value={room.propName}
                        disabled={!isAvailable}
                        style={{
                          color: isAvailable ? "inherit" : "#999",
                          backgroundColor: isAvailable ? "inherit" : "#f5f5f5",
                        }}
                      >
                        {room.name} {!isAvailable ? "(Unavailable)" : ""}
                      </option>
                    );
                  })
                ) : (
                  // Fallback when no API data available
                  <option value="" disabled>No rooms available</option>
                )}
              </CustomInput2>
            </StyledInputRow>
            <StyledInputRow>
              <StyledPhoneInputWrapper>
                <Text
                  $type="p"
                  $color="var(--cordis-black)"
                  $weight="light"
                  $typeFace="primary"
                >
                  Phone Number
                </Text>
                <StyledPhoneInputContainer>
                  <StyledCountrySelect
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.country} {country.code}
                      </option>
                    ))}
                  </StyledCountrySelect>
                  <StyledPhoneInput
                    type="tel"
                    placeholder="803 123 4567"
                    value={phoneNumber}
                    style={{
                      color: phoneNumberIsInvalid
                        ? "red"
                        : "var(--cordis-black)",
                    }}
                    onChange={handlePhoneChange}
                    maxLength="13"
                  />
                </StyledPhoneInputContainer>
              </StyledPhoneInputWrapper>
              <CustomInput2
                dropdown={dropdownValue}
                header="Rooms and Guests"
                $placeholder="Select rooms and guests"
                type="text"
                value={roomsAndGuests}
                style={{
                  color: noOfRoomsIsInvalid ? "red" : "var(--cordis-black)",
                  cursor: "pointer",
                }}
                readOnly
              />
            </StyledInputRow>
            {emailIsInvalid && email.length > 0 && (
              <Text
                $size="extra-small"
                $type="p"
                $color="red"
                $weight="light"
                $typeFace="primary"
              >
                Please enter a valid email address
              </Text>
            )}
            {phoneNumberIsInvalid && phoneNumber.length > 0 && (
              <Text
                $size="extra-small"
                $type="p"
                $color="red"
                $weight="light"
                $typeFace="primary"
              >
                Please enter a valid phone number (at least 9 digits)
              </Text>
            )}
            {noOfRoomsIsInvalid && noOfRooms !== "" && (
              <Text
                $size="extra-small"
                $type="p"
                $color="red"
                $weight="light"
                $typeFace="primary"
              >
                Please enter a valid number of rooms (1-4)
              </Text>
            )}
            {checkInIsInvalid && checkIn.length > 0 && (
              <Text
                $size="extra-small"
                $type="p"
                $color="red"
                $weight="light"
                $typeFace="primary"
              >
                Please enter a valid check-in date (must be today or later)
              </Text>
            )}
            {checkOutIsInvalid && checkOut.length > 0 && (
              <Text
                $size="extra-small"
                $type="p"
                $color="red"
                $weight="light"
                $typeFace="primary"
              >
                Please enter a valid check-out date (must be today or later)
              </Text>
            )}
            {firstNameIsInvalid && firstName.length > 0 && (
              <Text
                $size="extra-small"
                $type="p"
                $color="red"
                $weight="light"
                $typeFace="primary"
              >
                Please enter a valid first name (must be at least 3 characters
                long)
              </Text>
            )}
            {lastNameIsInvalid && lastName.length > 0 && (
              <Text
                $size="extra-small"
                $type="p"
                $color="red"
                $weight="light"
                $typeFace="primary"
              >
                Please enter a valid last name (must be at least 3 characters
                long)
              </Text>
            )}
            <Text $size="small" $color="var(--cordis-gray)">
              Note: Only Executive Suite Room has capacity for a family (up to 4
              children).
            </Text>
          </StyledInputs>
          <StyledMessagerow>
            <Text
              $type="p"
              $color="var(--cordis-black)"
              $weight="light"
              $typeFace="primary"
            >
              Additional Message
            </Text>
            <StyledTextarea placeholder="Write a message here" />
          </StyledMessagerow>
        </StyledRoomBooking>
        <StyledBookingSummary>
          <StyledConfirmationHeaderWrapper>
            <Text $type="h2" $color="var(--cordis-white)" $weight="bold">
              Reservation Summary
            </Text>
          </StyledConfirmationHeaderWrapper>
          <StyledConfirmationTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Check-In
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                {checkIn}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Check-Out
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                {checkOut}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                {roomName}
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                ₦{roomPrice.toLocaleString()} per night ({nights} {nightText})
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Number of Rooms
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                {noOfRooms}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Number of Adults
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                {noOfAdults}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Number of Children
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                {noOfChildren}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Rollaway Bed?
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                {rollawayBed === true ? "Yes (+₦20,000)" : "No"}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                VAT (7.5%)
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                ₦{vat.toLocaleString()}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Lagos State Tax (5%)
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                ₦{stateTax.toLocaleString()}
              </Text>
            </StyledTextWrapper>
            {/* <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Service Charge (10%)
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                ₦{serviceCharge.toLocaleString()}
              </Text>
            </StyledTextWrapper> */}
          </StyledConfirmationTextWrapper>
          <StyledConfirmationTotalWrapper>
            <Text $type="h3" $color="var(--cordis-white)" $weight="bold">
              Total
            </Text>
            <Text $color="var(--cordis-white)" $size="extra-large">
              ₦{total.toLocaleString()}
            </Text>
            <StyledButtonWrapper>
              {/* <RouterLink to="/booking-confirmation"> */}
              <Button
                $type="white"
                type="button"
                onClick={bookOnHold}
                disabled={isBookingOnHold}
                style={{
                  opacity: isBookingOnHold ? 0.6 : 1,
                  cursor: isBookingOnHold ? "not-allowed" : "pointer",
                }}
              >
                <Text>{isBookingOnHold ? "Processing..." : "Book on Hold"}</Text>
              </Button>
              {/* </RouterLink> */}
              <Text $color="var(--cordis-white)">or</Text>
              {/* <RouterLink to="/booking-confirmation"> */}
              <Button
                $type="emphasis"
                type="button"
                onClick={payWithPaystack}
                disabled={isPayingWithPaystack}
                style={{
                  opacity: isPayingWithPaystack ? 0.6 : 1,
                  cursor: isPayingWithPaystack ? "not-allowed" : "pointer",
                }}
              >
                <Text>
                  {isPayingWithPaystack ? "Processing..." : "Pay with Paystack"}
                </Text>
              </Button>
              {/* </RouterLink> */}
            </StyledButtonWrapper>
          </StyledConfirmationTotalWrapper>
        </StyledBookingSummary>
      </StyledRoomBookingPage>
    </>
  );
}
