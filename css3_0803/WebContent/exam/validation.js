//윈도우 창 자체에서 이벤트 줌
window.addEventListener('load', function(){
				alert('load 성공');

				clearMessage();
});

function clearMessage(){
	var messages = document.getElementsByClassName('alert-message');
	
	for(var i=0; i<messages.length;i++){
		messages[i].style.display='none';
	}
	
}

function showMessage(inputElement, message){
	var messageElem=inputElement.parentNode.querySelector('span');
	messageElem.style.display='inline';
	messageElem.innerText=message;
	
	inputElement.focus();	
}