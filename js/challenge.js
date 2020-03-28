setTimeout(start);
let i = 0;
let num = document.getElementById('counter');
function start() {
setInterval(increase, 1000);
function increase() {
    if (i < 10000000) {
        i++;
        num.innerText = i;
    }
}
}

function addComment() {
    let comment = document.getElementById('comment-input').value
    let list = document.getElementById('list')
    let newComment = document.createElement('p')
    newComment.innerText = comment 
    list.appendChild(newComment)
}
