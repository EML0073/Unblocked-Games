// Add games here using the same object format. Keep each numeric id permanent; never renumber existing games. Assign new games the next unused id. Use rawUrl for HTML game files.
const gamesList = [
  {
      id: 0,
      row: "Adventure",
      title: "Minecraft 26.2",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/minecraft.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/MilkdromedaStudios/all-of-eaglercraft@main/ArchMC%20Eaglercraft%2026.2.html"
    },
  {
      id: 1,
      row: "Adventure",
      title: "Minecraft 1.8.8",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/minecraft.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clminecraft1-8-8.html"
    },
  {
      id: 2,
      row: "Arcade",
      title: "Level Devil",
      addedAt: "2026-11-23",
      image: "argazkik/leveldevil.jpeg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clleveldevil.html"
    },
  {
      id: 3,
      row: "Shooter",
      title: "1v1 LOL",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/1v1lol.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1v1lol.html"
    },
  {
      id: 4,
      row: "Arcade",
      title: "Subway Surfers",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/subwaysurfers.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsubwaysurfers.html"
    },
  {
      id: 5,
      row: "Arcade",
      title: "Tomb of the mask",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tombofthemask.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltombofthemask.html"
    },
  {
      id: 6,
      row: "Horror",
      title: "FNAF",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fnaf.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF.html"
    },
  {
      id: 7,
      row: "Horror",
      title: "FNAF 2",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fnaf2.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF2.html"
    },
  {
      id: 8,
      row: "Horror",
      title: "FNAF 3",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fnaf3.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF3.html"
    },
  {
      id: 9,
      row: "Horror",
      title: "FNAF 4",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fnaf4.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF4.html"
    },
  {
      id: 10,
      row: "Arcade",
      title: "Slope",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/slope.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslope.html"
    },
  {
      id: 11,
      row: "Arcade",
      title: "Stickman Hook",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/stickmanhook.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickmanhook.html"
    },
  {
      id: 12,
      row: "Shooter",
      title: "SUPERHOT",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/superhot.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperhot.html"
    },
  {
      id: 13,
      row: "Runner",
      title: "Temple Run 2",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/templerun2.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltemplerun2.html"
    },
  {
      id: 14,
      row: "Platformer",
      title: "Vex 6",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex6.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex6.html"
    },
  {
      id: 15,
      row: "Puzzle",
      title: "World's Hardest Game",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/worldshardestgame.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clworldshardestgame.html"
    },
  {
      id: 16,
      row: "Sports",
      title: "Basket Bros",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/basketbros.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketbros.html"
    },
  {
      id: 17,
      row: "Shooter",
      title: "Rooftop Snipers",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/rooftopsnipers.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrooftopsnipers.html"
    },
  {
      id: 18,
      row: "Adventure",
      title: "Duck Life",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/ducklife.jpg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clducklife.html"
    },
  {
      id: 19,
      row: "Arcade",
      title: "Doodle Jump",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doodlejump.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoodlejump.html"
    },
  {
      id: 20,
      row: "Multiplayer",
      title: "Among Us",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/amongus.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamongus.html"
    },
  {
      id: 21,
      row: "Puzzle",
      title: "Angry Birds",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/angrybirds.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clangrybirds.html"
    },
  {
      id: 22,
      row: "Horror",
      title: "Baldi's Basics",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/baldisbasics.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbaldisbasics.html"
    },
  {
      id: 23,
      row: "Sports",
      title: "Basketball Stars",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/basketballstars.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketballstars.html"
    },
  {
      id: 24,
      row: "Simulation",
      title: "BitLife",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bitlife.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbitlife.html"
    },
  {
      id: 25,
      row: "Idle",
      title: "Cookie Clicker",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cookieclicker.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcookieclicker.html"
    },
  {
      id: 26,
      row: "Arcade",
      title: "Crossy Road",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/crossyroad.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrossyroad.html"
    },
  {
      id: 27,
      row: "Racing",
      title: "Drive Mad",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/drivemad.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldrivemad.html"
    },
  {
      id: 28,
      row: "Puzzle",
      title: "Fireboy and Watergirl",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/fireboyandwatergirl.jpg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireboyandwatergirl.html"
    },
  {
      id: 29,
      row: "Rhythm",
      title: "Friday Night Funkin'",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fridaynightfunkin.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfridaynightfunkin.html"
    },
  {
      id: 30,
      row: "Arcade",
      title: "Geometry Dash Lite",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/geometrydashlite.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgeometrydashlite.html"
    },
  {
      id: 31,
      row: "Horror",
      title: "Granny",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/granny.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranny.html"
    },
  {
      id: 32,
      row: "Arcade",
      title: "Happy Wheels",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/happywheels.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhappywheels.html"
    },
  {
      id: 33,
      row: "Action",
      title: "Jetpack Joyride",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/jetpackjoyride.jpg",
      rawUrl: "https://cdn.jsdelivr.net/gh/EML0073/Unblocked-Games@main/juegos/jetpack-joyride.html"
    },
  {
      id: 34,
      row: "Racing",
      title: "Moto X3M",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/motox3m.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3m.html"
    },
  {
      id: 35,
      row: "Arcade",
      title: "Pac-Man",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pacman.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpacman.html"
    },
  {
      id: 36,
      row: "Arcade",
      title: "Paper.io 2",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/paperio2.jpg",
      rawUrl: "https://cdn.jsdelivr.net/gh/CoolDude2349/Offline-HTML-Games-Pack@master/offline/paper-io-2.htm"
    },
  {
      id: 37,
      row: "Strategy",
      title: "Plants vs. Zombies",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/plantsvszombies.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clplantsvszombies.html"
    },
  {
      id: 38,
      row: "Sports",
      title: "Retro Bowl",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/retrobowl.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clretrobowl.html"
    },
  {
      id: 39,
      row: "Platformer",
      title: "Run 3",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/run3.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrun3.html"
    },
  {
      id: 40,
      row: "Platformer",
      title: "OvO 2",
      addedAt: "2026-11-24",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ovo2.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clovo2.html"
    },
  {
      id: 41,
      row: "Horror",
      title: "Granny 2",
      addedAt: "2026-11-24",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/granny2.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranny2.html"
    },

  // Added 2026-11-24
  ,
  {
    id: 42,
      row: "Action",
    title: "Grand Theft Auto",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/UGS-Files/clgtaalt.html"
  },
  {
    id: 43,
      row: "Action",
    title: "Grand Theft Auto 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/UGS-Files/clgta2alt.html"
  },
  {
    id: 44,
      row: "Action",
    title: "Grand Theft Auto: Chinatown Wars",
    addedAt: "2026-11-24",
    image: "https://images.ctfassets.net/18izrhn535ym/7K2Lckd6oHN9oFXXGESPdy/509ed917c40b850004c71d0c3c18c3ea/GTA_CW_FOB.jpg?q=100&w=600",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/UGS-Files/clgtachina.html"
  },
  {
    id: 45,
      row: "Horror",
    title: "Granny 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/granny3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranny3.html"
  },
  {
    id: 46,
      row: "Arcade",
    title: "Slither.io",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/slitherio.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslitherio.html"
  },
  {
    id: 47,
      row: "Shooter",
    title: "Red vs Blue War",
    addedAt: "2026-11-24",
    image: "https://s3.growsolutions.tech/yupgames/games/images/1754451996207-RBWAR%20Online_%20Red%20vs%20Blue!.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredvsbluewar.html"
  },
  {
    id: 48,
      row: "Arcade",
    title: "Paper.io Mania",
    addedAt: "2026-11-24",
    image: "https://topgames.gg/data/image/game/paper-io.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpaperiomania.html"
  },
  {
    id: 49,
      row: "Puzzle",
    title: "Fireboy and Watergirl 2: Light Temple",
    addedAt: "2026-11-24",
    image: "https://images.gamevgames.com/games/file_6a0d8d4c32d27.webp?v=20260702101348",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireboyandwatergirl2.html"
  },
  {
    id: 50,
      row: "Puzzle",
    title: "Fireboy and Watergirl 3: Ice Temple",
    addedAt: "2026-11-24",
    image: "https://dinosaurgame-free.io/data/image/game/fireboy-and-watergirl-1-forest-temple/fireboy-and-watergirl.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireboyandwatergirl3.html"
  },
  {
    id: 51,
      row: "Platformer",
    title: "OvO Dimensions",
    addedAt: "2026-11-24",
    image: "https://bouncybasketball.com/cdn/images/banners/ovo-dimensions-game-cover.webp?fit=crop&format=auto&q=75&w=1200",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clovodimensions.html"
  },

  // Added 2026-11-24
  {
    id: 52,
      row: "Arcade",
    title: "Fruit Ninja",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fruitninja.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfruitninja.html"
  },
  {
    id: 53,
      row: "Multiplayer",
    title: "Smash Karts",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/smashkarts.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsmashkarts.html"
  },
  {
    id: 54,
      row: "Strategy",
    title: "Bloons TD 5",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/3760852-bloons-td-5-nintendo-switch-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloonsTD5.html"
  },
  {
    id: 55,
      row: "Racing",
    title: "Drift Boss",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/driftboss.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldriftboss.html"
  },
  {
    id: 56,
      row: "Puzzle",
    title: "Cut the Rope",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cuttherope.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcuttherope.html"
  },

  // Added 40 more verified UGS games on 2026-11-24
  {
    id: 57,
      row: "Arcade",
    title: "2048",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/2048.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl2048.html"
  },
  {
    id: 58,
      row: "Arcade",
    title: "Angry Birds Space",
    addedAt: "2026-11-24",
    image: "https://imagenes.hobbyconsolas.com/files/image_1920_1080/uploads/imagenes/2023/04/25/690d2b60616dc.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clangrybirdsspace.html"
  },
  {
    id: 59,
      row: "Racing",
    title: "Aquapark.io",
    addedAt: "2026-11-24",
    image: "https://wave-rider.io/data/image/Aquaparkio.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/claquaparkio.html"
  },
  {
    id: 60,
      row: "Horror",
    title: "The Backrooms",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/backrooms.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackrooms.html"
  },
  {
    id: 61,
      row: "Puzzle",
    title: "Bloxorz",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/bloxorz.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloxorz.html"
  },
  {
    id: 62,
      row: "Puzzle",
    title: "Bob the Robber",
    addedAt: "2026-11-24",
    image: "https://img.gamedistribution.com/18d28481ea514f3c838f9a5a355fb0f7-512x512.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbobtherobber.html"
  },
  {
    id: 63,
      row: "Arcade",
    title: "Bottle Flip 3D",
    addedAt: "2026-11-24",
    image: "https://doondook.studio/wp-content/uploads/2022/12/1024.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbottleflip3d.html"
  },
  {
    id: 64,
      row: "Puzzle",
    title: "Chess",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/chess.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchess.html"
  },
  {
    id: 65,
      row: "Action",
    title: "Doom",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doom.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoom.html"
  },
  {
    id: 66,
      row: "Racing",
    title: "Eggy Car",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/eggycar.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleggycar.html"
  },
  {
    id: 67,
      row: "Shooter",
    title: "Gun Mayhem",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunmayhem.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunmayhem.html"
  },
  {
    id: 68,
      row: "Arcade",
    title: "Helix Jump",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/helixjump.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhelixjump.html"
  },
  {
    id: 69,
      row: "Party",
    title: "House of Hazards",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/houseofhazards.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhouseofhazards.html"
  },
  {
    id: 70,
      row: "Arcade",
    title: "Learn to Fly",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/learntofly.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllearntofly.html"
  },
  {
    id: 71,
      row: "Racing",
    title: "Madalin Stunt Cars",
    addedAt: "2026-11-24",
    image: "https://assets.funnygames.com.tr/7/24467/78740/672x448/madalin-stunt-cars.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadalinstuntcars.html"
  },
  {
    id: 72,
      row: "Racing",
    title: "Moto X3M 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/motox3m2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3m2.html"
  },
  {
    id: 73,
      row: "Arcade",
    title: "Ms. Pac-Man",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/4100471-ms-pac-man-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmspacman.html"
  },
  {
    id: 74,
      row: "Simulation",
    title: "Papa's Cheeseria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papascheeseria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapascheeseria.html"
  },
  {
    id: 75,
      row: "Simulation",
    title: "Papa's Cupcakeria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/papascupcakeria.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapascupcakeria.html"
  },
  {
    id: 76,
      row: "Simulation",
    title: "Papa's Freezeria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papasfreezeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapasfreezeria.html"
  },
  {
    id: 77,
      row: "Racing",
    title: "Polytrack",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/polytrack.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpolytrackalt.html"
  },
  {
    id: 78,
      row: "Strategy",
    title: "Raft Wars 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/raftwars2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clraftwars2.html"
  },
  {
    id: 79,
      row: "Arcade",
    title: "Blocky Snakes",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/smdgames/mathgames66/main/mgthumbnails/Blocky-Snakes.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblockysnakes.html"
  },
  {
    id: 80,
      row: "Racing",
    title: "Snow Rider 3D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/snowrider3d.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnowrider.html"
  },
  {
    id: 81,
      row: "Arcade",
    title: "Tiny Fishing",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tinyfishing.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltinyfishing.html"
  },
  {
    id: 82,
      row: "Arcade",
    title: "Tunnel Rush",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tunnelrush.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltunnelrush.html"
  },
  {
    id: 83,
      row: "Puzzle",
    title: "Wordle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/wordle.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwordle.html"
  },
  {
    id: 84,
      row: "Puzzle",
    title: "Bad Ice-Cream",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/badicecream.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbadicecream.html"
  },
  {
    id: 85,
      row: "Sports",
    title: "Football Bros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/footballbros.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfootballbros.html"
  },
  {
    id: 86,
      row: "Sports",
    title: "Soccer Bros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/soccerbros.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsoccerbros.html"
  },

  // Added 801 additional games from the Ultimate Game Stash PDF (2026-11-24)
  {
    id: 87,
      row: "Arcade",
    title: "10 Minutes Till Dawn",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/10m.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl10minutestildawn.html"
  },
  {
    id: 88,
      row: "Arcade",
    title: "12 Mini Battles",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/295.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl12minibattles.html"
  },
  {
    id: 89,
      row: "Puzzle",
    title: "2048 Cupcakes",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/2048cupcakes.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl2048cupcakes.html"
  },
  {
    id: 90,
      row: "Shooter",
    title: "2D Shooting",
    addedAt: "2026-11-24",
    image: "https://www.sellanycode.com/system/assets/uploads/products/Masti2D.a2DShootingGameForAndroidandiOS_sellanycode_screenshot_1648393118.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl2Dshooting.html"
  },
  {
    id: 91,
      row: "Sports",
    title: "4th And Goal",
    addedAt: "2026-11-24",
    image: "https://retrobowl25.com/cache/data/image/game/4th-and-goal-2013-cover-m300x300.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl4thandgoal.html"
  },
  {
    id: 92,
      row: "Arcade",
    title: "9007199254740992",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/9007199254740992.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl9007199254740992.html"
  },
  {
    id: 93,
      row: "Arcade",
    title: "99 Balls",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/431.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl99balls.html"
  },
  {
    id: 94,
      row: "Rhythm",
    title: "A Dance of Fire and Ice",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/adofai.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clADOFAI.html"
  },
  {
    id: 95,
      row: "Arcade",
    title: "A Dark Room",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/adarkroom.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clADarkRoom.html"
  },
  {
    id: 96,
      row: "Arcade",
    title: "A Day In The Office",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@027a7fc4b20820dc401547a74cf4f2ee875cd3e2/a%20day%20in%20the%20office/favicon.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cladayintheoffice.html"
  },
  {
    id: 97,
      row: "Arcade",
    title: "Ahoy Survival",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/bac81084-1097-4fbb-8c91-259592b70218/1892788498/lost-island-raft-survival-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clahoysurvival.html"
  },
  {
    id: 98,
      row: "Multiplayer",
    title: "Agar.io Lite",
    addedAt: "2026-11-24",
    image: "https://www.mobygames.com/images/covers/l/307841-agar-io-ipad-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clagariolite.html"
  },
  {
    id: 99,
      row: "Arcade",
    title: "Ages of Conflict",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/ages-of-conflict.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clagesofconflict.html"
  },
  {
    id: 100,
      row: "Arcade",
    title: "Alien Sky Invasion",
    addedAt: "2026-11-24",
    image: "https://cdn.pomu.com/files/game/img_mobile/14197/Alien-Sky-Invasion.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clalienskyinvasion.html"
  },
  {
    id: 101,
      row: "Arcade",
    title: "Allocation",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/allocation.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clallocation.html"
  },
  {
    id: 102,
      row: "Arcade",
    title: "Amazing Strange Rope Police",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/games/amazingropepolice/amazing-strange-rope-police-vice-spider-vegas.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstreangeropepolice.html"
  },
  {
    id: 103,
      row: "Arcade",
    title: "Amidst The Sky",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/amidstthesky.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamidstthesky.html"
  },
  {
    id: 104,
      row: "Arcade",
    title: "Ascent",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/screenshots/16732658-the-ascent-xbox-series-lifts-take-you-to-other-arcology-levels.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clascent.html"
  },
  {
    id: 105,
      row: "Arcade",
    title: "Asteroids",
    addedAt: "2026-11-24",
    image: "https://now.estarland.com/images/products/5/14705/AT2600-Asteriod-large-image.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clasteroids.html"
  },
  {
    id: 106,
      row: "Arcade",
    title: "A Small World Cup",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/asmallworldcup.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clasmallworldcup.html"
  },
  {
    id: 107,
      row: "Arcade",
    title: "B Babel Tower",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/babel-tower/cover/babel-tower.png?ar=16%3A10&w=1200",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbabeltower.html"
  },
  {
    id: 108,
      row: "Adventure",
    title: "Baby Chicco Adventure",
    addedAt: "2026-11-24",
    image: "https://simple.game/assets/thumbs/23b4w2x2/baby-chicco-adventures.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbabychiccoadventure.html"
  },
  {
    id: 109,
      row: "Horror",
    title: "Backrooms 2D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/backrooms2d.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackrooms2D.html"
  },
  {
    id: 110,
      row: "Arcade",
    title: "Bacon May Die",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/baconmaydie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbaconmaydie.html"
  },
  {
    id: 111,
      row: "Arcade",
    title: "Bad Parenting",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/badparenting.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbadparenting.html"
  },
  {
    id: 112,
      row: "Simulation",
    title: "Bad Time Simulator",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/badtimesimulator.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbadtimesimulator.html"
  },
  {
    id: 113,
      row: "Arcade",
    title: "Baldi’s Fun New School Ultimate",
    addedAt: "2026-11-24",
    image: "https://media.plix.gg/flash/game-thumbs/baldi-fun/960.webp?v=1784414636307",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbaldisfunnewschoolultimate.html"
  },
  {
    id: 114,
      row: "Arcade",
    title: "Balls And Bricks",
    addedAt: "2026-11-24",
    image: "https://cdn.content.juegos123.net/game-images/balls-and-bricks_xl.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clballsandbricks.html"
  },
  {
    id: 115,
      row: "Simulation",
    title: "Banana Simulator",
    addedAt: "2026-11-24",
    image: "https://cdn.dekudeals.com/images/81d4b6459cfd755db3ea2602d6bb4200da1a235f/w500.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbananasimulator.html"
  },
  {
    id: 116,
      row: "Arcade",
    title: "Bank Robbery 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/439.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbankrobbery2.html"
  },
  {
    id: 117,
      row: "Arcade",
    title: "Barry Has a Secret",
    addedAt: "2026-11-24",
    image: "https://www.ubg4all.com/thumbs/barry-has-a-secret-512x512bb.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbarryhasasecret.html"
  },
  {
    id: 118,
      row: "Arcade",
    title: "BAS",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/BAS.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbas.html"
  },
  {
    id: 119,
      row: "Sports",
    title: "Baseball Bros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/baseballbros.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbaseballbros.html"
  },
  {
    id: 120,
      row: "Sports",
    title: "Basket Battle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/basketbattle.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketbattle.html"
  },
  {
    id: 121,
      row: "Sports",
    title: "Basket Random",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/basketrandom.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketrandom.html"
  },
  {
    id: 122,
      row: "Sports",
    title: "Basket Slam Dunk 2",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/yrgen73/BSD2@174be0db9145f7375365bda889a200e5cd31bbe0/icons/icon-512.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketslamdunk2.html"
  },
  {
    id: 123,
      row: "Sports",
    title: "Basketball FRVR",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/28.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketballfrvr.html"
  },
  {
    id: 124,
      row: "Arcade",
    title: "Battles",
    addedAt: "2026-11-24",
    image: "https://imgs.crazygames.com/games/janissary-battles/cover_16x9-1707829368896.png?height=2885&metadata=none&quality=60",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbattles.html"
  },
  {
    id: 125,
      row: "Strategy",
    title: "Battle Simulator",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/battle-simulator-sandbox/cover/battle-simulator-sandbox.png?w=1200&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbattlesim.html"
  },
  {
    id: 126,
      row: "Arcade",
    title: "Big Ice Tower Tiny Square",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/69.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbigicetowertinysquare.html"
  },
  {
    id: 127,
      row: "Arcade",
    title: "Big Neon Tower Tiny Square",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/68.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbigneontowertinysquare.html"
  },
  {
    id: 128,
      row: "Arcade",
    title: "Big Tower Tiny Square",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/btts.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbigtowertinysquare.html"
  },
  {
    id: 129,
      row: "Arcade",
    title: "Big Tower Tiny Square 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/170.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbigtowertinysquare2.html"
  },
  {
    id: 130,
      row: "Arcade",
    title: "Bit Planes",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bitplanes.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbitplanes.html"
  },
  {
    id: 131,
      row: "Arcade",
    title: "Blackjack",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/312.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblackjack.html"
  },
  {
    id: 132,
      row: "Arcade",
    title: "Blightborne",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@main/Blightborne/Template/Blight-Borne.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblightborne.html"
  },
  {
    id: 133,
      row: "Arcade",
    title: "Block Blast",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/blockblast.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblockblast.html"
  },
  {
    id: 134,
      row: "Arcade",
    title: "Block the Pig",
    addedAt: "2026-11-24",
    image: "https://www.speedrun.com/static/game/369w8r2d/cover.jpg?v=33ea3b1",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblockthepig.html"
  },
  {
    id: 135,
      row: "Horror",
    title: "Blood Tournament",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bloodtournament.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloodtournament.html"
  },
  {
    id: 136,
      row: "Arcade",
    title: "Bob the Robber 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/bobtherobber5.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbobtherobber5.html"
  },
  {
    id: 137,
      row: "Arcade",
    title: "Bounce Back",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/bounce%20back/tiles.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbounceback.html"
  },
  {
    id: 138,
      row: "Racing",
    title: "Bouncy Motors",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/bouncy%20motors/icon.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbouncymotors.html"
  },
  {
    id: 139,
      row: "Arcade",
    title: "Bounty of One",
    addedAt: "2026-11-24",
    image: "https://img.opencritic.com/game/15663/o/1hbVnb7x.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clBountyOfOne.html"
  },
  {
    id: 140,
      row: "Arcade",
    title: "Bowmasters",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/0.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbowmasters.html"
  },
  {
    id: 141,
      row: "Sports",
    title: "Boxing Random",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/boxingrandom.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clboxingrandom.html"
  },
  {
    id: 142,
      row: "Racing",
    title: "Bridge Race",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/14.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbridgerace.html"
  },
  {
    id: 143,
      row: "Arcade",
    title: "Bunnyland",
    addedAt: "2026-11-24",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/722a9a145736877.62a3a04577e17.gif",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbunnyland.html"
  },
  {
    id: 144,
      row: "Arcade",
    title: "Burger and Frights",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/burgerandfrights.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clburgerandfrights.html"
  },
  {
    id: 145,
      row: "Arcade",
    title: "Burrito Bison Launcha Libre",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/78.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clburritobisonlaunchalibre.html"
  },
  {
    id: 146,
      row: "Idle",
    title: "Capybara Clicker",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/capybara%20clicker/logo-capybara-licker.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcapybaraclicker.html"
  },
  {
    id: 147,
      row: "Racing",
    title: "Car Crash 3",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/647b69cf-b2db-46d8-80f7-55998774c269/2026085460/police-car-game-car-crash-3d-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcarcrash3.html"
  },
  {
    id: 148,
      row: "Racing",
    title: "Survival Race",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/survivalrace.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcarkingarena.html"
  },
  {
    id: 149,
      row: "Arcade",
    title: "Castle Wars Modern",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/0355a5c7-01ab-49e2-83b7-14b3d5585c8f/4141744713/castle-wars-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlewarsmodern.html"
  },
  {
    id: 150,
      row: "Platformer",
    title: "Cat Mario",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/smdgames/mathgames66/main/mgthumbnails/Cat_Mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcatmario.html"
  },
  {
    id: 151,
      row: "Platformer",
    title: "Celeste Pico",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/celeste.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clceleste.html"
  },
  {
    id: 152,
      row: "Platformer",
    title: "Celeste 2",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/9719950-celeste-2-lanis-trek-linux-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clceleste2.html"
  },
  {
    id: 153,
      row: "Arcade",
    title: "Cheese Chompers 3D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cheesechompers3d.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcheesechompers3d.html"
  },
  {
    id: 154,
      row: "Arcade",
    title: "Cheshire In a Chatroom",
    addedAt: "2026-11-24",
    image: "https://archive.org/download/Cheshire_Cats_1983_Pan_Books/screenshot_00.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcheshireinachatroom.html"
  },
  {
    id: 155,
      row: "Shooter",
    title: "Chickenwar",
    addedAt: "2026-11-24",
    image: "https://plays.org/screenshots/chicken-merge-and-war.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchickenwar.html"
  },
  {
    id: 156,
      row: "Platformer",
    title: "Choppy Orc",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/464.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchoppyorc.html"
  },
  {
    id: 157,
      row: "Puzzle",
    title: "Civiballs",
    addedAt: "2026-11-24",
    image: "https://www.friv.com/z/games/civiballs2/rectangle-gamethumb-1-civiballs2.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clciviballs.html"
  },
  {
    id: 158,
      row: "Puzzle",
    title: "Civiballs 2",
    addedAt: "2026-11-24",
    image: "https://www.friv.com/z/games/civiballs2/rectangle-gamethumb-1-civiballs2.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clciviballs2.html"
  },
  {
    id: 159,
      row: "Multiplayer",
    title: "Cleanup.io",
    addedAt: "2026-11-24",
    image: "https://images.crazygames.com/games/cleanup-io/thumb-1563475376194.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=92",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcleanupio.html"
  },
  {
    id: 160,
      row: "Arcade",
    title: "Cluster Rush",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/clusterrush.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclusterrush.html"
  },
  {
    id: 161,
      row: "Arcade",
    title: "Coffee Maker",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/7416ea37-39e0-40a3-9091-7237a51c2483/1581604258/my-cafe-coffee-maker-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcoffeemaker.html"
  },
  {
    id: 162,
      row: "Sports",
    title: "Combo Pool",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/836fd9b5-e5c0-47bb-85d8-4bc7dec7974a/3380023688/pool-stars-live-cash-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcombopool.html"
  },
  {
    id: 163,
      row: "Arcade",
    title: "Core Ball",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/coreball.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcoreball.html"
  },
  {
    id: 164,
      row: "Arcade",
    title: "Crazy Cattle 3D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/crazycattle3d.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrazycattle3d.html"
  },
  {
    id: 165,
      row: "Arcade",
    title: "Crazy Chicken 3D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/crazychicken3d.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrazychicken3D.html"
  },
  {
    id: 166,
      row: "Idle",
    title: "Csgo Clicker",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/csgoclicker.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcsgoclicker.html"
  },
  {
    id: 167,
      row: "Arcade",
    title: "Curse of the Lich King",
    addedAt: "2026-11-24",
    image: "https://rare-gallery.com/uploads/posts/1117342-video-games-World-of-Warcraft-ice-mythology-World-of-Warcraft-Wrath-of-the-Lich-King-ghost-ship-screenshot-computer-wallpaper-glacial-landform-ice-cave.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcotlk.html"
  },
  {
    id: 168,
      row: "Racing",
    title: "Cyberbung Racing",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ac2952fa-aa5a-4a0b-983a-29e7328a335b/4095744893/car-racing-game-car-games-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcyberbungracing.html"
  },
  {
    id: 169,
      row: "Arcade",
    title: "Dank Tomb",
    addedAt: "2026-11-24",
    image: "https://files.gamezhero.com/game/0f4/3fe/0f43fe817221587b/images/240/danktomb.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldanktomb.html"
  },
  {
    id: 170,
      row: "Arcade",
    title: "Deepest Sword",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/deepestsword.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeepestsword.html"
  },
  {
    id: 171,
      row: "Arcade",
    title: "Die in the Dungeon",
    addedAt: "2026-11-24",
    image: "https://gaming-cdn.com/images/products/18772/orig/die-in-the-dungeon-pc-mac-game-steam-cover.jpg?v=1741866154",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldieinthedungeon.html"
  },
  {
    id: 172,
      row: "Arcade",
    title: "Doge Miner",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/dogeminer.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldogeminer.html"
  },
  {
    id: 173,
      row: "Arcade",
    title: "Doge Miner 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/dogeminer2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldogeminer2.html"
  },
  {
    id: 174,
      row: "Arcade",
    title: "Doki Doki Literature Club",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/dokidokiliteratureclub.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldokidokiliteratureclub.html"
  },
  {
    id: 175,
      row: "Shooter",
    title: "Doomz.io",
    addedAt: "2026-11-24",
    image: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/0fb276e6a928dd3053312cc6510d46c4/doomr-io.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoomzio.html"
  },
  {
    id: 176,
      row: "Arcade",
    title: "Draw Climber",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/drawclimber.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldrawclimber.html"
  },
  {
    id: 177,
      row: "Horror",
    title: "Dreader",
    addedAt: "2026-11-24",
    image: "https://files.gamezhero.com/game/142/5bf/1425bfc332f71362/images/240/dreader.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldreader.html"
  },
  {
    id: 178,
      row: "Arcade",
    title: "Driven Wild",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/43.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldrivenwild.html"
  },
  {
    id: 179,
      row: "Arcade",
    title: "Dunk Shot",
    addedAt: "2026-11-24",
    image: "https://plays.org/screenshots/dunk-shot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldunkshot.html"
  },
  {
    id: 180,
      row: "Arcade",
    title: "Dusk Child",
    addedAt: "2026-11-24",
    image: "https://sophiehoulden.com/games/duskchild/screenshot4.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clduskchild.html"
  },
  {
    id: 181,
      row: "Arcade",
    title: "Dying Dreams",
    addedAt: "2026-11-24",
    image: "https://e.snmc.io/i/600/s/36300927bbcf318c2c8ae7bb3adc9e81/13028288/dying-dreams-demo-2003-cover-art.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldyingdreams.html"
  },
  {
    id: 182,
      row: "Arcade",
    title: "E Eagle Ride",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/eagle%20ride/screenshots/1-small.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleagleride.html"
  },
  {
    id: 183,
      row: "Racing",
    title: "Edy’s Car Simulator",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/5c72a318-06fb-48a4-9438-9f9770cd1f27/3699484475/car-simulator-car-driving-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cledyscarsimulator.html"
  },
  {
    id: 184,
      row: "Arcade",
    title: "Effing Hail",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/effing-hail.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleffinghail.html"
  },
  {
    id: 185,
      row: "Arcade",
    title: "Elastic Face",
    addedAt: "2026-11-24",
    image: "https://a.silvergames.com/screenshots/elastic-man/funny-faces.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clelasticface.html"
  },
  {
    id: 186,
      row: "Racing",
    title: "Escape Road",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/escaperoad.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clescaperoad.html"
  },
  {
    id: 187,
      row: "Arcade",
    title: "Final Earth 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/512.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalearth2.html"
  },
  {
    id: 188,
      row: "Arcade",
    title: "Fireblob",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/fireblob/cover/fireblob.png?w=1200&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireblob.html"
  },
  {
    id: 189,
      row: "Arcade",
    title: "Fisquarium",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/00ce5522-ee9d-4eb4-848c-9d647f5c8bf0/2936277978/fish-aquarium-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfisquarium.html"
  },
  {
    id: 190,
      row: "Arcade",
    title: "Five Nights at Baldis Redone",
    addedAt: "2026-11-24",
    image: "https://fnafgames.net/storage/images/games/five-nights-at-baldis-redone/baldifnaf300jpg.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfivenightsatbaldisredone.html"
  },
  {
    id: 191,
      row: "Arcade",
    title: "Five Nights At Shrek’s Hotel",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/764.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfivenightsatshrekshotel.html"
  },
  {
    id: 192,
      row: "Arcade",
    title: "Fluidism",
    addedAt: "2026-11-24",
    image: "https://image.winudf.com/v2/image1/MjA1OTExNTVfMTY4MTg5ODI0N18wOTk/screen-0.png?fakeurl=1&type=png&w=144",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfluidism.html"
  },
  {
    id: 193,
      row: "Sports",
    title: "Football Legends",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/c433a745-8f9a-4c9b-a980-6ab994417439/76674142/football-legends-soccer-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfootballlegends.html"
  },
  {
    id: 194,
      row: "Arcade",
    title: "Fortzone Battle Royale",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fortzonebattleroyale.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfortzone.html"
  },
  {
    id: 195,
      row: "Shooter",
    title: "Funny Shooter 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/funnyshooter2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfunnyshooter2.html"
  },
  {
    id: 196,
      row: "Arcade",
    title: "Getaway Shootout",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/getawayshootout.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgetawayshootout.html"
  },
  {
    id: 197,
      row: "Arcade",
    title: "Get On Top",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/get-on-top/cover/get-on-top.png?width=600&height=340&fit=cover&quality=90",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgetontop.html"
  },
  {
    id: 198,
      row: "Arcade",
    title: "Gladihoppers",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gladihoppers.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgladdihoppers.html"
  },
  {
    id: 199,
      row: "Arcade",
    title: "Gobble",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/37.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgobble.html"
  },
  {
    id: 200,
      row: "Arcade",
    title: "Going Balls",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/662.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoingballs.html"
  },
  {
    id: 201,
      row: "Arcade",
    title: "Gold Digger FRVR",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/golddiggerfrvr.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgolddiggerfrvr.html"
  },
  {
    id: 202,
      row: "Sports",
    title: "Golf Sunday",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/screenshots/8168805-sunday-golf-atari-8-bit-swing-directions.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgolfsunday.html"
  },
  {
    id: 203,
      row: "Sports",
    title: "Google Baseball",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/googlebaseball.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgooglebaseball.html"
  },
  {
    id: 204,
      row: "Arcade",
    title: "Google Dino",
    addedAt: "2026-11-24",
    image: "https://www.onworks.net/imagescropped/googledinogamescreenshot1.png_3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoogledino.html"
  },
  {
    id: 205,
      row: "Arcade",
    title: "Gorescript Classic",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/gorescript-classic.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgorescriptclassic.html"
  },
  {
    id: 206,
      row: "Arcade",
    title: "Gravity Mod",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-file-encryption@287710a4fac80d3ea9187e9d27c8358034b2639b/pdctrsh91fc91.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgravitymod.html"
  },
  {
    id: 207,
      row: "Arcade",
    title: "Grey Box Testing",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@main/grey%20box%20testing/Template/Blight-Borne.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgrey-box-testing.html"
  },
  {
    id: 208,
      row: "Arcade",
    title: "Grindcraft",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grindcraft.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgrindcraft.html"
  },
  {
    id: 209,
      row: "Arcade",
    title: "GRN",
    addedAt: "2026-11-24",
    image: "https://gamemedia.armorgames.com/19479/icn_heroimage.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgrn.html"
  },
  {
    id: 210,
      row: "Shooter",
    title: "Gun Knight",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunknight.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunknight.html"
  },
  {
    id: 211,
      row: "Shooter",
    title: "Gun Night",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/gun-night-io/cover/gun-night-io.png?w=1200&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunnight.html"
  },
  {
    id: 212,
      row: "Arcade",
    title: "Gym Stack",
    addedAt: "2026-11-24",
    image: "https://freegame.gg/thumbs/gym-stack/big-banner.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgymstack.html"
  },
  {
    id: 213,
      row: "Simulation",
    title: "H Half Life",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/halflife.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhalflife.html"
  },
  {
    id: 214,
      row: "Arcade",
    title: "Handulam+",
    addedAt: "2026-11-24",
    image: "https://www.coolmathgames.com/sites/cmatgame/files/styles/thumbnail_small/public/game_thumbnail/handulum-logo.png?0=itok%3Dy56_8DZ6",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhandulum.html"
  },
  {
    id: 215,
      row: "Arcade",
    title: "Happy Room",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/happy-room/cover/happy-room.png?w=400",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhappyroom.html"
  },
  {
    id: 216,
      row: "Arcade",
    title: "Harold's Bad Day",
    addedAt: "2026-11-24",
    image: "https://www.lexaloffle.com/media/57812/Harolds Bad Day 4 - Home Sweet Home.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clHaroldsbadday.html"
  },
  {
    id: 217,
      row: "Arcade",
    title: "Hextris",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hextris.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhextris.html"
  },
  {
    id: 218,
      row: "Arcade",
    title: "High Stakes",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/5573037-need-for-speed-high-stakes-playstation-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhighstakes.html"
  },
  {
    id: 219,
      row: "Arcade",
    title: "Highway Racer",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/567.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhighwayracer2.html"
  },
  {
    id: 220,
      row: "Multiplayer",
    title: "Hole.io",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/holeio.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clholeio.html"
  },
  {
    id: 221,
      row: "Arcade",
    title: "Hover Racer Drive",
    addedAt: "2026-11-24",
    image: "https://freezoneplay.com/wp-content/uploads/thumbs/custom/H/Hover-Racer-Drive.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhoverracerdrive.html"
  },
  {
    id: 222,
      row: "Arcade",
    title: "Hungry Knight",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hungryknight.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhungryknight.html"
  },
  {
    id: 223,
      row: "Arcade",
    title: "Hungry Lamu",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hungrylamu.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhungrylamu.html"
  },
  {
    id: 224,
      row: "Arcade",
    title: "I Ice Dodo",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/genizy/ice-dodo/assets/skins/beginner_cup.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clicedodo.html"
  },
  {
    id: 225,
      row: "Arcade",
    title: "Icy Purple Head",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/icy%20purple%20head/icon-256.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clicypurplehead.html"
  },
  {
    id: 226,
      row: "Idle",
    title: "Idle Breakout",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/idlebreakout.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clidlebreakout.html"
  },
  {
    id: 227,
      row: "Idle",
    title: "Idle Dice",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/idledice.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clidledice.html"
  },
  {
    id: 228,
      row: "Idle",
    title: "Idle Idle Game Dev",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/idle%20idle%20game%20dev/assets/img/icon/icon256.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clidleidlegamedev.html"
  },
  {
    id: 229,
      row: "Idle",
    title: "Idle Miner Tycoon",
    addedAt: "2026-11-24",
    image: "https://admin.idleminertycoon.com/wp-content/uploads/2020/01/phone-screenshot-playable-flare-768x824.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clidleminertycoon.html"
  },
  {
    id: 230,
      row: "Racing",
    title: "Indian Truck Simulator",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/indian-truck-simulator-3d-gh-pages/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrucksim.html"
  },
  {
    id: 231,
      row: "Arcade",
    title: "Into Ruins",
    addedAt: "2026-11-24",
    image: "https://images.pushsquare.com/fbb8b36e30557/into-the-restless-ruins-cover.cover_large.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clintoruins.html"
  },
  {
    id: 232,
      row: "Arcade",
    title: "Iron Snout",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/263c7933-e1e3-4335-81ce-be3fc63baab0/754723835/iron-snout-2-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clironsnout.html"
  },
  {
    id: 233,
      row: "Racing",
    title: "Jelly Truck",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/smdgames/mathgames66/main/mgthumbnails/jelly-truck.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljellytruck.html"
  },
  {
    id: 234,
      row: "Arcade",
    title: "Jet Rush",
    addedAt: "2026-11-24",
    image: "https://funzilo.com/wp-content/uploads/thumbs/custom/J/jet-rush-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljetrush.html"
  },
  {
    id: 235,
      row: "Arcade",
    title: "Johnny Trigger",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/93.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljohnnytrigger.html"
  },
  {
    id: 236,
      row: "Arcade",
    title: "Johnny Upgrade",
    addedAt: "2026-11-24",
    image: "https://gogamego.io/wp-content/uploads/thumbs/custom/J/Johnny-Upgrade.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljohnnyupgrade.html"
  },
  {
    id: 237,
      row: "Arcade",
    title: "Journey Downhill",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/94.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljourneydownhill.html"
  },
  {
    id: 238,
      row: "Platformer",
    title: "Jumping Shell",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/6da09cf7-9c4a-4fd0-ab6b-0c8082632de5/4177717682/jumping-shell-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljumpingshell.html"
  },
  {
    id: 239,
      row: "Arcade",
    title: "Justfall.lol",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/justfalllol.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljustfalllol.html"
  },
  {
    id: 240,
      row: "Arcade",
    title: "Just One Boss",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/just-one-boss.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljustoneboss.html"
  },
  {
    id: 241,
      row: "Arcade",
    title: "K Kalikan",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/kalikan.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkalikan.html"
  },
  {
    id: 242,
      row: "Arcade",
    title: "Last Horizon",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/lasthorizon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllasthorizon.html"
  },
  {
    id: 243,
      row: "Shooter",
    title: "Leader Strike",
    addedAt: "2026-11-24",
    image: "http://www.freeworldgroup.com/g/leaderstrike/screen.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clleaderstrike.html"
  },
  {
    id: 244,
      row: "Arcade",
    title: "Lock the Door",
    addedAt: "2026-11-24",
    image: "https://media.imgcdn.org/repo/2025/12/lockyourdoor/6942898a7e575-lockyourdoor-screenshot6.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllockthedoor.html"
  },
  {
    id: 245,
      row: "Arcade",
    title: "Low Knight",
    addedAt: "2026-11-24",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4c1bfd6-740f-4577-a3d0-0cb5b71fb2df/dfmmj5j-f2fb65aa-aa32-4fc7-b8eb-c4798cf81be1.png/v1/fill/w_512,h_512,strp/hollow_knight_by_da_gamecovers_dfmmj5j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvYzRjMWJmZDYtNzQwZi00NTc3LWEzZDAtMGNiNWI3MWZiMmRmXC9kZm1tajVqLWYyZmI2NWFhLWFhMzItNGZjNy1iOGViLWM0Nzk4Y2Y4MWJlMS5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mvGvyYmQtv5mdN_p2qy5sLaYQ6XircDevGGw7eWB3Pg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllowknight.html"
  },
  {
    id: 246,
      row: "Racing",
    title: "Madalin Stunt Cars Multiplayer",
    addedAt: "2026-11-24",
    image: "https://images.crazygames.com/games/madalin-cars-multiplayer/cover-1655194419773.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadalinstuntcarsmultiplayerfixed.html"
  },
  {
    id: 247,
      row: "Racing",
    title: "Mad Skills Motocross 2",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@669e737b43782d68d3096554921900ab151355ff/motocross%20mad%20skills/body.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadskillsmotocross2.html"
  },
  {
    id: 248,
      row: "Arcade",
    title: "Mana God",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/19648295-legend-of-mana-windows-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmanagod.html"
  },
  {
    id: 249,
      row: "Arcade",
    title: "Masked Forces Unlimited",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/masked-forces-unlimited/cover/masked-forces-unlimited.png?w=320&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaskedforcesunlimited.html"
  },
  {
    id: 250,
      row: "Arcade",
    title: "Melon Playground",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/172.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmelonplayground.html"
  },
  {
    id: 251,
      row: "Arcade",
    title: "Merge Round Racers",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/merge-round-racers",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmergeroundracers.html"
  },
  {
    id: 252,
      row: "Arcade",
    title: "Mimic",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/98e6d0bc-56eb-49af-950c-caccbd53cf4d/560449248/the-mimic-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmimic.html"
  },
  {
    id: 253,
      row: "Runner",
    title: "Minecraft Parkour",
    addedAt: "2026-11-24",
    image: "https://static.planetminecraft.com/files/resource_media/screenshot/1232/minecraft-parkour_3203406.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblockcraftparkour.html"
  },
  {
    id: 254,
      row: "Arcade",
    title: "Mini Crossword",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/genizy/braybray/crossword/media/graphics/orientate/landscape.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clminicrossword.html"
  },
  {
    id: 255,
      row: "Arcade",
    title: "Mini Tooth",
    addedAt: "2026-11-24",
    image: "https://files.gamezhero.com/game/2c5/b3b/2c5b3ba45d802e18/images/240/minitooth.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clminitooth.html"
  },
  {
    id: 256,
      row: "Arcade",
    title: "Monster Tracks",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/monstertracks.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmonstertracks.html"
  },
  {
    id: 257,
      row: "Racing",
    title: "Monster Truck Port Stunt",
    addedAt: "2026-11-24",
    image: "https://games18plus.com/wp-content/uploads/thumbs/custom/M/Monster-Truck-Port-Stunt.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmonstertruckportstunt.html"
  },
  {
    id: 258,
      row: "Arcade",
    title: "Monkey Mart",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/monkeymart.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmonkeymart.html"
  },


  {
    id: 259,
      row: "Racing",
    title: "Moto X3M 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/98.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3m3.html"
  },
  {
    id: 260,
      row: "Sports",
    title: "Moto X3M: Pool Party",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/motox3m-pool.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3mpoolparty.html"
  },
  {
    id: 261,
      row: "Racing",
    title: "Moto X3M: Spooky Land",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/moto-spook.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3mspookyland.html"
  },
  {
    id: 262,
      row: "Racing",
    title: "Moto X3M: Winter",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/motox3m-winter.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3mwinter.html"
  },
  {
    id: 263,
      row: "Racing",
    title: "Mountain Bike Racer",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/774.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmountainbikeracer.html"
  },
  {
    id: 264,
      row: "Arcade",
    title: "Neon Blaster",
    addedAt: "2026-11-24",
    image: "https://s.cafebazaar.ir/images/upload/screenshot/com.neonblaster-dfcb69b4-b074-4d23-8451-985b77827093.png?x-img=v1/resize,h_600,lossless_false/optimize",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clneonblaster.html"
  },
  {
    id: 265,
      row: "Arcade",
    title: "N-gon",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/ngon.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clngon.html"
  },
  {
    id: 266,
      row: "Arcade",
    title: "Noob Miner",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/noob-miner-2-escape-from-prison/cover/noob-miner-2-escape-from-prison.png?width=600&height=340&fit=cover&quality=90",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnoobminer.html"
  },
  {
    id: 267,
      row: "Arcade",
    title: "Not Your Pawn",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/4003443-the-pawn-atari-st-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnotyourpawn.html"
  },
  {
    id: 268,
      row: "Puzzle",
    title: "Nuts and Bolts Screwing Puzzle",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/8a1897ab-ca54-4027-88f5-474f8635b557/2585883923/screw-puzzle-nuts-bolts-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clNutsandBoltsScrewingPuzzle.html"
  },
  {
    id: 269,
      row: "Arcade",
    title: "Obby 99% Will Lose",
    addedAt: "2026-11-24",
    image: "https://images.airdroid.com/2024/09/game-booster-screenshot-shortcut.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clobby-99-will-lose.html"
  },
  {
    id: 270,
      row: "Arcade",
    title: "Obby Robby - Only Up",
    addedAt: "2026-11-24",
    image: "https://www.y9freegames.com/wp-content/uploads/thumbs/custom/O/Obby-Robby-Only-up.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clobbyonlyup.html"
  },
  {
    id: 271,
      row: "Arcade",
    title: "Offline Paradise",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/offlineparadise.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clofflineparadise.html"
  },
  {
    id: 272,
      row: "Idle",
    title: "Omega Nugget Clicker",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e6e19515-72da-4922-91a8-28637e52cd21/1974878838/omega-nugget-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clomeganuggetclicker.html"
  },
  {
    id: 273,
      row: "Adventure",
    title: "Onebit Adventure",
    addedAt: "2026-11-24",
    image: "https://cdn.technobezz.com/games/games/cover/onebit-adventure/onebit-adventure-cover-gamebezz-com.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clonebitadventure.html"
  },
  {
    id: 274,
      row: "Arcade",
    title: "Only Up",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/onlyup.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clonlyup.html"
  },
  {
    id: 275,
      row: "Arcade",
    title: "Operius",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/screenshots/25175126-operius-windows-sector-2.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cloperius.html"
  },
  {
    id: 276,
      row: "Arcade",
    title: "Opposite Day",
    addedAt: "2026-11-24",
    image: "https://www.coolmathgames.com/sites/default/files/styles/blog_node_image/public/2024-04/How Not to Play Opposite Day Game Thumbnail.png.webp?itok=JY4SforR",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cloppositeday.html"
  },
  {
    id: 277,
      row: "Arcade",
    title: "Orb of Creation",
    addedAt: "2026-11-24",
    image: "https://www.allkeyshop.com/blog/wp-content/uploads/buy-orb-of-creation-cd-key-compare-prices.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clorbofcreation.html"
  },
  {
    id: 278,
      row: "Rhythm",
    title: "osu!",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/osu.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/closu.html"
  },
  {
    id: 279,
      row: "Arcade",
    title: "OVO",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/ovo.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clovo.html"
  },

  {
    id: 280,
      row: "Multiplayer",
    title: "P Paper.io",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/paperio.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpaperio.html"
  },
  {
    id: 281,
      row: "Multiplayer",
    title: "Paper.io 3D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/paperio3d.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpaperio3d.html"
  },
  {
    id: 282,
      row: "Arcade",
    title: "Penguin Diner",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@983ac580e56eef2c58c19568d68445148f5defe3/penguin%20diner/assets/cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpenguindiner.html"
  },
  {
    id: 283,
      row: "Arcade",
    title: "Perfect Hotel",
    addedAt: "2026-11-24",
    image: "https://brainide.com/wp-content/uploads/2026/01/my-perfect-hotel-cover-1024x535.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clperfecthotel.html"
  },
  {
    id: 284,
      row: "Arcade",
    title: "Phasma",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/phasma.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clphasma.html"
  },
  {
    id: 285,
      row: "Arcade",
    title: "Pico Driller",
    addedAt: "2026-11-24",
    image: "https://www.lexaloffle.com/bbs/thumbs/pico8_picodriller-0.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpicodriller.html"
  },
  {
    id: 286,
      row: "Arcade",
    title: "Pico Night Punkin",
    addedAt: "2026-11-24",
    image: "https://carsonk.net/content/works/games/pico-night-punkin/Screenshot2.gif",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpiconightpunkin.html"
  },
  {
    id: 287,
      row: "Arcade",
    title: "Pieces of Cake",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/pieces-of-cake.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpiecesofcake.html"
  },
  {
    id: 288,
      row: "Arcade",
    title: "Ping Pong Chaos",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/63c51378-4d45-4ff4-86c2-62fb11be624f/1807288830/ping-pong-chaos-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpingpongchaos.html"
  },
  {
    id: 289,
      row: "Multiplayer",
    title: "Pixel Battlegrounds.io",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/pixel-battlegrounds-io/cover/pixel-battlegrounds-io.png?width=600&height=340&fit=cover&quality=90",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpixelbattlegroundsio.html"
  },
  {
    id: 290,
      row: "Shooter",
    title: "Pixel Combat 2",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/pixel-combat-2",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpixelcombat2.html"
  },
  {
    id: 291,
      row: "Shooter",
    title: "Pixel Shooter",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/4d06b95a-565b-493c-9cce-e7f4e4b27265/875180732/firefighter-pixel-shooter-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpixelshooter.html"
  },
  {
    id: 292,
      row: "Arcade",
    title: "Pizza Tower",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/pizzatower.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpizzatower.html"
  },
  {
    id: 293,
      row: "Arcade",
    title: "Pou",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pou.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clPou.html"
  },
  {
    id: 294,
      row: "Arcade",
    title: "Porklike",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/porklike-wurst-comes-to-worst.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clporklike.html"
  },
  {
    id: 295,
      row: "Arcade",
    title: "Porter",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/screenshots/16695646-valerie-porter-and-the-scarlet-scandal-windows-titlemenu-screen.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clporter.html"
  },
  {
    id: 296,
      row: "Action",
    title: "Praxis Fighter X",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/praxis-fighter-x.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpraxisfighterx.html"
  },
  {
    id: 297,
      row: "Arcade",
    title: "Pullfrog",
    addedAt: "2026-11-24",
    image: "http://www.coolmathgames.com/sites/default/files/pullfrog-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpullfrog.html"
  },
  {
    id: 298,
      row: "Sports",
    title: "Puppet Hockey",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/puppet%20hockey/icon-256.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpuppethockey.html"
  },
  {
    id: 299,
      row: "Arcade",
    title: "Push Your Luck",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/push-your-luck",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpushyourluck.html"
  },
  {
    id: 300,
      row: "Arcade",
    title: "Ragdoll Archers",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/186.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clragdollarchers.html"
  },
  {
    id: 301,
      row: "Arcade",
    title: "Ragdoll Hit",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/44.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clragdollhit.html"
  },
  {
    id: 302,
      row: "Sports",
    title: "Ragdoll Soccer",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/085f11c7-0230-47f0-9183-7b7d98dcd1d7/989397071/ballmasters-ragdoll-soccer-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clragdollsoccer.html"
  },
  {
    id: 303,
      row: "Arcade",
    title: "Recoil",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/recoil.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrecoil.html"
  },
  {
    id: 304,
      row: "Arcade",
    title: "Red Ball 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/redball4.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clRedBall4.html"
  },
  {
    id: 305,
      row: "Runner",
    title: "Red Tie Runner",
    addedAt: "2026-11-24",
    image: "https://www.numuki.com/game/card/red-tie-runner-2226.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredtierunner.html"
  },
  {
    id: 306,
      row: "Arcade",
    title: "Red vs. Blue",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/redvsblue/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredvsblue2.html"
  },
  {
    id: 307,
      row: "Arcade",
    title: "Resizer",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/05b65f49-3e26-4068-aea1-cfa6e5aafbdd/2777541320/photo-resizer-image-compressor-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clresizer.html"
  },
  {
    id: 308,
      row: "Arcade",
    title: "Retro Bowl College",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/retrobowlcollege.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clretrobowlcollege.html"
  },
  {
    id: 309,
      row: "Puzzle",
    title: "Return to Riddle School",
    addedAt: "2026-11-24",
    image: "https://archive.org/download/2-lt-return-to-riddle-school-developer-commentary-fan-game/2-lt-return-to-riddle-school-developer-commentary-fan-game.thumbs/[2LT] Return to Riddle School Developer Commentary (Fan Game)_000055.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clreturntoriddleschool.html"
  },
  {
    id: 310,
      row: "Idle",
    title: "Revolution Idle",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/19414151-revolution-idle-2-browser-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrevolutionidle.html"
  },
  {
    id: 311,
      row: "Arcade",
    title: "Robby Blocks",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-file-encryption@754a57837e92bb4552e8247c6a401bd4ce8e4ee7/images.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clluckyblocks.html"
  },
  {
    id: 312,
      row: "Arcade",
    title: "Rocket League",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/rocketleague.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrocketleague.html"
  },
  {
    id: 313,
      row: "Sports",
    title: "Rocket Soccer Derby",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cadillacghost/Unblocked-Games/main/images/thumbnails/rocketsoccer.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrocketsoccerderby.html"
  },
  {
    id: 314,
      row: "Arcade",
    title: "Rodha",
    addedAt: "2026-11-24",
    image: "https://www.mathplayground.com/images/rodha_thumbnail.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrodha.html"
  },
  {
    id: 315,
      row: "Arcade",
    title: "Roller Baller",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/9346736-rollerballer-windows-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrollerballer.html"
  },
  {
    id: 316,
      row: "Arcade",
    title: "Rolly Vortex",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/rolly-vortex",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrollyvortex.html"
  },
  {
    id: 317,
      row: "Idle",
    title: "Room Clicker",
    addedAt: "2026-11-24",
    image: "https://www.blurrygames.com/wp-content/uploads/thumbs/custom/R/room-clicker-150x150.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clroomclicker.html"
  },
  {
    id: 318,
      row: "Racing",
    title: "Russian Car Driver",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/russiancardriver.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrussiancardriver.html"
  },
  {
    id: 319,
      row: "Arcade",
    title: "Sandboxels",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sandboxels.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsandboxels.html"
  },
  {
    id: 320,
      row: "Arcade",
    title: "Sandtris",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/311.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsandtris.html"
  },
  {
    id: 321,
      row: "Arcade",
    title: "Scrap Metal 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/188.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clscrapmetal3.html"
  },
  {
    id: 322,
      row: "Arcade",
    title: "Scuba Bear",
    addedAt: "2026-11-24",
    image: "https://www.kidloland.com/games-for-kids/thumbnails/scuba-bear.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clscubabear.html"
  },
  {
    id: 323,
      row: "Arcade",
    title: "Sea Mongrel",
    addedAt: "2026-11-24",
    image: "https://files.gamezhero.com/game/ef9/60e/ef960e1a6e495d05/images/240/seamongrel.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clseamongrel.html"
  },
  {
    id: 324,
      row: "Simulation",
    title: "Short Life",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/4edbfc39-6755-4566-8732-4ddbedbb46cf/1358787186/short-life-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshortlife.html"
  },
  {
    id: 325,
      row: "Racing",
    title: "Skibidi in the Backrooms",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/skibidiinthebackrooms.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clskibidiinthebackrooms.html"
  },
  {
    id: 326,
      row: "Arcade",
    title: "Slice It All",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/128.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsliceitall.html"
  },
  {
    id: 327,
      row: "Arcade",
    title: "Slide in the Woods",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/slide-in-the-woods.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslideinthewoods.html"
  },
  {
    id: 328,
      row: "Arcade",
    title: "Slipways",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/10068284-slipways-windows-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslipways.html"
  },
  {
    id: 329,
      row: "Arcade",
    title: "Slope 2 player",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cadillacghost/Unblocked-Games/main/images/thumbnails/slope2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslope2player.html"
  },
  {
    id: 330,
      row: "Arcade",
    title: "Slope 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/slope3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslope3.html"
  },
  {
    id: 331,
      row: "Arcade",
    title: "Slot or Not",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/slot%20or%20not/index.apple-touch-icon.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslotornot.html"
  },
  {
    id: 332,
      row: "Racing",
    title: "Slow Roads",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/369.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslowroads.html"
  },
  {
    id: 333,
      row: "Arcade",
    title: "Snakelike",
    addedAt: "2026-11-24",
    image: "https://files.gamezhero.com/game/1e7/201/1e72019fc41eae66/images/240/snakelike.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnakelike.html"
  },
  {
    id: 334,
      row: "Shooter",
    title: "Sniper Shot",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/meymenet645x/xu@main/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnipershot.html"
  },
  {
    id: 335,
      row: "Shooter",
    title: "Sniper v2",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/tty67hlt6jf6/c2@main/TemplateData/img/Logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsniperv2.html"
  },
  {
    id: 336,
      row: "Multiplayer",
    title: "Snowball.io",
    addedAt: "2026-11-24",
    image: "https://snowrider3d-io.github.io/assets/snowball-io.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnowballio.html"
  },
  {
    id: 337,
      row: "Racing",
    title: "Alt Snow Rider",
    addedAt: "2026-11-24",
    image: "https://gamefabrique.com/storage/screenshots/ps2/snow-rider-03.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnowriderrrr.html"
  },
  {
    id: 338,
      row: "Racing",
    title: "Snow Road",
    addedAt: "2026-11-24",
    image: "https://merge-brainrot.com/thumbs/snow-road-3d_2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnowroad.html"
  },
  {
    id: 339,
      row: "Sports",
    title: "Soccer Random",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/soccerrandom.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsoccerrandom.html"
  },
  {
    id: 340,
      row: "Platformer",
    title: "Sonic CD",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/589.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsoniccd.html"
  },
  {
    id: 341,
      row: "Platformer",
    title: "Sonic Revert",
    addedAt: "2026-11-24",
    image: "https://kbhgames.com/wp-content/uploads/2014/11/Sonic-The-Hedgehog-3-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicrevert.html"
  },
  {
    id: 342,
      row: "Platformer",
    title: "Soul Jumper",
    addedAt: "2026-11-24",
    image: "https://cdn2.y8.com/cloudimage/34583/file/w180h135_webp-1dd7063a5657365dd9fec300cf83c6c2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsouljumper.html"
  },
  {
    id: 343,
      row: "Idle",
    title: "Spacebar Clicker",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/spacebarclicker.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspacebarclicker.html"
  },
  {
    id: 344,
      row: "Arcade",
    title: "Space Company",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/space-company",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspacecompany.html"
  },
  {
    id: 345,
      row: "Arcade",
    title: "Space Waves",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/spacewaves.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspacewaves.html"
  },
  {
    id: 346,
      row: "Racing",
    title: "Speed Stars",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/speedstars.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspeedstars.html"
  },
  {
    id: 347,
      row: "Arcade",
    title: "Spiral Roll",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/349.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspiralroll.html"
  },
  {
    id: 348,
      row: "Arcade",
    title: "Sprunked",
    addedAt: "2026-11-24",
    image: "https://s.detools.dev/games/sprunked-in-the-retake-style/cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsprunked.html"
  },
  {
    id: 349,
      row: "Arcade",
    title: "Sprunki",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sprunki.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsprunki.html"
  },
  {
    id: 350,
      row: "Idle",
    title: "Sprunki Clicker",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/sprunki-clicker-game/cover/sprunki-clicker-game.png?w=320&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsprunkiclicker.html"
  },
  {
    id: 351,
      row: "Arcade",
    title: "Squid Playground",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/squid-game-3-playground/cover/squid-game-3-playground.png?w=320&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsquidplayground.html"
  },
  {
    id: 352,
      row: "Multiplayer",
    title: "Stackball.io",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cadillacghost/Unblocked-Games/main/images/thumbnails/stack.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstackballio.html"
  },
  {
    id: 353,
      row: "Arcade",
    title: "Stacktris",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/stacktris/webapp/cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstacktris.html"
  },
  {
    id: 354,
      row: "Arcade",
    title: "Station 141",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/station-141",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstation141.html"
  },
  {
    id: 355,
      row: "Arcade",
    title: "Stick Archers Battle",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/stick-archers-battle/cover/stick-archers-battle.png?width=320&height=180&fit=cover&quality=90",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickarchersbattle.html"
  },
  {
    id: 356,
      row: "Action",
    title: "Stickman Duel",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/stickmanduel.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickmanduel.html"
  },
  {
    id: 357,
      row: "Simulation",
    title: "Stickman gta City",
    addedAt: "2026-11-24",
    image: "https://www.gamenora.com/upload/games/thumbnails/Stickman GTA City.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickmangtacity.html"
  },
  {
    id: 358,
      row: "Strategy",
    title: "Stickman Kingdom Clash",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@646b8183aa1d6c61b073dc5ade2f550bace125b9/Stickman%20Clash/index.icon.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clStickmanKingdomclash.html"
  },
  {
    id: 359,
      row: "Arcade",
    title: "Stick Merge",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/stick-merge",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickmerge.html"
  },
  {
    id: 360,
      row: "Arcade",
    title: "Stick Slasher",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/767.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickslasher.html"
  },
  {
    id: 361,
      row: "Shooter",
    title: "Strikeforce Kitty",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/830733-strikeforce-kitty-browser-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsfk.html"
  },
  {
    id: 362,
      row: "Shooter",
    title: "StrikeForce Kitty 2",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/9702593-strikeforce-kitty-2-browser-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsfk2.html"
  },
  {
    id: 363,
      row: "Shooter",
    title: "Strikeforce Kitty Last Stand",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/9711719-strikeforce-kitty-last-stand-browser-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsfklaststand.html"
  },
  {
    id: 364,
      row: "Shooter",
    title: "Strikeforce Kitty League",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/9728021-strikeforce-kitty-league-browser-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsfkleague.html"
  },
  {
    id: 365,
      row: "Arcade",
    title: "Suika Game",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/suika.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuika.html"
  },
  {
    id: 366,
      row: "Arcade",
    title: "Suika Pico",
    addedAt: "2026-11-24",
    image: "https://suika-game.io/cache/data/image/game/pico-park-cover-m300x300.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuikapico.html"
  },
  {
    id: 367,
      row: "Racing",
    title: "Super Car Rush",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/412eec6d-5f56-4539-82cc-651347ec1eb1/275827979/car-rush-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupercarrush.html"
  },
  {
    id: 368,
      row: "Arcade",
    title: "Super Dark Deception",
    addedAt: "2026-11-24",
    image: "https://gocdkeys.fr/assets/thumbnails/super-dark-deception-nintendo-switch-1.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperdarkdeception.html"
  },
  {
    id: 369,
      row: "Arcade",
    title: "Superhot Line Miami",
    addedAt: "2026-11-24",
    image: "https://www.moregameslike.com/wp-content/screenshots/superhotline-miami-deluxe-36755-1.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperhotlinemiami.html"
  },
  {
    id: 370,
      row: "Adventure",
    title: "Super Kid Adventure",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/super%20kid%20adventure/icon-128.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperkidadventure.htm"
  },
  {
    id: 371,
      row: "Sports",
    title: "Super Liquid Soccer",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/superliquidsoccer.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperliquidsoccer.html"
  },
  {
    id: 372,
      row: "Platformer",
    title: "Super Mario Bros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/supermariobros.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariobros.html"
  },
  {
    id: 373,
      row: "Arcade",
    title: "Super Oliver World",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/f25de69b-1e47-4f46-b172-b3b0f1a40548/1095891075/super-oliver-world-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperoliverworld.html"
  },
  {
    id: 374,
      row: "Racing",
    title: "Survival Race v2",
    addedAt: "2026-11-24",
    image: "https://plays.org/screenshots/survival-race.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsurvivalracev2.html"
  },
  {
    id: 375,
      row: "Arcade",
    title: "Sushi Unroll",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sushiunroll.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsushiunroll.html"
  },
  {
    id: 376,
      row: "Arcade",
    title: "Switchblade",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/switchblade/index.apple-touch-icon.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswitchblade.html"
  },
  {
    id: 377,
      row: "Arcade",
    title: "Table Tanks",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/tharun9772/game-assets@main/tabe-tanks.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltabletanks.html"
  },
  {
    id: 378,
      row: "Sports",
    title: "Table Tennis World Tour",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/table%20tennis%20world%20tour/html5games/images/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltabletennisworldtour.html"
  },
  {
    id: 379,
      row: "Arcade",
    title: "Tank Pixel",
    addedAt: "2026-11-24",
    image: "https://img.freepik.com/premium-vector/pixel-art-war-game-splash-screen-with-war-tanks-street-vector-background-8bit-game_360488-1426.jpg?w=2000",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltankpixel.html"
  },
  {
    id: 380,
      row: "Arcade",
    title: "Tanuki Sunset",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/tanukisunset.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltanukisunset.html"
  },
  {
    id: 381,
      row: "Arcade",
    title: "Telephone Trouble",
    addedAt: "2026-11-24",
    image: "https://www.browsercraft.com/images/games/covers/telephone-trouble.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltelephonetrouble.html"
  },
  {
    id: 382,
      row: "Arcade",
    title: "Terra",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/terra.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clterra.html"
  },
  {
    id: 383,
      row: "Arcade",
    title: "There is No Game",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/thereisnogame.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthereisnofile.html"
  },
  {
    id: 384,
      row: "Puzzle",
    title: "Three Goblets",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/620.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthreegoblets.html"
  },
  {
    id: 385,
      row: "Arcade",
    title: "Throw a Potato",
    addedAt: "2026-11-24",
    image: "https://playszgames.com/wp-content/uploads/thumbs/custom/T/Throw-a-Potato-150x150.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthrowapotato.html"
  },
  {
    id: 386,
      row: "Arcade",
    title: "Throw a Potato Again",
    addedAt: "2026-11-24",
    image: "https://gamesdizi.com/wp-content/uploads/2023/11/throw-a-potato-again-240x150.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthrowapotatoagain.html"
  },
  {
    id: 387,
      row: "Shooter",
    title: "Time Shooter 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/timeshooter2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltimeshooter2.html"
  },
  {
    id: 388,
      row: "Shooter",
    title: "Time Shooter 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/timeshooter3.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltimeshooter3.html"
  },
  {
    id: 389,
      row: "Strategy",
    title: "Time Warriors",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/time%20warriors/game_logo_en.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltimewarriors.html"
  },
  {
    id: 390,
      row: "Arcade",
    title: "To a Starling",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/to-a-starling.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltoastarling.html"
  },
  {
    id: 391,
      row: "Racing",
    title: "Top Speed Racing 3D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/top%20speed%20racing%203d/TemplateData/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltopspeedracing3d.html"
  },
  {
    id: 392,
      row: "Arcade",
    title: "Tower Blocks",
    addedAt: "2026-11-24",
    image: "https://staticz.novelgames.com/flashgames/towerblocks/screenshot_600x400.2.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltowerblocks.html"
  }
,
  {
    id: 393,
      row: "Sports",
    title: "1 on 1 Soccer",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/1on1soccer.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1on1soccer.html"
  },
  {
    id: 394,
      row: "Arcade",
    title: "3Dash",
    addedAt: "2026-11-24",
    image: "https://geodash.org/images/3dash-image.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl3dash.html"
  },
  {
    id: 395,
      row: "Adventure",
    title: "Bob the Robber 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/bobtherobber2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbobtherobber2.html"
  },
  {
    id: 396,
      row: "Adventure",
    title: "Cactus McCoy",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/cactusmccoy.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcactusmccoy.html"
  },
  {
    id: 397,
      row: "Arcade",
    title: "Burrito Bison",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/burritobison.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clburritobison.html"
  },
  {
    id: 398,
      row: "Sports",
    title: "Backyard Baseball",
    addedAt: "2026-11-24",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/cocc79.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackyardbaseball.html"
  }
,
  {
    id: 399,
      row: "Simulation",
    title: "Eaglercraft Alpha 1.2.6 Offline",
    addedAt: "2026-11-24",
    image: "https://eaglercraftx.org/data/image/game/eaglercraft-alpha-1.2.6.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/Eaglercraft-Alpha-1.2.6-Offline.html"
  },
  {
    id: 400,
      row: "Simulation",
    title: "Eaglercraft Beta 1.3 Offline",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/eaglercraft.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/Eaglercraft-Beta-1.3-Offline.html"
  },
  {
    id: 401,
      row: "Simulation",
    title: "Eaglercraft Indev Offline (1)",
    addedAt: "2026-11-24",
    image: "https://eaglecraft.com.co/uploads/eaglercraft-indev-image.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/Eaglercraft-Indev-Offline%20(1).html"
  },
  {
    id: 402,
      row: "Simulation",
    title: "Eaglercraft Indev Offline",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/minecraftindev.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/Eaglercraft-Indev-Offline.html"
  },
  {
    id: 403,
      row: "Simulation",
    title: "Eaglercraft L 1.9 V 0 7 0 Offline Signed",
    addedAt: "2026-11-24",
    image: "https://user-images.githubusercontent.com/67106394/210432989-0d541ef1-bd39-4b90-9bb1-c0ffae1b9c3e.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/EaglercraftL_1.9_v0_7_0_Offline_Signed.html"
  },
  {
    id: 404,
      row: "Simulation",
    title: "Eaglercraft X 1.8.8(u 29)",
    addedAt: "2026-11-24",
    image: "https://gamingshitposting.github.io/SalaMuseoGames/assets/media/games/minecraft/Screenshot%20from%202024-04-20%2000-03-23.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/EaglercraftX%201.8.8(u29).html"
  },
  {
    id: 405,
      row: "Simulation",
    title: "Eaglercraft Z 1.11.2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/eaglercraftx1122.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/EaglercraftZ_1.11.2.html"
  },
  {
    id: 406,
      row: "Arcade",
    title: "Minceraft I Not Mine V 6",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/minecraft.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/Minceraft-I-NotMine_V6.html"
  },
  {
    id: 407,
      row: "Arcade",
    title: "1",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/1.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1.html"
  },
  {
    id: 408,
      row: "Runner",
    title: "100 Skibidi: Still Water Those Who Know",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl100skibidistillwaterthosewhoknow.html"
  },
  {
    id: 409,
      row: "Shooter",
    title: "10 Bullets",
    addedAt: "2026-11-24",
    image: "https://imgs.crazygames.com/10-bullets-html-5.png?fit=crop&height=630&metadata=none&quality=100&width=1200",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl10bullets.html"
  },
  {
    id: 410,
      row: "Sports",
    title: "1 ON 1 Tennis",
    addedAt: "2026-11-24",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuh0Fwz-9jVLyOnk2faOKwNRiDNw5_COocg&usqp=CAU",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1on1tennis.html"
  },
  {
    id: 411,
      row: "Arcade",
    title: "1 V 1 Doubleimprettysureitsexactlythesameidk",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/1v1lol.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1v1doubleimprettysureitsexactlythesameidk.html"
  },
  {
    id: 412,
      row: "Arcade",
    title: "1v1.LOL (About:Blank)",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1v1lolifnoaboutblank.html"
  },
  {
    id: 413,
      row: "Arcade",
    title: "1v1.LOL (About:Blank)",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1v1lolnoaboutblank.html"
  },
  {
    id: 414,
      row: "Arcade",
    title: "1v1.LOL (Maybe)",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1v1maybeidk.html"
  },
  {
    id: 415,
      row: "Shooter",
    title: "2 Doom",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doom.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl2doom.html"
  },
  {
    id: 416,
      row: "Arcade",
    title: "2 Dshooting(1)",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl2dshooting(1).html"
  },
  {
    id: 417,
      row: "Arcade",
    title: "3 Slices 2",
    addedAt: "2026-11-24",
    image: "https://jayisgames.com/images/lvl17.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl3slices2.html"
  },
  {
    id: 418,
      row: "Puzzle",
    title: "40 Exescape",
    addedAt: "2026-11-24",
    image: "https://a.silvergames.com/screenshots/40xescape/1_menu.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl40exescape.html"
  },
  {
    id: 419,
      row: "Platformer",
    title: "60 Seconds Burger Run",
    addedAt: "2026-11-24",
    image: "https://www.touchtapplay.com/wp-content/uploads/2023/02/image-23-e1675504117354.png?resize=640%2C427&w=650",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl60secondsburgerrun.html"
  },
  {
    id: 420,
      row: "Platformer",
    title: "60 Seconds Santa Run",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/60ssantarun.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl60secondssantarun.html"
  },
  {
    id: 421,
      row: "Platformer",
    title: "60 Secsantarun",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/60ssantarun.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl60secsantarun.html"
  },
  {
    id: 422,
      row: "Sports",
    title: "8 Ballpool",
    addedAt: "2026-11-24",
    image: "https://imgs.crazygames.com/8-ball-pool-wyr_1x1/20251027031134/8-ball-pool-wyr_1x1-cover?format=auto&metadata=none&quality=100&width=1200",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl8ballpool.html"
  },
  {
    id: 423,
      row: "Arcade",
    title: "Awesome Pirates",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clAwesomePirates.html"
  },
  {
    id: 424,
      row: "Arcade",
    title: "B 3313",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clB3313.html"
  },
  {
    id: 425,
      row: "Arcade",
    title: "BMX 2",
    addedAt: "2026-11-24",
    image: "https://image.yaksgames.com/v2/game/0/9/1/09186c9f9bc92c43c844fb65fe604a75.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clBMX2.html"
  },
  {
    id: 426,
      row: "Arcade",
    title: "Btd 1",
    addedAt: "2026-11-24",
    image: "https://imgs.crazygames.com/auto-covers/bloons-tower-defense_1x1.jpg?format=auto&metadata=none&quality=100&width=1200",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clBTD1.html"
  },
  {
    id: 427,
      row: "Arcade",
    title: "Big Time Butter Baron",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clBig_Time_Butter_Baron.html"
  },
  {
    id: 428,
      row: "Racing",
    title: "Cartoon Network Table Tennis Ultimate Tournament",
    addedAt: "2026-11-24",
    image: "https://googlebaseball.io/data/image/game/table-tennis-ultimate-tournament/table-tennis-ultimate-tournament.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clCartoonNetworkTableTennisUltimateTournament.html"
  },
  {
    id: 429,
      row: "Adventure",
    title: "Dragon Ball Z The Legacyof Goku",
    addedAt: "2026-11-24",
    image: "https://cdn.wikimg.net/en/strategywiki/images/thumb/8/84/Dragon_Ball_Z-_The_Legacy_of_Goku_%28us%29_cover.jpg/800px-Dragon_Ball_Z-_The_Legacy_of_Goku_%28us%29_cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clDragonBallZTheLegacyofGoku.html"
  },
  {
    id: 430,
      row: "Platformer",
    title: "F Fsonic 1",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic1.html"
  },
  {
    id: 431,
      row: "Platformer",
    title: "Final Fight: Sonic 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic2.html"
  },
  {
    id: 432,
      row: "Platformer",
    title: "Final Fight: Sonic 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic3.html"
  },
  {
    id: 433,
      row: "Platformer",
    title: "Final Fight: Sonic 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic4.html"
  },
  {
    id: 434,
      row: "Platformer",
    title: "Final Fight: Sonic 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic5.html"
  },
  {
    id: 435,
      row: "Platformer",
    title: "F Fsonic 61",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic61.html"
  },
  {
    id: 436,
      row: "Platformer",
    title: "F Fsonic 62",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic62.html"
  },
  {
    id: 437,
      row: "Sports",
    title: "Fifa 07",
    addedAt: "2026-11-24",
    image: "https://uk.static.webuy.com/product_images/Gaming/Xbox%20360%20Software/5030930054120_l.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFA07.html"
  },
  {
    id: 438,
      row: "Sports",
    title: "Fifa 10",
    addedAt: "2026-11-24",
    image: "https://retrospillkongen.no/cdn/shop/files/MG_9204_600x.jpg?v=1692188789",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFA10.html"
  },
  {
    id: 439,
      row: "Sports",
    title: "Fifa 11",
    addedAt: "2026-11-24",
    image: "https://retrospillkongen.no/cdn/shop/files/MG_2636.jpg?v=1702207504",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFA11.html"
  },
  {
    id: 440,
      row: "Sports",
    title: "Fifa 2000(1)",
    addedAt: "2026-11-24",
    image: "https://media.s-bol.com/NR1Am1rG9WND/568KmA/1171x1200.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFA2000(1).html"
  },
  {
    id: 441,
      row: "Sports",
    title: "Fifa 99",
    addedAt: "2026-11-24",
    image: "https://www.pjsgames.com/cdn/shop/products/game-fifa-99-4_1024x.jpg?v=1452800659",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFA99.html"
  },
  {
    id: 442,
      row: "Sports",
    title: "FIFA International Soccer",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/4689934-fifa-international-soccer-snes-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAinternationalsoccer.html"
  },
  {
    id: 443,
      row: "Arcade",
    title: "FIFA: Road to World Cup 98",
    addedAt: "2026-11-24",
    image: "https://image.jeuxvideo.com/images-sm/pc/f/i/fi98pc0f.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAroadtoworldcup98.html"
  },
  {
    id: 444,
      row: "Sports",
    title: "Fif Asoccer 06",
    addedAt: "2026-11-24",
    image: "https://storage.googleapis.com/images.pricecharting.com/mk63h2smhyko72rf/1600.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAsoccer06.html"
  },
  {
    id: 445,
      row: "Sports",
    title: "Fif Asoccer 95",
    addedAt: "2026-11-24",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/coccjx.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAsoccer95.html"
  },
  {
    id: 446,
      row: "Sports",
    title: "Fif Asoccer 96",
    addedAt: "2026-11-24",
    image: "https://www.vgchartz.com/games/boxart/full_fifa-soccer-96_6AmericaFront.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAsoccer96.html"
  },
  {
    id: 447,
      row: "Sports",
    title: "Fif Asoccer 97",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/5837098-fifa-soccer-97-playstation-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAsoccer97.html"
  },
  {
    id: 448,
      row: "Arcade",
    title: "FIFA Street 2",
    addedAt: "2026-11-24",
    image: "https://www.goohoo.nl/images/thumbnails/737/737/detailed/1/fifa-street-2-playstation-2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAstreet2.html"
  },
  {
    id: 449,
      row: "Arcade",
    title: "Get to the Top (Although There Is No Top)",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/thereisnogame.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clGettothetopalthoughthereisnotop.html"
  },
  {
    id: 450,
      row: "Platformer",
    title: "Jump",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/geometryjump.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clJUMP.html"
  },
  {
    id: 451,
      row: "Sports",
    title: "Ken Griffey JR Presents Major League Baseball",
    addedAt: "2026-11-24",
    image: "https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280w/products/26375/27763/griffey_mlb__36919.1712852163.jpg?c=2",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clKenGriffeyJrPresentsMajorLeagueBaseball.html"
  },
  {
    id: 452,
      row: "Racing",
    title: "Metal Sonic Hyperdrive",
    addedAt: "2026-11-24",
    image: "https://images.steamusercontent.com/ugc/501399955308388179/D1689A8A373BF415D3E8EB5C4ABDF356223E9313/?ima=fit&imcolor=%23000000&impolicy=Letterbox&imw=512&letterbox=false",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clMetalSonicHyperdrive.html"
  },
  {
    id: 453,
      row: "Arcade",
    title: "NB Ahangtime",
    addedAt: "2026-11-24",
    image: "https://cdn2.steamgriddb.com/grid/872ddb5bcc4dff4db42fd5be7a1e3b65.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clNBAhangtime.html"
  },
  {
    id: 454,
      row: "Arcade",
    title: "NB Ajam",
    addedAt: "2026-11-24",
    image: "https://i5.walmartimages.com/seo/Acclaim-NBA-Jam-PlayStation-2-Sports-Video-Game_1b7571b8-7a5f-4896-9539-39d228496999.42fed9609ded86db6b9a6d428db78b92.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clNBAjam.html"
  },
  {
    id: 455,
      row: "Arcade",
    title: "Nicktoons Freeze Frame Frenzy",
    addedAt: "2026-11-24",
    image: "https://images.stopgame.ru/games/logos/29166/c1120x1120/l0gwUG7iHFSUKbY8orErhg/nicktoons_freeze_frame_frenzy-square.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clNicktoonsFreezeFrameFrenzy.html"
  },
  {
    id: 456,
      row: "Arcade",
    title: "Pokémon Emerald Rogue",
    addedAt: "2026-11-24",
    image: "https://images.igdb.com/igdb/image/upload/t_1080p_2x/co6i7g.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clPokemonemeraldrouge.html"
  },
  {
    id: 457,
      row: "Arcade",
    title: "Pokémon: Rocket Edition",
    addedAt: "2026-11-24",
    image: "https://retrogamesnexus.com/images/games/cover/gba/pokemon-edicion-team-rocket.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clPokemonrocketedition.html"
  },
  {
    id: 458,
      row: "Arcade",
    title: "Pokémon Stunning Steel",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clPok%C3%A9monstunningsteel.html"
  },
  {
    id: 459,
      row: "Platformer",
    title: "Sonic 1 Score Rush",
    addedAt: "2026-11-24",
    image: "https://shc-dist.lostsig.co/images/contest2022/3243.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clSonic1ScoreRush.html"
  },
  {
    id: 460,
      row: "Platformer",
    title: "Sonic 2 Score Rush",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clSonic2ScoreRush.html"
  },
  {
    id: 461,
      row: "Platformer",
    title: "Sonic Hellfire Saga",
    addedAt: "2026-11-24",
    image: "https://shc-dist.lostsig.co/images/contest2023/5626.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clSonicHellfireSaga.html"
  },
  {
    id: 462,
      row: "Arcade",
    title: "Taikono Tatsujin",
    addedAt: "2026-11-24",
    image: "https://down-my.img.susercontent.com/file/sg-11134201-22100-qvulj7k326iv87",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clTaikonoTatsujin.html"
  },
  {
    id: 463,
      row: "Racing",
    title: "Ultimate Car Driving Simulator",
    addedAt: "2026-11-24",
    image: "https://wheeliegames.com/thumb/ultimate-car-driving-simulator.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clUltimatecardrivingsimulator.html"
  },
  {
    id: 464,
      row: "Arcade",
    title: "Abandoned",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clabandoned.html"
  },
  {
    id: 465,
      row: "Arcade",
    title: "Abandoned 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clabandoned3.html"
  },
  {
    id: 466,
      row: "Arcade",
    title: "Aceattorernefgsdg",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/claceattorernefgsdg.html"
  },
  {
    id: 467,
      row: "Shooter",
    title: "Acecombat 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clacecombat2.html"
  },
  {
    id: 468,
      row: "Shooter",
    title: "Acecombat 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clacecombat3.html"
  },
  {
    id: 469,
      row: "Arcade",
    title: "Ace Gangster: Taxi",
    addedAt: "2026-11-24",
    image: "https://assets.bgames.com/7/109087/88639/1200x600/ace-gangster-taxi.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clacegangstertaxi.html"
  },
  {
    id: 470,
      row: "Arcade",
    title: "Achievement Unlocked",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/achievementunlocked.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clachievementunlocked.html"
  },
  {
    id: 471,
      row: "Arcade",
    title: "Achievement Unlocked 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/achievementunlocked2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clachievmentunlocked2.html"
  },
  {
    id: 472,
      row: "Arcade",
    title: "Achievement Unlocked 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/achievementunlocked3.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clachievmentunlocked3.html"
  },
  {
    id: 473,
      row: "Arcade",
    title: "Achillies 1 FR",
    addedAt: "2026-11-24",
    image: "https://cdn.gamingonl.com/images/webp/achilles-1512x1077.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clachillies1fr.html"
  },
  {
    id: 474,
      row: "Arcade",
    title: "Achilles 2",
    addedAt: "2026-11-24",
    image: "https://static.woxikon.com/games/images/achilles-2-origin-of-a-legend.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clachillies2.html"
  },
  {
    id: 475,
      row: "Strategy",
    title: "Advance Wars",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/advancewars.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cladvancewars.html"
  },
  {
    id: 476,
      row: "Strategy",
    title: "Advance Wars 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/advancewars2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cladvancewars2.html"
  },
  {
    id: 477,
      row: "Strategy",
    title: "Ageofwar",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ageofwar.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clageofwar.html"
  },
  {
    id: 478,
      row: "Strategy",
    title: "Age of War 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ageofwar2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clageofwar2.html"
  },
  {
    id: 479,
      row: "Arcade",
    title: "A Koopa's Revenge",
    addedAt: "2026-11-24",
    image: "https://kotaku.com/igdb/image/upload/t_720p/scnym6.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clakoopasrevenge.html"
  },
  {
    id: 480,
      row: "Arcade",
    title: "A Koopa's Revenge 2",
    addedAt: "2026-11-24",
    image: "https://images.igdb.com/igdb/image/upload/t_1080p/scyc7j.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clakoopasrevenge2.html"
  },
  {
    id: 481,
      row: "Arcade",
    title: "Alien Hominid",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/alienhominid.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clalienhominid.html"
  },
  {
    id: 482,
      row: "Arcade",
    title: "Alien Hominid (GBA)",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/alienhominid.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clalienhominidgba.html"
  },
  {
    id: 483,
      row: "Sports",
    title: "Alien Transporter",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/alienhominid.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clalientransporter.html"
  },
  {
    id: 484,
      row: "Arcade",
    title: "Alien vs. Predator",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/alienhominid.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clalienvspredator.html"
  },
  {
    id: 485,
      row: "Arcade",
    title: "Amaze",
    addedAt: "2026-11-24",
    image: "https://cdn-ext.fanatical.com/production/product/1280x720/6f50ba89-0eae-4087-8d2f-c62f84813357.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamaze.html"
  },
  {
    id: 486,
      row: "Arcade",
    title: "Amigo Pancho",
    addedAt: "2026-11-24",
    image: "https://assets.funnygames.org/5/13905/66904/672x448/amigo-pancho-1.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho.html"
  },
  {
    id: 487,
      row: "Arcade",
    title: "Amigo Pancho 2",
    addedAt: "2026-11-24",
    image: "https://simple.game/assets/thumbs/x294v2z2/amigo-pancho-2.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho2.html"
  },
  {
    id: 488,
      row: "Arcade",
    title: "Amigo Pancho 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho3.html"
  },
  {
    id: 489,
      row: "Arcade",
    title: "Amigo Pancho 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho4.html"
  },
  {
    id: 490,
      row: "Arcade",
    title: "Amigo Pancho 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho5.html"
  },
  {
    id: 491,
      row: "Arcade",
    title: "Amigo Pancho 6",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho6.html"
  },
  {
    id: 492,
      row: "Arcade",
    title: "Amigo Pancho 7",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho7.html"
  },
  {
    id: 493,
      row: "Arcade",
    title: "Animal Crossing: Wild World",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/animalcrossingwildworld.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clanimalcrossingwildworld.html"
  },
  {
    id: 494,
      row: "Shooter",
    title: "Apple Shooter",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clappleshooter.html"
  },
  {
    id: 495,
      row: "Arcade",
    title: "Appleworm",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clappleworm.html"
  },
  {
    id: 496,
      row: "Arcade",
    title: "Attackhole",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clattackhole.html"
  },
  {
    id: 497,
      row: "Arcade",
    title: "Avalanche",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/avalanche.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clavalanche.html"
  },
  {
    id: 498,
      row: "Simulation",
    title: "Awesome Planes",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clawesomeplanes.html"
  },
  {
    id: 499,
      row: "Shooter",
    title: "Awesome Tanks",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/awesometanks.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clawesometanks.html"
  },
  {
    id: 500,
      row: "Shooter",
    title: "Awesome Tanks 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/awesometanks.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clawesometanks2.html"
  },
  {
    id: 501,
      row: "Arcade",
    title: "Babykaizo",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbabykaizo.html"
  },
  {
    id: 502,
      row: "Sports",
    title: "Backyard Baseball '09",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackyardbaseball09.html"
  },
  {
    id: 503,
      row: "Sports",
    title: "Backyard Baseball '10",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackyardbaseball10.html"
  },
  {
    id: 504,
      row: "Sports",
    title: "Backyard Soccer",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackyardsoccer.html"
  },
  {
    id: 505,
      row: "Arcade",
    title: "Badpiggies",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/badpiggies.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbadpiggies.html"
  },
  {
    id: 506,
      row: "Simulation",
    title: "Badtimesim",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/badtimesimulator.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbadtimesim.html"
  },
  {
    id: 507,
      row: "Shooter",
    title: "Bandit Gunslingers",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbanditgunslingers.html"
  },
  {
    id: 508,
      row: "Arcade",
    title: "Banjo-Kazooie",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/banjokazooie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbanjokazooie.html"
  },
  {
    id: 509,
      row: "Arcade",
    title: "Banjotooie",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/banjokazooie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbanjotooie.html"
  },
  {
    id: 510,
      row: "Arcade",
    title: "Bank Breakout 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbankbreakout2.html"
  },
  {
    id: 511,
      row: "Sports",
    title: "Basketball Legends",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/basketballstars.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketballlegends.html"
  },
  {
    id: 512,
      row: "Arcade",
    title: "Battlezone",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbattlezone.html"
  },
  {
    id: 513,
      row: "Arcade",
    title: "Bazookaboy",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbazookaboy.html"
  },
  {
    id: 514,
      row: "Arcade",
    title: "Beamrider",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbeamrider.html"
  },
  {
    id: 515,
      row: "Arcade",
    title: "Bearbarians",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbearbarians.html"
  },
  {
    id: 516,
      row: "Arcade",
    title: "Ben 10 Alienforce",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clben10alienforce.html"
  },
  {
    id: 517,
      row: "Arcade",
    title: "Ben 10 Omniverse",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clben10omniverse.html"
  },
  {
    id: 518,
      row: "Arcade",
    title: "Ben 10 Protector",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clben10protector.html"
  },
  {
    id: 519,
      row: "Racing",
    title: "Ben 10 Racing",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clben10racing.html"
  },
  {
    id: 520,
      row: "Arcade",
    title: "Ben 10 Ultimatealien",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clben10ultimatealien.html"
  },
  {
    id: 521,
      row: "Arcade",
    title: "Big Tower Tiny Square 2: Good",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pizzatower.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbigtowertinysquare2good.html"
  },
  {
    id: 522,
      row: "Arcade",
    title: "The Binding of Isaac: Sheep Time",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/thebindingofisaac.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbindingofisaccsheeptime.html"
  },
  {
    id: 523,
      row: "Arcade",
    title: "Blackjack Battle",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblackjackbattle.html"
  },
  {
    id: 524,
      row: "Arcade",
    title: "Blacksmith Lab",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblacksmithlab.html"
  },
  {
    id: 525,
      row: "Arcade",
    title: "Bleach vs. Naruto",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbleachvsnaruto.html"
  },
  {
    id: 526,
      row: "Adventure",
    title: "Blob's Story 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblobsstory2.html"
  },
  {
    id: 527,
      row: "Shooter",
    title: "Block Craft Shooter",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblockcraftshooter.html"
  },
  {
    id: 528,
      row: "Arcade",
    title: "Bloons TD 1",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bloonstowerdefense.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloonsTD1.html"
  },
  {
    id: 529,
      row: "Arcade",
    title: "Bloons TD 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bloonstowerdefense2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloonsTD2.html"
  },
  {
    id: 530,
      row: "Arcade",
    title: "Bloons TD 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bloonstowerdefense3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloonsTD3.html"
  },
  {
    id: 531,
      row: "Arcade",
    title: "Bloons TD 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bloonstowerdefense4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloonsTD4.html"
  },
  {
    id: 532,
      row: "Arcade",
    title: "Bntts",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbntts.html"
  },
  {
    id: 533,
      row: "Arcade",
    title: "Bollybeat",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbollybeat.html"
  },
  {
    id: 534,
      row: "Arcade",
    title: "Bomberman",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/bomberman.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbomberman.html"
  },
  {
    id: 535,
      row: "Arcade",
    title: "Bomberman 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbomberman2.html"
  },
  {
    id: 536,
      row: "Platformer",
    title: "Bottlejump 3 D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbottlejump3d.html"
  },
  {
    id: 537,
      row: "Arcade",
    title: "Bowl Alt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbowlalt.html"
  },
  {
    id: 538,
      row: "Sports",
    title: "Boxing Live 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clboxinglive2.html"
  },
  {
    id: 539,
      row: "Arcade",
    title: "BTTS 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbtts2.html"
  },
  {
    id: 540,
      row: "Shooter",
    title: "Bubble Shooter",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bubbleshooter.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbleshooter.html"
  },
  {
    id: 541,
      row: "Shooter",
    title: "Bubble Shooter: Pirate",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bubbleshooter.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbleshooterpirate.html"
  },
  {
    id: 542,
      row: "Shooter",
    title: "Bubble Tanks",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbletanks.html"
  },
  {
    id: 543,
      row: "Shooter",
    title: "Bubble Tanks 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/bubbletanks2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbletanks2.html"
  },
  {
    id: 544,
      row: "Shooter",
    title: "Bubble Tanks 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbletanks3.html"
  },
  {
    id: 545,
      row: "Shooter",
    title: "Bubble Tanks Arenas",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbletanksarenas.html"
  },
  {
    id: 546,
      row: "Shooter",
    title: "Bubble Tanks TD",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbletankstd.html"
  },
  {
    id: 547,
      row: "Arcade",
    title: "Bubsy",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubsy.html"
  },
  {
    id: 548,
      row: "Arcade",
    title: "Buckshot Roulette",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/buckshotroulette.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbuckshotroulette.html"
  },
  {
    id: 549,
      row: "Arcade",
    title: "Burrito Bison 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/burritobison.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clburritobison2.html"
  },
  {
    id: 550,
      row: "Arcade",
    title: "Burrito Bison: Revenge",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/burritobisonr.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clburritobisonrevenge.html"
  },
  {
    id: 551,
      row: "Arcade",
    title: "Cactus McCoy 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/cactusmccoy2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcactusmccoy2.html"
  },
  {
    id: 552,
      row: "Arcade",
    title: "Cannon Fodder",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcannonfodder.html"
  },
  {
    id: 553,
      row: "Racing",
    title: "Car Drawing",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcardrawing.html"
  },
  {
    id: 554,
      row: "Racing",
    title: "Careatscar 2 Deluxe",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcareatscar2deluxe.html"
  },
  {
    id: 555,
      row: "Racing",
    title: "Car Mods",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcarmods.html"
  },
  {
    id: 556,
      row: "Racing",
    title: "Car Stunts Driving",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcarstuntsdriving.html"
  },
  {
    id: 557,
      row: "Arcade",
    title: "Castlevania",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/castlevania.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlevania.html"
  },
  {
    id: 558,
      row: "Arcade",
    title: "Castlevania II",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlevania2.html"
  },
  {
    id: 559,
      row: "Arcade",
    title: "Castlevania III",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/castlevaniaiii.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlevania3.html"
  },
  {
    id: 560,
      row: "Arcade",
    title: "Castlevania: Aria of Sorrow",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/castlevaniaariaofsorrow.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlevaniaariaofsorrow.html"
  },
  {
    id: 561,
      row: "Arcade",
    title: "Castlevania (NES)",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlevanianes.html"
  },
  {
    id: 562,
      row: "Simulation",
    title: "Cats Love Cake 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcatslovecake2.html"
  },
  {
    id: 563,
      row: "Arcade",
    title: "Cellardoor",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcellardoor.html"
  },
  {
    id: 564,
      row: "Arcade",
    title: "Checkers",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcheckers.html"
  },
  {
    id: 565,
      row: "Arcade",
    title: "Chibi Knight",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/chibiknight.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchibiknight.html"
  },
  {
    id: 566,
      row: "Arcade",
    title: "Chip's Challenge",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchipschallenge.html"
  },
  {
    id: 567,
      row: "Arcade",
    title: "Chrono Trigger",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/chronotrigger.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchronotrigger.html"
  },
  {
    id: 568,
      row: "Arcade",
    title: "Clear Vision",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclearvision.html"
  },
  {
    id: 569,
      row: "Arcade",
    title: "Clear Vision 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclearvision2.html"
  },
  {
    id: 570,
      row: "Arcade",
    title: "Clear Vision 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclearvision3.html"
  },
  {
    id: 571,
      row: "Arcade",
    title: "Clear Vision 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclearvision4.html"
  },
  {
    id: 572,
      row: "Arcade",
    title: "Clear Vision 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclearvision5.html"
  },
  {
    id: 573,
      row: "Arcade",
    title: "Call of Duty 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcod4.html"
  },
  {
    id: 574,
      row: "Arcade",
    title: "Call of Duty: Black Ops",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcodblackops.html"
  },
  {
    id: 575,
      row: "Arcade",
    title: "Call of Duty: Defiance",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcoddefiance.html"
  },
  {
    id: 576,
      row: "Shooter",
    title: "Call of Duty: Modern Warfare",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcodmodernwarfare.html"
  },
  {
    id: 577,
      row: "Strategy",
    title: "Call of Duty: World at War",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcodworldatwar.html"
  },
  {
    id: 578,
      row: "Arcade",
    title: "Colorburst 3 D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcolorburst3d.html"
  },
  {
    id: 579,
      row: "Puzzle",
    title: "Colormatch",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcolormatch.html"
  },
  {
    id: 580,
      row: "Puzzle",
    title: "Color Water Sort 3D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcolorwatersort3d.html"
  },
  {
    id: 581,
      row: "Arcade",
    title: "Conker's Bad Fur Day",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clconkersbadfurday.html"
  },
  {
    id: 582,
      row: "Arcade",
    title: "Contra",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/contra.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcontra.html"
  },
  {
    id: 583,
      row: "Simulation",
    title: "Cooking Mama",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/cookingmama.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcookingmama.html"
  },
  {
    id: 584,
      row: "Simulation",
    title: "Cooking Mama 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcookingmama2.html"
  },
  {
    id: 585,
      row: "Simulation",
    title: "Cooking Mama 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcookingmama3.html"
  },
  {
    id: 586,
      row: "Arcade",
    title: "Crash Bandicoot",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrashbandicoot.html"
  },
  {
    id: 587,
      row: "Arcade",
    title: "Crash Bandicoot 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrashbandicoot2.html"
  },
  {
    id: 588,
      row: "Racing",
    title: "Crazy Cars",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrazycars.html"
  },
  {
    id: 589,
      row: "Platformer",
    title: "Crunchball 3000",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrunchball3000.html"
  },
  {
    id: 590,
      row: "Arcade",
    title: "CS 1.6",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/counterstrike.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcs1.6.html"
  },
  {
    id: 591,
      row: "Arcade",
    title: "Curveball",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcurveball.html"
  },
  {
    id: 592,
      row: "Adventure",
    title: "Cut the Rope: Time Travel",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cuttherope.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcuttheropetimetravel.html"
  },
  {
    id: 593,
      row: "Arcade",
    title: "Dad 'n Me",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldadnme.html"
  },
  {
    id: 594,
      row: "Arcade",
    title: "Dborigins",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/dragonballdevolution.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldborigins.html"
  },
  {
    id: 595,
      row: "Arcade",
    title: "DBZ: Origins 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/dragonballdevolution.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldborigins2.html"
  },
  {
    id: 596,
      row: "Arcade",
    title: "Dragon Ball Z: Attack of the Saiyans",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldbzattacksaiyans.html"
  },
  {
    id: 597,
      row: "Arcade",
    title: "Dragon Ball Z: Devolution",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/dragonballdevolution.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldbzdevolution.html"
  },
  {
    id: 598,
      row: "Platformer",
    title: "Dragon Ball Z: Super Warriors",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldbzsuperwarriorssonic.html"
  },
  {
    id: 599,
      row: "Arcade",
    title: "Dead Zed",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeadzed.html"
  },
  {
    id: 600,
      row: "Arcade",
    title: "Dead Zed 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeadzed2.html"
  },
  {
    id: 601,
      row: "Arcade",
    title: "de Blob 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeblob2.html"
  },
  {
    id: 602,
      row: "Arcade",
    title: "Deeper Sleep",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeepersleep.html"
  },
  {
    id: 603,
      row: "Arcade",
    title: "Deep Sleep",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeepsleep.html"
  },
  {
    id: 604,
      row: "Arcade",
    title: "Defend Your Castle",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldefendyourcastle.html"
  },
  {
    id: 605,
      row: "Arcade",
    title: "Defend Your Nuts",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldefendyournuts.html"
  },
  {
    id: 606,
      row: "Arcade",
    title: "Defend Your Nuts 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldefendyournuts2.html"
  },
  {
    id: 607,
      row: "Arcade",
    title: "Dementium",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldementium.html"
  },
  {
    id: 608,
      row: "Arcade",
    title: "Diamond Hollow",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldiamondhollow.html"
  },
  {
    id: 609,
      row: "Arcade",
    title: "Diamond Hollow 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldiamondhollow2.html"
  },
  {
    id: 610,
      row: "Racing",
    title: "Diddy Kong Racing",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/diddykongracing.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldiddykongracing.html"
  },
  {
    id: 611,
      row: "Arcade",
    title: "Dig Deep",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldigdeep.html"
  },
  {
    id: 612,
      row: "Arcade",
    title: "Dig Dug",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldigdug.html"
  },
  {
    id: 613,
      row: "Arcade",
    title: "Dig Dug 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldigdug2.html"
  },
  {
    id: 614,
      row: "Arcade",
    title: "Dig Dug 26",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldigdug26.html"
  },
  {
    id: 615,
      row: "Arcade",
    title: "Digtochina",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldigtochina.html"
  },
  {
    id: 616,
      row: "Arcade",
    title: "Dinodudes",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldinodudes.html"
  },
  {
    id: 617,
      row: "Arcade",
    title: "Donkeykong",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/donkeykong.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldonkeykong.html"
  },
  {
    id: 618,
      row: "Arcade",
    title: "Donkeykong 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/donkeykong64.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldonkeykong64.html"
  },
  {
    id: 619,
      row: "Arcade",
    title: "Donkey Kong Country",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/donkeykong.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldonkeykongcountry.html"
  },
  {
    id: 620,
      row: "Arcade",
    title: "Donkey Kong Country 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/donkeykong.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldonkeykongcountry2.html"
  },
  {
    id: 621,
      row: "Arcade",
    title: "Donkey Kong (NES)",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/donkeykong.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldonkeykongnes.html"
  },
  {
    id: 622,
      row: "Puzzle",
    title: "Don't Escape",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldontescape.html"
  },
  {
    id: 623,
      row: "Puzzle",
    title: "Don't Escape 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldontescape2.html"
  },
  {
    id: 624,
      row: "Puzzle",
    title: "Don't Escape 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldontescape3.html"
  },
  {
    id: 625,
      row: "Platformer",
    title: "Doodle Jump Goober",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doodlejump.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoodlejumpgoober.html"
  },
  {
    id: 626,
      row: "Shooter",
    title: "Doom II",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doom2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoom2.html"
  },
  {
    id: 627,
      row: "Shooter",
    title: "Doom 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doom64.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoom64.html"
  },
  {
    id: 628,
      row: "Shooter",
    title: "Doompsalt",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doom2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoompsalt.html"
  },
  {
    id: 629,
      row: "Simulation",
    title: "Douchebag Life",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldouchebaglife.html"
  },
  {
    id: 630,
      row: "Arcade",
    title: "Douchebag Workout",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldouchebagworkout.html"
  },
  {
    id: 631,
      row: "Arcade",
    title: "Down the Mountain",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldownthemountain.html"
  },
  {
    id: 632,
      row: "Sports",
    title: "Dragon Ball Advance",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldragonballadvance.html"
  },
  {
    id: 633,
      row: "Multiplayer",
    title: "Drmario",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldrmario.html"
  },
  {
    id: 634,
      row: "Arcade",
    title: "Dubstep",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldubstep.html"
  },
  {
    id: 635,
      row: "Arcade",
    title: "Duckhunt",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/duckhunt.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clduckhunt.html"
  },
  {
    id: 636,
      row: "Arcade",
    title: "Duck Life 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ducklife5.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clducklfe5.html"
  },
  {
    id: 637,
      row: "Simulation",
    title: "Duck Life 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ducklife2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clducklife2.html"
  },
  {
    id: 638,
      row: "Simulation",
    title: "Duck Life 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ducklife3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clducklife3.html"
  },
  {
    id: 639,
      row: "Simulation",
    title: "Duck Life 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ducklife4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clducklife4.html"
  },
  {
    id: 640,
      row: "Arcade",
    title: "Earntodie",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/earntodie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearntodie.html"
  },
  {
    id: 641,
      row: "Arcade",
    title: "Earn to Die 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/earntodie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearntodie2.html"
  },
  {
    id: 642,
      row: "Arcade",
    title: "Earthbound",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/earthbound.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthbound.html"
  },
  {
    id: 643,
      row: "Arcade",
    title: "EarthBound 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthbound3.html"
  },
  {
    id: 644,
      row: "Arcade",
    title: "Earth Taken",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthtaken.html"
  },
  {
    id: 645,
      row: "Arcade",
    title: "Earth Taken 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthtaken2.html"
  },
  {
    id: 646,
      row: "Arcade",
    title: "Earth Taken 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthtaken3.html"
  },
  {
    id: 647,
      row: "Arcade",
    title: "Earthworm Jim",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthwormjim.html"
  },
  {
    id: 648,
      row: "Arcade",
    title: "Earthworm Jim 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthwormjim2.html"
  },
  {
    id: 649,
      row: "Arcade",
    title: "Effing Machines",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleffingmachines.html"
  },
  {
    id: 650,
      row: "Arcade",
    title: "Effing Worms",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleffingworms.html"
  },
  {
    id: 651,
      row: "Horror",
    title: "Effing Zombies",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleffingzombies.html"
  },
  {
    id: 652,
      row: "Arcade",
    title: "Electric Man 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/electricman2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clelectricman2.html"
  },
  {
    id: 653,
      row: "Arcade",
    title: "Emulator",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clemulator.html"
  },
  {
    id: 654,
      row: "Strategy",
    title: "Endless War 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clendlesswar4.html"
  },
  {
    id: 655,
      row: "Strategy",
    title: "Endless War 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clendlesswar5.html"
  },
  {
    id: 656,
      row: "Strategy",
    title: "Endless War 5: Wow",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clendlesswar5wow.html"
  },
  {
    id: 657,
      row: "Strategy",
    title: "Endless War 7",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clendlesswar7.html"
  },
  {
    id: 658,
      row: "Arcade",
    title: "Enduro",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clenduro.html"
  },
  {
    id: 659,
      row: "Puzzle",
    title: "Escape Road 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/escaperoad.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clescaperoad2.html"
  },
  {
    id: 660,
      row: "Arcade",
    title: "ET",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clet.html"
  },
  {
    id: 661,
      row: "Arcade",
    title: "Etrian Odyssey",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cletrianoddyssey.html"
  },
  {
    id: 662,
      row: "Racing",
    title: "Excitebike 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/excitebike64.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clexcitebike64.html"
  },
  {
    id: 663,
      row: "Arcade",
    title: "Factory Balls",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/factoryballs.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfactoryballs.html"
  },
  {
    id: 664,
      row: "Arcade",
    title: "Factory Balls 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/factoryballs.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfactoryballs2.html"
  },
  {
    id: 665,
      row: "Arcade",
    title: "Factory Balls 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/factoryballs.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfactoryballs3.html"
  },
  {
    id: 666,
      row: "Arcade",
    title: "Factory Balls 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/factoryballs.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfactoryballs4.html"
  },
  {
    id: 667,
      row: "Arcade",
    title: "Fairy Tail vs. One Piece",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfairytalevsonepiece.html"
  },
  {
    id: 668,
      row: "Runner",
    title: "Famidash",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfamidash.html"
  },
  {
    id: 669,
      row: "Platformer",
    title: "Fancy Pants Adventure",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fancypantsadventures.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfancypantsadventure.html"
  },
  {
    id: 670,
      row: "Platformer",
    title: "Fancy Pants Adventure 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fancypantsadventures.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfancypantsadventure2.html"
  },
  {
    id: 671,
      row: "Platformer",
    title: "Fancy Pants Adventure 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fancypantsadventures.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfancypantsadventure3.html"
  },
  {
    id: 672,
      row: "Arcade",
    title: "Fatty Genius",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfattygenius.html"
  },
  {
    id: 673,
      row: "Arcade",
    title: "Feed Us",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pleasedontfeedme.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfeedus.html"
  },
  {
    id: 674,
      row: "Arcade",
    title: "Feed Us 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pleasedontfeedme.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfeedus2.html"
  },
  {
    id: 675,
      row: "Arcade",
    title: "Feed Us 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pleasedontfeedme.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfeedus3.html"
  },
  {
    id: 676,
      row: "Arcade",
    title: "Feed Us 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfeedus4.html"
  },
  {
    id: 677,
      row: "Arcade",
    title: "Feed Us 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfeedus5.html"
  },
  {
    id: 678,
      row: "Arcade",
    title: "FF 6",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clff6.html"
  },
  {
    id: 679,
      row: "Platformer",
    title: "Final Fantasy: Mystic Quest",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clffmysticquest.html"
  },
  {
    id: 680,
      row: "Sports",
    title: "Fifa 2000",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfifa2000.html"
  },
  {
    id: 681,
      row: "Arcade",
    title: "Final Fantasy",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasy.html"
  },
  {
    id: 682,
      row: "Arcade",
    title: "Final Fantasy II",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyII.html"
  },
  {
    id: 683,
      row: "Arcade",
    title: "Final Fantasy VI",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyVI.html"
  },
  {
    id: 684,
      row: "Arcade",
    title: "Final Fantasy VII",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyVII.html"
  },
  {
    id: 685,
      row: "Arcade",
    title: "Final Fantasy VII: The Other Tet",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyVIId2.html"
  },
  {
    id: 686,
      row: "Arcade",
    title: "Final Fantasy VII: The Other Tet 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyVIId3.html"
  },
  {
    id: 687,
      row: "Arcade",
    title: "Final Fantasy VII: The Other Tet",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyVIItheothertetrr.html"
  },
  {
    id: 688,
      row: "Arcade",
    title: "Final Fantasy Tactics",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasytactics.html"
  },
  {
    id: 689,
      row: "Arcade",
    title: "Finalninja",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/finalninja.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalninja.html"
  },
  {
    id: 690,
      row: "Arcade",
    title: "Fireboy and Watergirl 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fireboywatergirl4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireboyandwatergirl5.html"
  },
  {
    id: 691,
      row: "Arcade",
    title: "Fireboy and Watergirl 6",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fireboywatergirl4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireboyandwatergirl6.html"
  },
  {
    id: 692,
      row: "Arcade",
    title: "Fireemblem",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/fireemblem.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireemblem.html"
  },
  {
    id: 693,
      row: "Platformer",
    title: "Flood Runner",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfloodrunner.html"
  },
  {
    id: 694,
      row: "Platformer",
    title: "Flood Runner 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/floodrunner2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfloodrunner2.html"
  },
  {
    id: 695,
      row: "Platformer",
    title: "Flood Runner 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfloodrunner4.html"
  },
  {
    id: 696,
      row: "Horror",
    title: "FNAF: Animatronics",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fnaf.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfnafanimatronics.html"
  },
  {
    id: 697,
      row: "Arcade",
    title: "Freerider",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/linerider.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfreerider.html"
  },
  {
    id: 698,
      row: "Arcade",
    title: "Free Rider 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfreerider2.html"
  },
  {
    id: 699,
      row: "Arcade",
    title: "Free Rider 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfreerider3.html"
  },
  {
    id: 700,
      row: "Arcade",
    title: "Fzero",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/fzero.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfzero.html"
  },
  {
    id: 701,
      row: "Arcade",
    title: "Fzerox",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/fzerox.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfzerox.html"
  },
  {
    id: 702,
      row: "Arcade",
    title: "Galaga",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgalaga.html"
  },
  {
    id: 703,
      row: "Arcade",
    title: "Game & Watch Collection",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgameandwatchcollection.html"
  },
  {
    id: 704,
      row: "Arcade",
    title: "Gdlite",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/geometrydashlite.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgdlite.html"
  },
  {
    id: 705,
      row: "Arcade",
    title: "General Chaos",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgeneralchaos.html"
  },
  {
    id: 706,
      row: "Arcade",
    title: "Ghosttrick",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clghosttrick.html"
  },
  {
    id: 707,
      row: "Arcade",
    title: "Gimme the Airpod",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gimmetheairpod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgimmietheairpod.html"
  },
  {
    id: 708,
      row: "Arcade",
    title: "Glover",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clglover.html"
  },
  {
    id: 709,
      row: "Arcade",
    title: "Goal! South Africa",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoalsouthafrica.html"
  },
  {
    id: 710,
      row: "Arcade",
    title: "Goldeneye 007",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/goldeneye.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoldeneye007.html"
  },
  {
    id: 711,
      row: "Arcade",
    title: "Goldensun",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/goldensun.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoldensun.html"
  },
  {
    id: 712,
      row: "Sports",
    title: "Golforbit",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgolforbit.html"
  },
  {
    id: 713,
      row: "Arcade",
    title: "Goodbigtowertinysquare 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pizzatower.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoodbigtowertinysquare2.html"
  },
  {
    id: 714,
      row: "Arcade",
    title: "Grand Theft Auto Advance",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgrandtheftautoadvance.html"
  },
  {
    id: 715,
      row: "Horror",
    title: "Granny 22",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/granny2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranny22.html"
  },
  {
    id: 716,
      row: "Arcade",
    title: "Gran Turismo 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranturismo2.html"
  },
  {
    id: 717,
      row: "Arcade",
    title: "Gta",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gta3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgta.html"
  },
  {
    id: 718,
      row: "Arcade",
    title: "Gta 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgta2.html"
  },
  {
    id: 719,
      row: "Arcade",
    title: "Gta 22",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgta22.html"
  },
  {
    id: 720,
      row: "Arcade",
    title: "Gta 2 Alt",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgta2alt.html"
  },
  {
    id: 721,
      row: "Arcade",
    title: "Gtaalt",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgtaalt.html"
  },
  {
    id: 722,
      row: "Arcade",
    title: "Gtachina",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgtachina.html"
  },
  {
    id: 723,
      row: "Shooter",
    title: "Gunblood",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunblood.html"
  },
  {
    id: 724,
      row: "Shooter",
    title: "Gunmayhem 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunmayhem2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunmayhem2.html"
  },
  {
    id: 725,
      row: "Shooter",
    title: "Gunmayhem 2 Goof",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunmayhem2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunmayhem2goof.html"
  },
  {
    id: 726,
      row: "Shooter",
    title: "Gun Mayhem Redux",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunmayhemredux.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunmayhemredux.html"
  },
  {
    id: 727,
      row: "Shooter",
    title: "Gunsmoke",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunsmoke.html"
  },
  {
    id: 728,
      row: "Arcade",
    title: "Hajimeippo",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhajimeippo.html"
  },
  {
    id: 729,
      row: "Arcade",
    title: "Hanger 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhanger2.html"
  },
  {
    id: 730,
      row: "Arcade",
    title: "Harvest Moon",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/harvestmoon.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clharvestmoon.html"
  },
  {
    id: 731,
      row: "Arcade",
    title: "Harvestmoon 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/harvestmoon64.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clharvestmoon64.html"
  },
  {
    id: 732,
      row: "Horror",
    title: "Haunt the House",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhauntthehouse.html"
  },
  {
    id: 733,
      row: "Arcade",
    title: "Hidenseek",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhidenseek.html"
  },
  {
    id: 734,
      row: "Racing",
    title: "Highwaytraffic 3 D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhighwaytraffic3d.html"
  },
  {
    id: 735,
      row: "Arcade",
    title: "Hipster Kickball",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhipsterkickball.html"
  },
  {
    id: 736,
      row: "Arcade",
    title: "Hobo",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo.html"
  },
  {
    id: 737,
      row: "Arcade",
    title: "Hobo 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo2.html"
  },
  {
    id: 738,
      row: "Arcade",
    title: "Hobo 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo3.html"
  },
  {
    id: 739,
      row: "Arcade",
    title: "Hobo 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo4.html"
  },
  {
    id: 740,
      row: "Arcade",
    title: "Hobo 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo5.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo5.html"
  },
  {
    id: 741,
      row: "Arcade",
    title: "Hobo 6",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo6.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo6.html"
  },
  {
    id: 742,
      row: "Arcade",
    title: "Hobo 7",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo7.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo7.html"
  },
  {
    id: 743,
      row: "Horror",
    title: "Hobo vs. Zombies",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobovszombies.html"
  },
  {
    id: 744,
      row: "Arcade",
    title: "I Can't Believe Google Flagged Me for the Name of the File",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clicantbelievegoogleflaggedmeforthenameofthefilelol.html"
  },
  {
    id: 745,
      row: "Idle",
    title: "Idleminorzamnshes 12",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clidleminorzamnshes12.html"
  },
  {
    id: 746,
      row: "Arcade",
    title: "Impossiblequiz (1)",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/theimpossiblequiz.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/climpossiblequiz%20(1).html"
  },
  {
    id: 747,
      row: "Arcade",
    title: "The Impossible Quiz",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/theimpossiblequiz.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/climpossiblequiz.html"
  },
  {
    id: 748,
      row: "Arcade",
    title: "Impossiblequiz 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/theimpossiblequiz.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/climpossiblequiz2.html"
  },
  {
    id: 749,
      row: "Arcade",
    title: "Pokémon Inclement Emerald",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clinclementemerald.html"
  },
  {
    id: 750,
      row: "Simulation",
    title: "Infinite Craft",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/infinitecraft.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clinfinitecraft.html"
  },
  {
    id: 751,
      row: "Arcade",
    title: "Innkeeper",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clinnkeeper.html"
  },
  {
    id: 752,
      row: "Adventure",
    title: "Mario & Luigi: Bowser's Inside Story",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cavestory.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clinsidestory.html"
  },
  {
    id: 753,
      row: "Arcade",
    title: "Interactive Buddy",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/interactivebuddy.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clinteractivebuddy.html"
  },
  {
    id: 754,
      row: "Arcade",
    title: "Intospace",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clintospace.html"
  },
  {
    id: 755,
      row: "Arcade",
    title: "Intospace 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clintospace2.html"
  },
  {
    id: 756,
      row: "Arcade",
    title: "Intospace 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clintospace3.html"
  },
  {
    id: 757,
      row: "Arcade",
    title: "Iqball",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cliqball.html"
  },
  {
    id: 758,
      row: "Arcade",
    title: "Iron Soldier",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clironsoldier.html"
  },
  {
    id: 759,
      row: "Arcade",
    title: "Jacksmith",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/jacksmith.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljacksmith.html"
  },
  {
    id: 760,
      row: "Arcade",
    title: "Jet Force Gemini",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/jetforcegemini.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljetforcegemini.html"
  },
  {
    id: 761,
      row: "Strategy",
    title: "Kingdom Hearts 358/2 Days",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkingdomheartsdays.html"
  },
  {
    id: 762,
      row: "Strategy",
    title: "Kingdom Hearts Re:coded",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkingdomheartsrecoded.html"
  },
  {
    id: 763,
      row: "Arcade",
    title: "Kirby 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/kirby64.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirby64.html"
  },
  {
    id: 764,
      row: "Arcade",
    title: "Kirby & the Amazing Mirror",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbyandtheamzingmirror.html"
  },
  {
    id: 765,
      row: "Platformer",
    title: "Kirby's Adventure",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysadventure.html"
  },
  {
    id: 766,
      row: "Arcade",
    title: "Kirby's Dream Land",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/kirbysdreamland.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysdreamland.html"
  },
  {
    id: 767,
      row: "Arcade",
    title: "Kirbysdreamland 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysdreamland3.html"
  },
  {
    id: 768,
      row: "Arcade",
    title: "Kirby: Squeak Squad",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysqueaksquad.html"
  },
  {
    id: 769,
      row: "Arcade",
    title: "Kirby Super Star",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysuperstar.html"
  },
  {
    id: 770,
      row: "Arcade",
    title: "Kirby Super Star Ultra",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysuperstarultra.html"
  },
  {
    id: 771,
      row: "Arcade",
    title: "Kitten Cannon",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/kittencannon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkittencannon.html"
  },
  {
    id: 772,
      row: "Arcade",
    title: "Knifehit",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/knifehit.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clknifehit.html"
  },
  {
    id: 773,
      row: "Horror",
    title: "Knightmare Tower",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clknightmaretower.html"
  },
  {
    id: 774,
      row: "Arcade",
    title: "Koopa's Revenge",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkoopasrevenge.html"
  },
  {
    id: 775,
      row: "Arcade",
    title: "Pokémon Last Fire Red",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonfirered.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllastfirered.html"
  },
  {
    id: 776,
      row: "Arcade",
    title: "Learntofly 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/learntofly2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllearntofly2.html"
  },
  {
    id: 777,
      row: "Arcade",
    title: "Learntofly 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/learntofly3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllearntofly3.html"
  },
  {
    id: 778,
      row: "Idle",
    title: "Learn to Fly Idle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/learntoflyidle.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllearntoflyidle.html"
  },
  {
    id: 779,
      row: "Arcade",
    title: "Legobatman",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/legobatman.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegobatman.html"
  },
  {
    id: 780,
      row: "Adventure",
    title: "Legobatman 2 Superheroes",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegobatman2superheroes.html"
  },
  {
    id: 781,
      row: "Arcade",
    title: "LEGO Indiana Jones",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegoindianajones.html"
  },
  {
    id: 782,
      row: "Arcade",
    title: "Legoindianajones 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegoindianajones2.html"
  },
  {
    id: 783,
      row: "Arcade",
    title: "LEGO Ninjago",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegoninjago.html"
  },
  {
    id: 784,
      row: "Strategy",
    title: "LEGO Star Wars",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegostarwars.html"
  },
  {
    id: 785,
      row: "Arcade",
    title: "Lemmings",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllemmings.html"
  },
  {
    id: 786,
      row: "Arcade",
    title: "Lightitup",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllightitup.html"
  },
  {
    id: 787,
      row: "Arcade",
    title: "Linerider",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/linerider.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllinerider.html"
  },
  {
    id: 788,
      row: "Arcade",
    title: "The Legend of Zelda: A Link to the Past",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllinktothepast.html"
  },
  {
    id: 789,
      row: "Platformer",
    title: "Loderunner",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/rerun.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clloderunner.html"
  },
  {
    id: 790,
      row: "Arcade",
    title: "Lonewolf",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllonewolf.html"
  },
  {
    id: 791,
      row: "Arcade",
    title: "Los Angeles Shark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllosangelesshark.html"
  },
  {
    id: 792,
      row: "Arcade",
    title: "Loz 1",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clloz1.html"
  },
  {
    id: 793,
      row: "Arcade",
    title: "The Legend of Zelda: Link's Awakening",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllozlinkawakening.html"
  },
  {
    id: 794,
      row: "Arcade",
    title: "The Legend of Zelda: The Minish Cap",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllozminishcap.html"
  },
  {
    id: 795,
      row: "Arcade",
    title: "The Legend of Zelda: Oracle of Seasons",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllozoracleofseasons.html"
  },
  {
    id: 796,
      row: "Arcade",
    title: "The Legend of Zelda: Spirit Tracks",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllozspirittracks.html"
  },
  {
    id: 797,
      row: "Arcade",
    title: "Madden 93",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden93.html"
  },
  {
    id: 798,
      row: "Arcade",
    title: "Madden 94",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden94.html"
  },
  {
    id: 799,
      row: "Arcade",
    title: "Madden 95",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden95.html"
  },
  {
    id: 800,
      row: "Arcade",
    title: "Madden 96",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden96.html"
  },
  {
    id: 801,
      row: "Arcade",
    title: "Madden 98",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden98.html"
  },
  {
    id: 802,
      row: "Arcade",
    title: "Madden 99",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden99.html"
  },
  {
    id: 803,
      row: "Sports",
    title: "Madden NFL",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/footballbros.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaddenfootball.html"
  },
  {
    id: 804,
      row: "Sports",
    title: "Maddenfootball 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/footballbros.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaddenfootball64.html"
  },
  {
    id: 805,
      row: "Arcade",
    title: "Maddennfl 2000",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaddennfl2000.html"
  },
  {
    id: 806,
      row: "Arcade",
    title: "Maddennfl 2001",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaddennfl2001.html"
  },
  {
    id: 807,
      row: "Arcade",
    title: "Maddennfl 2002",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaddennfl2002.html"
  },
  {
    id: 808,
      row: "Arcade",
    title: "Madness: Accelerant",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadnessaccelerant.html"
  },
  {
    id: 809,
      row: "Shooter",
    title: "Madness Combat Defense",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadnesscombatdefense.html"
  },
  {
    id: 810,
      row: "Shooter",
    title: "Madness: Project Nexus",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadnesscombatnexus.html"
  },
  {
    id: 811,
      row: "Arcade",
    title: "Madness: Hydraulic",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadnesshydraulic.html"
  },
  {
    id: 812,
      row: "Arcade",
    title: "Madness: Retaliation",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadnessretaliation.html"
  },
  {
    id: 813,
      row: "Arcade",
    title: "Magictiles 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmagictiles3.html"
  },
  {
    id: 814,
      row: "Arcade",
    title: "The Legend of Zelda: Majora's Mask",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/majorasmask.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmajorasmask.html"
  },
  {
    id: 815,
      row: "Arcade",
    title: "Make Sure It's Closed",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/makesureitsclosed.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmakesureitsclosed.html"
  },
  {
    id: 816,
      row: "Platformer",
    title: "Mario 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmario3.html"
  },
  {
    id: 817,
      row: "Platformer",
    title: "Mario & Luigi: Superstar Saga",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmarioandluigisuperstarsaga.html"
  },
  {
    id: 818,
      row: "Sports",
    title: "Mariogolf",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariogolf.html"
  },
  {
    id: 819,
      row: "Racing",
    title: "Mariokart 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mariokartds.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariokart64.html"
  },
  {
    id: 820,
      row: "Racing",
    title: "Mario Kart DS",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mariokartds.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariokartds.html"
  },
  {
    id: 821,
      row: "Racing",
    title: "Mario Kart: Super Circuit",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mariokartds.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariokartsupercircuit.html"
  },
  {
    id: 822,
      row: "Platformer",
    title: "Mario Paint",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mariopaint.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariopaint.html"
  },
  {
    id: 823,
      row: "Multiplayer",
    title: "Mario Party 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/marioparty2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmarioparty2.html"
  },
  {
    id: 824,
      row: "Multiplayer",
    title: "Mario Party 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/marioparty3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmarioparty3.html"
  },
  {
    id: 825,
      row: "Multiplayer",
    title: "Mario Party DS",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mariopartyds.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariopartyds.html"
  },
  {
    id: 826,
      row: "Platformer",
    title: "Mario's Mystery Meat",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariosmysterymeat.html"
  },
  {
    id: 827,
      row: "Sports",
    title: "Mario Tennis",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariotennis.html"
  },
  {
    id: 828,
      row: "Arcade",
    title: "Matrix Rampage",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmatrixrampage.html"
  },
  {
    id: 829,
      row: "Racing",
    title: "Mcraerally",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmcraerally.html"
  },
  {
    id: 830,
      row: "Arcade",
    title: "Medieval Shark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmedievalshark.html"
  },
  {
    id: 831,
      row: "Arcade",
    title: "Megaman",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman.html"
  },
  {
    id: 832,
      row: "Arcade",
    title: "Megaman 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/megaman2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman2.html"
  },
  {
    id: 833,
      row: "Arcade",
    title: "Megaman 2 Gba",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman2gba.html"
  },
  {
    id: 834,
      row: "Arcade",
    title: "Megaman 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman3.html"
  },
  {
    id: 835,
      row: "Arcade",
    title: "Megaman 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman4.html"
  },
  {
    id: 836,
      row: "Arcade",
    title: "Megaman 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman5.html"
  },
  {
    id: 837,
      row: "Arcade",
    title: "Megaman 6",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman6.html"
  },
  {
    id: 838,
      row: "Arcade",
    title: "Megaman 8",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman8.html"
  },
  {
    id: 839,
      row: "Arcade",
    title: "Megamanx",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/megamanx.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanx.html"
  },
  {
    id: 840,
      row: "Arcade",
    title: "Megamanx 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanx2.html"
  },
  {
    id: 841,
      row: "Arcade",
    title: "Megamanx 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanx3.html"
  },
  {
    id: 842,
      row: "Arcade",
    title: "Megamanx 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanx4.html"
  },
  {
    id: 843,
      row: "Arcade",
    title: "Mega Man Zero",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/megamanzero.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanzero.html"
  },
  {
    id: 844,
      row: "Arcade",
    title: "Megamanzx",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanzx.html"
  },
  {
    id: 845,
      row: "Arcade",
    title: "Megaminer",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaminer.html"
  },
  {
    id: 846,
      row: "Arcade",
    title: "Metalgear",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalgear.html"
  },
  {
    id: 847,
      row: "Arcade",
    title: "Metal Gear Solid",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/metalgearsolid.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalgearsolid.html"
  },
  {
    id: 848,
      row: "Arcade",
    title: "Metal Gear Solid (PS1)",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalgearsolidps.html"
  },
  {
    id: 849,
      row: "Arcade",
    title: "Metal Slug Advance",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalslugadvance.html"
  },
  {
    id: 850,
      row: "Arcade",
    title: "Metalslugmission 1",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalslugmission1.html"
  },
  {
    id: 851,
      row: "Arcade",
    title: "Metalslugmission 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalslugmission2.html"
  },
  {
    id: 852,
      row: "Platformer",
    title: "Metroid",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/metroid.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetroid.html"
  },
  {
    id: 853,
      row: "Platformer",
    title: "Metroid 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/metroidzeromission.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetroid2.html"
  },
  {
    id: 854,
      row: "Platformer",
    title: "Metroid Fusion",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/metroidzeromission.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetroidfusion.html"
  },
  {
    id: 855,
      row: "Platformer",
    title: "Metroid: Zero Mission",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/metroidzeromission.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetroidzeromission.html"
  },
  {
    id: 856,
      row: "Arcade",
    title: "Miamishark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmiamishark.html"
  },
  {
    id: 857,
      row: "Arcade",
    title: "Mighty Knight",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunknight.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmightyknight.html"
  },
  {
    id: 858,
      row: "Arcade",
    title: "Mightyknight 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunknight.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmightyknight2.html"
  },
  {
    id: 859,
      row: "Adventure",
    title: "Minhero",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clminhero.html"
  },
  {
    id: 860,
      row: "Arcade",
    title: "Minimart",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clminimart.html"
  },
  {
    id: 861,
      row: "Strategy",
    title: "Miragine War",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmiraginewar.html"
  },
  {
    id: 862,
      row: "Arcade",
    title: "Missile Command",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmisslecommand.html"
  },
  {
    id: 863,
      row: "Arcade",
    title: "Mobcontrolhtml 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmobcontrolhtml5.html"
  },
  {
    id: 864,
      row: "Arcade",
    title: "Mobius: Revolution",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmobiusrevolution.html"
  },
  {
    id: 865,
      row: "Arcade",
    title: "Mortal Kombat",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmortalkombat.html"
  },
  {
    id: 866,
      row: "Arcade",
    title: "Mortalkombat 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmortalkombat2.html"
  },
  {
    id: 867,
      row: "Arcade",
    title: "Mortalkombat 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmortalkombat3.html"
  },
  {
    id: 868,
      row: "Arcade",
    title: "Mortal Kombat Advance",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmortalkombatadvance.html"
  },
  {
    id: 869,
      row: "Arcade",
    title: "Motherload",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotherload.html"
  },
  {
    id: 870,
      row: "Arcade",
    title: "Multitask",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/multitask.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmultitask.html"
  },
  {
    id: 871,
      row: "Arcade",
    title: "Mutilate A Doll",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmutilate-a-doll.html"
  },
  {
    id: 872,
      row: "Arcade",
    title: "My Friend Pedro",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmyfriendpedro.html"
  },
  {
    id: 873,
      row: "Arcade",
    title: "My Friend Pedro: Arena",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmyfriendpedroarena.html"
  },
  {
    id: 874,
      row: "Arcade",
    title: "N",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cln.html"
  },
  {
    id: 875,
      row: "Sports",
    title: "Nbajam TE",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnbajamTE.html"
  },
  {
    id: 876,
      row: "Arcade",
    title: "Newgrounds Rumble",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnewgroundsrumble.html"
  },
  {
    id: 877,
      row: "Platformer",
    title: "New Super Mario Bros.",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnewsupermariobros.html"
  },
  {
    id: 878,
      row: "Arcade",
    title: "New York Shark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnewyorkshark.html"
  },
  {
    id: 879,
      row: "Arcade",
    title: "Nflblitz",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnflblitz.html"
  },
  {
    id: 880,
      row: "Racing",
    title: "Need for Speed: Carbon – Own the City",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnfscarbonowncity.html"
  },
  {
    id: 881,
      row: "Arcade",
    title: "Need for Speed: Most Wanted",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/driver.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnfsmostwanted.html"
  },
  {
    id: 882,
      row: "Arcade",
    title: "Need for Speed: Porsche Unleashed",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/driver.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnfsporcheunleashed.html"
  },
  {
    id: 883,
      row: "Arcade",
    title: "Need for Speed: Underground",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/driver.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnfsunderground.html"
  },
  {
    id: 884,
      row: "Arcade",
    title: "Nfsunderground 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/driver.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnfsunderground2.html"
  },
  {
    id: 885,
      row: "Arcade",
    title: "Nhl 2002",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnhl2002.html"
  },
  {
    id: 886,
      row: "Arcade",
    title: "Nhlhitz 2003",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnhlhitz2003.html"
  },
  {
    id: 887,
      row: "Arcade",
    title: "Nightfire",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnightfire.html"
  },
  {
    id: 888,
      row: "Arcade",
    title: "Nintendogs",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/nintendogs.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnintendogslab.html"
  },
  {
    id: 889,
      row: "Arcade",
    title: "Nintendo World Cup",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/asmallworldcup.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnintendoworldcup.html"
  },
  {
    id: 890,
      row: "Arcade",
    title: "Nitrome Must Die",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/nitromemustdie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnitromemustdie.html"
  },
  {
    id: 891,
      row: "Arcade",
    title: "Nomoregameasdsadfagfggdfs",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnomoregameasdsadfagfggdfs.html"
  },
  {
    id: 892,
      row: "Arcade",
    title: "Nplus",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/portaboyplus.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnplus.html"
  },
  {
    id: 893,
      row: "Arcade",
    title: "Obeythegame",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clobeythegame.html"
  },
  {
    id: 894,
      row: "Racing",
    title: "The Legend of Zelda: Ocarina of Time",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ocarinaoftime.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clocarinaoftime.html"
  },
  {
    id: 895,
      row: "Arcade",
    title: "Onepiece",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clonepiece.html"
  },
  {
    id: 896,
      row: "Arcade",
    title: "One Piece Fighting",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clonepiecefighting.html"
  },
  {
    id: 897,
      row: "Platformer",
    title: "Ordinary Sonic ROM Hack",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clordinarysonicromhack.html"
  },
  {
    id: 898,
      row: "Arcade",
    title: "Ormmimastickwithclsoitcanberememberedoyeahclalienhominid",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/alienhominid.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clormmimastickwithclsoitcanberememberedoyeahclalienhominid.html"
  },
  {
    id: 899,
      row: "Arcade",
    title: "Ovofixed",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ovo.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clovofixed.html"
  },
  {
    id: 900,
      row: "Simulation",
    title: "Papabakeria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papasbakeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapabakeria.html"
  },
  {
    id: 901,
      row: "Simulation",
    title: "Papa's Donuteria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papasdonuteria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapadonut.html"
  },
  {
    id: 902,
      row: "Simulation",
    title: "Papalouienighthunt 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papalouie2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapalouienighthunt2.html"
  },
  {
    id: 903,
      row: "Simulation",
    title: "Papa Louie: When Burgers Attack!",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papalouie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapalouiewhenburgersattack.html"
  },
  {
    id: 904,
      row: "Simulation",
    title: "Papa Louie: When Pizza Attacks!",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papalouie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapalouiewhenpizzasattack.html"
  },
  {
    id: 905,
      row: "Simulation",
    title: "Papa Louie: When Sundaes Attack!",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papalouie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapalouiewhensundaesattack.html"
  },
  {
    id: 906,
      row: "Simulation",
    title: "Papa's Pizzeria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papaspizzeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapapizzagood.html"
  },
  {
    id: 907,
      row: "Simulation",
    title: "Papasburger Iiiaaaaa",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papasburgeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapasburgerIIIAAAAA.html"
  },
  {
    id: 908,
      row: "Simulation",
    title: "Papa's Hot Doggeria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papashotdoggeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapashotdoggeria.html"
  },
  {
    id: 909,
      row: "Simulation",
    title: "Papa's Pancakeria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papaspancakeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapaspancakeria.html"
  },
  {
    id: 910,
      row: "Simulation",
    title: "Papa's Pastaria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papaspastaria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapaspastaria.html"
  },
  {
    id: 911,
      row: "Simulation",
    title: "Papa's Scooperia",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papasscooperia.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapasscooperia.html"
  },
  {
    id: 912,
      row: "Simulation",
    title: "Papa's Sushiria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papassushiria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapassushiria.html"
  },
  {
    id: 913,
      row: "Simulation",
    title: "Papa's Taco Mia",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papastacomia.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapastacomia.html"
  },
  {
    id: 914,
      row: "Simulation",
    title: "Papa's Wingeria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papaswingeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapaswingeria.html"
  },
  {
    id: 915,
      row: "Multiplayer",
    title: "Paper Mario",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papermario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapermario.html"
  },
  {
    id: 916,
      row: "Platformer",
    title: "Paper Mario: Pro Mode",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papermario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapermariopromode.html"
  },
  {
    id: 917,
      row: "Platformer",
    title: "Paper Mario: The Thousand-Year Door",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papermario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapermariottyd.html"
  },
  {
    id: 918,
      row: "Arcade",
    title: "PaRappa the Rapper",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clparappatherapper.html"
  },
  {
    id: 919,
      row: "Arcade",
    title: "PaRappa the Rapper (Alt)",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clparappatherapperalt.html"
  },
  {
    id: 920,
      row: "Arcade",
    title: "Mario & Luigi: Partners in Time",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpartnersintime.html"
  },
  {
    id: 921,
      row: "Arcade",
    title: "Penalty Kicks",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpenaltykicks.html"
  },
  {
    id: 922,
      row: "Arcade",
    title: "Penguinpass",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpenguinpass.html"
  },
  {
    id: 923,
      row: "Simulation",
    title: "Pepsiman",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpepsiman.html"
  },
  {
    id: 924,
      row: "Simulation",
    title: "Pepsimanalt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpepsimanalt.html"
  },
  {
    id: 925,
      row: "Arcade",
    title: "Perfectdark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clperfectdark.html"
  },
  {
    id: 926,
      row: "Arcade",
    title: "Persona",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpersona.html"
  },
  {
    id: 927,
      row: "Arcade",
    title: "Persona 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpersona2.html"
  },
  {
    id: 928,
      row: "Arcade",
    title: "Persona 2 Alt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpersona2alt.html"
  },
  {
    id: 929,
      row: "Arcade",
    title: "Personaalt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpersonaalt.html"
  },
  {
    id: 930,
      row: "Arcade",
    title: "Phoenix Wright: Justice for All",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpheonixjusticeforall.html"
  },
  {
    id: 931,
      row: "Arcade",
    title: "Phoenix Wright: Trials and Tribulations",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpheonixtrialsandyeartrhfasd.html"
  },
  {
    id: 932,
      row: "Arcade",
    title: "Pico 8",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpico8.html"
  },
  {
    id: 933,
      row: "Simulation",
    title: "Picosschool",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpicosschool.html"
  },
  {
    id: 934,
      row: "Arcade",
    title: "Pitfall",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/justfalllol.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpitfall.html"
  },
  {
    id: 935,
      row: "Platformer",
    title: "Pixel Quest: The Lost Idols",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpixelquestlostidols.html"
  },
  {
    id: 936,
      row: "Racing",
    title: "Pixel Speedrun",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpixelspeedrun.html"
  },
  {
    id: 937,
      row: "Simulation",
    title: "Pizzapapa",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpizzapapa.html"
  },
  {
    id: 938,
      row: "Arcade",
    title: "Plazmaburst",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clplazmaburst.html"
  },
  {
    id: 939,
      row: "Arcade",
    title: "Pokeblack",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonblack.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeblack.html"
  },
  {
    id: 940,
      row: "Arcade",
    title: "Pokeblack 2.html",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonblack2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeblack2.html.html"
  },
  {
    id: 941,
      row: "Arcade",
    title: "Pokeblazeblack 2 Redux",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonblack2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeblazeblack2redux.html"
  },
  {
    id: 942,
      row: "Arcade",
    title: "Pokeblue",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonblue.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeblue.html"
  },
  {
    id: 943,
      row: "Arcade",
    title: "Pokediamond",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemondiamond.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokediamond.html"
  },
  {
    id: 944,
      row: "Arcade",
    title: "Pokémon Emerald Randomizer",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeemeraldrandom.html"
  },
  {
    id: 945,
      row: "Arcade",
    title: "Pokegaia",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokegaia.html"
  },
  {
    id: 946,
      row: "Arcade",
    title: "Pokémon HeartGold",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonheartgold.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeheartgold.html"
  },
  {
    id: 947,
      row: "Arcade",
    title: "Pokémon Light Platinum",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonplatinum.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokelightplatinum.html"
  },
  {
    id: 948,
      row: "Arcade",
    title: "Pokémon Clover",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonclover.html"
  },
  {
    id: 949,
      row: "Arcade",
    title: "Pokémon Crystal",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemoncrystal.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemoncrystal.html"
  },
  {
    id: 950,
      row: "Arcade",
    title: "Pokémon Emerald",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemerald.html"
  },
  {
    id: 951,
      row: "Arcade",
    title: "Pokémon Emerald Crest",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemeraldcrest.html"
  },
  {
    id: 952,
      row: "Arcade",
    title: "Pokémon Emerald Imperium",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemeraldimperium.html"
  },
  {
    id: 953,
      row: "Arcade",
    title: "Pokémon Emerald Kaizo",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemeraldkaizo.html"
  },
  {
    id: 954,
      row: "Arcade",
    title: "Pokémon Emerald Mini",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemeraldmini.html"
  },
  {
    id: 955,
      row: "Arcade",
    title: "Pokémon Emerald Seaglass",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemeraldseaglass.html"
  },
  {
    id: 956,
      row: "Arcade",
    title: "Pokémon Energized Emerald",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonenergizedemerald.html"
  },
  {
    id: 957,
      row: "Arcade",
    title: "Pokémon Evolved",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonevolvedsfdgsdfs.html"
  },
  {
    id: 958,
      row: "Arcade",
    title: "Pokémon FireRed",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonfirered.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonfirered.html"
  },
  {
    id: 959,
      row: "Arcade",
    title: "Pokémon FireRed & LeafGreen Plus",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonfirered.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonfireredandleafgreenplusedition.html"
  },
  {
    id: 960,
      row: "Arcade",
    title: "Pokémon FireRed (Randomized)",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonfirered.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonfireredrandomized.html"
  },
  {
    id: 961,
      row: "Arcade",
    title: "Pokémon Gold",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemongold.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemongold.html"
  },
  {
    id: 962,
      row: "Arcade",
    title: "Pokémon LeafGreen",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonleafgreen.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonleafgreen.html"
  },
  {
    id: 963,
      row: "Arcade",
    title: "Pokémon Mystery Dungeon",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonmysterydungeon.html"
  },
  {
    id: 964,
      row: "Arcade",
    title: "Pokémon Quetzal",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonquetzal.html"
  },
  {
    id: 965,
      row: "Arcade",
    title: "Pokémon Ruby",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonruby.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonruby.html"
  },
  {
    id: 966,
      row: "Arcade",
    title: "Pokémon Sapphire",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonsapphire.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonsapphire.html"
  },
  {
    id: 967,
      row: "Arcade",
    title: "Pokémon Silver",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonsilver.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonsilver.html"
  },
  {
    id: 968,
      row: "Arcade",
    title: "Pokémon Snap",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/pokemonsnap.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonsnap.html"
  },
  {
    id: 969,
      row: "Arcade",
    title: "Pokémon Stadium",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/pokemonstadium.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonstadium.html"
  },
  {
    id: 970,
      row: "Strategy",
    title: "Pokémon Tower Defense",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemontowerdefense.html"
  },
  {
    id: 971,
      row: "Arcade",
    title: "Pokémon Ultimate Fusion",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonultimatefusion.html"
  },
  {
    id: 972,
      row: "Arcade",
    title: "Pokémon Unbound",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/pokemonunbound.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonunbound.html"
  },
  {
    id: 973,
      row: "Arcade",
    title: "Pokémon Vega",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonvega.html"
  },
  {
    id: 974,
      row: "Arcade",
    title: "Pokémon Mystery Dungeon: Explorers of Sky",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemysteryexplorersofsky.html"
  },
  {
    id: 975,
      row: "Arcade",
    title: "Pokepearl",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonpearl.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokepearl.html"
  },
  {
    id: 976,
      row: "Arcade",
    title: "Pokémon Platinum",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonplatinum.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeplatinum.html"
  },
  {
    id: 977,
      row: "Arcade",
    title: "Pokémon Platinum (Randomized)",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonplatinum.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeplatinumrandomized.html"
  },
  {
    id: 978,
      row: "Arcade",
    title: "Pokered",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonred.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokered.html"
  },
  {
    id: 979,
      row: "Platformer",
    title: "Pokémon Run & Bun",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/rerun.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokerunandbun.html"
  },
  {
    id: 980,
      row: "Arcade",
    title: "Pokevoltwhite 2 Redux",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonwhite2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokevoltwhite2redux.html"
  },
  {
    id: 981,
      row: "Arcade",
    title: "Pokémon Voyager",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokevoyager.html"
  },
  {
    id: 982,
      row: "Arcade",
    title: "Pokewhite",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonwhite.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokewhite.html"
  },
  {
    id: 983,
      row: "Arcade",
    title: "Pokewhite 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonwhite2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokewhite2.html"
  },
  {
    id: 984,
      row: "Arcade",
    title: "Pokeyellow",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonyellow.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeyellow.html"
  },
  {
    id: 985,
      row: "Arcade",
    title: "Portal: The Flash Version",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clportalflash.html"
  },
  {
    id: 986,
      row: "Arcade",
    title: "Potatoman Seeks the Troof",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpotatomanseeksthetroof.html"
  },
  {
    id: 987,
      row: "Arcade",
    title: "Pre-Civilization: Bronze Age",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clprebronzeage.html"
  },
  {
    id: 988,
      row: "Arcade",
    title: "Prehistoric Shark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clprehistoricshark.html"
  },
  {
    id: 989,
      row: "Arcade",
    title: "Primary",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clprimary.html"
  },
  {
    id: 990,
      row: "Arcade",
    title: "Punchout",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpunchout.html"
  },
  {
    id: 991,
      row: "Arcade",
    title: "Punch the Trump",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpunchthedrump.html"
  },
  {
    id: 992,
      row: "Arcade",
    title: "Puyo Puyo Fever",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpuyopuyofever.html"
  },
  {
    id: 993,
      row: "Arcade",
    title: "Pvz",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pvzhybridstorymod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpvz.html"
  },
  {
    id: 994,
      row: "Arcade",
    title: "Qbert",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clqbert.html"
  },
  {
    id: 995,
      row: "Arcade",
    title: "Quickie World",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clquickieworld.html"
  },
  {
    id: 996,
      row: "Arcade",
    title: "Qwop",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clqwop.html"
  },
  {
    id: 997,
      row: "Racing",
    title: "Racingarena",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clracingarena.html"
  },
  {
    id: 998,
      row: "Arcade",
    title: "Radicalred",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonfirered.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clradicalred.html"
  },
  {
    id: 999,
      row: "Racing",
    title: "Radracer",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clradracer.html"
  },
  {
    id: 1000,
      row: "Strategy",
    title: "Raft Wars",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/raftwars.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clraftwars.html"
  },
  {
    id: 1001,
      row: "Multiplayer",
    title: "Ragdollio",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clragdollio.html"
  },
  {
    id: 1002,
      row: "Arcade",
    title: "Rainbowsix",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrainbowsix.html"
  },
  {
    id: 1003,
      row: "Platformer",
    title: "Rayman",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrayman.html"
  },
  {
    id: 1004,
      row: "Arcade",
    title: "Raze",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clraze.html"
  },
  {
    id: 1005,
      row: "Arcade",
    title: "Reach the Core",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clreachthecore.html"
  },
  {
    id: 1006,
      row: "Arcade",
    title: "Red Ball",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/redball.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredball.html"
  },
  {
    id: 1007,
      row: "Arcade",
    title: "Redball 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/redball.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredball2.html"
  },
  {
    id: 1008,
      row: "Arcade",
    title: "Redball 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/redball3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredball3.html"
  },
  {
    id: 1009,
      row: "Arcade",
    title: "Redball 4 Vol 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/redball4v2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredball4vol2.html"
  },
  {
    id: 1010,
      row: "Arcade",
    title: "Redball 4 Vol 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/redball4v3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredball4vol3.html"
  },
  {
    id: 1011,
      row: "Arcade",
    title: "Reign of the Centipede",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clreignofcentipede.html"
  },
  {
    id: 1012,
      row: "Arcade",
    title: "Renegades",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrenegades.html"
  },
  {
    id: 1013,
      row: "Horror",
    title: "Resident Evil 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clresidentevil2.html"
  },
  {
    id: 1014,
      row: "Puzzle",
    title: "Resort Empire",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clresortempire.html"
  },
  {
    id: 1015,
      row: "Arcade",
    title: "Returnman",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clreturnman.html"
  },
  {
    id: 1016,
      row: "Arcade",
    title: "Returnman 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clreturnman2.html"
  },
  {
    id: 1017,
      row: "Arcade",
    title: "Rhythm Heaven",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrhythymymheaven.html"
  },
  {
    id: 1018,
      row: "Simulation",
    title: "Riddle School",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/riddleschool.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddleschool.html"
  },
  {
    id: 1019,
      row: "Simulation",
    title: "Riddleschool 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/riddleschool2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddleschool2.html"
  },
  {
    id: 1020,
      row: "Simulation",
    title: "Riddleschool 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/riddleschool3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddleschool3.html"
  },
  {
    id: 1021,
      row: "Simulation",
    title: "Riddleschool 445544444$444$444",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddleschool445544444%24%24444%24444.html"
  },
  {
    id: 1022,
      row: "Arcade",
    title: "Riddle Transfer",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/riddleschooltransfer.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddletransfer.html"
  },
  {
    id: 1023,
      row: "Arcade",
    title: "Riddletransfer 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/riddleschooltransfer2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddletransfer2.html"
  },
  {
    id: 1024,
      row: "Racing",
    title: "Ridgeracer",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clridgeracer.html"
  },
  {
    id: 1025,
      row: "Arcade",
    title: "Roadoffury",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clroadoffury.html"
  },
  {
    id: 1026,
      row: "Arcade",
    title: "Road of the Dead",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clroadofthedead.html"
  },
  {
    id: 1027,
      row: "Platformer",
    title: "Rocket Knight Adventures",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrocketknightadventures.html"
  },
  {
    id: 1028,
      row: "Arcade",
    title: "Rocketpult",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrocketpult.html"
  },
  {
    id: 1029,
      row: "Arcade",
    title: "Roguesoul",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clroguesoul.html"
  },
  {
    id: 1030,
      row: "Arcade",
    title: "Roguesoul 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clroguesoul2.html"
  },
  {
    id: 1031,
      row: "Arcade",
    title: "Rotate",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrotate.html"
  },
  {
    id: 1032,
      row: "Arcade",
    title: "Ruffle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ruffle.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clruffle.html"
  },
  {
    id: 1033,
      row: "Platformer",
    title: "Run",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/run.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrun.html"
  },
  {
    id: 1034,
      row: "Platformer",
    title: "Run 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/run2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrun2.html"
  },
  {
    id: 1035,
      row: "Arcade",
    title: "Sands of the Coliseum",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsandsofthecoliseum.html"
  },
  {
    id: 1036,
      row: "Arcade",
    title: "Scribblenauts",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/scribblenauts.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clscribblenauts.html"
  },
  {
    id: 1037,
      row: "Arcade",
    title: "Secret of Mana",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsecretofmana.html"
  },
  {
    id: 1038,
      row: "Arcade",
    title: "Shc 1",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshc1.html"
  },
  {
    id: 1039,
      row: "Arcade",
    title: "Shc 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshc2.html"
  },
  {
    id: 1040,
      row: "Arcade",
    title: "Shc 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshc3.html"
  },
  {
    id: 1041,
      row: "Horror",
    title: "Shin Megami Tensei: Devil Survivor",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshinmegamitenseidevilsurvivor.html"
  },
  {
    id: 1042,
      row: "Arcade",
    title: "Shrek 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/shrek2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshrek2.html"
  },
  {
    id: 1043,
      row: "Arcade",
    title: "Shwultimatem",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshwultimatem.html"
  },
  {
    id: 1044,
      row: "Arcade",
    title: "Sidepocket",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsidepocket.html"
  },
  {
    id: 1045,
      row: "Arcade",
    title: "Silenthill",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsilenthill.html"
  },
  {
    id: 1046,
      row: "Sports",
    title: "Skateit",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/skate.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clskateit.html"
  },
  {
    id: 1047,
      row: "Runner",
    title: "Skibididibidygyattohiorizzingallovertheplacestillwatermangotheoryfemboydrool",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clskibididibidygyattohiorizzingallovertheplacestillwatermangotheoryfemboydrool.html"
  },
  {
    id: 1048,
      row: "Arcade",
    title: "Slime Laboratory",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslimelabratory.html"
  },
  {
    id: 1049,
      row: "Arcade",
    title: "Smadvance 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsmadvance2.html"
  },
  {
    id: 1050,
      row: "Arcade",
    title: "Smadvance 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsmadvance3.html"
  },
  {
    id: 1051,
      row: "Arcade",
    title: "Smashremix",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsmashremix.html"
  },
  {
    id: 1052,
      row: "Arcade",
    title: "Super Mario Bros. Crossover",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsmbcrossover.html"
  },
  {
    id: 1053,
      row: "Arcade",
    title: "Snailbob",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnailbob.html"
  },
  {
    id: 1054,
      row: "Arcade",
    title: "Snakeis",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/snake.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnakeis.html"
  },
  {
    id: 1055,
      row: "Arcade",
    title: "Solitaire",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/solitaire.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsolitaire.html"
  },
  {
    id: 1056,
      row: "Platformer",
    title: "Sonic 1 Contemporary",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonic1contemporary.html"
  },
  {
    id: 1057,
      row: "Platformer",
    title: "Sonic 3 Andknuckles",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonic3andknuckles.html"
  },
  {
    id: 1058,
      row: "Platformer",
    title: "Sonic 3 Complete",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonic3complete.html"
  },
  {
    id: 1059,
      row: "Platformer",
    title: "Sonic 3 Dblastdx",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonic3dblastdx.html"
  },
  {
    id: 1060,
      row: "Platformer",
    title: "Sonic Advance",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonicadvance.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicadvance.html"
  },
  {
    id: 1061,
      row: "Platformer",
    title: "Sonicadvance 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonicadvance2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicadvance2.html"
  },
  {
    id: 1062,
      row: "Platformer",
    title: "Sonicadvance 2 SP",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonicadvance2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicadvance2sp.html"
  },
  {
    id: 1063,
      row: "Platformer",
    title: "Sonicadvance 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonicadvance3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicadvance3.html"
  },
  {
    id: 1064,
      row: "Platformer",
    title: "Sonic & Knuckles",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonicandknuckles.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicandknuckles.html"
  },
  {
    id: 1065,
      row: "Platformer",
    title: "Sonic Battle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicbattle.html"
  },
  {
    id: 1066,
      row: "Platformer",
    title: "Sonic Classic Collection",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicclassiccollection.html"
  },
  {
    id: 1067,
      row: "Platformer",
    title: "Sonic Classic Heroes",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicclassicheroes.html"
  },
  {
    id: 1068,
      row: "Platformer",
    title: "Sonic Colors",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsoniccolors.html"
  },
  {
    id: 1069,
      row: "Platformer",
    title: "Sonic Delta Origins",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicdeltaorigins.html"
  },
  {
    id: 1070,
      row: "Platformer",
    title: "Sonicjam",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicjam.html"
  },
  {
    id: 1071,
      row: "Platformer",
    title: "Sonic Megamix",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicmegamix.html"
  },
  {
    id: 1072,
      row: "Platformer",
    title: "Sonicr",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicr.html"
  },
  {
    id: 1073,
      row: "Platformer",
    title: "Sonicralt",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicralt.html"
  },
  {
    id: 1074,
      row: "Platformer",
    title: "Sonicrush",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicrush.html"
  },
  {
    id: 1075,
      row: "Platformer",
    title: "Sonic Rush Adventure",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicrushadventure.html"
  },
  {
    id: 1076,
      row: "Sports",
    title: "Sonic Spinball",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicspinball.html"
  },
  {
    id: 1077,
      row: "Platformer",
    title: "Sonic the Hedgehog",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicthehedgehog.html"
  },
  {
    id: 1078,
      row: "Platformer",
    title: "Sonic the Hedgehog 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicthehedgehog2.html"
  },
  {
    id: 1079,
      row: "Platformer",
    title: "Sonic the Hedgehog 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicthehedgehog3.html"
  },
  {
    id: 1080,
      row: "Arcade",
    title: "Space Invaders",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/spaceinvaders.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspaceinvaders.html"
  },
  {
    id: 1081,
      row: "Arcade",
    title: "Spaceiskey",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspaceiskey.html"
  },
  {
    id: 1082,
      row: "Arcade",
    title: "Spaceiskey 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspaceiskey2.html"
  },
  {
    id: 1083,
      row: "Arcade",
    title: "Space Is Key: Christmas",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspaceiskeyxmas.html"
  },
  {
    id: 1084,
      row: "Runner",
    title: "Stackydash",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstackydash.html"
  },
  {
    id: 1085,
      row: "Arcade",
    title: "Starfox",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/starfox64.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstarfox.html"
  },
  {
    id: 1086,
      row: "Arcade",
    title: "Starfox 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/starfox64.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstarfox64.html"
  },
  {
    id: 1087,
      row: "Arcade",
    title: "Star Raiders",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstarraiders.html"
  },
  {
    id: 1088,
      row: "Arcade",
    title: "Stealth Assassin",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstealthassassin.html"
  },
  {
    id: 1089,
      row: "Strategy",
    title: "Steel Empire",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsteelempire.html"
  },
  {
    id: 1090,
      row: "Platformer",
    title: "Stickman Stealing the Diamond",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickmanstealingdiamond.html"
  },
  {
    id: 1091,
      row: "Arcade",
    title: "Henry Stickmin: Infiltrating the Airship",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickminairship.html"
  },
  {
    id: 1092,
      row: "Arcade",
    title: "Henry Stickmin: Breaking the Bank",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickminbreakingbank.html"
  },
  {
    id: 1093,
      row: "Arcade",
    title: "Henry Stickmin: Escaping the Prison",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickminescapingprison.html"
  },
  {
    id: 1094,
      row: "Arcade",
    title: "Henry Stickmin: Fleeing the Complex",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickminfleecomplex.html"
  },
  {
    id: 1095,
      row: "Arcade",
    title: "Stick RPG Complete",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickrpgcomplete.html"
  },
  {
    id: 1096,
      row: "Strategy",
    title: "Stickwar",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/stickwar.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickwar.html"
  },
  {
    id: 1097,
      row: "Simulation",
    title: "Storm the House",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstormthehouse.html"
  },
  {
    id: 1098,
      row: "Simulation",
    title: "Stormthehouse 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstormthehouse3.html"
  },
  {
    id: 1099,
      row: "Arcade",
    title: "Streetfighter 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/streetfighter2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstreetfighter2.html"
  },
  {
    id: 1100,
      row: "Arcade",
    title: "Streetfighter 2 Turbo",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstreetfighter2turbo.html"
  },
  {
    id: 1101,
      row: "Arcade",
    title: "Streetfighteralpha 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstreetfighteralpha3.html"
  },
  {
    id: 1102,
      row: "Shooter",
    title: "Strike Force Heroes",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstrikeforceheroes.html"
  },
  {
    id: 1103,
      row: "Shooter",
    title: "Strikeforceheroes 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstrikeforceheroes2.html"
  },
  {
    id: 1104,
      row: "Shooter",
    title: "Strikeforceheroes 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstrikeforceheroes3.html"
  },
  {
    id: 1105,
      row: "Arcade",
    title: "Sugarsugar",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsugarsugar.html"
  },
  {
    id: 1106,
      row: "Arcade",
    title: "Super Bomberman",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/superbomberman.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperbomberman.html"
  },
  {
    id: 1107,
      row: "Arcade",
    title: "Supercastlevania VI",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupercastlevaniaVI.html"
  },
  {
    id: 1108,
      row: "Arcade",
    title: "Super Chibi Knight",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperchibiknight.html"
  },
  {
    id: 1109,
      row: "Platformer",
    title: "Superdiagonalmario 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperdiagonalmario2.html"
  },
  {
    id: 1110,
      row: "Arcade",
    title: "Superfighters",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperfighters.html"
  },
  {
    id: 1111,
      row: "Simulation",
    title: "Super House of Dead Ninjas",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperhouseofdeadninjas.html"
  },
  {
    id: 1112,
      row: "Multiplayer",
    title: "Supermario",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermario.html"
  },
  {
    id: 1113,
      row: "Platformer",
    title: "Supermario 63",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario63.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermario63.html"
  },
  {
    id: 1114,
      row: "Platformer",
    title: "Supermario 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/supermario64.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermario64.html"
  },
  {
    id: 1115,
      row: "Platformer",
    title: "Supermario 64 DS",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/supermario64ds.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermario64ds.html"
  },
  {
    id: 1116,
      row: "Platformer",
    title: "Super Mario All-Stars",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermarioallstars.html"
  },
  {
    id: 1117,
      row: "Platformer",
    title: "Supermariobros 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariobros2.html"
  },
  {
    id: 1118,
      row: "Platformer",
    title: "Supermariobros 2 US",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariobros2us.html"
  },
  {
    id: 1119,
      row: "Platformer",
    title: "Supermariobros 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariobros3.html"
  },
  {
    id: 1120,
      row: "Platformer",
    title: "Super Mario Bros. 3 (Real)",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariobros3real.html"
  },
  {
    id: 1121,
      row: "Racing",
    title: "Super Mario Kart",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/supermariokart.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariokart.html"
  },
  {
    id: 1122,
      row: "Platformer",
    title: "Super Mario Land",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermarioland.html"
  },
  {
    id: 1123,
      row: "Platformer",
    title: "Supermarioland 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermarioland2.html"
  },
  {
    id: 1124,
      row: "Platformer",
    title: "Super Mario Mon",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariomon.html"
  },
  {
    id: 1125,
      row: "Platformer",
    title: "Super Mario RPG",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariorpg.html"
  },
  {
    id: 1126,
      row: "Platformer",
    title: "Super Mario World",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermarioworld.html"
  },
  {
    id: 1127,
      row: "Platformer",
    title: "Super Mario World 2: Yoshi's Island",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermarioworld2.html"
  },
  {
    id: 1128,
      row: "Platformer",
    title: "Super Metroid",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/metroidzeromission.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermetroid.html"
  },
  {
    id: 1129,
      row: "Arcade",
    title: "Super Monkey Ball Jr.",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/supermonkeyballjr.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermonkeyballjr.html"
  },
  {
    id: 1130,
      row: "Arcade",
    title: "Super Punch-Out!!",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperpunchout.html"
  },
  {
    id: 1131,
      row: "Puzzle",
    title: "Superpuzzlefighter 2 Turbo",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperpuzzlefighter2turbo.html"
  },
  {
    id: 1132,
      row: "Puzzle",
    title: "Superpuzzlefighter 2 Turboalt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperpuzzlefighter2turboalt.html"
  },
  {
    id: 1133,
      row: "Arcade",
    title: "Super Scribblenauts",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperscribblenauts.html"
  },
  {
    id: 1134,
      row: "Arcade",
    title: "Super Smash Bros.",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/supersmashbros.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupersmashbros.html"
  },
  {
    id: 1135,
      row: "Arcade",
    title: "Super Smash Flash",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/supersmashflash.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupersmashflash.html"
  },
  {
    id: 1136,
      row: "Arcade",
    title: "Supersmashflash 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/supersmashflash.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupersmashflash2.html"
  },
  {
    id: 1137,
      row: "Arcade",
    title: "Supersmashflash 2 Butdifversion",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupersmashflash2butdifversion.html"
  },
  {
    id: 1138,
      row: "Arcade",
    title: "Supreme Duelist",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupremeduelist.html"
  },
  {
    id: 1139,
      row: "Multiplayer",
    title: "Survevio",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsurvevio.html"
  },
  {
    id: 1140,
      row: "Arcade",
    title: "Sushicat",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsushicat.html"
  },
  {
    id: 1141,
      row: "Arcade",
    title: "Sushicat 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsushicat2.html"
  },
  {
    id: 1142,
      row: "Arcade",
    title: "Swerve",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/swerve.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswerve.html"
  },
  {
    id: 1143,
      row: "Puzzle",
    title: "Pokémon Sword & Shield Ultimate Plus",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswordandshieldultimateplus.html"
  },
  {
    id: 1144,
      row: "Puzzle",
    title: "Swordplay",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswordplay.html"
  },
  {
    id: 1145,
      row: "Puzzle",
    title: "Swords and Sandals",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/swordsandsandals.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswordsandsandals.html"
  },
  {
    id: 1146,
      row: "Puzzle",
    title: "Swordsandsandals 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswordsandsandals2.html"
  },
  {
    id: 1147,
      row: "Puzzle",
    title: "Swords & Souls",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswordsandsouls.html"
  },
  {
    id: 1148,
      row: "Arcade",
    title: "Sydney Shark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsydneyshark.html"
  },
  {
    id: 1149,
      row: "Arcade",
    title: "Takeover",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltakeover.html"
  },
  {
    id: 1150,
      row: "Platformer",
    title: "Tallmanrun",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltallmanrun.html"
  },
  {
    id: 1151,
      row: "Shooter",
    title: "Tankmayhem",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltankmayhem.html"
  },
  {
    id: 1152,
      row: "Arcade",
    title: "Tapper",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltapper.html"
  },
  {
    id: 1153,
      row: "Simulation",
    title: "Tasty Planet",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltastyplanet.html"
  },
  {
    id: 1154,
      row: "Arcade",
    title: "The Binding of Isaac: Lamb Eternal",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltboilambeternal.html"
  },
  {
    id: 1155,
      row: "Arcade",
    title: "Tecmobowl",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltecmobowl.html"
  },
  {
    id: 1156,
      row: "Arcade",
    title: "Tempest 2000",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltempest2000.html"
  },
  {
    id: 1157,
      row: "Strategy",
    title: "Territory War",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clterritorywar.html"
  },
  {
    id: 1158,
      row: "Puzzle",
    title: "Tetris",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tetris.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltetris.html"
  },
  {
    id: 1159,
      row: "Puzzle",
    title: "Tetris Attack",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tetris.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltetrisattack.html"
  },
  {
    id: 1160,
      row: "Puzzle",
    title: "Tetrisgba",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tetris.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltetrisgba.html"
  },
  {
    id: 1161,
      row: "Arcade",
    title: "The Classroom",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltheclassroom.html"
  },
  {
    id: 1162,
      row: "Arcade",
    title: "Theclassroom 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltheclassroom2.html"
  },
  {
    id: 1163,
      row: "Arcade",
    title: "Theclassroom 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltheclassroom3.html"
  },
  {
    id: 1164,
      row: "Arcade",
    title: "The Deepest Sleep",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthedeepestsleep.html"
  },
  {
    id: 1165,
      row: "Adventure",
    title: "Theenchantedcave 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/theenchantedcave2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltheenchantedcave2.html"
  },
  {
    id: 1166,
      row: "Arcade",
    title: "The Impossible Game",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/theimpossiblegame.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltheimpossiblegame.html"
  },
  {
    id: 1167,
      row: "Arcade",
    title: "The Last Stand",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthelaststand.html"
  },
  {
    id: 1168,
      row: "Simulation",
    title: "Thelaststandunioncity (1)",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthelaststandunioncity%20(1).html"
  },
  {
    id: 1169,
      row: "Simulation",
    title: "The Last Stand: Union City",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthelaststandunioncity.html"
  },
  {
    id: 1170,
      row: "Arcade",
    title: "Themepark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthemepark.html"
  },
  {
    id: 1171,
      row: "Arcade",
    title: "This Is the Only Level",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/thisistheonlylevel.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthisistheonlylevel.html"
  },
  {
    id: 1172,
      row: "Arcade",
    title: "Thisistheonlylevel 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/thisistheonlylevel2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthisistheonlylevel2.html"
  },
  {
    id: 1173,
      row: "Arcade",
    title: "This Is the Only Level Too",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/thisistheonlylevel.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthisistheonlyleveltoo.html"
  },
  {
    id: 1174,
      row: "Sports",
    title: "Tony Hawk's Pro Skater",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltonyhawkproskater.html"
  },
  {
    id: 1175,
      row: "Sports",
    title: "Tonyhawkskater 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltonyhawkskater2.html"
  },
  {
    id: 1176,
      row: "Arcade",
    title: "Tony Hawk's Underground",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltonyhawksunderground.html"
  },
  {
    id: 1177,
      row: "Arcade",
    title: "Too Many Types",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltoomanytypes.html"
  },
  {
    id: 1178,
      row: "Arcade",
    title: "Toss the Turtle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tosstheturtle.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltosstheturtle.html"
  },
  {
    id: 1179,
      row: "Arcade",
    title: "Trace",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrace.html"
  },
  {
    id: 1180,
      row: "Racing",
    title: "Trafficjam 3 D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrafficjam3d.html"
  },
  {
    id: 1181,
      row: "Arcade",
    title: "Tripleplay 2000",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltripleplay2000.html"
  },
  {
    id: 1182,
      row: "Platformer",
    title: "Trollfacequest 1",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest1.html"
  },
  {
    id: 1183,
      row: "Platformer",
    title: "Trollfacequest 10",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest10.html"
  },
  {
    id: 1184,
      row: "Platformer",
    title: "Trollfacequest 11",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest11.html"
  },
  {
    id: 1185,
      row: "Platformer",
    title: "Trollfacequest 12",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest12.html"
  },
  {
    id: 1186,
      row: "Platformer",
    title: "Trollfacequest 13",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest13.html"
  },
  {
    id: 1187,
      row: "Platformer",
    title: "Trollfacequest 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest2.html"
  },
  {
    id: 1188,
      row: "Platformer",
    title: "Trollfacequest 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest3.html"
  },
  {
    id: 1189,
      row: "Platformer",
    title: "Trollfacequest 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest4.html"
  },
  {
    id: 1190,
      row: "Platformer",
    title: "Trollfacequest 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest5.html"
  },
  {
    id: 1191,
      row: "Platformer",
    title: "Trollfacequest 6",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest6.html"
  },
  {
    id: 1192,
      row: "Platformer",
    title: "Trollfacequest 7",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest7.html"
  },
  {
    id: 1193,
      row: "Platformer",
    title: "Trollfacequest 8",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest8.html"
  },
  {
    id: 1194,
      row: "Platformer",
    title: "Trollfacequest 9",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest9.html"
  },
  {
    id: 1195,
      row: "Platformer",
    title: "Tube Jumpers",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tubejumpers.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltubejumpers.html"
  },
  {
    id: 1196,
      row: "Arcade",
    title: "Turbostars",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clturbostars.html"
  },
  {
    id: 1197,
      row: "Arcade",
    title: "Twisted Metal",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltwistedmetal.html"
  },
  {
    id: 1198,
      row: "Arcade",
    title: "Twistedmetal 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltwistedmetal2.html"
  },
  {
    id: 1199,
      row: "Arcade",
    title: "Twoball 3 D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/twoball3d.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltwoball3d.html"
  },
  {
    id: 1200,
      row: "Arcade",
    title: "Ucds",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clucds.html"
  },
  {
    id: 1201,
      row: "Arcade",
    title: "UFO Swamp Odyssey",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clufoswampoddysey.html"
  },
  {
    id: 1202,
      row: "Arcade",
    title: "Ultimate Assassin 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clultimateassassian2.html"
  },
  {
    id: 1203,
      row: "Arcade",
    title: "Ultimate Assassin 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clultimateassassian3.html"
  },
  {
    id: 1204,
      row: "Arcade",
    title: "Ultimate Mortal Kombat",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clultimatemortalkombat.html"
  },
  {
    id: 1205,
      row: "Arcade",
    title: "Ultimate Mortal Kombat 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clultimatemortalkombat3.html"
  },
  {
    id: 1206,
      row: "Arcade",
    title: "Ultrakill",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ultrakill.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clultrakill.html"
  },
  {
    id: 1207,
      row: "Platformer",
    title: "Stickman Game",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clumstickmangameidkiforgor.html"
  },
  {
    id: 1208,
      row: "Arcade",
    title: "Underneath",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clunderneath.html"
  },
  {
    id: 1209,
      row: "Multiplayer",
    title: "Unfair Mario",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/unfairmario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clunfairmario.html"
  },
  {
    id: 1210,
      row: "Platformer",
    title: "Unfair Mario: Work?",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clunfairmarioworkquestionmark.html"
  },
  {
    id: 1211,
      row: "Adventure",
    title: "Unicycle Hero",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clunicyclehero.html"
  },
  {
    id: 1212,
      row: "Arcade",
    title: "Uno",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cluno.html"
  },
  {
    id: 1213,
      row: "Arcade",
    title: "Upgrade Complete",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clupgradecomplete.html"
  },
  {
    id: 1214,
      row: "Arcade",
    title: "Upgrade Complete 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clupgradecomplete2.html"
  },
  {
    id: 1215,
      row: "Arcade",
    title: "Vanguard",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvanguard.html"
  },
  {
    id: 1216,
      row: "Platformer",
    title: "Vex",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex.html"
  },
  {
    id: 1217,
      row: "Platformer",
    title: "Vex 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex2.html"
  },
  {
    id: 1218,
      row: "Platformer",
    title: "Vex 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex3.html"
  },
  {
    id: 1219,
      row: "Platformer",
    title: "Vex 3 Xmas",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex3xmas.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex3xmas.html"
  },
  {
    id: 1220,
      row: "Platformer",
    title: "Vex 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex4.html"
  },
  {
    id: 1221,
      row: "Platformer",
    title: "Vex 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex5.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex5.html"
  },
  {
    id: 1222,
      row: "Platformer",
    title: "Vex 7",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex7.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex7.html"
  },
  {
    id: 1223,
      row: "Platformer",
    title: "Vex 8",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex7.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex8.html"
  },
  {
    id: 1224,
      row: "Platformer",
    title: "Vexx 3 M",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vexx3m.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvexx3m.html"
  },
  {
    id: 1225,
      row: "Platformer",
    title: "Vexx 3 M 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vexx3m2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvexx3m2.html"
  },
  {
    id: 1226,
      row: "Arcade",
    title: "Villager",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvillager.html"
  },
  {
    id: 1227,
      row: "Sports",
    title: "Volley Random",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/volleyrandom.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvolleyrandom.html"
  },
  {
    id: 1228,
      row: "Shooter",
    title: "Warfare 1944",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwarfare1944.html"
  },
  {
    id: 1229,
      row: "Strategy",
    title: "Wario Land 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwarioland4.html"
  },
  {
    id: 1230,
      row: "Strategy",
    title: "WarioWare: D.I.Y.",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwariowarediy.html"
  },
  {
    id: 1231,
      row: "Strategy",
    title: "WarioWare, Inc.",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwariowareinc.html"
  },
  {
    id: 1232,
      row: "Strategy",
    title: "War the Knights",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwartheknight.html"
  },
  {
    id: 1233,
      row: "Sports",
    title: "Water Pool.io",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwaterpoolio.html"
  },
  {
    id: 1234,
      row: "Runner",
    title: "Wavedash",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwavedash.html"
  },
  {
    id: 1235,
      row: "Arcade",
    title: "Wave Race 64",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwaverace64.html"
  },
  {
    id: 1236,
      row: "Platformer",
    title: "Waverun",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwaverun.html"
  },
  {
    id: 1237,
      row: "Arcade",
    title: "Whack the Thief",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwhackthetheif.html"
  },
  {
    id: 1238,
      row: "Arcade",
    title: "Whack Your Boss",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwhackyourboss.html"
  },
  {
    id: 1239,
      row: "Arcade",
    title: "Whack Your Computer",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwhackyourcomputer.html"
  },
  {
    id: 1240,
      row: "Racing",
    title: "Wheely",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/wheely.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely.html"
  },
  {
    id: 1241,
      row: "Racing",
    title: "Wheely 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/wheely2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely2.html"
  },
  {
    id: 1242,
      row: "Racing",
    title: "Wheely 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/wheely3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely3.html"
  },
  {
    id: 1243,
      row: "Racing",
    title: "Wheely 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/wheely4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely4.html"
  },
  {
    id: 1244,
      row: "Racing",
    title: "Wheely 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely5.html"
  },
  {
    id: 1245,
      row: "Racing",
    title: "Wheely 6",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely6.html"
  },
  {
    id: 1246,
      row: "Racing",
    title: "Wheely 7",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely7.html"
  },
  {
    id: 1247,
      row: "Racing",
    title: "Wheely 8",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely8.html"
  },
  {
    id: 1248,
      row: "Arcade",
    title: "Windows & Doors",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwindowsdoors.html"
  },
  {
    id: 1249,
      row: "Arcade",
    title: "Winter Falling",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwinterfalling.html"
  },
  {
    id: 1250,
      row: "Arcade",
    title: "Wipeout 2097",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwipeout2097.html"
  },
  {
    id: 1251,
      row: "Arcade",
    title: "Wipeout 2097 Alt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwipeout2097alt.html"
  },
  {
    id: 1252,
      row: "Simulation",
    title: "Witchcraft Tower Defense",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwitchcrafttd.html"
  },
  {
    id: 1253,
      row: "Shooter",
    title: "Wolfenstein 3 D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwolfenstein3d.html"
  },
  {
    id: 1254,
      row: "Arcade",
    title: "Woodworm",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwoodworm.html"
  },
  {
    id: 1255,
      row: "Arcade",
    title: "Worldcup 98",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clworldcup98.html"
  },
  {
    id: 1256,
      row: "Arcade",
    title: "The World's Hardest Game 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clworldshardestgame2.html"
  },
  {
    id: 1257,
      row: "Arcade",
    title: "The World's Hardest Game 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clworldshardestgame3.html"
  },
  {
    id: 1258,
      row: "Arcade",
    title: "The World's Hardest Game 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clworldshardestgame4.html"
  },
  {
    id: 1259,
      row: "Sports",
    title: "Wrestle Bros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/wrestlebros.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwrestlebros.html"
  },
  {
    id: 1260,
      row: "Arcade",
    title: "Yars' Revenge",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clyarsrevenge.html"
  },
  {
    id: 1261,
      row: "Arcade",
    title: "Yellow",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clyellow.html"
  },
  {
    id: 1262,
      row: "Arcade",
    title: "You Are Lucky",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clyouarelucky.html"
  },
  {
    id: 1263,
      row: "Runner",
    title: "Youvs 100 Skibidi",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clyouvs100skibidi.html"
  },
  {
    id: 1264,
      row: "Platformer",
    title: "Zelda II: The Adventure of Link",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzelda2thelegendoflink.html"
  },
  {
    id: 1265,
      row: "Puzzle",
    title: "Zenword",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzenword.html"
  },
  {
    id: 1266,
      row: "Horror",
    title: "Zombie Exploder",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombieexploder.html"
  },
  {
    id: 1267,
      row: "Horror",
    title: "Zombie Road",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombieroad.html"
  },
  {
    id: 1268,
      row: "Horror",
    title: "Zombies Ate My Neighbors",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombiesatemyneighboors.html"
  },
  {
    id: 1269,
      row: "Arcade",
    title: "Zombopaclypse 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombopaclypse2.html"
  },
  {
    id: 1270,
      row: "Shooter",
    title: "Zombotron",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombotron.html"
  },
  {
    id: 1271,
      row: "Shooter",
    title: "Zombotron 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombotron2.html"
  },
  {
    id: 1272,
      row: "Arcade",
    title: "Zrist",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzrist.html"
  },
  {
    id: 1273,
      row: "Arcade",
    title: "Zuma",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzuma.html"
  },
  {
    id: 1274,
      row: "Shooter",
    title: "Zuma Shooter",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzumashooter.html"
  },
  {
    id: 1275,
      row: "Arcade",
    title: "Orb",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/orb.html"
  },
  {
    id: 1276,
      row: "Arcade",
    title: "Tesdf",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/tesdf.html"
  },
  {
    id: 1277,
      row: "Arcade",
    title: "Test",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/test.htm"
  }
];

// Exponer el catálogo para páginas auxiliares como el diagnóstico.
window.gamesList = gamesList;
