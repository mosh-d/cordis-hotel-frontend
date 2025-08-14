import Text from "../components/shared/Text";
import { styled } from "styled-components";
import Link from "./shared/Link";
import { NavLink } from "react-router-dom";

const StyledAdminNav = styled.div`
  flex-shrink: 0;
  height: 100%;
  background-color: var(--cordis-text-color);
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledNavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const NavItem = styled.li`

   & .main-nav-item-active p {
      color: var(--cordis-emphasis);
      font-weight: 600;
    }
`;

const StyledBlogLink = styled.div``;

export default function AdminNav() {
  return (
    <StyledAdminNav>
      <StyledNavItems>
        <NavItem>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "main-nav-item-active" : ""
            }
            end
          >
            <Text $color="var(--cordis-white)" $weight="bold">
              OVERVIEW
            </Text>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="rooms"
            className={({ isActive }) =>
              isActive ? "main-nav-item-active" : ""
            }
          >
            <Text $color="var(--cordis-white)" $weight="bold">
              ROOMS
            </Text>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="room-types"
            className={({ isActive }) =>
              isActive ? "main-nav-item-active" : ""
            }
          >
            <Text $color="var(--cordis-white)" $weight="bold">
              ROOM TYPES
            </Text>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="room-features"
            className={({ isActive }) =>
              isActive ? "main-nav-item-active" : ""
            }
          >
            <Text $color="var(--cordis-white)" $weight="bold">
              ROOM FEATURES
            </Text>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="bookings"
            className={({ isActive }) =>
              isActive ? "main-nav-item-active" : ""
            }
          >
            <Text $color="var(--cordis-white)" $weight="bold">
              BOOKINGS
            </Text>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="contact-submissions"
            className={({ isActive }) =>
              isActive ? "main-nav-item-active" : ""
            }
          >
            <Text $color="var(--cordis-white)" $weight="bold">
              CONTACT SUBMISSIONS
            </Text>
          </NavLink>
        </NavItem>
      </StyledNavItems>
      <StyledBlogLink>
        <Link>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "main-nav-item-active" : ""
            }
          >
            <Text $color="var(--cordis-white)" $weight="bold">
              BLOG MANAGER
            </Text>
          </NavLink>
        </Link>
      </StyledBlogLink>
    </StyledAdminNav>
  );
}
