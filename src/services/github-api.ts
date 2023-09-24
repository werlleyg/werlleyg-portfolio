import axios from "axios";

export const GITHUB_API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_BASE_URL,
});
