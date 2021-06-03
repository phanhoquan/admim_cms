/** @format */
jQuery.browser = {
  msie: false,
  version: 0,
};

$(document).ready(function () {
  // Drag row table

  $("#tableDragAndDrop").each(function () {
    // Drag and drops list image
    $("#tableDragRow").sortable({
      animation: 150,
      axis: "y",
      dropOnEmpty: false,
      start: function (event, ui) {
        // console.log(event, ui, "eventeventevent");
      },
      stop: function (e, ui) {
        $(this)
          .find(".table_row")
          .each(function (index) {
            $(this)
              .find(".td input.form-control")
              .val(index + 1);
          });
      },
    });
    //End Drag and drops list image
  });
});
