const getCookie = (name: string): string => {
  const cookie: string = document.cookie;
  const allCookie: string[] = cookie.split("; ");
  const findCookie: string = allCookie.find((c) => c.includes(name));
  if (findCookie) {
    // ("country=US");
    const cookieNameValue: string[] = findCookie.split("=");
    return cookieNameValue[1];
  }
};
