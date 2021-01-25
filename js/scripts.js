$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#user").prepend("<li>THROW THE BALL!</li>");
    $("ul#webpage").prepend("<li>MEOW!</li>");
  });

  $("button#cat").click(function() {
    $("ul#user").prepend("<li>HISSS</li>");
    $("ul#webpage").prepend("<li>WOOF!</li>");
  });
});