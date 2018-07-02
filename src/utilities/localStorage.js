const TOKEN_NAME = 'token';

export const setToken = token => {
   console.log(token);
   localStorage.setItem(TOKEN_NAME, token);
};

export const getToken = () => {
   const token = localStorage.getItem(TOKEN_NAME);

   if (!token) {
      console.log('NO TOKEN');
      return null;
   }
   return token;
};

export const deleteToken = () => {
   localStorage.removeItem(TOKEN_NAME);
};
