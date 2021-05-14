/** @format */

$(document).ready(function () {
  var max_input = 100;
  var x = 1;
  var randomID = Math.round(Math.random() * 36 ** 12).toString(36);
  htmlQuestion(randomID);
  // is_table-no-border_
  $(`#is_table-no-border_${randomID} .max720 input.input-solid`).prop(
    "required",
    true
  );
  //add annswer sub question TODO UPDATE
  $(document).on("click", ".addAnswer", function (e) {
    var targetHtml = e.target;
    var idTarget = $(targetHtml).attr("data-id");
    var randomIDCheckbox = Math.round(Math.random() * 36 ** 12).toString(36);
    var dataType = $(targetHtml).attr("data-type");
    var questionWithImages = $(`#is_with_images${idTarget}`)[0];
    var subQuestionWithImages = $(`#sub_is_with_images${idTarget}`)[0];
    if (dataType === "parent_question") {
      $(this).parents(".first-item-answer").addClass("none-btn-answer");
      if (x < max_input) {
        x++;
        var html = "";
        html += "<div class='table-tbody col-12 pr-0 w-100'>";
        html += '<div class="max720 pr-0 col-lg-4 col-sm-6 col-12 p-0">';
        html += '<div class="d-flex align-items-center mb-3">';
        html += '    <div class="box-checkbox-custom">';
        html += '        <div class="form-group mb0 p10 text-center">';
        html +=
          '<input type="hidden" name="is_answer_check[' +
          idTarget +
          '][]" id="is_answer_hidden_' +
          randomIDCheckbox +
          "_" +
          idTarget +
          '" value="0">';
        html +=
          '           <input type="checkbox"  data-id="' +
          randomIDCheckbox +
          "_" +
          idTarget +
          '" name="is_answer_check[' +
          idTarget +
          '][]" id="is_answer_' +
          randomIDCheckbox +
          "_" +
          idTarget +
          '" class="checkType" data-box="parent_question" data-type="is_answer_check_question">';
        html +=
          '           <label for="is_answer_' +
          randomIDCheckbox +
          "_" +
          idTarget +
          '" class="form-check-sign"></label>';
        html += "        </div>";
        html += "    </div>";
        html +=
          '    <input type="text" name="answer_name[' +
          idTarget +
          '][]" class="form-control input-solid" placeholder="Please input answer...">';
        html += "</div>";
        html += "</div>";
        html +=
          '<div class="col-lg-3 col-sm-4 col-12  mb-3 form-group py-0 withImages  is_question_with_images_' +
          idTarget +
          '" data-id="' +
          idTarget +
          '" data-type="parent_question" data-box="parent_question" style="display:none">';
        html += '                      <div class="upload-btn-wrapper">';
        html += '                        <button class="upload-file">';
        html +=
          '                          <span class="text-upload">Upload a image</span>';
        html +=
          '                          <span class="image-upload"><i class="icon-upload"></i></span></button>';
        html +=
          '                          <input class="file-upload" type="file" id="answer_image_' +
          randomIDCheckbox +
          "_" +
          idTarget +
          '" name="answer_image_' +
          randomIDCheckbox +
          "_[" +
          idTarget +
          ']" />';
        html += "                      </div>";
        html += "                    </div>";
        html += '<a href="javascript:void(0);" class="more-answer mb-3">';
        html += '<i class="la la-plus-circle text-info font-24"></i>';
        html +=
          '<span class="text-btn addAnswer" data-type="parent_question" data-id="' +
          idTarget +
          '">More Answer</span>';
        html += "</a>";
        html +=
          '    <i class=" la la-minus-circle text-danger font-24 removeAnswer" data-type="parent_question"></i>';
        html += "</div>";
        html += "</div>";
        $("#itemsAnswer_" + idTarget).append(html);
      }
      $(`#is_table-no-border_${randomID} .max720 input.input-solid`).prop(
        "required",
        true
      );
      if (questionWithImages && questionWithImages.checked) {
        $(`.is_question_with_images_${idTarget}`).show();
        $(`#is_question_with_images_${randomID} input`).prop("required", true);
      }
    }

    if (dataType === "sub_question") {
      $(this).parents(".first-item-answer").addClass("none-btn-answer");
      if (x < max_input) {
        x++;
        var html = "";
        html += "<div class='table-tbody col-12 pr-0 w-100'>";
        html += '<div class="max720 pr-0 col-lg-4 col-sm-6 col-12 p-0">';
        html += '<div class="d-flex align-items-center mb-3">';
        html += '    <div class="box-checkbox-custom">';
        html += '        <div class="form-group mb0 p10 text-center">';
        html +=
          '<input type="hidden" name="sub_is_answer_check[' +
          idTarget +
          '][]" id="sub_is_answer_hidden_' +
          randomIDCheckbox +
          "_" +
          idTarget +
          '" value="0">';
        html +=
          '           <input type="checkbox"  data-id="' +
          randomIDCheckbox +
          "_" +
          idTarget +
          '" name="sub_is_answer_check[' +
          idTarget +
          '][]" id="sub_is_answer_' +
          randomIDCheckbox +
          "_" +
          idTarget +
          '" class="checkType" data-box="sub_question" data-type="is_answer_check_question">';
        html +=
          '           <label for="sub_is_answer_' +
          randomIDCheckbox +
          "_" +
          idTarget +
          '" class="form-check-sign"></label>';
        html += "        </div>";
        html += "    </div>";
        html +=
          '    <input type="text" name="sub_answer_name[' +
          idTarget +
          '][]" class="form-control input-solid" placeholder="Please input answer...">';
        html += "</div>";
        html += "</div>";
        html +=
          '<div class="col-lg-3 col-sm-4 col-12  mb-3 form-group py-0  withImages  sub_is_question_with_images_' +
          idTarget +
          '" data-id="' +
          idTarget +
          '" data-type="sub_question" data-box="sub_question" style="display:none">';
        html += '                      <div class="upload-btn-wrapper">';
        html += '                        <button class="upload-file">';
        html +=
          '                          <span class="text-upload">Upload a image</span>';
        html +=
          '                          <span class="image-upload"><i class="icon-upload"></i></span></button>';
        html +=
          '                          <input class="file-upload" type="file" id="answer_image_' +
          randomIDCheckbox +
          "_" +
          idTarget +
          '" name="answer_image_' +
          randomIDCheckbox +
          "_[" +
          idTarget +
          ']" />';
        html += "                      </div>";
        html += "                    </div>";
        html += '<a href="javascript:void(0);" class="more-answer mb-3">';
        html += '<i class="la la-plus-circle text-info font-24"></i>';
        html +=
          '<span class="text-btn addAnswer" data-type="sub_question" data-id="' +
          idTarget +
          '">More Answer</span>';
        html += "</a>";
        html +=
          '    <i class="la la-minus-circle text-danger font-24 removeAnswer" data-type="sub_question"></i>';
        html += "</div>";
        html += "</div>";
        $("#itemsSubAnswer_" + idTarget).append(html);
      }
      $(`#sub_is_table-no-border_${randomID} .max720 input.input-solid`).prop(
        "required",
        true
      );
      if (subQuestionWithImages && subQuestionWithImages.checked) {
        $(`.sub_is_question_with_images_${idTarget}`).show();
        $(`#sub_is_question_with_images_${randomID} input`).prop(
          "required",
          true
        );
      }
    }
  });

  //append image 11
  $(document).on("click", ".add_question_image11", function (e) {
    var targetHtml = e.target;
    var idTarget = $(targetHtml).attr("data-id");
    var randomIDCheckbox = Math.round(Math.random() * 36 ** 12).toString(36);
    var dataType = $(targetHtml).attr("data-type");
    if (dataType === "parent_question") {
      var html_image11 =
        '<div class="d-flex align-items-center mb-3">' +
        '    <div class="upload-btn-wrapper w-100">' +
        '        <button class="upload-file">' +
        '            <span class="text-upload">Upload a image</span> <span class="image-upload"><i class="icon-upload"></i></span>' +
        "        </button>" +
        '        <input class="file-upload" type="file" id="question_image_11' +
        randomIDCheckbox +
        "_" +
        idTarget +
        '" name="question_image_11[' +
        idTarget +
        '][]" />' +
        "    </div>" +
        '    <i class="ml-3 la la-minus-circle text-danger font-24 removeImage11" style=" cursor: pointer;" data-type="parent_question"></i>' +
        "</div>";
      $(`#appendImage11_${idTarget}`).append(html_image11);
    }

    if (dataType === "sub_question") {
      var html_image11 =
        '<div class="d-flex align-items-center mb-3">' +
        '    <div class="upload-btn-wrapper w-100">' +
        '        <button class="upload-file">' +
        '            <span class="text-upload">Upload a image</span> <span class="image-upload"><i class="icon-upload"></i></span>' +
        "        </button>" +
        '        <input class="file-upload" type="file" id="sub_question_image_11' +
        randomIDCheckbox +
        "_" +
        idTarget +
        '" name="sub_question_image_11[' +
        idTarget +
        '][]" />' +
        "    </div>" +
        '    <i class="ml-3 la la-minus-circle text-danger font-24 removeImage11" style=" cursor: pointer;" data-type="parent_question"></i>' +
        "</div>";
      $(`#sub_appendImage11_${idTarget}`).append(html_image11);
    }
  });

  $(document).on("click", ".removeImage11", function () {
    $(this).parent().remove();
  });

  //remove annswer sub question
  $(document).on("click", ".removeAnswer", function () {
    $(this).parents(".first-item-answer").remove();
    $(this).parent().remove();
  });

  //check sub question
  $(document).on("change", ".checkSubquestion", function (e) {
    var targetHtml = e.target;
    var idTarget = $(targetHtml).attr("data-id");
    if (targetHtml.checked) {
      htmlSubQuetion(idTarget);
      $(`#sub_is_table-no-border_${idTarget} .max720 input.input-solid`).prop(
        "required",
        true
      );
    } else {
      $("#wrapperSubQuestion_" + idTarget).empty();
    }
  });

  //checkbox onchange
  $(document).on("change", ".checkType", function (e) {
    var targetHtml = e.target;
    var typeTarget = $(targetHtml).attr("data-type");
    var idTarget = $(targetHtml).attr("data-id");
    var boxTarget = $(targetHtml).attr("data-box");
    var classTarget = boxTarget === "parent_question" ? ".is_" : ".sub_is_";
    var idTargetBox = boxTarget === "parent_question" ? "is_" : "sub_is_";
    var idQuestionFormatTarget =
      boxTarget === "parent_question" ? "#" : "#sub_";
    var idQuestion_format1 = $(
      `${idQuestionFormatTarget}question_format1_id_${idTarget}`
    )[0];
    var idQuestion_format2 = $(
      `${idQuestionFormatTarget}question_format2_id_${idTarget}`
    )[0];
    var idQuestion_format3 = $(
      `${idQuestionFormatTarget}question_format3_id_${idTarget}`
    )[0];
    var idQuestion_format4 = $(
      `${idQuestionFormatTarget}question_format4_id_${idTarget}`
    )[0];
    var idCustomText = $(`#${idTargetBox}text_below_the_button${idTarget}`)[0];

    if (typeTarget === "is_condition_logic" && targetHtml.checked) {
      $(`${classTarget}condition_logic_show_${idTarget}`).show();
      $(`${classTarget}condition_logic_show_${idTarget} input`).prop(
        "required",
        true
      );
      $(`${classTarget}condition_logic_show_${idTarget} input`).val("1");
    }

    if (typeTarget === "is_condition_logic" && !targetHtml.checked) {
      $(`${classTarget}condition_logic_show_${idTarget}`).hide();
      $(`${classTarget}condition_logic_show_${idTarget} input`).prop(
        "required",
        false
      );
      $(`${classTarget}condition_logic_show_${idTarget} input`).prop(
        "checked",
        false
      );
      $(`${classTarget}condition_logic_show_${idTarget} input`).val("0");
    }

    if (typeTarget === "is_with_image_1_1" && targetHtml.checked) {
      $(`${classTarget}with_image_1_1_show_${idTarget}`).show();
      $(`${classTarget}with_image_1_1_show_${idTarget} input`).prop(
        "required",
        true
      );
      $(`#${idTargetBox}with_image_16_9_${idTarget}`).prop("disabled", true);
      $(`#${idTargetBox}with_images${idTarget}`).prop("disabled", true);
    }

    if (typeTarget === "is_with_image_1_1" && !targetHtml.checked) {
      $(`${classTarget}with_image_1_1_show_${idTarget}`).hide();
      $(`${classTarget}with_image_1_1_show_${idTarget} input`).prop(
        "required",
        false
      );
      $(`${classTarget}with_image_1_1_show_${idTarget} input`).val("");
      $(`#${idTargetBox}with_image_16_9_${idTarget}`).prop("disabled", false);
      if (
        (idQuestion_format2 && idQuestion_format2.checked) ||
        (idQuestion_format3 && idQuestion_format3.checked) ||
        (idQuestion_format4 && idQuestion_format4.checked) ||
        (idCustomText && idCustomText.checked)
      ) {
        $(`#${idTargetBox}with_images${idTarget}`).prop("disabled", true);
      } else {
        $(`#${idTargetBox}with_images${idTarget}`).prop("disabled", false);
      }
    }

    if (typeTarget === "is_with_image_16_9" && targetHtml.checked) {
      $(`${classTarget}with_image_16_9_show_${idTarget} input`).prop(
        "required",
        true
      );
      $(`${classTarget}with_image_16_9_show_${idTarget}`).show();
      $(`#${idTargetBox}with_images${idTarget}`).prop("disabled", true);
      $(`#${idTargetBox}with_image_1_1${idTarget}`).prop("disabled", true);
    }

    if (typeTarget === "is_with_image_16_9" && !targetHtml.checked) {
      $(`${classTarget}with_image_16_9_show_${idTarget}`).hide();
      $(`${classTarget}with_image_16_9_show_${idTarget} input`).prop(
        "required",
        false
      );
      $(`${classTarget}with_image_16_9_show_${idTarget} input`).val("");
      if (
        (idQuestion_format2 && idQuestion_format2.checked) ||
        (idQuestion_format3 && idQuestion_format3.checked) ||
        (idQuestion_format4 && idQuestion_format4.checked) ||
        (idCustomText && idCustomText.checked)
      ) {
        $(`#${idTargetBox}with_images${idTarget}`).prop("disabled", true);
      } else {
        $(`#${idTargetBox}with_images${idTarget}`).prop("disabled", false);
      }
      $(`#${idTargetBox}with_image_1_1${idTarget}`).prop("disabled", false);
    }

    if (typeTarget === "is_text_below" && targetHtml.checked) {
      $(`${classTarget}text_below_show_${idTarget}`).show();
      $(`#${idTargetBox}with_images${idTarget}`).prop("disabled", true);
      $(`#${idTargetBox}mutiple_choises${idTarget}`).prop("disabled", true);
      $(`${classTarget}text_below_show_${idTarget} input`).prop(
        "required",
        true
      );
      if (idQuestion_format4 && idQuestion_format4.checked) {
        $(`#${idTargetBox}table-no-border_${idTarget}`).hide();
      } else {
        $(`#${idTargetBox}table-no-border_${idTarget}`).show();
      }
    }
    if (typeTarget === "is_text_below" && !targetHtml.checked) {
      $(`${classTarget}text_below_show_${idTarget} input`).prop(
        "required",
        false
      );
      $(`${classTarget}text_below_show_${idTarget} input`).val("");
      if (idQuestion_format4 && idQuestion_format4.checked) {
        $(`#${idTargetBox}table-no-border_${idTarget}`).hide();
      } else {
        $(`#${idTargetBox}table-no-border_${idTarget}`).show();
      }
      $(`${classTarget}text_below_show_${idTarget}`).hide();
      $(`#${idTargetBox}with_images${idTarget}`).prop("disabled", false);
      $(`#${idTargetBox}mutiple_choises${idTarget}`).prop("disabled", false);
    }

    if (typeTarget === "is_with_images" && targetHtml.checked) {
      $(`${classTarget}question_with_images_${idTarget}`).show();
      $(`#is_with_image_1_1${idTarget}`).prop("disabled", true);
      $(`#is_with_image_16_9_${idTarget}`).prop("disabled", true);
      $(`${classTarget}question_with_images_${idTarget} input`).prop(
        "required",
        true
      );
    }
    if (typeTarget === "is_with_images" && !targetHtml.checked) {
      $(`${classTarget}question_with_images_${idTarget}`).hide();
      $(`#is_with_image_1_1${idTarget}`).prop("disabled", false);
      $(`#is_with_image_16_9_${idTarget}`).prop("disabled", false);
      $(`${classTarget}question_with_images_${idTarget} input`).prop(
        "required",
        false
      );
      $(`${classTarget}question_with_images_${idTarget} input`).val("");
    }
    //  Is set value checks box answer 1||0
    if (typeTarget === "is_answer_check_question" && targetHtml.checked) {
      $(`#${idTargetBox}answer_hidden_${idTarget}`).val("1");
    }
    if (typeTarget === "is_answer_check_question" && !targetHtml.checked) {
      $(`#${idTargetBox}answer_hidden_${idTarget}`).val("0");
    }

    /**End */

    /**Sub_question */

    if (typeTarget === "sub_is_with_images" && targetHtml.checked) {
      $(`${classTarget}question_with_images_${idTarget}`).show();
      $(`#sub_is_with_image_1_1${idTarget}`).prop("disabled", true);
      $(`#sub_is_with_image_16_9_${idTarget}`).prop("disabled", true);

      $(`${classTarget}question_with_images_${idTarget} input`).prop(
        "required",
        true
      );
    }
    if (typeTarget === "sub_is_with_images" && !targetHtml.checked) {
      $(`${classTarget}question_with_images_${idTarget}`).hide();
      $(`#sub_is_with_image_1_1${idTarget}`).prop("disabled", false);
      $(`#sub_is_with_image_16_9_${idTarget}`).prop("disabled", false);
      $(`${classTarget}question_with_images_${idTarget} input`).prop(
        "required",
        false
      );
      $(`${classTarget}question_with_images_${idTarget} input`).val("");
    }
    /**End */
  });

  $(document).on("click", ".handleRadio", function (e) {
    var targetHtml = e.target;
    var idTarget = $(targetHtml).attr("data-id");
    var typeTarget = $(targetHtml).attr("data-type");
    $(`#is_table-no-border_${idTarget}`).show();
    //disable
    $(`#is_with_image_16_9_${idTarget}`).prop("disabled", false);
    $(`#is_with_image_1_1${idTarget}`).prop("disabled", false);
    $(`#is_mutiple_choises${idTarget}`).prop("disabled", false);
    $(`#question_image${idTarget}`).prop("disabled", false);
    $(`.resetChecked_${idTarget}`).prop("checked", false);
    $(`#is_with_images${idTarget}`).prop("disabled", false);
    $(`#is_question_with_images_${idTarget}`).hide();
    $(`#is_table-no-border_${idTarget} .max720 input.input-solid`).prop(
      "required",
      true
    );
    if (typeTarget === "question_dropdown") {
      $(`#is_mutiple_choises${idTarget}`).prop("disabled", true);
      $(`#question_image${idTarget}`).prop("disabled", true);
      $(`#is_with_images${idTarget}`).prop("disabled", true);
    }
    if (typeTarget === "question_radio") {
      $(`#is_with_images${idTarget}`).prop("disabled", true);
    }

    if (typeTarget === "question_custom") {
      $(`#is_mutiple_choises${idTarget}`).prop("disabled", true);
      $(`#is_with_images${idTarget}`).prop("disabled", true);
      $(`#is_table-no-border_${idTarget}`).hide();
      $(`#is_table-no-border_${idTarget} .max720 input.input-solid`).prop(
        "required",
        false
      );
    }

    resetHiddenBox(idTarget, "parent");
  });

  function resetHiddenBox(idTarget, name) {
    var classTarget = name === "parent" ? ".is_" : ".sub_is_";
    $(`${classTarget}with_image_1_1_show_${idTarget}`).hide();
    $(`${classTarget}with_image_1_1_show_${idTarget} input`).prop(
      "required",
      false
    );
    $(`${classTarget}with_image_1_1_show_${idTarget} input`).val("");

    $(`${classTarget}with_image_16_9_show_${idTarget}`).hide();
    $(`${classTarget}with_image_16_9_show_${idTarget} input`).prop(
      "required",
      false
    );

    $(`${classTarget}with_image_16_9_show_${idTarget} input`).val("");

    $(`${classTarget}with_image_16_9_show_${idTarget} input`).prop(
      "required",
      false
    );
    $(`${classTarget}with_image_16_9_show_${idTarget} input`).val("");

    $(`${classTarget}question_with_images_${idTarget}`).hide();
    $(`${classTarget}question_with_images_${idTarget} input`).prop(
      "required",
      false
    );
    $(`${classTarget}question_with_images_${idTarget} input`).val("");

    $(`${classTarget}text_below_show_${idTarget}`).hide();
    $(`${classTarget}text_below_show_${idTarget} input`).prop(
      "required",
      false
    );
    $(`${classTarget}text_below_show_${idTarget} input`).val("");

    $(`${classTarget}condition_logic_show_${idTarget}`).hide();
    $(`${classTarget}condition_logic_show_${idTarget} input`).prop(
      "required",
      false
    );
    $(`${classTarget}condition_logic_show_${idTarget} input`).val("");
    $(`${classTarget}condition_logic_show_${idTarget} input`).prop(
      "checked",
      false
    );

    $(`${classTarget}condition_logic_show_${idTarget} input`).val("0");
  }

  $(document).on("click", ".sub_handleRadio", function (e) {
    var targetHtml = e.target;
    var idTarget = $(targetHtml).attr("data-id");
    var typeTarget = $(targetHtml).attr("data-type");
    $(`.sub_resetChecked_${idTarget}`).prop("checked", false);
    $(`#sub_is_table-no-border_${idTarget}`).show();
    $(`#sub_is_with_image_16_9_${idTarget}`).prop("disabled", false);
    $(`#sub_is_with_image_1_1${idTarget}`).prop("disabled", false);
    $(`#sub_is_mutiple_choises${idTarget}`).prop("disabled", false);
    $(`#sub_question_image${idTarget}`).prop("disabled", false);
    $(`#sub_is_with_images${idTarget}`).prop("disabled", false);
    $(`#sub_is_table-no-border_${idTarget} .max720 input.input-solid`).prop(
      "required",
      true
    );
    if (typeTarget === "sub_question_dropdown") {
      $(`#sub_is_mutiple_choises${idTarget}`).prop("disabled", true);
      $(`#sub_question_image${idTarget}`).prop("disabled", true);
      $(`#sub_is_with_images${idTarget}`).prop("disabled", true);
    }
    if (typeTarget === "sub_question_radio") {
      $(`#sub_is_with_images${idTarget}`).prop("disabled", true);
    }
    if (typeTarget === "sub_question_custom") {
      $(`#sub_is_mutiple_choises${idTarget}`).prop("disabled", true);
      $(`#sub_is_with_images${idTarget}`).prop("disabled", true);
      $(`#sub_is_table-no-border_${idTarget}`).hide();
      $(`#sub_is_table-no-border_${idTarget} .max720 input.input-solid`).prop(
        "required",
        false
      );
    }
    resetHiddenBox(idTarget, "sub");
  });

  //remove question
  $(document).on("click", ".handleRemove", function (e) {
    var idTarget = $(this).attr("data-id");
    var nameTarget = $(this).attr("data-name");
    if (nameTarget === "question_sub") {
      //hidden TODO UPDATE
      // $("#wrapperSubQuestion_" + idTarget).empty();
      // $(".checkSubquestion").prop("checked", false);
    }

    if (nameTarget === "question_parent") {
      //remove all
      $("#box-question_" + idTarget).remove();
      $("#wrapperSubQuestion_" + idTarget).remove();
      $(".checkSubquestion").prop("checked", false);
    }
  });

  var stt = 1;
  function htmlQuestion(idParent) {
    stt++;
    var html_question =
      "<!-- question -->" +
      '            <div class="box-question bg-white" id="box-question_' +
      idParent +
      '">' +
      '               <span class="delQuestion handleRemove btn" data-name="question_parent" data-id="' +
      idParent +
      '">' +
      '                 <i class="delQuestion__icon la la-trash-o" ></i>' +
      '                 <span class="actions-text">Delete</span>' +
      "               </span>" +
      '              <div class="card-header has-border-top">' +
      '                <div class="row align-items-center">' +
      '                  <div class="col-lg-12 col-sm-12 col-12">' +
      '                    <div class="form-group fw-bold custom-pannel-heading">' +
      '                      <label class="fw-normal">Question Formats ' +
      (stt || 1) +
      "</label>" +
      "                    </div>" +
      "                  </div>" +
      "                </div>" +
      '                <div class="row align-items-center">' +
      '                  <div class="col-lg-12 col-sm-12 col-12">' +
      '                    <div class="form-group fw-bold custom-pannel-heading">' +
      "                      <label></label>" +
      "                    </div>" +
      "                  </div>" +
      "                </div>" +
      '                <div class="row align-items-center box-radio-custom">' +
      '                  <div class="col-2-6 col-sm-3 col-3">' +
      '                    <input type="radio" class="handleRadio" value="1" checked data-type="question_checkbox" data-id="' +
      idParent +
      '" id="question_format1_id_' +
      idParent +
      '" name="question_format_id[' +
      idParent +
      ']">' +
      '                    <label for="question_format1_id_' +
      idParent +
      '"><span>Checkbox</span></label>' +
      "                  </div>" +
      '                  <div class="col-2-6 col-sm-3 col-3">' +
      '                    <input type="radio" class="handleRadio" value="2" data-type="question_dropdown" data-id="' +
      idParent +
      '" id="question_format2_id_' +
      idParent +
      '" name="question_format_id[' +
      idParent +
      ']">' +
      '                    <label for="question_format2_id_' +
      idParent +
      '"><span>Dropdown</span></label>' +
      "                  </div>" +
      '                  <div class="col-2-6 col-sm-3 col-3">' +
      '                    <input type="radio" class="handleRadio" value="3" data-type="question_radio" data-id="' +
      idParent +
      '" id="question_format3_id_' +
      idParent +
      '" name="question_format_id[' +
      idParent +
      ']">' +
      '                    <label for="question_format3_id_' +
      idParent +
      '"><span>Radio Button</span></label>' +
      "                  </div>" +
      '                  <div class="col-2-6 col-sm-3 col-3">' +
      '                    <input type="radio" class="handleRadio" value="4" data-type="question_custom" data-id="' +
      idParent +
      '" id="question_format4_id_' +
      idParent +
      '" name="question_format_id[' +
      idParent +
      ']">' +
      '                    <label for="question_format4_id_' +
      idParent +
      '"><span>Custom Text Button</span></label>' +
      "                  </div>" +
      "                </div>" +
      '                <div class="row align-items-center box-radio-custom box-checkbox-custom box-checkbox-custom-padding">' +
      '                  <div class="form-group col-2-6 col-sm-3 col-3">' +
      '                    <input class="checkType resetChecked_' +
      idParent +
      '" data-box="parent_question" data-id="' +
      idParent +
      '" type="checkbox" data-type="is_with_image_1_1" name="is_with_image_1_1[' +
      idParent +
      ']" id="is_with_image_1_1' +
      idParent +
      '">' +
      '                    <label class="form-check-sign" for="is_with_image_1_1' +
      idParent +
      '">With 1:1 image</label>' +
      "                  </div>" +
      '                  <div class="form-group col-2-6 col-sm-3 col-3">' +
      '                    <input class="checkType resetChecked_' +
      idParent +
      '" data-box="parent_question" data-id="' +
      idParent +
      '" type="checkbox" data-type="is_with_image_16_9" name="is_with_image_16_9[' +
      idParent +
      ']" id="is_with_image_16_9_' +
      idParent +
      '">' +
      '                    <label class="form-check-sign" for="is_with_image_16_9_' +
      idParent +
      '">With 16:9 image</label>' +
      "                  </div>" +
      '                  <div class="form-group col-2-6 col-sm-3 col-3">' +
      '                    <input class="checkType resetChecked_' +
      idParent +
      '" data-box="parent_question" data-id="' +
      idParent +
      '" type="checkbox" data-type="is_mutiple_choises" name="is_mutiple_choises[' +
      idParent +
      ']" id="is_mutiple_choises' +
      idParent +
      '">' +
      '                    <label class="form-check-sign" for="is_mutiple_choises' +
      idParent +
      '">Multiple choices</label>' +
      "                  </div>" +
      '                  <div class="form-group col-2-6 col-sm-3 col-3">' +
      '                    <input class="checkType resetChecked_' +
      idParent +
      '" data-box="parent_question" data-id="' +
      idParent +
      '" type="checkbox" data-type="is_text_below" name="is_text_below_the_button[' +
      idParent +
      ']" id="is_text_below_the_button' +
      idParent +
      '">' +
      '                    <label class="form-check-sign" for="is_text_below_the_button' +
      idParent +
      '">Text below the button</label>' +
      "                  </div>" +
      '                  <div class="form-group col-2-6 col-sm-3 col-3 sub_question">' +
      '                    <input type="checkbox" class="checkSubquestion" data-id="' +
      idParent +
      '" name="is_sub_question[' +
      idParent +
      ']" id="is_sub_question' +
      idParent +
      '">' +
      '                    <label class="form-check-sign" for="is_sub_question' +
      idParent +
      '">Sub Question</label>' +
      "                  </div>" +
      '                  <div class="form-group col-2-6 col-sm-3 col-3">' +
      '                    <input type="checkbox" class="checkType check_with_images resetChecked_' +
      idParent +
      ' " data-id="' +
      idParent +
      '" name="is_with_images[' +
      idParent +
      ']" id="is_with_images' +
      idParent +
      '" data-type="is_with_images" data-box="parent_question">' +
      '                    <label class="form-check-sign" for="is_with_images' +
      idParent +
      '">With images</label>' +
      "                  </div>" +
      '                  <div class="form-group col-2-6 col-sm-3 col-3">' +
      '                    <input type="checkbox" class="checkType check_is_condition_logic resetChecked_' +
      idParent +
      ' " data-id="' +
      idParent +
      '" name="is_condition_logic[' +
      idParent +
      ']" id="is_condition_logic' +
      idParent +
      '" data-type="is_condition_logic" data-box="parent_question">' +
      '                    <label class="form-check-sign" for="is_condition_logic' +
      idParent +
      '">Condition Logic</label>' +
      "                  </div>" +
      "                </div>" +
      "                </div>" +
      "                </div>" +
      '                <div class="row align-items-center m-0">' +
      '                  <div class="col-lg-3 col-sm-12 col-12">' +
      '                    <div class="form-group  question-edit">' +
      '                      <a href="#" class="">' +
      '                        <span class="text-btn fw-bold text-info">Question Edit</span>' +
      "                      </a>" +
      "                    </div>" +
      "                  </div>" +
      "                </div>" +
      '                <div class="row align-items-flex-start m-0 itemLastChild">' +
      '                  <div class="col-lg-4 col-sm-12 col-12 pr-0">' +
      '                    <div class="form-group question-text">' +
      '                      <label for="question" class="fw-normal">Question</label>' +
      '                      <input type="text" name="question_name[' +
      idParent +
      ']" required class="form-control input-solid" placeholder="What is your current employment status?">' +
      "                    </div>" +
      "                  </div>" +
      '                  <div class="col-lg-2 col-sm-12 col-12">' +
      '                   <div class="form-group CRM-mobile">' +
      '                       <label for="question_crm[' +
      idParent +
      ']" class="fw-normal">CRM</label>' +
      '                       <input type="text" name="question_crm[' +
      idParent +
      ']" class="form-control input-solid" required placeholder="Your text here">' +
      "                   </div>" +
      "                  </div>" +
      '                  <div class="col-lg-3 col-sm-12 col-12 is_with_image_1_1_show_' +
      idParent +
      '" style=" display: none; ">' +
      '                    <div class="form-group">' +
      '                        <label for="question_image_11' +
      idParent +
      '" class="fw-normal">1:1 Image</label>' +
      '                        <div class="d-flex align-items-center mb-3">' +
      '                            <div class="upload-btn-wrapper w-100">' +
      '                                <button class="upload-file">' +
      '                                    <span class="text-upload">Upload a image</span> <span class="image-upload"><i class="icon-upload"></i></span>' +
      "                                </button>" +
      '                                <input class="file-upload" type="file" id="question_image_11' +
      idParent +
      '" name="question_image_11[' +
      idParent +
      '][]" />' +
      "                            </div>" +
      // '                            <a href="javascript:void(0);" data-type="parent_question" class="add_question_image11 ml-3" data-id="' +
      // idParent +
      // '"> <i class="la la-plus-circle text-info font-24" data-type="parent_question" data-id="' +
      // idParent +
      // '"></i> </a>' +
      "                        </div>" +
      '                        <div id="appendImage11_' +
      idParent +
      '"></div>' +
      "                    </div>" +
      "                  </div>" +
      '                  <div class="col-lg-3 col-sm-12 col-12 is_text_below_show_' +
      idParent +
      '" style=" display: none; ">' +
      '                    <div class="form-group">' +
      '                      <label for="question" class="fw-normal">Text below the button</label>' +
      '                      <input type="text" name="text_below_the_button[' +
      idParent +
      ']" class="form-control input-solid" placeholder="Your text here">' +
      "                    </div>" +
      "                  </div>" +
      '                  <div class="col-lg-3 col-sm-12 col-12 is_with_image_16_9_show_' +
      idParent +
      '" style="display: none;">' +
      '                    <div class="form-group">' +
      '                      <label for="question" class="fw-normal">16:9 Image</label>' +
      '                      <div class="upload-btn-wrapper">' +
      '                        <button class="upload-file">' +
      '                          <span class="text-upload">Upload a image</span>' +
      '                          <span class="image-upload"><i class="icon-upload"></i></span></button>' +
      '                          <input class="file-upload" type="file" id="question_image' +
      idParent +
      '" name="question_image[' +
      idParent +
      ']" />' +
      "                      </div>" +
      "                    </div>" +
      "                  </div>" +
      '                  <div class="col-lg-3 col-sm-12 col-12 is_condition_logic_show_' +
      idParent +
      '" style="display: none;">' +
      '                    <div class="form-group ">' +
      '                      <label for="question" class="fw-normal">Condition Logic</label>' +
      '                      <div class="condition-wrapper box-radio-custom px-0">' +
      '<input type="radio" class="conditionLogic" value="0" data-type="parent_question" data-id="' +
      idParent +
      '" id="is_condition_logic_id_' +
      idParent +
      '" name="is_condition_logic_id[' +
      idParent +
      ']">' +
      '<label class="input-solid" for="is_condition_logic_id_' +
      idParent +
      '"><span><i class="icn-actions la icon-edit"></i>Edit Condition Logic</span></label>' +
      "                      </div>" +
      "                    </div>" +
      "                  </div>" +
      "                </div>" +
      "                </div>" +
      '                <div class="row align-items-start m-0">' +
      '                  <div class="col-lg-12 col-sm-12 col-12 p-0">' +
      '                    <div class="table table-no-border row" data-id="' +
      idParent +
      '" data-type="parent_question" data-box="parent_question" id="is_table-no-border_' +
      idParent +
      '">' +
      "                      <div class='table-head col-12 p-0'>" +
      '                          <div class="col-CRM col-lg-4 col-sm-6 col-12">Send to CRM   <span>Answer</span></div>' +
      '                          <div style="display:none" class="col-lg-2 col-sm-6 col-12 col-question_with_images is_question_with_images_' +
      idParent +
      '" id="withImages" data-id="' +
      idParent +
      '" data-type="parent_question" data-box="parent_question">Images</div>' +
      "                      </div>" +
      "                      <div class='table-tbody col-12 pr-0 first-item-answer'>" +
      "                          <div class='max720 pr-0 col-lg-4 col-sm-6 col-12 p-0' style='padding-right:0 !important'>" +
      '                            <div class="d-flex align-items-center mb-3">' +
      '                              <div class="box-checkbox-custom">' +
      '                                <div class="form-group mb0 p10 text-center">' +
      '                                  <input type="hidden" name="is_answer_check[' +
      idParent +
      '][]" id="is_answer_hidden_' +
      idParent +
      '" value="0">' +
      '                                  <input type="checkbox" data-id="' +
      idParent +
      '"' +
      ' class="checkType" data-box="parent_question" data-type="is_answer_check_question" name="is_answer_check[' +
      idParent +
      '][]" id="is_answer' +
      idParent +
      '">' +
      '                                  <label for="is_answer' +
      idParent +
      '" class="form-check-sign"></label>' +
      "                                </div>" +
      "                              </div>" +
      '                              <input type="text" name="answer_name[' +
      idParent +
      '][]" class="form-control input-solid" placeholder="Please input answer...">' +
      '                              <i class="ml-2" style="width: 26px; height: 26px; display:block;"></i>' +
      "                            </div>" +
      "                          </div>" +
      "<div  style='display:none' data-id='" +
      idParent +
      "' class='col-lg-3 col-sm-4 col-12 withImages pl-2 is_question_with_images_" +
      idParent +
      "' data-type='parent_question' data-box='parent_question'>" +
      '<div class="form-group py-0 px-1 mb-3">' +
      '                      <div class="upload-btn-wrapper">' +
      '                        <button class="upload-file">' +
      '                          <span class="text-upload">Upload a image</span>' +
      '                          <span class="image-upload"><i class="icon-upload"></i></span></button>' +
      '                          <input class="file-upload" type="file" id="answer_image' +
      idParent +
      '" name="answer_image[' +
      idParent +
      ']" />' +
      "                      </div>" +
      "                    </div>" +
      "                  </div>" +
      "                          <div class='col-addAnswer mb-3'>" +
      "<i class='la la-minus-circle text-danger font-24 removeAnswer first' data-type='parent_question'></i>" +
      '                            <a href="javascript:void(0);" class="more-answer answer-first">' +
      '                              <i class="la la-plus-circle text-info font-24"></i>' +
      '                              <span class="text-btn addAnswer" data-type="parent_question" data-id="' +
      idParent +
      '">More Answer</span>' +
      "                            </a>" +
      "                          </div>" +
      "</div>" +
      '                            <div class="itemsAnswer w-100" id="itemsAnswer_' +
      idParent +
      '"></div>' +
      "                      </div>" +
      "                    </div>" +
      "                  </div>" +
      "                </div>" +
      "              </div>" +
      "            </div>" +
      "          </div>" +
      '        <div id="wrapperSubQuestion_' +
      idParent +
      '"></div>';
    $("#wrapperQuestion").append(html_question);
  }

  function htmlSubQuetion(idParent) {
    var html_sub_question =
      "<!-- sub question -->" +
      '<div class="box-question bg-blue" id="box-question_' +
      idParent +
      '">' +
      '  <span class="delQuestion handleRemove btn" data-name="question_sub" data-id="' +
      idParent +
      '">' +
      '   <i class="delQuestion__icon la la-trash-o"></i>' +
      '   <span class="actions-text">Delete</span>' +
      "  </span>" +
      '  <div class="card-header has-border-top">' +
      '    <div class="row align-items-center">' +
      '      <div class="col-lg-12 col-sm-12 col-12">' +
      '        <div class="form-group fw-bold custom-pannel-heading">' +
      "          <label>Sub Question</label>" +
      "        </div>" +
      "      </div>" +
      "    </div>" +
      '    <div class="row align-items-center">' +
      '      <div class="col-lg-12 col-sm-12 col-12">' +
      '        <div class="form-group fw-bold custom-pannel-heading">' +
      "          <label></label>" +
      "        </div>" +
      "      </div>" +
      "    </div>" +
      '    <div class="row align-items-center box-radio-custom">' +
      '       <div class="col-2-6 col-sm-3 col-3">' +
      '         <input type="radio" class="sub_handleRadio" value="1" checked data-type="sub_question_checkbox" data-id="' +
      idParent +
      '" id="sub_question_format1_id_' +
      idParent +
      '" name="sub_question_format_id[' +
      idParent +
      ']">' +
      '         <label for="sub_question_format1_id_' +
      idParent +
      '"><span>Checkbox</span></label>' +
      "       </div>" +
      '       <div class="col-2-6 col-sm-3 col-3">' +
      '         <input type="radio" class="sub_handleRadio" value="2" data-type="sub_question_dropdown" data-id="' +
      idParent +
      '" id="sub_question_format2_id_' +
      idParent +
      '" name="sub_question_format_id[' +
      idParent +
      ']">' +
      '         <label for="sub_question_format2_id_' +
      idParent +
      '"><span>Dropdown</span></label>' +
      "       </div>" +
      '       <div class="col-2-6 col-sm-3 col-3">' +
      '         <input type="radio" class="sub_handleRadio" value="3" data-type="sub_question_radio" data-id="' +
      idParent +
      '" id="sub_question_format3_id_' +
      idParent +
      '" name="sub_question_format_id[' +
      idParent +
      ']">' +
      '         <label for="sub_question_format3_id_' +
      idParent +
      '"><span>Radio Button</span></label>' +
      "       </div>" +
      '       <div class="col-2-6 col-sm-3 col-3">' +
      '         <input type="radio" class="sub_handleRadio" value="4" data-type="sub_question_custom" data-id="' +
      idParent +
      '" id="sub_question_format4_id_' +
      idParent +
      '" name="sub_question_format_id[' +
      idParent +
      ']">' +
      '         <label for="sub_question_format4_id_' +
      idParent +
      '"><span>Custom Text Button</span></label>' +
      "       </div>" +
      "    </div>" +
      '    <div class="row align-items-center box-radio-custom box-checkbox-custom box-checkbox-custom-padding">' +
      '      <div class="form-group col-2-6 col-sm-3 col-3">' +
      '        <input class="checkType sub_resetChecked_' +
      idParent +
      '" data-box="sub_question" data-id="' +
      idParent +
      '" type="checkbox" data-type="is_with_image_1_1" name="sub_is_with_image_1_1[' +
      idParent +
      ']" id="sub_is_with_image_1_1' +
      idParent +
      '">' +
      '        <label class="form-check-sign" for="sub_is_with_image_1_1' +
      idParent +
      '">With 1:1 image</label>' +
      "      </div>" +
      '      <div class="form-group col-2-6 col-sm-3 col-3">' +
      '        <input class="checkType sub_resetChecked_' +
      idParent +
      '" data-box="sub_question" data-id="' +
      idParent +
      '" type="checkbox" data-type="is_with_image_16_9" name="sub_is_with_image_16_9[' +
      idParent +
      ']" id="sub_is_with_image_16_9_' +
      idParent +
      '">' +
      '        <label class="form-check-sign" for="sub_is_with_image_16_9_' +
      idParent +
      '">With 16:9 image</label>' +
      "      </div>" +
      '      <div class="form-group col-2-6 col-sm-3 col-3">' +
      '        <input class="checkType sub_resetChecked_' +
      idParent +
      '" data-box="sub_question" data-id="' +
      idParent +
      '" type="checkbox" data-type="is_mutiple_choises" name="sub_is_mutiple_choises[' +
      idParent +
      ']" id="sub_is_mutiple_choises' +
      idParent +
      '">' +
      '        <label class="form-check-sign" for="sub_is_mutiple_choises' +
      idParent +
      '">Multiple choices</label>' +
      "      </div>" +
      '      <div class="form-group col-2-6 col-sm-3 col-3">' +
      '        <input class="checkType sub_resetChecked_' +
      idParent +
      '" data-box="sub_question" data-id="' +
      idParent +
      '" type="checkbox" data-type="is_text_below" name="sub_is_text_below_the_button[' +
      idParent +
      ']" id="sub_is_text_below_the_button' +
      idParent +
      '">' +
      '        <label class="form-check-sign" for="sub_is_text_below_the_button' +
      idParent +
      '">Text below the button</label>' +
      "      </div>" +
      '      <div class="form-group col-2-6 col-sm-3 col-3">' +
      '        <input class="checkType sub_resetChecked_' +
      idParent +
      '" data-box="sub_question" data-id="' +
      idParent +
      '" type="checkbox" data-type="sub_is_with_images" name="sub_is_with_images[' +
      idParent +
      ']" id="sub_is_with_images' +
      idParent +
      '">' +
      '        <label class="form-check-sign" for="sub_is_with_images' +
      idParent +
      '">With images</label>' +
      "      </div>" +
      '                  <div class="form-group col-2-6 col-sm-3 col-3">' +
      '                    <input type="checkbox" class="checkType check_is_condition_logic resetChecked_' +
      idParent +
      ' " data-id="' +
      idParent +
      '" name="sub_is_condition_logic[' +
      idParent +
      ']" id="sub_is_condition_logic' +
      idParent +
      '" data-type="is_condition_logic" data-box="sub_question">' +
      '                    <label class="form-check-sign" for="sub_is_condition_logic' +
      idParent +
      '">Condition Logic</label>' +
      "                  </div>" +
      "                </div>" +
      "    </div>" +
      '    <div class="row align-items-center m-0">' +
      '       <div class="col-lg-3 col-sm-12 col-12">' +
      '         <div class="form-group question-edit">' +
      '           <a href="#" class="">' +
      '             <span class="text-btn fw-bold text-info">Question Edit</span>' +
      "           </a>" +
      "         </div>" +
      "       </div>" +
      "     </div>" +
      '     <div class="row align-items-start m-0 itemLastChild">' +
      '       <div class="col-lg-4 col-sm-12 col-12 pr-0">' +
      '         <div class="form-group question-text">' +
      '           <label for="sub_question_name[' +
      idParent +
      ']" class="fw-normal">Question</label>' +
      '           <input type="text" name="sub_question_name[' +
      idParent +
      ']" class="form-control input-solid" required placeholder="What is your current employment status?">' +
      "         </div>" +
      "       </div>" +
      '       <div class="col-lg-2 col-sm-12 col-12">' +
      '           <div class="form-group CRM-mobile">' +
      '               <label for="sub_question_crm[' +
      idParent +
      ']" class="fw-normal">CRM</label>' +
      '               <input type="text" name="sub_question_crm[' +
      idParent +
      ']" class="form-control input-solid" required placeholder="Your text here">' +
      "           </div>" +
      "       </div>" +
      '       <div class="col-lg-3 col-sm-12 col-12 sub_is_with_image_1_1_show_' +
      idParent +
      '" style=" display: none; ">' +
      '        <div class="form-group">' +
      '            <label for="sub_question_image_11' +
      idParent +
      '" class="fw-normal">1:1 Image</label>' +
      '            <div class="d-flex align-items-center mb-3">' +
      '                <div class="upload-btn-wrapper w-100">' +
      '                    <button class="upload-file">' +
      '                        <span class="text-upload">Upload a image</span> <span class="image-upload"><i class="icon-upload"></i></span>' +
      "                    </button>" +
      '                    <input class="file-upload" type="file" id="sub_question_image_11' +
      idParent +
      '" name="sub_question_image_11[' +
      idParent +
      '][]" />' +
      "                </div>" +
      // '                <a href="javascript:void(0);" data-type="sub_question" class="add_question_image11 ml-3" data-id="' +
      // idParent +
      // '"> <i class="la la-plus-circle text-info font-24" data-type="sub_question" data-id="' +
      // idParent +
      // '"></i> </a>' +
      "            </div>" +
      '            <div id="sub_appendImage11_' +
      idParent +
      '"></div>' +
      "        </div>" +
      "      </div>" +
      '      <div class="col-lg-3 col-sm-12 col-12 sub_is_text_below_show_' +
      idParent +
      '" style="display: none;">' +
      '         <div class="form-group">' +
      '           <label for="sub_text_below_the_button[' +
      idParent +
      ']" class="fw-normal">Text below the button</label>' +
      '           <input type="text" name="sub_text_below_the_button[' +
      idParent +
      ']" class="form-control input-solid" placeholder="Your text here">' +
      "         </div>" +
      "      </div>" +
      '       <div class="col-lg-3 col-sm-12 col-12 sub_is_with_image_16_9_show_' +
      idParent +
      '" style="display: none;">' +
      '         <div class="form-group">' +
      '           <label for="sub_question_image' +
      idParent +
      '" class="fw-normal">16:9 Image</label>' +
      '           <div class="upload-btn-wrapper">' +
      '             <button class="upload-file">' +
      '               <span class="text-upload">Upload a image</span>' +
      '               <span class="image-upload"><i class="icon-upload"></i></span></button>' +
      '               <input class="file-upload" type="file" id="sub_question_image' +
      idParent +
      '" name="sub_question_image[' +
      idParent +
      ']" />' +
      "           </div>" +
      "         </div>" +
      "       </div>" +
      '                  <div class="col-lg-3 col-sm-12 col-12 sub_is_condition_logic_show_' +
      idParent +
      '" style=" display: none;">' +
      '                    <div class="form-group ">' +
      '                      <label for="question" class="fw-normal">Condition Logic</label>' +
      '                      <div class="condition-wrapper box-radio-custom px-0">' +
      '<input type="radio" class="conditionLogic" value="0" data-type="sub_question" data-id="' +
      idParent +
      '" id="sub_is_condition_logic_id_' +
      idParent +
      '" name="sub_is_condition_logic_id[' +
      idParent +
      ']">' +
      '<label class="input-solid" for="sub_is_condition_logic_id_' +
      idParent +
      '"><span><i class="icn-actions la icon-edit"></i>Edit Condition Logic</span></label>' +
      "                      </div>" +
      "                    </div>" +
      "                  </div>" +
      "     </div>" +
      '     <div class="row align-items-start">' +
      '       <div class="col-lg-12 col-sm-12 col-12 no-padding-mb">' +
      '                    <div class="table table-no-border row" data-id="' +
      idParent +
      '" data-type="sub_question" data-box="sub_question" id="sub_is_table-no-border_' +
      idParent +
      '">' +
      "                      <div class='table-head col-12 p-0'>" +
      '                          <div class="col-CRM col-lg-4 col-sm-6 col-12">Send to CRM   <span>Answer</span></div>' +
      '                          <div style="display:none" class="col-lg-2 col-sm-6 col-12 col-question_with_images sub_is_question_with_images_' +
      idParent +
      '" id="withImages" data-id="' +
      idParent +
      '" data-type="sub_question" data-box="sub_question">Images</div>' +
      "                      </div>" +
      "           <div class='table-tbody col-12 pr-0 first-item-answer'>" +
      "               <div class='max720 pr-0 col-lg-4 col-sm-6 col-12 p-0 ' style='padding-right:0 !important'>" +
      '                 <div class="d-flex align-items-center mb-3">' +
      '                   <div class="box-checkbox-custom">' +
      '                     <div class="form-group mb0 p10 text-center">' +
      ' <input type="hidden" name="sub_is_answer_check[' +
      idParent +
      '][]" id="sub_is_answer_hidden_' +
      idParent +
      '" value="0">' +
      '                                  <input type="checkbox" data-id="' +
      idParent +
      '"' +
      ' class="checkType" data-box="sub_question" data-type="is_answer_check_question" name="sub_is_answer_check[' +
      idParent +
      '][]" id="sub_is_answer_' +
      idParent +
      '">' +
      '                       <label for="sub_is_answer_' +
      idParent +
      '" class="form-check-sign"></label>' +
      "                     </div>" +
      "                   </div>" +
      '                   <input type="text" name="sub_answer_name[' +
      idParent +
      '][]" class="form-control input-solid" placeholder="Please input answer...">' +
      '                   <i class="ml-2" style="width: 26px; height: 26px; display:block;"></i>' +
      "                 </div>" +
      "               </div>" +
      "<div  style='display:none' data-id='" +
      idParent +
      "' class='col-lg-3 col-sm-4 col-12 withImages pl-2 sub_is_question_with_images_" +
      idParent +
      "' data-type='sub_question' data-box='sub_question'>" +
      '<div class="form-group p-0 mb-3">' +
      '                      <div class="upload-btn-wrapper">' +
      '                        <button class="upload-file">' +
      '                          <span class="text-upload">Upload a image</span>' +
      '                          <span class="image-upload"><i class="icon-upload"></i></span></button>' +
      '                          <input class="file-upload" type="file" id="answer_image' +
      idParent +
      '" name="answer_image[' +
      idParent +
      ']" />' +
      "                      </div>" +
      "                    </div>" +
      "                  </div>" +
      "                          <div class='col-addAnswer mb-3'>" +
      "<i class='la la-minus-circle text-danger font-24 removeAnswer first' data-type='parent_question'></i>" +
      '                            <a href="javascript:void(0);" class="more-answer answer-first">' +
      '                   <i class="la la-plus-circle text-info font-24"></i>' +
      '                   <span class="text-btn addAnswer" data-type="sub_question" data-id="' +
      idParent +
      '">More Answer</span>' +
      "                 </a>" +
      "               </div>" +
      "</div>" +
      '                 <div class="itemsSubAnswer  w-100" id="itemsSubAnswer_' +
      idParent +
      '"></div>' +
      "           </div>" +
      "         </div>" +
      "       </div>" +
      "     </div>" +
      "   </div>" +
      " </div>";
    $("#wrapperSubQuestion_" + idParent + "").append(html_sub_question);
  }

  $("#addBoxQuestion").click(function (e) {
    var randomID = Math.round(Math.random() * 36 ** 12).toString(36);
    htmlQuestion(randomID);
    $(`#is_table-no-border_${randomID} input`).prop("required", true);
  });

  $(document).on("change", ".file-upload", function (event) {
    var fileName =
      event.target.files && event.target.files[0] && event.target.files[0].name;
    var inputId = event.target.id;
    if (inputId && inputId !== "postcode_file") {
      $("#" + inputId)
        .parent()
        .find(".text-upload")
        .html(fileName);
    }
    //csv upload
    $("#text_" + inputId).val(fileName);
  });
});
