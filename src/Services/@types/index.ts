import { IUser } from "Components/Header/@types";

export interface IlogedinRes {
  status: string;
  player: Omit<IUser, "password">;
}

export type loginMethodType = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => Promise<IlogedinRes>;

export type loginRes =
  | {
      status: "fail";
      error: "Username do not match!";
    }
  | { status: "success" };
