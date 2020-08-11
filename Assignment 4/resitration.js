function error() {
    var userid = document.getElementById('userid');
    if (userid.value.length > 12 || userid.value.length < 5) {
        document.getElementById('usererror').innerHTML = "Lenght must be in 5 to 12";
    }
    var pass = document.getElementById('password');
    if (pass.value.length > 12 || pass.value.length < 7) {
        document.getElementById('passerror').innerHTML = "Lenght must be in 7 to 12";
    }
    var letter = /^[A-Za-z]+$/;
    var name = document.getElementById('name');
    if (name.value.match(letter)) {
    }
    else {
        document.getElementById('nameerror').innerHTML = "Please Enter the alphabetic value";
    }

    var country = document.getElementById('country');
    if(country.value == "")
    {
        document.getElementById('countryerror').innerHTML = "Required";
    }

    var number = /^[0-9]+$/;
    var zipcode = document.getElementById('zipcode');
    if(zipcode.value.match(number)){}
    else{
        document.getElementById('zipcodeerror').innerHTML="zipcode must be numeric";
    }
   
    

    var radios = document.getElementsByName("sex");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) 
    document.getElementById('sexerror').innerHTML = "Please select";



    var lan=document.getElementsByName('lan');
    var check = false;
    var i=0;
    while(i < lan.length)
    {
        if(lan[i].checked)
        {
            check = true;
            break;
        }
        i++;
    }
     if(!check)
     {
         document.getElementById('lanerror').innerHTML = "Please Entee check check box";
     }
}