
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.form');
    const formControls = form.querySelectorAll('.form-control');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      checkInputs();
    });
  
    formControls.forEach((formControl) => {
      const input = formControl.querySelector('input');
      const errorIcon = formControl.querySelector('.img-error');
      const errorMsg = formControl.querySelector('.errorMsg');
  
      input.addEventListener('input', () => {
        checkInput(input, errorMsg, errorIcon);
      });
    });
  
    function checkInputs() {
      let hasError = false;
  
      formControls.forEach((formControl) => {
        const input = formControl.querySelector('input');
        const errorIcon = formControl.querySelector('.img-error');
        const errorMsg = formControl.querySelector('.errorMsg');
  
        const inputValue = input.value.trim();
        const inputName = input.name.charAt(0).toUpperCase() + input.name.slice(1); // Capitalize field name
  
        if (inputValue === '') {
          setErrorFor(input, errorMsg, errorIcon, `${inputName} não pode ser vazio`);
          hasError = true;
        } else {
          setSuccessFor(input, errorMsg, errorIcon);
        }
      });
  
      if (!hasError) {
        form.submit();
      }
    }
  
    function setErrorFor(input, errorMsg, errorIcon, message) {
      errorMsg.innerText = message;
      input.parentElement.classList.add('error');
      errorIcon.style.display = 'inline'; // Show error icon
    }
  
    function setSuccessFor(input, errorMsg, errorIcon) {
      errorMsg.innerText = '';
      input.parentElement.classList.remove('error');
      input.classList.add('input-valid')
      errorIcon.style.display = 'none'; // Hide error icon
    }
  });

