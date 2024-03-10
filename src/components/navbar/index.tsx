import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { linksWithDescription, tangerine, cormorant, colors } from '@/constants';
import logo from '@/assets/logos/spa-logo.png';
import {
  LogoText, LogoContainer, NavigationWrapper, LogoWrapper, NavList, NavItem, Container, DiscountWrapper
} from '@/components/navbar/styles';
import { usePathname } from 'next/navigation';
import Paragraph from '@/components/paragraph';
import { discountText } from '@/components/navbar/utils';

function Navbar() {
  const [active, setActive] = useState('Home');
  const pathname = usePathname();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <Container>
      <NavigationWrapper>
        <LogoContainer>
          <LogoWrapper>
            <Image src={logo} alt="Spa Logo" />
          </LogoWrapper>
          <LogoText className={tangerine.className}>Luxe Animal Spa</LogoText>
        </LogoContainer>
        <NavList>
          {linksWithDescription.map((link) => (
            <NavItem key={link.name} active={active === link.uri}>
              <Link className={cormorant.className} href={link.uri} onClick={() => setActive(link.uri)}>{link.name}</Link>
            </NavItem>
          ))}
        </NavList>
      </NavigationWrapper>
      <DiscountWrapper>
        <Paragraph fontFamily={cormorant.className} size={26} textAlign='center' color={colors.charCoal}>{discountText}</Paragraph>
      </DiscountWrapper>
    </Container>
  );
}

export default Navbar;
