$('#pic').animate({'margin-top': '65px'}, 2000);
var shown=true;
$(document).click(function() {
  if(shown){
  $('#scan').show();
  $('#scan').animate({'height': '100%'}, 2000,function(){$('#scan').hide();$('#pic').hide();$('#photo').hide(); $('#scan').css('height','1%');shown=false;$('#pic').css('margin-top','0px');});
  }  else{
  $('#scan').show();
  $('#scan').animate({'height': '100%'}, 2000,function(){$('#scan').hide();$('#pic').show();$('#photo').show(); $('#pic').animate({'margin-top': '65px'}, 2000);$('#scan').css('height','1%');shown=true;});
  }

  

   
  
});

