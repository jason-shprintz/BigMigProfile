import type { JSX } from "react";
import * as S from "./styles";
import { SmallMuted } from "../../styles";
import { LINKS, PERSONAL_INFO } from "../../constants";

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
        <SmallMuted>
          <a href={LINKS.linkedin}>
            <img
              src="https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff"
              alt="LinkedIn"
            />
          </a>
        </SmallMuted>
      </S.FooterInner>
    </S.Footer>
  );
}

export default Footer;
