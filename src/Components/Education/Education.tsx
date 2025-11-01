import { type JSX } from "react";
import SectionWrapper from "../../shared/Components/SectionWrapper/SectionWrapper";
import * as S from "./styles";
import { FlexCol } from "../../shared/styles";

function Education(): JSX.Element {
  return (
    <SectionWrapper id="education" title="Education">
      <FlexCol>
        <S.Description>Court of Master Sommelier</S.Description>
        <S.Description>The Restaurant School of Philadelphia</S.Description>
      </FlexCol>
    </SectionWrapper>
  );
}

export default Education;
