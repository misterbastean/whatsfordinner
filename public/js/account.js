$(document).ready(function() {
  $('#addButton').click(function() {
    $(this).closest('form').attr('action', '/favorites_calendar');
  });
  $("#deleteButton").click(function() {
    $(this).closest('form').attr('action', '/favorites_delete');
  });
});
