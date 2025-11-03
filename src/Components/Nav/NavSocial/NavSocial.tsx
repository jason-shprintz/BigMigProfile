import * as S from "../styles";
import * as NavS from "./styles";
import { RiFilePaper2Line } from "react-icons/ri";

interface INavSocialProps {
  isTorM: boolean;
}

/**
 * Renders a set of social media links (LinkedIn, GitHub) as icons, and optionally a resume download link.
 *
 * @param props - Component props.
 * @param props.isTorM - If true, displays the resume download link.
 *
 * @returns The navigation social links component.
 */
const NavSocial: React.FC<INavSocialProps> = ({ isTorM }) => {
  return (
    <S.NavSocial>
      {isTorM && (
        <NavS.NavSocialResumeLink
          href="assets/documents/Michael_Anthony_Vasquez_Resume.pdf"
          download
        >
          <RiFilePaper2Line />
          &nbsp; Resume
        </NavS.NavSocialResumeLink>
      )}
    </S.NavSocial>
  );
};
export default NavSocial;
