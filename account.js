function saveProfile() {
  const name = document.getElementById("name").value;
  const userName = document.getElementById("userName");

  // Save to localStorage (you can replace with backend API)
  localStorage.setItem("userName", name);

  userName.textContent = name;
  alert("Profile updated!");
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

window.onload = function () {
  const storedName = localStorage.getItem("userName");
  if (storedName) {
    document.getElementById("userName").textContent = storedName;
    document.getElementById("name").value = storedName;
  }
};
