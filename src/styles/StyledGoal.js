import styled from "styled-components";

const StyledGoal = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;

  h2 {
    display: inline;
    font-size: 3rem;
    padding: 1rem 5rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h3:last-of-type {
    margin-top: 1rem;
  }
`;
const StyledCheckBox = styled.label`
  display: block;
  position: relative;
  user-select: none;

  input {
    display: none;

    &:checked ~ span {
      background: #754dff;

      &::after {
        display: block;
      }
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 3rem;
    width: 3rem;
    background: #dacfff;
    transition: background 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 1rem;
      width: 0.8rem;
      height: 2rem;
      border: solid white;
      border-width: 0 4px 4px 0;
      transform: rotate(45deg);
      display: none;
    }
  }
`;

const StyledGoalDetails = styled.div`
  padding: 2rem;
  background: #dacfff;
`;
export { StyledGoal, StyledCheckBox, StyledGoalDetails };
