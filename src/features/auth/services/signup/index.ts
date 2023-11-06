import { reqresAPI } from "apis/reqres";
import type { SignUpUserDTO } from "./types";

export class SignUpUserService {
  public async handle(data: SignUpUserDTO.Form): Promise<boolean> {
    try {
      await reqresAPI.post("/register", data);

      return true;
    } catch (error: unknown) {
      console.error(error);

      return false;
    }
  }
}

export const signUpUserService = new SignUpUserService();
