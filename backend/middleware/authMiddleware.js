import jwt from "jsonwebtoken"

 const authMiddleware=async (req,res,next)=>{
    try{
        // read token from cookies 
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({message:"unautherized user"});
        }
        
        const verifyingToken =  jwt.verify(token, process.env.JWT_SECRET);
        req.user={
            userId: verifyingToken.userId,
        }
      next();
    }catch(err){
        return res.status(500).json({messages:"authentication failure"})
    }
}

export default authMiddleware;

 