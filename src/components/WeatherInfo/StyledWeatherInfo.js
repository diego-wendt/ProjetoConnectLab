import styled from "styled-components";

export const StyledWeatherInfo = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`
export const StyledTempBlock = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

@media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 0px;
    align-items: center;
}
`

export const StyledLineBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  
@media screen and (max-width: 1000px) {
        gap: 30px;
    align-items: center;
    padding-bottom: 20px;
}
@media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 5px;
    align-items: center;
    padding-bottom: 20px;
}
`;

export const StyledTemperatureText = styled.span`
  font-weight: 700;
  font-size: 48px;
  /* line-height: 62px; */
  color: #ff8818;
`;

export const CityLine = styled.span`
  font-weight: 400;
  font-size: 32px;
  color: #2e4052;
`;

export const DataLine = styled.span`
  font-weight: 400;
  font-size: 24px;
  /* line-height: 31px; */
  color: #5d6d7e;
`;
