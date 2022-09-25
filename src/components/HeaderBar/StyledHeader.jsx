import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 10vh;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 40px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  z-index: 2;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 10px 5px 0px 0px;
    gap: 10px;
    height: 100%;
  }
`;

export const StyledGroupLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100%;

  @media screen and (max-width: 1024px) {
  }
  & img {
    width: 60px;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.textTitle};
  font-weight: 500;
  font-size: 38px;
  line-height: 42px;
`;

export const StyledGroupButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-bottom: 15px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
