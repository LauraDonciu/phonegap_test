var btn = document.getElementById('btn');
btn.onclick = function() {
  var cnr = document.getElementById('counter');
  cnr.innerHTML = cnr.innerHTML*1+1;
}