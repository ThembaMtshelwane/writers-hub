export type User = {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  school: string;
  grade: number;
  password: string;
  DOB: string;
  content: Content[];
  status: string;
};

export type Content = {
  id: number;
  title: string;
  description: string;
  body: string;
  image: string;
  type: string;
  genres: string;
  reviews: Review[];
  comments: Comment[];
  likes: Like[];
  final_score: number;
};

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
