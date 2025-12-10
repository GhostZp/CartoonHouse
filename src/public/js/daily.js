// REGISTER USER
document
  .getElementById("registerSubmit")
  .addEventListener("click", async () => {
    const username = document.getElementById("reg-username").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    if (!username || !email || !password) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      let result = null;

      const text = await response.text();
      if (text) {
        try {
          result = JSON.parse(text);
        } catch (e) {
          console.warn("Non-JSON response:", text);
        }
      }

      if (!response.ok) {
        alert(result?.error || "Registration failed");
        return;
      }

      alert("User registered successfully!");

      localStorage.setItem("username", username);
      document.getElementById("registerForm").reset();

      setTimeout(() => {
        document.getElementById("registerDialog").close();
      }, 0);
    } catch (err) {
      console.error("Registration error:", err);
      alert("Something went wrong.");
    }
  });

// LOGIN USER
const loginUser = async (event) => {
  event.preventDefault();

  const loginForm = document.querySelector("#loginDialog form");
  const username = loginForm.querySelector("input[name=username]").value;
  const password = loginForm.querySelector("input[name=password]").value;

  const bodyData = { username, password };

  const url = "http://localhost:5501/api/auth/login";
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };

  try {
    const res = await fetch(url, options);
    const response = await res.json();

    if (!response?.token) {
      console.error("Login failed:", response?.error);
      return;
    }

    localStorage.setItem("token", response.token);
    localStorage.setItem("username", username);

    loginForm.reset();
    window.location.href = "/pages/login.html";

  } catch (error) {
    console.error("Login request failed:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginSubmit").addEventListener("click", loginUser);
  document.getElementById("cancelLogin").addEventListener("click", () => {
    document.getElementById("loginDialog").close();
  });
});

