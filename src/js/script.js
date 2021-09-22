const form = document.querySelector('.content__form');
const email = document.querySelector('.content__email');
const errors = document.querySelectorAll('.content__err');

form.addEventListener('submit', e => {
  if (email.value) {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (!regexMatch) {
      e.preventDefault();
      email.classList.add('err-email');
      errors.forEach(error => {
        error.classList.add('err');
      });
    }
  } else {
    e.preventDefault();
    email.classList.add('err-email');
    errors.forEach(error => {
      error.classList.add('err');
    });
  }
});
