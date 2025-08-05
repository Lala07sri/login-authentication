function register() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  if (username && password) {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    document.getElementById("message").innerText = "✅ Registered successfully!";
  } else {
    document.getElementById("message").innerText = "⚠️ Please fill in all fields.";
  }
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && username === storedUser.username && password === storedUser.password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").innerText = "❌ Invalid credentials!";
  }
}
