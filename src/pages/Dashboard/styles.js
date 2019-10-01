import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;

  header {
    display: flex;
    justify-content: space-between;
    flex: 1;

    h1 {
      color: #fff;
      font-size: 30px;
    }

    button {
      display: flex;
      justify-content: center;

      svg {
        margin-right: 10px;
        height: 20px;
        width: 20px;
      }
    }
  }
`;

export const Content = styled.div``;
