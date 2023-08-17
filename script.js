        var number=Math.round(Math.random()*100 +1);
        var count=0;

        function reset(){
            location.reload();
        }

        function myFunction() 
        {
        let guess=document.getElementById("guess").value
        let para=document.getElementById("para")

        if(guess>number)
        {
            para.innerHTML="Too Big Bud"
            count++;
        }
        else if(guess<number)
        {
            para.innerHTML="Too Low Bud"
            count++;
        }
        else
        {
            para.innerHTML="Right Guess Buddy.You Win!!! Lets try a new Game"
            setTimeout(() => {
                reset()
            }, 2000);
           
        }
        
        // for focusing on the the textbox after typing a number
        document.getElementById("guess").focus();
        document.getElementById("guess").select();  
        }
    