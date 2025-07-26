import { Controller } from "@daz/stimulus";

export default class extends Controller {
  static classes = ["active", "test"];
  static values = { active: String };

  connect() {
    const email = this.findElement(this.activeValue);
    if (email) {
      email.scrollIntoView();
    }

    this.element.addEventListener("click", (event) => {
      const prevEmail = this.findElement(this.activeClass);
      prevEmail?.classList?.remove(this.activeClass);
      const email = event.target.closest("a");
      email.classList.add(this.activeClass);
      this.activeValue = email.id;
    });
  }
}
