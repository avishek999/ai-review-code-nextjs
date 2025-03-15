import { IUser } from "@/interface/user";
import { SERVER_URL } from "./config";

/**----------------------- Auth api start ---------------------------- */

export const registerViaEmail = (payload: Partial<IUser>) => {
  return fetch(`${SERVER_URL}/api/auth/register`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      const res = await response.json();
      if (response.status >= 400) {
        return Promise.reject(res);
      }
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

// export const registerViaEmail = async (
//     payload: IUser
//   ): Promise<IUserRegisterApiResponse<Partial<IUser>>> => {
//     return await new Promise((resolve, reject) => {
//       fetch(`${SERVER_URL}/auth/register`, {
//         method: "POST",
//         body: JSON.stringify(payload),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then(async (response) => {
//           const res = await response.json();
//           if (response.status >= 400) {
//             reject(res);
//           }
//           resolve(res);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   };

/**----------------------- Auth api end ----------------------------- */
