function change(){
const quotes = [
    "Great things never come from comfort zones.",
    "If you want to achieve greatness stop asking for permission.",
    "You don’t have to be great to start, but you have to start to be great.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Believe you can and you're halfway there.",
    "Opportunities don't happen, you create them.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Do what you can, with what you have, where you are.",
    "Act as if what you do makes a difference. It does.",
    "Dream big and dare to fail.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "You miss 100% of the shots you don’t take.",
    "What we think, we become.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t wait. The time will never be just right.",
    "The best way to predict the future is to create it."
  ];

const obj1 = document.getElementById('root');
const change = document.getElementById('hola');
const index = Math.floor(Math.random()*quotes.length);
change.innerHTML=quotes[index];
}
setInterval(change,2000);

function colors(){
    const colors = [
        "rgb(240, 137, 206)",
        "rgb(174, 57, 185)",
        "rgb(151, 95, 46)",
        "rgb(210, 188, 123)",
        "rgb(79, 54, 32)",
        "rgb(99, 157, 66)",
        "rgb(68, 28, 187)",
        "rgb(216, 39, 212)",
        "rgb(64, 143, 46)",
        "rgb(176, 175, 41)"
      ];
    const obj = document.getElementById('root');
    const index = Math.floor(Math.random()*colors.length);
    obj.style.backgroundColor=colors[index];
    obj.style.color="white";
    obj.style.fontFamily="Agdasima";
    obj.style.fontSize="1.5rem";
}
setInterval(colors,2000);