const tabs = document.querySelectorAll(".tab");
const codes = document.querySelectorAll(".code");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(btn => {
      btn.classList.remove("active");
    });

    codes.forEach(code => {
      code.classList.remove("active");
    });

    tab.classList.add("active");

    document
      .getElementById(tab.dataset.target)
      .classList.add("active");

  });

});

function runCode(){

  const html =
    document.getElementById("html").value;

  const css =
    document.getElementById("css").value;

  const js =
    document.getElementById("js").value;

  const preview =
    document.getElementById("preview");

  const previewDocument =
    preview.contentDocument ||
    preview.contentWindow.document;

  previewDocument.open();

  previewDocument.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        ${css}
      </style>
    </head>

    <body>
      ${html}

      <script>
        ${js}
      <\/script>
    </body>
    </html>
  `);

  previewDocument.close();
}

document
  .getElementById("runBtn")
  .addEventListener("click", runCode);

runCode();