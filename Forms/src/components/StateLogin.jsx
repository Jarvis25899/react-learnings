import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import useInput from '../hooks/useInput';

export default function StateLogin() {
  const {
    formData: email,
    handleFormDataChange: handleEmailChange,
    handleOnBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput(
    {
      value: '',
      isTouched: false,
    },
    (value) => isNotEmpty(value) && isEmail(value)
  );

  const {
    formData: password,
    handleFormDataChange: handlePasswordChange,
    handleOnBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput(
    {
      value: '',
      isTouched: false,
    },
    (value) => isNotEmpty(value) && hasMinLength(value.trim(), 6)
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log('submitted', email.value, password.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          type="email"
          name="email"
          label="email"
          value={email.value}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailHasError && 'Please enter a valid email'}
        />

        <Input
          id="password"
          type="password"
          name="password"
          label="password"
          value={password.value}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={passwordHasError && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
