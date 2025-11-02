document.addEventListener("DOMContentLoaded", () => {
  // Always create a single logout button appended to the body so it's visible
  // after any login flow. Use fixed positioning so it's independent of page layout.
  if (!document.getElementById("global-logout-btn")) {
    const logoutBtn = document.createElement("button");
    logoutBtn.id = "global-logout-btn";
    logoutBtn.textContent = "Logout";
    logoutBtn.className =
      "btn btn-danger btn-sm ms-2 mt-3 fw-semibold text-white logout";
    logoutBtn.style.position = "fixed";
    logoutBtn.style.bottom = "20px";
    logoutBtn.style.right = "20px";
    logoutBtn.style.zIndex = "9999";

    logoutBtn.addEventListener("click", () => {
      // clear stored credentials
      try {
        localStorage.removeItem("userCredentials");
        localStorage.removeItem("currentUser");
      } catch (e) {
        // ignore
      }
      alert("You have been logged out!");
      window.location.href = "./index.html";
    });

    document.body.appendChild(logoutBtn);
  }
});
