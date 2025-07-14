import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static classes = ["active"];

  connect() {
    this.element.addEventListener("click", (event) => {
      const prevEmail = this.element.querySelector(`.${this.activeClass}`);
      prevEmail?.classList?.remove(this.activeClass);
      const email = event.target.closest("a");
      email.classList.add(this.activeClass);
    });
  }
}
