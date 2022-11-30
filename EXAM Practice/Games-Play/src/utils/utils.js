export const submitHandler = callback => ev => {
  ev.preventDefault();
  callback(Object.fromEntries(new FormData(ev.target)), ev.target);
};
