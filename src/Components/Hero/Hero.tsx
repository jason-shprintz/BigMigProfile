import { type JSX } from "react";
import * as S from "./styles";
import * as SharedS from "../../shared/styles";
import { DEVICE_TYPES, PERSONAL_INFO } from "../../constants";
import useDeviceType from "../../hooks/useDeviceType";

/**
 * Renders the hero section of the portfolio site.
 *
 * Displays the developer's name, role, a brief description, and call-to-action buttons.
 * Includes an avatar image, meta information, and a link to download the resume.
 *
 * @returns {JSX.Element} The hero section component.
 */
function Hero(): JSX.Element {
  const isTablet: boolean = useDeviceType() === DEVICE_TYPES.tablet;
  const isMobile: boolean = useDeviceType() === DEVICE_TYPES.mobile;
  const isTorM: boolean = isTablet || isMobile;

  return (
    <S.Hero id="home">
      <S.HeroInner>
        {!isTorM && (
          <S.HeroCard>
            <SharedS.Avatar
              src={"assets/images/full_body.jpg"}
              alt={`${PERSONAL_INFO.name} headshot`}
            />

            <S.HeroMeta>
              <S.MetaName>{PERSONAL_INFO.name}</S.MetaName>
              <S.MetaRole>{PERSONAL_INFO.role}</S.MetaRole>
              <S.SmallLink href="assets/documents/Your_Resume.pdf" download>
                Download Resume
              </S.SmallLink>
            </S.HeroMeta>
          </S.HeroCard>
        )}
        <S.HeroCopy>
          {isTorM && (
            <>
              <S.HeroTitle>{PERSONAL_INFO.name}</S.HeroTitle>
              <SharedS.Subtitle>{PERSONAL_INFO.role}</SharedS.Subtitle>
            </>
          )}
          <S.Lead>{PERSONAL_INFO.description_brief}</S.Lead>
        </S.HeroCopy>
      </S.HeroInner>
    </S.Hero>
  );
}

export default Hero;
