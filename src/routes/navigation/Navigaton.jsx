import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

import BeezerLogo from '../../assets/beezer.jpg';
import { UserContext } from './../../context/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';
import { CartContext } from './../../context/CartContext';
import CartIcon from './../../components/cart-icon/CartIcon';
import CartDropdown from './../../components/cart-dropdown/CartDropdown';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (    
    <Fragment>
    <NavigationContainer>
      <LogoContainer to='/'>
        {/* Logo Goes Here! */}
        <img src={BeezerLogo} className='logo' />
      </LogoContainer>
      <NavLinks>
        <NavLink to='/shop'>SHOP</NavLink>

        {currentUser ? (
          <NavLink as='span' onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink to='/auth'>SIGN IN</NavLink>
        )}
        <CartIcon />
      </NavLinks>
      {isCartOpen && <CartDropdown />}
    </NavigationContainer>
    <Outlet />
  </Fragment>
  );
};

export default Navigation;