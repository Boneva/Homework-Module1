
    //create a time data function
    function currentTime() {
        //Declare variables
        var d = new Date(); // Get current date
        var hr = d.getHours(); //Get current hours
        var min = d.getMinutes (); //Get current minutes
        var sec = d.getSeconds (); //Get current seconds
        var ampa; //Declare empty variable to store AM or PM
        var utchr = d.getUTCHours();
        var timeDiff;
        var AdjTimeDiff;
        var timeZone;


                //Add 0 to single digit for seconds
        if (sec < 10) {
            sec = "0"+ sec;
        } 
        if (min < 10) {
            min = "0"+ min;
        } 

        //Determine AM or PM string
        if (hr == 12) {
            ampa = "PM" ; //Set to PM
        } else if (hr > 12) {
            hr -= 12; //Deduct 12 from hour grater than 12 (military time)
            ampa = "PM"; //Set to PM
        } else {
            ampa = "AM"; //set to AM
        }

        //Assemble time format to display
        var time = hr + ":" + min + ":" + sec + " " + ampa;
        console.log({time})
        //Display current local time and time zone on HTML elements
        document.getElementById("clock").innerText = time ; //adding time
    
        //Run time data function every 1 second
        setInterval(currentTime,1000); //Setting timer
    }


    
    //Initial run of time data function
    currentTime();
