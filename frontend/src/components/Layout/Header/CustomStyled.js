import styled from "styled-components";
import { Affix } from 'antd';

export const HeaderWrapper = styled(Affix)`
  .header {
    width: 100%;
    height: 70px;
    border-bottom: 2px solid #e4e4e4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #FFF;

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
      gap: 20px;

      & > .header-user {
        margin: 0;
      }

      p {
        margin: 0;
      }

      p.header-user {
        color: blue;
      }

      & > a:not(:first-child) {
        color: #000000;
      }
    }
  }
`;
