function daysDifference(){  
 //define two variables and fetch the input from HTML form  
  var date1;  
  var dateI2 = document.getElementById("dateInput2").value;  
 //define two date object variables to store the date values  
  var date1 = new Date();  
  var date2 = new Date(dateI2); 
 /*const days = (date1, date2) =>{
    var time_difference = date1.getTime() - date2.getTime();
    var result = Math.ceil(time_difference / (1000 * 3600 * 24));
    alert(days(date1,date2)+"days between both dates");
    }
  }*/ 
//calculate time difference  
 var time_difference = date1.getTime() - date2.setDate();  
//calculate days difference by dividing total milliseconds in a day  
  var result = Math.ceil(time_difference / (1000 * 60 * 60 * 24));  
  return document.getElementById("result").innerHTML =    
  result + " days between both dates."; 
}

   


           /*  let date_1 = new Date();
             let date_2 = document.getElementsByClassName("buttonsField"); //new Date('6/25/2022');
             const days = (date_1, date_2) =>{
                 let difference = date_1.getTime() - date_2.getTime();
                 let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
                 return TotalDays;
             }
             alert(days(date_1, date_2) +"days before you have read books");*/



/*let date_1 = new Date();
let date_2 = document.getElementsByClassName("buttonsField"); //new Date('6/25/2022');
const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
alert(days(date_1, date_2) +"days before you have read books");*/

 // Click on a close button to hide the current list item
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
function check(){list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    alert("Event is checked");
  }
}, false)};


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}