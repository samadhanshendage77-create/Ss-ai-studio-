document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generateBtn");
  const promptInput = document.getElementById("prompt");
  const status = document.getElementById("status");

  button.addEventListener("click", () => {
    const prompt = promptInput.value.trim();

    if (!prompt) {
      status.textContent = "⚠️ Please enter a video prompt.";
      return;
    }

    button.disabled = true;
    status.textContent = "⏳ Generating video...";

    // Demo loading
    setTimeout(() => {
      status.textContent = "✅ Video generated successfully! (Demo)";
      button.disabled = false;
    }, 3000);
  });
});
