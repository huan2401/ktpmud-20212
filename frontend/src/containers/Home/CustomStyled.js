import styled from "styled-components";

export const HomeWrapper = styled.div`
  .home-news {
    width: 100%;
    padding: 0 20px;
    margin-top: 30px;
    &-title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      & > p {
        margin: 0;
        font-size: 30px;
        font-weight: bold;
      }
    }

    &-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }
  .home-map {
    width: 1240px;
    margin: auto;
    /* margin: 20px 0; */
    padding: 20px 0;
  }
`;
