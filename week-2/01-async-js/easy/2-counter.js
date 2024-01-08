// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var count = 0;
const displayTime = () => {
       count++;
       console.log(count);
       if(count<10)
       {
        setTimeout(displayTime, 1000)
       }
}

displayTime();






































































// (Hint: setTimeout)