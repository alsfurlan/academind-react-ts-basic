import Header from './components/Header';
import goalsImage from './assets/goals.jpg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import { CourseGoal } from './types/CourseGoal';
import NewGoal from './components/NewGoal';

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (title: string, description: string) => {
    setGoals((goals) => {
      return [
        ...goals,
        {
          id: +(Math.random() * 1000).toFixed(0),
          title,
          description,
        },
      ];
    });
  };

  function onDeleteGoal(id: number): void {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={onDeleteGoal} />
    </main>
  );
}

export default App;
