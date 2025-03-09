$(document).ready(function() {
    let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    $('#signupForm').submit(function(e) {
        e.preventDefault();
        const username = $('#username').val(); 
        const password = $('#password').val(); 

        registeredUsers.push({ username, password });

        
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        alert('가입이 완료되었습니다! 이제 로그인하세요.');
        $('#signupForm')[0].reset();

        window.location.href = 'login.html'; 
    });

    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const username = $('#username').val(); 
        const password = $('#password').val(); 
        let userFound = false; 

        for (const user of registeredUsers) {
            if (user.username === username && user.password === password) {  
                userFound = true                                             
                break;                                                       
            }
        }

        if (userFound === true) {              
            alert(username + '님 환영합니다!');  
            window.location.href = 'main.html';
        } else {                                           
            alert('사용자 정보가 다릅니다! 다시 시도하세요.');   
        }   
    });
});
