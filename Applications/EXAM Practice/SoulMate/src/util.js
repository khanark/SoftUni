export function createSubmit(callback) {
  return function (ev) {
    ev.preventDefault();
    callback(Object.fromEntries(new FormData(ev.target)), ev.target);
  };
}