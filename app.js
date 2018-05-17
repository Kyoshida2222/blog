var express = require('express'),
    app = express();
    bodyParser = require('body-parser');
    post = require('./routes/post');
    methodOverride = require('method-override')


app.set('views',__dirname + '/views')  ;
app.set('view engine','ejs');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    console.log('routing is moving, moving.');
    next();
});
// routing
app.get('/', post.index);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id/',post.show);
app.get('/posts/:id/edit', post.edit);
app.put('/posts/:id', post.update);
app.delete('/posts/:id', post.destroy);




app.listen(3000);
console.log("server starting...");
