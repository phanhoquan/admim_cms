/** @format */

$(document).ready(function () {
  var max_input = 100;
  var x = 1;
  //add CID Parameter
  $(document).on("click", ".btnAddFiled", function (e) {
    // var targetHtml = e.target;
    // var idTarget = $(targetHtml).attr("data-id");
    var randomIDField = Math.round(Math.random() * 36 ** 12).toString(36);
    if (x < max_input) {
      x++;
      var html =
        '<div class="row parameter-cid-first" id="parent_parameter_cid_' +
        randomIDField +
        '" data-id="' +
        randomIDField +
        '">' +
        '<div class="col-lg-4 col-md-5 col-sm-6 col-12">' +
        '<div class="form-group pt-0">' +
        '<div class="d-flex align-items-center hasActions">' +
        '<input type="text" name="parameter_cid[]" id="parameter_cid_' +
        randomIDField +
        '" required class="form-control input-solid" placeholder="Custom field">' +
        '<div class="groupActions d-flex align-items-center">' +
        '<div type="button" class="btnAddFiled mr-0 groupActions__item">' +
        '<i class="la la-plus-circle la-2x"></i>' +
        "</div>" +
        '<div type="button" class="btnRemoveFiled groupActions__item">' +
        '<i class="la la-minus-circle la-2x"></i>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
      $("#item_parent_parameter_cid").append(html);
    }
  });
  //remove CID Parameter
  $(document).on("click", ".btnRemoveFiled", function () {
    $(this).parents(".parameter-cid-first").remove();
  });
});
