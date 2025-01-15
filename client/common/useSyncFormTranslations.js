import { useEffect } from 'react';

// Usage: useSyncFormTranslations(formRef, language)
// This hook ensures that form values are preserved when the language changes.
// Pass a ref to the form instance and the current language as arguments.
const useSyncFormTranslations = (formRef, language) => {
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const { values } = form.getState();
    form.reset();

    Object.keys(values).forEach((field) => {
      if (values[field]) {
        form.change(field, values[field]);
      }
    });
  }, [language]);
};

export default useSyncFormTranslations;
