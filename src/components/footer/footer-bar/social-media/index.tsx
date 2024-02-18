import { SocialLink } from "@/constants";
import Image from "next/image";

type Props = {
    socialLinks: SocialLink[]
};

const SocialMedia = ({ socialLinks }: Props) => {
    return (
        <div>
            <p>Connect With Us On Social Media</p>
            <ul>
                {socialLinks.map(social => (
                    <li key={social.alt}>
                        <a target="_blank" href={social.uri}>
                            <Image src={social.icon} alt={social.alt} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialMedia;