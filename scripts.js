
const postButton = document.getElementById('postButton');
const commentID = document.getElementById('new_comment');
let commentString = document.getElementById("container").innerHTML;

postButton.addEventListener('click', postComment);


function postComment(){
    const new_comment = checkSpam(commentID.value);

    console.log(checkSpam("tet xxx"));

    commentString = commentString + `<div class="comment_div"><span>${new_comment}</span></div>`;
    document.getElementById("container").innerHTML = commentString;

    commentID.value=null;
}

function checkSpam(str){
    return str.replace(/viagra|xxx/i,"***");
    
}
