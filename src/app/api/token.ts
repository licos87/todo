const AUTH_TOKEN_KEY_NAME = "todo-user";

export type UserType = {
  email: string;
  password: string;
};

export const getUser = (): UserType => {
  const user = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return user ? JSON.parse(user) : "";
};

export const saveUser = (user: UserType): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, JSON.stringify(user));
};

export const dropUser = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
