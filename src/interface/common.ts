export interface iResponse {
  status: boolean;
  message: string;
  isAccountVerified?: boolean;
  data?: [];
}

export interface IAPCodeResponse<T> {
  status: boolean;
  message: string;
  isAccountVerified?: boolean;
  data?: T;
}
