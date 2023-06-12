import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 40px;
  background: linear-gradient(to bottom, #ffccff 0%, #ccffff 100%);
`;

export const Message = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 18px;
  width: 500px;
  height: 70px;
  text-align: center;
  color: black
`;
export const Wrapper = styled.div`
  display: flex ;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  margin: auto
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  height: 440px;
  padding: 20px;
 

  &.contacts {
    overflow-y: auto;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
  text-shadow: 2px 2px;
`;

export const SectionTitle = styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 28px;
  font-family: Cursive;

`;