/**
 * public route that do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/"
]

/**
 * these route will redirect logged user to /settings
 * @type {string[]}
 */
export const authRoutes=[
    "/auth/signin",
    "/auth/signup"
]

/**
 * the prefix to API auth routes
 * use for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/setting"

// 8826862c5ff05a0e8e4be87ef4492e7d0665819a