<script>
    function store(){
      var inputEmail= document.getElementById("email");
      localStorage.setItem("email", inputEmail.value);
      var inputPass= document.getElementById("pass");
      localStorage.setItem("pass", inputPass.value);
        retrive()
    }

    function retrive() {
        var d1= localStorage.getItem(inputEmail);
        var d2= localStorage.getItem(inputPass);
        var show= [d1, d2];
        alert(show);
        
    }
    


    
</script>