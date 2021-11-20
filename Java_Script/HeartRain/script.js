function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + '5';
    heart.innerText = ' ❤️  ';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 2500);
}
setInterval(createHeart, 60);

// var data = '0,1,2,3';
// var arr = JSON.parse('[' + data + ']');
// console.log(arr);
// for (const elm of arr) {
//     console.log(elm);
// }
// console.log(typeof arr[0]);

//////

var num = '1234';
var arr = Array.from(data);
// console.log(arr);
console.log(typeof arr[0]);
