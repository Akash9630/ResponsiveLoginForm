import { SocialIcon } from "react-social-icons";
const SocialMediaIcon = () => (
  <div id="alternativeLogin">
    <label>Or sign in with</label>
    <div id="iconGroup">
      <SocialIcon className="facebook" url="https://www.facebook.com/login/" />
      <SocialIcon className="twitter" url="https://twitter.com/i/flow/login" />
      <SocialIcon
        className="instagram"
        url="https://www.instagram.com/accounts/login/"
      />
    </div>
  </div>
);
export default SocialMediaIcon;
