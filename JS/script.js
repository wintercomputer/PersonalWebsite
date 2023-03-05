
function deleteColour(){
    var colour = document.getElementById('colourSelector');
    
    alert("Removed colour " + colour.value);
    colour.remove(colour.selectedIndex);
}

function addColour(){
// colour to jest cały select
// input to wartość wpisana w pole
    var colour = document.getElementById('colourSelector');
    var input = document.getElementById('colourName').value;

// tworzenie element nowego
    var newColour = document.createElement("option");

// zamiana tekstu wpisanego na TextNode 
    var newColourName = document.createTextNode(input);

// dodanie wartości z tetu wspisanego zamienionego na TextNode do nowego elementu
    newColour.appendChild(newColourName);

// dodanie nowego elementu na przedostatnie miejsce w całym select'cie
    colour.insertBefore(newColour, colour[colour.length - 1]);

}

function changeBackground(){
    var selectedColour = document.getElementById('colourSelector').value;
    var frameBackground = document.getElementById('tester');
    
    var text = frameBackground.querySelector('p');
    
    text.style.backgroundColor = selectedColour;
    frameBackground.style.backgroundColor = selectedColour;
    

    var frame = document.getElementById('mainFrame');

    if(frame.contains(frame.querySelector('h3'))){
        var title = frame.querySelector('h3');
        var titleText = title.value;

        titleText = "Selected Colour is " + selectedColour;
        
        title.innerText = titleText;
    }else{
        var newH3 = document.createElement("h3");
        var newH3Name = document.createTextNode("Selected Colour is " + selectedColour);
    
        newH3.appendChild(newH3Name);
    
        frame.prepend(newH3);

    }

}