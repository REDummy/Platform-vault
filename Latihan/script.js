function login() {
  // Ambil data username dan password dari form
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Baca file data.txt menggunakan FileReader
  var fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "text/plain";
  fileInput.onchange = function() {
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      var data = event.target.result;
      // Cek apakah username dan password cocok dengan data di file
      if (data.trim() === username + "," + password) {
        window.location.href = "sukses.html";
      } else {
        alert("Username atau password salah");
      }
    };
    reader.readAsText(file);
  };
  fileInput.click();
}