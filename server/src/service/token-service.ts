const jwt = require("jsonwebtoken");

class TokenService {
  generateToken(payload: { user_id: number }): string {
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: "15s" });
  }

  validateAccessToken(token: string) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (e) {
      return null;
    }
  }
}

export = new TokenService();