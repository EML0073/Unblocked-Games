// Add games here using the same object format. Keep each numeric id permanent; never renumber existing games. Assign new games the next unused id. Use rawUrl for HTML game files.
const gamesList = [
  {
    "id": 0,
    "row": "Adventure",
    "title": "Minecraft 26.2",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/minecraft.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/MilkdromedaStudios/all-of-eaglercraft@main/ArchMC%20Eaglercraft%2026.2.html"
  },
  {
    "id": 1,
    "row": "Adventure",
    "title": "Minecraft 1.8.8",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/minecraft.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clminecraft1-8-8.html"
  },
  {
    "id": 2,
    "row": "Arcade",
    "title": "Level Devil",
    "addedAt": "2026-11-23",
    "image": "argazkik/leveldevil.jpeg",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clleveldevil.html"
  },
  {
    "id": 3,
    "row": "Shooter",
    "title": "1v1 LOL",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/1v1lol.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1v1lol.html"
  },
  {
    "id": 4,
    "row": "Arcade",
    "title": "Subway Surfers",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/subwaysurfers.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsubwaysurfers.html"
  },
  {
    "id": 5,
    "row": "Arcade",
    "title": "Tomb of the mask",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tombofthemask.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltombofthemask.html"
  },
  {
    "id": 6,
    "row": "Horror",
    "title": "FNAF",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fnaf.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF.html"
  },
  {
    "id": 7,
    "row": "Horror",
    "title": "FNAF 2",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fnaf2.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF2.html"
  },
  {
    "id": 8,
    "row": "Horror",
    "title": "FNAF 3",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fnaf3.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF3.html"
  },
  {
    "id": 9,
    "row": "Horror",
    "title": "FNAF 4",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fnaf4.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF4.html"
  },
  {
    "id": 10,
    "row": "Arcade",
    "title": "Slope",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/slope.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslope.html"
  },
  {
    "id": 11,
    "row": "Arcade",
    "title": "Stickman Hook",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/stickmanhook.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickmanhook.html"
  },
  {
    "id": 12,
    "row": "Shooter",
    "title": "SUPERHOT",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/superhot.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperhot.html"
  },
  {
    "id": 13,
    "row": "Runner",
    "title": "Temple Run 2",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/templerun2.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltemplerun2.html"
  },
  {
    "id": 14,
    "row": "Platformer",
    "title": "Vex 6",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex6.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex6.html"
  },
  {
    "id": 15,
    "row": "Puzzle",
    "title": "World's Hardest Game",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/worldshardestgame.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clworldshardestgame.html"
  },
  {
    "id": 16,
    "row": "Sports",
    "title": "Basket Bros",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/basketbros.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketbros.html"
  },
  {
    "id": 17,
    "row": "Shooter",
    "title": "Rooftop Snipers",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/rooftopsnipers.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrooftopsnipers.html"
  },
  {
    "id": 18,
    "row": "Adventure",
    "title": "Duck Life",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/ducklife.jpg",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clducklife.html"
  },
  {
    "id": 19,
    "row": "Arcade",
    "title": "Doodle Jump",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doodlejump.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoodlejump.html"
  },
  {
    "id": 20,
    "row": "Multiplayer",
    "title": "Among Us",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/amongus.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamongus.html"
  },
  {
    "id": 21,
    "row": "Puzzle",
    "title": "Angry Birds",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/angrybirds.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clangrybirds.html"
  },
  {
    "id": 22,
    "row": "Horror",
    "title": "Baldi's Basics",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/baldisbasics.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbaldisbasics.html"
  },
  {
    "id": 23,
    "row": "Sports",
    "title": "Basketball Stars",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/basketballstars.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketballstars.html"
  },
  {
    "id": 24,
    "row": "Simulation",
    "title": "BitLife",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bitlife.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbitlife.html"
  },
  {
    "id": 25,
    "row": "Idle",
    "title": "Cookie Clicker",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cookieclicker.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcookieclicker.html"
  },
  {
    "id": 26,
    "row": "Arcade",
    "title": "Crossy Road",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/crossyroad.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrossyroad.html"
  },
  {
    "id": 27,
    "row": "Racing",
    "title": "Drive Mad",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/drivemad.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldrivemad.html"
  },
  {
    "id": 28,
    "row": "Puzzle",
    "title": "Fireboy and Watergirl",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/fireboyandwatergirl.jpg",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireboyandwatergirl.html"
  },
  {
    "id": 29,
    "row": "Rhythm",
    "title": "Friday Night Funkin'",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fridaynightfunkin.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfridaynightfunkin.html"
  },
  {
    "id": 30,
    "row": "Arcade",
    "title": "Geometry Dash Lite",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/geometrydashlite.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgeometrydashlite.html"
  },
  {
    "id": 31,
    "row": "Horror",
    "title": "Granny",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/granny.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranny.html"
  },
  {
    "id": 32,
    "row": "Arcade",
    "title": "Happy Wheels",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/happywheels.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhappywheels.html"
  },
  {
    "id": 33,
    "row": "Action",
    "title": "Jetpack Joyride",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/jetpackjoyride.jpg",
    "rawUrl": "https://cdn.jsdelivr.net/gh/EML0073/Unblocked-Games@main/juegos/jetpack-joyride.html"
  },
  {
    "id": 34,
    "row": "Racing",
    "title": "Moto X3M",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/motox3m.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3m.html"
  },
  {
    "id": 35,
    "row": "Arcade",
    "title": "Pac-Man",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pacman.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpacman.html"
  },
  {
    "id": 36,
    "row": "Arcade",
    "title": "Paper.io 2",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/paperio2.jpg",
    "rawUrl": "https://cdn.jsdelivr.net/gh/CoolDude2349/Offline-HTML-Games-Pack@master/offline/paper-io-2.htm"
  },
  {
    "id": 37,
    "row": "Strategy",
    "title": "Plants vs. Zombies",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/plantsvszombies.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clplantsvszombies.html"
  },
  {
    "id": 38,
    "row": "Sports",
    "title": "Retro Bowl",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/retrobowl.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clretrobowl.html"
  },
  {
    "id": 39,
    "row": "Platformer",
    "title": "Run 3",
    "addedAt": "2026-11-23",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/run3.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrun3.html"
  },
  {
    "id": 40,
    "row": "Platformer",
    "title": "OvO 2",
    "addedAt": "2026-11-24",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ovo2.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clovo2.html"
  },
  {
    "id": 41,
    "row": "Horror",
    "title": "Granny 2",
    "addedAt": "2026-11-24",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/granny2.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranny2.html"
  },
  {
    "id": 42,
    "row": "Action",
    "title": "Grand Theft Auto",
    "addedAt": "2026-11-24",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/UGS-Files/clgtaalt.html"
  },
  {
    "id": 43,
    "row": "Action",
    "title": "Grand Theft Auto 2",
    "addedAt": "2026-11-24",
    "image": "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto2.webp",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/UGS-Files/clgta2alt.html"
  },
  {
    "id": 44,
    "row": "Action",
    "title": "Grand Theft Auto: Chinatown Wars",
    "addedAt": "2026-11-24",
    "image": "https://images.ctfassets.net/18izrhn535ym/7K2Lckd6oHN9oFXXGESPdy/509ed917c40b850004c71d0c3c18c3ea/GTA_CW_FOB.jpg?q=100&w=600",
    "rawUrl": "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/UGS-Files/clgtachina.html"
  }
];

// Exponer el catálogo para páginas auxiliares como el diagnóstico.
window.gamesList = gamesList;
