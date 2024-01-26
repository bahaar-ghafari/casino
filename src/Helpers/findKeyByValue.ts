import { GameNameToCode } from "Constants/games";

export function findKeyByValue(value: string): string {
  return GameNameToCode[value as keyof typeof GameNameToCode];
}
