
var downX = 0;
var downY = 0;
var countClicks = 0; 

$("#gestureArea").click(function(event) {
	countClicks++;
	if(countClicks == 3){
		$("#gestureClickResult").text("Three Clicks");
		countClicks = 0; 
	}
	else{
		$("#gestureClickResult").text("Clicks");
	}

});

$("#gestureArea").mousedown(function(event) {
    downX = event.pageX;
    downY = event.pageY;

    $("#gestureResult").text("mouse down");
});

$("#gestureArea").mouseup(function(event) {
    upX = event.pageX;
    upY = event.pageY;
    if(upX < downX) {
        $("#gestureResult").text("swipe left");
    }
    else if(upX > downX) {
        $("#gestureResult").text("swipe right");
    }
    else if(upX == downX) {
        $("#gestureResult").text("mouse up");
    }       
});

































