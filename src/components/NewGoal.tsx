import { useRef, type FormEvent, PropsWithChildren } from 'react';

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    onAddGoal(enteredGoal, enteredSummary);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input id='goal' type='text' ref={goal} />
      </p>
      <p>
        <label htmlFor='summary'> Short Summary</label>
        <input id='summary' type='text' ref={summary} />
      </p>
      <button>Add goal</button>
    </form>
  );
};

export default NewGoal;
