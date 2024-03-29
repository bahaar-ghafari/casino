import { GameSource } from "./@types";

export const games: GameSource = {
  feastingfox: {
    src: "https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/feastingfox/index.html?moneymode=fun",
  },
  bookofinferno94: {
    src: "https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/bookofinferno/index.html?moneymode=fun",
  },
  warpwreckers: {
    src: "https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/warpwreckers/index.html?moneymode=fun",
  },
  renosevens: {
    src: "https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/renosevens/index.html?moneymode=fun",
  },
  scattermonsters: {
    src: "https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/scattermonsters/index.html?moneymode=fun",
  },
};

export enum GameNameToCode {
  "Festing Fox" = "feastingfox",
  "Book Of Inferno" = "bookofinferno94",
  "Warp Wreckers" = "warpwreckers",
  "Reno 7's" = "renosevens",
  "Scatter Monsters" = "scattermonsters",
}
