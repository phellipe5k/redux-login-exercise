export const LOGIN_USERNAME = 'LOGIN_USERNAME';

export function loginUsername(value) {
  return {
    type: LOGIN_USERNAME,
    value
  }
};

export const LOGIN_PASSWORD = 'LOGIN_PASSWORD';

export function loginPassword(value) {
  return {
    type: LOGIN_PASSWORD,
    value
  }
};