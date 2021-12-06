$(document).ready(function () {
  setInterval(function () {
    $(".slider ul").animate({ marginLeft: -1200 }, 400, function () {
      $("li:first-child", this).appendTo($(this));
      $(this).css("margin-left", 0);
    });
  }, 3000);

  $(".open").click(function () {
    $(".modal").fadeIn("active");
  });
  $(".close").click(function () {
    $(".modal").fadeOut("active");
  });
});
