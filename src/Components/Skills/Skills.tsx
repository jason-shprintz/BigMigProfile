import type { JSX } from "react";
import * as S from "./styles";
import { skills } from "../../data/skills";
import SectionWrapper from "../../shared/Components/SectionWrapper/SectionWrapper";

/**
 * Renders the Skills section of the page, displaying a ticker of skill icons.
 *
 * @returns {JSX.Element} The rendered Skills section component.
 *
 * @remarks
 * This component uses a `SectionWrapper` to provide a titled section with an accessible ticker
 * that displays a list of skills. Each skill is represented by an image with appropriate alt text.
 *
 * @example
 * ```tsx
 * <Skills />
 * ```
 */
function Skills(): JSX.Element {

  return (
    <SectionWrapper id="skills" title="Skills">
      <S.Ticker aria-label="Skills ticker" role="region" aria-live="off">
        <S.TickerTrack>
          <S.TickerGroup>
            {skills.map((s, i) => (
              <S.TickerItem key={`a-${s.alt}-${i}`}>
                <img src={s.src} alt={s.alt} loading="lazy" />
              </S.TickerItem>
            ))}
          </S.TickerGroup>
        </S.TickerTrack>
      </S.Ticker>
    </SectionWrapper>
  );
}

export default Skills;
