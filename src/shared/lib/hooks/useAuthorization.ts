import axios from "axios";
import { saveUser } from "../../../app/api/token";

type UseAuthorizationProps = {
  email: string;
  password: string;
};

export function useAuthorization({ email, password }: UseAuthorizationProps) {
  axios
    .get("http://localhost:3000/users", {
      params: { email: email, password: password },
    })
    .then((response) => {
      const users = response.data;
      if (users.length === 0) {
        console.log("Пользователь не найден");
      } else {
        const user = users[0];
        console.log("Найденный пользователь:", user);
        saveUser({ email: email, password: password });
      }
    })
    .catch((error) => console.error("Ошибка:", error));
}
