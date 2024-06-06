$("td#pid").removeClass("selectable");

$(document).ready(function() {
$("td#pid").click(function() {
    $(this).toggleClass("selectable");
});

console.log("Script loaded successfully and ready.");
});