
const postButton = document.getElementById('postButton');
const commentID = document.getElementById('new_comment');
const authorID = document.getElementById('author');
let commentString = document.getElementById("container").innerHTML;
const avatarURL = document.getElementById("avatar_url");
const imgID = document.getElementById("imgID");

document.addEventListener("DOMContentLoaded", function(){
    if (localStorage.getItem('author')){
        authorID.value=localStorage.getItem('author')
    }

    if (localStorage.getItem('avatar')){
        imgID.src = localStorage.getItem('avatar');
    }

    if (localStorage.getItem('comments')){
        document.getElementById("container").innerHTML = localStorage.getItem('comments');
        commentString = localStorage.getItem('comments');
    }
});

postButton.addEventListener('click', validateBeforePost);
avatarURL.addEventListener('keypress',function(e){
    if(avatarURL.value){
        if(e.keyCode === 13){
            imgID.src = avatarURL.value;
            localStorage.setItem('avatar', avatarURL.value);
        }
    }
    else{
        alert('Введите URL на аватарку');
    }
});

document.getElementById('setPic').addEventListener('click', function(){
    if(avatarURL.value){
        imgID.src = avatarURL.value;
        localStorage.setItem('avatar', avatarURL.value);
    }
    else{
        alert('Введите URL на аватарку');
    }
});

function validateBeforePost(){
    if (!(authorID.value)){
        alert('Введите свое имя');
    }else if (!(commentID.value)){
        alert('Введите комментарий')
    }else{
        postComment();
    }
}

function postComment(){
    const new_comment = checkSpam(commentID.value);
    const author = authorID.value;

    localStorage.setItem('author',authorID.value);

    commentString = commentString + `<div class="comment_div"><span>${new_comment}</span></div><div><img src="${localStorage.getItem('avatar')}" class = "small_img"><span>${localStorage.getItem('author')}</span></div>`;
    document.getElementById("container").innerHTML = commentString;

    localStorage.setItem("comments",commentString);

    commentID.value=null;
}

function checkSpam(str){
    return str.replace(/viagra|xxx/i,"***");
    
}
