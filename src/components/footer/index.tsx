import styled from 'styled-components';
import FooterBar from '@/components/footer/footer-bar';
import { bottomFooterBarInfo, cormorantLight } from '@/constants';
import { Container, ListItem, FooterWrapper } from '@/components/footer/styles';

function Footer() {
  return (
    <FooterWrapper>
      <FooterBar />
      <Container>
        {bottomFooterBarInfo.map((item) => (
          <ListItem className={cormorantLight.className} key={item.id}>{item.text}</ListItem>
        ))}
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
