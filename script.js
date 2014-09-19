function load() { 
    var index;
    var list = ["apple", "orange", "banana"];
    for (index=0; index<list.length; index++){
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(list[index]));
        fruits.appendChild(entry);
    }
}

function changeText2() {
    var findmatch = false;
    var index;        
    var fruitList = document.getElementById('fruits');
    var basketList = document.getElementById('basket');
    var pickFruit = document.getElementById('newfruit').value;
    document.getElementById('showfruit').innerHTML = pickFruit;
    
        for (index=0; index<fruitList.childNodes.length; index++){
            
            if (fruitList.childNodes[index].innerHTML == pickFruit){
                 var entry = document.createElement('li');
                 entry.appendChild(document.createTextNode(pickFruit));
                 basketList.appendChild(entry);
                 fruitList.removeChild(fruitList.childNodes[index]);
                 findmatch = true;
                break;
            }           
        }
        if (!findmatch) {
             document.getElementById('showfruit').innerHTML = pickFruit + " is not in the Shelf.";   
            }
}

    