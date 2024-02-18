import SocialMedia from "@/components/footer/footer-bar/social-media";
import ContactEmail from "@/components/footer/footer-bar/contact-email";
import PanelList from "@/components/footer/footer-bar/panel-list";
import { leftFooterBarInfo, rightFooterBarInfo, socialLinks } from "@/constants";

const FooterBar = () => {
    return (
        <>
            <PanelList title="Customer Service" items={leftFooterBarInfo}/>
            <div>
                <ContactEmail />
                <SocialMedia socialLinks={socialLinks} />
            </div>
            <PanelList title="Navigation" items={rightFooterBarInfo}/>
        </>
    );
};

export default FooterBar;