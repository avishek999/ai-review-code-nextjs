export interface IErrorDetail {
  line: number;
  title: string;
  message: string;
}

 interface IFeedback {
  errors: IErrorDetail[];
  warnings: IErrorDetail[];
  improvements: IErrorDetail[];
}

interface IChatMessage {
  message: string;
  timestamp?: Date;
}

export interface ICodeReview {
  _id?: string;
  userId?: string;
  filename?: string;
  UserInputCode?: string;
  feedback?: IFeedback;
  improvedCode?: string;
  chat?: IChatMessage[];
}
