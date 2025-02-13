import { useState } from 'react';

export default function useInput(initialValue, validationFn) {
  const [formData, setFormData] = useState(initialValue);

  const handleFormDataChange = (event) => {
    setFormData({
      value: event.target.value,
      isTouched: false,
    });
  };

  const handleOnBlur = () => {
    setFormData({
      ...formData,
      isTouched: true,
    });
  };

  const isValid = validationFn(formData.value);

  return {
    formData,
    handleFormDataChange,
    handleOnBlur,
    hasError: formData.isTouched && !isValid,
  };
}
