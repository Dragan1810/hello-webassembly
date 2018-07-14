const rust = import("./hello_webassembly");

rust.then(rust_module => {
  const btn = document.getElementById("parse");
  const previewArea = document.getElementById("output");

  btn.addEventListener("click", () => {
    const input = document.getElementById("markdown").value;
    previewArea.innerHTML = rust_module.parse(input);
  });
});
