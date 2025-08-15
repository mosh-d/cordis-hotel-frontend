import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import AdminNav from "../../components/AdminNav";
import { styled } from "styled-components";

const StyledAdminRoot = styled.div`
  min-height: 40rem;
  height: 100dvh; /* Dynamic viewport height - best for mobile */
  display: flex;
  flex-direction: column;
  
  /* Fallback for browsers that don't support dvh */
  @supports not (height: 100dvh) {
    height: 100vh;
  }
`;

const StyledHeader = styled.div`
`;

const StyledOutlet = styled.div`
  padding: 8rem;
  background-color: var(--cordis-light-gray);
  flex: 1;
  overflow-x: auto;
`;

const StyledAdminBody = styled.div`
  display: flex;
  align-items: stretch;
  height: calc(100% - 12rem);
  flex: 1;
`;

export default function AdminRootLayout() {
  return (
    <>
      <StyledAdminRoot>
        <StyledHeader>
          <AdminHeader />
        </StyledHeader>
        <StyledAdminBody>
          <AdminNav />
          <StyledOutlet>
            <Outlet />
          </StyledOutlet>
        </StyledAdminBody>
      </StyledAdminRoot>
    </>
  );
}