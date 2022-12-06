export const submitHandler = callback => ev => {
  ev.preventDefault()
  callback(new FormData(ev.target), ev.target);
};
