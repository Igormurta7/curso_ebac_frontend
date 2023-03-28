$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#nova-tarefa").val();
    const novoItem = $(`<li>${novaTarefa}</li>`);
    $(novoItem).appendTo("ol");
    $("#nova-tarefa").val("");
  });

  $("li").click(function () {
    $(this).addClass("complete-task");
  });
});
