import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import Logo from './shared/Logo';
import Text from './shared/Text';

const StyledMainNavBar = styled.nav`
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

function MainNavBar({ showLogo = true }) {
  return (
    <StyledMainNavBar>
      {showLogo && <Logo $type="filled" />}
      <nav>
        <ul>
          <li><NavLink to="/" className={({isActive}) => isActive ? 'main-nav-item-active' : ''} end><Text $type="p" $size="small" $weight="regular" $typeFace="primary">HOME</Text></NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'main-nav-item-active' : ''}><Text $type="p" $size="small" $weight="regular" $typeFace="primary">ABOUT</Text></NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'main-nav-item-active' : ''}><Text $type="p" $size="small" $weight="regular" $typeFace="primary">CONTACT</Text></NavLink></li>
          <li><NavLink to="/blog" className={({isActive}) => isActive ? 'main-nav-item-active' : ''}><Text $type="p" $size="small" $weight="regular" $typeFace="primary">BLOG</Text></NavLink></li>
        </ul>
      </nav>
    </StyledMainNavBar>
  );
}

export default MainNavBar;