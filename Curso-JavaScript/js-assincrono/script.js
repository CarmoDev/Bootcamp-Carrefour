function ajax_get(url, callback) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function changeCat() {
  ajax_get(
    "https://api.thecatapi.com/v1/images/search?size=full",
    function (data) {
      let html = `<img src="${data[0]["url"]}"  width="500px" height="500px">`;
      document.getElementById("cat").innerHTML = html;
    }
  );
}
changeCat()

document.getElementById('change-cat').addEventListener('click', changeCat)
