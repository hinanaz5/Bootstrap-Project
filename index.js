

var btn1 = document.getElementById("btn1");
      var btnText1 = document.getElementById("btnText1");

      btn1.onclick = function(){
        if (document.getElementById("fullname").value.length === 0) {
          fullname.value="Please enter your name";}

          else if (document.getElementById("email").value.length === 0) {
            email.value="Please enter your email";}

            else if (document.getElementById("message").value.length === 0) {
              message.value="Please enter your message";}

        else if ( document.getElementById("fullname").value.length !== 0 && (document.getElementById("email").value.length !== 0) && (document.getElementById("message").value.length !== 0)){
          btnText1.innerHTML = "Thanks"
          btn1.classList.add("active");
        }
      }