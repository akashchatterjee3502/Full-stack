import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "https://homyz-real-estate-seven.vercel.app",
  issuerBaseURL: "https://akash-chatterjee.us.auth0.com",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
