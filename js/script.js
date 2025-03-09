const currentYearDom = document.getElementById("getwolt-current-year");
const currentYear = new Date().getFullYear();
currentYearDom.innerText = currentYear;

function copyCode() {
  const codeElement = document.getElementById("referral-code");
  const code = codeElement.textContent;
  navigator.clipboard
    .writeText(code)
    .then(() => {
      alert("Code copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy code: ", err);
    });
}
