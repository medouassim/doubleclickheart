var img = document.getElementById('img-container');
var times = document.getElementById('times');
var i = 0;
img.addEventListener("dblclick", e => {
    var x = e.clientX - e.target.offsetLeft;
    var y = e.clientY - e.target.offsetTop;
    var heart = document.createElement("i");
    console.log(x,y)
    heart.classList.add("fas");
    heart.classList.add("fa-heart");

    
    heart.style.top = `${y}px`;
    heart.style.left = `${x}px`;
    i++;
    times.innerHTML = i;
    img.appendChild(heart);
    img.style.background = "url('https://source.unsplash.com/random/300x450')";
})