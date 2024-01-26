import { GameNameToCode } from "Constants/games";

export default function findKeyByValue(value: string): string {
  return GameNameToCode[value as keyof typeof GameNameToCode];
}
