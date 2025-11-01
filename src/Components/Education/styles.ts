import styled from "styled-components";
import { MEDIA_QUERIES } from "../../constants";

export const Description = styled.p`
  color: var(--muted);
  font-size: 1.1rem;

  margin: 0;

  ${MEDIA_QUERIES.desktop} {
    font-size: 1.4rem;
  }
`;
