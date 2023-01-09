const base = 'http://127.0.0.1:5000';

export const register = async (
  first_name: string,
  last_name: string,
  email: string,
  password: string,
) => {
  const response = await fetch(`${base}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      password,
    }),
  });
  return response;
};

export const login = async (email: string, password: string) => {
  const response = await fetch(`${base}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return response;
};
