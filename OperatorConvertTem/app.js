    // Formula is given 

    //  F = (1.8 * C) +  32;

    // Where,
     /*  F = Temperature in Fahrenheit;

        C = Temperature in   Celsius);
        */

        //var F= 212;
        //var C= 90;

        
// 1.Converts Degree into Fahrenheit


        function degreeToFahrenheit(celsius) 
        {
          var degreeTemp = celsius;
          var degreeToFahrenheit = degreeTemp * 1.8 + 32;
          var temperature = (degreeTemp +'C is ' + degreeToFahrenheit + ' F');
            console.log(temperature);
            alert("This is degree convert to fahrenheit ")
        }
//     2. Converts Fahrenheit into Degree 

        
        function fahrenheitTodegree(fahrenheit) 
        {
          var fahrenheitTemp = fahrenheit;
          var fahrenheitTodegree = (fahrenheitTemp - 32) * 0.55;
          var temperature = (fahrenheitTemp +'F is ' + fahrenheitTodegree + 'C');
            console.log(temperature);
            alert("And this is fahrenheit to degree");
        } 
        degreeToFahrenheit(90);
        fahrenheitTodegree(212);
        