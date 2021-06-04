function bookfocus() {
  var element = document.getElementById("myDIV");
  var bookelement = document.getElementById("productWidget");
  //var height=document.getElementById('bodyxx').clientHeight;
  //element.style.height = height;
  bookelement.classList.add("book-focus");
  element.classList.add("home-page-widget-overlay");
  bookelement.focus();
}
function bookfocusremove() {
  var element = document.getElementById("myDIV");
  var bookelement = document.getElementById("productWidget");
  element.classList.remove("home-page-widget-overlay");
  bookelement.classList.remove("book-focus");
}
function opench() {
  var element = document.getElementById("guests-input-btn");
  var bookelement = document.getElementById("guests-input-options");
  //var height=document.getElementById('bodyxx').clientHeight;
  //element.style.height = height;
  bookelement.classList.add("open");
  element.classList.add("open");
  bookelement.focus();
}
function openchremove() {
  var element = document.getElementById("guests-input-btn");
  var bookelement = document.getElementById("guests-input-options");
  element.classList.remove("open");
  bookelement.classList.remove("open");
}
function qtds(){
  var qt=document.getElementById("quoteds");
  var bk=document.getElementById("bookds");
  qt.classList.remove("hidden");
  bk.classList.add("hidden");
  qt.scrollIntoView();
}
function bkds(){
  var qt=document.getElementById("quoteds");
  var bk=document.getElementById("bookds");

  qt.classList.add("hidden");
  bk.classList.remove("hidden");
  bk.scrollIntoView();
  
}