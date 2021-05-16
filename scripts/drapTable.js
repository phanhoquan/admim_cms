/** @format */
$(document).ready(function () {
  // Drag row table
  $(".drag-table").each(function () {
    $(".drag-table").tableDnD({
      onDragClass: "myDragClass",
      onDragStop: function (table, row) {
        var rows = table.tBodies[0].rows;
        var debugStr = "Row dropped was " + row.id + ". New order: ";
        for (var i = 0; i < rows.length; i++) {
          debugStr += rows[i].id + " ";
        }
        console.log("onDropwwwwwwwwwwwwwwwwwwwwwwwwww", table, row);
      },
    });
  });
});
