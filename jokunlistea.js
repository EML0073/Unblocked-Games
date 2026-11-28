const gameImages = {
"2048": "https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
  "Minecraft 26.2": "https://i.ytimg.com/vi/5VKjSq82d3Q/maxresdefault.jpg",
  "Minecraft 26.3": "https://i.redd.it/d924vpk4vmhh1.jpeg",
  "1 On 1 Soccer": "https://tcf.admeen.org/game/4000/3689/400x246/1-on-1-soccer.jpg",
  "1 On 1 Tennis": "https://agar.cc/games/wp-content/uploads/2025/05/1-on-1-tennis.jpg",
  "Minecraft 1.12": "https://i.ytimg.com/vi/z9Ae497x7oQ/maxresdefault.jpg",
  "Minecraft 1.12 WASM": "https://i.ytimg.com/vi/z9Ae497x7oQ/maxresdefault.jpg",
  "Minecraft 1.5": "https://i.ytimg.com/vi/vjHqEkTvhhk/maxresdefault.jpg",
  "Minecraft 1.8": "https://i.ytimg.com/vi/EtyG9ooFAt0/maxresdefault.jpg",
  "Minecraft 1.8 WASM": "https://i.ytimg.com/vi/EtyG9ooFAt0/maxresdefault.jpg",
  "10 Minutes Till Dawn": "https://img.itch.zone/aW1nLzg3MTU5NzMucG5n/original/0LqGxb.png",
  "12 Mini Battles": "https://play-lh.googleusercontent.com/FClOK2_m2CnumMcsiRKf5W02wK9vsbfVHj4SPOd-Bw36rgtr_2hkaqw0MEHv-jzqRe_4EhIyNzMvVkm8LYdroQ",
  "1v1.Lol": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubYInnAGe4y9zIN9OWITKCLIXZnxagTijhcj4jn9dPA&s",
  "2048 Cupcakes": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeQHaghE7Xho5W0fEb1C7tFOsMfGWxxbzVxCmWf5nK6r4Ob5tNYj5EZSW&s=10",
  "3D Flight Simulator": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOSHM0qF4Df5VIDiBvz1rTkrrj8UQyb4RMdcCXWGU3g&s=10",
  "3D Free Kick": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9LdhXt20AdSfQxC-zC6Pi2ncM2HZtkAm-o5R0YnZWQ&s=10",
  "8 Ball Classic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4-X9CBJ9VS51VnX-6h07TiTbAezlDs60xkD0ANpCyMEwMVLSnOMfqIU8&s=10",
  "9007199254740992": "https://s1.dmcdn.net/v/BGx4s1gpfXKuKKkd7/x720",
  "Minecraft Alpha 1.2.6": "https://minecraft.wiki/images/thumb/Alpha_v1.2.6_menu.png/280px-Alpha_v1.2.6_menu.png?af5fe",
  "Minecraft Beta 1.3": "https://i.ytimg.com/vi/OhwsgnKXVbE/maxresdefault.jpg",
  "Minecraft Indev": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d2/Indev_20100223.png/revision/latest?cb=20210728222353",
  "Agar IO Lite": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpCUA9j4sRs3g7kBzBwW9uZtjn5G81BncpEnSkXmPDQ&s=10",
  "Age Of War 2": "https://play-lh.googleusercontent.com/ot6BPlHqqsvYO_XfUMjhUh-HEXm5q6ApnUiyLvc7rZDNmu8HF2zTJr1orU7_jGXkYVpEDdiIe2adlOOck69mXA",
  "Age Of War": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEebnxnnG0YrmdWRQLMH-M3M5xbTDIugh12kpWjq8kw&s=10",
  "Ages Of Conflict": "https://i.ytimg.com/vi/eS0OAVOrunQ/mqdefault.jpg",
  "Among Us": "https://static.wikia.nocookie.net/amongus/images/d/da/Among_Us_Logo.png/revision/latest?cb=20231211001930&path-prefix=es",
  "Angry Birds Showdown": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR8kd6Js6IQP_-A54BLoQrq8jfV890ZAQtG3Yooo-YA&s=10",
  "Angry Birds Space": "https://static.wikia.nocookie.net/angrybirds/images/2/25/200x400_240.png/revision/latest/thumbnail/width/360/height/360?cb=20241201044010&path-prefix=es",
  "Angry Birds": "https://upload.wikimedia.org/wikipedia/en/2/2d/Angry_Birds_promo_art.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
  "Awesome Tanks 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAYfWitfhDyuteWfYuqsm2d3LifZioqVQQ-6kQKZW5BmZzrHinntsxzhq&s=10",
  "Awesome Tanks": "https://www.coolmathgames.com/sites/default/files/AwesomeTanks_OG-logo.jpg",
  "Backrooms": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zctJ9S10_BhWj9Y2egy6jgRhY-2-7uuUpAvOy_pes07VYFP2HtiMbNk&s=10",
  "Bacon May Die": "https://play-lh.googleusercontent.com/70mRpAms5QRNqOGjxCtS-yt8PoMzB9BblzUp5koocjqD8wnHakF6Zr_1rOg5cEqnPCs07TYq8r_4GjPbQqY42w",
  "Bad Ice Cream 2": "https://m.media-amazon.com/images/I/81GzRr9FV+L.png",
  "Bad Ice Cream 3": "https://m.media-amazon.com/images/I/81KuJ4iO5UL.png",
  "Bad Ice Cream": "https://m.media-amazon.com/images/I/81GzRr9FV+L.png",
  "Bad Parenting": "https://play-lh.googleusercontent.com/XBF1VnU6eOPWTuS1drE-JWWQK_Atv52nJr9OZEpvonL2nXiemQ-tQCScII__2I_9jHnt01P8VQVxk8J1SNEr",
  "Bad Piggies": "https://play-lh.googleusercontent.com/iXET8vmU1PZJ5BepnivZ7016tDgxhmNZUXc6xN8nbimnRl_-jWvmtONxS5Y069JshzKKZgZPIZ4S4u0URySLEQ",
  "Bad Time Simulator": "https://play-lh.googleusercontent.com/sZ-yJhGPw8_Sg1_ITp8B-b-z4w971n1IZ5CMBrAAu7wXUfghYvs0SlzKvT-X-yxDuJJ_Pcca19OH40eZ4JDhVA",
  "Baldis Basics": "https://tr.rbxcdn.com/180DAY-0adc3aae0f5317c8282d878a2ea2c156/500/280/Image/Jpeg/noFilter",
  "Bank Robbery 2": "https://imgs.crazygames.com/bank-robbery-2/20221226200359/bank-robbery-2-cover?metadata=none&quality=100&width=1200&height=630&fit=crop",
  "Bank Robbery 3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XCLQaw5GqfDnINMPBG0SoOsZDH3WbCU9AqTWN81lmA&s",
  "Baseball Bros": "https://batsmash.io/data/image/BaseballBros-1.jpg",
  "Basket Bros": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQytyPqHhIBJJH_HTD-gz48jtzSogAjXrtn1j7_pKVGzakQagZf4bqvfwb&s=10",
  "Basket Random": "https://play-lh.googleusercontent.com/sq0SQaq1utgwfeqovNMo61DhsHzVioadbBhAAr6OXJMBrrNG-8ybkyawexKk0viVCTYxTIdkarcRfoDKdcqi6uI",
  "Basketball Legends": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTj_p_8T9L3OeuO1JxiL_zOW8cJcnKFTaDbADXwq_GgNk-Bztt1nlpu74&s=10",
  "Basketball Stars": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/bc02c9cdfc5b424ddf343b01edf791ce/basketball-stars-logo.png",
  "Big Ice Tower Tiny Square": "https://www.coolmathgames.com/sites/default/files/BigIceTowerTinySquare_OG-logo.jpg",
  "Big Neon Tower Tiny Square": "https://www.coolmathgames.com/sites/default/files/BigNeonTowerTinySquare_OG-logo.jpg",
  "Big Tower Tiny Square 2": "https://www.coolmathgames.com/sites/default/files/BigTowerTinySquare2_OG-logo.jpg",
  "Big Tower Tiny Square": "https://www.coolmathgames.com/sites/default/files/BigTowerTinySquare_OG-logo.jpg",
  "Bit Planes": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjwp8ckW0EHOw5q2bK1uyPnPyWlxmCL65HUgsJAuJ6IfMMmHJX2QlnNHL&s=10",
  "Bitlife": "https://m.media-amazon.com/images/I/61jpZBYLFWL.png",
  "Blocky Snakes": "https://agario-free.com/assets/upload/agario/webp/blocky-snakes.webp",
  "Bloons TD 2": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1276390/ecac662d1249f677cfd4c947015c276039f24e46/header.jpg?t=1774011972",
  "Bloons TD 3": "https://img.itch.zone/aW1nLzEzMjE3NjYyLnBuZw==/original/81Jfly.png",
  "Bloons TD 4": "https://i.ytimg.com/vi/1OjcbPQxbPE/mqdefault.jpg",
  "Bloons TD 5": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PfTbP0w-KhHJSfWnrsZH8aaagIkX-BIzWN3L5u6iES_1cycdSyRnxpU&s=10",
  "Bloons TD": "https://tcf.admeen.org/game/3000/2976/400x246/bloons-tower-defense-1.jpg",
  "Bloxorz": "https://www.coolmathgames.com/sites/default/files/Bloxorz_OG-logo.jpg",
  "Blumgi Racers": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/dbeb9170182271f87ecd5626b68a73aa/blumgi-racers-logo.png",
  "Blumgi Rocket": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/672fb98802b00740e3c885cb2b31fc51/blumgi-rocket-logo.png",
  "Bob The Robber 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknpmBvndtEbiMwJiLM4PHbHRjkAcGI8biQQ4FVp-58g&s",
  "Bob The Robber 5": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEH86SSp01XFlqtILoeypVwhfzvpGOEc7zEN_Q5JO6WjuLdI5K4BeogA&s=10",
  "Bob The Robber": "https://www.coolmathgames.com/sites/default/files/BobTheRobber_OG-logo.jpg",
  "Bouncy Motors": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-FAJzNOgJu_zJzPtHPRnRHNRYDT7k3hmRe_ujsG4U_uf-pVWSMnrgYI&s=10",
  "Bow Masters": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/0.png",
  "Boxel Rebound": "https://trinculo54.github.io/Boxel-rebound-hope/Newer/img/icons/icon.png",
  "Boxing Random": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/boxingrandom/512x512.jpg",
  "Breaking The Bank": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/breakingthebank.jpg",
  "Bubble Shooter": "https://play-lh.googleusercontent.com/7JFfLNIQcxhSR8TpQ3ALUCvx-cv8mH6zyoUCB4PFuR6LVjzwwIVvunIMaGeI4NECbnzjUq4p64mPARH16H0F",
  "Burrito Bison Launcha Libre": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/78.png",
  "Candy Crush": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/171.png",
  "Capybara Clicker": "https://chromebookunlocked.github.io/games/Capybara%20Clicker/thumbnail.webp",
  "Car Drawing": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlvbOUZxSTKKNzmrZFWPS2kXpdMZf12MWqAXtOM8I2rB8o_zWRUfNptmL&s=10",
  "Car King Arena": "https://i.ytimg.com/vi/cTHBNVHSLGs/hqdefault.jpg",
  "Chaos Faction 2": "https://sealcentral.net/games/files/Chaos-Faction-2/icon.jpg",
  "Chess": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/chess.jpg",
  "Choppy Orc": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/464.png",
  "Circloo 2": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/275.png",
  "Circloo": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/274.png",
  "Clash Of Vikings": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/545.png",
  "Cleanup IO": "https://image.yaksgames.com/v2/game/8/7/9/VP8FFxLB6nwZpkZDoi9BkAWK6jROGsZX7B4UdHvS.jpeg",
  "Cluster Rush": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/cluster-rush/icon.jpg",
  "Cookie Clicker": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/cookie-clicker/cookie1.jpeg",
  "Coreball": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/83.png",
  "Crazy Cars": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/331.png",
  "Crazy Cattle 3D": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/164.png",
  "Crazy Crash Landing": "https://static.playgama.com/p-img/ph/crazy-crash-landing/big_preview/7edfbdb59ab947e5a5cd088674a715a5?width=1200",
  "Crazy Motorcycle": "https://chromebookunlocked.github.io/games/Crazy%20Motorcycle/thumbnail.webp",
  "Crossy Road": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/crossyroad.jpg",
  "Cut The Rope 2": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/cuttherope.jpg",
  "Cut The Rope Holiday Gift": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/214.png",
  "Cut The Rope Time Travel": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/ctr-time-travel/thumb.png",
  "Cut The Rope": "https://play-lh.googleusercontent.com/2bTmHHM7DBMVe7fLh16Em-J-tVBMFGL2HJCxPAMNF7gAYIfU6EZoYG1__lQ0cvFMEyp3GU9CGijZzEB1qJHF=s0-br30",
  "Dadish 2": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/dadish2.jpg",
  "Dadish 3": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/dadish3.jpg",
  "Dadish": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/dadish.jpg",
  "Deadly Descent": "https://chromebookunlocked.github.io/games/Deadly%20Descent/thumbnail.webp",
  "Death Chase": "https://w8.snokido.com/img/death-chase.jpg",
  "Death Run 3D": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/death-run-3d/img/death.png",
  "Demolition Derby Crash Racing": "https://unblockgameplus.github.io/assets/img/external/ext-605.jpg",
  "Doodle Jump": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/doodlejump/icon.png",
  "Draw Climber": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/86.png",
  "Dreadhead Parkour": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/310.png",
  "Drift Boss": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/drift-boss/icon.png",
  "Drift Hunters Pro": "https://www.drifted.com/wp-content/uploads/2026/01/featuredimage-tandem-battle-nissan-silvia-s15-mazda-rx7-fd-touge-drift-hunters-pro-500x281.jpg",
  "Drive Mad": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/drivemad/icons/icon-512.png",
  "Duck Life 2": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/flash/duck-life-2/ducklife2.png",
  "Duck Life 3": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/flash/duck-life-3/ducklife3.png",
  "Duck Life 4": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/ducklife4/icon.png",
  "Duck Life 5": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/ducklife5/ducklife5.png",
  "Duck Life": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/ducklife.jpg",
  "Ducklings IO": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9ecMSAeojScAdJoAlUA0BG_FT-qh2aqy7fHoHVzKe_z8ZW8ajcbKMhw&s=10",
  "Eagle Ride": "https://cdn2.y8.com/cloudimage/224637/file/w380h285_webp-d6c18d4ef6bebdf574b352971b2c4c88.webp",
  "Earn To Die 2": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/431590/header.jpg",
  "Earn To Die": "https://a.silvergames.com/w/b/earn-to-die.webp",
  "Eggy Car": "https://eggycargame.cc/uploads/games/main/img_692ed8b09225b.jpg",
  "Elastic Face": "https://img.bubblebox.com/elastic-face-240.jpg",
  "Escape Road 2": "https://truffled.lol/games/escape-road-2/icon.png",
  "Escape Road 3": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/792.png",
  "Escape Road": "https://imgs.crazygames.com/escape-road-asm_1x1/20250724105032/escape-road-asm_1x1-cover?format=auto&quality=100&metadata=none&width=1200",
  "Escaping The Prison": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/escapingtheprison.jpg",
  "Eugenes Life": "https://play-lh.googleusercontent.com/a6ZgmC6RtlB0bAMc23ZpNLN9DGbxFPMs0jFxzXRaC9_ytXBmX1QpkV4mgNORzHUYRT-2Rd7lWJDcGAhufzby",
  "Evil Glitch": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/277.png",
  "Fancy Pants Adventure 2": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/fancypantsadventure2.jpg",
  "Fancy Pants Adventure": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/fancypantsadventure.jpg",
  "Fireblob": "https://imgs.crazygames.com/auto-covers/fireblob_1x1?format=auto&metadata=none&quality=100&width=1200",
  "Fireboy And Watergirl 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUnYMUi3neIgJJ-16_-MIJIWSqX1cP9SRk_1E9LmUbe2dnLIr4sCnkSc&s=10",
  "Fireboy And Watergirl 3": "https://www2.minijuegosgratis.com/v3/games/thumbnails/20785_1.jpg",
  "Fireboy And Watergirl 4": "https://www2.minijuegosgratis.com/v3/games/thumbnails/24295_1.jpg",
  "Fireboy And Watergirl": "https://play-lh.googleusercontent.com/pmUNoC-Lu07skSH9LtfybfpIfN46fja-pfwj2TaxhbBYpmCDW1SYPM8-TSt_R4RAPAOw8Wfn4-zmA3AGpuv0lw",
  "Flappy Bird": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/flappybird/icon.png",
  "Fleeing The Complex": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/fleeingthecomplex.jpg",
  "Flood Runner 2": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/floodrunner2.jpg",
  "Flood Runner 3": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/floodrunner3.jpg",
  "Flood Runner 4": "https://dinosaurgame-free.io/data/image/game/flood-runner-4/flood-runner-4.png",
  "FNAF 2": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/fnaf-2/fnaf-2.jpg",
  "FNAF 3": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/fnaf-3/fnaf-3.png",
  "FNAF 4": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/fnaf-4/thumb.png",
  "FNAF Sister Location": "https://sealcentral.net/games/files/FNAF-Sister/icon.jpg",
  "FNAF": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/fnaf-1/favicon.png",
  "Football Bros": "https://truffled.lol/png/games/footbros.webp",
  "Football Legends": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/c6e0f5e01cd4cbd95ec12dd54c881a89/football-legends-logo.png",
  "Free Rider 3": "https://www2.minijuegosgratis.com/v3/games/thumbnails/23743_7_sq.jpg",
  "Friday Night Funkin": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/8.png",
  "Fruit Ninja": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/fruit-ninja/thumb.png",
  "Funny Battle 2": "https://sz-games.github.io/cover/FUNNYBATTLE2.webp",
  "Funny Battle": "https://imgs.crazygames.com/funny-battle-simulator/20221031152054/funny-battle-simulator-cover?metadata=none&quality=60&height=3591",
  "Funny Mad Racing": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/funnymadracing.jpg",
  "Funny Shooter 2": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/funnyshooter2.jpg",
  "Geometry Dash Lite": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/geometrydashlite.jpg",
  "Geometry Dash": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/geometrydash/icon.png",
  "Geometry Vibes": "https://cdn.blipzi.com/ge/om/geometry-vibes-d.jpg?aspect_ratio=1%3A1&height=50&width=50",
  "Get On Top": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/3078616e30ecc5f326bd8e6cad728a03/get-on-top-logo.png",
  "Getaway Shootout": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/getawayshooter/img/index.jpg",
  "Gladi Hoppers": "https://truffled.lol/png/games/glad.webp",
  "Google Baseball": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/257.png",
  "Google Dino": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/chromedino.jpg",
  "Granny 2": "https://play-lh.googleusercontent.com/X_9WQbosx62FK2V2BK1Tuh2f3FuwyhrznBBodZ6nxGphIC0PwU0YxTVDRpOhbVKquz4UzgZ4SbjwQhVYOvEGnA",
  "Granny": "https://truffled.lol/png/games/granny.webp",
  "Guess Their Answer": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/155.png",
  "Hanger 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVak0W0DJzX0RTpz-suo2he9ItTCYlxnYx12oQdhYxZoS46ENTzGyw-ME&s=10",
  "Happy Wheels": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/happywheels/Untitled.jpeg",
  "Helix Jump": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/helixjump.jpg",
  "Highway Traffic": "https://m.media-amazon.com/images/I/91v2iv5ug7L.jpg",
  "Hill Climb Racing Lite": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/157.png",
  "Hole IO": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/holeio.jpg",
  "House Of Hazards": "https://truffled.lol/games/houseofhazards/hoz.png",
  "Hover Racer Drive": "https://ozogames.com/uploads/2025/09/Hover-Racer-Drive-image.webp",
  "Ice Dodo": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/5.png",
  "Idle Breakout": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAx03-vWN4OOfFXtiRqWgNlrEZ4-9gz8t8c_s6FVfAKW9UYK97NQB5pkI&s=10",
  "Idle Dice": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/294.png",
  "Infiltrating The Airship": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/infiltratingtheairship.jpg",
  "Iron Snout": "https://icons-5.org/g4m3s/iron-snout/IronSnout.png",
  "Jacksmith": "https://bagelcomics.com/thumbnails/jacksmith.jpg",
  "Jetpack Joyride": "https://truffled.lol/games/jetpackjoyride/logo.jpeg",
  "Johnny Trigger": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/93.png",
  "Jumping Shell": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/8c089d8a9ee0c1715ce06261d27ab0a4/jumping-shell-logo.png",
  "Karate Bros": "https://cdn.blipzi.com/ka/ra/karate-bros-d.jpg?aspect_ratio=1%3A1&height=50&width=50",
  "Kart Bros": "https://freegames.io/thumbs/kart-bros_2.jpg",
  "Kittytoy": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/441.png",
  "Learn To Fly 2": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/learntofly2/logo.jpg",
  "Learn To Fly 3": "https://truffled.lol/games/ltf3/logo.png",
  "Learn To Fly Idle": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/learntoflyidle/icon.jpg",
  "Learn To Fly": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/learntofly/icon.png",
  "Level Devil": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/701e10b108ed7a0c68c738c46c9a705a/level-devil-logo.png",
  "Little Alchemy 2": "https://i.ytimg.com/vi/lZ9yLQMVzoM/hqdefault.jpg",
  "Madalin Stunt Cars 2": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/278.png",
  "Madness Project Nexus": "https://gaming-cdn.com/images/products/9688/orig/madness-project-nexus-pc-juego-steam-cover.jpg?v=1702467158",
  "Melon Playground": "https://truffled.lol/games/melon-playground/melon.png",
  "Merge Round Racers": "https://raw.githubusercontent.com/ShadowDevLabs/files/main/merge-round-racers/splash.png",
  "Minesweeper": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/minesweeper.jpg",
  "Monkey Mart": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/monkeymart/unnamed.png",
  "Monster Tracks": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/36.png",
  "Motherload": "https://bagelcomics.com/thumbnails/motherload.jpg",
  "Moto X3m 2": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/97.png",
  "Moto X3m 3": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/98.png",
  "Moto X3m Pool Party": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/124.png",
  "Moto X3m Spooky Land": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/3f8a297822df891a1c158576b6461014/moto-x3m-spooky-land-logo.png",
  "Moto X3m Winter": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/motox3mwinter.jpg",
  "Moto X3m": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/motox3m/splash.jpg",
  "Murder": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/baccf9660bfb476fe2c8ae9f5a2ec4d2/murder-logo.png",
  "Noob Miner": "https://w8.snokido.com/img/large/noob-miner-jailbreak.jpg",
  "Openttd": "https://upload.wikimedia.org/wikipedia/commons/b/ba/OpenTTD-15.3-en.png",
  "Opposite Day": "https://gamingkool.com/wp-content/uploads/2025/06/opposite-day-1-300x243.png.webp",
  "Ovo 2": "https://scout.wgimager.com/f_webp/w_420/q_90/https://melonplaygroundgame.org/data/image/game/ovo-2.png",
  "Ovo 3 Dimensions": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/3.png",
  "Ovo": "https://imgs.crazygames.com/games/ovo/cover-1605160387375.png?metadata=none&quality=60&height=5068",
  "Pac Man": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/pacman/icon.png",
  "Papas Bakeria": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/19ab3ab9c8c60afe5fe115269106fcd9/papas-bakeria-logo.png",
  "Papas Burgeria": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/papasburgeria/images.jpeg",
  "Papas Cheeseria": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/dba66f3ebbf814e758579987d62c1b35/papas-cheeseria-logo.jpeg",
  "Papas Cupcakeria": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/papascupcakeria.jpg",
  "Papas Donuteria": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/ac42fc62543c257861731ffbf401bf75/papas-donuteria-logo.png",
  "Papas Freezeria": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/papasfreezeria/images.jpeg",
  "Papas Hot Doggeria": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/papashotdoggeria.jpg",
  "Papas Pancakeria": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/papaspancakeria.jpg",
  "Papas Pastaria": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/papaspastaria.jpg",
  "Papas Pizzeria": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/papaspizzeria.jpg",
  "Papas Scooperia": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/papasscooperia.jpg",
  "Papas Sushiria": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/papassushiria.jpg",
  "Papas Taco Mia": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/papastacomia.jpg",
  "Papas Wingeria": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/papaswingeria.jpg",
  "Paper IO 2": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/paperio2/images/icon512.png",
  "Parking Fury 2": "https://77pen.github.io/img/parking-fury-2.png",
  "Parking Fury 3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9kivzV9Wuv1Gq1-oMrqccVMoWDZto4TfWqEx_gIA6eiabvF2na26zyg&s=10",
  "Parking Fury": "https://a.silvergames.com/w/b/parking-fury.webp",
  "Picos School": "https://upload.wikimedia.org/wikipedia/en/5/52/Pico%27s_School_%281999%29_screenshot.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
  "Ping Pong Chaos": "https://nargames.com/storage/uploads/thumbs/ping-pong-chaos.webp",
  "Pixel Speedrun": "https://schplay.com/games/pixel-speedrun/icon.png",
  "Plants Vs Zombies": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/232.png",
  "Plonky": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd35OCr92BNX7qGGsKagY87kgxF35GHIhUgh1CpIWVf2ketTdtHCphW4&s=10",
  "Polytrack": "https://i.ytimg.com/vi/wXsG1d9TzdI/maxresdefault.jpg",
  "Poor Bunny": "https://i.ytimg.com/vi/b1sY8BucElA/maxresdefault.jpg",
  "Pou": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/23.png",
  "Ragdoll Archers": "https://truffled.lol/games/ragdoll/arch.png",
  "Ragdoll Hit": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/3c892779be9dabb3589586c83ad3eeed/ragdoll-hit-logo.png",
  "Ragdoll Soccer": "https://img.ragdollsoccer.org/s_5l3j696v2r2r53/cover.610f9ccee4.webp",
  "Red Ball 4 Vol 1": "https://play-lh.googleusercontent.com/2YHKmwP7IBVt6mTE4mZ_tbDbRw7rGqtvvh1a4gKHQgLpYxBaBodFjtBerlgxD9GoKmX6SUnxDTzAK8NbqEcN=w526-h296-rw",
  "Red Ball 4 Vol 2": "https://play-lh.googleusercontent.com/2YHKmwP7IBVt6mTE4mZ_tbDbRw7rGqtvvh1a4gKHQgLpYxBaBodFjtBerlgxD9GoKmX6SUnxDTzAK8NbqEcN=w526-h296-rw",
  "Red Ball 4 Vol 3": "https://play-lh.googleusercontent.com/2YHKmwP7IBVt6mTE4mZ_tbDbRw7rGqtvvh1a4gKHQgLpYxBaBodFjtBerlgxD9GoKmX6SUnxDTzAK8NbqEcN=w526-h296-rw",
  "Retro Bowl College": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/retrobowlcollege/unnamed.png",
  "Retro Bowl": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/retrobowl/img/splash.png",
  "Retro Highway": "https://gearheadgames.com/retrohighway/images/logo.png",
  "Retro Ping Pong": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXIuYoMCyKytVcW8mhcw7NrNVnlOk2lTbYOJQ7pr53JVbUbV-JqZfj3G-F&s=10",
  "Riddle School 2": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/riddleschool2/icon.png",
  "Riddle School 3": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/riddleschool3/riddle-school-3.webp",
  "Riddle School 4": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/riddleschool4/Untitled.jpeg",
  "Riddle School 5": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/riddleschool5/Untitled.jpeg",
  "Riddle School": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/riddleschool/RiddleSchool2.png",
  "Riddle Transfer 2": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/riddletransfer2.jpg",
  "Riddle Transfer": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/riddletransfer.jpg",
  "Rocket Soccer Derby": "https://unblockgameplus.github.io/assets/img/external/ext-527.jpg",
  "Rooftop Run": "https://tcf.admeen.org/game/19500/19180/400x246/rooftop-run.webp",
  "Rooftop Snipers 2": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/rooftop-snipers/thumb.png",
  "Rooftop Snipers": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/rooftopsnipers/logo.png",
  "Run 2": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/run2/icon.jpg",
  "Run 3": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/run3/icon.jpeg",
  "Run": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/run/icon.jpeg",
  "Sand Game": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJgs-K8bsqPY9S4wIuOM5OEMYoXGzNF8BkwqSv2G0OGVtQ9_sUnszwM3M&s=10",
  "Sandbox City": "https://play-lh.googleusercontent.com/tYT9GHR-jI_TRxvh12awl9MlJg11k3jXz_MuqtvvO6j3e18qJ-uvudow5jRchTYPGvoI7oj2jZOfsOHFerPR7g",
  "Short Life": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9mKxcKtD8psHPv-DSa8yEVmO4S3mD8EWaOEPXLrW-GcsMFc2LLCMU9o&s=10",
  "Six Cats Under": "https://browsercraft.com/images/games/covers/six-cats-under.jpg",
  "Slope 2 Player": "https://slope2game.io/cache/data/image/game/slope-2-player/slope-2-player-m200x200.webp",
  "Slope 3": "https://slope3.me/icon-64.png",
  "Slope": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/slope/slope4.jpeg",
  "Slow Roads": "https://truffled.lol/png/games/slow.webp",
  "Sm 63": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREkVKKczwdspwpPprDHzGcYSJvocOb2c3AxcrvVh1HA&s",
  "Sm 64": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/sm64.jpg",
  "Snail Bob 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdX0oSdBDpUzZdBXxEllOn6C3Hrs1mP7JQfoaq-KN_zQ&s=10",
  "Snail Bob 3": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/snail-bob-3/snail-bob-3.png",
  "Snail Bob 4": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/snail-bob-4/snail-bob-4.png",
  "Snail Bob 5": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/snail-bob-5/snail-bob-5.jpg",
  "Snail Bob 6": "https://raw.githubusercontent.com/BrowLu27/gamessite.github.io/main/projects/snail-bob-6/snail-bob-6.png",
  "Snail Bob 7": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdx87jc3HUhEHFw-DxUd3jqeu0yPhsSLtTu5Zhw3hbYfZC8wRCJ5KT-aG7&s=10",
  "Snail Bob 8": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmfO-L6znh3hJ9d3cqnPDHcDy7t8nGvWH6RtdUhmXBQ&s=10",
  "Snail Bob": "https://kizicdn.com/system/static/thumbs/big_tile_thumb/1783/thumb300_maxresdefault.jpg?1556203170",
  "Snow Rider": "https://play-lh.googleusercontent.com/8eXDsrFKHBw57UiUC8ryMXQS-WPvPia7BYuBjzzUOy9VnGqrOCTV3kAaKci1TyFBgBAUKLg0aAjNiOdXL0USEA=w526-h296-rw",
  "Snow Road": "https://www2.minijuegosgratis.com/v3/games/thumbnails/255614_7_sq.jpg",
  "Snowball IO": "https://play-lh.googleusercontent.com/CFNkJuW4sYU-Qa_sQZ-MsDlcq_Kc1VoZKZg-3M4jbsD6dtnmnsXzZ37i6TR8GKHJAi54T1fe-3YDnRJYGahtSHM",
  "Soccer Bros": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleBq0pSLLT04gSUItxzWd8v36_Lk3GdclMtlGin5N1w&s=10",
  "Soccer Random": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSea_nYzj62qLeAp93_bKfFnVdK-m5p-O4DQKbTosmgYyvS5Lh0-xQzZuT_&s=10",
  "Space Is Key 2": "https://www.coolmathgames.com/sites/default/files/styles/app_icon/public/Space-is-key-2-game-icon.png?itok=kdwpNQ0d",
  "Space Is Key": "https://www.coolmathgames.com/sites/default/files/styles/app_icon/public/space-is-key-game-icon.png?itok=3cXvx2ZD",
  "Space Waves": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/space/cover.svg",
  "Spacebar Clicker": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/473.png",
  "Speed Stars": "https://play-lh.googleusercontent.com/401i77SId9iFJhSAbsf7N_VAzwlF54JScAhir-1eHVakBRXtQ7wDytltICSlgjtUqcG5apsnu84uy3A59JfSxw=w240-h480-rw",
  "Sprunki": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/9.png",
  "Stack": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/stack.jpg",
  "Stacktris": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/ba04eca05c362b04deec44651e86e39a/stacktris-logo.png",
  "State IO": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/stateio.jpg",
  "Stealing The Diamond": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/stealingthediamond.jpg",
  "Stick Archers Battle": "https://i.ytimg.com/vi/vWcDZr6SIp0/maxresdefault.jpg",
  "Stick Fighter": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXISXyT7qeLYzEknIjgcEph2ifVPRG9sQZephSOJSB7vSZMzwUZzkUHM&s=10",
  "Stick Merge": "https://raw.githubusercontent.com/ShadowDevLabs/files/main/stick-merge/splash.png",
  "Stickman Hook": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/stickman-hook/icon.jpg",
  "Subway Surfers Beijing": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/subwaysurfers.jpeg",
  "Subway Surfers Havana": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/subwaysurfers.jpeg",
  "Subway Surfers San Francisco": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/subwaysurfers.jpeg",
  "Super Bike The Champion": "https://img.poki-cdn.com/cdn-cgi/image/q%3D78%2Cscq%3D50%2Cwidth%3D94%2Cheight%3D94%2Cfit%3Dcover%2Cf%3Dauto/637e9d97391d771eb633c1091c05b66f/super-bike-the-champion-logo.png",
  "Super Liquid Soccer": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1705130/header.jpg?t=1671169997",
  "Super Star Car": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/579.png",
  "Superhot": "https://truffled.lol/games/superhot/icon.png",
  "Table Tennis World Tour": "https://firebasestorage.googleapis.com/v0/b/famobi-eos.appspot.com/o/websiteGames%2FRxEpTrw2hJLPSAx6AeEM%2Fimages%2Fteaser.webp?alt=media",
  "Tag": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/627.png",
  "Tanuki Sunset": "https://truffled.lol/png/games/tanukisunset.webp",
  "Tap Road": "https://cpsgames.org/thumbs/tap-road_1.webp",
  "Temple Of Boom": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/d710fe8830d731072485a582881605ea/temple-of-boom-logo.png",
  "Temple Run 2": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/templerun2.jpg",
  "Territorial IO": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/territorialio.jpg",
  "Tetrominoes": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHofK9U0GqlPu5ULgVSfTGraHkEDzla18uWemjxYdQ0r3cvJjFPmRIfWI&s=10",
  "The Impossible Quiz 2": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/theimpossiblequiz2.jpg",
  "The Impossible Quiz": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/3cd96c99-46c1-4ff0-b04a-82381ea07349/the-impossible-quiz-logo.png",
  "There Is No G": "https://www.coolmathgames.com/sites/default/files/there-is-no-game.png",
  "They Are Coming": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/348.png",
  "This Is The Only Level Too": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9FQovfzayrKDMKWwUc6ql-niU3wCEnxGq9pW7D5M7disQ9l_BXgOeOU&s=10",
  "This Is The Only Level": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/thisistheonlylevel.jpg",
  "Time Shooter 2": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/timeshooter2/ts2.jpg",
  "Time Shooter 3": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/timeshooter3/logo.png",
  "Tiny Fishing": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/tinyfishing/thumb.png",
  "Tomb Of The Mask": "https://truffled.lol/games/tombofthemask/cover.svg",
  "Trap The Cat": "https://trap-thecat.github.io/bg1.png",
  "Trivia Crack": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/163.png",
  "Tube Jumpers": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/tube-jumpers/img/icon.jpg",
  "Tunnel Rush": "https://raw.githubusercontent.com/a456pur/seraph/main/images/thumbnails/tunnelrush.jpg",
  "Unicycle Hero": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDV0olkPG57VWPHhrZTqa7JIqXvYj57c2fq7V4rOz6Wji2ZlAZ4Fh9KCY&s=10",
  "Vex 4": "https://truffled.lol/games/vex4/vex4.png",
  "Vex 5": "https://truffled.lol/games/vex5/vex.jpeg",
  "Vex 6": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/vex6/assets/icon.png",
  "Vex 7": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIqcFHcYTJMMvDZXzQ7hq_87MN9cZ5sbdVEIj60OcOxxmBxQqmAqg3zCQ&s=10",
  "Vex 8": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRBzo_agCWijb1mh9I0ySq-AU1Qb--8erxN1G5rqCPUzqiAPjEV9UIq0R&s=10",
  "Vex X3m 2": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/56.png",
  "Vex X3m": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/55.png",
  "Volley Random": "https://truffled.lol/games/volley-random/splash.png",
  "War The Knights": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/284.png",
  "We Become What We Behold": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/671.png",
  "Wheelie Bike": "https://play-lh.googleusercontent.com/a--Z5EuOewe3X6bq0XyhLVvIEWDBhyulH972p72HgyctBd1eS9snr3YVG11clRzc4r5c5WoNP648go5LUWUU",
  "Wheely 2": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/246.png",
  "Wheely 3": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/247.png",
  "Wheely 4": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/248.png",
  "Wheely 5": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/249.png",
  "Wheely 6": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/250.png",
  "Wheely 7": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/251.png",
  "Wheely 8": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/252.png",
  "Wheely": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/245.png",
  "Wordle Unlimited": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSY62s696QkCOAw-BbHT3QsJil7pYX0ednTIyoqMpowZQUcEDKmvmM3rh&s=10",
  "Worlds Hardest Game 2": "https://www.coolmathgames.com/sites/default/files/WorldsHardestGame2_OG-logo.jpg",
  "Worlds Hardest Game 3": "https://www.coolmathgames.com/sites/default/files/WorldsHardestGame3_OG-logo.jpg",
  "Worlds Hardest Game": "https://raw.githubusercontent.com/gamesyte/gamesyte.github.io/main/worldshardestgame/icon.png",
  "Wrestle Bros": "https://imgs.crazygames.com/wrestle-bros_16x9/20250320082313/wrestle-bros_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop",
  "Yohoho IO": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main/835.png",
  "Zombie Rush": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXfHinBIdT2_ztfxwW6SvG0KIW1KLhdxGxcaB_m7FRg&s=10",
  "Zrist": "https://www.coolmathgames.com/sites/default/files/zrist-game-icon.png",
  "Nautilus": "https://avatars.githubusercontent.com/u/240241840?s=280&v=4",
  "EmulatorJS": "https://emulatorjs.org/logo/EmulatorJS.png",
  "githubsearch": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/Screenshot%202026-11-28%2013.20.54.png",
  "NESemulator": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcCHiag_XjJz2H11pkMWTWu9_OVhMSFQ6H8BrNCj2q9YhIARDLghEAyU&s=10",
  "helios": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/Screenshot%202026-11-28%2013.23.21.png",
  "pico8edu": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLKiGeihQpFQGsp4NzjrD_xSJ8ZbVdXsj_lfBzpWgQQ&s=10",
  "ruffleemu": "https://static0.xdaimages.com/wordpress/wp-content/uploads/2021/02/ruffle-flash-player-emulator.jpg",
  "sandstone": "https://camo.githubusercontent.com/e248797a3e0c01e4f409f16d12b1341d6873bda3c5a54cc1c0f9cbcaa88f5146/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f612f61662f555344415f4d696e6572616c5f53616e6473746f6e655f393363333935352e6a70673f3230303530353230313731363237",
  "scratch": "https://digikids.es/wp-content/uploads/2025/07/scratch-cat-logo-png_seeklogo-431721.png",
  "silk": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHN4bMDC2fcLateRhCq1CW-IHLNg2ZMGhAphDSTge2A&s=10",
  "soundboard": "https://nerdordie.com/wp-content/uploads/2022/04/streamdeck-soundboard-twitch.jpg",
  "gust": "https://repository-images.githubusercontent.com/1214064612/e4b46c21-8880-4fa2-8938-9b8ee7235d3e"
};

const gamesList = [
  {
    "id": 0,
    "row": "Adventure",
    "title": "Minecraft 26.2",
    "addedAt": "2026-11-23",
    "image": gameImages["Minecraft 26.2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/MilkdromedaStudios/all-of-eaglercraft/refs/heads/main/Eaglercraft%2026.2%20u2.html"
  },
  {
    "id": 1,
    "row": "Deportes",
    "title": "1 On 1 Soccer",
    "addedAt": "2026-11-26",
    "image": gameImages["1 On 1 Soccer"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/1-on-1-soccer.html"
  },
  {
    "id": 2,
    "row": "Deportes",
    "title": "1 On 1 Tennis",
    "addedAt": "2026-11-26",
    "image": gameImages["1 On 1 Tennis"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/1-on-1-tennis.html"
  },
  {
    "id": 3,
    "row": "Arcade",
    "title": "Minecraft 1.12",
    "addedAt": "2026-11-26",
    "image": gameImages["Minecraft 1.12"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/1.12.html"
  },
  {
    "id": 4,
    "row": "Arcade",
    "title": "Minecraft 1.12 WASM",
    "addedAt": "2026-11-26",
    "image": gameImages["Minecraft 1.12 WASM"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/1.12_WASM.html"
  },
  {
    "id": 5,
    "row": "Arcade",
    "title": "Minecraft 1.5",
    "addedAt": "2026-11-26",
    "image": gameImages["Minecraft 1.5"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/1.5.html"
  },
  {
    "id": 6,
    "row": "Arcade",
    "title": "Minecraft 1.8",
    "addedAt": "2026-11-26",
    "image": gameImages["Minecraft 1.8"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/1.8.html"
  },
  {
    "id": 7,
    "row": "Arcade",
    "title": "Minecraft 1.8 WASM",
    "addedAt": "2026-11-26",
    "image": gameImages["Minecraft 1.8 WASM"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/1.8_WASM.html"
  },
  {
    "id": 8,
    "row": "Arcade",
    "title": "10 Minutes Till Dawn",
    "addedAt": "2026-11-26",
    "image": gameImages["10 Minutes Till Dawn"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/10-minutes-till-dawn.html"
  },
  {
    "id": 9,
    "row": "Acción",
    "title": "12 Mini Battles",
    "addedAt": "2026-11-26",
    "image": gameImages["12 Mini Battles"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/12-mini-battles.html"
  },
  {
    "id": 10,
    "row": "Arcade",
    "title": "1v1.Lol",
    "addedAt": "2026-11-26",
    "image": gameImages["1v1.Lol"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/1v1.lol.html"
  },
  {
    "id": 11,
    "row": "Puzles",
    "title": "2048 Cupcakes",
    "addedAt": "2026-11-26",
    "image": gameImages["2048 Cupcakes"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/2048-cupcakes.html"
  },
  {
    "id": 12,
    "row": "Puzles",
    "title": "2048",
    "addedAt": "2026-11-26",
    "image": gameImages["2048"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/2048.html"
  },
  {
    "id": 13,
    "row": "Carreras",
    "title": "3D Flight Simulator",
    "addedAt": "2026-11-26",
    "image": gameImages["3D Flight Simulator"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/3D-flight-simulator.html"
  },
  {
    "id": 14,
    "row": "Deportes",
    "title": "3D Free Kick",
    "addedAt": "2026-11-26",
    "image": gameImages["3D Free Kick"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/3d-free-kick.html"
  },
  {
    "id": 15,
    "row": "Arcade",
    "title": "8 Ball Classic",
    "addedAt": "2026-11-26",
    "image": gameImages["8 Ball Classic"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/8-ball-classic.html"
  },
  {
    "id": 16,
    "row": "Arcade",
    "title": "9007199254740992",
    "addedAt": "2026-11-26",
    "image": gameImages["9007199254740992"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/9007199254740992.html"
  },
  {
    "id": 17,
    "row": "Arcade",
    "title": "Minecraft Alpha 1.2.6",
    "addedAt": "2026-11-26",
    "image": gameImages["Minecraft Alpha 1.2.6"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/Alpha_1.2.6.html"
  },
  {
    "id": 18,
    "row": "Arcade",
    "title": "Minecraft Beta 1.3",
    "addedAt": "2026-11-26",
    "image": gameImages["Minecraft Beta 1.3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/Beta_1.3.html"
  },
  {
    "id": 19,
    "row": "Arcade",
    "title": "Minecraft Indev",
    "addedAt": "2026-11-26",
    "image": gameImages["Minecraft Indev"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/Indev.html"
  },
  {
    "id": 20,
    "row": "Multijugador .IO",
    "title": "Agar IO Lite",
    "addedAt": "2026-11-26",
    "image": gameImages["Agar IO Lite"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/agar-io-lite.html"
  },
  {
    "id": 21,
    "row": "Estrategia",
    "title": "Age Of War 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Age Of War 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/age-of-war-2.html"
  },
  {
    "id": 22,
    "row": "Estrategia",
    "title": "Age Of War",
    "addedAt": "2026-11-26",
    "image": gameImages["Age Of War"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/age-of-war.html"
  },
  {
    "id": 23,
    "row": "Estrategia",
    "title": "Ages Of Conflict",
    "addedAt": "2026-11-26",
    "image": gameImages["Ages Of Conflict"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/ages-of-conflict.html"
  },
  {
    "id": 24,
    "row": "Multijugador .IO",
    "title": "Among Us",
    "addedAt": "2026-11-26",
    "image": gameImages["Among Us"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/among-us.html"
  },
  {
    "id": 25,
    "row": "Arcade",
    "title": "Angry Birds Showdown",
    "addedAt": "2026-11-26",
    "image": gameImages["Angry Birds Showdown"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/angry-birds-showdown.html"
  },
  {
    "id": 26,
    "row": "Arcade",
    "title": "Angry Birds Space",
    "addedAt": "2026-11-26",
    "image": gameImages["Angry Birds Space"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/angry-birds-space.html"
  },
  {
    "id": 27,
    "row": "Arcade",
    "title": "Angry Birds",
    "addedAt": "2026-11-26",
    "image": gameImages["Angry Birds"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/angry-birds.html"
  },
  {
    "id": 28,
    "row": "Acción",
    "title": "Awesome Tanks 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Awesome Tanks 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/awesome-tanks-2.html"
  },
  {
    "id": 29,
    "row": "Acción",
    "title": "Awesome Tanks",
    "addedAt": "2026-11-26",
    "image": gameImages["Awesome Tanks"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/awesome-tanks.html"
  },
  {
    "id": 30,
    "row": "Terror",
    "title": "Backrooms",
    "addedAt": "2026-11-26",
    "image": gameImages["Backrooms"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/backrooms.html"
  },
  {
    "id": 31,
    "row": "Acción",
    "title": "Bacon May Die",
    "addedAt": "2026-11-26",
    "image": gameImages["Bacon May Die"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bacon-may-die.html"
  },
  {
    "id": 32,
    "row": "Arcade",
    "title": "Bad Ice Cream 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Bad Ice Cream 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bad-ice-cream-2.html"
  },
  {
    "id": 33,
    "row": "Arcade",
    "title": "Bad Ice Cream 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Bad Ice Cream 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bad-ice-cream-3.html"
  },
  {
    "id": 34,
    "row": "Arcade",
    "title": "Bad Ice Cream",
    "addedAt": "2026-11-26",
    "image": gameImages["Bad Ice Cream"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bad-ice-cream.html"
  },
  {
    "id": 35,
    "row": "Terror",
    "title": "Bad Parenting",
    "addedAt": "2026-11-26",
    "image": gameImages["Bad Parenting"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bad-parenting.html"
  },
  {
    "id": 36,
    "row": "Arcade",
    "title": "Bad Piggies",
    "addedAt": "2026-11-26",
    "image": gameImages["Bad Piggies"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bad-piggies.html"
  },
  {
    "id": 37,
    "row": "Terror",
    "title": "Bad Time Simulator",
    "addedAt": "2026-11-26",
    "image": gameImages["Bad Time Simulator"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bad-time-simulator.html"
  },
  {
    "id": 38,
    "row": "Terror",
    "title": "Baldis Basics",
    "addedAt": "2026-11-26",
    "image": gameImages["Baldis Basics"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/baldis-basics.html"
  },
  {
    "id": 39,
    "row": "Aventura",
    "title": "Bank Robbery 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Bank Robbery 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bank-robbery-2.html"
  },
  {
    "id": 40,
    "row": "Aventura",
    "title": "Bank Robbery 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Bank Robbery 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bank-robbery-3.html"
  },
  {
    "id": 41,
    "row": "Deportes",
    "title": "Baseball Bros",
    "addedAt": "2026-11-26",
    "image": gameImages["Baseball Bros"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/baseball-bros.html"
  },
  {
    "id": 42,
    "row": "Deportes",
    "title": "Basket Bros",
    "addedAt": "2026-11-26",
    "image": gameImages["Basket Bros"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/basket-bros.html"
  },
  {
    "id": 43,
    "row": "Deportes",
    "title": "Basket Random",
    "addedAt": "2026-11-26",
    "image": gameImages["Basket Random"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/basket-random.html"
  },
  {
    "id": 44,
    "row": "Deportes",
    "title": "Basketball Legends",
    "addedAt": "2026-11-26",
    "image": gameImages["Basketball Legends"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/basketball-legends.html"
  },
  {
    "id": 45,
    "row": "Deportes",
    "title": "Basketball Stars",
    "addedAt": "2026-11-26",
    "image": gameImages["Basketball Stars"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/basketball-stars.html"
  },
  {
    "id": 46,
    "row": "Arcade",
    "title": "Big Ice Tower Tiny Square",
    "addedAt": "2026-11-26",
    "image": gameImages["Big Ice Tower Tiny Square"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/big-ice-tower-tiny-square.html"
  },
  {
    "id": 47,
    "row": "Arcade",
    "title": "Big Neon Tower Tiny Square",
    "addedAt": "2026-11-26",
    "image": gameImages["Big Neon Tower Tiny Square"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/big-neon-tower-tiny-square.html"
  },
  {
    "id": 48,
    "row": "Arcade",
    "title": "Big Tower Tiny Square 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Big Tower Tiny Square 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/big-tower-tiny-square-2.html"
  },
  {
    "id": 49,
    "row": "Arcade",
    "title": "Big Tower Tiny Square",
    "addedAt": "2026-11-26",
    "image": gameImages["Big Tower Tiny Square"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/big-tower-tiny-square.html"
  },
  {
    "id": 50,
    "row": "Arcade",
    "title": "Bit Planes",
    "addedAt": "2026-11-26",
    "image": gameImages["Bit Planes"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bit-planes.htm"
  },
  {
    "id": 51,
    "row": "Simulación",
    "title": "Bitlife",
    "addedAt": "2026-11-26",
    "image": gameImages["Bitlife"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bitlife.html"
  },
  {
    "id": 52,
    "row": "Multijugador .IO",
    "title": "Blocky Snakes",
    "addedAt": "2026-11-26",
    "image": gameImages["Blocky Snakes"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/blocky-snakes.html"
  },
  {
    "id": 53,
    "row": "Estrategia",
    "title": "Bloons TD 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Bloons TD 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bloons-TD-2.html"
  },
  {
    "id": 54,
    "row": "Estrategia",
    "title": "Bloons TD 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Bloons TD 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bloons-TD-3.html"
  },
  {
    "id": 55,
    "row": "Estrategia",
    "title": "Bloons TD 4",
    "addedAt": "2026-11-26",
    "image": gameImages["Bloons TD 4"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bloons-TD-4.html"
  },
  {
    "id": 56,
    "row": "Estrategia",
    "title": "Bloons TD 5",
    "addedAt": "2026-11-26",
    "image": gameImages["Bloons TD 5"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bloons-TD-5.html"
  },
  {
    "id": 57,
    "row": "Estrategia",
    "title": "Bloons TD",
    "addedAt": "2026-11-26",
    "image": gameImages["Bloons TD"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bloons-TD.html"
  },
  {
    "id": 58,
    "row": "Puzles",
    "title": "Bloxorz",
    "addedAt": "2026-11-26",
    "image": gameImages["Bloxorz"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bloxorz.html"
  },
  {
    "id": 59,
    "row": "Carreras",
    "title": "Blumgi Racers",
    "addedAt": "2026-11-26",
    "image": gameImages["Blumgi Racers"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/blumgi-racers.html"
  },
  {
    "id": 60,
    "row": "Arcade",
    "title": "Blumgi Rocket",
    "addedAt": "2026-11-26",
    "image": gameImages["Blumgi Rocket"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/blumgi-rocket.html"
  },
  {
    "id": 61,
    "row": "Aventura",
    "title": "Bob The Robber 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Bob The Robber 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bob-the-robber-2.html"
  },
  {
    "id": 62,
    "row": "Aventura",
    "title": "Bob The Robber 5",
    "addedAt": "2026-11-26",
    "image": gameImages["Bob The Robber 5"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bob-the-robber-5.html"
  },
  {
    "id": 63,
    "row": "Aventura",
    "title": "Bob The Robber",
    "addedAt": "2026-11-26",
    "image": gameImages["Bob The Robber"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bob-the-robber.html"
  },
  {
    "id": 64,
    "row": "Carreras",
    "title": "Bouncy Motors",
    "addedAt": "2026-11-26",
    "image": gameImages["Bouncy Motors"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bouncy-motors.html"
  },
  {
    "id": 65,
    "row": "Arcade",
    "title": "Bow Masters",
    "addedAt": "2026-11-26",
    "image": gameImages["Bow Masters"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bow-masters.html"
  },
  {
    "id": 66,
    "row": "Arcade",
    "title": "Boxel Rebound",
    "addedAt": "2026-11-26",
    "image": gameImages["Boxel Rebound"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/boxel-rebound.html"
  },
  {
    "id": 67,
    "row": "Deportes",
    "title": "Boxing Random",
    "addedAt": "2026-11-26",
    "image": gameImages["Boxing Random"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/boxing-random.htm"
  },
  {
    "id": 68,
    "row": "Aventura",
    "title": "Breaking The Bank",
    "addedAt": "2026-11-26",
    "image": gameImages["Breaking The Bank"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/breaking-the-bank.html"
  },
  {
    "id": 69,
    "row": "Puzles",
    "title": "Bubble Shooter",
    "addedAt": "2026-11-26",
    "image": gameImages["Bubble Shooter"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/bubble-shooter.html"
  },
  {
    "id": 70,
    "row": "Arcade",
    "title": "Burrito Bison Launcha Libre",
    "addedAt": "2026-11-26",
    "image": gameImages["Burrito Bison Launcha Libre"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/burrito-bison-launcha-libre.html"
  },
  {
    "id": 71,
    "row": "Puzles",
    "title": "Candy Crush",
    "addedAt": "2026-11-26",
    "image": gameImages["Candy Crush"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/candy-crush.html"
  },
  {
    "id": 72,
    "row": "Idle y Clicker",
    "title": "Capybara Clicker",
    "addedAt": "2026-11-26",
    "image": gameImages["Capybara Clicker"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/capybara-clicker.html"
  },
  {
    "id": 73,
    "row": "Carreras",
    "title": "Car Drawing",
    "addedAt": "2026-11-26",
    "image": gameImages["Car Drawing"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/car-drawing.html"
  },
  {
    "id": 74,
    "row": "Carreras",
    "title": "Car King Arena",
    "addedAt": "2026-11-26",
    "image": gameImages["Car King Arena"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/car-king-arena.html"
  },
  {
    "id": 75,
    "row": "Arcade",
    "title": "Chaos Faction 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Chaos Faction 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/chaos-faction-2.html"
  },
  {
    "id": 76,
    "row": "Puzles",
    "title": "Chess",
    "addedAt": "2026-11-26",
    "image": gameImages["Chess"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/chess.html"
  },
  {
    "id": 77,
    "row": "Arcade",
    "title": "Choppy Orc",
    "addedAt": "2026-11-26",
    "image": gameImages["Choppy Orc"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/choppy-orc.html"
  },
  {
    "id": 78,
    "row": "Arcade",
    "title": "Circloo 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Circloo 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/circloO-2.html"
  },
  {
    "id": 79,
    "row": "Arcade",
    "title": "Circloo",
    "addedAt": "2026-11-26",
    "image": gameImages["Circloo"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/circloO.html"
  },
  {
    "id": 80,
    "row": "Estrategia",
    "title": "Clash Of Vikings",
    "addedAt": "2026-11-26",
    "image": gameImages["Clash Of Vikings"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/clash-of-vikings.html"
  },
  {
    "id": 81,
    "row": "Multijugador .IO",
    "title": "Cleanup IO",
    "addedAt": "2026-11-26",
    "image": gameImages["Cleanup IO"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/cleanup-io.html"
  },
  {
    "id": 82,
    "row": "Arcade",
    "title": "Cluster Rush",
    "addedAt": "2026-11-26",
    "image": gameImages["Cluster Rush"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/cluster-rush.html"
  },
  {
    "id": 83,
    "row": "Idle y Clicker",
    "title": "Cookie Clicker",
    "addedAt": "2026-11-26",
    "image": gameImages["Cookie Clicker"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/cookie-clicker.htm"
  },
  {
    "id": 84,
    "row": "Arcade",
    "title": "Coreball",
    "addedAt": "2026-11-26",
    "image": gameImages["Coreball"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/coreball.html"
  },
  {
    "id": 85,
    "row": "Carreras",
    "title": "Crazy Cars",
    "addedAt": "2026-11-26",
    "image": gameImages["Crazy Cars"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/crazy-cars.html"
  },
  {
    "id": 86,
    "row": "Arcade",
    "title": "Crazy Cattle 3D",
    "addedAt": "2026-11-26",
    "image": gameImages["Crazy Cattle 3D"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/crazy-cattle-3D.html"
  },
  {
    "id": 87,
    "row": "Arcade",
    "title": "Crazy Crash Landing",
    "addedAt": "2026-11-26",
    "image": gameImages["Crazy Crash Landing"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/crazy-crash-landing.html"
  },
  {
    "id": 88,
    "row": "Carreras",
    "title": "Crazy Motorcycle",
    "addedAt": "2026-11-26",
    "image": gameImages["Crazy Motorcycle"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/crazy-motorcycle.html"
  },
  {
    "id": 89,
    "row": "Carreras",
    "title": "Crossy Road",
    "addedAt": "2026-11-26",
    "image": gameImages["Crossy Road"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/crossy-road.htm"
  },
  {
    "id": 90,
    "row": "Puzles",
    "title": "Cut The Rope 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Cut The Rope 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/cut-the-rope-2.html"
  },
  {
    "id": 91,
    "row": "Puzles",
    "title": "Cut The Rope Holiday Gift",
    "addedAt": "2026-11-26",
    "image": gameImages["Cut The Rope Holiday Gift"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/cut-the-rope-holiday-gift.html"
  },
  {
    "id": 92,
    "row": "Puzles",
    "title": "Cut The Rope Time Travel",
    "addedAt": "2026-11-26",
    "image": gameImages["Cut The Rope Time Travel"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/cut-the-rope-time-travel.html"
  },
  {
    "id": 93,
    "row": "Puzles",
    "title": "Cut The Rope",
    "addedAt": "2026-11-26",
    "image": gameImages["Cut The Rope"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/cut-the-rope.html"
  },
  {
    "id": 94,
    "row": "Plataformas",
    "title": "Dadish 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Dadish 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/dadish-2.html"
  },
  {
    "id": 95,
    "row": "Plataformas",
    "title": "Dadish 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Dadish 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/dadish-3.html"
  },
  {
    "id": 96,
    "row": "Plataformas",
    "title": "Dadish",
    "addedAt": "2026-11-26",
    "image": gameImages["Dadish"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/dadish.html"
  },
  {
    "id": 97,
    "row": "Arcade",
    "title": "Deadly Descent",
    "addedAt": "2026-11-26",
    "image": gameImages["Deadly Descent"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/deadly-descent.html"
  },
  {
    "id": 98,
    "row": "Arcade",
    "title": "Death Chase",
    "addedAt": "2026-11-26",
    "image": gameImages["Death Chase"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/death-chase.html"
  },
  {
    "id": 99,
    "row": "Plataformas",
    "title": "Death Run 3D",
    "addedAt": "2026-11-26",
    "image": gameImages["Death Run 3D"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/death-run-3D.html"
  },
  {
    "id": 100,
    "row": "Carreras",
    "title": "Demolition Derby Crash Racing",
    "addedAt": "2026-11-26",
    "image": gameImages["Demolition Derby Crash Racing"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/demolition-derby-crash-racing.html"
  },
  {
    "id": 101,
    "row": "Arcade",
    "title": "Doodle Jump",
    "addedAt": "2026-11-26",
    "image": gameImages["Doodle Jump"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/doodle-jump.html"
  },
  {
    "id": 102,
    "row": "Casual",
    "title": "Draw Climber",
    "addedAt": "2026-11-26",
    "image": gameImages["Draw Climber"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/draw-climber.html"
  },
  {
    "id": 103,
    "row": "Arcade",
    "title": "Dreadhead Parkour",
    "addedAt": "2026-11-26",
    "image": gameImages["Dreadhead Parkour"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/dreadhead-parkour.htm"
  },
  {
    "id": 104,
    "row": "Carreras",
    "title": "Drift Boss",
    "addedAt": "2026-11-26",
    "image": gameImages["Drift Boss"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/drift-boss.htm"
  },
  {
    "id": 105,
    "row": "Carreras",
    "title": "Drift Hunters Pro",
    "addedAt": "2026-11-26",
    "image": gameImages["Drift Hunters Pro"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/drift-hunters-pro.html"
  },
  {
    "id": 106,
    "row": "Carreras",
    "title": "Drive Mad",
    "addedAt": "2026-11-26",
    "image": gameImages["Drive Mad"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/drive-mad.htm"
  },
  {
    "id": 107,
    "row": "Simulación",
    "title": "Duck Life 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Duck Life 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/duck-life-2.html"
  },
  {
    "id": 108,
    "row": "Simulación",
    "title": "Duck Life 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Duck Life 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/duck-life-3.html"
  },
  {
    "id": 109,
    "row": "Simulación",
    "title": "Duck Life 4",
    "addedAt": "2026-11-26",
    "image": gameImages["Duck Life 4"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/duck-life-4.html"
  },
  {
    "id": 110,
    "row": "Simulación",
    "title": "Duck Life 5",
    "addedAt": "2026-11-26",
    "image": gameImages["Duck Life 5"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/duck-life-5.html"
  },
  {
    "id": 111,
    "row": "Simulación",
    "title": "Duck Life",
    "addedAt": "2026-11-26",
    "image": gameImages["Duck Life"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/duck-life.html"
  },
  {
    "id": 112,
    "row": "Multijugador .IO",
    "title": "Ducklings IO",
    "addedAt": "2026-11-26",
    "image": gameImages["Ducklings IO"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/ducklings-io.html"
  },
  {
    "id": 113,
    "row": "Arcade",
    "title": "Eagle Ride",
    "addedAt": "2026-11-26",
    "image": gameImages["Eagle Ride"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/eagle-ride.html"
  },
  {
    "id": 114,
    "row": "Arcade",
    "title": "Earn To Die 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Earn To Die 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/earn-to-die-2.html"
  },
  {
    "id": 115,
    "row": "Arcade",
    "title": "Earn To Die",
    "addedAt": "2026-11-26",
    "image": gameImages["Earn To Die"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/earn-to-die.html"
  },
  {
    "id": 116,
    "row": "Carreras",
    "title": "Eggy Car",
    "addedAt": "2026-11-26",
    "image": gameImages["Eggy Car"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/eggy-car.html"
  },
  {
    "id": 117,
    "row": "Casual",
    "title": "Elastic Face",
    "addedAt": "2026-11-26",
    "image": gameImages["Elastic Face"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/elastic-face.htm"
  },
  {
    "id": 118,
    "row": "Carreras",
    "title": "Escape Road 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Escape Road 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/escape-road-2.html"
  },
  {
    "id": 119,
    "row": "Carreras",
    "title": "Escape Road 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Escape Road 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/escape-road-3.html"
  },
  {
    "id": 120,
    "row": "Carreras",
    "title": "Escape Road",
    "addedAt": "2026-11-26",
    "image": gameImages["Escape Road"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/escape-road.html"
  },
  {
    "id": 121,
    "row": "Aventura",
    "title": "Escaping The Prison",
    "addedAt": "2026-11-26",
    "image": gameImages["Escaping The Prison"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/escaping-the-prison.html"
  },
  {
    "id": 122,
    "row": "Plataformas",
    "title": "Eugenes Life",
    "addedAt": "2026-11-26",
    "image": gameImages["Eugenes Life"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/eugenes-life.html"
  },
  {
    "id": 123,
    "row": "Terror",
    "title": "Evil Glitch",
    "addedAt": "2026-11-26",
    "image": gameImages["Evil Glitch"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/evil-glitch.html"
  },
  {
    "id": 124,
    "row": "Plataformas",
    "title": "Fancy Pants Adventure 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Fancy Pants Adventure 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/fancy-pants-adventure-2.html"
  },
  {
    "id": 125,
    "row": "Plataformas",
    "title": "Fancy Pants Adventure",
    "addedAt": "2026-11-26",
    "image": gameImages["Fancy Pants Adventure"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/fancy-pants-adventure.html"
  },
  {
    "id": 126,
    "row": "Arcade",
    "title": "Fireblob",
    "addedAt": "2026-11-26",
    "image": gameImages["Fireblob"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/fireblob.html"
  },
  {
    "id": 127,
    "row": "Plataformas",
    "title": "Fireboy And Watergirl 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Fireboy And Watergirl 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/fireboy-and-watergirl-2.html"
  },
  {
    "id": 128,
    "row": "Plataformas",
    "title": "Fireboy And Watergirl 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Fireboy And Watergirl 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/fireboy-and-watergirl-3.html"
  },
  {
    "id": 129,
    "row": "Plataformas",
    "title": "Fireboy And Watergirl 4",
    "addedAt": "2026-11-26",
    "image": gameImages["Fireboy And Watergirl 4"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/fireboy-and-watergirl-4.html"
  },
  {
    "id": 130,
    "row": "Plataformas",
    "title": "Fireboy And Watergirl",
    "addedAt": "2026-11-26",
    "image": gameImages["Fireboy And Watergirl"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/fireboy-and-watergirl.html"
  },
  {
    "id": 131,
    "row": "Arcade",
    "title": "Flappy Bird",
    "addedAt": "2026-11-26",
    "image": gameImages["Flappy Bird"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/flappy-bird.html"
  },
  {
    "id": 132,
    "row": "Aventura",
    "title": "Fleeing The Complex",
    "addedAt": "2026-11-26",
    "image": gameImages["Fleeing The Complex"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/fleeing-the-complex.html"
  },
  {
    "id": 133,
    "row": "Arcade",
    "title": "Flood Runner 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Flood Runner 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/flood-runner-2.html"
  },
  {
    "id": 134,
    "row": "Arcade",
    "title": "Flood Runner 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Flood Runner 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/flood-runner-3.html"
  },
  {
    "id": 135,
    "row": "Arcade",
    "title": "Flood Runner 4",
    "addedAt": "2026-11-26",
    "image": gameImages["Flood Runner 4"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/flood-runner-4.html"
  },
  {
    "id": 136,
    "row": "Terror",
    "title": "FNAF 2",
    "addedAt": "2026-11-26",
    "image": gameImages["FNAF 2"] || "",
    "rawUrl": "https://gist.githubusercontent.com/EML0073/d3f9b92a5cc5a4e62f875c759f8cef44/raw/4e46390d5e7c068ea49367c0f6643520433ebfe2/fnaf2.html"
  },
  {
    "id": 137,
    "row": "Terror",
    "title": "FNAF 3",
    "addedAt": "2026-11-26",
    "image": gameImages["FNAF 3"] || "",
    "rawUrl": "https://gist.githubusercontent.com/EML0073/87f6a64639b0fe7d09881b89d980288c/raw/2365f074983d4ea1b8b9128651725b8c7a6485ef/fnaf3.html"
  },
  {
    "id": 138,
    "row": "Terror",
    "title": "FNAF 4",
    "addedAt": "2026-11-26",
    "image": gameImages["FNAF 4"] || "",
    "rawUrl": "https://gist.githubusercontent.com/EML0073/896c70493f3a2a432671c242cc1ea46b/raw/53bd98bd7af007e5a099f2ae9abfc82b42f6b8e4/fnaf4.html"
  },
  {
    "id": 139,
    "row": "Terror",
    "title": "FNAF Sister Location",
    "addedAt": "2026-11-26",
    "image": gameImages["FNAF Sister Location"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/fnaf-sister-location.html"
  },
  {
    "id": 140,
    "row": "Terror",
    "title": "FNAF",
    "addedAt": "2026-11-26",
    "image": gameImages["FNAF"] || "",
    "rawUrl": "https://gist.githubusercontent.com/EML0073/9f1f31386ebb63ff7030922788531c74/raw/5ff7cc2bfc81a7b636c471d50e4457e1fa1536c7/FNAF.html"
  },
  {
    "id": 141,
    "row": "Deportes",
    "title": "Football Bros",
    "addedAt": "2026-11-26",
    "image": gameImages["Football Bros"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/football-bros.html"
  },
  {
    "id": 142,
    "row": "Deportes",
    "title": "Football Legends",
    "addedAt": "2026-11-26",
    "image": gameImages["Football Legends"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/football-legends.html"
  },
  {
    "id": 143,
    "row": "Carreras",
    "title": "Free Rider 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Free Rider 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/free-rider-3.html"
  },
  {
    "id": 144,
    "row": "Arcade",
    "title": "Friday Night Funkin",
    "addedAt": "2026-11-26",
    "image": gameImages["Friday Night Funkin"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/friday-night-funkin.html"
  },
  {
    "id": 145,
    "row": "Arcade",
    "title": "Fruit Ninja",
    "addedAt": "2026-11-26",
    "image": gameImages["Fruit Ninja"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/fruit-ninja.html"
  },
  {
    "id": 146,
    "row": "Acción",
    "title": "Funny Battle 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Funny Battle 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/funny-battle-2.html"
  },
  {
    "id": 147,
    "row": "Acción",
    "title": "Funny Battle",
    "addedAt": "2026-11-26",
    "image": gameImages["Funny Battle"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/funny-battle.html"
  },
  {
    "id": 148,
    "row": "Carreras",
    "title": "Funny Mad Racing",
    "addedAt": "2026-11-26",
    "image": gameImages["Funny Mad Racing"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/funny-mad-racing.html"
  },
  {
    "id": 149,
    "row": "Acción",
    "title": "Funny Shooter 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Funny Shooter 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/funny-shooter-2.html"
  },
  {
    "id": 150,
    "row": "Plataformas",
    "title": "Geometry Dash Lite",
    "addedAt": "2026-11-26",
    "image": gameImages["Geometry Dash Lite"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/geometry-dash-lite.html"
  },
  {
    "id": 151,
    "row": "Plataformas",
    "title": "Geometry Dash",
    "addedAt": "2026-11-26",
    "image": gameImages["Geometry Dash"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/geometry-dash.html"
  },
  {
    "id": 152,
    "row": "Arcade",
    "title": "Geometry Vibes",
    "addedAt": "2026-11-26",
    "image": gameImages["Geometry Vibes"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/geometry-vibes.html"
  },
  {
    "id": 153,
    "row": "Arcade",
    "title": "Get On Top",
    "addedAt": "2026-11-26",
    "image": gameImages["Get On Top"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/get-on-top.html"
  },
  {
    "id": 154,
    "row": "Acción",
    "title": "Getaway Shootout",
    "addedAt": "2026-11-26",
    "image": gameImages["Getaway Shootout"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/getaway-shootout.html"
  },
  {
    "id": 155,
    "row": "Arcade",
    "title": "Gladi Hoppers",
    "addedAt": "2026-11-26",
    "image": gameImages["Gladi Hoppers"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/gladi-hoppers.html"
  },
  {
    "id": 156,
    "row": "Deportes",
    "title": "Google Baseball",
    "addedAt": "2026-11-26",
    "image": gameImages["Google Baseball"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/google-baseball.html"
  },
  {
    "id": 157,
    "row": "Arcade",
    "title": "Google Dino",
    "addedAt": "2026-11-26",
    "image": gameImages["Google Dino"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/google-dino.html"
  },
  {
    "id": 158,
    "row": "Terror",
    "title": "Granny 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Granny 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/granny-2.html"
  },
  {
    "id": 159,
    "row": "Terror",
    "title": "Granny",
    "addedAt": "2026-11-26",
    "image": gameImages["Granny"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/granny.html"
  },
  {
    "id": 160,
    "row": "Casual",
    "title": "Guess Their Answer",
    "addedAt": "2026-11-26",
    "image": gameImages["Guess Their Answer"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/guess-their-answer.html"
  },
  {
    "id": 161,
    "row": "Arcade",
    "title": "Hanger 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Hanger 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/hanger-2.html"
  },
  {
    "id": 162,
    "row": "Arcade",
    "title": "Happy Wheels",
    "addedAt": "2026-11-26",
    "image": gameImages["Happy Wheels"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/happy-wheels.html"
  },
  {
    "id": 163,
    "row": "Arcade",
    "title": "Helix Jump",
    "addedAt": "2026-11-26",
    "image": gameImages["Helix Jump"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/helix-jump.html"
  },
  {
    "id": 164,
    "row": "Carreras",
    "title": "Highway Traffic",
    "addedAt": "2026-11-26",
    "image": gameImages["Highway Traffic"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/highway-traffic.html"
  },
  {
    "id": 165,
    "row": "Carreras",
    "title": "Hill Climb Racing Lite",
    "addedAt": "2026-11-26",
    "image": gameImages["Hill Climb Racing Lite"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/hill-climb-racing-lite.html"
  },
  {
    "id": 166,
    "row": "Multijugador .IO",
    "title": "Hole IO",
    "addedAt": "2026-11-26",
    "image": gameImages["Hole IO"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/hole-io.html"
  },
  {
    "id": 167,
    "row": "Arcade",
    "title": "House Of Hazards",
    "addedAt": "2026-11-26",
    "image": gameImages["House Of Hazards"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/house-of-hazards.html"
  },
  {
    "id": 168,
    "row": "Carreras",
    "title": "Hover Racer Drive",
    "addedAt": "2026-11-26",
    "image": gameImages["Hover Racer Drive"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/hover-racer-drive.html"
  },
  {
    "id": 169,
    "row": "Arcade",
    "title": "Ice Dodo",
    "addedAt": "2026-11-26",
    "image": gameImages["Ice Dodo"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/ice-dodo.html"
  },
  {
    "id": 170,
    "row": "Idle y Clicker",
    "title": "Idle Breakout",
    "addedAt": "2026-11-26",
    "image": gameImages["Idle Breakout"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/idle-breakout.html"
  },
  {
    "id": 171,
    "row": "Idle y Clicker",
    "title": "Idle Dice",
    "addedAt": "2026-11-26",
    "image": gameImages["Idle Dice"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/idle-dice.html"
  },
  {
    "id": 172,
    "row": "Aventura",
    "title": "Infiltrating The Airship",
    "addedAt": "2026-11-26",
    "image": gameImages["Infiltrating The Airship"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/infiltrating-the-airship.html"
  },
  {
    "id": 173,
    "row": "Acción",
    "title": "Iron Snout",
    "addedAt": "2026-11-26",
    "image": gameImages["Iron Snout"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/iron-snout.html"
  },
  {
    "id": 174,
    "row": "Aventura",
    "title": "Jacksmith",
    "addedAt": "2026-11-26",
    "image": gameImages["Jacksmith"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/jacksmith.html"
  },
  {
    "id": 175,
    "row": "Arcade",
    "title": "Jetpack Joyride",
    "addedAt": "2026-11-26",
    "image": gameImages["Jetpack Joyride"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/cljetpackjoyride.html"
  },
  {
    "id": 176,
    "row": "Arcade",
    "title": "Johnny Trigger",
    "addedAt": "2026-11-26",
    "image": gameImages["Johnny Trigger"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/johnny-trigger.html"
  },
  {
    "id": 177,
    "row": "Plataformas",
    "title": "Jumping Shell",
    "addedAt": "2026-11-26",
    "image": gameImages["Jumping Shell"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/jumping-shell.html"
  },
  {
    "id": 178,
    "row": "Deportes",
    "title": "Karate Bros",
    "addedAt": "2026-11-26",
    "image": gameImages["Karate Bros"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/karate-bros.html"
  },
  {
    "id": 179,
    "row": "Carreras",
    "title": "Kart Bros",
    "addedAt": "2026-11-26",
    "image": gameImages["Kart Bros"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/kart-bros.html"
  },
  {
    "id": 180,
    "row": "Simulación",
    "title": "Kittytoy",
    "addedAt": "2026-11-26",
    "image": gameImages["Kittytoy"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/kittytoy.html"
  },
  {
    "id": 181,
    "row": "Aventura",
    "title": "Learn To Fly 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Learn To Fly 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/learn-to-fly-2.html"
  },
  {
    "id": 182,
    "row": "Aventura",
    "title": "Learn To Fly 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Learn To Fly 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/learn-to-fly-3.html"
  },
  {
    "id": 183,
    "row": "Idle y Clicker",
    "title": "Learn To Fly Idle",
    "addedAt": "2026-11-26",
    "image": gameImages["Learn To Fly Idle"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/learn-to-fly-idle.html"
  },
  {
    "id": 184,
    "row": "Aventura",
    "title": "Learn To Fly",
    "addedAt": "2026-11-26",
    "image": gameImages["Learn To Fly"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/learn-to-fly.html"
  },
  {
    "id": 185,
    "row": "Plataformas",
    "title": "Level Devil",
    "addedAt": "2026-11-26",
    "image": gameImages["Level Devil"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/level-devil.html"
  },
  {
    "id": 186,
    "row": "Puzles",
    "title": "Little Alchemy 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Little Alchemy 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/little-alchemy-2.html"
  },
  {
    "id": 187,
    "row": "Carreras",
    "title": "Madalin Stunt Cars 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Madalin Stunt Cars 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/madalin-stunt-cars-2.html"
  },
  {
    "id": 188,
    "row": "Acción",
    "title": "Madness Project Nexus",
    "addedAt": "2026-11-26",
    "image": gameImages["Madness Project Nexus"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/madness-project-nexus.html"
  },
  {
    "id": 189,
    "row": "Simulación",
    "title": "Melon Playground",
    "addedAt": "2026-11-26",
    "image": gameImages["Melon Playground"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/melon-playground.html"
  },
  {
    "id": 190,
    "row": "Carreras",
    "title": "Merge Round Racers",
    "addedAt": "2026-11-26",
    "image": gameImages["Merge Round Racers"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/merge-round-racers.html"
  },
  {
    "id": 191,
    "row": "Puzles",
    "title": "Minesweeper",
    "addedAt": "2026-11-26",
    "image": gameImages["Minesweeper"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/minesweeper.html"
  },
  {
    "id": 192,
    "row": "Simulación",
    "title": "Monkey Mart",
    "addedAt": "2026-11-26",
    "image": gameImages["Monkey Mart"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/monkey-mart.htm"
  },
  {
    "id": 193,
    "row": "Arcade",
    "title": "Monster Tracks",
    "addedAt": "2026-11-26",
    "image": gameImages["Monster Tracks"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/monster-tracks.html"
  },
  {
    "id": 194,
    "row": "Simulación",
    "title": "Motherload",
    "addedAt": "2026-11-26",
    "image": gameImages["Motherload"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/motherload.html"
  },
  {
    "id": 195,
    "row": "Carreras",
    "title": "Moto X3m 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Moto X3m 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/moto-x3m-2.html"
  },
  {
    "id": 196,
    "row": "Carreras",
    "title": "Moto X3m 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Moto X3m 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/moto-x3m-3.html"
  },
  {
    "id": 197,
    "row": "Carreras",
    "title": "Moto X3m Pool Party",
    "addedAt": "2026-11-26",
    "image": gameImages["Moto X3m Pool Party"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/moto-x3m-pool-party.html"
  },
  {
    "id": 198,
    "row": "Carreras",
    "title": "Moto X3m Spooky Land",
    "addedAt": "2026-11-26",
    "image": gameImages["Moto X3m Spooky Land"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/moto-x3m-spooky-land.html"
  },
  {
    "id": 199,
    "row": "Carreras",
    "title": "Moto X3m Winter",
    "addedAt": "2026-11-26",
    "image": gameImages["Moto X3m Winter"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/moto-x3m-winter.html"
  },
  {
    "id": 200,
    "row": "Carreras",
    "title": "Moto X3m",
    "addedAt": "2026-11-26",
    "image": gameImages["Moto X3m"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/moto-x3m.htm"
  },
  {
    "id": 201,
    "row": "Terror",
    "title": "Murder",
    "addedAt": "2026-11-26",
    "image": gameImages["Murder"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/murder.html"
  },
  {
    "id": 202,
    "row": "Arcade",
    "title": "Noob Miner",
    "addedAt": "2026-11-26",
    "image": gameImages["Noob Miner"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/noob-miner.html"
  },
  {
    "id": 203,
    "row": "Arcade",
    "title": "Openttd",
    "addedAt": "2026-11-26",
    "image": gameImages["Openttd"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/openTTD.html"
  },
  {
    "id": 204,
    "row": "Casual",
    "title": "Opposite Day",
    "addedAt": "2026-11-26",
    "image": gameImages["Opposite Day"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/opposite-day.html"
  },
  {
    "id": 205,
    "row": "Plataformas",
    "title": "Ovo 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Ovo 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/ovo-2.html"
  },
  {
    "id": 206,
    "row": "Plataformas",
    "title": "Ovo 3 Dimensions",
    "addedAt": "2026-11-26",
    "image": gameImages["Ovo 3 Dimensions"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/ovo-3-dimensions.html"
  },
  {
    "id": 207,
    "row": "Plataformas",
    "title": "Ovo",
    "addedAt": "2026-11-26",
    "image": gameImages["Ovo"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/ovo.html"
  },
  {
    "id": 208,
    "row": "Arcade",
    "title": "Pac Man",
    "addedAt": "2026-11-26",
    "image": gameImages["Pac Man"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/pac-man.html"
  },
  {
    "id": 209,
    "row": "Simulación",
    "title": "Papas Bakeria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Bakeria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-bakeria.html"
  },
  {
    "id": 210,
    "row": "Simulación",
    "title": "Papas Burgeria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Burgeria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-burgeria.html"
  },
  {
    "id": 211,
    "row": "Simulación",
    "title": "Papas Cheeseria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Cheeseria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-cheeseria.html"
  },
  {
    "id": 212,
    "row": "Simulación",
    "title": "Papas Cupcakeria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Cupcakeria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-cupcakeria.html"
  },
  {
    "id": 213,
    "row": "Simulación",
    "title": "Papas Donuteria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Donuteria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-donuteria.html"
  },
  {
    "id": 214,
    "row": "Simulación",
    "title": "Papas Freezeria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Freezeria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-freezeria.html"
  },
  {
    "id": 215,
    "row": "Simulación",
    "title": "Papas Hot Doggeria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Hot Doggeria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-hot-doggeria.html"
  },
  {
    "id": 216,
    "row": "Simulación",
    "title": "Papas Pancakeria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Pancakeria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-pancakeria.html"
  },
  {
    "id": 217,
    "row": "Simulación",
    "title": "Papas Pastaria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Pastaria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-pastaria.html"
  },
  {
    "id": 218,
    "row": "Simulación",
    "title": "Papas Pizzeria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Pizzeria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-pizzeria.html"
  },
  {
    "id": 219,
    "row": "Simulación",
    "title": "Papas Scooperia",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Scooperia"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-scooperia.html"
  },
  {
    "id": 220,
    "row": "Simulación",
    "title": "Papas Sushiria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Sushiria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-sushiria.html"
  },
  {
    "id": 221,
    "row": "Simulación",
    "title": "Papas Taco Mia",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Taco Mia"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-taco-mia.html"
  },
  {
    "id": 222,
    "row": "Simulación",
    "title": "Papas Wingeria",
    "addedAt": "2026-11-26",
    "image": gameImages["Papas Wingeria"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/papas-wingeria.html"
  },
  {
    "id": 223,
    "row": "Multijugador .IO",
    "title": "Paper IO 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Paper IO 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/paper-io-2.htm"
  },
  {
    "id": 224,
    "row": "Carreras",
    "title": "Parking Fury 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Parking Fury 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/parking-fury-2.html"
  },
  {
    "id": 225,
    "row": "Carreras",
    "title": "Parking Fury 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Parking Fury 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/parking-fury-3.html"
  },
  {
    "id": 226,
    "row": "Carreras",
    "title": "Parking Fury",
    "addedAt": "2026-11-26",
    "image": gameImages["Parking Fury"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/parking-fury.html"
  },
  {
    "id": 227,
    "row": "Terror",
    "title": "Picos School",
    "addedAt": "2026-11-26",
    "image": gameImages["Picos School"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/picos-school.html"
  },
  {
    "id": 228,
    "row": "Deportes",
    "title": "Ping Pong Chaos",
    "addedAt": "2026-11-26",
    "image": gameImages["Ping Pong Chaos"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/ping-pong-chaos.html"
  },
  {
    "id": 229,
    "row": "Plataformas",
    "title": "Pixel Speedrun",
    "addedAt": "2026-11-26",
    "image": gameImages["Pixel Speedrun"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/pixel-speedrun.html"
  },
  {
    "id": 230,
    "row": "Estrategia",
    "title": "Plants Vs Zombies",
    "addedAt": "2026-11-26",
    "image": gameImages["Plants Vs Zombies"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/plants-vs-zombies.html"
  },
  {
    "id": 231,
    "row": "Arcade",
    "title": "Plonky",
    "addedAt": "2026-11-26",
    "image": gameImages["Plonky"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/plonky.html"
  },
  {
    "id": 232,
    "row": "Arcade",
    "title": "Polytrack",
    "addedAt": "2026-11-26",
    "image": gameImages["Polytrack"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/polytrack.html"
  },
  {
    "id": 233,
    "row": "Plataformas",
    "title": "Poor Bunny",
    "addedAt": "2026-11-26",
    "image": gameImages["Poor Bunny"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/poor-bunny.html"
  },
  {
    "id": 234,
    "row": "Puzles",
    "title": "Pou",
    "addedAt": "2026-11-26",
    "image": gameImages["Pou"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/pou.html"
  },
  {
    "id": 235,
    "row": "Acción",
    "title": "Ragdoll Archers",
    "addedAt": "2026-11-26",
    "image": gameImages["Ragdoll Archers"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/ragdoll-archers.htm"
  },
  {
    "id": 236,
    "row": "Acción",
    "title": "Ragdoll Hit",
    "addedAt": "2026-11-26",
    "image": gameImages["Ragdoll Hit"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/ragdoll-hit.html"
  },
  {
    "id": 237,
    "row": "Deportes",
    "title": "Ragdoll Soccer",
    "addedAt": "2026-11-26",
    "image": gameImages["Ragdoll Soccer"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/ragdoll-soccer.html"
  },
  {
    "id": 238,
    "row": "Plataformas",
    "title": "Red Ball 4 Vol 1",
    "addedAt": "2026-11-26",
    "image": gameImages["Red Ball 4 Vol 1"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/red-ball-4-vol-1.html"
  },
  {
    "id": 239,
    "row": "Plataformas",
    "title": "Red Ball 4 Vol 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Red Ball 4 Vol 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/red-ball-4-vol-2.html"
  },
  {
    "id": 240,
    "row": "Plataformas",
    "title": "Red Ball 4 Vol 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Red Ball 4 Vol 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/red-ball-4-vol-3.html"
  },
  {
    "id": 241,
    "row": "Deportes",
    "title": "Retro Bowl College",
    "addedAt": "2026-11-26",
    "image": gameImages["Retro Bowl College"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/retro-bowl-college.html"
  },
  {
    "id": 242,
    "row": "Deportes",
    "title": "Retro Bowl",
    "addedAt": "2026-11-26",
    "image": gameImages["Retro Bowl"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/retro-bowl.html"
  },
  {
    "id": 243,
    "row": "Carreras",
    "title": "Retro Highway",
    "addedAt": "2026-11-26",
    "image": gameImages["Retro Highway"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/retro-highway.html"
  },
  {
    "id": 244,
    "row": "Deportes",
    "title": "Retro Ping Pong",
    "addedAt": "2026-11-26",
    "image": gameImages["Retro Ping Pong"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/retro-ping-pong.html"
  },
  {
    "id": 245,
    "row": "Puzles",
    "title": "Riddle School 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Riddle School 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/riddle-school-2.html"
  },
  {
    "id": 246,
    "row": "Puzles",
    "title": "Riddle School 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Riddle School 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/riddle-school-3.html"
  },
  {
    "id": 247,
    "row": "Puzles",
    "title": "Riddle School 4",
    "addedAt": "2026-11-26",
    "image": gameImages["Riddle School 4"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/riddle-school-4.html"
  },
  {
    "id": 248,
    "row": "Puzles",
    "title": "Riddle School 5",
    "addedAt": "2026-11-26",
    "image": gameImages["Riddle School 5"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/riddle-school-5.html"
  },
  {
    "id": 249,
    "row": "Puzles",
    "title": "Riddle School",
    "addedAt": "2026-11-26",
    "image": gameImages["Riddle School"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/riddle-school.html"
  },
  {
    "id": 250,
    "row": "Puzles",
    "title": "Riddle Transfer 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Riddle Transfer 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/riddle-transfer-2.html"
  },
  {
    "id": 251,
    "row": "Puzles",
    "title": "Riddle Transfer",
    "addedAt": "2026-11-26",
    "image": gameImages["Riddle Transfer"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/riddle-transfer.html"
  },
  {
    "id": 252,
    "row": "Deportes",
    "title": "Rocket Soccer Derby",
    "addedAt": "2026-11-26",
    "image": gameImages["Rocket Soccer Derby"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/rocket-soccer-derby.html"
  },
  {
    "id": 253,
    "row": "Arcade",
    "title": "Rooftop Run",
    "addedAt": "2026-11-26",
    "image": gameImages["Rooftop Run"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/rooftop-run.html"
  },
  {
    "id": 254,
    "row": "Acción",
    "title": "Rooftop Snipers 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Rooftop Snipers 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/rooftop-snipers-2.html"
  },
  {
    "id": 255,
    "row": "Acción",
    "title": "Rooftop Snipers",
    "addedAt": "2026-11-26",
    "image": gameImages["Rooftop Snipers"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/rooftop-snipers.htm"
  },
  {
    "id": 256,
    "row": "Plataformas",
    "title": "Run 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Run 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/run-2.html"
  },
  {
    "id": 257,
    "row": "Plataformas",
    "title": "Run 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Run 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/run-3.html"
  },
  {
    "id": 258,
    "row": "Arcade",
    "title": "Run",
    "addedAt": "2026-11-26",
    "image": gameImages["Run"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/run.html"
  },
  {
    "id": 259,
    "row": "Simulación",
    "title": "Sand Game",
    "addedAt": "2026-11-26",
    "image": gameImages["Sand Game"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/sand-game.html"
  },
  {
    "id": 260,
    "row": "Simulación",
    "title": "Sandbox City",
    "addedAt": "2026-11-26",
    "image": gameImages["Sandbox City"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/sandbox-city.html"
  },
  {
    "id": 261,
    "row": "Arcade",
    "title": "Short Life",
    "addedAt": "2026-11-26",
    "image": gameImages["Short Life"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/short-life.html"
  },
  {
    "id": 262,
    "row": "Casual",
    "title": "Six Cats Under",
    "addedAt": "2026-11-26",
    "image": gameImages["Six Cats Under"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/six-cats-under.html"
  },
  {
    "id": 263,
    "row": "Plataformas",
    "title": "Slope 2 Player",
    "addedAt": "2026-11-26",
    "image": gameImages["Slope 2 Player"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/slope-2-player.html"
  },
  {
    "id": 264,
    "row": "Plataformas",
    "title": "Slope 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Slope 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/slope-3.html"
  },
  {
    "id": 265,
    "row": "Plataformas",
    "title": "Slope",
    "addedAt": "2026-11-26",
    "image": gameImages["Slope"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/slope.html"
  },
  {
    "id": 266,
    "row": "Carreras",
    "title": "Slow Roads",
    "addedAt": "2026-11-26",
    "image": gameImages["Slow Roads"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/slow-roads.html"
  },
  {
    "id": 267,
    "row": "Casual",
    "title": "Sm 63",
    "addedAt": "2026-11-26",
    "image": gameImages["Sm 63"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/sm-63.html"
  },
  {
    "id": 268,
    "row": "Casual",
    "title": "Sm 64",
    "addedAt": "2026-11-26",
    "image": gameImages["Sm 64"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/sm-64.html"
  },
  {
    "id": 269,
    "row": "Aventura",
    "title": "Snail Bob 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Snail Bob 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/snail-bob-2.html"
  },
  {
    "id": 270,
    "row": "Aventura",
    "title": "Snail Bob 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Snail Bob 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/snail-bob-3.html"
  },
  {
    "id": 271,
    "row": "Aventura",
    "title": "Snail Bob 4",
    "addedAt": "2026-11-26",
    "image": gameImages["Snail Bob 4"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/snail-bob-4.html"
  },
  {
    "id": 272,
    "row": "Aventura",
    "title": "Snail Bob 5",
    "addedAt": "2026-11-26",
    "image": gameImages["Snail Bob 5"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/snail-bob-5.html"
  },
  {
    "id": 273,
    "row": "Aventura",
    "title": "Snail Bob 6",
    "addedAt": "2026-11-26",
    "image": gameImages["Snail Bob 6"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/snail-bob-6.html"
  },
  {
    "id": 274,
    "row": "Aventura",
    "title": "Snail Bob 7",
    "addedAt": "2026-11-26",
    "image": gameImages["Snail Bob 7"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/snail-bob-7.html"
  },
  {
    "id": 275,
    "row": "Aventura",
    "title": "Snail Bob 8",
    "addedAt": "2026-11-26",
    "image": gameImages["Snail Bob 8"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/snail-bob-8.html"
  },
  {
    "id": 276,
    "row": "Aventura",
    "title": "Snail Bob",
    "addedAt": "2026-11-26",
    "image": gameImages["Snail Bob"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/snail-bob.html"
  },
  {
    "id": 277,
    "row": "Carreras",
    "title": "Snow Rider",
    "addedAt": "2026-11-26",
    "image": gameImages["Snow Rider"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/snow-rider.htm"
  },
  {
    "id": 278,
    "row": "Carreras",
    "title": "Snow Road",
    "addedAt": "2026-11-26",
    "image": gameImages["Snow Road"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/snow-road.htm"
  },
  {
    "id": 279,
    "row": "Multijugador .IO",
    "title": "Snowball IO",
    "addedAt": "2026-11-26",
    "image": gameImages["Snowball IO"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/snowball-io.html"
  },
  {
    "id": 280,
    "row": "Deportes",
    "title": "Soccer Bros",
    "addedAt": "2026-11-26",
    "image": gameImages["Soccer Bros"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/soccer-bros.html"
  },
  {
    "id": 281,
    "row": "Deportes",
    "title": "Soccer Random",
    "addedAt": "2026-11-26",
    "image": gameImages["Soccer Random"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/soccer-random.htm"
  },
  {
    "id": 282,
    "row": "Arcade",
    "title": "Space Is Key 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Space Is Key 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/space-is-key-2.html"
  },
  {
    "id": 283,
    "row": "Arcade",
    "title": "Space Is Key",
    "addedAt": "2026-11-26",
    "image": gameImages["Space Is Key"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/space-is-key.html"
  },
  {
    "id": 284,
    "row": "Arcade",
    "title": "Space Waves",
    "addedAt": "2026-11-26",
    "image": gameImages["Space Waves"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/space-waves.html"
  },
  {
    "id": 285,
    "row": "Idle y Clicker",
    "title": "Spacebar Clicker",
    "addedAt": "2026-11-26",
    "image": gameImages["Spacebar Clicker"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/spacebar-clicker.html"
  },
  {
    "id": 286,
    "row": "Arcade",
    "title": "Speed Stars",
    "addedAt": "2026-11-26",
    "image": gameImages["Speed Stars"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/speed-stars.html"
  },
  {
    "id": 287,
    "row": "Arcade",
    "title": "Sprunki",
    "addedAt": "2026-11-26",
    "image": gameImages["Sprunki"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/sprunki.html"
  },
  {
    "id": 288,
    "row": "Arcade",
    "title": "Stack",
    "addedAt": "2026-11-26",
    "image": gameImages["Stack"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/stack.html"
  },
  {
    "id": 289,
    "row": "Arcade",
    "title": "Stacktris",
    "addedAt": "2026-11-26",
    "image": gameImages["Stacktris"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/stacktris.html"
  },
  {
    "id": 290,
    "row": "Estrategia",
    "title": "State IO",
    "addedAt": "2026-11-26",
    "image": gameImages["State IO"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/state-io.html"
  },
  {
    "id": 291,
    "row": "Aventura",
    "title": "Stealing The Diamond",
    "addedAt": "2026-11-26",
    "image": gameImages["Stealing The Diamond"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/stealing-the-diamond.html"
  },
  {
    "id": 292,
    "row": "Acción",
    "title": "Stick Archers Battle",
    "addedAt": "2026-11-26",
    "image": gameImages["Stick Archers Battle"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/stick-archers-battle.html"
  },
  {
    "id": 293,
    "row": "Acción",
    "title": "Stick Fighter",
    "addedAt": "2026-11-26",
    "image": gameImages["Stick Fighter"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/stick-fighter.html"
  },
  {
    "id": 294,
    "row": "Acción",
    "title": "Stick Merge",
    "addedAt": "2026-11-26",
    "image": gameImages["Stick Merge"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/stick-merge.html"
  },
  {
    "id": 295,
    "row": "Arcade",
    "title": "Stickman Hook",
    "addedAt": "2026-11-26",
    "image": gameImages["Stickman Hook"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/stickman-hook.html"
  },
  {
    "id": 296,
    "row": "Plataformas",
    "title": "Subway Surfers Beijing",
    "addedAt": "2026-11-26",
    "image": gameImages["Subway Surfers Beijing"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/subway-surfers-beijing.html"
  },
  {
    "id": 297,
    "row": "Plataformas",
    "title": "Subway Surfers Havana",
    "addedAt": "2026-11-26",
    "image": gameImages["Subway Surfers Havana"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/subway-surfers-havana.html"
  },
  {
    "id": 298,
    "row": "Plataformas",
    "title": "Subway Surfers San Francisco",
    "addedAt": "2026-11-26",
    "image": gameImages["Subway Surfers San Francisco"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/subway-surfers-san-francisco.html"
  },
  {
    "id": 299,
    "row": "Carreras",
    "title": "Super Bike The Champion",
    "addedAt": "2026-11-26",
    "image": gameImages["Super Bike The Champion"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/super-bike-the-champion.html"
  },
  {
    "id": 300,
    "row": "Deportes",
    "title": "Super Liquid Soccer",
    "addedAt": "2026-11-26",
    "image": gameImages["Super Liquid Soccer"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/super-liquid-soccer.html"
  },
  {
    "id": 301,
    "row": "Carreras",
    "title": "Super Star Car",
    "addedAt": "2026-11-26",
    "image": gameImages["Super Star Car"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/super-star-car.html"
  },
  {
    "id": 302,
    "row": "Acción",
    "title": "Superhot",
    "addedAt": "2026-11-26",
    "image": gameImages["Superhot"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/superhot.html"
  },
  {
    "id": 303,
    "row": "Deportes",
    "title": "Table Tennis World Tour",
    "addedAt": "2026-11-26",
    "image": gameImages["Table Tennis World Tour"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/table-tennis-world-tour.html"
  },
  {
    "id": 304,
    "row": "Arcade",
    "title": "Tag",
    "addedAt": "2026-11-26",
    "image": gameImages["Tag"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/tag.html"
  },
  {
    "id": 305,
    "row": "Carreras",
    "title": "Tanuki Sunset",
    "addedAt": "2026-11-26",
    "image": gameImages["Tanuki Sunset"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/tanuki-sunset.html"
  },
  {
    "id": 306,
    "row": "Carreras",
    "title": "Tap Road",
    "addedAt": "2026-11-26",
    "image": gameImages["Tap Road"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/tap-road.html"
  },
  {
    "id": 307,
    "row": "Arcade",
    "title": "Temple Of Boom",
    "addedAt": "2026-11-26",
    "image": gameImages["Temple Of Boom"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/temple-of-boom.html"
  },
  {
    "id": 308,
    "row": "Plataformas",
    "title": "Temple Run 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Temple Run 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/temple-run-2.htm"
  },
  {
    "id": 309,
    "row": "Multijugador .IO",
    "title": "Territorial IO",
    "addedAt": "2026-11-26",
    "image": gameImages["Territorial IO"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/territorial-io.html"
  },
  {
    "id": 310,
    "row": "Puzles",
    "title": "Tetrominoes",
    "addedAt": "2026-11-26",
    "image": gameImages["Tetrominoes"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/tetrominoes.html"
  },
  {
    "id": 311,
    "row": "Puzles",
    "title": "The Impossible Quiz 2",
    "addedAt": "2026-11-26",
    "image": gameImages["The Impossible Quiz 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/the-impossible-quiz-2.html"
  },
  {
    "id": 312,
    "row": "Puzles",
    "title": "The Impossible Quiz",
    "addedAt": "2026-11-26",
    "image": gameImages["The Impossible Quiz"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/the-impossible-quiz.html"
  },
  {
    "id": 313,
    "row": "Casual",
    "title": "There Is No G",
    "addedAt": "2026-11-26",
    "image": gameImages["There Is No G"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/there-is-no-g.html"
  },
  {
    "id": 314,
    "row": "Arcade",
    "title": "They Are Coming",
    "addedAt": "2026-11-26",
    "image": gameImages["They Are Coming"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/they-are-coming.html"
  },
  {
    "id": 315,
    "row": "Plataformas",
    "title": "This Is The Only Level Too",
    "addedAt": "2026-11-26",
    "image": gameImages["This Is The Only Level Too"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/this-is-the-only-level-too.html"
  },
  {
    "id": 316,
    "row": "Plataformas",
    "title": "This Is The Only Level",
    "addedAt": "2026-11-26",
    "image": gameImages["This Is The Only Level"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/this-is-the-only-level.html"
  },
  {
    "id": 317,
    "row": "Acción",
    "title": "Time Shooter 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Time Shooter 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/time-shooter-2.html"
  },
  {
    "id": 318,
    "row": "Acción",
    "title": "Time Shooter 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Time Shooter 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/time-shooter-3.htm"
  },
  {
    "id": 319,
    "row": "Arcade",
    "title": "Tiny Fishing",
    "addedAt": "2026-11-26",
    "image": gameImages["Tiny Fishing"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/tiny-fishing.html"
  },
  {
    "id": 320,
    "row": "Arcade",
    "title": "Tomb Of The Mask",
    "addedAt": "2026-11-26",
    "image": gameImages["Tomb Of The Mask"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/tomb-of-the-mask.htm"
  },
  {
    "id": 321,
    "row": "Puzles",
    "title": "Trap The Cat",
    "addedAt": "2026-11-26",
    "image": gameImages["Trap The Cat"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/trap-the-cat.html"
  },
  {
    "id": 322,
    "row": "Puzles",
    "title": "Trivia Crack",
    "addedAt": "2026-11-26",
    "image": gameImages["Trivia Crack"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/trivia-crack.html"
  },
  {
    "id": 323,
    "row": "Arcade",
    "title": "Tube Jumpers",
    "addedAt": "2026-11-26",
    "image": gameImages["Tube Jumpers"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/tube-jumpers.html"
  },
  {
    "id": 324,
    "row": "Arcade",
    "title": "Tunnel Rush",
    "addedAt": "2026-11-26",
    "image": gameImages["Tunnel Rush"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/tunnel-rush.html"
  },
  {
    "id": 325,
    "row": "Arcade",
    "title": "Unicycle Hero",
    "addedAt": "2026-11-26",
    "image": gameImages["Unicycle Hero"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/unicycle-hero.html"
  },
  {
    "id": 326,
    "row": "Plataformas",
    "title": "Vex 4",
    "addedAt": "2026-11-26",
    "image": gameImages["Vex 4"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/vex-4.html"
  },
  {
    "id": 327,
    "row": "Plataformas",
    "title": "Vex 5",
    "addedAt": "2026-11-26",
    "image": gameImages["Vex 5"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/vex-5.html"
  },
  {
    "id": 328,
    "row": "Plataformas",
    "title": "Vex 6",
    "addedAt": "2026-11-26",
    "image": gameImages["Vex 6"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/vex-6.htm"
  },
  {
    "id": 329,
    "row": "Plataformas",
    "title": "Vex 7",
    "addedAt": "2026-11-26",
    "image": gameImages["Vex 7"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/vex-7.htm"
  },
  {
    "id": 330,
    "row": "Plataformas",
    "title": "Vex 8",
    "addedAt": "2026-11-26",
    "image": gameImages["Vex 8"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/vex-8.htm"
  },
  {
    "id": 331,
    "row": "Plataformas",
    "title": "Vex X3m 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Vex X3m 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/vex-x3m-2.html"
  },
  {
    "id": 332,
    "row": "Plataformas",
    "title": "Vex X3m",
    "addedAt": "2026-11-26",
    "image": gameImages["Vex X3m"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/vex-x3m.html"
  },
  {
    "id": 333,
    "row": "Deportes",
    "title": "Volley Random",
    "addedAt": "2026-11-26",
    "image": gameImages["Volley Random"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/volley-random.html"
  },
  {
    "id": 334,
    "row": "Acción",
    "title": "War The Knights",
    "addedAt": "2026-11-26",
    "image": gameImages["War The Knights"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/war-the-knights.html"
  },
  {
    "id": 335,
    "row": "Casual",
    "title": "We Become What We Behold",
    "addedAt": "2026-11-26",
    "image": gameImages["We Become What We Behold"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/clwebecomewhatwebehold.html"
  },
  {
    "id": 336,
    "row": "Carreras",
    "title": "Wheelie Bike",
    "addedAt": "2026-11-26",
    "image": gameImages["Wheelie Bike"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/wheelie-bike.html"
  },
  {
    "id": 337,
    "row": "Aventura",
    "title": "Wheely 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Wheely 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/wheely-2.html"
  },
  {
    "id": 338,
    "row": "Aventura",
    "title": "Wheely 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Wheely 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/wheely-3.html"
  },
  {
    "id": 339,
    "row": "Aventura",
    "title": "Wheely 4",
    "addedAt": "2026-11-26",
    "image": gameImages["Wheely 4"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/wheely-4.html"
  },
  {
    "id": 340,
    "row": "Aventura",
    "title": "Wheely 5",
    "addedAt": "2026-11-26",
    "image": gameImages["Wheely 5"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/wheely-5.html"
  },
  {
    "id": 341,
    "row": "Aventura",
    "title": "Wheely 6",
    "addedAt": "2026-11-26",
    "image": gameImages["Wheely 6"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/wheely-6.html"
  },
  {
    "id": 342,
    "row": "Aventura",
    "title": "Wheely 7",
    "addedAt": "2026-11-26",
    "image": gameImages["Wheely 7"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/wheely-7.html"
  },
  {
    "id": 343,
    "row": "Aventura",
    "title": "Wheely 8",
    "addedAt": "2026-11-26",
    "image": gameImages["Wheely 8"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/wheely-8.html"
  },
  {
    "id": 344,
    "row": "Aventura",
    "title": "Wheely",
    "addedAt": "2026-11-26",
    "image": gameImages["Wheely"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/wheely.html"
  },
  {
    "id": 345,
    "row": "Puzles",
    "title": "Wordle Unlimited",
    "addedAt": "2026-11-26",
    "image": gameImages["Wordle Unlimited"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/wordle-unlimited.html"
  },
  {
    "id": 346,
    "row": "Arcade",
    "title": "Worlds Hardest Game 2",
    "addedAt": "2026-11-26",
    "image": gameImages["Worlds Hardest Game 2"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/worlds-hardest-game-2.html"
  },
  {
    "id": 347,
    "row": "Arcade",
    "title": "Worlds Hardest Game 3",
    "addedAt": "2026-11-26",
    "image": gameImages["Worlds Hardest Game 3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/worlds-hardest-game-3.html"
  },
  {
    "id": 348,
    "row": "Arcade",
    "title": "Worlds Hardest Game",
    "addedAt": "2026-11-26",
    "image": gameImages["Worlds Hardest Game"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/worlds-hardest-game.html"
  },
  {
    "id": 349,
    "row": "Deportes",
    "title": "Wrestle Bros",
    "addedAt": "2026-11-26",
    "image": gameImages["Wrestle Bros"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/wrestle-bros.html"
  },
  {
    "id": 350,
    "row": "Multijugador .IO",
    "title": "Yohoho IO",
    "addedAt": "2026-11-26",
    "image": gameImages["Yohoho IO"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/yohoho-io.html"
  },
  {
    "id": 351,
    "row": "Arcade",
    "title": "Zombie Rush",
    "addedAt": "2026-11-26",
    "image": gameImages["Zombie Rush"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/zombie-rush.html"
  },
  {
    "id": 352,
    "row": "Arcade",
    "title": "Zrist",
    "addedAt": "2026-11-26",
    "image": gameImages["Zrist"] || "",
    "rawUrl": "https://raw.githubusercontent.com/CoolDude2349/Offline-HTML-Games-Pack/master/offline/zrist.html"
  },
    {
    "id": 353,
    "row": "Adventure",
    "title": "Minecraft 26.3",
    "addedAt": "2026-11-27",
    "image": gameImages["Minecraft 26.3"] || "",
    "rawUrl": "https://raw.githubusercontent.com/MilkdromedaStudios/all-of-eaglercraft/refs/heads/main/ArchMC%20Eaglercraft%2026.3.html"
  },
  {
    "id": 354,
    "row": "Other Apps & Services",
    "title": "YouTube",
    "addedAt": "2026-11-27",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
    "webUrl": "https://www.youtube.com/"
  },
  {
    "id": 355,
    "row": "Other Apps & Services",
    "title": "Instagram",
    "addedAt": "2026-11-27",
    "image": "https://www.google.com/s2/favicons?domain=www.instagram.com&sz=128",
    "webUrl": "https://www.instagram.com/"
  },
  {
    "id": 356,
    "row": "Other Apps & Services",
    "title": "GeForce NOW",
    "addedAt": "2026-11-27",
    "image": "https://www.google.com/s2/favicons?domain=play.geforcenow.com&sz=128",
    "webUrl": "https://play.geforcenow.com/"
  },
  {
    "id": 357,
    "row": "Other Apps & Services",
    "title": "Nautilus OS",
    "addedAt": "2026-11-27",
    "image": gameImages["Nautilus"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/nautilusOS.html"
  },
    {
    "id": 358,
    "row": "Other Apps & Services",
    "title": "EmulatorJS",
    "addedAt": "2026-11-28",
    "image": gameImages["EmulatorJS"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/clemujs.html"
  },
      {
    "id": 359,
    "row": "Other Apps & Services",
    "title": "Github Search",
    "addedAt": "2026-11-28",
    "image": gameImages["githubsearch"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/clgithubsearch.html"
  },
        {
    "id": 360,
    "row": "Other Apps & Services",
    "title": "Meowio NES Emulator",
    "addedAt": "2026-11-28",
    "image": gameImages["NESemulator"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/clmeowio.html"
  },
          {
    "id": 361,
    "row": "Other Apps & Services",
    "title": "Helios Proxy",
    "addedAt": "2026-11-28",
    "image": gameImages["helios"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/Helios-Offline%20(1).html"
  },
          {
    "id": 362,
    "row": "Other Apps & Services",
    "title": "Pico 8 edu",
    "addedAt": "2026-11-28",
    "image": gameImages["pico8edu"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/clpico8edu.html"
  },
            {
    "id": 363,
    "row": "Other Apps & Services",
    "title": "Ruffle emulator",
    "addedAt": "2026-11-28",
    "image": gameImages["ruffleemu"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/clruffle.html"
  },
            {
    "id": 364,
    "row": "Other Apps & Services",
    "title": "Sandstone Proxy",
    "addedAt": "2026-11-28",
    "image": gameImages["sandstone"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/clsandstone.html"
  },
              {
    "id": 365,
    "row": "Other Apps & Services",
    "title": "Scratch Editor",
    "addedAt": "2026-11-28",
    "image": gameImages["scratch"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/clscratchoptions.html"
  },
              {
    "id": 366,
    "row": "Other Apps & Services",
    "title": "Silk",
    "addedAt": "2026-11-28",
    "image": gameImages["silk"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/clsilk.html"
  },
                {
    "id": 367,
    "row": "Other Apps & Services",
    "title": "Soundboard",
    "addedAt": "2026-11-28",
    "image": gameImages["soundboard"] || "",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/clsoundboard.html"
  },
    {
    "id": 368,
    "row": "Other Apps & Services",
    "title": "TikTok",
    "addedAt": "2026-11-28",
    "image": "https://sf-static.tiktokcdn.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png",
    "webUrl": "https://www.tiktok.com/"
  },
      {
    "id": 369,
    "row": "Other Apps & Services",
    "title": "Snapchat",
    "addedAt": "2026-11-28",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEj6y35wS4jRu_rxVvK292woTjiGhfW2CU1QXYgdXPG5zWYPw-UhgFSvSn&s=10",
    "webUrl": "https://www.snapchat.com/web"
  },
        {
    "id": 370,
    "row": "Other Apps & Services",
    "title": "GUST proxy",
    "addedAt": "2026-11-28",
    "image": gameImages["gust"] || "",
    "rawUrl": "https://github.com/EML0073/jokuk/raw/refs/heads/main/gust.html"
  },
          {
    "id": 371,
    "row": "Other Apps & Services",
    "title": "Whatsapp",
    "addedAt": "2026-11-28",
    "image": "https://store-images.s-microsoft.com/image/apps.8453.13518859748920827.4d7dd838-9f34-4ad2-9cd7-b861c6398fc1.11cbb3d4-ffd9-42c1-82bd-e3f305d562b1?h=210",
    "webUrl": "https://web.whatsapp.com/"
  },
              {
    "id": 372,
    "row": "Other Apps & Services",
    "title": "Twitch",
    "addedAt": "2026-11-28",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFceazTxztqQStlkamFYqiKzwUrZqhmN7JQd0REtfB9neHlLILmB68Mi_h&s=10",
    "webUrl": "https://www.twitch.tv/"
  },
                      {
    "id": 373,
    "row": "Other Apps & Services",
    "title": "Reddit",
    "addedAt": "2026-11-28",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iatt8Fq2jfrUIUx0irQ2j9JX7Xq1Ro5DEas5U4ZMHAOXDm9zmvYiARxZ&s=10",
    "webUrl": "https://www.reddit.com/"
  },
  
          {
    "id": 374,
    "row": "Shooter",
    "title": "Brawl Stars",
    "addedAt": "2026-11-28",
    "image": "https://i.scdn.co/image/ab6761610000e5ebf7b952107c126c561c52171e",
    "rawUrl": "https://raw.githubusercontent.com/EML0073/jokuk/refs/heads/main/clbrawlsimulator3d.html"
  },
];

window.gamesList = gamesList;
