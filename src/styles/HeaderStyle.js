import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: #1f2937;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: white;
  padding: 5px 0;

  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export { HeaderContainer, HeaderLeft, HeaderRight };
