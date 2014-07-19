$(document).ready(function(){
  $('.view').each(function(i, obj){
    dataTemplate = $(obj).attr("data-template");
    requestURL = "http://localhost/petaga-backend/request.php?template="+dataTemplate;
    parseIn = $(obj).html().replace(/\[\[/g,"{{").replace(/\]\]/g,"}}");
    $.ajax({
      url:requestURL,
      dataType: 'jsonp',
      success:function(json){
        var compiled = Mustache.to_html(parseIn, json);
        $(obj).html(compiled);
      },
      error:function(){
        console.log("JSON error");
      }
    });
  });
});
