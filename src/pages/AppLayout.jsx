import { Outlet } from "react-router-dom";
import { StyledDashboard } from "./Dashboard";
import Heading from "../ui/Heading";
import Sidebar from "../ui/Sidebar";
import Main from "../ui/Main";
import { Toaster } from "react-hot-toast";
import { styled } from "styled-components";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledDashboard>
      <Heading as="h1" type="dashboardHeader">
        Dashboard
      </Heading>

      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Toaster
        position="top-center"
        gutter={8}
        containerStyle={{
          padding: "20px",
        }}
        toastOptions={{
          duration: 4000,
          style: {
            padding: "20px",
          },
          success: {
            duration: 2000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </StyledDashboard>
  );
}

export default AppLayout;
