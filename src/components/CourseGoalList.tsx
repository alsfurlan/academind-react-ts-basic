import { type FC } from 'react';
import CourseGoal from './CourseGoal';
import { CourseGoal as CourseGoalType } from '../types/CourseGoal.ts';

type CourseGoalListProps = {
  goals: CourseGoalType[];
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals }) => {
  return (
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
  );
};

export default CourseGoalList;
