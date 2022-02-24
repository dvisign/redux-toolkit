import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const LayoutStyled = styled.div`
  header {
    display:flex;
    a {
      display:block;
      margin: 0 5px;
      text-decoration:none;
      &:visited {
        color:inherit;
      }
      &.active {
        color:blue;
      }
    }
  }
  main {
    width:1400px;
    margin:0 auto;
  }
`;

function Layout({children}) {
  return (
    <LayoutStyled>
      <header>
        <NavLink 
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >Home</NavLink>
        <NavLink 
          to="/Join"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >Join</NavLink>
        <NavLink 
          to="/Private"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >Private</NavLink>
        <NavLink 
          to="/Login"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >Login</NavLink>
      </header>
      <main>
        {children}
      </main>
    </LayoutStyled>
  );
};

export default Layout;