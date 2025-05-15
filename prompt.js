let userName = prompt("Enter Your Name?");
let title = `Hello ${userName} Welcome To Our WebPage`;
let height = Number(prompt("Enter Your Height in cm"));
let weight = Number(prompt("Enter Your Weight in kg"));
document.getElementById("h").innerHTML = title;
document.getElementById("p1").innerHTML = `Your Height Is : ${height} cm`;
document.getElementById("p2").innerHTML = `Your Weight Is : ${weight} kg`;
if(weight===1)
    if(weight>70) {
        document.getElementById("para1").innerHTML = "YOUR WEIGHT IS TOO HEAVY TRY TO DECREASE";
    }
    else {
        document.getElementById("para2").innerHTML = "DONT WORRY YOUR HEALTH IS NORMAL"
    }
else {
    alert("Enter Valid Input");
}
