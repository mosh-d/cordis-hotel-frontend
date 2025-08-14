import Text from "../../components/shared/Text";
import { styled } from "styled-components";
import Button from "../../components/shared/Button";

const StyledContactContent = styled.div``;

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

const StyledTableBody = styled.tbody``;

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    /* background-color: var(--cordis-white); */
  }
`;

const StyledTableHeader = styled.th`
  border: 1px solid hsla(0, 0%, 0%, 0.15);
  padding: 1rem;
  text-align: left;
`;

const StyledTableData = styled.td`
  border: 1px solid hsla(0, 0%, 0%, 0.15);
  padding: 1rem;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default function ContactSubmissionsPage() {
  return (
    <>
      <Text $type="h1" $weight="bold">Contact Submissions</Text>
      <StyledContactContent>
        <StyledTable>
          <StyledTableHead>
            <StyledTableRow>
              <StyledTableHeader><Text $size="large" $weight="bold">Name</Text></StyledTableHeader>
              <StyledTableHeader><Text $size="large" $weight="bold">Date</Text></StyledTableHeader>
              <StyledTableHeader><Text $size="large" $weight="bold">Email</Text></StyledTableHeader>
              <StyledTableHeader><Text $size="large" $weight="bold">Subject</Text></StyledTableHeader>
              <StyledTableHeader><Text $size="large" $weight="bold">Message</Text></StyledTableHeader>
            </StyledTableRow>
          </StyledTableHead>
          <StyledTableBody>
            <StyledTableRow>
              <StyledTableData><Text>Chinedu Okoro</Text></StyledTableData>
              <StyledTableData><Text>Dec 15, 2024</Text></StyledTableData>
              <StyledTableData><Text>chinedu@email.com</Text></StyledTableData>
              <StyledTableData><Text>Room Inquiry</Text></StyledTableData>
              <StyledTableData><Text>Hello, I would like to know about...</Text></StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData><Text>Tobi Adebayo</Text></StyledTableData>
              <StyledTableData><Text>Dec 14, 2024</Text></StyledTableData>
              <StyledTableData><Text>tobi@email.com</Text></StyledTableData>
              <StyledTableData><Text>Event Booking</Text></StyledTableData>
              <StyledTableData><Text>I am interested in hosting an event...</Text></StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData><Text>Stella Johnson</Text></StyledTableData>
              <StyledTableData><Text>Dec 13, 2024</Text></StyledTableData>
              <StyledTableData><Text>stella@email.com</Text></StyledTableData>
              <StyledTableData><Text>General Inquiry</Text></StyledTableData>
              <StyledTableData><Text>What are your check-in times?</Text></StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData><Text>Anike Williams</Text></StyledTableData>
              <StyledTableData><Text>Dec 12, 2024</Text></StyledTableData>
              <StyledTableData><Text>anike@email.com</Text></StyledTableData>
              <StyledTableData><Text>Complaint</Text></StyledTableData>
              <StyledTableData><Text>I had an issue with my recent stay...</Text></StyledTableData>
            </StyledTableRow>
          </StyledTableBody>
        </StyledTable>
        <StyledButtonContainer>
          <Button $type="black"><Text>Export</Text></Button>
        </StyledButtonContainer>
      </StyledContactContent>
    </>
  );
}


