import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "./shared/Logo";
import Text from "./shared/Text";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { createPortal } from "react-dom";

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
    // height: 5rem;

    & li {
      display: flex;
      height: 4rem;
      padding-top: .5rem;
      align-items: center;
      text-align: center;
      font-weight: 600;
      text-transform: uppercase;
      border-bottom: 3px solid transparent;
      transition: all .3s ease-in-out;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          border-bottom: 3px solid var(--cordis-emphasis);
        }
      }
    }

    & li .main-nav-item-active p {
      color: var(--cordis-emphasis);
      font-weight: 600;
    }

    & p {
      font-weight: 500;
      line-height: 1;
    }

    @media (hover: hover) and (pointer: fine) {
      & p:hover {
        color: var(--cordis-black);
      }
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
  z-index: 999999;
  isolation: isolate;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-end;
    justify-content: center;
    height: 5rem;
    right: 0;
    background: hsla(180, 2%, 0%, 0.3);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    /* box-shadow: var(--shadow-lg); */
    border: 1px solid hsla(360, 0%, 100%, 0.3);
    height: fit-content;
    padding: 2rem;
    gap: 3rem;
    z-index: 999999;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: var(--cordis-text-color);
      }
    }

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

    @media (hover: hover) and (pointer: fine) {
      & p:hover {
        border-bottom: 1px solid var(--cordis-emphasis);
      }
    }
  }
`;

const StyledMenuIcon = styled.div`
  top: 0;
  right: 0;
  /* margin: 2rem; */
  background: hsla(180, 2%, 0%, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid hsla(360, 0%, 100%, 0.3);
  padding: 1.5rem;
  border-radius: 10rem;
  z-index: 999999;
  position: relative;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: var(--cordis-text-color);
    }
  }
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
              <RiMenuLine color="var(--cordis-white)" size="3rem" />
            </StyledMenuIcon>
            {isNavBarClicked &&
              $type === "mobile" &&
              createPortal(
                <nav
                  style={{
                    position: "fixed",
                    top: "8rem",
                    right: "2rem",
                    zIndex: 999999,
                    background: "hsla(180, 2%, 0%, 0.3)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid hsla(360, 0%, 100%, 0.3)",
                    padding: "2rem",
                    borderRadius: "0.5rem",
                    marginTop: "1rem",
                  }}
                >
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "3rem",
                      alignItems: "flex-end",
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                    }}
                  >
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
                          $color="var(--cordis-white)"
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
                          $color="var(--cordis-white)"
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
                          $color="var(--cordis-white)"
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
                          $color="var(--cordis-white)"
                        >
                          BLOG
                        </Text>
                      </NavLink>
                    </li>
                  </ul>
                </nav>,
                document.body
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
