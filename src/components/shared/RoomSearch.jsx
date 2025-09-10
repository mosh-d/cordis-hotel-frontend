import { useState } from 'react';
import styled from 'styled-components';
import { useRoomAvailability } from '../../hooks/useRoomAvailability';
import Button from './Button';
import Text from './Text';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const RoomCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  background: #f9f9f9;
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  color: red;
  padding: 1rem;
  background: #ffe6e6;
  border-radius: 4px;
  margin: 1rem 0;
`;

export default function RoomSearch() {
  // Form state - these will come from your existing state
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adultNo, setAdultNo] = useState(2);
  const [childNo, setChildNo] = useState(0);

  // API hook
  const { rooms, loading, error, fetchRooms } = useRoomAvailability();

  const handleSearch = () => {
    if (!checkInDate || !checkOutDate) {
      alert('Please select check-in and check-out dates');
      return;
    }

    // Call the API
    fetchRooms({
      checkInDate,
      checkOutDate,
      adultNo,
      childNo,
      facilityTypeId: 1 // You can make this dynamic too
    });
  };

  return (
    <div>
      <SearchContainer>
        <Text $type="h3" $weight="bold">Search Available Rooms</Text>
        
        <FormRow>
          <div>
            <label>Check-in Date:</label>
            <Input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          
          <div>
            <label>Check-out Date:</label>
            <Input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
        </FormRow>

        <FormRow>
          <div>
            <label>Adults:</label>
            <Input
              type="number"
              min="1"
              value={adultNo}
              onChange={(e) => setAdultNo(parseInt(e.target.value))}
            />
          </div>
          
          <div>
            <label>Children:</label>
            <Input
              type="number"
              min="0"
              value={childNo}
              onChange={(e) => setChildNo(parseInt(e.target.value))}
            />
          </div>
        </FormRow>

        <Button onClick={handleSearch} disabled={loading}>
          <Text $weight="bold">
            {loading ? 'Searching...' : 'Search Rooms'}
          </Text>
        </Button>
      </SearchContainer>

      {/* Show loading state */}
      {loading && (
        <LoadingSpinner>
          <Text>Searching for available rooms...</Text>
        </LoadingSpinner>
      )}

      {/* Show error if any */}
      {error && (
        <ErrorMessage>
          <Text $weight="bold">Error: {error}</Text>
        </ErrorMessage>
      )}

      {/* Show results */}
      {rooms.length > 0 && (
        <div>
          <Text $type="h3" $weight="bold">Available Rooms ({rooms.length})</Text>
          {rooms.map((room) => (
            <RoomCard key={room.roomTypeId}>
              <Text $type="h4" $weight="bold">{room.roomType}</Text>
              <Text>Price: {room.currencySymbol}{room.rate.toLocaleString()}</Text>
              <Text>Available: {room.available} rooms</Text>
              <Text>Capacity: {room.adult} adults, {room.children} children</Text>
              {room.summary && <Text $size="small">{room.summary}</Text>}
            </RoomCard>
          ))}
        </div>
      )}
    </div>
  );
}