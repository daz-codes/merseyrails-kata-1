import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.element.addEventListener("click", (event) => {
      const old_email = this.element.querySelector(".bg-blue-100");
      old_email?.classList?.remove("bg-blue-100");
      const email = event.target.closest("a");
      email.classList.add("bg-blue-100");
    });
  }
}
