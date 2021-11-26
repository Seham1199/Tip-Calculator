
function calculate() {
        var billAmount = document.getElementById("billAmount").value;
        var serviceAmount = document.getElementById("service").value;
        var peopleAmount = document.getElementById("peopleAmount").value;


        if (billAmount === "" || serviceAmount === 0) {
            
            alert("please Enter value");
            return;
        }

        if (peopleAmount === "" || peopleAmount <= 0 ) {
            peopleAmount=1;

            document.getElementById("each").style.display = "none" ;
        }else{
            document.getElementById("each").style.display = "block" ;

        }

          var total = (billAmount * serviceAmount) / peopleAmount ;
          total = Math.round(total * 100)/100 ;
          total = total.toFixed(2);   // only two value after point 

          document.getElementById("totaltip").style.display = "block";
          document.getElementById("tip").innerHTML = total;
             }
          // hidden
          document.getElementById("totaltip").style.display = "none";
          document.getElementById("each").style.display = "none" ;
          document.getElementById("btnClick").onclick = function() {
               calculate();
          }



