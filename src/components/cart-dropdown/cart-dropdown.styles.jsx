import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 275px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 290px;
  display: flex;
  flex-direction: column;
  overflow: overlay;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartTotal = styled.span`
  margin: 10px auto;
`;
