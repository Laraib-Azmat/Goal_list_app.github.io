import React, { useState } from "react";
import InputGoal from "./Components/GoalInput/InputGoal";
import GoalList from "./Components/GoalList/GoalList";

import "./App.css";

function App() {
  const [Text, setText] = useState([]);

  const inputText = (goal) => {
    setText((prevText) => {
      const updatedtext = [...prevText];
      updatedtext.unshift({ text: goal.text, key: Math.random().toString(), comp: goal.comp });
      return updatedtext;
    });
  };

  const goalDeleteHandler = (goalItem) => {
    setText((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.key !== goalItem.key);
      return updatedGoals;
    });
  };

  const goalCompHandler = (goalItem, comp) => {
    setText((prevGoals) => {
      const updatedGoals = [...prevGoals];
      const index = updatedGoals.indexOf(goalItem);

      updatedGoals[index].comp = comp;
      return updatedGoals;
    });
  };

  return (
    <div>
      <section className="goal-form">
        <InputGoal onInput={inputText} />
      </section>

      <section className="goal-list">
        {Text.length === 0 && <p className="nogoal">No Goals Yet! &#x1F615;</p>}

        {Text.length > 0 && (
          <GoalList
            onComp={goalCompHandler}
            items={Text}
            onDelete={goalDeleteHandler}
          />
        )}
      </section>
    </div>
  );
}

export default App;
