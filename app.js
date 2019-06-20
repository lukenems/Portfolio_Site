let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(){
    console.log('Server running at port 3000: http://127.0.0.1:3000');
});
 
app.get('/', function(request, response){
    response.sendFile('/index.html');
});
