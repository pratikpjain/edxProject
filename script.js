var slider = document.getElementById("rate");
var output = document.getElementById("demo");
output.innerHTML = "10.5"; 
slider.oninput = function() {
  output.innerHTML = this.value/10.0;
}

window.onload = function () {

    var ddlYears = document.getElementById("years");

    for (var i = 1; i <= 20; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        ddlYears.appendChild(option);
    }

};
function compute()
{
    var amount = document.getElementById("principal");
    var amt = parseInt(amount.value);
    if(amt <= 0) {
      alert("Amount Should be greater than Zero")
      return;
    }
    var rate = document.getElementById("demo");
    var rt = parseFloat(rate.innerText);
    var years = document.getElementById("years");
    var yrs = parseInt(years.value);
    var ans = amt * rt/100 * yrs
    ans = Math.floor(ans);
    var p = document.getElementById("final-result");
    p.innerHTML = "If you deposit <mark>" + amt + "</mark> <br> at an interest rate of <mark>" + rt + "%</mark><br>You will receive an amount of <mark>" + ans + "</mark><br>in the year <mark>" + (2020 + yrs) + "</mark>";
    
}
        
