const FormValidation = (() => {
  const form = document.querySelector('form');
  const inputs = Array.from(document.querySelectorAll('input'));
  const firstName = document.getElementById('firstName');
  const firstNameError = document.querySelector('#firstName + span.error');

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

  const showError = (element, display) => {
    if (element.id === 'firstName') {
      if (element.validity.valueMissing) {
        display.textContent = 'first name required';
      } else if (element.validity.tooShort) {
        display.textContent = `must be longer than ${element.minLength}`;
      }
    }
  };

  const firstNameInputValidity = () => {
    firstName.addEventListener('input', () => {
      if (firstName.validity.valid) {
        firstNameError.textContent = '';
        firstNameError.className = 'error';
      } else {
        showError(firstName, firstNameError);
      }
    });
  };

  const formListener = () => {
    form.addEventListener('submit', (e) => {
      if (!firstName.validity.valid) {
        showError(firstName, firstNameError);
        e.preventDefault();
      }
    });
  };

  return {
    wrapperEffectOnInputFocus,
    firstNameInputValidity,
    formListener,
  };
})();

FormValidation.wrapperEffectOnInputFocus();
FormValidation.firstNameInputValidity();
FormValidation.formListener();
