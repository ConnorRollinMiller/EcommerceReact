export const setToken = (tokenName, token) => {
   localStorage.setItem(tokenName, token);
};

export const getToken = (tokenName) => {
   const token = localStorage.getItem(tokenName);

   if (!token) {
      return null;
   }
   return token;
};

export const deleteToken = (tokenName) => {
   localStorage.removeItem(tokenName);
};
