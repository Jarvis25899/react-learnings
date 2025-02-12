import { useState } from "react";

export default function StateLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormDataChange = (value, field) => {
    setFormData((data) => ({
      ...data,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(event) =>
              handleFormDataChange(event.target.value, "email")
            }
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={(event) =>
              handleFormDataChange(event.target.value, "password")
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
