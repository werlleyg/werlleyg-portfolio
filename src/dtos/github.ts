export interface IRepository {
  id: number;
  created_at: string;
  description: string;
  html_url: string;
  language: string;
  name: string;
  owner: IOwner;
}
export interface IOwner {
  login: string;
  avatar_url: string;
}
