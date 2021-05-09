/** @format */

$(document).ready(function () {
  function customSelect(classSelect1) {
    // Js custom select
    $(classSelect1).each(function () {
      var $this = $(this),
        numberOfOptions = $(this).children("option").length;

      $this.addClass("select-hidden");
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      var $styledSelect = $this.next("div.select-styled");
      $styledSelect.text($this.children("option").eq(0).text());

      var $list = $("<ul />", {
        class: "select-options",
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
        $("<li />", {
          text: $this.children("option").eq(i).text(),
          rel: $this.children("option").eq(i).val(),
        }).appendTo($list);
      }

      var $listItems = $list.children("li");
      $styledSelect.click(function (e) {
        e.stopPropagation();
        $("div.select-styled.active")
          .not(this)
          .each(function () {
            $(this).removeClass("active").next("ul.select-options").hide();
          });
        $(this).toggleClass("active").next("ul.select-options").toggle();
      });

      $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass("active");
        $this.val($(this).attr("rel"));
        $list.hide();
      });

      $(document).click(function () {
        $styledSelect.removeClass("active");
        $list.hide();
      });
    });
  }

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
        '<input type="text" name="parameter_cid[' +
        randomIDField +
        '][]" id="parameter_cid_' +
        randomIDField +
        '" required class="form-control input-solid" placeholder="Custom field">' +
        "</div>" +
        "</div>" +
        '<div class="col-lg-5 col-md-6 col-sm-6 col-12">' +
        '<div class="form-group pt-0">' +
        '<div class="d-flex align-items-center hasActions">' +
        '<input type="text" name="text_field[' +
        randomIDField +
        '][]" id="text_field_parameter_cid_' +
        randomIDField +
        '" class="form-control input-solid" required placeholder="Text field">' +
        '<div class="groupActions d-flex align-items-center">' +
        '<div type="button" class="btnAddFiled mr-0 groupActions__item" data-id="' +
        randomIDField +
        '">' +
        '<i class="la la-plus-circle la-2x" data-id="' +
        randomIDField +
        '"></i>' +
        "</div>" +
        '<div type="button" class="btnRemoveFiled groupActions__item" data-id="' +
        randomIDField +
        '">' +
        '<i class="la la-minus-circle la-2x" data-id="' +
        randomIDField +
        '"></i>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
      $("#item_parent_parameter_cid").append(html);
    }
  });

  $(document).on("click", ".btnAddConditionLogic", function (e) {
    var randomIDField = Math.round(Math.random() * 36 ** 12).toString(36);
    if (x < max_input) {
      x++;
      var html =
        '<div class="row itemConditionLogic" data-id="' +
        randomIDField +
        '" id="itemConditionLogic_' +
        randomIDField +
        '">' +
        '<div class="col-md-4 col-sm-6 col-12">' +
        '<div class="form-group pb-0 pr-0">' +
        '<select class="form-control input-solid fw-normal customSelect1_' +
        randomIDField +
        '" name="select1[' +
        randomIDField +
        '][]">' +
        '<option value="0">utm_source</option>' +
        '<option value="1">utm_source 01</option>' +
        '<option value="2">utm_source 02</option>' +
        '<option value="3">utm_source 03</option>' +
        '<option value="4">utm_source 04</option>' +
        "</select>" +
        "</div>" +
        "</div>" +
        '<div class="col-md-4 col-sm-6 col-12">' +
        '<div class="form-group pb-0 px-0">' +
        '<select class="form-control input-solid fw-normal customSelect1_' +
        randomIDField +
        '" name="select2[' +
        randomIDField +
        '][]">' +
        '<option value="0">is</option>' +
        '<option value="1">utm_source 01</option>' +
        '<option value="2">utm_source 02</option>' +
        '<option value="3">utm_source 03</option>' +
        '<option value="4">utm_source 04</option>' +
        "</select>" +
        "</div>" +
        "</div>" +
        '<div class="col-md-4 col-sm-6 col-12">' +
        '<div class="form-group pb-0 px-0">' +
        '<div class="d-flex align-items-center hasActions">' +
        '<input type="text" name="title[' +
        randomIDField +
        '][]" class="form-control input-solid" required placeholder="Enter a value">' +
        '<div class="groupActions d-flex align-items-center">' +
        '<a class="btnAddConditionLogic groupActions__item mr-0" href="javascript:void(0)">' +
        '<i class="la la-plus-circle la-2x"></i>' +
        "</a>" +
        '<a class="btnRemoveConditionLogic groupActions__item" href="javascript:void(0)">' +
        '<i class="la la-minus-circle la-2x"></i>' +
        "</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
      $("#listConditionLogic").append(html);
    }
    customSelect(`.customSelect1_${randomIDField}`);
  });

  //remove CID Parameter
  $(document).on("click", ".btnRemoveFiled", function () {
    $(this).parents(".parameter-cid-first").remove();
  });
  //remove item Condition Logic
  $(document).on("click", ".btnRemoveConditionLogic", function () {
    $(this).parents(".itemConditionLogic").remove();
  });
  var stt = 1;
  function htmlCIDParameter(idParent) {
    stt++;
    var html_CIDParameter =
      "<!--Item CIDParameter -->" +
      '<div class="row parameter-cid-first" id="parent_parameter_cid_' +
      idParent +
      '" data-id="' +
      idParent +
      '">' +
      '<div class="col-lg-4 col-md-5 col-sm-6 col-12">' +
      '<div class="form-group pt-0">' +
      '<input type="text" name="parameter_cid[' +
      idParent +
      '][]" id="parameter_cid_' +
      idParent +
      '" required class="form-control input-solid" placeholder="Custom field">' +
      "</div>" +
      "</div>" +
      '<div class="col-lg-5 col-md-6 col-sm-6 col-12">' +
      '<div class="form-group pt-0">' +
      '<div class="d-flex align-items-center hasActions">' +
      '<input type="text" name="text_field[' +
      idParent +
      '][]" id="text_field_parameter_cid_' +
      idParent +
      '" class="form-control input-solid" required placeholder="Text field">' +
      '<div class="groupActions d-flex align-items-center">' +
      '<div type="button" class="btnAddFiled mr-0 groupActions__item" data-id="' +
      idParent +
      '">' +
      '<i class="la la-plus-circle la-2x" data-id="' +
      idParent +
      '"></i>' +
      "</div>" +
      '<div type="button" class="btnRemoveFiled groupActions__item" data-id="' +
      idParent +
      '">' +
      '<i class="la la-minus-circle la-2x" data-id="' +
      idParent +
      '"></i>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    $("#item_parent_parameter_cid").append(html_CIDParameter);
  }

  $("form").submit(function (e) {
    e.preventDefault();
    // var data = $(this).serializeFormJSON();
  });
});
