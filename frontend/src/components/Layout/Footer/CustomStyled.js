import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #fff;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .footer-content {
    & > div {
      width: 40px;
      height: 60px;
      overflow: hidden;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer-copyright {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
