import type { JSX } from "react";
import * as S from "./styles";
import { PERSONAL_INFO } from "../../constants";
import NavSocial from "../Nav/NavSocial/NavSocial";

/**
 * Renders the footer section of the website.
 * Displays the current year and the author's name.
 *
 * @returns {JSX.Element} The footer component.
 */
function Footer(): JSX.Element {
  return (
    <S.Footer>
      <S.FooterInner>
        <div>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}
        </div>
        <NavSocial isTorM={true} />
      </S.FooterInner>
    </S.Footer>
  );
}

export default Footer;
