function polybiusRenderer() {
  const form = document.querySelector("#polybius");
  form.addEventListener("submit", event => {
    event.preventDefault();

    const input = event.target["polybius-input"].value;
    const direction = event.target["polybius-options"].value;
    const result =
      direction === "encode"
        ? polybiusModule.polybius(input)
        : polybiusModule.polybius(input, false);

    const alert = document.querySelector("#polybius-alert");
    if (result) {
      alert.classList.add("d-none");
      const output = document.querySelector("#polybius-output");
      output.innerHTML = result;
    } else {
      alert.classList.remove("d-none");
    }
  });
}

document.addEventListener("DOMContentLoaded", polybiusRenderer);
