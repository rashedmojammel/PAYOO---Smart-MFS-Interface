console.log("added js")

document.getElementById("login-btn").addEventListener("click",function(){

    const NumberInput = document.getElementById("number-input")
    const Number = NumberInput.value;
    console.log(Number)

    const PinInput = document.getElementById("input-pin")
    const pin = PinInput.value;
    console.log(pin)

    if( Number !== "" && pin !== ""){
        alert("Login Succesfull!");
        window.location.assign("/home.html")
        //window.location.replace("/home.html");

    }
    else
    {
        alert("Login failed!")
        return ;
    }
})