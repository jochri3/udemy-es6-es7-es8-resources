const data = {
  email: 'christian@gmail.com',
  mdp: '1234',
  username: 'chris',
};

const url = 'https://api.monsite.com/users';

function creeUtilisateurES5() {
  $.ajax({
    method: 'POST',
    data: data,
    url: url,
    success:function(){},
    error():function(){}
  });
}

function creeUtilisateurES5() {
  $.ajax({
    method: 'POST',
    data,
    url,
    success:function(){},
    error():function(){}
  });
}



app.get('/api/posts/:id/commentaires',(req,res)=>{
    const post=Post.findById(req.params.id);
    if(!post) return res.json("Not found").status(404);
    const commentaires=Comments.find({post_id:post.id});
    return res.send({
        post,
        commentaires
    })
})
