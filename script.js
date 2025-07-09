document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  function validateEmailField() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailError.textContent = "Email is required.";
      return false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      return false;
    } else {
      emailError.textContent = "";
      return true;
    }
  }

  function validatePasswordField() {
    const password = passwordInput.value.trim();
    if (password === "") {
      passwordError.textContent = "Password is required.";
      return false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      return false;
    } else {
      passwordError.textContent = "";
      return true;
    }
  }

  emailInput.addEventListener("input", validateEmailField);
  passwordInput.addEventListener("input", validatePasswordField);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValid = validateEmailField();
    const passwordValid = validatePasswordField();
    if (emailValid && passwordValid) {
      alert("Login successful!");
    }
  });
});
