import SocialMedia from '@/components/footer/footer-bar/social-media';
import ContactEmail from '@/components/footer/footer-bar/contact-email';
import PanelList from '@/components/footer/footer-bar/panel-list';
import { leftFooterBarInfo, rightFooterBarInfo, socialLinks } from '@/constants';
import { FooterBarWrapper, ContactWrapper } from '@/components/footer/footer-bar/styles';

function FooterBar() {
  return (
    <FooterBarWrapper>
      <PanelList title="Customer Service" items={leftFooterBarInfo} alignItems="flex-start" />
      <ContactWrapper>
        <ContactEmail />
        <SocialMedia socialLinks={socialLinks} />
      </ContactWrapper>
      <PanelList title="Navigation" items={rightFooterBarInfo} alignItems="flex-end" />
    </FooterBarWrapper>
  );
}

export default FooterBar;
