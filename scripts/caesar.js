function caesarRenderer() {
  const form = document.querySelector("#caesar");
  form.addEventListener("submit", event => {
    event.preventDefault();

    const input = event.target["caesar-input"].value;
    const direction = event.target["caesar-options"].value;
    const shift = event.target["caesar-shift"].value;
    const result =
      direction === "encode"
        ? caesarModule.caesar(input, Number(shift))
        : caesarModule.caesar(input, Number(shift), false);

    const alert = document.querySelector("#caesar-alert");
    if (result) {
      alert.classList.add("d-none");
      const output = document.querySelector("#caesar-output");
      output.innerHTML = result;
    } else {
      alert.classList.remove("d-none");
    }
  });
}

document.addEventListener("DOMContentLoaded", caesarRenderer);
