$(document).ready(function() {
  $("#getQuote").on("click", function() {
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json?callback=?", function(data) {
      $("#quote-content").html(data.quote + "<br>" + "-" + "<strong>" + data.author + "</strong>");
    });
  });
  $("#getTweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + $("#quote-content").text());
  });

});
