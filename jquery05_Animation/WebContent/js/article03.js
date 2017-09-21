$(function(){
	//1. p태그가 몇개인지를 alert창으로 띄운다.
	//alert($('p').length);
	
	//2. 두번째 p태그의 내용을 alert창으로 출력
	//   두번째 p태그를 변수에 할당...
	var secondP=$('p:eq(1)');
	//alert(secondP.text());
	
	//3. a를 클릭하면 함수호출되도록...
	//secondP가 보이면 read less /안보이면 read more
	// 그때마다 slideToggle을 이용해서 글이 보였다 안보였다
	$('a.more').click(function name() {
		if(secondP.is(':hidden')){//안보인다면
			secondP.slideToggle('slow');
			$(this).html('read less');
		}else{
			secondP.slideToggle('slow');
			$(this).html('read more');
		}
	}); //click
	
	
	var speech=$('div.speech');
	
	//4. 디폴트 글자 사이즈를 얻어낸다.
	var defaultSize = speech.css('font-size');//19.2px
	//alert(defaultSize);
	
	var num = parseInt(defaultSize,10);
	//alert(num);
	
	//5. 
	$('#switcher>button').click(function () {
		switch(this.id){
		case 'switcher-large':
			num +=5;
			break;
		case 'switcher-small':
			num -=5;
			break;
		default:
			num = parseInt(defaultSize,10);
		}//switch
		
		//이 부분을 반드시 해줘야 한다.
		speech.animate({fontSize:num+'px'},'slow');
	}); //click
});//function















