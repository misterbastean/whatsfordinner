$(document).ready(function() {
  let mealIndex = 10;
  $('#addInput').on('click', function() {
    const mealHtml = `
    <div class="row mt-2">
      <div class="col-7">
        <input class="form-control" type="text" name="meals[${mealIndex}][name]">
      </div>
      <div class="col">
        <input class="form-control" type="number" name="meals[${mealIndex}][quantity]" value="1">
      </div>
      <div class="col">
        <button type="button" class="btn btn-danger" class="delete-btn">X</button>
      </div>
    </div>
    `
    $('#meal-container').append(mealHtml);
    mealIndex++;
  })

  $('body').on('click', '.delete-btn', function() {
    $(this).parent().parent().remove();
  })
})
