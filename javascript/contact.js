// this part is for form validation (amowmebs sheyvanilia tu ara monacemebi)

document.addEventListener("DOMContentLoaded", function () {
  const reviewForm = document.getElementById("review-form");
  const toggleBtn = document.getElementById("toggle-password");
  const passwordInput = document.getElementById("secret");

  toggleBtn.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    toggleBtn.textContent = isHidden ? "Hide" : "Show";
  });

  if (reviewForm) {
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      const password = passwordInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !subject || !message || !password) {
        return alert("All fields are required.");
      }

      if (!emailRegex.test(email)) {
        return alert("Please enter a valid email address.");
      }

      const reviewList = document.getElementById("review-list");
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review");

      reviewItem.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <button class="delete-review">Delete</button>
        <hr />
      `;

      reviewItem
        .querySelector(".delete-review")
        .addEventListener("click", function () {
          reviewItem.remove();
        });

      reviewList.prepend(reviewItem);
      this.reset();
      toggleBtn.textContent = "Show";
    });
  }
});
