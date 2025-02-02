export type User = {
  _id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  gender?: string;
  school?: string;
  grade?: number;
  password: string;
  DOB: string;
  content?: Content[];
  status?: string;
};

export type Content = {
  isReviewed: boolean;
  id: number;
  title: string;
  description: string;
  body: string;
  image: string;
  type: Type;
  genres: Genre[];
  reviews: Review[];
  comments: Comment[];
  likes: Like[];
  final_score: number;
};

export type IContent = {
  _id: string;
  userId: {
    username: string;
    firstName: string;
    lastName: string;
  };
  userName: string;
  author: string;
  title: string;
  description: string;
  image: string;
  type: string;
  genres: Genre[];
  likesCount: number;
  commentsCount: number;
  text: string;
};

export interface contentResponse {
  data: IContent[];
  page: number;
  pages: number;
  totalContents: number;
}

export type Review = {
  id: string;
  criteria: Point[];
  score: number;
  feedback: string;
};

export type Point = {
  text: string;
  point: number;
};

export type Comment = {
  id: string;
  username: string;
  avatar: string;
  date: string;
  text: string;
};

export type Like = {
  id: string;
  username: string;
  date: string;
};

export type Genre = {
  id: string;
  name: string;
};
export interface IGenre {
  _id: string;
  name: string;
}

export type Type = {
  id: string;
  name: string;
};

export type UserFormData = {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  company?: string;
  DOB?: string;
  username?: string;
  school?: string;
};

export type ErrorMessage = {
  status: boolean;
  data: { message: string; stack: string };
};

// ***************** User Register, Login
export interface UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  DOB: string; //
  username: string;
  _id: string;
  createdAt?: string;
  updatedAt?: string;
  preferences: string[];
}

export type RegisterRequest = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  DOB?: string;
  username?: string;
};

export type GetProfileResponse = {
  success: boolean;
  message: string;
  data: UserInfo;
};

export type GetProfileRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  DOB: string;
  username: string;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  data: UserInfo;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  data: UserInfo;
};

export type LogoutResponse = {
  message: string;
};

export type UpdateUserResponse = {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  DOB : string;
  username : string;
};

export type UpdateUserRequest = {
  firstName?: string;
  lastName?: string;
  email?: string;
  DOB?: string;
  username?: string;
  password?: string;
};

export type DeleteProfileResponse = {
  message: string;
};
