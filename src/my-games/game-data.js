let gameData = [
  //Will possibly replace this with an API
  {
    title: "Animal Crossing: New Horizon",
    releaseYear: 2020,
    genre: "Simulation and sports",
    summary:
      "In New Horizon, the player arrives in a deserted island and is given the chance to turn it into paradise. Together with Tom Nook and the rest of the residents, the player gets to craft, fish, and dig their way into transforming their island.",

    platforms: ["Nintendo Switch"],
    developers: ["Nintendo EPD"],
    review: "Wonderful game! Basically a masterpiece! ",
    favorite: false,
  },
  {
    title: "Overwatch",
    releaseYear: 2016,
    genre: "Multiplayer online battle arena (MOBA)",
    summary:
      "A sci-fi multiplayer first-person shooter from Blizzard, in which players can choose from a wide range of Heroes with unique weapons and abilities.",
    platforms: ["PlayStation 4", "Xbox One", "PC", "Nintendo Switch"],
    developers: "Blizzard Entertainment",
    review: "Super fun, but is frustrating at times. o.o",
    favorite: true,
  },
  {
    title: "Pokemon LeafGreen",
    releaseYear: 2004,
    genre: "Role-playing (RPG, ARPG, and More)",
    summary:
      "Return to Kanto filled with a whole new chapter to the game. With a brand new features and new ways to capture Pokemon, it time for whole new revolution. ",
    platforms: ["Game Boy Advance"],
    developers: ["Creatures, Inc", "Game Freak, inc"],
    review: "Such a classic!",
    favorite: true,
  },
];

// console.log("hello");
// console.log(gameData);

// gameData = gameData.map((item) => {
//   return {
//     ...item,
//   };
// });
export default gameData;
