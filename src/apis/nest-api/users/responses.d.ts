export interface SignInUserResponse {
  userId: string;
  accessToken: {
    value: string;
    expiresIn: number;
  };
  refreshToken: {
    value: string;
    expiresIn: number;
  };
}

export interface SignUpUserResponse {
  userId: string;
  accessToken: {
    value: string;
    expiresIn: number;
  };
  refreshToken: {
    value: string;
    expiresIn: number;
  };
}
