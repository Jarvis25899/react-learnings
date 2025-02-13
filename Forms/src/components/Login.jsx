import { useRef, useState } from 'react';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [emailInvalid, setEmailInvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailValue = email.current.value;

    if (!emailValue.includes('@')) {
      setEmailInvalid(true);
      return;
    }

    setEmailInvalid(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" ref={email} />
          <div className="control-error">
            {emailInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
