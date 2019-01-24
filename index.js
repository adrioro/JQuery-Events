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
    $(this).blur(); //No matter how many times I click, it does not select the text area.
});

//Hover

//$("selector").hover(function() {}, function() {});

$("#myButton").hover(
    function () {
        $(this).css("border", "1px solid red");
    },
    function () {
        $(this).css("border", 0);
    });

//Keys

// .keydown() .keypress() .Keyup()

$("#keyTextArea").keypress(function () {
    alert("Key was pressed");
});

//Mouse

/*
.mousedown() HTML Attribute: OnMouseDown=""
.mouseup() HTML Attribute: onMouseUp=""
.mouseover() HTML Attribute: onMouseOver=""
.mouseenter() No HTML Attribute
.mouseleave()
.mousemove() HTML Attribute: onMouseMove=""
*/
$("#mouseEvent").mousedown(function () {
    alert("Handler for .mousedown() called.");
});
//$("#mouseEvent").mousedown(function () {
//$(this).append("Mouse Down.");
//});
$("#mouseEventTextArea").mouseup(function () {
    $(this).append("Mouse Up.");
});

//Toggle
$("#buttonToggle").click(function () {
    $(this).next().toggle();
});