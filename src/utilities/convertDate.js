export default date => {
   const newDate = new Date(date);

   const year = newDate.getUTCFullYear();
   const month = newDate.getUTCMonth();
   const day = newDate.getUTCDay();

   return `${month}-${day + 1}-${year}`;
};
