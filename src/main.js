
$(function(){
	var flag = 0;
	function getResult(){
		return $('.result').text();
	}
	function setResult(num){
		$('.result').text(num);		
	}
	function clearResult(){
		$('.result').text('');
	}
	function clearHistory(){
		$('.history').text('');
	}
	function getHistory(){
		return $('.history').text();
	}
	function setHistory(num){
		$('.history').text(num);
	}
	 $('.number').click( async function(){
	 	$('.result').removeClass('mst');
		var id =$(this).attr('id');
		var history = getHistory();
		if(history!='')
			setHistory(history+id);
		else
			setHistory(id);
		if(flag===1){
			setResult(eval(getHistory()));
		}
	});
	$('.operator').click(function(){
		$('.result').removeClass('mst');
		flag=1;
		var result = getResult();
		var history =getHistory();
		console.log(getResult(),getHistory());
		var id = $(this).attr('id')
		if(id==='='){
			$('.result').toggleClass('mst');
			setHistory('');
			setResult(eval(history));
		}
		else if (id==='C') {
			setResult('');
			setHistory('');
		}
		else if(id==='CE'){
			setResult('');
			var historyNum =history.substring(0,history.length-1);
			setHistory(historyNum);
			setResult(eval(getHistory()));
		}
		else
			setHistory(history+id);
	})
	$('#dark').click(function(){
		$('head').html('');
		$('head').append('<meta charset="UTF-8"><title>My Calculator</title><link rel="stylesheet" type="text/css" href="src/dark.css">');
	})
	$('#white').click(function(){
		$('head').html('');
		$('head').append('<meta charset="UTF-8"><title>My Calculator</title><link rel="stylesheet" type="text/css" href="src/white.css">');
	})

})







