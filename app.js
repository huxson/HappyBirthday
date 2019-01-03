var count = 0;
var birthday = function() {
    count += 111
    console.log("HAPPY BIRTHDAY!!!")
    $("#counter").text(count)
    $("#box").append(" Happy Birthday!!!")
}
setInterval(birthday, 1)
