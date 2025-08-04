import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "./shared/Logo";
import Text from "./shared/Text";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

const StyledMainNavBar = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: .5rem; */
  align-items: center;

  & ul {
    display: flex;
    gap: 6rem;
    align-items: center;
    justify-content: center;
    height: 5rem;

    & li {
      display: inline-block;
      text-align: center;
      font-weight: 600;
      text-transform: uppercase;
    }

    & li .main-nav-item-active p {
      color: var(--cordis-emphasis);
      font-weight: 600;
    }

    & p {
      font-weight: 500;
      line-height: 1;
    }

    & p:hover {
      color: var(--cordis-black);
      border-bottom: 1px solid var(--cordis-emphasis);
      // text-decoration: underline;
    }
  }
`;

const StyledMainNavBarMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const StyledLogoMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.2rem;
  margin-top: 2rem;
  margin-right: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 1rem;
  z-index: 2000;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-end;
    justify-content: center;
    height: 5rem;
    right: 0;
    background-color: var(--cordis-white);
    box-shadow: var(--shadow-lg);
    height: fit-content;
    padding: 2rem;
    border-radius: .5rem;
    gap: 3rem;

    & li {
      display: inline-block;
      text-align: center;
      font-weight: 600;
      text-transform: uppercase;
    }

    & li .main-nav-item-active p {
      color: var(--cordis-emphasis);
      font-weight: 600;
    }

    & p {
      font-weight: 500;
      line-height: 1;
    }

    & p:hover {
      color: var(--cordis-black);
      border-bottom: 1px solid var(--cordis-emphasis);
      // text-decoration: underline;
    }
  }
`;

const StyledMenuIcon = styled.div`
  top: 0;
  right: 0;
  /* margin: 2rem; */
  background-color: var(--cordis-white);
  /* box-shadow: var(--shadow-lg); */
  padding: 1.5rem;
  border-radius: 10rem;
  z-index: 100;
`;

function MainNavBar({ $type, showLogo = true }) {
  const [isNavBarClicked, setIsNavBarClicked] = useState(false);

  function handleClick() {
    setIsNavBarClicked((clicked) => !clicked);
    console.log(isNavBarClicked);
  }

  return (
    <>
      {$type === "mobile" ? (
        <StyledMainNavBarMobile>
          {showLogo && <Logo $type="filled" />}
          <StyledLogoMenu onClick={handleClick}>
            <StyledMenuIcon>
              <RiMenuLine size="3rem" />
            </StyledMenuIcon>
            {isNavBarClicked && (
              <nav>
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "main-nav-item-active" : ""
                      }
                      end
                    >
                      <Text
                        $type="p"
                        $size="small"
                        $weight="regular"
                        $typeFace="primary"
                      >
                        HOME
                      </Text>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "main-nav-item-active" : ""
                      }
                    >
                      <Text
                        $type="p"
                        $size="small"
                        $weight="regular"
                        $typeFace="primary"
                      >
                        ABOUT
                      </Text>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? "main-nav-item-active" : ""
                      }
                    >
                      <Text
                        $type="p"
                        $size="small"
                        $weight="regular"
                        $typeFace="primary"
                      >
                        CONTACT
                      </Text>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        isActive ? "main-nav-item-active" : ""
                      }
                    >
                      <Text
                        $type="p"
                        $size="small"
                        $weight="regular"
                        $typeFace="primary"
                      >
                        BLOG
                      </Text>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </StyledLogoMenu>
        </StyledMainNavBarMobile>
      ) : (
        <StyledMainNavBar>
          {showLogo && <Logo $type="filled" />}
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "main-nav-item-active" : ""
                  }
                  end
                >
                  <Text
                    $type="p"
                    $size="small"
                    $weight="regular"
                    $typeFace="primary"
                  >
                    HOME
                  </Text>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "main-nav-item-active" : ""
                  }
                >
                  <Text
                    $type="p"
                    $size="small"
                    $weight="regular"
                    $typeFace="primary"
                  >
                    ABOUT
                  </Text>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "main-nav-item-active" : ""
                  }
                >
                  <Text
                    $type="p"
                    $size="small"
                    $weight="regular"
                    $typeFace="primary"
                  >
                    CONTACT
                  </Text>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "main-nav-item-active" : ""
                  }
                >
                  <Text
                    $type="p"
                    $size="small"
                    $weight="regular"
                    $typeFace="primary"
                  >
                    BLOG
                  </Text>
                </NavLink>
              </li>
            </ul>
          </nav>
        </StyledMainNavBar>
      )}
    </>
  );
}

export default MainNavBar;
