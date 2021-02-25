import styled from "styled-components";

const SignInContainer = styled.div`
  display: flex;
  padding: 9rem;

  > div > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4f46e5;
    color: white;
    padding: 1rem 2rem;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  > div > button > img {
    height: 2rem;
    margin-right: 1rem;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    overflow: hidden;

    > div {
      margin: 0;
    }

    > div > button {
      font-weight: normal;
      font-size: 1rem;
    }
  }
`;

const SignInLeft = styled.div`
  flex: 0.4;
  flex-grow: 1;
  margin-right: 3rem;
`;
const SignInRight = styled.div`
  flex: 0.6;
`;

export { SignInContainer, SignInLeft, SignInRight };
