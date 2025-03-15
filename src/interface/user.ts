export interface IUser {
  _id: string;
  email:string;
  name: string;
  password: string;
  verifyOtp: string;
  verifyOtpExpireAt: number;
  isAccountVerified: boolean;
  resetOtp: string;
  resetOtpExpireAt: number;
}
