import { IUser } from "Components/Header/@types";

export type TloginRes =
  | {
      status: "success";
      player: IUser;
    }
  | {
      status: "fail";
      error: string;
    };

export type TlogoutRes =
  | {
      status: "success";
    }
  | {
      status: "fail";
      error: string;
    };
