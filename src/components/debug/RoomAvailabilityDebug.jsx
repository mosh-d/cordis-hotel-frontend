import React from 'react';
import { useDynamicRoomData } from '../../hooks/useDynamicRoomData';
import { useOutletContext } from 'react-router-dom';
import { useMemo } from 'react';

/**
 * Debug component to test room availability logic
 * Add this to your page temporarily to see what's happening
 */
export const RoomAvailabilityDebug = () => {
  const {
    checkIn,
    checkOut,
    noOfAdults,
    noOfChildren,
  } = useOutletContext();

  const searchParams = useMemo(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return {
      checkInDate: checkIn || today.toISOString().split('T')[0],
      checkOutDate: checkOut || tomorrow.toISOString().split('T')[0],
      adultNo: noOfAdults || 2,
      childNo: noOfChildren || 1,
      facilityTypeId: 1,
    };
  }, [checkIn, checkOut, noOfAdults, noOfChildren]);

  const { ROOMS: dynamicRooms, loading, error, isFromApi } = useDynamicRoomData(searchParams);

  const isRoomAvailable = (room) => {
    if (typeof room.available === 'number') {
      return room.available > 0;
    }
    if (typeof room.available === 'boolean') {
      return room.available;
    }
    return true;
  };

  if (loading) return <div>Loading debug data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid red', 
      margin: '20px',
      backgroundColor: '#f0f0f0',
      fontFamily: 'monospace'
    }}>
      <h2>🐛 Room Availability Debug Panel</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Search Parameters:</h3>
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>API Status:</h3>
        <p>Data from API: {isFromApi ? '✅ YES' : '❌ NO (using fallback)'}</p>
        <p>Total rooms: {dynamicRooms.length}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Room Availability Details:</h3>
        {dynamicRooms.map((room, index) => (
          <div key={index} style={{ 
            padding: '10px', 
            margin: '5px 0', 
            border: '1px solid #ccc',
            backgroundColor: isRoomAvailable(room) ? '#e8f5e8' : '#ffe8e8'
          }}>
            <strong>{room.name}</strong> ({room.propName})
            <br />
            Available Value: {JSON.stringify(room.available)} (Type: {typeof room.available})
            <br />
            Is Available: {isRoomAvailable(room) ? '✅ YES' : '❌ NO'}
            <br />
            Will Show As: {isRoomAvailable(room) ? 'AVAILABLE' : 'UNAVAILABLE'}
            <br />
            Price: {room.price}
          </div>
        ))}
      </div>

      <div>
        <h3>Test Unavailable Logic:</h3>
        <p>To test unavailable rooms, you need API to return:</p>
        <ul>
          <li>available: 0 (number)</li>
          <li>available: false (boolean)</li>
          <li>available: null or undefined</li>
        </ul>
      </div>
    </div>
  );
};

export default RoomAvailabilityDebug;
