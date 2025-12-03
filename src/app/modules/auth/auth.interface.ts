export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  email: string;
  password: string;
  fullName: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    role: string;
    isSubscribed: boolean;
    isVerified: boolean;
  };
}