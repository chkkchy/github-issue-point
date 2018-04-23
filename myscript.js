
var labels = $(".issues-listing li.js-issue-row .labels a.IssueLabel")

var cnt = 0
$.each(labels, function() {
  var str = $(this).text()
  if($.isNumeric(str)) {
    cnt += new Number(str)
  }
});

var ttl = $("<span>" + cnt + "</span>").addClass("d-inline-block IssueLabel")

// display
$("<p><span>Total point: </span></p>").append(ttl).insertBefore(".issues-listing")
