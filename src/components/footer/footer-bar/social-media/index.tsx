import Image from 'next/image';
import { SocialLink, cormorant } from '@/constants';
import {
  SocialMediaContainer, SocialMediaTitle, SocialList, SocialListItem,
} from '@/components/footer/footer-bar/social-media/styles';

type Props = {
    socialLinks: SocialLink[]
};

function SocialMedia({ socialLinks }: Props) {
  return (
    <SocialMediaContainer>
      <SocialMediaTitle className={cormorant.className}>Connect With Us On Social Media</SocialMediaTitle>
      <SocialList>
        {socialLinks.map((social) => (
          <SocialListItem key={social.alt}>
            <a target="_blank" href={social.uri} rel="noreferrer">
              <Image src={social.icon} alt={social.alt} />
            </a>
          </SocialListItem>
        ))}
      </SocialList>
    </SocialMediaContainer>
  );
}

export default SocialMedia;
