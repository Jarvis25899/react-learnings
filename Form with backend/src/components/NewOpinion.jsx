import { useActionState, useContext } from 'react';
import { useFormStatus } from 'react-dom';

import { OpinionsContext } from '../store/opinions-context';
import Submit from './Submit';

export function NewOpinion() {
  const { addOpinion } = useContext(OpinionsContext);

  async function newOpinionAction(prevState, formData) {
    const data = Object.fromEntries(formData.entries());

    const errors = [];
    if (!data.userName.trim()) {
      errors.push('Please enter your name');
    }
    if (data.title.trim().length < 5) {
      errors.push('Title must be of atleast 5 characters');
    }
    if (data.body.trim().length < 10 || data.body.trim().length > 300) {
      errors.push('Opinion must be between 10 and 300 characters long');
    }

    if (errors?.length > 0) {
      return { errors, data };
    }

    await addOpinion(data);

    return { errors: null };
  }

  const [formState, formAction, pending] = useActionState(newOpinionAction, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.data?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.data?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.data?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <Submit />
      </form>
    </div>
  );
}
