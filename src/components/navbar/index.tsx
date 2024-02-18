import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { linksWithDescription, tangerine, cormorant } from '@/constants';
import logo from '@/assets/logos/spa-logo.png';
import {
  LogoText, LogoContainer, NavigationWrapper, LogoWrapper, NavList, NavItem,
} from '@/components/navbar/styles';

function Navbar() {
  const [active, setActive] = useState('Home');

  return (
    <NavigationWrapper>
      <LogoContainer>
        <LogoWrapper>
          <Image src={logo} alt="Spa Logo" />
        </LogoWrapper>
        <LogoText className={tangerine.className}>Luxe Animal Spa</LogoText>
      </LogoContainer>
      <NavList>
        {linksWithDescription.map((link) => (
          <NavItem key={link.name} active={active === link.name}>
            <Link className={cormorant.className} href={link.uri} onClick={() => setActive(link.name)}>{link.name}</Link>
          </NavItem>
        ))}
      </NavList>
    </NavigationWrapper>
  );
}

export default Navbar;
