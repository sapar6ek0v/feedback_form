import styled from "styled-components"

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100% !important;
  width: 100% !important;
  background: rgba(0, 0, 0, 0.7);
  z-index: 30;

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  p {
    background: white;
    padding: 20px;
    border: 1px solid rgba(16,20,16,0.91);
    font-size: 18px;
    font-style: italic;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    p {
      padding: 15px;
      font-size: 16px;
    }
  }
`