import _ from "lodash";
import { mainProvider } from "providers";
import { signUpUserService } from ".";
import type { SignUpUserDTO } from "./types";

export const handleSignUpUser = async (data: SignUpUserDTO.Form): Promise<void> => {
  const formattedData: SignUpUserDTO.Form = _.mapValues(data, (value) => value.trim());

  const wasSuccessful = await signUpUserService.handle(formattedData);

  if (wasSuccessful) {
    mainProvider.navigate("/user/listing");
  }
};
