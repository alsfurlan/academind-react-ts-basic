import './App.css';
import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import goalsImage from './assets/goals.jpg';
import { useState } from 'react';

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((goals) => {
      return [
        ...goals,
        {
          id: +(Math.random() * 1000).toFixed(0),
          title: 'Learn React and TS',
          description: 'Learn a lot',
        },
      ];
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Addon</button>
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
