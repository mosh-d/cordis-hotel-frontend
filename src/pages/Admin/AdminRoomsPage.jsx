import Text from "../../components/shared/Text";
import { styled } from "styled-components";
import Button from "../../components/shared/Button";

const StyledRoomsContent = styled.div`
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

export default function AdminRoomsPage() {
  return (
    <>
    <Text $type="h1" $weight="bold">Rooms</Text>
    <StyledRoomsContent>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableHeader><Text $size="large" $weight="bold">Room Type</Text></StyledTableHeader>
            <StyledTableHeader><Text $size="large" $weight="bold">Capacity</Text></StyledTableHeader>
            <StyledTableHeader><Text $size="large" $weight="bold">Available Rooms</Text></StyledTableHeader>
            <StyledTableHeader><Text $size="large" $weight="bold">Price</Text></StyledTableHeader>
            <StyledTableHeader><Text $size="large" $weight="bold">Action</Text></StyledTableHeader>
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          <StyledTableRow>
            <StyledTableData><Text>Standard</Text></StyledTableData>
            <StyledTableData><Text>2</Text></StyledTableData>
            <StyledTableData><Text>18</Text></StyledTableData>
            <StyledTableData><Text>₦150,000</Text></StyledTableData>
            <StyledTableData><Text $color="var(--cordis-emphasis)" style={{cursor: 'pointer'}}>Delete</Text></StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData><Text>Executive</Text></StyledTableData>
            <StyledTableData><Text>3</Text></StyledTableData>
            <StyledTableData><Text>12</Text></StyledTableData>
            <StyledTableData><Text>₦250,000</Text></StyledTableData>
            <StyledTableData><Text $color="var(--cordis-emphasis)" style={{cursor: 'pointer'}}>Delete</Text></StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData><Text>Executive Deluxe</Text></StyledTableData>
            <StyledTableData><Text>3</Text></StyledTableData>
            <StyledTableData><Text>8</Text></StyledTableData>
            <StyledTableData><Text>₦160,000</Text></StyledTableData>
            <StyledTableData><Text $color="var(--cordis-emphasis)" style={{cursor: 'pointer'}}>Delete</Text></StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData><Text>Executive Suite</Text></StyledTableData>
            <StyledTableData><Text>3</Text></StyledTableData>
            <StyledTableData><Text>5</Text></StyledTableData>
            <StyledTableData><Text>₦250,000</Text></StyledTableData>
            <StyledTableData><Text $color="var(--cordis-emphasis)" style={{cursor: 'pointer'}}>Delete</Text></StyledTableData>
          </StyledTableRow>
        </StyledTableBody>
      </StyledTable>
      <StyledButtonContainer>
        <Button $type="black"><Text>Add Room</Text></Button>
      </StyledButtonContainer>
    </StyledRoomsContent>
    </>
  );
}