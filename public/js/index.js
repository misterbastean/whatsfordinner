$(document).ready(() => {
  let mealIndex = 10;
  $('#addInput').on('click', () => {
    const mealHtml = `
    <div class="row mt-2">
      <div class="col-9">
        <input class="form-control" type="text" name="meals[${mealIndex}][name]">
      </div>
      <div class="col-2">
        <input class="form-control" type="number" name="meals[${mealIndex}][quantity]" value="1">
      </div>
      <div class="col-1">
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
