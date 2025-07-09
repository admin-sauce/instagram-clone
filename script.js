document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let flag = true;
    let messages = [];

    if (email === "" || password === "") {
      messages.push("Both fields are required.");
      flag = false;
    }

    if (password.length < 6) {
      messages.push("Password must be at least 6 characters.");
      flag = false;
    }

    if (flag) {
      alert("Login successful!");
    }
    }
  });
});
