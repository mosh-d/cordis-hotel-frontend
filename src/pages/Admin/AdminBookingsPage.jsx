import Text from "../../components/shared/Text";
import { styled } from "styled-components";
import Button from "../../components/shared/Button";

const StyledBookingsContent = styled.div`
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  padding: 1rem;
  margin: 2rem 0;
  /* background-color: var(--cordis-white);
  box-shadow: var(--popup-lg); */
`;

const StyledTableHead = styled.thead`
  /* background-color: var(--cordis-light-gray); */
`;

const StyledTableBody = styled.tbody`
`;

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    /* background-color: var(--cordis-white); */
  }
`;

const StyledTableHeader = styled.th`
  border: 1px solid hsla(0, 0%, 0%, .15);
  padding: 1rem;
  text-align: left;
`;

const StyledTableData = styled.td`
  border: 1px solid hsla(0, 0%, 0%, .15);
  padding: 1rem;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default function AdminBookingsPage() {
  return (
    <>
      <Text $type="h1" $weight="bold">Bookings</Text>
      <StyledBookingsContent>
      <StyledTable>
          <StyledTableHead>
            <StyledTableRow>
              <StyledTableHeader><Text $size="large" $weight="bold">Guest Name</Text></StyledTableHeader>
              <StyledTableHeader><Text $size="large" $weight="bold">No of Rooms</Text></StyledTableHeader>
              <StyledTableHeader><Text $size="large" $weight="bold">Booking Ref</Text></StyledTableHeader>
              <StyledTableHeader><Text $size="large" $weight="bold">Check-in</Text></StyledTableHeader>
              <StyledTableHeader><Text $size="large" $weight="bold">Check-out</Text></StyledTableHeader>
              <StyledTableHeader><Text $size="large" $weight="bold">Room Status</Text></StyledTableHeader>
              <StyledTableHeader><Text $size="large" $weight="bold">Total Price</Text></StyledTableHeader>
              <StyledTableHeader><Text $size="large" $weight="bold">Action</Text></StyledTableHeader>
            </StyledTableRow>
          </StyledTableHead>
          <StyledTableBody>
            <StyledTableRow>
              <StyledTableData><Text>Chinedu</Text></StyledTableData>
              <StyledTableData><Text>1</Text></StyledTableData>
              <StyledTableData><Text>18</Text></StyledTableData>
              <StyledTableData><Text>12:00 am</Text></StyledTableData>
              <StyledTableData><Text>2:00 pm</Text></StyledTableData>
              <StyledTableData><Text>Booked</Text></StyledTableData>
              <StyledTableData><Text>₦500,000</Text></StyledTableData>
              <StyledTableData><Text $color="var(--cordis-emphasis)" style={{cursor: 'pointer'}}>View Info</Text></StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData><Text>Tobi</Text></StyledTableData>
              <StyledTableData><Text>1</Text></StyledTableData>
              <StyledTableData><Text>12</Text></StyledTableData>
              <StyledTableData><Text>12:00 am</Text></StyledTableData>
              <StyledTableData><Text>2:00 pm</Text></StyledTableData>
              <StyledTableData><Text>Booked</Text></StyledTableData>
              <StyledTableData><Text>₦500,000</Text></StyledTableData>
              <StyledTableData><Text $color="var(--cordis-emphasis)" style={{cursor: 'pointer'}}>View Info</Text></StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData><Text>Stella</Text></StyledTableData>
              <StyledTableData><Text>1</Text></StyledTableData>
              <StyledTableData><Text>8</Text></StyledTableData>
              <StyledTableData><Text>12:00 am</Text></StyledTableData>
              <StyledTableData><Text>2:00 pm</Text></StyledTableData>
              <StyledTableData><Text>Booked</Text></StyledTableData>
              <StyledTableData><Text>₦500,000</Text></StyledTableData>
              <StyledTableData><Text $color="var(--cordis-emphasis)" style={{cursor: 'pointer'}}>View Info</Text></StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData><Text>Anike</Text></StyledTableData>
              <StyledTableData><Text>1</Text></StyledTableData>
              <StyledTableData><Text>5</Text></StyledTableData>
              <StyledTableData><Text>12:00 am</Text></StyledTableData>
              <StyledTableData><Text>2:00 pm</Text></StyledTableData>
              <StyledTableData><Text>Booked</Text></StyledTableData>
              <StyledTableData><Text>₦500,000</Text></StyledTableData>
              <StyledTableData><Text $color="var(--cordis-emphasis)" style={{cursor: 'pointer'}}>View Info</Text></StyledTableData>
            </StyledTableRow>
          </StyledTableBody>
        </StyledTable>
        <StyledButtonContainer>
          <Button $type="black"><Text>Add Room</Text></Button>
        </StyledButtonContainer>
      </StyledBookingsContent>
    </>
  );
}