import styled from "styled-components";

export const NewDetailWrapper = styled.div`
  padding-bottom: 30px;
  width: 1200px;
  margin: auto;
  .newDetail-banner {
  }
  .newDetail-info {
    margin-top: 20px;
    padding: 0 20px;

    & > div:first-child {
      & > p {
        margin-bottom: 10px;
      }
      & > p:first-child {
        font-size: 18px;
        font-weight: bold;
      }
      & > p:nth-child(2) {
        font-size: 14px;
        color: red;
        font-weight: bold;
      }
      & > p:last-child {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
    & > div:last-child {
      display: flex;
      align-items: center;
      gap: 200px;
      margin-bottom: 30px;
      cursor: pointer;

      & > div:first-child > a:hover {
        text-decoration: underline;
      }

      & > div {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      & > div:first-child {
        & > a {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }

  & > div:last-child {
    display: flex;
    .newDetail-desc {
      padding: 0 20px;
      flex: 3;

      & > div {
        margin-top: 20px;
      }
    }
    .newDetail-recommend {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 10px;

      & > p {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;
