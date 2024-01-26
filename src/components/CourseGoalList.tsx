import { type ReactNode } from 'react';
import CourseGoal from './CourseGoal';
import { CourseGoal as CourseGoalType } from '../types/CourseGoal.ts';
import InfoBox from './InfoBox.tsx';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
  children: ReactNode;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  if (!goals.length) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet. Starting add some!
      </InfoBox>
    );
  }

  const warningBox =
    goals.length >= 4 ? (
      <InfoBox mode='warning'>
        {' '}
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    ) : null;

  return (
    <>
      {warningBox}
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
    </>
  );
};

export default CourseGoalList;
