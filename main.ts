import { mkdirSync, writeFileSync } from "node:fs";

const scene =
  "Grandpa wraps my hands around the chipped wooden spoon, cinnamon rising from the pot as we stir together.\n" +
  "He tastes it, nods, and says, \"Now the recipe is yours too.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", scene + "\n", "utf8");
