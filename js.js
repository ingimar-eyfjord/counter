const count = [];
let i = 0;
setInterval(function() {
  if (count.length < 9) {
    count.unshift(i++);
    console.log(count);
  }
}, 1000);
