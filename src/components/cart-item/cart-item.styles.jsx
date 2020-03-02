import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

export const ItemDetailsContainer = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px 0 5px;
`;

export const Name = styled.span`
  font-size: 16px;
`;

export const Price = styled.span``;

export const QuantityContainer = styled.span`
  width: 20%;
  display: flex;
  margin: auto;
  justify-content: center;
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
`;

export const ValueContainer = styled.span`
  margin: 0 10px;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 20px;
  cursor: pointer;
  margin: auto 20px auto auto;
`;
