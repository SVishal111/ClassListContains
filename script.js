console.log("Hello, World!");

var main = document.getElementById("main");
var main1 = document.getElementById("main");

var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn");

var heroSection1 = document.getElementById("heroSection");

var checkbtn = document.getElementById("checkbtn");

btn.addEventListener("click", function() {
    main1.classList.toggle("main2");
    btn1.classList.toggle("btn2");
    heroSection1.classList.toggle("heroSection2");
});

checkbtn.addEventListener("click", function() {
    let x = main.classList.contains("main2");
    if(x==1) {
        alert("This Theme Contains 'main2' Class");
    }
    else {
        alert("This Theme does not Contain 'main2' Class A");
    }
});