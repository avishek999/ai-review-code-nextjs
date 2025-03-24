interface IErrorDetail {
  line: number;
  title: string;
  message: string;
}

interface IFeedback {
  errors: IErrorDetail[];
  warnings: IErrorDetail[];
  improvement: IErrorDetail[];
}

interface IChatMessage {
  message: string;
  timestamp?: Date;
}

export interface ICodeReview {
  userId?: string;
  filename?: string;
  UserInputCode?: string;
  feedback?: IFeedback;
  improvedCode?: string;
  chat?: IChatMessage[];
}
