import styled from "styled-components";
import { MEDIA_QUERIES } from "../../constants";
import { FlexCol, FlexRow } from "../../shared/styles";

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const ExpItemContainer = styled.article`
  display: flex;
  gap: 1rem;
  padding: 1px;

  border-radius: 10px;
`;

export const ExpItem = styled.div`
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(
    to right bottom,
    #1a1611,
    #201c15,
    #262019,
    #2c251f,
    #322a23,
    #2f2822,
    #2c2520,
    #29221f,
    #241e18,
    #1f1914,
    #1a1611,
    #15120e
  );
  border-radius: 10px;
  box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.6);

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
  }
`;

export const ExpLeft = styled(FlexCol)`
  width: 500px;
  padding: 5px;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;

  ${MEDIA_QUERIES.mobile} {
    width: 100%;
  }
`;

export const JobContainer = styled(FlexRow)`
  width: auto;
  height: auto;
  justify-content: flex-start;

  font-size: 1.4rem;

  ${MEDIA_QUERIES.desktop} {
    font-size: 1.6rem;
  }
`;

export const JobImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 10px;
  margin: 5px;
`;

export const ExpRight = styled.div`
  width: 95%;
  padding: 5px;
  border-radius: 10px;
  color: var(--muted);
  font-size: 1.1rem;

  ${MEDIA_QUERIES.desktop} {
    font-size: 1.4rem;
  }
`;
