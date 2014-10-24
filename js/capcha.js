var num;
var res;

$(document).ready(function(){

	num = Math.floor((Math.random() * 10) + 1);
	res = (num*2);
	$('#captcha').html("<span class='btn btn-info 'enambled style='color:#fff; font-size:20px; cursor:default; background-color: #0D9AE9;width: 100px;'>"+num+" x 2</span>");
	
});


function captcha(){
	var input = $("#input").val();
	
	if(res == input){
		$('#captcha').html("<span class='btn btn-info 'enambled style='color:#fff; font-size:20px; background-color: #0D9AE9;'>ok</span>");
	}else{
		$('#captcha').html("<span class='btn btn-info 'enambled style='color:#fff; font-size:20px; background-color: #0D9AE9;'>erro</span>");
	
	}
}

//http://www.javascriptobfuscator.com/