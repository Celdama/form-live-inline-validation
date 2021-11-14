const FormValidation = (() => {
  const inputs = Array.from(document.querySelectorAll('input'));

  const wrapperEffectOnInputFocus = () => {
    inputs.forEach((input) => {
      input.addEventListener('focus', () => {
        input.parentNode.parentNode.classList.add('focus');
        console.log(input.parentNode.parentNode);
      });

      input.addEventListener('focusout', () => {
        input.parentNode.parentNode.classList.remove('focus');
      });
    });
  };

  return {
    wrapperEffectOnInputFocus,
  };
})();

FormValidation.wrapperEffectOnInputFocus();
