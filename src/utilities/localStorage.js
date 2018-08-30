const TOKEN_NAME = 'token';

export const setToken = (token) => {
   localStorage.setItem(TOKEN_NAME, token);
};

export const getToken = () => {
   const token = localStorage.getItem(TOKEN_NAME);

   if (!token) {
      ('NO TOKEN');
      return null;
   }
   return token;
};

export const deleteToken = () => {
   localStorage.removeItem(TOKEN_NAME);
};
