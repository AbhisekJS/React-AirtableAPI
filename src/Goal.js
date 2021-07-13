import {
  StyledGoal,
  StyledCheckBox,
  StyledGoalDetails
} from "./styles/StyledGoal";

export default function Goal({ goal, updates }) {
  return (
    <StyledGoal>
      <StyledCheckBox>
        {""}
        <input type="checkbox" defaultChecked={goal.fields.complete} disabled />
        <span />
      </StyledCheckBox>
      <h2>{goal.fields.title}</h2>
      <StyledGoalDetails>
        <h3>Details</h3>
        <p>{goal.fields.details}</p>
        <h3>UPDATES</h3>
        {updates.map((update, index) => (
          <p key={index}>{update.fields.update}</p>
        ))}
      </StyledGoalDetails>
    </StyledGoal>
  );
}
