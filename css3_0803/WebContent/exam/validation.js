//윈도우 창 자체에서 이벤트 줌
window.addEventListener('load', function(){
				alert('load 성공');

				clearMessage();
				
				var formElem=document.querySelector('form');
				formElem.onsubmit=submitForm;

				//변수방에 불러서 메서드에 저장하는 것이 아니라 이벤트처리하는 것이기 때문에 메서드에 ()를 붙이지 않는다.
				//월추가
				var selectInput=document.querySelector('select[name="birth-month"]');
				for(var i=1; i<=12; i++){
					var option=document.createElement('option');
					option.innerHTML=i+'월';
					option.value=i;
					
					selectInput.appendChild(option);
				}
				
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

function submitForm(){
	//account info
	var accountInput=document.querySelector('input[name="account"]');
	var passwordInput=document.querySelector('input[name="password"]');
	var passwordConfirmInput=document.querySelector('input[name="password2"]');
	var selectInput=document.querySelector('select[name="birth-month"]');
	var radioInput=document.querySelector('input[name="gender"]:checked');
	var checkInput=document.querySelector('input[name="agree"]');
	console.log(accountInput.value);
	console.log(passwordInput.value);
	console.log(passwordConfirmInput.value);
	
	console.log(selectInput.value);
	console.log(radioInput.value);
	console.log(checkInput.value);
	
	var success=true;
	if(accountInput.value.length<6) {
		showMessage(accountInput, '계정은 6글자 이상이어야 합니다');
		success=false;
	}
	if(passwordInput.value.length<8){
		showMessage(passwordInput, '비밀번호는 8글자 이상이어야 합니다');
		success=false;
	}
	if(passwordConfirmInput.value!=passwordInput.value){
		showMessage(passwordConfirmInput, '비밀번호가 일치하지 않습니다');
		success=false;
	}
	
	return success;
	
	/*var accountInput=document.querySelector('input[name="account"]');
	var passwordInput=document.querySelector('input[name="password"]');
	var passwordConfirmInput=document.querySelector('input[name="password2"]');
	
	//select, radio, checkbox
	var selectInput=document.querySelector('select[name="birth-month"]');
	var radioInput=document.querySelector('input[name="gender"]:checked');
	var checkInput=document.querySelector('input[name="agree"]');
	
	console.log(accountInput.value);
	console.log(passwordInput.value);
	console.log(passwordConfirmInput.value);
	console.log(selectInput.value);
	console.log(radioInput.value);
	console.log(checkInput.value);
	
	return false;*/
}