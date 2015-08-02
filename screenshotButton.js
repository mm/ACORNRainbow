var colours = {
    class1: "hsl(15, 55%, 50%)",
    class2: "hsl(80, 50%, 40%)",
    class3: "hsl(10, 62%, 30%)",
    class4: "hsl(210, 55%, 50%)",
    class5: "hsl(250, 30%, 51%)",
    class6: "hsl(330, 45%, 50%)"
}

var timetable = document.querySelector('div.timetable table.sched');
var header = document.querySelector('div.timetable td.sectionHeader');
var button = document.createElement("BUTTON");
button.id = "screenshotButton";
var buttonText = document.createTextNode("Export as Image");
var instructions = document.createTextNode("Right-click > Save Image as");
var instructionsContainer = document.createElement("SPAN");
instructionsContainer.id = "instructionsContainer";

instructionsContainer.appendChild(instructions);
button.appendChild(buttonText);
header.appendChild(button);

var fixStyles = function() {
    for (var i = 1; i < 7; i++){
        var className = 'class'+i;
        var objects = document.getElementsByClassName(className);
        for (var j = 0; j < objects.length; j++){
            objects[j].style.backgroundColor = colours[className];
            objects[j].style.fontFamily = "sans-serif";
        }
    }
}
var exportImage = function(){
    fixStyles();
    html2canvas(timetable, {
        onrendered: function(canvas) {
            // Add text with instructions
            header.appendChild(instructionsContainer);
            // Show the screenshot
            canvas.style.border = "solid #38a7c0 5px";
            header.appendChild(canvas);
            // Remove the button
            button.remove();
        }
    });
};
// Add the button to the DOM
// TODO: is this selector unique enough?

button.onclick = exportImage;
