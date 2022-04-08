import styled from "styled-components"

export const Wrapper = styled.main`
  position: relative;
  overflow: hidden;
  padding: 0 80px 0 100px;

  h1 {
    font-weight: 400;
    font-size: 40px;
    line-height: 130%;
    color: #3E3E3E;
    margin-bottom: 30px;
  }

  input, textarea {
    display: block;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    color: #2D2D2D;
    padding: 31px 46px 30px;
    margin-bottom: 8px;
    transition: .4s all;

    &:hover {
      border: 1px solid #FAD34F;
    }

    &:focus {
      border-color: #FAD34F;
      box-shadow: 0 0 0 2px rgba(250, 211, 79, 35%);
      outline: 0;
    }
  }

  textarea {
    height: 10%;
    margin-bottom: 23px;
  }

  button {
    background: #FAD34F;
    border-radius: 500px;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    padding: 27px 52px 28px;
    border: 1px solid transparent;
    transition: .4s linear;

    &:hover {
      border: 1px solid #FAD34F;
      background: white;
      color: #FAD34F;
    }

    &:active {
      background: rgba(206, 198, 48, 0.83);
    }

    &:focus {
      border-color: #FAD34F;
      box-shadow: 0 0 0 2px rgba(250, 211, 79, 35%);
      outline: 0;
    }

    &:disabled {
      background: #8a1922;
    }
  }

  .row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .col-6 {
    width: 50%;
    padding: 0 20px;

    &:first-child {
      padding-right: 100px;
    }
  }

  .pd {
    padding: 179px 0 174px;
  }

  .map {
    position: absolute;
    top: 0;
    right: 0;
  }

  .cartoon {
    &_circle {
      position: absolute;
      top: 22px;
      left: 30px;
    }

    &_ellipce {
      position: absolute;
      top: 22px;
      right: 0;
      left: 0;
      margin: 0 auto;
    }

    &_red {
      position: absolute;
      z-index: 10;
      bottom: 72px;
    }

    &_yellow {
      position: absolute;
      z-index: 15;
      bottom: 285px;
    }
  }

  @media (max-width: 1200px) {
    .col-6:first-child {
      padding-right: 60px;
    }

    .map {
      width: 480px;
    }

  }


  @media (max-width: 992px) {
    padding: 0 65px;

    .col-6 {
      &:first-child {
        width: 70%;
      }

      &:last-child {
        width: 30%;
      }
    }

    .map {
      width: 300px;
    }

    input, textarea {
      padding: 21px 25px 21px;
    }

    button {
      padding: 23px 41px;
    }

    .cartoon {
      &_circle, &_ellipce {
        top: 15px;
        width: 56px;
      }

      &_yellow {
        width: 76px;
        bottom: 330px;
      }

      &_red {
        width: 184px;
        bottom: 203px;
      }
    }

    .pd {
      padding: 82px 0 145px;
    }
  }


  @media (max-width: 768px) {
    padding: 0 35px;

    h1 {
      font-size: 32px;
      line-height: 84%;
      margin-bottom: 25px;
    }

    input, textarea {
      padding: 16px 18px;
    }

    button {
      padding: 18px 25px;
    }

    .map {
      right: -90px;
    }

    .cartoon {
      &_circle, &_ellipce {
        top: 10px;
        width: 46px;
      }

      &_circle {
        left: 8px;
      }

      &_yellow {
        width: 60px;
        bottom: 225px;
      }

      &_red {
        width: 140px;
        bottom: 134px;
      }
    }

    .pd {
      padding: 62px 0 98px;
    }
  }


  @media (max-width: 576px) {

    .col-6 {
      &:first-child {
        width: 88%;
      }

      &:last-child {
        width: 12%;
      }
    }
    
    h1 {
      font-size: 30px;
      line-height: 64%;
      margin-bottom: 20px;
    }

    input, textarea {
      padding: 10px 15px;
      font-size: 16px;
    }

    textarea {
      margin-bottom: 18px;
    }
    
    .map {
      right: -180px;
    }

    .cartoon {
      &_circle, &_ellipce {
        top: 7px;
        width: 40px;
      }

      &_red {
        width: 128px;
        bottom: 66px;
        right: -32px;
      }

      &_yellow {
        width: 48px;
        bottom: 160px;
        right: 38px;
      }
    }
  }
  
  @media (max-width: 480px) {
    padding: 0 28px;
    .col-6 {
      &:first-child {
        width: 95%;
        padding-right: 35px;
      }

      &:last-child {
        width: 5%;
      }
    }

    h1 {
      font-size: 25px;
      line-height: 59%;
      margin-bottom: 18px;
    }

    button {
      padding: 14px 18px;
      font-size: 16px;
    }
    
    .map {
      right: -190px;
      width: 250px;
    }

    .cartoon {
      &_yellow {
        width: 42px;
        bottom: 180px;
        right: 22px;
      }
      
      &_red {
        width: 100px;
        bottom: 112px;
      }
    }

    .pd {
      padding: 58px 0 65px;
    }
  }
`