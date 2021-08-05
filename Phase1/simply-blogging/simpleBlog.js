function makePost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let link = document.getElementById("link").value;
    posts = JSON.parse(localStorage.getItem("posts") || "[]");
    let post = {ti:title, ct:content, li:link};
    console.log(JSON.stringify(post));
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    displayPosts();
}

function displayPosts() {
    let postArr = JSON.parse(localStorage.getItem("posts"));
    var postCard="";
    var postTop = "<div class=\"container\"><div class=\"row\">";
    postArr.forEach(post=>{
        postCard += "<div class=\"col-4\"> <div class=\"card mb-3\"> <div class=\"card-body\"> <h4 class=\"card-title\">" + post.ti + "</h4>" + post.ct + "<img class=\"card-img-bottom\" src=\"" + post.li +"\">" + "</div></div></div>";
        //let imageObj = "<img src=\"" + post.li + "\" class=\"img-fluid\" alt=\"Responsive image\">";        
        //postContnt = post.ti + " " + post.ct + " " + imageObj + "<br>";
    })
    var postBot = "</div></div>"
    var postContent = postTop + postCard + postBot;
    document.getElementById("main").innerHTML=postContent;
}