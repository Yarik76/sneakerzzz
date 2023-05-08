const progress = document.querySelector ('.progress_bar')
function progressBar () {
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scroll / height * 100;
    // document.getElementById('progressBarr').style.width = scrolled + '%';
    progress.style.width = scrolled + '%';
}   
window.addEventListener('scroll', progressBar);
console.log (document.documentElement.clientHeight);
console.log (document.documentElement.scrollHeight);
