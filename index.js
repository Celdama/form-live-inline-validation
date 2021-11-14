import Icons from './utilities/iconSvg';

const FormValidation = (() => {
  const form = document.querySelector('form');
  const inputs = Array.from(document.querySelectorAll('input'));
  const firstName = document.getElementById('firstName');
  const firstNameError = document.querySelector('#firstName + span.error');
  const lastName = document.getElementById('lastName');
  const lastNameError = document.querySelector('#lastName + span.error');
  const mail = document.getElementById('email');
  const mailError = document.querySelector('#email + span.error');
  const password = document.getElementById('password');
  const passwordError = document.querySelector('#password + span.error');

  const inputsForm = [firstName, lastName, mail, password];
  const formSpanError = [
    firstNameError,
    lastNameError,
    mailError,
    passwordError,
  ];

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
    const errorDisplay = display;
    const labelContent = element.previousElementSibling.textContent;
    if (element.validity.valueMissing) {
      errorDisplay.textContent = `${labelContent} is required`;
    } else if (element.validity.tooShort) {
      errorDisplay.textContent = `Must be longer than ${element.minLength}`;
    } else if (element.validity.typeMismatch) {
      errorDisplay.textContent = 'Enter a valid email adress';
    }
  };

  const checkInputValidity = () => {
    const { validInput, invalidInput } = Icons;

    inputsForm.forEach((input) => {
      input.addEventListener('input', () => {
        if (input.validity.valid) {
          input.nextElementSibling.textContent = '';
          input.nextElementSibling.className = 'error';
          input.parentNode.parentNode.children[1].innerHTML = `${validInput()}`;
        } else {
          input.parentNode.parentNode.children[1].innerHTML = `${invalidInput()}`;
          showError(input, input.nextElementSibling);
        }
      });
    });
  };

  const resetSpansError = () => {
    formSpanError.forEach((span) => {
      const displayError = span;
      displayError.textContent = '';
      displayError.className = 'error';
    });
  };

  const resetIconInput = () => {
    const { nameIcon, mailIcon, passwordIcon } = Icons;

    firstName.parentNode.parentNode.children[1].innerHTML = `${nameIcon()}`;
    lastName.parentNode.parentNode.children[1].innerHTML = `${nameIcon()}`;
    mail.parentNode.parentNode.children[1].innerHTML = `${mailIcon()}`;
    password.parentNode.parentNode.children[1].innerHTML = `${passwordIcon()}`;
  };

  const formListener = () => {
    checkInputValidity();

    form.addEventListener('submit', (e) => {
      inputsForm.forEach((input) => {
        if (!input.validity.valid) {
          showError(input, input.nextElementSibling);
          e.preventDefault();
        } else {
          alert('You are a new member ! Congrats :)');
          form.reset();
        }
      });
      resetSpansError();
      resetIconInput();
    });
  };

  return {
    wrapperEffectOnInputFocus,
    formListener,
  };
})();

window.onload = () => {
  FormValidation.wrapperEffectOnInputFocus();
  FormValidation.formListener();
};
