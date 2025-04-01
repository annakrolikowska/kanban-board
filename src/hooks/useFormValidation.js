import { useState } from "react";

const useFormValidation = (initialState) => {
  const [formState, setFormState] = useState(initialState);

  const validateForm = () => {
    const errors = [];
    const { title, description, priority, userId } = formState;

    if (!title || title.trim() === "") {
      errors.push("Title is required");
    }
    if (description && description.trim().length > 100) {
      errors.push("Description maximum 100 characters in length");
    }
    if (!priority || priority.trim() === "") {
      errors.push("Priority is required");
    }
    if (!userId || userId.trim() === "") {
      errors.push("Member is required");
    }

    setFormState({
      ...formState,
      errors,
    });
    return errors.length === 0;
  };

  return { formState, setFormState, validateForm };
};

export default useFormValidation;
