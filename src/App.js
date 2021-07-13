import "./styles.css";
import Goal from "./Goal";
import Airtable from "airtable";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/Global.style";

const base = new Airtable({ apiKey: "key57ivPhfWwtwCaH" }).base(
  "app8WHHySPdUr1C8t"
);

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin: 1rem 0;
`;
export default function App() {
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    base("goals")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setGoals(records);
        fetchNextPage();
      });
    base("updates")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setUpdates(records);
        fetchNextPage();
      });
    setIsLoading(false);
  }, []);


  return (
    <>
      <GlobalStyle />

      {isLoading ? <h1> Loading... </h1> : null}
      <StyledH1>My Goals</StyledH1>
      {goals.map((goal) => (
        <Goal
          key={goal.id}
          goal={goal}
          updates={updates.filter(
            (update) => update.fields.goals[0] === goal.id
          )}
        />
      ))}
    </>
  );
}
