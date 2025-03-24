import { iResponse } from "./../interface/common";
import { IUser } from "@/interface/user";
import { SERVER_URL } from "./config";
import { ICodeReview } from "@/interface/code";

/**----------------------- Auth api start ---------------------------- */

export const registerViaEmail = (
  payload: Partial<IUser>
): Promise<iResponse> => {
  return fetch(`${SERVER_URL}/api/auth/register`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then(async (response) => {
      const res = await response.json();
      if (response.status >= 400) {
        return Promise.reject(res);
      }
      console.log("response", res.token);
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const loginViaEmail = (payload: Partial<IUser>): Promise<iResponse> => {
  return fetch(`${SERVER_URL}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-Type": "application/json",
    },
    credentials: "include",
  })
    .then(async (response) => {
      const res = await response.json();
      if (response.status >= 400) {
        return Promise.reject(res);
      }
      console.log("response", res.token);
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const logoutUserAPi = (): Promise<iResponse> => {
  return fetch(`${SERVER_URL}/api/auth/logout`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    credentials: "include",
  })
    .then(async (response) => {
      const res = await response.json();
      if (response.status >= 400) {
        return Promise.reject(res);
      }
      console.log("response", res.token);
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const sendVerifyOtp = (): Promise<iResponse> => {
  return fetch(`${SERVER_URL}/api/auth/send-verify-otp`, {
    method: "POST",

    headers: {
      "content-Type": "application/json",
    },
    credentials: "include",
  })
    .then(async (response) => {
      const res = await response.json();
      if (response.status >= 400) {
        return Promise.reject(res);
      }
      console.log("response", res.token);
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const verifyOtp = (verifyOtp: Partial<IUser>): Promise<iResponse> => {
  return fetch(`${SERVER_URL}/api/auth/verify-account`, {
    method: "POST",
    body: JSON.stringify(verifyOtp),
    headers: {
      "content-Type": "application/json",
    },
    credentials: "include",
  })
    .then(async (response) => {
      const res = await response.json();
      if (response.status >= 400) {
        return Promise.reject(res);
      }
      console.log("response", res.token);
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const sendResetOtp = (email: Partial<IUser>): Promise<iResponse> => {
  return fetch(`${SERVER_URL}/api/auth/send-reset-otp`, {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "content-Type": "application/json",
    },
    credentials: "include",
  })
    .then(async (response) => {
      const res = await response.json();
      if (response.status >= 400) {
        return Promise.reject(res);
      }
      console.log("response", res.token);
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const resetPassword = (
  verifyOtp: Partial<IUser>
): Promise<iResponse> => {
  return fetch(`${SERVER_URL}/api/auth/reset-password`, {
    method: "POST",
    body: JSON.stringify(verifyOtp),
    headers: {
      "content-Type": "application/json",
    },
    credentials: "include",
  })
    .then(async (response) => {
      const res = await response.json();
      if (response.status >= 400) {
        return Promise.reject(res);
      }
      console.log("response", res.token);
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

//  ! this will be post method for sending the code

export const accessGithub = (code: { code: string }): Promise<iResponse> => {
  return fetch(`${SERVER_URL}/api/auth/get-access-token`, {
    method: "POST",
    body: JSON.stringify(code),
    headers: {
      "content-Type": "application/json",
    },
  })
    .then(async (response) => {
      const res = await response.json();
      if (response.status >= 400) {
        return Promise.reject(res);
      }
      console.log("response", res.token);
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

/**----------------------- Auth api end ----------------------------- */

/**----------------------- CodeReview api end ----------------------------- */

export const sendCodeForReview = (payload: Partial<ICodeReview>) => {
  return fetch(`${SERVER_URL}/api/codeReview/send-code-for-review`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-Type": "application/json",
    },
  })
    .then(async (response) => {
      const res = await response.json();
      if (response.status >= 400) {
        return Promise.reject(res);
      }
      console.log("response", res.token);
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

/**----------------------- CodeReview api end ----------------------------- */
