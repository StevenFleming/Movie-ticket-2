function MovieTicket(){
  this.MovieTickets=[];
  this.currentid =0;
}

MovieTicket.prototype.addTicket = function(ticket) {
  MovieTickets.id = this.assignid();
  this.MovieTickets.push(ticket);
}

MovieTicket.prototype.assignid = function() {
  this.currentid +=1;
  return this.currentid;
}

function Ticket(title, time){
  this.title = title;
  this.time = time;
}

function Person(age){
this.age = age;
}
// function atLeastOneRadio() {
//   return ($('input[type=radio]:checked').size() > 0);
// }

// User Interface Logic

var MovieTicket = new MovieTicket();
// code not complete 
$(document).ready(function(){
  $("button").click(function(){
  $("input#movie-details").sumbit(function(event){
  event.preventDefault();
  var inputMovieName =$("inputmovieType").val();
  var inputTime =$("input#timechoice").val();
  var inputAge =$("input#age").val();
  })
})
})