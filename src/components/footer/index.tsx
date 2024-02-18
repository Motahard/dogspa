import styled from 'styled-components';
import FooterBar from '@/components/footer/footer-bar';
import { bottomFooterBarInfo } from '@/constants';

const ListItem = styled.p``;

const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 1.5rem;
    ${ListItem} nth-child(3) {
        border: 2px solid orange;
        margin-bottom: 1px;
    }
`;

function Footer() {
  return (
    <footer>
      <FooterBar />
      <Container>
        {bottomFooterBarInfo.map((item) => (
          <ListItem key={item.id}>{item.text}</ListItem>
        ))}
      </Container>
    </footer>
  );
}

export default Footer;
