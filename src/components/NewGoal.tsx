import { type FormEvent } from 'react';

const NewGoal = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <form onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input id='goal' type='text' />
      </p>
      <p>
        <label htmlFor='summary'> Short Summary</label>
        <input id='summary' />
      </p>
      <button>Add goal</button>
    </form>
  );
};

export default NewGoal;
