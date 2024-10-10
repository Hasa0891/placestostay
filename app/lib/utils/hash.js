const bcrypt = require('bcrypt');

export const hashPassword = async (password) => {
    try{
        const hash = await bcrypt.hash(password,10);
        return hash;
    } catch (e) {
        throw Error("Could Not Hash Password");
    }
}

export const verifyPassword = async (password, dbpassword) => {
  const match = await bcrypt.compare(password,dbpassword);
  return match;
}

