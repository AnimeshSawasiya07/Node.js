export const indexPage = (req,res,next)=>{
    
    return res.render("index.ejs",{isLoggedIn:req.session.isLoggedIn,user:req.session.currentUser})
}

export const contactPage = (req,res,next)=>{
    return res.render("contact.ejs",{isLoggedIn:req.session.isLoggedIn,user:req.session.currentUser})
}

export const aboutPage = (req,res,next)=>{
    return res.render("about.ejs",{isLoggedIn:req.session.isLoggedIn,user:req.session.currentUser})
}

export const signInPage = (req,res,next)=>{
    return res.render("signIn.ejs",)
}

export const signUpPage = (req,res,next)=>{
    return res.render("signUp.ejs")
}