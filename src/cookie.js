export function setCookie(key, value, scope) {
  // create set-cookie string with key-value, samesite and path
  let cookie_string = key + "=" + value + "; SameSite=" + scope + "; path=/;";

  // build the expiration date string
  let expiration_date = new Date();
  // set expiration one year ahead
  expiration_date.setFullYear(expiration_date.getFullYear() + 1);

  // append expiration date to set-cookie string
  cookie_string += "expires=" + expiration_date.toUTCString();

  // create or update the cookie
  document.cookie = cookie_string;
}

export function setCookieStrict(key, value) {
  setCookie(key, value, "Strict");
}

export function deleteCookie(key) {
  document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export function getCookie(key) {
  let name = key + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');

  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}
