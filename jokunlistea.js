// Add games here using the same object format. Use rawUrl for HTML game files.
const gamesList = [
  {
      row: "Adventure",
      title: "Minecraft 26.2",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/minecraft.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/MilkdromedaStudios/all-of-eaglercraft@main/ArchMC%20Eaglercraft%2026.3.html"
    },
  {
      row: "Adventure",
      title: "Minecraft 1.8.8",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/minecraft.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clminecraft1-8-8.html"
    },
  {
      row: "Arcade",
      title: "Level Devil",
      addedAt: "2026-11-23",
      image: "argazkik/leveldevil.jpeg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clleveldevil.html"
    },
  {
      row: "Shooter",
      title: "1v1 LOL",
      addedAt: "2026-11-23",
      image: "argazkik/1v1.jpeg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1v1lol.html"
    },
  {
      row: "Arcade",
      title: "Subway Surfers",
      addedAt: "2026-11-23",
      image: "argazkik/subwaysurfers.jpeg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsubwaysurfers.html"
    },
  {
      row: "Arcade",
      title: "Tomb of the mask",
      addedAt: "2026-11-23",
      image: "argazkik/tomb.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltombofthemask.html"
    },
  {
      row: "Horror",
      title: "FNAF",
      addedAt: "2026-11-23",
      image: "argazkik/fnaf.jpeg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF.html"
    },
  {
      row: "Horror",
      title: "FNAF 2",
      addedAt: "2026-11-23",
      image: "argazkik/faf2.jpeg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF2.html"
    },
  {
      row: "Horror",
      title: "FNAF 3",
      addedAt: "2026-11-23",
      image: "argazkik/fnaf3.jpeg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF3.html"
    },
  {
      row: "Horror",
      title: "FNAF 4",
      addedAt: "2026-11-23",
      image: "argazkik/fnaf4.jpeg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFNAF4.html"
    },
  {
      row: "Arcade",
      title: "Slope",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/KeysCreator/slope/main/img/slope-logo.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslope.html"
    },
  {
      row: "Arcade",
      title: "Stickman Hook",
      addedAt: "2026-11-23",
      image: "https://media.indiedb.com/cache/images/games/1/92/91234/thumb_620x2000/stickman-hook.1.jpg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickmanhook.html"
    },
  {
      row: "Shooter",
      title: "SUPERHOT",
      addedAt: "2026-11-23",
      image: "https://fightgenossen.ch/attachments/superhot-logo-jpg.5651/",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperhot.html"
    },
  {
      row: "Runner",
      title: "Temple Run 2",
      addedAt: "2026-11-23",
      image: "https://gamesbeat.com/wp-content/uploads/2025/05/tr2_logo.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltemplerun2.html"
    },
  {
      row: "Platformer",
      title: "Vex 6",
      addedAt: "2026-11-23",
      image: "https://media.indiedb.com/images/games/1/78/77728/1Vex62.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex6.html"
    },
  {
      row: "Puzzle",
      title: "World's Hardest Game",
      addedAt: "2026-11-23",
      image: "https://myemulator.cc/uploads/images/games/game_the-world%E2%80%99s-hardest-game_1759532165677_large.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clworldshardestgame.html"
    },
  {
      row: "Sports",
      title: "Basket Bros",
      addedAt: "2026-11-23",
      image: "https://basketball-stars.io/upload/imgs/basket-bros.jpg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketbros.html"
    },
  {
      row: "Shooter",
      title: "Rooftop Snipers",
      addedAt: "2026-11-23",
      image: "https://topgames.gg/data/image/game/rooftop-snipers.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrooftopsnipers.html"
    },
  {
      row: "Adventure",
      title: "Duck Life",
      addedAt: "2026-11-23",
      image: "https://unbl0ck.github.io/games/img/ducklife4.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clducklife.html"
    },
  {
      row: "Arcade",
      title: "Doodle Jump",
      addedAt: "2026-11-23",
      image: "https://mult-games.com.ua/images/desc/1322770207_doodle-jump.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoodlejump.html"
    },
  {
      row: "Multiplayer",
      title: "Among Us",
      addedAt: "2026-11-23",
      image: "https://res09.bignox.com/moniqi-blog/jp-bignox-blog/2022/09/83ee6035704323a86b8ed5c3179734a6.png?x-oss-process=image%2Fquality%2Cq_50%2Fresize%2Cm_fill%2Cw_300%2Ch_300",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamongus.html"
    },
  {
      row: "Puzzle",
      title: "Angry Birds",
      addedAt: "2026-11-23",
      image: "https://www.pngitem.com/pimgs/m/500-5008362_angry-birds-logo-angry-birds-logo-png-transparent.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clangrybirds.html"
    },
  {
      row: "Horror",
      title: "Baldi's Basics",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/NB-GA/games-site/main/projects/baldis-basics/baldis-basics.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbaldisbasics.html"
    },
  {
      row: "Sports",
      title: "Basketball Stars",
      addedAt: "2026-11-23",
      image: "https://play-lh.googleusercontent.com/SIr7VUzcJMe7fKfkDainacp1iDopSE14AXpGA92zTZICCb6Y2Fw56S6g5Z0iglYpcrquUe9YAnxGeF4sATQLSP8=w240-h480",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketballstars.html"
    },
  {
      row: "Simulation",
      title: "BitLife",
      addedAt: "2026-11-23",
      image: "https://pbs.twimg.com/profile_images/2071658072938876928/CjsjY3mT_400x400.jpg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbitlife.html"
    },
  {
      row: "Idle",
      title: "Cookie Clicker",
      addedAt: "2026-11-23",
      image: "https://cookieclicker76.io/data/image/options/cookieclicker-logo.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcookieclicker.html"
    },
  {
      row: "Arcade",
      title: "Crossy Road",
      addedAt: "2026-11-23",
      image: "https://img1.wikia.nocookie.net/__cb20141215200414/logopedia/images/c/c9/CrossyRoadAppIcon.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrossyroad.html"
    },
  {
      row: "Racing",
      title: "Drive Mad",
      addedAt: "2026-11-23",
      image: "https://play-lh.googleusercontent.com/8gfwr9Xqbk4EmK2Kh_BJtqAsB-HTQRcpWTkFs5nQRHbQ8J1N5CWPx8LEye3dowH7Yg2ex4qfNPoeDFf7j-yVtQ=w240-h480",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldrivemad.html"
    },
  {
      row: "Puzzle",
      title: "Fireboy and Watergirl",
      addedAt: "2026-11-23",
      image: "https://dinosaurgame-free.io/data/image/game/fireboy-and-watergirl-1-forest-temple/fireboy-and-watergirl.jpg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireboyandwatergirl.html"
    },
  {
      row: "Rhythm",
      title: "Friday Night Funkin'",
      addedAt: "2026-11-23",
      image: "https://images.seeklogo.com/logo-png/41/1/friday-night-funkin-logo-png_seeklogo-411208.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfridaynightfunkin.html"
    },
  {
      row: "Arcade",
      title: "Geometry Dash Lite",
      addedAt: "2026-11-23",
      image: "https://cxl-web-prod-uploads.s3.amazonaws.com/public/11a6762e8d7ac05e93963afe9f97306daab422fd.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgeometrydashlite.html"
    },
  {
      row: "Horror",
      title: "Granny",
      addedAt: "2026-11-23",
      image: "https://m.gjcdn.net/game-header/1200/1042155-u2hmzpbb-v4.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranny.html"
    },
  {
      row: "Arcade",
      title: "Happy Wheels",
      addedAt: "2026-11-23",
      image: "https://i.imgur.com/xVJh20p.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhappywheels.html"
    },
  {
      row: "Action",
      title: "Jetpack Joyride",
      addedAt: "2026-11-23",
      image: "https://www.pngkey.com/png/detail/210-2105448_halfbrick-jetpack-joyride-logo.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/EML0073/Unblocked-Games@main/juegos/jetpack-joyride.html"
    },
  {
      row: "Racing",
      title: "Moto X3M",
      addedAt: "2026-11-23",
      image: "https://purepro4562.github.io/ubg9.github.io/assets/images/moto3mx/moto-x3m-bike-race-logo.webp",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3m.html"
    },
  {
      row: "Arcade",
      title: "Pac-Man",
      addedAt: "2026-11-23",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/PAC-MAN_logo.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpacman.html"
    },
  {
      row: "Arcade",
      title: "Paper.io 2",
      addedAt: "2026-11-23",
      image: "https://paper-2.io/paper-io.jpeg",
      rawUrl: "https://cdn.jsdelivr.net/gh/CoolDude2349/Offline-HTML-Games-Pack@master/offline/paper-io-2.htm"
    },
  ,
  {
      row: "Strategy",
      title: "Plants vs. Zombies",
      addedAt: "2026-11-23",
      image: "https://cdn2.steamgriddb.com/icon/d43f633d079beb098669f97f7301d3fb/32/512x512.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clplantsvszombies.html"
    },
  {
      row: "Sports",
      title: "Retro Bowl",
      addedAt: "2026-11-23",
      image: "https://raw.githubusercontent.com/NB-GA/games-site/main/projects/retro-bowl/img/icon.jpg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clretrobowl.html"
    },
  {
      row: "Platformer",
      title: "Run 3",
      addedAt: "2026-11-23",
      image: "https://static.historyminds.com/uploads/OG-Images/RUN-3---OG-FB_72YTvw.png",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrun3.html"
    },
  {
      row: "Platformer",
      title: "OvO 2",
      addedAt: "2026-11-24",
      image: "https://images.rocketgames.io/uploads/games/o/ovo-2/ovo-2.aedfcd.jpg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clovo2.html"
    },
  {
      row: "Horror",
      title: "Granny 2",
      addedAt: "2026-11-24",
      image: "https://granny-1.io/data/image/game/granny-chapter-two/granny-chapter-two.jpg",
      rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranny2.html"
    },

  ,
  ,
  ,
    ,
      ,
      ,
        ,
        ,
        ,
        ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  
,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,

  // Added 2026-11-24
  ,
  {
    row: "Action",
    title: "Grand Theft Auto",
    addedAt: "2026-11-24",
    image: "https://static.wikia.nocookie.net/rockstargamescompany/images/4/46/GTA1-logo.png/revision/latest/scale-to-width-down/1200?cb=20240810233731",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/UGS-Files/clgtaalt.html"
  },
  {
    row: "Action",
    title: "Grand Theft Auto 2",
    addedAt: "2026-11-24",
    image: "https://www.igrandtheftauto.com/content/images/xl/gta2-logo-square.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/UGS-Files/clgta2alt.html"
  },
  {
    row: "Action",
    title: "Grand Theft Auto: Chinatown Wars",
    addedAt: "2026-11-24",
    image: "https://images.ctfassets.net/18izrhn535ym/7K2Lckd6oHN9oFXXGESPdy/509ed917c40b850004c71d0c3c18c3ea/GTA_CW_FOB.jpg?q=100&w=600",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/UGS-Files/clgtachina.html"
  },
  ,
  ,
  ,
  {
    row: "Horror",
    title: "Granny 3",
    addedAt: "2026-11-24",
    image: "https://baldigames.com/data/image/game/granny-3/granny-3.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranny3.html"
  },
  {
    row: "Arcade",
    title: "Slither.io",
    addedAt: "2026-11-24",
    image: "https://www.browsergames.de/uploads/public/40c4f6526114eb3eb6ee546d44eb5d80/40c4f6526114eb3eb6ee546d44eb5d80.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslitherio.html"
  },
  {
    row: "Shooter",
    title: "Red vs Blue War",
    addedAt: "2026-11-24",
    image: "https://s3.growsolutions.tech/yupgames/games/images/1754451996207-RBWAR%20Online_%20Red%20vs%20Blue!.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredvsbluewar.html"
  },
  {
    row: "Arcade",
    title: "Paper.io Mania",
    addedAt: "2026-11-24",
    image: "https://topgames.gg/data/image/game/paper-io.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpaperiomania.html"
  },
  {
    row: "Puzzle",
    title: "Fireboy and Watergirl 2: Light Temple",
    addedAt: "2026-11-24",
    image: "https://images.gamevgames.com/games/file_6a0d8d4c32d27.webp?v=20260702101348",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireboyandwatergirl2.html"
  },
  {
    row: "Puzzle",
    title: "Fireboy and Watergirl 3: Ice Temple",
    addedAt: "2026-11-24",
    image: "https://dinosaurgame-free.io/data/image/game/fireboy-and-watergirl-1-forest-temple/fireboy-and-watergirl.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireboyandwatergirl3.html"
  },
  {
    row: "Platformer",
    title: "OvO Dimensions",
    addedAt: "2026-11-24",
    image: "https://bouncybasketball.com/cdn/images/banners/ovo-dimensions-game-cover.webp?fit=crop&format=auto&q=75&w=1200",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clovodimensions.html"
  },

  // Added 2026-11-24
  {
    row: "Arcade",
    title: "Fruit Ninja",
    addedAt: "2026-11-24",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d6/c1/10/d6c1101f-5d78-56f8-8e17-450ebe497be2/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1024x1024wd.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfruitninja.html"
  },
  {
    row: "Multiplayer",
    title: "Smash Karts",
    addedAt: "2026-11-24",
    image: "https://img.poki-cdn.com/cdn-cgi/image/q%3D78%2Cscq%3D50%2Cwidth%3D1200%2Cheight%3D1200%2Cfit%3Dcover%2Cf%3Dpng/9c9e529b14731be871b07b89660bbc2a/smash-karts.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsmashkarts.html"
  },
  {
    row: "Strategy",
    title: "Bloons TD 5",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/3760852-bloons-td-5-nintendo-switch-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloonsTD5.html"
  },
  {
    row: "Racing",
    title: "Drift Boss",
    addedAt: "2026-11-24",
    image: "https://media.hotgame.io/2026/05/21233425/drift-boss-icon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldriftboss.html"
  },
  {
    row: "Puzzle",
    title: "Cut the Rope",
    addedAt: "2026-11-24",
    image: "https://games.html5games.io/games/cuttherope/gameplay/images/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcuttherope.html"
  },

  // Added 40 more verified UGS games on 2026-11-24
  {
    row: "Arcade",
    title: "2048",
    addedAt: "2026-11-24",
    image: "https://gabrielecirulli.github.io/2048/meta/og_image.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl2048.html"
  },
  ,
  {
    row: "Arcade",
    title: "Angry Birds Space",
    addedAt: "2026-11-24",
    image: "https://imagenes.hobbyconsolas.com/files/image_1920_1080/uploads/imagenes/2023/04/25/690d2b60616dc.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clangrybirdsspace.html"
  },
  {
    row: "Racing",
    title: "Aquapark.io",
    addedAt: "2026-11-24",
    image: "https://wave-rider.io/data/image/Aquaparkio.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/claquaparkio.html"
  },
  {
    row: "Horror",
    title: "The Backrooms",
    addedAt: "2026-11-24",
    image: "https://cdn-1.webcatalog.io/catalog/the-backrooms-game/the-backrooms-game-icon-unplated.png?v=1721611842965",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackrooms.html"
  },
  {
    row: "Puzzle",
    title: "Bloxorz",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/bloxorz.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloxorz.html"
  },
  {
    row: "Puzzle",
    title: "Bob the Robber",
    addedAt: "2026-11-24",
    image: "https://img.gamedistribution.com/18d28481ea514f3c838f9a5a355fb0f7-512x512.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbobtherobber.html"
  },
  {
    row: "Arcade",
    title: "Bottle Flip 3D",
    addedAt: "2026-11-24",
    image: "https://doondook.studio/wp-content/uploads/2022/12/1024.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbottleflip3d.html"
  },
  {
    row: "Puzzle",
    title: "Chess",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/chess.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchess.html"
  },
  ,
  {
    row: "Action",
    title: "Doom",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/doom",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoom.html"
  },
  {
    row: "Racing",
    title: "Eggy Car",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/eggy-car.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleggycar.html"
  },
  ,
  {
    row: "Shooter",
    title: "Gun Mayhem",
    addedAt: "2026-11-24",
    image: "https://cpsgames.org/thumbs/gun-mayhem-new-thumb_1.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunmayhem.html"
  },
  {
    row: "Arcade",
    title: "Helix Jump",
    addedAt: "2026-11-24",
    image: "https://1games.io/data/image/game/helix-jump/helix-jump.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhelixjump.html"
  },
  {
    row: "Party",
    title: "House of Hazards",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/houseofhazards.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhouseofhazards.html"
  },
  {
    row: "Arcade",
    title: "Learn to Fly",
    addedAt: "2026-11-24",
    image: "https://www.xpmonkey.com/resources/game-img/learn-to-fly.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllearntofly.html"
  },
  {
    row: "Racing",
    title: "Madalin Stunt Cars",
    addedAt: "2026-11-24",
    image: "https://assets.funnygames.com.tr/7/24467/78740/672x448/madalin-stunt-cars.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadalinstuntcars.html"
  },
  {
    row: "Racing",
    title: "Moto X3M 2",
    addedAt: "2026-11-24",
    image: "https://drivemadgame.cc/uploads/games/main/img_69cc7fb7863ce.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3m2.html"
  },
  {
    row: "Arcade",
    title: "Ms. Pac-Man",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/4100471-ms-pac-man-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmspacman.html"
  },
  {
    row: "Simulation",
    title: "Papa's Cheeseria",
    addedAt: "2026-11-24",
    image: "https://img.poki-cdn.com/cdn-cgi/image/quality%3D78%2Cwidth%3D1200%2Cheight%3D1200%2Cfit%3Dcover%2Cf%3Dpng/dba66f3ebbf814e758579987d62c1b35.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapascheeseria.html"
  },
  {
    row: "Simulation",
    title: "Papa's Cupcakeria",
    addedAt: "2026-11-24",
    image: "https://img.poki-cdn.com/cdn-cgi/image/q%3D78%2Cscq%3D50%2Cwidth%3D1200%2Cheight%3D1200%2Cfit%3Dcover%2Cf%3Dpng/94373042e426d38ffec1bccdd1c06be4/papas-cupcakeria.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapascupcakeria.html"
  },
  {
    row: "Simulation",
    title: "Papa's Freezeria",
    addedAt: "2026-11-24",
    image: "https://cdn.reludi.com/media/games/x99pl6zfjdfv.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapasfreezeria.html"
  },
  {
    row: "Racing",
    title: "Polytrack",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/polytrack.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpolytrackalt.html"
  },
  {
    row: "Strategy",
    title: "Raft Wars 2",
    addedAt: "2026-11-24",
    image: "https://img.poki-cdn.com/cdn-cgi/image/quality%3D78%2Cwidth%3D1200%2Cheight%3D1200%2Cfit%3Dcover%2Cf%3Dpng/8ce3d09339bcb18c63bf9f1780795944/raft-wars-2.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clraftwars2.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Blocky Snakes",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/smdgames/mathgames66/main/mgthumbnails/Blocky-Snakes.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblockysnakes.html"
  },
  {
    row: "Racing",
    title: "Snow Rider 3D",
    addedAt: "2026-11-24",
    image: "https://snow-rider3d.co/data/image/game/snow-rider.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnowrider.html"
  },
  ,
  {
    row: "Arcade",
    title: "Tiny Fishing",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/tiny-fishing",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltinyfishing.html"
  },
  {
    row: "Arcade",
    title: "Tunnel Rush",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/tunnel-rush",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltunnelrush.html"
  },
  {
    row: "Puzzle",
    title: "Wordle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/wordle.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwordle.html"
  },
  {
    row: "Puzzle",
    title: "Bad Ice-Cream",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/bad-ice-cream.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbadicecream.html"
  },
  ,
  ,
  {
    row: "Sports",
    title: "Football Bros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/footballbros.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfootballbros.html"
  },
  {
    row: "Sports",
    title: "Soccer Bros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/soccerbros.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsoccerbros.html"
  },
  
,

  // Added 801 additional games from the Ultimate Game Stash PDF (2026-11-24)
  {
    row: "Arcade",
    title: "10 Minutes Till Dawn",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/10m.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl10minutestildawn.html"
  },
  ,
  {
    row: "Arcade",
    title: "12 Mini Battles",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/295.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl12minibattles.html"
  },
  {
    row: "Puzzle",
    title: "2048 Cupcakes",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/2048cupcakes.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl2048cupcakes.html"
  },
  ,
  ,
  {
    row: "Shooter",
    title: "2D Shooting",
    addedAt: "2026-11-24",
    image: "https://www.sellanycode.com/system/assets/uploads/products/Masti2D.a2DShootingGameForAndroidandiOS_sellanycode_screenshot_1648393118.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl2Dshooting.html"
  },
  ,
  ,
  {
    row: "Sports",
    title: "4th And Goal",
    addedAt: "2026-11-24",
    image: "https://retrobowl25.com/cache/data/image/game/4th-and-goal-2013-cover-m300x300.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl4thandgoal.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "9007199254740992",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/9007199254740992",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl9007199254740992.html"
  },
  {
    row: "Arcade",
    title: "99 Balls",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/431.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl99balls.html"
  },
  ,
  {
    row: "Rhythm",
    title: "A Dance of Fire and Ice",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/a-dance-of-fire-and-ice",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clADOFAI.html"
  },
  {
    row: "Arcade",
    title: "A Dark Room",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/adarkroom.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clADarkRoom.html"
  },
  ,
  {
    row: "Arcade",
    title: "A Day In The Office",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@027a7fc4b20820dc401547a74cf4f2ee875cd3e2/a%20day%20in%20the%20office/favicon.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cladayintheoffice.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Ahoy Survival",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/bac81084-1097-4fbb-8c91-259592b70218/1892788498/lost-island-raft-survival-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clahoysurvival.html"
  },
  ,
  {
    row: "Multiplayer",
    title: "Agar.io Lite",
    addedAt: "2026-11-24",
    image: "https://www.mobygames.com/images/covers/l/307841-agar-io-ipad-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clagariolite.html"
  },
  {
    row: "Arcade",
    title: "Ages of Conflict",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/ages-of-conflict.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clagesofconflict.html"
  },
  {
    row: "Arcade",
    title: "Alien Sky Invasion",
    addedAt: "2026-11-24",
    image: "https://cdn.pomu.com/files/game/img_mobile/14197/Alien-Sky-Invasion.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clalienskyinvasion.html"
  },
  {
    row: "Arcade",
    title: "Allocation",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/allocation.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clallocation.html"
  },
  {
    row: "Arcade",
    title: "Amazing Strange Rope Police",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/games/amazingropepolice/amazing-strange-rope-police-vice-spider-vegas.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstreangeropepolice.html"
  },
  {
    row: "Arcade",
    title: "Amidst The Sky",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/amidstthesky.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamidstthesky.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Ascent",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/screenshots/16732658-the-ascent-xbox-series-lifts-take-you-to-other-arcology-levels.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clascent.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Asteroids",
    addedAt: "2026-11-24",
    image: "https://now.estarland.com/images/products/5/14705/AT2600-Asteriod-large-image.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clasteroids.html"
  },
  {
    row: "Arcade",
    title: "A Small World Cup",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/a-small-world-cup",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clasmallworldcup.html"
  },
  ,
  {
    row: "Arcade",
    title: "B Babel Tower",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/babel-tower/cover/babel-tower.png?ar=16%3A10&w=1200",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbabeltower.html"
  },
  {
    row: "Adventure",
    title: "Baby Chicco Adventure",
    addedAt: "2026-11-24",
    image: "https://simple.game/assets/thumbs/23b4w2x2/baby-chicco-adventures.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbabychiccoadventure.html"
  },
  ,
  {
    row: "Horror",
    title: "Backrooms 2D",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/backrooms-2d",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackrooms2D.html"
  },
  {
    row: "Arcade",
    title: "Bacon May Die",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/bacon-may-die",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbaconmaydie.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Bad Parenting",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/badparenting.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbadparenting.html"
  },
  ,
  {
    row: "Simulation",
    title: "Bad Time Simulator",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/badtimesimulator.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbadtimesimulator.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Baldi’s Fun New School Ultimate",
    addedAt: "2026-11-24",
    image: "https://media.plix.gg/flash/game-thumbs/baldi-fun/960.webp?v=1784414636307",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbaldisfunnewschoolultimate.html"
  },
  {
    row: "Arcade",
    title: "Balls And Bricks",
    addedAt: "2026-11-24",
    image: "https://cdn.content.juegos123.net/game-images/balls-and-bricks_xl.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clballsandbricks.html"
  },
  ,
  ,
  {
    row: "Simulation",
    title: "Banana Simulator",
    addedAt: "2026-11-24",
    image: "https://cdn.dekudeals.com/images/81d4b6459cfd755db3ea2602d6bb4200da1a235f/w500.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbananasimulator.html"
  },
  {
    row: "Arcade",
    title: "Bank Robbery 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/439.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbankrobbery2.html"
  },
  {
    row: "Arcade",
    title: "Barry Has a Secret",
    addedAt: "2026-11-24",
    image: "https://www.ubg4all.com/thumbs/barry-has-a-secret-512x512bb.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbarryhasasecret.html"
  },
  ,
  {
    row: "Arcade",
    title: "BAS",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yokoboko/bas-pico-8/main/readme-resources/bas.gif",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbas.html"
  },
  {
    row: "Sports",
    title: "Baseball Bros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/baseballbros.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbaseballbros.html"
  },
  {
    row: "Sports",
    title: "Basket Battle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/basketbattle.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketbattle.html"
  },
  {
    row: "Sports",
    title: "Basket Random",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/basket-random",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketrandom.html"
  },
  {
    row: "Sports",
    title: "Basket Slam Dunk 2",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/yrgen73/BSD2@174be0db9145f7375365bda889a200e5cd31bbe0/icons/icon-512.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketslamdunk2.html"
  },
  {
    row: "Sports",
    title: "Basketball FRVR",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/28.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketballfrvr.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Battles",
    addedAt: "2026-11-24",
    image: "https://imgs.crazygames.com/games/janissary-battles/cover_16x9-1707829368896.png?height=2885&metadata=none&quality=60",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbattles.html"
  },
  ,
  {
    row: "Strategy",
    title: "Battle Simulator",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/battle-simulator-sandbox/cover/battle-simulator-sandbox.png?w=1200&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbattlesim.html"
  },
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Big Ice Tower Tiny Square",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/69.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbigicetowertinysquare.html"
  },
  {
    row: "Arcade",
    title: "Big Neon Tower Tiny Square",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/68.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbigneontowertinysquare.html"
  },
  ,
  {
    row: "Arcade",
    title: "Big Tower Tiny Square",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/btts.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbigtowertinysquare.html"
  },
  {
    row: "Arcade",
    title: "Big Tower Tiny Square 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/170.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbigtowertinysquare2.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Bit Planes",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bitplanes.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbitplanes.html"
  },
  {
    row: "Arcade",
    title: "Blackjack",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/312.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblackjack.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Blightborne",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@main/Blightborne/Template/Blight-Borne.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblightborne.html"
  },
  {
    row: "Arcade",
    title: "Block Blast",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/blockblast.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblockblast.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Block the Pig",
    addedAt: "2026-11-24",
    image: "https://www.speedrun.com/static/game/369w8r2d/cover.jpg?v=33ea3b1",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblockthepig.html"
  },
  ,
  {
    row: "Horror",
    title: "Blood Tournament",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bloodtournament.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloodtournament.html"
  },
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Bob the Robber 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/bobtherobber5.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbobtherobber5.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Bounce Back",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/bounce%20back/tiles.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbounceback.html"
  },
  ,
  {
    row: "Racing",
    title: "Bouncy Motors",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/bouncy%20motors/icon.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbouncymotors.html"
  },
  {
    row: "Arcade",
    title: "Bounty of One",
    addedAt: "2026-11-24",
    image: "https://img.opencritic.com/game/15663/o/1hbVnb7x.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clBountyOfOne.html"
  },
  {
    row: "Arcade",
    title: "Bowmasters",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/0.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbowmasters.html"
  },
  {
    row: "Sports",
    title: "Boxing Random",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/boxingrandom.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clboxingrandom.html"
  },
  ,
  ,
  {
    row: "Racing",
    title: "Bridge Race",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/14.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbridgerace.html"
  },
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Bunnyland",
    addedAt: "2026-11-24",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/722a9a145736877.62a3a04577e17.gif",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbunnyland.html"
  },
  {
    row: "Arcade",
    title: "Burger and Frights",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/burger-and-frights",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clburgerandfrights.html"
  },
  {
    row: "Arcade",
    title: "Burrito Bison Launcha Libre",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/78.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clburritobisonlaunchalibre.html"
  },
  ,
  ,
  ,
  {
    row: "Idle",
    title: "Capybara Clicker",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/capybara%20clicker/logo-capybara-licker.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcapybaraclicker.html"
  },
  ,
  ,
  {
    row: "Racing",
    title: "Car Crash 3",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/647b69cf-b2db-46d8-80f7-55998774c269/2026085460/police-car-game-car-crash-3d-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcarcrash3.html"
  },
  {
    row: "Racing",
    title: "Survival Race",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/survivalrace.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcarkingarena.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Castle Wars Modern",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/0355a5c7-01ab-49e2-83b7-14b3d5585c8f/4141744713/castle-wars-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlewarsmodern.html"
  },
  {
    row: "Platformer",
    title: "Cat Mario",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/smdgames/mathgames66/main/mgthumbnails/Cat_Mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcatmario.html"
  },
  ,
  ,
  {
    row: "Platformer",
    title: "Celeste Pico",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/440.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clceleste.html"
  },
  {
    row: "Platformer",
    title: "Celeste 2",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/9719950-celeste-2-lanis-trek-linux-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clceleste2.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Cheese Chompers 3D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cheesechompers3d.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcheesechompers3d.html"
  },
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Cheshire In a Chatroom",
    addedAt: "2026-11-24",
    image: "https://archive.org/download/Cheshire_Cats_1983_Pan_Books/screenshot_00.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcheshireinachatroom.html"
  },
  ,
  ,
  {
    row: "Shooter",
    title: "Chickenwar",
    addedAt: "2026-11-24",
    image: "https://plays.org/screenshots/chicken-merge-and-war.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchickenwar.html"
  },
  {
    row: "Platformer",
    title: "Choppy Orc",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/464.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchoppyorc.html"
  },
  ,
  {
    row: "Puzzle",
    title: "Civiballs",
    addedAt: "2026-11-24",
    image: "https://www.friv.com/z/games/civiballs2/rectangle-gamethumb-1-civiballs2.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clciviballs.html"
  },
  {
    row: "Puzzle",
    title: "Civiballs 2",
    addedAt: "2026-11-24",
    image: "https://www.friv.com/z/games/civiballs2/rectangle-gamethumb-1-civiballs2.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clciviballs2.html"
  },
  ,
  ,
  {
    row: "Multiplayer",
    title: "Cleanup.io",
    addedAt: "2026-11-24",
    image: "https://images.crazygames.com/games/cleanup-io/thumb-1563475376194.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=92",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcleanupio.html"
  },
  {
    row: "Arcade",
    title: "Cluster Rush",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/cluster.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclusterrush.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Coffee Maker",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/7416ea37-39e0-40a3-9091-7237a51c2483/1581604258/my-cafe-coffee-maker-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcoffeemaker.html"
  },
  {
    row: "Sports",
    title: "Combo Pool",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/836fd9b5-e5c0-47bb-85d8-4bc7dec7974a/3380023688/pool-stars-live-cash-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcombopool.html"
  },
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Core Ball",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/coreball.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcoreball.html"
  },
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Crazy Cattle 3D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/crazycattle3d.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrazycattle3d.html"
  },
  {
    row: "Arcade",
    title: "Crazy Chicken 3D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/crazychicken3d.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrazychicken3D.html"
  },
  ,
  ,
  ,
  {
    row: "Idle",
    title: "Csgo Clicker",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/CSGO.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcsgoclicker.html"
  },
  ,
  {
    row: "Arcade",
    title: "Curse of the Lich King",
    addedAt: "2026-11-24",
    image: "https://rare-gallery.com/uploads/posts/1117342-video-games-World-of-Warcraft-ice-mythology-World-of-Warcraft-Wrath-of-the-Lich-King-ghost-ship-screenshot-computer-wallpaper-glacial-landform-ice-cave.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcotlk.html"
  },
  {
    row: "Arcade",
    title: "Time Travel",
    addedAt: "2026-11-24",
    image: "https://slice-master.io/data/image/game/cut-the-rope-time-travel.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcuttherope.html"
  },
  {
    row: "Racing",
    title: "Cyberbung Racing",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ac2952fa-aa5a-4a0b-983a-29e7328a335b/4095744893/car-racing-game-car-games-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcyberbungracing.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Dank Tomb",
    addedAt: "2026-11-24",
    image: "https://files.gamezhero.com/game/0f4/3fe/0f43fe817221587b/images/240/danktomb.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldanktomb.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Deepest Sword",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/deepest-sword",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeepestsword.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Die in the Dungeon",
    addedAt: "2026-11-24",
    image: "https://gaming-cdn.com/images/products/18772/orig/die-in-the-dungeon-pc-mac-game-steam-cover.jpg?v=1741866154",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldieinthedungeon.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Doge Miner",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/Dogecoin.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldogeminer.html"
  },
  {
    row: "Arcade",
    title: "Doge Miner 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/dogeminer2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldogeminer2.html"
  },
  ,
  {
    row: "Arcade",
    title: "Doki Doki Literature Club",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/dokidokiliteratureclub.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldokidokiliteratureclub.html"
  },
  ,
  ,
  {
    row: "Shooter",
    title: "Doomz.io",
    addedAt: "2026-11-24",
    image: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/0fb276e6a928dd3053312cc6510d46c4/doomr-io.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoomzio.html"
  },
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Draw Climber",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/drawclimber.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldrawclimber.html"
  },
  ,
  ,
  {
    row: "Horror",
    title: "Dreader",
    addedAt: "2026-11-24",
    image: "https://files.gamezhero.com/game/142/5bf/1425bfc332f71362/images/240/dreader.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldreader.html"
  },
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Driven Wild",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/43.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldrivenwild.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Dunk Shot",
    addedAt: "2026-11-24",
    image: "https://plays.org/screenshots/dunk-shot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldunkshot.html"
  },
  ,
  {
    row: "Arcade",
    title: "Dusk Child",
    addedAt: "2026-11-24",
    image: "https://sophiehoulden.com/games/duskchild/screenshot4.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clduskchild.html"
  },
  {
    row: "Arcade",
    title: "Dying Dreams",
    addedAt: "2026-11-24",
    image: "https://e.snmc.io/i/600/s/36300927bbcf318c2c8ae7bb3adc9e81/13028288/dying-dreams-demo-2003-cover-art.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldyingdreams.html"
  },
  {
    row: "Arcade",
    title: "E Eagle Ride",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/eagle%20ride/screenshots/1-small.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleagleride.html"
  },
  ,
  {
    row: "Racing",
    title: "Edy’s Car Simulator",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/5c72a318-06fb-48a4-9438-9f9770cd1f27/3699484475/car-simulator-car-driving-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cledyscarsimulator.html"
  },
  {
    row: "Arcade",
    title: "Effing Hail",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/effing-hail.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleffinghail.html"
  },
  ,
  {
    row: "Arcade",
    title: "Elastic Face",
    addedAt: "2026-11-24",
    image: "https://a.silvergames.com/screenshots/elastic-man/funny-faces.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clelasticface.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Racing",
    title: "Escape Road",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/escaperoad.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clescaperoad.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Final Earth 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/512.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalearth2.html"
  },
  ,
  {
    row: "Arcade",
    title: "Fireblob",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/fireblob/cover/fireblob.png?w=1200&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireblob.html"
  },


  ,
  {
    row: "Arcade",
    title: "Fisquarium",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/00ce5522-ee9d-4eb4-848c-9d647f5c8bf0/2936277978/fish-aquarium-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfisquarium.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Five Nights at Baldis Redone",
    addedAt: "2026-11-24",
    image: "https://fnafgames.net/storage/images/games/five-nights-at-baldis-redone/baldifnaf300jpg.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfivenightsatbaldisredone.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Five Nights At Shrek’s Hotel",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/764.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfivenightsatshrekshotel.html"
  },
  ,
  {
    row: "Arcade",
    title: "Fluidism",
    addedAt: "2026-11-24",
    image: "https://image.winudf.com/v2/image1/MjA1OTExNTVfMTY4MTg5ODI0N18wOTk/screen-0.png?fakeurl=1&type=png&w=144",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfluidism.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Sports",
    title: "Football Legends",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/c433a745-8f9a-4c9b-a980-6ab994417439/76674142/football-legends-soccer-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfootballlegends.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Fortzone Battle Royale",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fortzonebattleroyale.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfortzone.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Shooter",
    title: "Funny Shooter 2",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/funny-shooter-2",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfunnyshooter2.html"
  },
  ,
  {
    row: "Arcade",
    title: "Geometry Dash Lite",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/geometrydashlite.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgeometrydashlite.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Getaway Shootout",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/getaway-shootout",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgetawayshootout.html"
  },
  ,
  {
    row: "Arcade",
    title: "Get On Top",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/get-on-top/cover/get-on-top.png?width=600&height=340&fit=cover&quality=90",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgetontop.html"
  },
  ,
  {
    row: "Arcade",
    title: "Gladihoppers",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gladihoppers.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgladdihoppers.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Gobble",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/37.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgobble.html"
  },
  {
    row: "Arcade",
    title: "Going Balls",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/662.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoingballs.html"
  },
  {
    row: "Arcade",
    title: "Gold Digger FRVR",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/golddiggerfrvr.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgolddiggerfrvr.html"
  },
  ,
  {
    row: "Sports",
    title: "Golf Sunday",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/screenshots/8168805-sunday-golf-atari-8-bit-swing-directions.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgolfsunday.html"
  },
  {
    row: "Sports",
    title: "Google Baseball",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/googlebaseball.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgooglebaseball.html"
  },
  {
    row: "Arcade",
    title: "Google Dino",
    addedAt: "2026-11-24",
    image: "https://www.onworks.net/imagescropped/googledinogamescreenshot1.png_3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoogledino.html"
  },
  {
    row: "Arcade",
    title: "Gorescript Classic",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/gorescript-classic.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgorescriptclassic.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Horror",
    title: "Granny Online",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grannyonline.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranny2.html"
  },
  ,
  {
    row: "Arcade",
    title: "Gravity Mod",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-file-encryption@287710a4fac80d3ea9187e9d27c8358034b2639b/pdctrsh91fc91.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgravitymod.html"
  },
  {
    row: "Arcade",
    title: "Grey Box Testing",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@main/grey%20box%20testing/Template/Blight-Borne.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgrey-box-testing.html"
  },
  {
    row: "Arcade",
    title: "Grindcraft",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/grindcraft",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgrindcraft.html"
  },
  {
    row: "Arcade",
    title: "GRN",
    addedAt: "2026-11-24",
    image: "https://gamemedia.armorgames.com/19479/icn_heroimage.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgrn.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Shooter",
    title: "Gun Knight",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunknight.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunknight.html"
  },
  {
    row: "Shooter",
    title: "Gun Night",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/gun-night-io/cover/gun-night-io.png?w=1200&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunnight.html"
  },
  ,
  {
    row: "Arcade",
    title: "Gym Stack",
    addedAt: "2026-11-24",
    image: "https://freegame.gg/thumbs/gym-stack/big-banner.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgymstack.html"
  },
  {
    row: "Simulation",
    title: "H Half Life",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@354e3c6939a08e472482653567d566ba3a2aa527/half%20life/xd.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhalflife.html"
  },
  ,
  {
    row: "Arcade",
    title: "Handulam+",
    addedAt: "2026-11-24",
    image: "https://www.coolmathgames.com/sites/cmatgame/files/styles/thumbnail_small/public/game_thumbnail/handulum-logo.png?0=itok%3Dy56_8DZ6",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhandulum.html"
  },
  {
    row: "Arcade",
    title: "Happy Room",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/happy-room/cover/happy-room.png?w=400",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhappyroom.html"
  },
  ,
  {
    row: "Arcade",
    title: "Harold's Bad Day",
    addedAt: "2026-11-24",
    image: "https://www.lexaloffle.com/media/57812/Harolds Bad Day 4 - Home Sweet Home.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clHaroldsbadday.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Hextris",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/hextrt.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhextris.html"
  },
  ,
  {
    row: "Arcade",
    title: "High Stakes",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/5573037-need-for-speed-high-stakes-playstation-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhighstakes.html"
  },
  {
    row: "Arcade",
    title: "Highway Racer",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/567.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhighwayracer2.html"
  },
  ,
  ,
  ,
  {
    row: "Multiplayer",
    title: "Hole.io",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/hole.io",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clholeio.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Hover Racer Drive",
    addedAt: "2026-11-24",
    image: "https://freezoneplay.com/wp-content/uploads/thumbs/custom/H/Hover-Racer-Drive.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhoverracerdrive.html"
  },
  ,
  {
    row: "Arcade",
    title: "Hungry Knight",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hungryknight.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhungryknight.html"
  },
  {
    row: "Arcade",
    title: "Hungry Lamu",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/hungry-lamu",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhungrylamu.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "I Ice Dodo",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/genizy/ice-dodo/assets/skins/beginner_cup.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clicedodo.html"
  },
  ,
  {
    row: "Arcade",
    title: "Icy Purple Head",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/icy%20purple%20head/icon-256.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clicypurplehead.html"
  },
  {
    row: "Idle",
    title: "Idle Breakout",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/idlebreakout.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clidlebreakout.html"
  },
  {
    row: "Idle",
    title: "Idle Dice",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/idledice.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clidledice.html"
  },
  ,
  {
    row: "Idle",
    title: "Idle Idle Game Dev",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/idle%20idle%20game%20dev/assets/img/icon/icon256.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clidleidlegamedev.html"
  },
  {
    row: "Idle",
    title: "Idle Miner Tycoon",
    addedAt: "2026-11-24",
    image: "https://admin.idleminertycoon.com/wp-content/uploads/2020/01/phone-screenshot-playable-flare-768x824.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clidleminertycoon.html"
  },
  {
    row: "Racing",
    title: "Indian Truck Simulator",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/indian-truck-simulator-3d-gh-pages/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrucksim.html"
  },
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Into Ruins",
    addedAt: "2026-11-24",
    image: "https://images.pushsquare.com/fbb8b36e30557/into-the-restless-ruins-cover.cover_large.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clintoruins.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Iron Snout",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/263c7933-e1e3-4335-81ce-be3fc63baab0/754723835/iron-snout-2-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clironsnout.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Racing",
    title: "Jelly Truck",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/smdgames/mathgames66/main/mgthumbnails/jelly-truck.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljellytruck.html"
  },
  ,
  {
    row: "Arcade",
    title: "Jet Rush",
    addedAt: "2026-11-24",
    image: "https://funzilo.com/wp-content/uploads/thumbs/custom/J/jet-rush-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljetrush.html"
  },
  {
    row: "Arcade",
    title: "Johnny Trigger",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/93.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljohnnytrigger.html"
  },
  {
    row: "Arcade",
    title: "Johnny Upgrade",
    addedAt: "2026-11-24",
    image: "https://gogamego.io/wp-content/uploads/thumbs/custom/J/Johnny-Upgrade.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljohnnyupgrade.html"
  },
  {
    row: "Arcade",
    title: "Journey Downhill",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/94.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljourneydownhill.html"
  },
  ,
  ,
  {
    row: "Platformer",
    title: "Jumping Shell",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/6da09cf7-9c4a-4fd0-ab6b-0c8082632de5/4177717682/jumping-shell-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljumpingshell.html"
  },
  ,
  {
    row: "Arcade",
    title: "Justfall.lol",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/justfalllol.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljustfalllol.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Just One Boss",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/just-one-boss.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljustoneboss.html"
  },
  {
    row: "Arcade",
    title: "K Kalikan",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/kalikan.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkalikan.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Last Horizon",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/lasthorizon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllasthorizon.html"
  },
  {
    row: "Shooter",
    title: "Leader Strike",
    addedAt: "2026-11-24",
    image: "http://www.freeworldgroup.com/g/leaderstrike/screen.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clleaderstrike.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Lock the Door",
    addedAt: "2026-11-24",
    image: "https://media.imgcdn.org/repo/2025/12/lockyourdoor/6942898a7e575-lockyourdoor-screenshot6.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllockthedoor.html"
  },
  {
    row: "Arcade",
    title: "Low Knight",
    addedAt: "2026-11-24",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4c1bfd6-740f-4577-a3d0-0cb5b71fb2df/dfmmj5j-f2fb65aa-aa32-4fc7-b8eb-c4798cf81be1.png/v1/fill/w_512,h_512,strp/hollow_knight_by_da_gamecovers_dfmmj5j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvYzRjMWJmZDYtNzQwZi00NTc3LWEzZDAtMGNiNWI3MWZiMmRmXC9kZm1tajVqLWYyZmI2NWFhLWFhMzItNGZjNy1iOGViLWM0Nzk4Y2Y4MWJlMS5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mvGvyYmQtv5mdN_p2qy5sLaYQ6XircDevGGw7eWB3Pg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllowknight.html"
  },
  ,
  ,
  {
    row: "Racing",
    title: "Madalin Stunt Cars Multiplayer",
    addedAt: "2026-11-24",
    image: "https://images.crazygames.com/games/madalin-cars-multiplayer/cover-1655194419773.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadalinstuntcarsmultiplayerfixed.html"
  },
  ,
  {
    row: "Racing",
    title: "Mad Skills Motocross 2",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@669e737b43782d68d3096554921900ab151355ff/motocross%20mad%20skills/body.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadskillsmotocross2.html"
  },
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Mana God",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/19648295-legend-of-mana-windows-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmanagod.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Masked Forces Unlimited",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/masked-forces-unlimited/cover/masked-forces-unlimited.png?w=320&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaskedforcesunlimited.html"
  },
  ,
  {
    row: "Arcade",
    title: "Melon Playground",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/172.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmelonplayground.html"
  },
  ,
  {
    row: "Arcade",
    title: "Merge Round Racers",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/merge-round-racers",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmergeroundracers.html"
  },
  {
    row: "Arcade",
    title: "Mimic",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/98e6d0bc-56eb-49af-950c-caccbd53cf4d/560449248/the-mimic-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmimic.html"
  },
  ,
  ,
  {
    row: "Runner",
    title: "Minecraft Parkour",
    addedAt: "2026-11-24",
    image: "https://static.planetminecraft.com/files/resource_media/screenshot/1232/minecraft-parkour_3203406.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblockcraftparkour.html"
  },
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Mini Crossword",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/genizy/braybray/crossword/media/graphics/orientate/landscape.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clminicrossword.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Mini Tooth",
    addedAt: "2026-11-24",
    image: "https://files.gamezhero.com/game/2c5/b3b/2c5b3ba45d802e18/images/240/minitooth.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clminitooth.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Monster Tracks",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/monster-tracks",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmonstertracks.html"
  },
  {
    row: "Racing",
    title: "Monster Truck Port Stunt",
    addedAt: "2026-11-24",
    image: "https://games18plus.com/wp-content/uploads/thumbs/custom/M/Monster-Truck-Port-Stunt.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmonstertruckportstunt.html"
  },
  {
    row: "Arcade",
    title: "Monkey Mart",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/Monkey Mart",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmonkeymart.html"
  },
  ,
  ,


  {
    row: "Racing",
    title: "MotoX3m3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/98.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3m3.html"
  },
  {
    row: "Sports",
    title: "MotoX3m Pool Party",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/motox3m-pool.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3mpoolparty.html"
  },
  {
    row: "Racing",
    title: "MotoX3m Spooky Land",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/moto-spook.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3mspookyland.html"
  },
  {
    row: "Racing",
    title: "MotoX3m Winter",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/brunoiscool2/unblockedgames/main/icons/motox3m-winter.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotox3mwinter.html"
  },
  {
    row: "Racing",
    title: "Mountain Bike Racer",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/774.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmountainbikeracer.html"
  },
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Neon Blaster",
    addedAt: "2026-11-24",
    image: "https://s.cafebazaar.ir/images/upload/screenshot/com.neonblaster-dfcb69b4-b074-4d23-8451-985b77827093.png?x-img=v1/resize,h_600,lossless_false/optimize",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clneonblaster.html"
  },
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "N-gon",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/n-gon",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clngon.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Noob Miner",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/noob-miner-2-escape-from-prison/cover/noob-miner-2-escape-from-prison.png?width=600&height=340&fit=cover&quality=90",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnoobminer.html"
  },
  {
    row: "Arcade",
    title: "Not Your Pawn",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/4003443-the-pawn-atari-st-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnotyourpawn.html"
  },
  ,
  {
    row: "Puzzle",
    title: "Nuts and Bolts Screwing Puzzle",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/8a1897ab-ca54-4027-88f5-474f8635b557/2585883923/screw-puzzle-nuts-bolts-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clNutsandBoltsScrewingPuzzle.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Obby 99% Will Lose",
    addedAt: "2026-11-24",
    image: "https://images.airdroid.com/2024/09/game-booster-screenshot-shortcut.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clobby-99-will-lose.html"
  },
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Obby Robby - Only Up",
    addedAt: "2026-11-24",
    image: "https://www.y9freegames.com/wp-content/uploads/thumbs/custom/O/Obby-Robby-Only-up.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clobbyonlyup.html"
  },
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Offline Paradise",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/offlineparadise.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clofflineparadise.html"
  },
  ,
  ,
  {
    row: "Idle",
    title: "Omega Nugget Clicker",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e6e19515-72da-4922-91a8-28637e52cd21/1974878838/omega-nugget-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clomeganuggetclicker.html"
  },
  {
    row: "Adventure",
    title: "Onebit Adventure",
    addedAt: "2026-11-24",
    image: "https://cdn.technobezz.com/games/games/cover/onebit-adventure/onebit-adventure-cover-gamebezz-com.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clonebitadventure.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Only Up",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/onlyup.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clonlyup.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Operius",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/screenshots/25175126-operius-windows-sector-2.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cloperius.html"
  },
  {
    row: "Arcade",
    title: "Opposite Day",
    addedAt: "2026-11-24",
    image: "https://www.coolmathgames.com/sites/default/files/styles/blog_node_image/public/2024-04/How Not to Play Opposite Day Game Thumbnail.png.webp?itok=JY4SforR",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cloppositeday.html"
  },
  {
    row: "Arcade",
    title: "Orb of Creation",
    addedAt: "2026-11-24",
    image: "https://www.allkeyshop.com/blog/wp-content/uploads/buy-orb-of-creation-cd-key-compare-prices.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clorbofcreation.html"
  },
  {
    row: "Rhythm",
    title: "osu!",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/osu!",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/closu.html"
  },
  {
    row: "Arcade",
    title: "OVO",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/ovo",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clovo.html"
  },

  {
    row: "Multiplayer",
    title: "P Paper.io",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/MartinTintin3/melvin-games@e4de505d194355c344977981cdf3b2cfe5075c52/games/paper.io-2/images/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpaperio.html"
  },
  {
    row: "Multiplayer",
    title: "Paper.io 3D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/paperio3d.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpaperio3d.html"
  },
  ,
  {
    row: "Arcade",
    title: "Penguin Diner",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@983ac580e56eef2c58c19568d68445148f5defe3/penguin%20diner/assets/cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpenguindiner.html"
  },
  ,
  {
    row: "Arcade",
    title: "Perfect Hotel",
    addedAt: "2026-11-24",
    image: "https://brainide.com/wp-content/uploads/2026/01/my-perfect-hotel-cover-1024x535.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clperfecthotel.html"
  },
  ,
  {
    row: "Arcade",
    title: "Phasma",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/phasma.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clphasma.html"
  },
  {
    row: "Arcade",
    title: "Pico Driller",
    addedAt: "2026-11-24",
    image: "https://www.lexaloffle.com/bbs/thumbs/pico8_picodriller-0.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpicodriller.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Pico Night Punkin",
    addedAt: "2026-11-24",
    image: "https://carsonk.net/content/works/games/pico-night-punkin/Screenshot2.gif",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpiconightpunkin.html"
  },
  ,
  {
    row: "Arcade",
    title: "Pieces of Cake",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/pieces-of-cake.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpiecesofcake.html"
  },
  {
    row: "Arcade",
    title: "Ping Pong Chaos",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/63c51378-4d45-4ff4-86c2-62fb11be624f/1807288830/ping-pong-chaos-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpingpongchaos.html"
  },
  ,
  {
    row: "Multiplayer",
    title: "Pixel Battlegrounds.io",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/pixel-battlegrounds-io/cover/pixel-battlegrounds-io.png?width=600&height=340&fit=cover&quality=90",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpixelbattlegroundsio.html"
  },
  {
    row: "Shooter",
    title: "Pixel Combat 2",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/pixel-combat-2",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpixelcombat2.html"
  },
  ,
  {
    row: "Shooter",
    title: "Pixel Shooter",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/4d06b95a-565b-493c-9cce-e7f4e4b27265/875180732/firefighter-pixel-shooter-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpixelshooter.html"
  },
  ,
  {
    row: "Arcade",
    title: "Pizza Tower",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/pizzatower.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpizzatower.html"
  },
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Pou",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pou.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clPou.html"
  },
  ,
  ,
  ,
  ,

  ,
  ,
  {
    row: "Arcade",
    title: "Porklike",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/porklike-wurst-comes-to-worst.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clporklike.html"
  },
  {
    row: "Arcade",
    title: "Porter",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/screenshots/16695646-valerie-porter-and-the-scarlet-scandal-windows-titlemenu-screen.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clporter.html"
  },
  ,
  ,
  ,
  ,
  ,
  {
    row: "Action",
    title: "Praxis Fighter X",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/praxis-fighter-x.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpraxisfighterx.html"
  },
  {
    row: "Arcade",
    title: "Pullfrog",
    addedAt: "2026-11-24",
    image: "http://www.coolmathgames.com/sites/default/files/pullfrog-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpullfrog.html"
  },
  {
    row: "Sports",
    title: "Puppet Hockey",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/puppet%20hockey/icon-256.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpuppethockey.html"
  },
  ,
  {
    row: "Arcade",
    title: "Push Your Luck",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/push-your-luck",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpushyourluck.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Ragdoll Archers",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/186.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clragdollarchers.html"
  },
  ,
  {
    row: "Arcade",
    title: "Ragdoll Hit",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/44.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clragdollhit.html"
  },
  ,
  {
    row: "Sports",
    title: "Ragdoll Soccer",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/085f11c7-0230-47f0-9183-7b7d98dcd1d7/989397071/ballmasters-ragdoll-soccer-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clragdollsoccer.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Recoil",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/recoil.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrecoil.html"
  },
  {
    row: "Arcade",
    title: "Red Ball 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/redball4.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clRedBall4.html"
  },
  ,
  {
    row: "Runner",
    title: "Red Tie Runner",
    addedAt: "2026-11-24",
    image: "https://www.numuki.com/game/card/red-tie-runner-2226.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredtierunner.html"
  },
  {
    row: "Arcade",
    title: "Red vs. Blue",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/redvsblue/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredvsblue2.html"
  },
  ,
  {
    row: "Arcade",
    title: "Resizer",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/05b65f49-3e26-4068-aea1-cfa6e5aafbdd/2777541320/photo-resizer-image-compressor-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clresizer.html"
  },
  {
    row: "Arcade",
    title: "Retro Bowl College",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/retrobowlcollege.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clretrobowlcollege.html"
  },
  ,
  ,
  {
    row: "Puzzle",
    title: "Return to Riddle School",
    addedAt: "2026-11-24",
    image: "https://archive.org/download/2-lt-return-to-riddle-school-developer-commentary-fan-game/2-lt-return-to-riddle-school-developer-commentary-fan-game.thumbs/[2LT] Return to Riddle School Developer Commentary (Fan Game)_000055.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clreturntoriddleschool.html"
  },
  {
    row: "Idle",
    title: "Revolution Idle",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/19414151-revolution-idle-2-browser-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrevolutionidle.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Robby Blocks",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-file-encryption@754a57837e92bb4552e8247c6a401bd4ce8e4ee7/images.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clluckyblocks.html"
  },
  {
    row: "Arcade",
    title: "Rocket League",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/Rocket-League",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrocketleague.html"
  },
  {
    row: "Sports",
    title: "Rocket Soccer Derby",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cadillacghost/Unblocked-Games/main/images/thumbnails/rocketsoccer.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrocketsoccerderby.html"
  },
  {
    row: "Arcade",
    title: "Rodha",
    addedAt: "2026-11-24",
    image: "https://www.mathplayground.com/images/rodha_thumbnail.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrodha.html"
  },
  {
    row: "Arcade",
    title: "Roller Baller",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/9346736-rollerballer-windows-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrollerballer.html"
  },
  ,
  {
    row: "Arcade",
    title: "Rolly Vortex",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/rolly-vortex",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrollyvortex.html"
  },
  ,
  {
    row: "Idle",
    title: "Room Clicker",
    addedAt: "2026-11-24",
    image: "https://www.blurrygames.com/wp-content/uploads/thumbs/custom/R/room-clicker-150x150.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clroomclicker.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Racing",
    title: "Russian Car Driver",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/russiancardriver.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrussiancardriver.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Sandboxels",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/sandboxels",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsandboxels.html"
  },
  {
    row: "Arcade",
    title: "Sandtris",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/311.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsandtris.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Scrap Metal 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/188.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clscrapmetal3.html"
  },
  {
    row: "Arcade",
    title: "Scuba Bear",
    addedAt: "2026-11-24",
    image: "https://www.kidloland.com/games-for-kids/thumbnails/scuba-bear.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clscubabear.html"
  },
  {
    row: "Arcade",
    title: "Sea Mongrel",
    addedAt: "2026-11-24",
    image: "https://files.gamezhero.com/game/ef9/60e/ef960e1a6e495d05/images/240/seamongrel.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clseamongrel.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Simulation",
    title: "Short Life",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/4edbfc39-6755-4566-8732-4ddbedbb46cf/1358787186/short-life-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshortlife.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Racing",
    title: "Skibidi in the Backrooms",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/skibidiinthebackrooms.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clskibidiinthebackrooms.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Slice It All",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/128.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsliceitall.html"
  },
  ,
  {
    row: "Arcade",
    title: "Slide in the Woods",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/slide-in-the-woods.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslideinthewoods.html"
  },
  {
    row: "Arcade",
    title: "Slipways",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/10068284-slipways-windows-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslipways.html"
  },
  {
    row: "Arcade",
    title: "Slope 2 player",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cadillacghost/Unblocked-Games/main/images/thumbnails/slope2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslope2player.html"
  },
  {
    row: "Arcade",
    title: "Slope 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/slope3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslope3.html"
  },
  {
    row: "Arcade",
    title: "Slot or Not",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/slot%20or%20not/index.apple-touch-icon.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslotornot.html"
  },
  {
    row: "Racing",
    title: "Slow Roads",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/369.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslowroads.html"
  },
  {
    row: "Arcade",
    title: "Snakelike",
    addedAt: "2026-11-24",
    image: "https://files.gamezhero.com/game/1e7/201/1e72019fc41eae66/images/240/snakelike.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnakelike.html"
  },
  {
    row: "Shooter",
    title: "Sniper Shot",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/meymenet645x/xu@main/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnipershot.html"
  },
  {
    row: "Shooter",
    title: "Sniper v2",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/tty67hlt6jf6/c2@main/TemplateData/img/Logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsniperv2.html"
  },
  {
    row: "Multiplayer",
    title: "Snowball.io",
    addedAt: "2026-11-24",
    image: "https://snowrider3d-io.github.io/assets/snowball-io.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnowballio.html"
  },
  {
    row: "Racing",
    title: "Alt Snow Rider",
    addedAt: "2026-11-24",
    image: "https://gamefabrique.com/storage/screenshots/ps2/snow-rider-03.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnowriderrrr.html"
  },
  {
    row: "Racing",
    title: "Snow Road",
    addedAt: "2026-11-24",
    image: "https://merge-brainrot.com/thumbs/snow-road-3d_2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnowroad.html"
  },
  {
    row: "Sports",
    title: "Soccer Random",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/soccer-random",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsoccerrandom.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Platformer",
    title: "Sonic CD",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/589.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsoniccd.html"
  },
  ,
  ,
  {
    row: "Platformer",
    title: "Sonic Revert",
    addedAt: "2026-11-24",
    image: "https://kbhgames.com/wp-content/uploads/2014/11/Sonic-The-Hedgehog-3-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicrevert.html"
  },
  ,
  {
    row: "Platformer",
    title: "Soul Jumper",
    addedAt: "2026-11-24",
    image: "https://cdn2.y8.com/cloudimage/34583/file/w180h135_webp-1dd7063a5657365dd9fec300cf83c6c2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsouljumper.html"
  },
  {
    row: "Idle",
    title: "Spacebar Clicker",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/spacebar-clicker",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspacebarclicker.html"
  },
  {
    row: "Arcade",
    title: "Space Company",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/space-company",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspacecompany.html"
  },
  ,
  {
    row: "Arcade",
    title: "Space Waves",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/spacewaves.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspacewaves.html"
  },
  ,
  {
    row: "Racing",
    title: "Speed Stars",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/speedstars.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspeedstars.html"
  },
  ,
  {
    row: "Arcade",
    title: "Spiral Roll",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/349.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspiralroll.html"
  },
  ,
  {
    row: "Arcade",
    title: "Sprunked",
    addedAt: "2026-11-24",
    image: "https://s.detools.dev/games/sprunked-in-the-retake-style/cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsprunked.html"
  },
  {
    row: "Arcade",
    title: "Sprunki",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sprunki.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsprunki.html"
  },
  {
    row: "Idle",
    title: "Sprunki Clicker",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/sprunki-clicker-game/cover/sprunki-clicker-game.png?w=320&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsprunkiclicker.html"
  },
  ,
  {
    row: "Arcade",
    title: "Squid Playground",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/squid-game-3-playground/cover/squid-game-3-playground.png?w=320&ar=16:10",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsquidplayground.html"
  },
  {
    row: "Multiplayer",
    title: "Stackball.io",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cadillacghost/Unblocked-Games/main/images/thumbnails/stack.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstackballio.html"
  },
  {
    row: "Arcade",
    title: "Stacktris",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/stacktris/webapp/cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstacktris.html"
  },
  ,
  {
    row: "Arcade",
    title: "Station 141",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/station-141",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstation141.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Stick Archers Battle",
    addedAt: "2026-11-24",
    image: "https://img.gamepix.com/games/stick-archers-battle/cover/stick-archers-battle.png?width=320&height=180&fit=cover&quality=90",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickarchersbattle.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Action",
    title: "Stickman Duel",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/stickmanduel.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickmanduel.html"
  },
  {
    row: "Simulation",
    title: "Stickman gta City",
    addedAt: "2026-11-24",
    image: "https://www.gamenora.com/upload/games/thumbnails/Stickman GTA City.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickmangtacity.html"
  },
  {
    row: "Strategy",
    title: "Stickman Kingdom Clash",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@646b8183aa1d6c61b073dc5ade2f550bace125b9/Stickman%20Clash/index.icon.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clStickmanKingdomclash.html"
  },
  ,
  {
    row: "Arcade",
    title: "Stick Merge",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/stick-merge",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickmerge.html"
  },
  {
    row: "Arcade",
    title: "Stick Slasher",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/767.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickslasher.html"
  },
  ,
  {
    row: "Shooter",
    title: "Strikeforce Kitty",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/830733-strikeforce-kitty-browser-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsfk.html"
  },
  {
    row: "Shooter",
    title: "Strikeforce Kitty 2",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/9702593-strikeforce-kitty-2-browser-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsfk2.html"
  },
  {
    row: "Shooter",
    title: "Strikeforce Kitty Last Stand",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/9711719-strikeforce-kitty-last-stand-browser-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsfklaststand.html"
  },
  {
    row: "Shooter",
    title: "Strikeforce Kitty League",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/9728021-strikeforce-kitty-league-browser-front-cover.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsfkleague.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Suika Game",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/766.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuika.html"
  },
  {
    row: "Arcade",
    title: "Suika Pico",
    addedAt: "2026-11-24",
    image: "https://suika-game.io/cache/data/image/game/pico-park-cover-m300x300.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuikapico.html"
  },
  {
    row: "Racing",
    title: "Super Car Rush",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/412eec6d-5f56-4539-82cc-651347ec1eb1/275827979/car-rush-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupercarrush.html"
  },
  ,
  {
    row: "Arcade",
    title: "Super Dark Deception",
    addedAt: "2026-11-24",
    image: "https://gocdkeys.fr/assets/thumbnails/super-dark-deception-nintendo-switch-1.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperdarkdeception.html"
  },
  ,
  {
    row: "Arcade",
    title: "Superhot Line Miami",
    addedAt: "2026-11-24",
    image: "https://www.moregameslike.com/wp-content/screenshots/superhotline-miami-deluxe-36755-1.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperhotlinemiami.html"
  },
  {
    row: "Adventure",
    title: "Super Kid Adventure",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/super%20kid%20adventure/icon-128.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperkidadventure.htm"
  },
  {
    row: "Sports",
    title: "Super Liquid Soccer",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/CalcSolver/OctoArcade/main/Icon/superliquidsoccer.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperliquidsoccer.html"
  },
  ,
  ,
  {
    row: "Platformer",
    title: "Super Mario Bros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/Cat-haha/unblocked-games/main/images/thumbnails/supermariobros.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariobros.html"
  },
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Super Oliver World",
    addedAt: "2026-11-24",
    image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/f25de69b-1e47-4f46-b172-b3b0f1a40548/1095891075/super-oliver-world-game-screenshot.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperoliverworld.html"
  },
  ,
  ,
  ,
  ,
  ,
  {
    row: "Racing",
    title: "Survival Race v2",
    addedAt: "2026-11-24",
    image: "https://plays.org/screenshots/survival-race.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsurvivalracev2.html"
  },
  ,
  {
    row: "Arcade",
    title: "Sushi Unroll",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/sushi-unroll",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsushiunroll.html"
  },
  ,
  {
    row: "Arcade",
    title: "Switchblade",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/switchblade/index.apple-touch-icon.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswitchblade.html"
  },
  ,
  ,
  {
    row: "Arcade",
    title: "Table Tanks",
    addedAt: "2026-11-24",
    image: "https://cdn.jsdelivr.net/gh/tharun9772/game-assets@main/tabe-tanks.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltabletanks.html"
  },
  {
    row: "Sports",
    title: "Table Tennis World Tour",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/table%20tennis%20world%20tour/html5games/images/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltabletennisworldtour.html"
  },
  ,
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "Tank Pixel",
    addedAt: "2026-11-24",
    image: "https://img.freepik.com/premium-vector/pixel-art-war-game-splash-screen-with-war-tanks-street-vector-background-8bit-game_360488-1426.jpg?w=2000",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltankpixel.html"
  },
  {
    row: "Arcade",
    title: "Tanuki Sunset",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/tanuki-sunset",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltanukisunset.html"
  },
  ,
  {
    row: "Arcade",
    title: "Telephone Trouble",
    addedAt: "2026-11-24",
    image: "https://www.browsercraft.com/images/games/covers/telephone-trouble.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltelephonetrouble.html"
  },
  ,
  {
    row: "Arcade",
    title: "Terra",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/terra.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clterra.html"
  },
  ,
  ,
  ,
  ,
  ,
  {
    row: "Arcade",
    title: "There is No Game",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/there-is-no-game",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthereisnofile.html"
  },
  ,
  ,
  ,
  {
    row: "Puzzle",
    title: "Three Goblets",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/freebuisness/covers/main/620.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthreegoblets.html"
  },
  {
    row: "Arcade",
    title: "Throw a Potato",
    addedAt: "2026-11-24",
    image: "https://playszgames.com/wp-content/uploads/thumbs/custom/T/Throw-a-Potato-150x150.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthrowapotato.html"
  },
  {
    row: "Arcade",
    title: "Throw a Potato Again",
    addedAt: "2026-11-24",
    image: "https://gamesdizi.com/wp-content/uploads/2023/11/throw-a-potato-again-240x150.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthrowapotatoagain.html"
  },
  ,
  {
    row: "Shooter",
    title: "Time Shooter 2",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/time-shooter-2",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltimeshooter2.html"
  },
  {
    row: "Shooter",
    title: "Time Shooter 3",
    addedAt: "2026-11-24",
    image: "https://hfmanor.com/image/time-shooter-3",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltimeshooter3.html"
  },
  {
    row: "Strategy",
    title: "Timewarriors",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/time%20warriors/game_logo_en.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltimewarriors.html"
  },
  {
    row: "Arcade",
    title: "To a Starling",
    addedAt: "2026-11-24",
    image: "https://browsercraft.com/images/games/covers/to-a-starling.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltoastarling.html"
  },
  ,
  {
    row: "Racing",
    title: "Top Speed Racing 3D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/bubbls/UGS-Assets/main/top%20speed%20racing%203d/TemplateData/logo.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltopspeedracing3d.html"
  },
  {
    row: "Arcade",
    title: "Tower Blocks",
    addedAt: "2026-11-24",
    image: "https://staticz.novelgames.com/flashgames/towerblocks/screenshot_600x400.2.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltowerblocks.html"
  }
,
  {
    row: "Sports",
    title: "1 on 1 Soccer",
    addedAt: "2026-11-24",
    image: "https://media.plix.gg/flash/game-thumbs/1-on-1-soccer/960.webp?v=1781866397532",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1on1soccer.html"
  },
  {
    row: "Arcade",
    title: "3Dash",
    addedAt: "2026-11-24",
    image: "https://geodash.org/images/3dash-image.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl3dash.html"
  },
  {
    row: "Adventure",
    title: "Bob the Robber 2",
    addedAt: "2026-11-24",
    image: "https://img2.ugamezone.com/201901/2019/0614/34/3/313185/original.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbobtherobber2.html"
  },
  {
    row: "Adventure",
    title: "Cactus McCoy",
    addedAt: "2026-11-24",
    image: "https://images.rocketgames.io/uploads/games/c/cactus-mccoy/cactus-mccoy.138c55.jpg?dpr=2&w=204",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcactusmccoy.html"
  },
  {
    row: "Arcade",
    title: "Burrito Bison",
    addedAt: "2026-11-24",
    image: "https://juicybeast.com/press/burrito_bison_launcha_libre/images/icon.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clburritobison.html"
  },
  {
    row: "Sports",
    title: "Backyard Baseball",
    addedAt: "2026-11-24",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/cocc79.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackyardbaseball.html"
  }
,
  {
    row: "Simulation",
    title: "Eaglercraft Alpha 1.2.6 Offline",
    addedAt: "2026-11-24",
    image: "https://eaglercraftx.org/data/image/game/eaglercraft-alpha-1.2.6.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/Eaglercraft-Alpha-1.2.6-Offline.html"
  },
  {
    row: "Simulation",
    title: "Eaglercraft Beta 1.3 Offline",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/eaglercraft.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/Eaglercraft-Beta-1.3-Offline.html"
  },
  {
    row: "Simulation",
    title: "Eaglercraft Indev Offline (1)",
    addedAt: "2026-11-24",
    image: "https://eaglecraft.com.co/uploads/eaglercraft-indev-image.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/Eaglercraft-Indev-Offline%20(1).html"
  },
  {
    row: "Simulation",
    title: "Eaglercraft Indev Offline",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/minecraftindev.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/Eaglercraft-Indev-Offline.html"
  },
  {
    row: "Simulation",
    title: "Eaglercraft L 1.9 V 0 7 0 Offline Signed",
    addedAt: "2026-11-24",
    image: "https://user-images.githubusercontent.com/67106394/210432989-0d541ef1-bd39-4b90-9bb1-c0ffae1b9c3e.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/EaglercraftL_1.9_v0_7_0_Offline_Signed.html"
  },
  {
    row: "Simulation",
    title: "Eaglercraft X 1.8.8(u 29)",
    addedAt: "2026-11-24",
    image: "https://gamingshitposting.github.io/SalaMuseoGames/assets/media/games/minecraft/Screenshot%20from%202024-04-20%2000-03-23.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/EaglercraftX%201.8.8(u29).html"
  },
  {
    row: "Simulation",
    title: "Eaglercraft Z 1.11.2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/eaglercraftx1122.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/EaglercraftZ_1.11.2.html"
  },
  {
    row: "Arcade",
    title: "Minceraft I Not Mine V 6",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/minecraft.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/Minceraft-I-NotMine_V6.html"
  },
  {
    row: "Arcade",
    title: "1",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/1.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1.html"
  },
  {
    row: "Runner",
    title: "100 Skibidistillwaterthosewhoknow",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl100skibidistillwaterthosewhoknow.html"
  },
  {
    row: "Shooter",
    title: "10 Bullets",
    addedAt: "2026-11-24",
    image: "https://imgs.crazygames.com/10-bullets-html-5.png?fit=crop&height=630&metadata=none&quality=100&width=1200",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl10bullets.html"
  },
  {
    row: "Sports",
    title: "1 ON 1 Tennis",
    addedAt: "2026-11-24",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuh0Fwz-9jVLyOnk2faOKwNRiDNw5_COocg&usqp=CAU",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1on1tennis.html"
  },
  {
    row: "Arcade",
    title: "1 V 1 Doubleimprettysureitsexactlythesameidk",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/1v1lol.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1v1doubleimprettysureitsexactlythesameidk.html"
  },
  {
    row: "Arcade",
    title: "1 V 1 Lolifnoaboutblank",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1v1lolifnoaboutblank.html"
  },
  {
    row: "Arcade",
    title: "1 V 1 Lolnoaboutblank",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1v1lolnoaboutblank.html"
  },
  {
    row: "Arcade",
    title: "1 V 1 Maybeidk",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl1v1maybeidk.html"
  },
  {
    row: "Shooter",
    title: "2 Doom",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doom.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl2doom.html"
  },
  {
    row: "Arcade",
    title: "2 Dshooting(1)",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl2dshooting(1).html"
  },
  {
    row: "Arcade",
    title: "3 Slices 2",
    addedAt: "2026-11-24",
    image: "https://jayisgames.com/images/lvl17.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl3slices2.html"
  },
  {
    row: "Puzzle",
    title: "40 Exescape",
    addedAt: "2026-11-24",
    image: "https://a.silvergames.com/screenshots/40xescape/1_menu.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl40exescape.html"
  },
  {
    row: "Platformer",
    title: "60 Secondsburgerrun",
    addedAt: "2026-11-24",
    image: "https://www.touchtapplay.com/wp-content/uploads/2023/02/image-23-e1675504117354.png?resize=640%2C427&w=650",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl60secondsburgerrun.html"
  },
  {
    row: "Platformer",
    title: "60 Secondssantarun",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/60ssantarun.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl60secondssantarun.html"
  },
  {
    row: "Platformer",
    title: "60 Secsantarun",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/60ssantarun.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl60secsantarun.html"
  },
  {
    row: "Sports",
    title: "8 Ballpool",
    addedAt: "2026-11-24",
    image: "https://imgs.crazygames.com/8-ball-pool-wyr_1x1/20251027031134/8-ball-pool-wyr_1x1-cover?format=auto&metadata=none&quality=100&width=1200",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cl8ballpool.html"
  },
  {
    row: "Arcade",
    title: "Awesome Pirates",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clAwesomePirates.html"
  },
  {
    row: "Arcade",
    title: "B 3313",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clB3313.html"
  },
  {
    row: "Arcade",
    title: "Bmx 2",
    addedAt: "2026-11-24",
    image: "https://image.yaksgames.com/v2/game/0/9/1/09186c9f9bc92c43c844fb65fe604a75.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clBMX2.html"
  },
  {
    row: "Arcade",
    title: "Btd 1",
    addedAt: "2026-11-24",
    image: "https://imgs.crazygames.com/auto-covers/bloons-tower-defense_1x1.jpg?format=auto&metadata=none&quality=100&width=1200",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clBTD1.html"
  },
  {
    row: "Arcade",
    title: "Big Time Butter Baron",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clBig_Time_Butter_Baron.html"
  },
  {
    row: "Racing",
    title: "Cartoon Network Table Tennis Ultimate Tournament",
    addedAt: "2026-11-24",
    image: "https://googlebaseball.io/data/image/game/table-tennis-ultimate-tournament/table-tennis-ultimate-tournament.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clCartoonNetworkTableTennisUltimateTournament.html"
  },
  {
    row: "Adventure",
    title: "Dragon Ball Z The Legacyof Goku",
    addedAt: "2026-11-24",
    image: "https://cdn.wikimg.net/en/strategywiki/images/thumb/8/84/Dragon_Ball_Z-_The_Legacy_of_Goku_%28us%29_cover.jpg/800px-Dragon_Ball_Z-_The_Legacy_of_Goku_%28us%29_cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clDragonBallZTheLegacyofGoku.html"
  },
  {
    row: "Platformer",
    title: "F Fsonic 1",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic1.html"
  },
  {
    row: "Platformer",
    title: "F Fsonic 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic2.html"
  },
  {
    row: "Platformer",
    title: "F Fsonic 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic3.html"
  },
  {
    row: "Platformer",
    title: "F Fsonic 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic4.html"
  },
  {
    row: "Platformer",
    title: "F Fsonic 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic5.html"
  },
  {
    row: "Platformer",
    title: "F Fsonic 61",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic61.html"
  },
  {
    row: "Platformer",
    title: "F Fsonic 62",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFFsonic62.html"
  },
  {
    row: "Sports",
    title: "Fifa 07",
    addedAt: "2026-11-24",
    image: "https://uk.static.webuy.com/product_images/Gaming/Xbox%20360%20Software/5030930054120_l.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFA07.html"
  },
  {
    row: "Sports",
    title: "Fifa 10",
    addedAt: "2026-11-24",
    image: "https://retrospillkongen.no/cdn/shop/files/MG_9204_600x.jpg?v=1692188789",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFA10.html"
  },
  {
    row: "Sports",
    title: "Fifa 11",
    addedAt: "2026-11-24",
    image: "https://retrospillkongen.no/cdn/shop/files/MG_2636.jpg?v=1702207504",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFA11.html"
  },
  {
    row: "Sports",
    title: "Fifa 2000(1)",
    addedAt: "2026-11-24",
    image: "https://media.s-bol.com/NR1Am1rG9WND/568KmA/1171x1200.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFA2000(1).html"
  },
  {
    row: "Sports",
    title: "Fifa 99",
    addedAt: "2026-11-24",
    image: "https://www.pjsgames.com/cdn/shop/products/game-fifa-99-4_1024x.jpg?v=1452800659",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFA99.html"
  },
  {
    row: "Sports",
    title: "Fif Ainternationalsoccer",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/4689934-fifa-international-soccer-snes-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAinternationalsoccer.html"
  },
  {
    row: "Arcade",
    title: "Fif Aroadtoworldcup 98",
    addedAt: "2026-11-24",
    image: "https://image.jeuxvideo.com/images-sm/pc/f/i/fi98pc0f.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAroadtoworldcup98.html"
  },
  {
    row: "Sports",
    title: "Fif Asoccer 06",
    addedAt: "2026-11-24",
    image: "https://storage.googleapis.com/images.pricecharting.com/mk63h2smhyko72rf/1600.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAsoccer06.html"
  },
  {
    row: "Sports",
    title: "Fif Asoccer 95",
    addedAt: "2026-11-24",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/coccjx.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAsoccer95.html"
  },
  {
    row: "Sports",
    title: "Fif Asoccer 96",
    addedAt: "2026-11-24",
    image: "https://www.vgchartz.com/games/boxart/full_fifa-soccer-96_6AmericaFront.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAsoccer96.html"
  },
  {
    row: "Sports",
    title: "Fif Asoccer 97",
    addedAt: "2026-11-24",
    image: "https://cdn.mobygames.com/covers/5837098-fifa-soccer-97-playstation-front-cover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAsoccer97.html"
  },
  {
    row: "Arcade",
    title: "Fif Astreet 2",
    addedAt: "2026-11-24",
    image: "https://www.goohoo.nl/images/thumbnails/737/737/detailed/1/fifa-street-2-playstation-2.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clFIFAstreet2.html"
  },
  {
    row: "Arcade",
    title: "Gettothetopalthoughthereisnotop",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/thereisnogame.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clGettothetopalthoughthereisnotop.html"
  },
  {
    row: "Platformer",
    title: "Jump",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/geometryjump.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clJUMP.html"
  },
  {
    row: "Sports",
    title: "Ken Griffey JR Presents Major League Baseball",
    addedAt: "2026-11-24",
    image: "https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280w/products/26375/27763/griffey_mlb__36919.1712852163.jpg?c=2",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clKenGriffeyJrPresentsMajorLeagueBaseball.html"
  },
  {
    row: "Racing",
    title: "Metal Sonic Hyperdrive",
    addedAt: "2026-11-24",
    image: "https://images.steamusercontent.com/ugc/501399955308388179/D1689A8A373BF415D3E8EB5C4ABDF356223E9313/?ima=fit&imcolor=%23000000&impolicy=Letterbox&imw=512&letterbox=false",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clMetalSonicHyperdrive.html"
  },
  {
    row: "Arcade",
    title: "NB Ahangtime",
    addedAt: "2026-11-24",
    image: "https://cdn2.steamgriddb.com/grid/872ddb5bcc4dff4db42fd5be7a1e3b65.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clNBAhangtime.html"
  },
  {
    row: "Arcade",
    title: "NB Ajam",
    addedAt: "2026-11-24",
    image: "https://i5.walmartimages.com/seo/Acclaim-NBA-Jam-PlayStation-2-Sports-Video-Game_1b7571b8-7a5f-4896-9539-39d228496999.42fed9609ded86db6b9a6d428db78b92.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clNBAjam.html"
  },
  {
    row: "Arcade",
    title: "Nicktoons Freeze Frame Frenzy",
    addedAt: "2026-11-24",
    image: "https://images.stopgame.ru/games/logos/29166/c1120x1120/l0gwUG7iHFSUKbY8orErhg/nicktoons_freeze_frame_frenzy-square.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clNicktoonsFreezeFrameFrenzy.html"
  },
  {
    row: "Arcade",
    title: "Pokemonemeraldrouge",
    addedAt: "2026-11-24",
    image: "https://images.igdb.com/igdb/image/upload/t_1080p_2x/co6i7g.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clPokemonemeraldrouge.html"
  },
  {
    row: "Arcade",
    title: "Pokemonrocketedition",
    addedAt: "2026-11-24",
    image: "https://retrogamesnexus.com/images/games/cover/gba/pokemon-edicion-team-rocket.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clPokemonrocketedition.html"
  },
  {
    row: "Arcade",
    title: "Pokémonstunningsteel",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clPok%C3%A9monstunningsteel.html"
  },
  {
    row: "Platformer",
    title: "Sonic 1 Score Rush",
    addedAt: "2026-11-24",
    image: "https://shc-dist.lostsig.co/images/contest2022/3243.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clSonic1ScoreRush.html"
  },
  {
    row: "Platformer",
    title: "Sonic 2 Score Rush",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clSonic2ScoreRush.html"
  },
  {
    row: "Platformer",
    title: "Sonic Hellfire Saga",
    addedAt: "2026-11-24",
    image: "https://shc-dist.lostsig.co/images/contest2023/5626.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clSonicHellfireSaga.html"
  },
  {
    row: "Arcade",
    title: "Taikono Tatsujin",
    addedAt: "2026-11-24",
    image: "https://down-my.img.susercontent.com/file/sg-11134201-22100-qvulj7k326iv87",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clTaikonoTatsujin.html"
  },
  {
    row: "Racing",
    title: "Ultimatecardrivingsimulator",
    addedAt: "2026-11-24",
    image: "https://wheeliegames.com/thumb/ultimate-car-driving-simulator.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clUltimatecardrivingsimulator.html"
  },
  {
    row: "Arcade",
    title: "Abandoned",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clabandoned.html"
  },
  {
    row: "Arcade",
    title: "Abandoned 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clabandoned3.html"
  },
  {
    row: "Arcade",
    title: "Aceattorernefgsdg",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/claceattorernefgsdg.html"
  },
  {
    row: "Shooter",
    title: "Acecombat 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clacecombat2.html"
  },
  {
    row: "Shooter",
    title: "Acecombat 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clacecombat3.html"
  },
  {
    row: "Arcade",
    title: "Acegangstertaxi",
    addedAt: "2026-11-24",
    image: "https://assets.bgames.com/7/109087/88639/1200x600/ace-gangster-taxi.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clacegangstertaxi.html"
  },
  {
    row: "Arcade",
    title: "Achievementunlocked",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/achievementunlocked.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clachievementunlocked.html"
  },
  {
    row: "Arcade",
    title: "Achievmentunlocked",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/achievementunlocked.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clachievmentunlocked.html"
  },
  {
    row: "Arcade",
    title: "Achievmentunlocked 2",
    addedAt: "2026-11-24",
    image: "https://images.igdb.com/igdb/image/upload/t_720p/sccrrm.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clachievmentunlocked2.html"
  },
  {
    row: "Arcade",
    title: "Achievmentunlocked 3",
    addedAt: "2026-11-24",
    image: "https://kotaku.com/igdb/image/upload/t_720p/sceiwp.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clachievmentunlocked3.html"
  },
  {
    row: "Arcade",
    title: "Achillies 1 FR",
    addedAt: "2026-11-24",
    image: "https://cdn.gamingonl.com/images/webp/achilles-1512x1077.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clachillies1fr.html"
  },
  {
    row: "Arcade",
    title: "Achillies 2",
    addedAt: "2026-11-24",
    image: "https://static.woxikon.com/games/images/achilles-2-origin-of-a-legend.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clachillies2.html"
  },
  {
    row: "Strategy",
    title: "Advancewars",
    addedAt: "2026-11-24",
    image: "https://cavegamers.com/cdn/shop/files/7777_1.jpg?v=1775225735&width=1530",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cladvancewars.html"
  },
  {
    row: "Strategy",
    title: "Advancewars 2",
    addedAt: "2026-11-24",
    image: "https://cdn.wikimg.net/en/warswiki/images/c/cf/AW2_NACover.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cladvancewars2.html"
  },
  {
    row: "Strategy",
    title: "Ageofwar",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ageofwar.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clageofwar.html"
  },
  {
    row: "Strategy",
    title: "Ageofwar 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ageofwar2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clageofwar2.html"
  },
  {
    row: "Arcade",
    title: "Akoopasrevenge",
    addedAt: "2026-11-24",
    image: "https://kotaku.com/igdb/image/upload/t_720p/scnym6.jpg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clakoopasrevenge.html"
  },
  {
    row: "Arcade",
    title: "Akoopasrevenge 2",
    addedAt: "2026-11-24",
    image: "https://images.igdb.com/igdb/image/upload/t_1080p/scyc7j.png",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clakoopasrevenge2.html"
  },
  {
    row: "Arcade",
    title: "Alienhominid",
    addedAt: "2026-11-24",
    image: "https://cdn.kanobu.ru/games/e5f4de4e-a3e0-44b6-93d6-2b205548ba02.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clalienhominid.html"
  },
  {
    row: "Arcade",
    title: "Alienhominidgba",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/alienhominid.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clalienhominidgba.html"
  },
  {
    row: "Sports",
    title: "Alientransporter",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/alienhominid.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clalientransporter.html"
  },
  {
    row: "Arcade",
    title: "Alienvspredator",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/alienhominid.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clalienvspredator.html"
  },
  {
    row: "Arcade",
    title: "Amaze",
    addedAt: "2026-11-24",
    image: "https://cdn-ext.fanatical.com/production/product/1280x720/6f50ba89-0eae-4087-8d2f-c62f84813357.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamaze.html"
  },
  {
    row: "Arcade",
    title: "Amigopancho",
    addedAt: "2026-11-24",
    image: "https://assets.funnygames.org/5/13905/66904/672x448/amigo-pancho-1.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho.html"
  },
  {
    row: "Arcade",
    title: "Amigopancho 2",
    addedAt: "2026-11-24",
    image: "https://simple.game/assets/thumbs/x294v2z2/amigo-pancho-2.jpeg",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho2.html"
  },
  {
    row: "Arcade",
    title: "Amigopancho 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho3.html"
  },
  {
    row: "Arcade",
    title: "Amigopancho 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho4.html"
  },
  {
    row: "Arcade",
    title: "Amigopancho 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho5.html"
  },
  {
    row: "Arcade",
    title: "Amigopancho 6",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho6.html"
  },
  {
    row: "Arcade",
    title: "Amigopancho 7",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clamigopancho7.html"
  },
  {
    row: "Arcade",
    title: "Animalcrossingwildworld",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/animalcrossingwildworld.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clanimalcrossingwildworld.html"
  },
  {
    row: "Shooter",
    title: "Appleshooter",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clappleshooter.html"
  },
  {
    row: "Arcade",
    title: "Appleworm",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clappleworm.html"
  },
  {
    row: "Arcade",
    title: "Attackhole",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clattackhole.html"
  },
  {
    row: "Arcade",
    title: "Avalanche",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/avalanche.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clavalanche.html"
  },
  {
    row: "Simulation",
    title: "Awesomeplanes",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clawesomeplanes.html"
  },
  {
    row: "Shooter",
    title: "Awesometanks",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/awesometanks.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clawesometanks.html"
  },
  {
    row: "Shooter",
    title: "Awesometanks 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/awesometanks.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clawesometanks2.html"
  },
  {
    row: "Arcade",
    title: "Babykaizo",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbabykaizo.html"
  },
  {
    row: "Sports",
    title: "Backyardbaseball 09",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackyardbaseball09.html"
  },
  {
    row: "Sports",
    title: "Backyardbaseball 10",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackyardbaseball10.html"
  },
  {
    row: "Sports",
    title: "Backyardsoccer",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbackyardsoccer.html"
  },
  {
    row: "Arcade",
    title: "Badpiggies",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/badpiggies.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbadpiggies.html"
  },
  {
    row: "Simulation",
    title: "Badtimesim",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/badtimesimulator.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbadtimesim.html"
  },
  {
    row: "Arcade",
    title: "Ballsandbricksgood",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clballsandbricksgood.html"
  },
  {
    row: "Shooter",
    title: "Banditgunslingers",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbanditgunslingers.html"
  },
  {
    row: "Arcade",
    title: "Banjokazooie",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/banjokazooie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbanjokazooie.html"
  },
  {
    row: "Arcade",
    title: "Banjotooie",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/banjokazooie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbanjotooie.html"
  },
  {
    row: "Arcade",
    title: "Bankbreakout 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbankbreakout2.html"
  },
  {
    row: "Sports",
    title: "Basketballlegends",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/basketballstars.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketballlegends.html"
  },
  {
    row: "Sports",
    title: "Basketballlegendsgoodywoody",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/basketballstars.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketballlegendsgoodywoody.html"
  },
  {
    row: "Sports",
    title: "Basketrandomgood",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbasketrandomgood.html"
  },
  {
    row: "Arcade",
    title: "Battlezone",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbattlezone.html"
  },
  {
    row: "Arcade",
    title: "Bazookaboy",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbazookaboy.html"
  },
  {
    row: "Arcade",
    title: "Beamrider",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbeamrider.html"
  },
  {
    row: "Arcade",
    title: "Bearbarians",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbearbarians.html"
  },
  {
    row: "Arcade",
    title: "Ben 10 Alienforce",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clben10alienforce.html"
  },
  {
    row: "Arcade",
    title: "Ben 10 Omniverse",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clben10omniverse.html"
  },
  {
    row: "Arcade",
    title: "Ben 10 Protector",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clben10protector.html"
  },
  {
    row: "Racing",
    title: "Ben 10 Racing",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clben10racing.html"
  },
  {
    row: "Arcade",
    title: "Ben 10 Ultimatealien",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clben10ultimatealien.html"
  },
  {
    row: "Arcade",
    title: "Bigtowertinysquare 2 Good",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pizzatower.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbigtowertinysquare2good.html"
  },
  {
    row: "Arcade",
    title: "Bindingofisaccsheeptime",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/thebindingofisaac.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbindingofisaccsheeptime.html"
  },
  {
    row: "Simulation",
    title: "Bitlifeencrypted",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bitlife.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbitlifeencrypted.html"
  },
  {
    row: "Arcade",
    title: "Blackjackbattle",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblackjackbattle.html"
  },
  {
    row: "Arcade",
    title: "Blacksmithlab",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblacksmithlab.html"
  },
  {
    row: "Arcade",
    title: "Bleachvsnaruto",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbleachvsnaruto.html"
  },
  {
    row: "Adventure",
    title: "Blobsstory 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblobsstory2.html"
  },
  {
    row: "Shooter",
    title: "Blockcraftshooter",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clblockcraftshooter.html"
  },
  {
    row: "Arcade",
    title: "Bloons TD 1",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bloonstowerdefense.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloonsTD1.html"
  },
  {
    row: "Arcade",
    title: "Bloons TD 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bloonstowerdefense2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloonsTD2.html"
  },
  {
    row: "Arcade",
    title: "Bloons TD 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bloonstowerdefense3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloonsTD3.html"
  },
  {
    row: "Arcade",
    title: "Bloons TD 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bloonstowerdefense4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbloonsTD4.html"
  },
  {
    row: "Arcade",
    title: "Bntts",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbntts.html"
  },
  {
    row: "Arcade",
    title: "Bollybeat",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbollybeat.html"
  },
  {
    row: "Arcade",
    title: "Bomberman",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbomberman.html"
  },
  {
    row: "Arcade",
    title: "Bomberman 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbomberman2.html"
  },
  {
    row: "Platformer",
    title: "Bottlejump 3 D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbottlejump3d.html"
  },
  {
    row: "Arcade",
    title: "Bowlalt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbowlalt.html"
  },
  {
    row: "Sports",
    title: "Boxinglive 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clboxinglive2.html"
  },
  {
    row: "Arcade",
    title: "Btts 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbtts2.html"
  },
  {
    row: "Shooter",
    title: "Bubbleshooter",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bubbleshooter.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbleshooter.html"
  },
  {
    row: "Shooter",
    title: "Bubbleshooterpirate",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/bubbleshooter.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbleshooterpirate.html"
  },
  {
    row: "Shooter",
    title: "Bubbletanks",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbletanks.html"
  },
  {
    row: "Shooter",
    title: "Bubbletanks 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbletanks2.html"
  },
  {
    row: "Shooter",
    title: "Bubbletanks 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbletanks3.html"
  },
  {
    row: "Shooter",
    title: "Bubbletanksarenas",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbletanksarenas.html"
  },
  {
    row: "Shooter",
    title: "Bubbletankstd",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubbletankstd.html"
  },
  {
    row: "Arcade",
    title: "Bubsy",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbubsy.html"
  },
  {
    row: "Arcade",
    title: "Buckshotroulette",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/buckshotroulette.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clbuckshotroulette.html"
  },
  {
    row: "Arcade",
    title: "Burritobison 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/burritobison.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clburritobison2.html"
  },
  {
    row: "Arcade",
    title: "Burritobisonrevenge",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/burritobisonr.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clburritobisonrevenge.html"
  },
  {
    row: "Arcade",
    title: "Cactusmccoy 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcactusmccoy2.html"
  },
  {
    row: "Arcade",
    title: "Cannonfodder",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcannonfodder.html"
  },
  {
    row: "Racing",
    title: "Cardrawing",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcardrawing.html"
  },
  {
    row: "Racing",
    title: "Careatscar 2 Deluxe",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcareatscar2deluxe.html"
  },
  {
    row: "Racing",
    title: "Carmods",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcarmods.html"
  },
  {
    row: "Racing",
    title: "Carstuntsdriving",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcarstuntsdriving.html"
  },
  {
    row: "Arcade",
    title: "Castlevania",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlevania.html"
  },
  {
    row: "Arcade",
    title: "Castlevania 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlevania2.html"
  },
  {
    row: "Arcade",
    title: "Castlevania 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlevania3.html"
  },
  {
    row: "Arcade",
    title: "Castlevaniaariaofsorrow",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlevaniaariaofsorrow.html"
  },
  {
    row: "Arcade",
    title: "Castlevanianes",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcastlevanianes.html"
  },
  {
    row: "Simulation",
    title: "Catslovecake 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcatslovecake2.html"
  },
  {
    row: "Arcade",
    title: "Cellardoor",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcellardoor.html"
  },
  {
    row: "Arcade",
    title: "Checkers",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcheckers.html"
  },
  {
    row: "Arcade",
    title: "Chibiknight",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/chibiknight.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchibiknight.html"
  },
  {
    row: "Arcade",
    title: "Chipschallenge",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchipschallenge.html"
  },
  {
    row: "Arcade",
    title: "Chronotrigger",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clchronotrigger.html"
  },
  {
    row: "Arcade",
    title: "Clearvision",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclearvision.html"
  },
  {
    row: "Arcade",
    title: "Clearvision 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclearvision2.html"
  },
  {
    row: "Arcade",
    title: "Clearvision 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclearvision3.html"
  },
  {
    row: "Arcade",
    title: "Clearvision 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclearvision4.html"
  },
  {
    row: "Arcade",
    title: "Clearvision 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clclearvision5.html"
  },
  {
    row: "Arcade",
    title: "Cod 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcod4.html"
  },
  {
    row: "Arcade",
    title: "Codblackops",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcodblackops.html"
  },
  {
    row: "Arcade",
    title: "Coddefiance",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcoddefiance.html"
  },
  {
    row: "Shooter",
    title: "Codmodernwarfare",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcodmodernwarfare.html"
  },
  {
    row: "Strategy",
    title: "Codworldatwar",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcodworldatwar.html"
  },
  {
    row: "Arcade",
    title: "Colorburst 3 D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcolorburst3d.html"
  },
  {
    row: "Puzzle",
    title: "Colormatch",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcolormatch.html"
  },
  {
    row: "Puzzle",
    title: "Colorwatersort 3 D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcolorwatersort3d.html"
  },
  {
    row: "Arcade",
    title: "Conkersbadfurday",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clconkersbadfurday.html"
  },
  {
    row: "Arcade",
    title: "Contra",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcontra.html"
  },
  {
    row: "Idle",
    title: "Cookieclickercool",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cookieclicker.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcookieclickercool.html"
  },
  {
    row: "Idle",
    title: "Cookieclickergood",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cookieclicker.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcookieclickergood.html"
  },
  {
    row: "Simulation",
    title: "Cookingmama",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcookingmama.html"
  },
  {
    row: "Simulation",
    title: "Cookingmama 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcookingmama2.html"
  },
  {
    row: "Simulation",
    title: "Cookingmama 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcookingmama3.html"
  },
  {
    row: "Arcade",
    title: "Crashbandicoot",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrashbandicoot.html"
  },
  {
    row: "Arcade",
    title: "Crashbandicoot 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrashbandicoot2.html"
  },
  {
    row: "Racing",
    title: "Crazycars",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrazycars.html"
  },
  {
    row: "Platformer",
    title: "Crunchball 3000",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcrunchball3000.html"
  },
  {
    row: "Arcade",
    title: "CS 1.6",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/counterstrike.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcs1.6.html"
  },
  {
    row: "Arcade",
    title: "Curveball",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcurveball.html"
  },
  {
    row: "Adventure",
    title: "Cuttheropetimetravel",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cuttherope.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clcuttheropetimetravel.html"
  },
  {
    row: "Arcade",
    title: "Dadnme",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldadnme.html"
  },
  {
    row: "Arcade",
    title: "Dborigins",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/dragonballdevolution.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldborigins.html"
  },
  {
    row: "Arcade",
    title: "Dborigins 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/dragonballdevolution.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldborigins2.html"
  },
  {
    row: "Arcade",
    title: "Dbzattacksaiyans",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldbzattacksaiyans.html"
  },
  {
    row: "Arcade",
    title: "Dbzdevolution",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/dragonballdevolution.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldbzdevolution.html"
  },
  {
    row: "Platformer",
    title: "Dbzsuperwarriorssonic",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldbzsuperwarriorssonic.html"
  },
  {
    row: "Arcade",
    title: "Deadzed",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeadzed.html"
  },
  {
    row: "Arcade",
    title: "Deadzed 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeadzed2.html"
  },
  {
    row: "Arcade",
    title: "Deblob 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeblob2.html"
  },
  {
    row: "Arcade",
    title: "Deepersleep",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeepersleep.html"
  },
  {
    row: "Arcade",
    title: "Deepsleep",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldeepsleep.html"
  },
  {
    row: "Arcade",
    title: "Defendyourcastle",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldefendyourcastle.html"
  },
  {
    row: "Arcade",
    title: "Defendyournuts",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldefendyournuts.html"
  },
  {
    row: "Arcade",
    title: "Defendyournuts 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldefendyournuts2.html"
  },
  {
    row: "Arcade",
    title: "Dementium",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldementium.html"
  },
  {
    row: "Arcade",
    title: "Diamondhollow",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldiamondhollow.html"
  },
  {
    row: "Arcade",
    title: "Diamondhollow 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldiamondhollow2.html"
  },
  {
    row: "Racing",
    title: "Diddykongracing",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldiddykongracing.html"
  },
  {
    row: "Arcade",
    title: "Digdeep",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldigdeep.html"
  },
  {
    row: "Arcade",
    title: "Digdug",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldigdug.html"
  },
  {
    row: "Arcade",
    title: "Digdug 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldigdug2.html"
  },
  {
    row: "Arcade",
    title: "Digdug 26",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldigdug26.html"
  },
  {
    row: "Arcade",
    title: "Digtochina",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldigtochina.html"
  },
  {
    row: "Arcade",
    title: "Dinodudes",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldinodudes.html"
  },
  {
    row: "Arcade",
    title: "Donkeykong",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/donkeykong.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldonkeykong.html"
  },
  {
    row: "Arcade",
    title: "Donkeykong 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/donkeykong64.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldonkeykong64.html"
  },
  {
    row: "Arcade",
    title: "Donkeykongcountry",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/donkeykong.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldonkeykongcountry.html"
  },
  {
    row: "Arcade",
    title: "Donkeykongcountry 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/donkeykong.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldonkeykongcountry2.html"
  },
  {
    row: "Arcade",
    title: "Donkeykongnes",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/donkeykong.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldonkeykongnes.html"
  },
  {
    row: "Puzzle",
    title: "Dontescape",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldontescape.html"
  },
  {
    row: "Puzzle",
    title: "Dontescape 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldontescape2.html"
  },
  {
    row: "Puzzle",
    title: "Dontescape 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldontescape3.html"
  },
  {
    row: "Platformer",
    title: "Doodlejumpgoober",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doodlejump.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoodlejumpgoober.html"
  },
  {
    row: "Shooter",
    title: "Doom 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doom2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoom2.html"
  },
  {
    row: "Shooter",
    title: "Doom 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doom64.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoom64.html"
  },
  {
    row: "Shooter",
    title: "Doompsalt",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/doom2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldoompsalt.html"
  },
  {
    row: "Simulation",
    title: "Douchebaglife",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldouchebaglife.html"
  },
  {
    row: "Arcade",
    title: "Douchebagworkout",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldouchebagworkout.html"
  },
  {
    row: "Arcade",
    title: "Downthemountain",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldownthemountain.html"
  },
  {
    row: "Sports",
    title: "Dragonballadvance",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldragonballadvance.html"
  },
  {
    row: "Multiplayer",
    title: "Drmario",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldrmario.html"
  },
  {
    row: "Arcade",
    title: "Dubstep",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cldubstep.html"
  },
  {
    row: "Arcade",
    title: "Duckhunt",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/duckhunt.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clduckhunt.html"
  },
  {
    row: "Arcade",
    title: "Ducklfe 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ducklife5.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clducklfe5.html"
  },
  {
    row: "Simulation",
    title: "Ducklife 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ducklife2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clducklife2.html"
  },
  {
    row: "Simulation",
    title: "Ducklife 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ducklife3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clducklife3.html"
  },
  {
    row: "Simulation",
    title: "Ducklife 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ducklife4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clducklife4.html"
  },
  {
    row: "Arcade",
    title: "Earntodie",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/earntodie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearntodie.html"
  },
  {
    row: "Arcade",
    title: "Earntodie 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/earntodie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearntodie2.html"
  },
  {
    row: "Arcade",
    title: "Earthbound",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthbound.html"
  },
  {
    row: "Arcade",
    title: "Earthbound 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthbound3.html"
  },
  {
    row: "Arcade",
    title: "Earthtaken",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthtaken.html"
  },
  {
    row: "Arcade",
    title: "Earthtaken 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthtaken2.html"
  },
  {
    row: "Arcade",
    title: "Earthtaken 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthtaken3.html"
  },
  {
    row: "Arcade",
    title: "Earthwormjim",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthwormjim.html"
  },
  {
    row: "Arcade",
    title: "Earthwormjim 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clearthwormjim2.html"
  },
  {
    row: "Arcade",
    title: "Effingmachines",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleffingmachines.html"
  },
  {
    row: "Arcade",
    title: "Effingworms",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleffingworms.html"
  },
  {
    row: "Horror",
    title: "Effingzombies",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cleffingzombies.html"
  },
  {
    row: "Arcade",
    title: "Electricman 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clelectricman2.html"
  },
  {
    row: "Arcade",
    title: "Emulator",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clemulator.html"
  },
  {
    row: "Strategy",
    title: "Endlesswar 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clendlesswar4.html"
  },
  {
    row: "Strategy",
    title: "Endlesswar 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clendlesswar5.html"
  },
  {
    row: "Strategy",
    title: "Endlesswar 5 Wow",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clendlesswar5wow.html"
  },
  {
    row: "Strategy",
    title: "Endlesswar 7",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clendlesswar7.html"
  },
  {
    row: "Arcade",
    title: "Enduro",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clenduro.html"
  },
  {
    row: "Puzzle",
    title: "Escaperoad 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/escaperoad.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clescaperoad2.html"
  },
  {
    row: "Arcade",
    title: "ET",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clet.html"
  },
  {
    row: "Arcade",
    title: "Etrianoddyssey",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cletrianoddyssey.html"
  },
  {
    row: "Racing",
    title: "Excitebike 64",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clexcitebike64.html"
  },
  {
    row: "Arcade",
    title: "Factoryballs",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/factoryballs.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfactoryballs.html"
  },
  {
    row: "Arcade",
    title: "Factoryballs 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/factoryballs.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfactoryballs2.html"
  },
  {
    row: "Arcade",
    title: "Factoryballs 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/factoryballs.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfactoryballs3.html"
  },
  {
    row: "Arcade",
    title: "Factoryballs 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/factoryballs.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfactoryballs4.html"
  },
  {
    row: "Arcade",
    title: "Fairytalevsonepiece",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfairytalevsonepiece.html"
  },
  {
    row: "Runner",
    title: "Famidash",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfamidash.html"
  },
  {
    row: "Platformer",
    title: "Fancypantsadventure",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fancypantsadventures.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfancypantsadventure.html"
  },
  {
    row: "Platformer",
    title: "Fancypantsadventure 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fancypantsadventures.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfancypantsadventure2.html"
  },
  {
    row: "Platformer",
    title: "Fancypantsadventure 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fancypantsadventures.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfancypantsadventure3.html"
  },
  {
    row: "Arcade",
    title: "Fattygenius",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfattygenius.html"
  },
  {
    row: "Arcade",
    title: "Feedus",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pleasedontfeedme.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfeedus.html"
  },
  {
    row: "Arcade",
    title: "Feedus 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pleasedontfeedme.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfeedus2.html"
  },
  {
    row: "Arcade",
    title: "Feedus 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pleasedontfeedme.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfeedus3.html"
  },
  {
    row: "Arcade",
    title: "Feedus 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfeedus4.html"
  },
  {
    row: "Arcade",
    title: "Feedus 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfeedus5.html"
  },
  {
    row: "Arcade",
    title: "FF 6",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clff6.html"
  },
  {
    row: "Platformer",
    title: "Ffmysticquest",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clffmysticquest.html"
  },
  {
    row: "Sports",
    title: "Fifa 2000",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfifa2000.html"
  },
  {
    row: "Arcade",
    title: "Finalfantasy",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasy.html"
  },
  {
    row: "Arcade",
    title: "Finalfantasy II",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyII.html"
  },
  {
    row: "Arcade",
    title: "Finalfantasy VI",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyVI.html"
  },
  {
    row: "Arcade",
    title: "Finalfantasy Vii",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyVII.html"
  },
  {
    row: "Arcade",
    title: "Finalfantasy VI ID 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyVIId2.html"
  },
  {
    row: "Arcade",
    title: "Finalfantasy VI ID 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyVIId3.html"
  },
  {
    row: "Arcade",
    title: "Finalfantasy VI Itheothertetrr",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasyVIItheothertetrr.html"
  },
  {
    row: "Arcade",
    title: "Finalfantasytactics",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalfantasytactics.html"
  },
  {
    row: "Arcade",
    title: "Finalninja",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/finalninja.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfinalninja.html"
  },
  {
    row: "Arcade",
    title: "Fireboyandwatergirl 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fireboywatergirl4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireboyandwatergirl5.html"
  },
  {
    row: "Arcade",
    title: "Fireboyandwatergirl 6",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fireboywatergirl4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireboyandwatergirl6.html"
  },
  {
    row: "Arcade",
    title: "Fireemblem",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfireemblem.html"
  },
  {
    row: "Platformer",
    title: "Floodrunner",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfloodrunner.html"
  },
  {
    row: "Platformer",
    title: "Floodrunner 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfloodrunner2.html"
  },
  {
    row: "Platformer",
    title: "Floodrunner 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfloodrunner4.html"
  },
  {
    row: "Horror",
    title: "Fnafanimatronics",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/fnaf.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfnafanimatronics.html"
  },
  {
    row: "Arcade",
    title: "Freerider",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/linerider.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfreerider.html"
  },
  {
    row: "Arcade",
    title: "Freerider 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfreerider2.html"
  },
  {
    row: "Arcade",
    title: "Freerider 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfreerider3.html"
  },
  {
    row: "Arcade",
    title: "Fzero",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfzero.html"
  },
  {
    row: "Arcade",
    title: "Fzerox",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clfzerox.html"
  },
  {
    row: "Arcade",
    title: "Galaga",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgalaga.html"
  },
  {
    row: "Arcade",
    title: "Gameandwatchcollection",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgameandwatchcollection.html"
  },
  {
    row: "Arcade",
    title: "Gdlite",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/geometrydashlite.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgdlite.html"
  },
  {
    row: "Arcade",
    title: "Generalchaos",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgeneralchaos.html"
  },
  {
    row: "Arcade",
    title: "Ghosttrick",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clghosttrick.html"
  },
  {
    row: "Arcade",
    title: "Gimmietheairpod",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gimmetheairpod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgimmietheairpod.html"
  },
  {
    row: "Arcade",
    title: "Glover",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clglover.html"
  },
  {
    row: "Arcade",
    title: "Goalsouthafrica",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoalsouthafrica.html"
  },
  {
    row: "Arcade",
    title: "Goldeneye 007",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/goldeneye.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoldeneye007.html"
  },
  {
    row: "Arcade",
    title: "Goldensun",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoldensun.html"
  },
  {
    row: "Sports",
    title: "Golforbit",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgolforbit.html"
  },
  {
    row: "Arcade",
    title: "Goodbigtowertinysquare",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pizzatower.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoodbigtowertinysquare.html"
  },
  {
    row: "Arcade",
    title: "Goodbigtowertinysquare 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pizzatower.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoodbigtowertinysquare2.html"
  },
  {
    row: "Arcade",
    title: "Goodmonkeymart",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/monkeymart.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgoodmonkeymart.html"
  },
  {
    row: "Arcade",
    title: "Grandtheftautoadvance",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgrandtheftautoadvance.html"
  },
  {
    row: "Horror",
    title: "Granny 22",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/granny2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranny22.html"
  },
  {
    row: "Arcade",
    title: "Granturismo 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgranturismo2.html"
  },
  {
    row: "Arcade",
    title: "Gta",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gta3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgta.html"
  },
  {
    row: "Arcade",
    title: "Gta 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgta2.html"
  },
  {
    row: "Arcade",
    title: "Gta 22",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgta22.html"
  },
  {
    row: "Arcade",
    title: "Gta 2 Alt",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgta2alt.html"
  },
  {
    row: "Arcade",
    title: "Gtaalt",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgtaalt.html"
  },
  {
    row: "Arcade",
    title: "Gtachina",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/grandtheftauto.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgtachina.html"
  },
  {
    row: "Shooter",
    title: "Gunblood",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunblood.html"
  },
  {
    row: "Shooter",
    title: "Gunmayhem 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunmayhem2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunmayhem2.html"
  },
  {
    row: "Shooter",
    title: "Gunmayhem 2 Goof",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunmayhem2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunmayhem2goof.html"
  },
  {
    row: "Shooter",
    title: "Gunmayhemredux",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunmayhemredux.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunmayhemredux.html"
  },
  {
    row: "Shooter",
    title: "Gunsmoke",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clgunsmoke.html"
  },
  {
    row: "Arcade",
    title: "Hajimeippo",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhajimeippo.html"
  },
  {
    row: "Arcade",
    title: "Hanger 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhanger2.html"
  },
  {
    row: "Arcade",
    title: "Harvestmoon",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clharvestmoon.html"
  },
  {
    row: "Arcade",
    title: "Harvestmoon 64",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clharvestmoon64.html"
  },
  {
    row: "Horror",
    title: "Hauntthehouse",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhauntthehouse.html"
  },
  {
    row: "Arcade",
    title: "Hidenseek",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhidenseek.html"
  },
  {
    row: "Racing",
    title: "Highwaytraffic 3 D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhighwaytraffic3d.html"
  },
  {
    row: "Arcade",
    title: "Hipsterkickball",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhipsterkickball.html"
  },
  {
    row: "Arcade",
    title: "Hobo",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo.html"
  },
  {
    row: "Arcade",
    title: "Hobo 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo2.html"
  },
  {
    row: "Arcade",
    title: "Hobo 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo3.html"
  },
  {
    row: "Arcade",
    title: "Hobo 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo4.html"
  },
  {
    row: "Arcade",
    title: "Hobo 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo5.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo5.html"
  },
  {
    row: "Arcade",
    title: "Hobo 6",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo6.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo6.html"
  },
  {
    row: "Arcade",
    title: "Hobo 7",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/hobo7.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobo7.html"
  },
  {
    row: "Horror",
    title: "Hobovszombies",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clhobovszombies.html"
  },
  {
    row: "Arcade",
    title: "Icantbelievegoogleflaggedmeforthenameofthefilelol",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clicantbelievegoogleflaggedmeforthenameofthefilelol.html"
  },
  {
    row: "Idle",
    title: "Idleminorzamnshes 12",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clidleminorzamnshes12.html"
  },
  {
    row: "Arcade",
    title: "Impossiblequiz (1)",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/theimpossiblequiz.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/climpossiblequiz%20(1).html"
  },
  {
    row: "Arcade",
    title: "Impossiblequiz",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/theimpossiblequiz.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/climpossiblequiz.html"
  },
  {
    row: "Arcade",
    title: "Impossiblequiz 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/theimpossiblequiz.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/climpossiblequiz2.html"
  },
  {
    row: "Arcade",
    title: "Inclementemerald",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clinclementemerald.html"
  },
  {
    row: "Racing",
    title: "Indiantrucksimiulator",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clindiantrucksimiulator.html"
  },
  {
    row: "Simulation",
    title: "Infinitecraft",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/infinitecraft.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clinfinitecraft.html"
  },
  {
    row: "Arcade",
    title: "Innkeeper",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clinnkeeper.html"
  },
  {
    row: "Adventure",
    title: "Insidestory",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/cavestory.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clinsidestory.html"
  },
  {
    row: "Arcade",
    title: "Interactivebuddy",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/interactivebuddy.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clinteractivebuddy.html"
  },
  {
    row: "Arcade",
    title: "Intospace",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clintospace.html"
  },
  {
    row: "Arcade",
    title: "Intospace 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clintospace2.html"
  },
  {
    row: "Arcade",
    title: "Intospace 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clintospace3.html"
  },
  {
    row: "Arcade",
    title: "Iqball",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cliqball.html"
  },
  {
    row: "Arcade",
    title: "Ironsoldier",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clironsoldier.html"
  },
  {
    row: "Arcade",
    title: "Jacksmith",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/jacksmith.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljacksmith.html"
  },
  {
    row: "Arcade",
    title: "Jacksmithencryptedorsmthn",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/jacksmith.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljacksmithencryptedorsmthn.html"
  },
  {
    row: "Racing",
    title: "Jellytruckgood",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljellytruckgood.html"
  },
  {
    row: "Arcade",
    title: "Jetforcegemini",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cljetforcegemini.html"
  },
  {
    row: "Strategy",
    title: "Kingdomheartsdays",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkingdomheartsdays.html"
  },
  {
    row: "Strategy",
    title: "Kingdomheartsrecoded",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkingdomheartsrecoded.html"
  },
  {
    row: "Arcade",
    title: "Kirby 64",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirby64.html"
  },
  {
    row: "Arcade",
    title: "Kirbyandtheamzingmirror",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbyandtheamzingmirror.html"
  },
  {
    row: "Platformer",
    title: "Kirbysadventure",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysadventure.html"
  },
  {
    row: "Arcade",
    title: "Kirbysdreamland",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysdreamland.html"
  },
  {
    row: "Arcade",
    title: "Kirbysdreamland 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysdreamland3.html"
  },
  {
    row: "Arcade",
    title: "Kirbysqueaksquad",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysqueaksquad.html"
  },
  {
    row: "Arcade",
    title: "Kirbysuperstar",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysuperstar.html"
  },
  {
    row: "Arcade",
    title: "Kirbysuperstarultra",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkirbysuperstarultra.html"
  },
  {
    row: "Arcade",
    title: "Kittencannon",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/kittencannon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkittencannon.html"
  },
  {
    row: "Arcade",
    title: "Knifehit",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/knifehit.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clknifehit.html"
  },
  {
    row: "Horror",
    title: "Knightmaretower",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clknightmaretower.html"
  },
  {
    row: "Arcade",
    title: "Koopasrevenge",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clkoopasrevenge.html"
  },
  {
    row: "Arcade",
    title: "Lastfirered",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonfirered.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllastfirered.html"
  },
  {
    row: "Arcade",
    title: "Learntofly 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/learntofly2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllearntofly2.html"
  },
  {
    row: "Arcade",
    title: "Learntofly 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/learntofly3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllearntofly3.html"
  },
  {
    row: "Idle",
    title: "Learntoflyidle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/learntoflyidle.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllearntoflyidle.html"
  },
  {
    row: "Arcade",
    title: "Legobatman",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegobatman.html"
  },
  {
    row: "Adventure",
    title: "Legobatman 2 Superheroes",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegobatman2superheroes.html"
  },
  {
    row: "Arcade",
    title: "Legoindianajones",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegoindianajones.html"
  },
  {
    row: "Arcade",
    title: "Legoindianajones 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegoindianajones2.html"
  },
  {
    row: "Arcade",
    title: "Legoninjago",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegoninjago.html"
  },
  {
    row: "Strategy",
    title: "Legostarwars",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllegostarwars.html"
  },
  {
    row: "Arcade",
    title: "Lemmings",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllemmings.html"
  },
  {
    row: "Arcade",
    title: "Lightitup",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllightitup.html"
  },
  {
    row: "Arcade",
    title: "Linerider",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/linerider.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllinerider.html"
  },
  {
    row: "Arcade",
    title: "Linktothepast",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllinktothepast.html"
  },
  {
    row: "Platformer",
    title: "Loderunner",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/rerun.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clloderunner.html"
  },
  {
    row: "Arcade",
    title: "Lonewolf",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllonewolf.html"
  },
  {
    row: "Arcade",
    title: "Losangelesshark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllosangelesshark.html"
  },
  {
    row: "Arcade",
    title: "Loz 1",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clloz1.html"
  },
  {
    row: "Arcade",
    title: "Lozlinkawakening",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllozlinkawakening.html"
  },
  {
    row: "Arcade",
    title: "Lozminishcap",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllozminishcap.html"
  },
  {
    row: "Arcade",
    title: "Lozoracleofseasons",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllozoracleofseasons.html"
  },
  {
    row: "Arcade",
    title: "Lozspirittracks",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cllozspirittracks.html"
  },
  {
    row: "Racing",
    title: "Madalinstuntcarsgood",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/madalinstuntcars2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadalinstuntcarsgood.html"
  },
  {
    row: "Arcade",
    title: "Madden 93",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden93.html"
  },
  {
    row: "Arcade",
    title: "Madden 94",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden94.html"
  },
  {
    row: "Arcade",
    title: "Madden 95",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden95.html"
  },
  {
    row: "Arcade",
    title: "Madden 96",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden96.html"
  },
  {
    row: "Arcade",
    title: "Madden 98",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden98.html"
  },
  {
    row: "Arcade",
    title: "Madden 99",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadden99.html"
  },
  {
    row: "Sports",
    title: "Maddenfootball",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/footballbros.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaddenfootball.html"
  },
  {
    row: "Sports",
    title: "Maddenfootball 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/footballbros.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaddenfootball64.html"
  },
  {
    row: "Arcade",
    title: "Maddennfl",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaddennfl.html"
  },
  {
    row: "Arcade",
    title: "Maddennfl 2000",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaddennfl2000.html"
  },
  {
    row: "Arcade",
    title: "Maddennfl 2001",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaddennfl2001.html"
  },
  {
    row: "Arcade",
    title: "Maddennfl 2002",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmaddennfl2002.html"
  },
  {
    row: "Arcade",
    title: "Madnessaccelerant",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadnessaccelerant.html"
  },
  {
    row: "Shooter",
    title: "Madnesscombatdefense",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadnesscombatdefense.html"
  },
  {
    row: "Shooter",
    title: "Madnesscombatnexus",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadnesscombatnexus.html"
  },
  {
    row: "Arcade",
    title: "Madnesshydraulic",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadnesshydraulic.html"
  },
  {
    row: "Arcade",
    title: "Madnessretaliation",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmadnessretaliation.html"
  },
  {
    row: "Arcade",
    title: "Magictiles 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmagictiles3.html"
  },
  {
    row: "Arcade",
    title: "Majorasmask",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/majorasmask.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmajorasmask.html"
  },
  {
    row: "Arcade",
    title: "Makesureitsclosed",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/makesureitsclosed.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmakesureitsclosed.html"
  },
  {
    row: "Platformer",
    title: "Mario 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmario3.html"
  },
  {
    row: "Platformer",
    title: "Marioandluigisuperstarsaga",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmarioandluigisuperstarsaga.html"
  },
  {
    row: "Sports",
    title: "Mariogolf",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariogolf.html"
  },
  {
    row: "Racing",
    title: "Mariokart 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mariokartds.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariokart64.html"
  },
  {
    row: "Racing",
    title: "Mariokartds",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mariokartds.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariokartds.html"
  },
  {
    row: "Racing",
    title: "Mariokartsupercircuit",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mariokartds.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariokartsupercircuit.html"
  },
  {
    row: "Platformer",
    title: "Mariopaint",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariopaint.html"
  },
  {
    row: "Multiplayer",
    title: "Marioparty 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmarioparty2.html"
  },
  {
    row: "Multiplayer",
    title: "Marioparty 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmarioparty3.html"
  },
  {
    row: "Multiplayer",
    title: "Mariopartyds",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariopartyds.html"
  },
  {
    row: "Platformer",
    title: "Mariosmysterymeat",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariosmysterymeat.html"
  },
  {
    row: "Sports",
    title: "Mariotennis",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmariotennis.html"
  },
  {
    row: "Arcade",
    title: "Matrixrampage",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmatrixrampage.html"
  },
  {
    row: "Racing",
    title: "Mcraerally",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmcraerally.html"
  },
  {
    row: "Arcade",
    title: "Medievalshark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmedievalshark.html"
  },
  {
    row: "Arcade",
    title: "Megaman",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman.html"
  },
  {
    row: "Arcade",
    title: "Megaman 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman2.html"
  },
  {
    row: "Arcade",
    title: "Megaman 2 Gba",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman2gba.html"
  },
  {
    row: "Arcade",
    title: "Megaman 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman3.html"
  },
  {
    row: "Arcade",
    title: "Megaman 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman4.html"
  },
  {
    row: "Arcade",
    title: "Megaman 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman5.html"
  },
  {
    row: "Arcade",
    title: "Megaman 6",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman6.html"
  },
  {
    row: "Arcade",
    title: "Megaman 8",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaman8.html"
  },
  {
    row: "Arcade",
    title: "Megamanx",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanx.html"
  },
  {
    row: "Arcade",
    title: "Megamanx 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanx2.html"
  },
  {
    row: "Arcade",
    title: "Megamanx 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanx3.html"
  },
  {
    row: "Arcade",
    title: "Megamanx 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanx4.html"
  },
  {
    row: "Arcade",
    title: "Megamanzero",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanzero.html"
  },
  {
    row: "Arcade",
    title: "Megamanzx",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegamanzx.html"
  },
  {
    row: "Arcade",
    title: "Megaminer",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmegaminer.html"
  },
  {
    row: "Arcade",
    title: "Metalgear",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalgear.html"
  },
  {
    row: "Arcade",
    title: "Metalgearsolid",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalgearsolid.html"
  },
  {
    row: "Arcade",
    title: "Metalgearsolidps",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalgearsolidps.html"
  },
  {
    row: "Arcade",
    title: "Metalslugadvance",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalslugadvance.html"
  },
  {
    row: "Arcade",
    title: "Metalslugmission 1",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalslugmission1.html"
  },
  {
    row: "Arcade",
    title: "Metalslugmission 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetalslugmission2.html"
  },
  {
    row: "Platformer",
    title: "Metroid",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetroid.html"
  },
  {
    row: "Platformer",
    title: "Metroid 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/metroidzeromission.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetroid2.html"
  },
  {
    row: "Platformer",
    title: "Metroidfusion",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/metroidzeromission.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetroidfusion.html"
  },
  {
    row: "Platformer",
    title: "Metroidzeromission",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmetroidzeromission.html"
  },
  {
    row: "Arcade",
    title: "Miamishark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmiamishark.html"
  },
  {
    row: "Arcade",
    title: "Mightyknight",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunknight.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmightyknight.html"
  },
  {
    row: "Arcade",
    title: "Mightyknight 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/gunknight.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmightyknight2.html"
  },
  {
    row: "Adventure",
    title: "Minhero",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clminhero.html"
  },
  {
    row: "Arcade",
    title: "Minimart",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clminimart.html"
  },
  {
    row: "Strategy",
    title: "Miraginewar",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmiraginewar.html"
  },
  {
    row: "Arcade",
    title: "Misslecommand",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmisslecommand.html"
  },
  {
    row: "Arcade",
    title: "Mobcontrolhtml 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmobcontrolhtml5.html"
  },
  {
    row: "Arcade",
    title: "Mobiusrevolution",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmobiusrevolution.html"
  },
  {
    row: "Arcade",
    title: "Monkeymartenc",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmonkeymartenc.html"
  },
  {
    row: "Arcade",
    title: "Mortalkombat",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmortalkombat.html"
  },
  {
    row: "Arcade",
    title: "Mortalkombat 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmortalkombat2.html"
  },
  {
    row: "Arcade",
    title: "Mortalkombat 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmortalkombat3.html"
  },
  {
    row: "Arcade",
    title: "Mortalkombatadvance",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmortalkombatadvance.html"
  },
  {
    row: "Arcade",
    title: "Motherload",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmotherload.html"
  },
  {
    row: "Arcade",
    title: "Multitask",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmultitask.html"
  },
  {
    row: "Arcade",
    title: "Mutilate A Doll",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmutilate-a-doll.html"
  },
  {
    row: "Arcade",
    title: "Myfriendpedro",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmyfriendpedro.html"
  },
  {
    row: "Arcade",
    title: "Myfriendpedroarena",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clmyfriendpedroarena.html"
  },
  {
    row: "Arcade",
    title: "N",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cln.html"
  },
  {
    row: "Sports",
    title: "Nbajam TE",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnbajamTE.html"
  },
  {
    row: "Arcade",
    title: "Newgroundsrumble",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnewgroundsrumble.html"
  },
  {
    row: "Platformer",
    title: "Newsupermariobros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnewsupermariobros.html"
  },
  {
    row: "Arcade",
    title: "Newyorkshark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnewyorkshark.html"
  },
  {
    row: "Arcade",
    title: "Nflblitz",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnflblitz.html"
  },
  {
    row: "Racing",
    title: "Nfscarbonowncity",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnfscarbonowncity.html"
  },
  {
    row: "Arcade",
    title: "Nfsmostwanted",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/driver.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnfsmostwanted.html"
  },
  {
    row: "Arcade",
    title: "Nfsporcheunleashed",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/driver.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnfsporcheunleashed.html"
  },
  {
    row: "Arcade",
    title: "Nfsunderground",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/driver.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnfsunderground.html"
  },
  {
    row: "Arcade",
    title: "Nfsunderground 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/driver.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnfsunderground2.html"
  },
  {
    row: "Arcade",
    title: "Nhl 2002",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnhl2002.html"
  },
  {
    row: "Arcade",
    title: "Nhlhitz 2003",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnhlhitz2003.html"
  },
  {
    row: "Arcade",
    title: "Nightfire",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnightfire.html"
  },
  {
    row: "Arcade",
    title: "Nintendogslab",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/nintendogs.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnintendogslab.html"
  },
  {
    row: "Arcade",
    title: "Nintendoworldcup",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/asmallworldcup.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnintendoworldcup.html"
  },
  {
    row: "Arcade",
    title: "Nitromemustdie",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnitromemustdie.html"
  },
  {
    row: "Arcade",
    title: "Nomoregameasdsadfagfggdfs",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnomoregameasdsadfagfggdfs.html"
  },
  {
    row: "Arcade",
    title: "Nplus",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/portaboyplus.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clnplus.html"
  },
  {
    row: "Arcade",
    title: "Obeythegame",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clobeythegame.html"
  },
  {
    row: "Racing",
    title: "Ocarinaoftime",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clocarinaoftime.html"
  },
  {
    row: "Arcade",
    title: "Onepiece",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clonepiece.html"
  },
  {
    row: "Arcade",
    title: "Onepiecefighting",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clonepiecefighting.html"
  },
  {
    row: "Platformer",
    title: "Ordinarysonicromhack",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clordinarysonicromhack.html"
  },
  {
    row: "Arcade",
    title: "Ormmimastickwithclsoitcanberememberedoyeahclalienhominid",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/alienhominid.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clormmimastickwithclsoitcanberememberedoyeahclalienhominid.html"
  },
  {
    row: "Arcade",
    title: "Ovofixed",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ovo.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clovofixed.html"
  },
  {
    row: "Simulation",
    title: "Papabakeria",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papasbakeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapabakeria.html"
  },
  {
    row: "Simulation",
    title: "Papadonut",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papasdonuteria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapadonut.html"
  },
  {
    row: "Simulation",
    title: "Papalouienighthunt 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papalouie2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapalouienighthunt2.html"
  },
  {
    row: "Simulation",
    title: "Papalouiewhenburgersattack",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papalouie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapalouiewhenburgersattack.html"
  },
  {
    row: "Simulation",
    title: "Papalouiewhenpizzasattack",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papalouie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapalouiewhenpizzasattack.html"
  },
  {
    row: "Simulation",
    title: "Papalouiewhensundaesattack",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papalouie.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapalouiewhensundaesattack.html"
  },
  {
    row: "Simulation",
    title: "Papapizzagood",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papaspizzeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapapizzagood.html"
  },
  {
    row: "Simulation",
    title: "Papapizzagoody",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papaspizzeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapapizzagoody.html"
  },
  {
    row: "Simulation",
    title: "Papapizzamamamia",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papaspizzeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapapizzamamamia.html"
  },
  {
    row: "Simulation",
    title: "Papasburger Iiiaaaaa",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papasburgeria.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapasburgerIIIAAAAA.html"
  },
  {
    row: "Simulation",
    title: "Papashotdoggeria",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapashotdoggeria.html"
  },
  {
    row: "Simulation",
    title: "Papaspancakeria",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapaspancakeria.html"
  },
  {
    row: "Simulation",
    title: "Papaspastaria",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapaspastaria.html"
  },
  {
    row: "Simulation",
    title: "Papasscooperia",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapasscooperia.html"
  },
  {
    row: "Simulation",
    title: "Papassushiria",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapassushiria.html"
  },
  {
    row: "Simulation",
    title: "Papastacomia",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapastacomia.html"
  },
  {
    row: "Simulation",
    title: "Papaswingeria",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapaswingeria.html"
  },
  {
    row: "Multiplayer",
    title: "Papermario",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapermario.html"
  },
  {
    row: "Platformer",
    title: "Papermariopromode",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papermario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapermariopromode.html"
  },
  {
    row: "Platformer",
    title: "Papermariottyd",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/papermario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpapermariottyd.html"
  },
  {
    row: "Arcade",
    title: "Parappatherapper",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clparappatherapper.html"
  },
  {
    row: "Arcade",
    title: "Parappatherapperalt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clparappatherapperalt.html"
  },
  {
    row: "Arcade",
    title: "Partnersintime",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpartnersintime.html"
  },
  {
    row: "Arcade",
    title: "Penaltykicks",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpenaltykicks.html"
  },
  {
    row: "Arcade",
    title: "Penguinpass",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpenguinpass.html"
  },
  {
    row: "Simulation",
    title: "Pepsiman",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpepsiman.html"
  },
  {
    row: "Simulation",
    title: "Pepsimanalt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpepsimanalt.html"
  },
  {
    row: "Arcade",
    title: "Perfectdark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clperfectdark.html"
  },
  {
    row: "Arcade",
    title: "Persona",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpersona.html"
  },
  {
    row: "Arcade",
    title: "Persona 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpersona2.html"
  },
  {
    row: "Arcade",
    title: "Persona 2 Alt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpersona2alt.html"
  },
  {
    row: "Arcade",
    title: "Personaalt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpersonaalt.html"
  },
  {
    row: "Arcade",
    title: "Pheonixjusticeforall",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpheonixjusticeforall.html"
  },
  {
    row: "Arcade",
    title: "Pheonixtrialsandyeartrhfasd",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpheonixtrialsandyeartrhfasd.html"
  },
  {
    row: "Arcade",
    title: "Pico 8",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpico8.html"
  },
  {
    row: "Simulation",
    title: "Picosschool",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpicosschool.html"
  },
  {
    row: "Arcade",
    title: "Pitfall",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/justfalllol.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpitfall.html"
  },
  {
    row: "Platformer",
    title: "Pixelquestlostidols",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpixelquestlostidols.html"
  },
  {
    row: "Racing",
    title: "Pixelspeedrun",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpixelspeedrun.html"
  },
  {
    row: "Simulation",
    title: "Pizzapapa",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpizzapapa.html"
  },
  {
    row: "Arcade",
    title: "Plazmaburst",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clplazmaburst.html"
  },
  {
    row: "Arcade",
    title: "Pokeblack",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonblack.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeblack.html"
  },
  {
    row: "Arcade",
    title: "Pokeblack 2.html",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonblack2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeblack2.html.html"
  },
  {
    row: "Arcade",
    title: "Pokeblazeblack 2 Redux",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonblack2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeblazeblack2redux.html"
  },
  {
    row: "Arcade",
    title: "Pokeblue",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonblue.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeblue.html"
  },
  {
    row: "Arcade",
    title: "Pokediamond",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemondiamond.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokediamond.html"
  },
  {
    row: "Arcade",
    title: "Pokeemeraldrandom",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeemeraldrandom.html"
  },
  {
    row: "Arcade",
    title: "Pokegaia",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokegaia.html"
  },
  {
    row: "Arcade",
    title: "Pokeheartgold",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonheartgold.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeheartgold.html"
  },
  {
    row: "Arcade",
    title: "Pokelightplatinum",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonplatinum.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokelightplatinum.html"
  },
  {
    row: "Arcade",
    title: "Pokemonclover",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonclover.html"
  },
  {
    row: "Arcade",
    title: "Pokemoncrystal",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemoncrystal.html"
  },
  {
    row: "Arcade",
    title: "Pokemonemerald",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemerald.html"
  },
  {
    row: "Arcade",
    title: "Pokemonemeraldcrest",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemeraldcrest.html"
  },
  {
    row: "Arcade",
    title: "Pokemonemeraldimperium",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemeraldimperium.html"
  },
  {
    row: "Arcade",
    title: "Pokemonemeraldkaizo",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemeraldkaizo.html"
  },
  {
    row: "Arcade",
    title: "Pokemonemeraldmini",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemeraldmini.html"
  },
  {
    row: "Arcade",
    title: "Pokemonemeraldseaglass",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonemeraldseaglass.html"
  },
  {
    row: "Arcade",
    title: "Pokemonenergizedemerald",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonemerald.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonenergizedemerald.html"
  },
  {
    row: "Arcade",
    title: "Pokemonevolvedsfdgsdfs",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonevolvedsfdgsdfs.html"
  },
  {
    row: "Arcade",
    title: "Pokemonfirered",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonfirered.html"
  },
  {
    row: "Arcade",
    title: "Pokemonfireredandleafgreenplusedition",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonfirered.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonfireredandleafgreenplusedition.html"
  },
  {
    row: "Arcade",
    title: "Pokemonfireredrandomized",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonfirered.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonfireredrandomized.html"
  },
  {
    row: "Arcade",
    title: "Pokemongold",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemongold.html"
  },
  {
    row: "Arcade",
    title: "Pokemonleafgreen",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonleafgreen.html"
  },
  {
    row: "Arcade",
    title: "Pokemonmysterydungeon",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonmysterydungeon.html"
  },
  {
    row: "Arcade",
    title: "Pokemonquetzal",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonquetzal.html"
  },
  {
    row: "Arcade",
    title: "Pokemonruby",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonruby.html"
  },
  {
    row: "Arcade",
    title: "Pokemonsapphire",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonsapphire.html"
  },
  {
    row: "Arcade",
    title: "Pokemonsilver",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonsilver.html"
  },
  {
    row: "Arcade",
    title: "Pokemonsnap",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonsnap.html"
  },
  {
    row: "Arcade",
    title: "Pokemonstadium",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonstadium.html"
  },
  {
    row: "Strategy",
    title: "Pokemontowerdefense",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemontowerdefense.html"
  },
  {
    row: "Arcade",
    title: "Pokemonultimatefusion",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonultimatefusion.html"
  },
  {
    row: "Arcade",
    title: "Pokemonunbound",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonunbound.html"
  },
  {
    row: "Arcade",
    title: "Pokemonvega",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemonvega.html"
  },
  {
    row: "Arcade",
    title: "Pokemysteryexplorersofsky",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokemysteryexplorersofsky.html"
  },
  {
    row: "Arcade",
    title: "Pokepearl",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonpearl.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokepearl.html"
  },
  {
    row: "Arcade",
    title: "Pokeplatinum",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonplatinum.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeplatinum.html"
  },
  {
    row: "Arcade",
    title: "Pokeplatinumrandomized",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonplatinum.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeplatinumrandomized.html"
  },
  {
    row: "Arcade",
    title: "Pokered",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonred.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokered.html"
  },
  {
    row: "Platformer",
    title: "Pokerunandbun",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/rerun.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokerunandbun.html"
  },
  {
    row: "Arcade",
    title: "Pokevoltwhite 2 Redux",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonwhite2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokevoltwhite2redux.html"
  },
  {
    row: "Arcade",
    title: "Pokevoyager",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokevoyager.html"
  },
  {
    row: "Arcade",
    title: "Pokewhite",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonwhite.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokewhite.html"
  },
  {
    row: "Arcade",
    title: "Pokewhite 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonwhite2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokewhite2.html"
  },
  {
    row: "Arcade",
    title: "Pokeyellow",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonyellow.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpokeyellow.html"
  },
  {
    row: "Arcade",
    title: "Polytrackgood",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpolytrackgood.html"
  },
  {
    row: "Arcade",
    title: "Polytrackworksnow",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpolytrackworksnow.html"
  },
  {
    row: "Arcade",
    title: "Portalflash",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clportalflash.html"
  },
  {
    row: "Arcade",
    title: "Potatomanseeksthetroof",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpotatomanseeksthetroof.html"
  },
  {
    row: "Arcade",
    title: "Prebronzeage",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clprebronzeage.html"
  },
  {
    row: "Arcade",
    title: "Precivilationbronzeage",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clprecivilationbronzeage.html"
  },
  {
    row: "Arcade",
    title: "Prehistoricshark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clprehistoricshark.html"
  },
  {
    row: "Arcade",
    title: "Primary",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clprimary.html"
  },
  {
    row: "Arcade",
    title: "Punchout",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpunchout.html"
  },
  {
    row: "Arcade",
    title: "Punchthedrump",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpunchthedrump.html"
  },
  {
    row: "Arcade",
    title: "Puyopuyofever",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpuyopuyofever.html"
  },
  {
    row: "Arcade",
    title: "Pvz",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pvzhybridstorymod.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clpvz.html"
  },
  {
    row: "Arcade",
    title: "Qbert",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clqbert.html"
  },
  {
    row: "Arcade",
    title: "Quickieworld",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clquickieworld.html"
  },
  {
    row: "Arcade",
    title: "Qwop",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clqwop.html"
  },
  {
    row: "Racing",
    title: "Racingarena",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clracingarena.html"
  },
  {
    row: "Arcade",
    title: "Radicalred",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemonfirered.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clradicalred.html"
  },
  {
    row: "Racing",
    title: "Radracer",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clradracer.html"
  },
  {
    row: "Strategy",
    title: "Raftwars",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clraftwars.html"
  },
  {
    row: "Multiplayer",
    title: "Ragdollio",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clragdollio.html"
  },
  {
    row: "Arcade",
    title: "Rainbowsix",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrainbowsix.html"
  },
  {
    row: "Arcade",
    title: "Rainbowsixalt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrainbowsixalt.html"
  },
  {
    row: "Platformer",
    title: "Rayman",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrayman.html"
  },
  {
    row: "Arcade",
    title: "Raze",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clraze.html"
  },
  {
    row: "Arcade",
    title: "Reachthecore",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clreachthecore.html"
  },
  {
    row: "Arcade",
    title: "Redball",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredball.html"
  },
  {
    row: "Arcade",
    title: "Redball 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/redball.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredball2.html"
  },
  {
    row: "Arcade",
    title: "Redball 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredball3.html"
  },
  {
    row: "Arcade",
    title: "Redball 4 Vol 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/redball4v2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredball4vol2.html"
  },
  {
    row: "Arcade",
    title: "Redball 4 Vol 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/redball4v3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clredball4vol3.html"
  },
  {
    row: "Arcade",
    title: "Reignofcentipede",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clreignofcentipede.html"
  },
  {
    row: "Arcade",
    title: "Renegades",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrenegades.html"
  },
  {
    row: "Horror",
    title: "Residentevil 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clresidentevil2.html"
  },
  {
    row: "Puzzle",
    title: "Resortempire",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clresortempire.html"
  },
  {
    row: "Arcade",
    title: "Retrobowlfixed",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/retrobowl.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clretrobowlfixed.html"
  },
  {
    row: "Arcade",
    title: "Returnman",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clreturnman.html"
  },
  {
    row: "Arcade",
    title: "Returnman 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clreturnman2.html"
  },
  {
    row: "Arcade",
    title: "Rhythymymheaven",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrhythymymheaven.html"
  },
  {
    row: "Simulation",
    title: "Riddleschool",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/riddleschool.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddleschool.html"
  },
  {
    row: "Simulation",
    title: "Riddleschool 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/riddleschool2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddleschool2.html"
  },
  {
    row: "Simulation",
    title: "Riddleschool 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/riddleschool3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddleschool3.html"
  },
  {
    row: "Simulation",
    title: "Riddleschool 445544444$444$444",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddleschool445544444%24%24444%24444.html"
  },
  {
    row: "Arcade",
    title: "Riddletransfer",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/riddleschooltransfer.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddletransfer.html"
  },
  {
    row: "Arcade",
    title: "Riddletransfer 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/riddleschooltransfer2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clriddletransfer2.html"
  },
  {
    row: "Racing",
    title: "Ridgeracer",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clridgeracer.html"
  },
  {
    row: "Arcade",
    title: "Roadoffury",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clroadoffury.html"
  },
  {
    row: "Arcade",
    title: "Roadofthedead",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clroadofthedead.html"
  },
  {
    row: "Platformer",
    title: "Rocketknightadventures",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrocketknightadventures.html"
  },
  {
    row: "Arcade",
    title: "Rocketpult",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrocketpult.html"
  },
  {
    row: "Arcade",
    title: "Roguesoul",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clroguesoul.html"
  },
  {
    row: "Arcade",
    title: "Roguesoul 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clroguesoul2.html"
  },
  {
    row: "Arcade",
    title: "Rotate",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrotate.html"
  },
  {
    row: "Arcade",
    title: "Ruffle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ruffle.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clruffle.html"
  },
  {
    row: "Platformer",
    title: "Run",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/run.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrun.html"
  },
  {
    row: "Platformer",
    title: "Run 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/run2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clrun2.html"
  },
  {
    row: "Arcade",
    title: "Sandsofthecoliseum",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsandsofthecoliseum.html"
  },
  {
    row: "Arcade",
    title: "Scribblenauts",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clscribblenauts.html"
  },
  {
    row: "Arcade",
    title: "Secretofmana",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsecretofmana.html"
  },
  {
    row: "Arcade",
    title: "Shc 1",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshc1.html"
  },
  {
    row: "Arcade",
    title: "Shc 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshc2.html"
  },
  {
    row: "Arcade",
    title: "Shc 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshc3.html"
  },
  {
    row: "Horror",
    title: "Shinmegamitenseidevilsurvivor",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshinmegamitenseidevilsurvivor.html"
  },
  {
    row: "Arcade",
    title: "Shrek 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshrek2.html"
  },
  {
    row: "Arcade",
    title: "Shwultimatem",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clshwultimatem.html"
  },
  {
    row: "Arcade",
    title: "Sidepocket",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsidepocket.html"
  },
  {
    row: "Arcade",
    title: "Silenthill",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsilenthill.html"
  },
  {
    row: "Arcade",
    title: "Silenthillalt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsilenthillalt.html"
  },
  {
    row: "Sports",
    title: "Skateit",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/skate.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clskateit.html"
  },
  {
    row: "Runner",
    title: "Skibididibidygyattohiorizzingallovertheplacestillwatermangotheoryfemboydrool",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clskibididibidygyattohiorizzingallovertheplacestillwatermangotheoryfemboydrool.html"
  },
  {
    row: "Arcade",
    title: "Slimelabratory",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clslimelabratory.html"
  },
  {
    row: "Arcade",
    title: "Smadvance 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsmadvance2.html"
  },
  {
    row: "Arcade",
    title: "Smadvance 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsmadvance3.html"
  },
  {
    row: "Arcade",
    title: "Smashremix",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsmashremix.html"
  },
  {
    row: "Arcade",
    title: "Smbcrossover",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsmbcrossover.html"
  },
  {
    row: "Arcade",
    title: "Snailbob",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnailbob.html"
  },
  {
    row: "Arcade",
    title: "Snakeis",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/snake.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnakeis.html"
  },
  {
    row: "Arcade",
    title: "Snowridergoodygumdrops",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsnowridergoodygumdrops.html"
  },
  {
    row: "Sports",
    title: "Soccerrandomgood",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/soccerrandom.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsoccerrandomgood.html"
  },
  {
    row: "Arcade",
    title: "Solitaire",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/solitaire.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsolitaire.html"
  },
  {
    row: "Platformer",
    title: "Sonic 1 Contemporary",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonic1contemporary.html"
  },
  {
    row: "Platformer",
    title: "Sonic 3 Andknuckles",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonic3andknuckles.html"
  },
  {
    row: "Platformer",
    title: "Sonic 3 Complete",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonic3complete.html"
  },
  {
    row: "Platformer",
    title: "Sonic 3 Dblastdx",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonic3dblastdx.html"
  },
  {
    row: "Platformer",
    title: "Sonicadvance",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonicadvance.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicadvance.html"
  },
  {
    row: "Platformer",
    title: "Sonicadvance 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonicadvance2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicadvance2.html"
  },
  {
    row: "Platformer",
    title: "Sonicadvance 2 SP",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonicadvance2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicadvance2sp.html"
  },
  {
    row: "Platformer",
    title: "Sonicadvance 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonicadvance3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicadvance3.html"
  },
  {
    row: "Platformer",
    title: "Sonicandknuckles",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonicandknuckles.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicandknuckles.html"
  },
  {
    row: "Platformer",
    title: "Sonicbattle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicbattle.html"
  },
  {
    row: "Platformer",
    title: "Sonicclassiccollection",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicclassiccollection.html"
  },
  {
    row: "Platformer",
    title: "Sonicclassicheroes",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicclassicheroes.html"
  },
  {
    row: "Platformer",
    title: "Soniccolors",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsoniccolors.html"
  },
  {
    row: "Platformer",
    title: "Sonicdeltaorigins",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicdeltaorigins.html"
  },
  {
    row: "Platformer",
    title: "Sonicjam",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicjam.html"
  },
  {
    row: "Platformer",
    title: "Sonicmegamix",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicmegamix.html"
  },
  {
    row: "Platformer",
    title: "Sonicr",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicr.html"
  },
  {
    row: "Platformer",
    title: "Sonicralt",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicralt.html"
  },
  {
    row: "Platformer",
    title: "Sonicrush",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicrush.html"
  },
  {
    row: "Platformer",
    title: "Sonicrushadventure",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicrushadventure.html"
  },
  {
    row: "Sports",
    title: "Sonicspinball",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicspinball.html"
  },
  {
    row: "Platformer",
    title: "Sonicthehedgehog",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicthehedgehog.html"
  },
  {
    row: "Platformer",
    title: "Sonicthehedgehog 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicthehedgehog2.html"
  },
  {
    row: "Platformer",
    title: "Sonicthehedgehog 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/sonic3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsonicthehedgehog3.html"
  },
  {
    row: "Arcade",
    title: "Spaceinvaders",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspaceinvaders.html"
  },
  {
    row: "Arcade",
    title: "Spaceiskey",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspaceiskey.html"
  },
  {
    row: "Arcade",
    title: "Spaceiskey 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspaceiskey2.html"
  },
  {
    row: "Arcade",
    title: "Spaceiskeyxmas",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clspaceiskeyxmas.html"
  },
  {
    row: "Runner",
    title: "Stackydash",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstackydash.html"
  },
  {
    row: "Arcade",
    title: "Starfox",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/starfox64.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstarfox.html"
  },
  {
    row: "Arcade",
    title: "Starfox 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/starfox64.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstarfox64.html"
  },
  {
    row: "Arcade",
    title: "Starraiders",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstarraiders.html"
  },
  {
    row: "Arcade",
    title: "Stealthassassin",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstealthassassin.html"
  },
  {
    row: "Strategy",
    title: "Steelempire",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsteelempire.html"
  },
  {
    row: "Platformer",
    title: "Stickmanstealingdiamond",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickmanstealingdiamond.html"
  },
  {
    row: "Arcade",
    title: "Stickminairship",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickminairship.html"
  },
  {
    row: "Arcade",
    title: "Stickminbreakingbank",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickminbreakingbank.html"
  },
  {
    row: "Arcade",
    title: "Stickminescapingprison",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickminescapingprison.html"
  },
  {
    row: "Arcade",
    title: "Stickminfleecomplex",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickminfleecomplex.html"
  },
  {
    row: "Arcade",
    title: "Stickrpgcomplete",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickrpgcomplete.html"
  },
  {
    row: "Strategy",
    title: "Stickwar",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstickwar.html"
  },
  {
    row: "Simulation",
    title: "Stormthehouse",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstormthehouse.html"
  },
  {
    row: "Simulation",
    title: "Stormthehouse 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstormthehouse3.html"
  },
  {
    row: "Arcade",
    title: "Streetfighter 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstreetfighter2.html"
  },
  {
    row: "Arcade",
    title: "Streetfighter 2 Turbo",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstreetfighter2turbo.html"
  },
  {
    row: "Arcade",
    title: "Streetfighteralpha 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstreetfighteralpha3.html"
  },
  {
    row: "Shooter",
    title: "Strikeforceheroes",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstrikeforceheroes.html"
  },
  {
    row: "Shooter",
    title: "Strikeforceheroes 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstrikeforceheroes2.html"
  },
  {
    row: "Shooter",
    title: "Strikeforceheroes 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clstrikeforceheroes3.html"
  },
  {
    row: "Arcade",
    title: "Sugarsugar",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsugarsugar.html"
  },
  {
    row: "Arcade",
    title: "Superbomberman",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperbomberman.html"
  },
  {
    row: "Arcade",
    title: "Supercastlevania VI",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupercastlevaniaVI.html"
  },
  {
    row: "Arcade",
    title: "Superchibiknight",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperchibiknight.html"
  },
  {
    row: "Platformer",
    title: "Superdiagonalmario 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperdiagonalmario2.html"
  },
  {
    row: "Arcade",
    title: "Superfighters",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperfighters.html"
  },
  {
    row: "Simulation",
    title: "Superhouseofdeadninjas",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperhouseofdeadninjas.html"
  },
  {
    row: "Multiplayer",
    title: "Supermario",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermario.html"
  },
  {
    row: "Platformer",
    title: "Supermario 63",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario63.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermario63.html"
  },
  {
    row: "Platformer",
    title: "Supermario 64",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/supermario64.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermario64.html"
  },
  {
    row: "Platformer",
    title: "Supermario 64 DS",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/supermario64ds.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermario64ds.html"
  },
  {
    row: "Platformer",
    title: "Supermarioallstars",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermarioallstars.html"
  },
  {
    row: "Platformer",
    title: "Supermariobros 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariobros2.html"
  },
  {
    row: "Platformer",
    title: "Supermariobros 2 US",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariobros2us.html"
  },
  {
    row: "Platformer",
    title: "Supermariobros 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariobros3.html"
  },
  {
    row: "Platformer",
    title: "Supermariobros 3 Real",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariobros3real.html"
  },
  {
    row: "Racing",
    title: "Supermariokart",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariokart.html"
  },
  {
    row: "Platformer",
    title: "Supermarioland",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermarioland.html"
  },
  {
    row: "Platformer",
    title: "Supermarioland 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermarioland2.html"
  },
  {
    row: "Platformer",
    title: "Supermariomon",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariomon.html"
  },
  {
    row: "Platformer",
    title: "Supermariorpg",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermariorpg.html"
  },
  {
    row: "Platformer",
    title: "Supermarioworld",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermarioworld.html"
  },
  {
    row: "Platformer",
    title: "Supermarioworld 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/mario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermarioworld2.html"
  },
  {
    row: "Platformer",
    title: "Supermetroid",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/metroidzeromission.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermetroid.html"
  },
  {
    row: "Arcade",
    title: "Supermonkeyballjr",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupermonkeyballjr.html"
  },
  {
    row: "Arcade",
    title: "Superpunchout",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperpunchout.html"
  },
  {
    row: "Puzzle",
    title: "Superpuzzlefighter 2 Turbo",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperpuzzlefighter2turbo.html"
  },
  {
    row: "Puzzle",
    title: "Superpuzzlefighter 2 Turboalt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperpuzzlefighter2turboalt.html"
  },
  {
    row: "Arcade",
    title: "Superscribblenauts",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsuperscribblenauts.html"
  },
  {
    row: "Arcade",
    title: "Supersmashbros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/supersmashbros.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupersmashbros.html"
  },
  {
    row: "Arcade",
    title: "Supersmashflash",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/supersmashflash.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupersmashflash.html"
  },
  {
    row: "Arcade",
    title: "Supersmashflash 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/supersmashflash.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupersmashflash2.html"
  },
  {
    row: "Arcade",
    title: "Supersmashflash 2 Butdifversion",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupersmashflash2butdifversion.html"
  },
  {
    row: "Arcade",
    title: "Supremeduelist",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsupremeduelist.html"
  },
  {
    row: "Multiplayer",
    title: "Survevio",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsurvevio.html"
  },
  {
    row: "Arcade",
    title: "Sushicat",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsushicat.html"
  },
  {
    row: "Arcade",
    title: "Sushicat 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsushicat2.html"
  },
  {
    row: "Arcade",
    title: "Swerve",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/swerve.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswerve.html"
  },
  {
    row: "Puzzle",
    title: "Swordandshieldultimateplus",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/pokemon.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswordandshieldultimateplus.html"
  },
  {
    row: "Puzzle",
    title: "Swordplay",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswordplay.html"
  },
  {
    row: "Puzzle",
    title: "Swordsandsandals",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswordsandsandals.html"
  },
  {
    row: "Puzzle",
    title: "Swordsandsandals 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswordsandsandals2.html"
  },
  {
    row: "Puzzle",
    title: "Swordsandsouls",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clswordsandsouls.html"
  },
  {
    row: "Arcade",
    title: "Sydneyshark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clsydneyshark.html"
  },
  {
    row: "Arcade",
    title: "Takeover",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltakeover.html"
  },
  {
    row: "Platformer",
    title: "Tallmanrun",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltallmanrun.html"
  },
  {
    row: "Shooter",
    title: "Tankmayhem",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltankmayhem.html"
  },
  {
    row: "Arcade",
    title: "Tanukisunsetuhhhhhhhh",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltanukisunsetuhhhhhhhh.html"
  },
  {
    row: "Arcade",
    title: "Tapper",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltapper.html"
  },
  {
    row: "Simulation",
    title: "Tastyplanet",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltastyplanet.html"
  },
  {
    row: "Arcade",
    title: "Tboilambeternal",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltboilambeternal.html"
  },
  {
    row: "Arcade",
    title: "Tecmobowl",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltecmobowl.html"
  },
  {
    row: "Arcade",
    title: "Tempest 2000",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltempest2000.html"
  },
  {
    row: "Strategy",
    title: "Territorywar",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clterritorywar.html"
  },
  {
    row: "Puzzle",
    title: "Tetris",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tetris.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltetris.html"
  },
  {
    row: "Puzzle",
    title: "Tetrisattack",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tetris.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltetrisattack.html"
  },
  {
    row: "Puzzle",
    title: "Tetrisgba",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tetris.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltetrisgba.html"
  },
  {
    row: "Arcade",
    title: "Theclassroom",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltheclassroom.html"
  },
  {
    row: "Arcade",
    title: "Theclassroom 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltheclassroom2.html"
  },
  {
    row: "Arcade",
    title: "Theclassroom 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltheclassroom3.html"
  },
  {
    row: "Arcade",
    title: "Thedeepestsleep",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthedeepestsleep.html"
  },
  {
    row: "Adventure",
    title: "Theenchantedcave 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/theenchantedcave2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltheenchantedcave2.html"
  },
  {
    row: "Arcade",
    title: "Theimpossiblegame",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/theimpossiblegame.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltheimpossiblegame.html"
  },
  {
    row: "Arcade",
    title: "Thelaststand",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthelaststand.html"
  },
  {
    row: "Simulation",
    title: "Thelaststandunioncity (1)",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthelaststandunioncity%20(1).html"
  },
  {
    row: "Simulation",
    title: "Thelaststandunioncity",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthelaststandunioncity.html"
  },
  {
    row: "Arcade",
    title: "Themepark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthemepark.html"
  },
  {
    row: "Arcade",
    title: "Thisistheonlylevel",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/thisistheonlylevel.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthisistheonlylevel.html"
  },
  {
    row: "Arcade",
    title: "Thisistheonlylevel 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/thisistheonlylevel2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthisistheonlylevel2.html"
  },
  {
    row: "Arcade",
    title: "Thisistheonlyleveltoo",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/thisistheonlylevel.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clthisistheonlyleveltoo.html"
  },
  {
    row: "Sports",
    title: "Tonyhawkproskater",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltonyhawkproskater.html"
  },
  {
    row: "Sports",
    title: "Tonyhawkskater 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltonyhawkskater2.html"
  },
  {
    row: "Arcade",
    title: "Tonyhawksunderground",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltonyhawksunderground.html"
  },
  {
    row: "Arcade",
    title: "Toomanytypes",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltoomanytypes.html"
  },
  {
    row: "Arcade",
    title: "Tosstheturtle",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tosstheturtle.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltosstheturtle.html"
  },
  {
    row: "Arcade",
    title: "Trace",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrace.html"
  },
  {
    row: "Racing",
    title: "Trafficjam 3 D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrafficjam3d.html"
  },
  {
    row: "Arcade",
    title: "Tripleplay 2000",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltripleplay2000.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 1",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest1.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 10",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest10.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 11",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest11.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 12",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest12.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 13",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest13.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest2.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest3.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest4.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest5.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 6",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest6.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 7",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest7.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 8",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest8.html"
  },
  {
    row: "Platformer",
    title: "Trollfacequest 9",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltrollfacequest9.html"
  },
  {
    row: "Platformer",
    title: "Tubejumpers",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tubejumpers.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltubejumpers.html"
  },
  {
    row: "Arcade",
    title: "Tunnelrushbetter",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/tunnelrush.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltunnelrushbetter.html"
  },
  {
    row: "Arcade",
    title: "Turbostars",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clturbostars.html"
  },
  {
    row: "Arcade",
    title: "Twistedmetal",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltwistedmetal.html"
  },
  {
    row: "Arcade",
    title: "Twistedmetal 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltwistedmetal2.html"
  },
  {
    row: "Arcade",
    title: "Twoball 3 D",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/twoball3d.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cltwoball3d.html"
  },
  {
    row: "Arcade",
    title: "Ucds",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clucds.html"
  },
  {
    row: "Arcade",
    title: "Ufoswampoddysey",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clufoswampoddysey.html"
  },
  {
    row: "Arcade",
    title: "Ultimateassassian 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clultimateassassian2.html"
  },
  {
    row: "Arcade",
    title: "Ultimateassassian 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clultimateassassian3.html"
  },
  {
    row: "Arcade",
    title: "Ultimatemortalkombat",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clultimatemortalkombat.html"
  },
  {
    row: "Arcade",
    title: "Ultimatemortalkombat 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clultimatemortalkombat3.html"
  },
  {
    row: "Arcade",
    title: "Ultrakill",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/ultrakill.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clultrakill.html"
  },
  {
    row: "Platformer",
    title: "Umstickmangameidkiforgor",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clumstickmangameidkiforgor.html"
  },
  {
    row: "Arcade",
    title: "Underneath",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clunderneath.html"
  },
  {
    row: "Multiplayer",
    title: "Unfairmario",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/unfairmario.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clunfairmario.html"
  },
  {
    row: "Platformer",
    title: "Unfairmarioworkquestionmark",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clunfairmarioworkquestionmark.html"
  },
  {
    row: "Adventure",
    title: "Unicyclehero",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clunicyclehero.html"
  },
  {
    row: "Arcade",
    title: "Uno",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/cluno.html"
  },
  {
    row: "Arcade",
    title: "Upgradecomplete",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clupgradecomplete.html"
  },
  {
    row: "Arcade",
    title: "Upgradecomplete 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clupgradecomplete2.html"
  },
  {
    row: "Arcade",
    title: "Vanguard",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvanguard.html"
  },
  {
    row: "Platformer",
    title: "Vex",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex.html"
  },
  {
    row: "Platformer",
    title: "Vex 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex2.html"
  },
  {
    row: "Platformer",
    title: "Vex 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex3.html"
  },
  {
    row: "Platformer",
    title: "Vex 3 Xmas",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex3xmas.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex3xmas.html"
  },
  {
    row: "Platformer",
    title: "Vex 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex4.html"
  },
  {
    row: "Platformer",
    title: "Vex 5",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex5.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex5.html"
  },
  {
    row: "Platformer",
    title: "Vex 7",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex7.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex7.html"
  },
  {
    row: "Platformer",
    title: "Vex 8",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vex7.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvex8.html"
  },
  {
    row: "Platformer",
    title: "Vexx 3 M",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vexx3m.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvexx3m.html"
  },
  {
    row: "Platformer",
    title: "Vexx 3 M 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/vexx3m2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvexx3m2.html"
  },
  {
    row: "Arcade",
    title: "Villager",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvillager.html"
  },
  {
    row: "Sports",
    title: "Volleyrandom",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/volleyrandom.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clvolleyrandom.html"
  },
  {
    row: "Shooter",
    title: "Warfare 1944",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwarfare1944.html"
  },
  {
    row: "Strategy",
    title: "Warioland 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwarioland4.html"
  },
  {
    row: "Strategy",
    title: "Wariowarediy",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwariowarediy.html"
  },
  {
    row: "Strategy",
    title: "Wariowareinc",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwariowareinc.html"
  },
  {
    row: "Strategy",
    title: "Wartheknight",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwartheknight.html"
  },
  {
    row: "Sports",
    title: "Waterpoolio",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwaterpoolio.html"
  },
  {
    row: "Runner",
    title: "Wavedash",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwavedash.html"
  },
  {
    row: "Arcade",
    title: "Waverace 64",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwaverace64.html"
  },
  {
    row: "Platformer",
    title: "Waverun",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwaverun.html"
  },
  {
    row: "Arcade",
    title: "Whackthetheif",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwhackthetheif.html"
  },
  {
    row: "Arcade",
    title: "Whackyourboss",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwhackyourboss.html"
  },
  {
    row: "Arcade",
    title: "Whackyourcomputer",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwhackyourcomputer.html"
  },
  {
    row: "Racing",
    title: "Wheely",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/wheely.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely.html"
  },
  {
    row: "Racing",
    title: "Wheely 2",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/wheely2.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely2.html"
  },
  {
    row: "Racing",
    title: "Wheely 3",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/wheely3.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely3.html"
  },
  {
    row: "Racing",
    title: "Wheely 4",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/wheely4.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely4.html"
  },
  {
    row: "Racing",
    title: "Wheely 5",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely5.html"
  },
  {
    row: "Racing",
    title: "Wheely 6",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely6.html"
  },
  {
    row: "Racing",
    title: "Wheely 7",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely7.html"
  },
  {
    row: "Racing",
    title: "Wheely 8",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwheely8.html"
  },
  {
    row: "Arcade",
    title: "Windowsdoors",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwindowsdoors.html"
  },
  {
    row: "Arcade",
    title: "Winterfalling",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwinterfalling.html"
  },
  {
    row: "Arcade",
    title: "Wipeout 2097",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwipeout2097.html"
  },
  {
    row: "Arcade",
    title: "Wipeout 2097 Alt",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwipeout2097alt.html"
  },
  {
    row: "Simulation",
    title: "Witchcrafttd",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwitchcrafttd.html"
  },
  {
    row: "Shooter",
    title: "Wolfenstein 3 D",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwolfenstein3d.html"
  },
  {
    row: "Arcade",
    title: "Woodworm",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwoodworm.html"
  },
  {
    row: "Arcade",
    title: "Worldcup 98",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clworldcup98.html"
  },
  {
    row: "Arcade",
    title: "Worldshardestgame 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clworldshardestgame2.html"
  },
  {
    row: "Arcade",
    title: "Worldshardestgame 3",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clworldshardestgame3.html"
  },
  {
    row: "Arcade",
    title: "Worldshardestgame 4",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clworldshardestgame4.html"
  },
  {
    row: "Sports",
    title: "Wrestlebros",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/wrestlebros.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clwrestlebros.html"
  },
  {
    row: "Arcade",
    title: "Yarsrevenge",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clyarsrevenge.html"
  },
  {
    row: "Arcade",
    title: "Yellow",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clyellow.html"
  },
  {
    row: "Arcade",
    title: "Youarelucky",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clyouarelucky.html"
  },
  {
    row: "Runner",
    title: "Youvs 100 Skibidi",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clyouvs100skibidi.html"
  },
  {
    row: "Platformer",
    title: "Zelda 2 Thelegendoflink",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzelda2thelegendoflink.html"
  },
  {
    row: "Platformer",
    title: "Zeldaminishcap",
    addedAt: "2026-11-24",
    image: "https://raw.githubusercontent.com/yellowdevelopment/night/main/icons/link.webp",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzeldaminishcap.html"
  },
  {
    row: "Puzzle",
    title: "Zenword",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzenword.html"
  },
  {
    row: "Horror",
    title: "Zombieexploder",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombieexploder.html"
  },
  {
    row: "Horror",
    title: "Zombieroad",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombieroad.html"
  },
  {
    row: "Horror",
    title: "Zombiesatemyneighboors",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombiesatemyneighboors.html"
  },
  {
    row: "Arcade",
    title: "Zombopaclypse 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombopaclypse2.html"
  },
  {
    row: "Shooter",
    title: "Zombotron",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombotron.html"
  },
  {
    row: "Shooter",
    title: "Zombotron 2",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzombotron2.html"
  },
  {
    row: "Arcade",
    title: "Zrist",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzrist.html"
  },
  {
    row: "Arcade",
    title: "Zuma",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzuma.html"
  },
  {
    row: "Shooter",
    title: "Zumashooter",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/clzumashooter.html"
  },
  {
    row: "Arcade",
    title: "Orb",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/orb.html"
  },
  {
    row: "Arcade",
    title: "Tesdf",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/tesdf.html"
  },
  {
    row: "Arcade",
    title: "Test",
    addedAt: "2026-11-24",
    image: "",
    rawUrl: "https://cdn.jsdelivr.net/gh/bubbls/ugs-files@main/test.htm"
  }
];

// Exponer el catálogo para páginas auxiliares como el diagnóstico.
window.gamesList = gamesList;
