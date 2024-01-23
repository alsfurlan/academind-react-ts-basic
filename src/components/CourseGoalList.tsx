import { type FC } from 'react';
import CourseGoal from './CourseGoal';
import { CourseGoal as CourseGoalType } from '../types/CourseGoal.ts';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
      {goals.map(({ id, title, description }) => {
        return (
          <li key={id}>
            <CourseGoal id={id} title={title} onDelete={onDeleteGoal}>
              <p>{description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
};

export default CourseGoalList;
