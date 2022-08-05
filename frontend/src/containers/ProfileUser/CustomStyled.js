import styled from "styled-components";

export const ProfileUserWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  & > div:first-child {
    width: 1200px;
    margin: auto;
  }
  .profile {
    width: 1200px;
    margin: auto;
    background-color: #fff;
    padding: 10px;

    & > div:first-child {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    & > div:last-child {
        margin-top: 10px;
    }
  }
  .profile-news {
    width: 1200px;
    margin: auto;
    background-color: #fff;
    padding: 10px;

    & > p {
      margin-bottom: 20px;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
    }

    & > div:last-child {
      /* display: flex;
      gap: 10px;
      flex-wrap: wrap; */
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      justify-items: center;
    }
  }
`;
