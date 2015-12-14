$(document).ready(function(){
 $('.text_bar a').click(function() {
 var button_id = attribs = $(this).attr("alt");
 var start = button_id;
 var end = '';
 insert(start, end);
 return false;
 });
});
 function insert(start, end) {
 element = document.getElementById('textcode');
 if (document.selection) {
 element.focus();
 sel = document.selection.createRange();
 sel.text = start + sel.text + end;
 } else if (element.selectionStart || element.selectionStart == '0') {
 element.focus();
 var startPos = element.selectionStart;
 var endPos = element.selectionEnd;
 element.value = element.value.substring(0, startPos) + start + element.value.substring(startPos, endPos) + end + element.value.substring(endPos, element.value.length);
 } else {
 element.value += start + end;
 }
 }