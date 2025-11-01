import { type JSX } from "react";
import SectionWrapper from "../../shared/Components/SectionWrapper/SectionWrapper";
import * as S from "./styles";
import { FlexCol } from "../../shared/styles";
import { Muted } from "../../styles";

/**
 * Education component that displays educational background and certifications.
 *
 * Renders a section containing educational achievements including:
 * - Court of Master Sommelier Level I certification
 * - The Restaurant School of Philadelphia degree program
 *
 * @returns {JSX.Element} A section wrapper containing educational information
 */
function Education(): JSX.Element {
  return (
    <SectionWrapper id="education" title="Education">
      <FlexCol>
        <FlexCol>
          <S.Description>Court of Master Sommelier</S.Description>
          <Muted style={{ fontSize: "0.8rem" }}>Level I (Dec 2013)</Muted>
        </FlexCol>
        <br />
        <FlexCol>
          <S.Description>The Restaurant School of Philadelphia</S.Description>
          <Muted style={{ fontSize: "0.8rem" }}>
            Hotel/Restaurant Management (Sep 1992 – Jun 1993)
          </Muted>
        </FlexCol>
      </FlexCol>
    </SectionWrapper>
  );
}

export default Education;
