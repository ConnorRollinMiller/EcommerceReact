export const setToken = (tokenName, data) => {
   localStorage.setItem(tokenName, data);
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