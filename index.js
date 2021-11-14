const FormValidation = (() => {
  const inputs = Array.from(document.querySelectorAll('input'));

  const wrapperEffectOnInputFocus = () => {
    inputs.forEach((input) => {
      const wrapper = input.parentNode.parentNode;

      input.addEventListener('focusin', () => {
        wrapper.classList.add('focus');
      });

      input.addEventListener('focusout', () => {
        wrapper.classList.remove('focus');
      });
    });
  };

  return {
    wrapperEffectOnInputFocus,
  };
})();

FormValidation.wrapperEffectOnInputFocus();
