import { styled } from "styled-components";


export const StyledDashboard = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;

`;

function Dashboard() {
  return <h1>welcome</h1>;
}

export default Dashboard;
