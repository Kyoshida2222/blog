
var posts = [
  {
    title:"test1",
    body:"祇園精舎の鐘の声、諸行無常の響きあり。"
  },
  {
    title:"test2",
    body:"雪はふりつつ"
  },
  {
    title:"test3",
    body:"Optimization in stochastic model"
  },
]

exports.index = function(req,res){
  res.render('posts/index',{posts: posts});
}
exports.show = function(req,res){
  res.render('posts/show',{post: posts[req.params.id]});
}
exports.new = function(req,res){
  res.render('posts/new');
}
exports.create = function(req,res){
  var post ={
    title: req.body.title,
    body: req.body.body
  };
  posts.push(post);
  res.redirect('/');
}
exports.edit = function(req, res) {
    res.render('posts/edit',{post:posts[req.params.id],id:req.params.id
    });
};
exports.update = function(req, res) {
    posts[req.body.id] = {
        title: req.body.title,
        body: req.body.body
    };
    res.redirect('/');
};

exports.destroy = function(req,res,next){
  if (req.body.id !== req.params.id){
    next(new Error('ID not valid'));
  }else{
  posts.splice(req.body.id, 1);
    res.redirect('/');
}}
