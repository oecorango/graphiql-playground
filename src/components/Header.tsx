import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <NavLink to={'/'}>Logo</NavLink>
        <NavLink to={'auth'}>LogIn</NavLink>
      </header>
    </>
  );
};
