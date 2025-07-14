import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    const id = extractEmailIdFromUrl(window.location.pathname);
    const email = document.getElementById(`email_${id}`);
    if (email) highlightCurrent(email);
    this.element.addEventListener("click", (event) => {
      const old_email = this.element.querySelector(".bg-blue-100");
      old_email?.classList?.remove("bg-blue-100");
      const email = event.target.closest("a");
      highlightCurrent(email);
    });
  }
}

function extractEmailIdFromUrl(path) {
  const match = path.match(/^\/emails\/(\d+)/);
  return match ? match[1] : null;
}

function highlightCurrent(email) {
  email.classList.add("bg-blue-100");
}
