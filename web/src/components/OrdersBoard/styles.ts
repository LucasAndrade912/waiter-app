import styled from 'styled-components'

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  > header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  gap: 24px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    background-color: #FFF;
    border-radius: 8px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    width: 100%;
    height: 128px;

    strong {
      font-weight: 500;
    }

    span {
      color: #666;
      font-size: 14px;
    }
  }
`