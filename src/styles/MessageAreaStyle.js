import styled from "styled-components";

const MessageContainer = styled.div`
  margin-top: 8.4vh;
  flex: 0.8;
  background-color: var(--base-color);
  overflow-y: scroll;
  flex-grow: 1;
  color: white;
`;

const UserMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;

  @media (max-width: 450px) {
    padding-left: 0.5rem;
    padding-top: 1.5rem;
  }
`;

const MessageBox = styled.div`
  border-radius: 5px;

  > form {
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 10vh;
    padding: 0.7rem 0.7rem;
    border: none;
    outline: none;
    border: 1px solid gray;
    width: 70%;
    border-radius: 5px;
    font-size: 1rem;
  }

  > form > button {
    border: none;
    outline: none;
  }

  @media (max-width: 450px) {
    form > input {
      max-width: 10rem;
    }
  }
`;

export { MessageContainer, UserMessage, MessageBox };
