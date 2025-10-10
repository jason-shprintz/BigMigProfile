import type { JSX } from "react";
import SectionWrapper from "../../shared/Components/SectionWrapper/SectionWrapper";
import * as S from "./styles";
import { PERSONAL_INFO } from "../../constants";

/**
 * Renders the About section of the page.
 *
 * This component displays a section with the title "About" and renders
 * a list of description paragraphs sourced from `PERSONAL_INFO.description`.
 * Each paragraph is wrapped in a styled `S.Description` component.
 *
 * @returns {JSX.Element} The rendered About section.
 */
const About = (): JSX.Element => {
  return (
    <SectionWrapper id="about" title="About">
      {PERSONAL_INFO.description.map((para, idx) => (
        <S.Description key={`about-para-${idx}`}>{para}</S.Description>
      ))}
    </SectionWrapper>
  );
};

export default About;
