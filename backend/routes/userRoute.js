const express =  require('express');

const router = express.Router();

const {User} = require("./models/usermodel");


const signupSchema =  Zod.object({
    userName:Zod.string(),
    password: Zod.string(),
    firstName:Zod.string(),
    lastName:Zod.string()
})
router.post("/signup",async (req,res)=>{
    
    const data = req.body;

    const {sucess} = signupSchema.safeParse(req.body);

    if(!sucess){
        return res.json({
            message:"email already tkalke / incorect"
        })
    }
   const user = await User.findOne({usreName:data.userName})

   if(user._id){
    return res.json({
        message:"email already tkalke / incorect"
    })
   }
   const dbUser = await User.create(body);
   const token = jwt.sign({
      userId:dbUser._id
   },JWT_SECRET);

   res.json({
      message:"User created successfully",
      token:token
       })
})



module.exports = router;