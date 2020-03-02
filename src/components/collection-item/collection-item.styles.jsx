import styled, { css } from "styled-components";

const imageStyles = css`
  background-image: ${item => `url(${item.imageUrl})`};
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    opacity: 0.8;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  ${imageStyles}
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  font-size: 18px;
  display: flex;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  margin-left: 10px;
`;
