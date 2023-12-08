import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <NavLink to={'/'}>Logo</NavLink>
        <NavLink to={'login'}>LogIn</NavLink>
        <NavLink to={'registration'}>SignUp</NavLink>
      </header>
    </>
  );
};
