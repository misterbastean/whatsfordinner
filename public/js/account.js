$(document).ready(function() {
  $('#addButton').click(function() {
    $(this).closest('form').attr('action', '/favorites_calendar');
  });
  $("#deleteButton").click(function() {
    const conf = confirm("Are you sure you want to delete these meals? This CANNOT be undone!")
    if (conf) {
      $(this).closest('form').attr('action', '/favorites_delete').unbind("submit");
    } else {
      $(this).closest('form').submit(function (e) {
        e.preventDefault();
      })
    }
  });
});
