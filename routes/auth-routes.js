module.exports = (app, passport) => {

  // app.get('/auth/github',
  // passport.authenticate('github', { scope: [ 'user:email' ] }),
  // function(req, res){
  //   // The request will be redirected to GitHub for authentication, so this
  //   // function will not be called.
  // });
  app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

// GET /auth/github/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.json(req.user)
});


  app.get('/api/users/me',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  });


  // app.get('/auth/github/callback', (req, res, next)=>{
  //   const {query} = req;

  //   const {code} = code;

  //   if (!code) {
  //     return res.send({
  //       success: false,
  //       message: 'error: no code'
  //     });
  //   }

  //   console.log('code', code);
  // })


}