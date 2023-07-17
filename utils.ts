import { IfetchResponse } from "./types";

export async function fetchApi<T>(baseUrl:string, page:string) {
    const response = await fetch(`${baseUrl}?page=${page}`);
    if (!response.ok) return undefined;
    const data:IfetchResponse<T> = await response.json();
    return data;
  };