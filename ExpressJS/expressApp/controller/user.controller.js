import User from "../model/user.model.js"

export const signIn = (req, res, next) => {
    let { email, password } = req.body
    User.find(email, password)
        .then(result => {
            // console.log(result)
            if (result.length) {
                req.session.isLoggedIn = true
                req.session.currentUser = result[0]
                res.redirect("/")
            }
            else {
                res.redirect("/sign-in")
            }
        })
        .catch(err => {
            console.log(err);
            res.end("something went wrong....")

        });
}


export const checkForEmail = (req, res, next) => {
    console.log(req.params.userEmail)
    User.hasEmail(req.params.userEmail)
        .then(result => {
            if (result.length)
                res.status(200).json({ status: true, message: "Email id already in use" });
            else
                res.status(200).json({ status: false, message: "Available" });

        })
        .catch(err => {
            console.log(err);

        })
}



export const signUp = (req, res, next) => {
    let { name, email, password, contact } = req.body
    let user = new User(null, name, email, password, contact);
    user.create()
        .then(result => {
            // return res.render("signIn.ejs");
            return res.redirect("/sign-in")                    // http://localhost:3000/sign-in
        })
        .catch(err => {
            console.log(err);

            res.end("Something went wrong.......");

        });
}


export const signOut = (req,res,next)=>{
    req.session.user=null;
    req.session.isLoggedIn=false;
    req.session.destroy();
    return res.redirect("/");
}
