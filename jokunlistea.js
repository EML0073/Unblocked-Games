// Add games here using the same object format. Keep each numeric id permanent; never renumber existing games. Assign new games the next unused id. Use rawUrl for HTML game files.
const gamesList = [
  {
    "id": 0,
    "row": "Adventure",
    "title": "Minecraft 26.2",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/minecraft.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/MilkdromedaStudios/all-of-eaglercraft@main/ArchMC%20Eaglercraft%2026.2.html"
  }
];

// Exponer el catálogo para páginas auxiliares como el diagnóstico.
window.gamesList = gamesList;
