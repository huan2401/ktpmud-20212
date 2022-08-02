import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .header {
    width: 100%;
    height: 70px;
    border-bottom: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    &-left {
      display: flex;
      align-items: center;
      gap: 10px;
      color: black;
      & > p {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
      }
      &-logo {
        width: 40px;
        height: 50px;
        overflow: hidden;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
    }

    &-right {
      display: flex;
      align-items: center;
      gap: 10px;

      & > .header-user {
        margin: 0;
      }
    }
  }
`;
