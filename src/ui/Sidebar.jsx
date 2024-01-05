import { styled } from "styled-components";
import Logo from "./Logo";
import { HiOutlineHome, HiCalendarDays, HiOutlineHomeModern, HiOutlineCog6Tooth, HiOutlineUsers } from "react-icons/hi2";
import { NavList } from "./MainNav";
import { StyledNavLink } from "./MainNav";
import Uploader from "../data/Uploader";


const StyledSidebar = styled.div`
  background-color: white;
  border-right: 1px solid #ddd;
  grid-row: 1/-1;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <NavList>
        <li>
          <StyledNavLink to='dashboard'>
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
        <StyledNavLink to='bookings'>
            <HiCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
        <StyledNavLink to='cabins'>
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
        <StyledNavLink to='users'>
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
        <StyledNavLink to='settings'>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>

      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
