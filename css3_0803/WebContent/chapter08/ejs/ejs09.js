var id=prompt('아이디를 입력해주세요');
var pw=prompt('비밀번호를 입력해주세요');
//prompt = 자바 scan.next;

if(id=='std01' && pw=='111111'){
	location.href="login.html"
}else if(id=='std02' && pw=='222222'){
	location.href="login.html"
}else if(id=='std03' && pw=='333333'){
	location.href="login.html"
}else{
	location.href="error.html"
}