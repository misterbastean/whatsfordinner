$(document).ready(function() {
  let mealIndex = 1;
  $('#addInput').on('click', function() {
    console.log('fired');
    const mealHtml = `
    <div class="row my-2">
      <div class="col-5">
        <input class="form-control" type="text" name="meals[${mealIndex}][name]" autofocus>
      </div>
      <div class="col-6">
        <input class="form-control" type="text" name="meals[${mealIndex}][link]" placeholder="https://www.link-to-recipe.com">
      </div>
      <div class="col-1">
        <button type="button" class="btn btn-danger delete-btn" style="width: 100%;">X</button>
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
