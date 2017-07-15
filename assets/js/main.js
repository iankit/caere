function getUsernameParameter(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var phone = getUsernameParameter('user');
document.getElementById("phoneNumber").innerHTML = "+91 " + phone;

function selectId(name) {
  return document.getElementById(name);
}

selectId("handleSubmit").onclick = function(e){
  e.preventDefault();
  var city = selectId("city").value;
  var branch = selectId("branch").value;
  if (city && branch) {
    var dataForm = selectId("dataForm");
    dataForm.innerHTML =
      `<h2>Your registered city: <span>${city}</span></h2>
      <h2>Your registered Branch: <span>${branch}</span></h2>`;
  } else {
    selectId("errorMsg").innerHTML = "Please enter both values."
  }
}

selectId("city").onchange = function() {
  selectId("errorMsg").innerHTML = "";
}
