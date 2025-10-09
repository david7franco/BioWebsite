// global.js
async function loadPartial(id, file) {
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      const html = await response.text();
      document.getElementById(id).innerHTML = html;
    } catch (err) {
      console.error(err);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Load global header and footer on every page that includes them
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
  
    if (header) loadPartial("header", "header.html");
    if (footer) loadPartial("footer", "footer.html");
  });
  