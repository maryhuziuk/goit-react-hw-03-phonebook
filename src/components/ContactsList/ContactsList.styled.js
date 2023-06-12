import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none`;
   

  export const ItemContacts = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 5px;
  font-size: 16px;
  font-family: Cursive;
  background-color: white`;
  


export const ButtonContacts = styled.button`
     width: 70px;
  height: 40px;
  transform: scale(1);
  background-color: #ccffff;
  border-radius: 10px;
  border: 1px solid #ccafff;
  font-family: Cursive;


  font-size: 14px;
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;