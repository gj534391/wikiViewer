var usersrch = "";;

function srch() {
  usersrch = document.getElementById("srchtxt").value;
  usersrch = usersrch.trim().replace(/\s+/g, '%20');
};

$(document).ready(function() {
  $("#serch").click(function() {
    $("#reslt").empty();
    srch();
    var jdat = $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + usersrch + "&format=json&callback=?", function(response) {
      jdat = response;
      var resltHTML = "";
      $.each(jdat.query.search, function(i, title) {
        resltHTML = "<div id='resltbx'><a href='https://en.wikipedia.org/wiki/" + jdat.query.search[i].title + "' target='_blank'><h3>" + jdat.query.search[i].title + "</h3><p>" + jdat.query.search[i].snippet + "</p></a></div>";        $("#reslt").append(resltHTML);
      });
    });
  });
});