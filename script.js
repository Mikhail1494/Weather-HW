var APIKey ="22846e553c88c047e3b923152323191b"
$("#ok").on("click", function(){
    //var location = document.querySelector(".yorLocation").value;
    localStorage.setItem('locationPicks', location);
    var city = $("#yourLocation").val();
    console.log(city)
    $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather',
        dataType:'json',
        //url:' http://openweathermap.org/img/wn/10d@2x.png',
        method: "GET",
        data: {q:city, appid: APIKey, units: 'metric'},
       
       
        success: function(data){
            var weather ='';
            $.each(data.weather, function(index,val){
                weather += '<p><b>' + data.name + "</b><img src=" + val.icon + ".png></p>"+ data.main.temp + '&deg;C' + '|' + val.main + "," +val.descripription
            });
            $("#weatherForecast").html(weather);

        }
    })

});