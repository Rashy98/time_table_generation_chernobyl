$(document).ready(function(){
    $("#locations").click(function(){
        $("#main").load("Location/ViewLocations.html");
    });

    $("#rooms").click(function(){
        $("#main").load("Location/ViewRoomDetails.html");
    });

});
