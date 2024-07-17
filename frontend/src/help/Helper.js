export function togglePassword(element) {
  let el = document.querySelector(element);
  console.log(el)
  el.getAttribute('type') === 'password' ? el.setAttribute('type', 'text') : el.setAttribute('type', 'password');
}