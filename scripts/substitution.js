function substitutionRenderer() {
  const form = document.querySelector("#substitution");
  form.addEventListener("submit", event => {
    event.preventDefault();

    const input = event.target["substitution-input"].value;
    const direction = event.target["substitution-options"].value;
    const alphabet = event.target["substitution-alphabet"].value;
    const result =
      direction === "encode"
        ? substitutionModule.substitution(input, alphabet)
        : substitutionModule.substitution(input, alphabet, false);

    const alert = document.querySelector("#substitution-alert");
    if (result) {
      alert.classList.add("d-none");
      const output = document.querySelector("#substitution-output");
      output.innerHTML = result;
    } else {
      alert.classList.remove("d-none");
    }
  });
}

document.addEventListener("DOMContentLoaded", substitutionRenderer);
