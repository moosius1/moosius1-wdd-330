// Close buttons that are added to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// close button for each list item this actually hides the content
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.className ="unchecked";
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close " ;
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



    
   
    
    
  
    /*Functions for hiding and showing completed list items*/

    function toggleMenu() {
        document.getElementsByClassName("checked")[0].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[1].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[2].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[3].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[4].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[5].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[6].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[7].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[8].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[9].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[10].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[11].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[12].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[13].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[14].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[15].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[16].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[17].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[18].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[19].classList.add("HideCompleted");
        document.getElementsByClassName("checked")[20].classList.add("HideCompleted");
        
    }

    function toggleBack() {
        document.getElementsByClassName("checked")[0].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[1].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[2].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[3].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[4].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[5].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[6].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[7].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[8].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[9].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[10].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[11].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[12].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[13].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[14].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[15].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[16].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[17].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[18].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[19].classList.remove("HideCompleted");
        document.getElementsByClassName("checked")[20].classList.remove("HideCompleted");
        
        
    }

