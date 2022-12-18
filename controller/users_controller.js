const User = require('../models/user');


module.exports.profile = function(req, res){
   // if(req.cookies.user_id){
       // User.findById(req.cookies.user_id,function(err,user){
           // if(user){
                return res.render('user_profile', {
                    title: 'User Profile',
                  //  user:user,
                })
           // }else{
             //   return res.redirect('users/sign-in');
           // }
      //  });
    

   // }else{
    //    return res.redirect('users/sign-in');
   // }
    
}


   
// render the sign up page
module.exports.signUp = function(req, res){
    // sent the people to users profile page 
    if(req.isAuthenticated()){
        return  res.redirect('./users/profile');
     }

    return res.render('sign_up', {
        title: "Codeial | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('./users/profile');
     }
    return res.render('sign_in', {
        title: "Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/profile');
            })
        }else{
            return res.redirect('back');
        }

    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
  res.redirect('/');
}

module.exports.destroySession = function(req, res){
    // because of an update this code doen't work in while logging out 
    // req.logout();
    // return res.redirect('/');
    
// major change in req.logout() is that now it has became an asynchronous 
// function, whereas previously it was synchronous  
    req.logout(function(err){
        if(err) {return next(err);}
        res.redirect('/');
    })
}