    function btnClicked(){
    alert("DODODODOOD");
    }

    function login(){
        console.log("LogIn");
        let fullName=document.getElementById("en").value + " " + document.getElementById("ln").value;
        let fname=document.getElementById("en").value;
        let lname=document.getElementById("ln").value;
        //console.log(fname + " " + lname);
        document.getElementById("loginInfo").innerHTML=fullName;
    }