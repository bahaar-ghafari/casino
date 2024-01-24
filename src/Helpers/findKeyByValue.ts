import { GameNameToCode } from "Constants/games";

export function findKeyByValue(value: string): string | null {
  if (GameNameToCode[value as keyof typeof GameNameToCode])
    return GameNameToCode[value as keyof typeof GameNameToCode];
  return null;
}
