/* Apply button scroll top behavior */
export default function button() {
  const buttonElement = document.querySelector(".button");

  buttonElement.addEventListener("click", () => {
    window.scroll({ top: 0, behavior: "smooth" });
  });
}
