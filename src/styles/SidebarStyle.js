import styled from "styled-components";

const SideContainer = styled.div`
  margin-top: 7.7vh;
  flex: 0.2;
  background-color: #1f2937;
  color: white;
  border-top: 1px solid gray;
  text-align: center;
  max-width: 250px;
  /* overflow-y: scroll; */

  > h2 {
    margin-top: 1rem;
    padding: 0.9rem 0;
    color: gray;
  }

  > p {
    padding: 1.5rem 0;
    font-weight: 700;
    border-bottom: 1px solid gray;
  }

  > button {
    background-color: whitesmoke;
    outline: none;
    border: none;
    padding: 0.5rem 0;
    font-size: 1rem;
    margin-top: 1rem;
    width: 70%;
    font-weight: 600;
    color: var(--base-color);
    cursor: pointer;
    border-radius: 5px;
  }

  @media (max-width: 450px) {
    flex: 0.4;
    margin-top: 7.5vh;
  }
`;

export { SideContainer };
