import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 79px 0 104px;
  background: #FAFAFA;
  border: 1px solid #D8D8D8;
  width: 100%;
  position: relative;
  overflow: hidden;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: 198px;
  }

  li {
    margin-right: 20px;
  }

  a {
    color: #696969;
  }

  .circle {

    &_red {
      position: absolute;
      top: -32px;
      left: 14px;
    }

    &_yellow {
      position: absolute;
      right: 0;
      top: 59px;
    }

    &_blue {
      position: absolute;
      right: 91px;
      top: 0;
    }
  }


  @media (max-width: 992px) {
    padding: 44px 0 82px;

    ul {
      margin-left: 100px;
    }

    .circle {

      &_red {
        width: 184px;
        top: -18px;
      }

      &_yellow, &_blue {
        width: 65px;

      }

      &_yellow {
        top: 27px;
      }
    }
  }


  @media (max-width: 768px) {
    padding: 35px 0 70px;
    .circle {

      &_red {
        width: 140px;
        top: 2px;
      }

      &_yellow, &_blue {
        width: 48px;

      }

      &_yellow {
        top: 30px;
      }
    }
  }


  @media (max-width: 576px) {
    padding: 35px 0 55px;

    ul {
      margin-left: 75px;
    }
    li {
      margin-right: 13px;
    }
    
    a {
      font-size: 14px;
    }

    .circle {

      &_red {
        width: 128px;
        top: -4px;
      }

      &_yellow, &_blue {
        width: 40px;

      }

      &_blue {
        right: 62px;
      }
    }
  }


  @media (max-width: 480px) {
    padding: 35px 0;

    ul {
      margin-left: 90px;
    }
    
    li {
      margin-right: 5px;
    }

    a {
      font-size: 12px;
    }

    .circle {

      &_red {
        width: 100px;
        top: -4px;
      }

      &_yellow, &_blue {
        width: 32px;

      }

      &_blue {
        right: 38px;
      }
      
      &_yellow {
        top: 22px;
      }
    }
  }
`