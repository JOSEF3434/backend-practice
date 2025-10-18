const { verifyJwt } = require("../utils/jwt.js");
const User = require('../moldel/userModel.js')

async function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Missing token" });
  try {
    const decoded = verifyJwt(token);
    const user = await User.findById(decoded.sub).lean();
    if (!user) return res.status(401).json({ message: "Invalid token" });
    req.user = {
      id: user._id.toString(),
      email: user.email,
      role: "user",
    };
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
module.exports = { requireAuth };
