//To create a focus event in jQuery, we write code like this:

$("textarea").focus(function () {
    $("textarea#textId").css("display", "none");
});

//Telling the browser to automatically focus on something.

$("#focusHere").click(function () {
    $("#inputFocus").focus();
});

//To blur is to unfocus. It is also used on elements that can be activated (or selected.)

$("#inputThenBlur").focus(function () {
    $(this).blur();
});