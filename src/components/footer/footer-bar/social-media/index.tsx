import Image from 'next/image';
import { SocialLink } from '@/constants';

type Props = {
    socialLinks: SocialLink[]
};

function SocialMedia({ socialLinks }: Props) {
  return (
    <div>
      <p>Connect With Us On Social Media</p>
      <ul>
        {socialLinks.map((social) => (
          <li key={social.alt}>
            <a target="_blank" href={social.uri} rel="noreferrer">
              <Image src={social.icon} alt={social.alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
