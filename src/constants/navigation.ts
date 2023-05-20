const MAIN = "/" as const;
const ABOUT = "/about" as const;
const USERINFO = "/userinfo" as const;

export const ROUTES = {ABOUT, USERINFO, MAIN} as const;
