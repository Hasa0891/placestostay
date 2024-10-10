import { SignJWT,jwtVerify} from "jose";
const {JWT_SECRET_KEY} = process.env;

export async function createToken(data,expiry){
  const jwt = await new SignJWT(data)
  .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
  .setIssuedAt()
  .setExpirationTime(expiry)
  .sign(new TextEncoder().encode(JWT_SECRET_KEY))
  return jwt;
}

export async function verifyToken(token){
  try{
    const {payload} = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET_KEY));
    return {
      ...payload,
      tokenStatus : true
    };
  } catch (err) {
    return {
      tokenStatus : false
    }
  }
}


