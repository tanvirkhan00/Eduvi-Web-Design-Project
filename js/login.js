document.getElementById('btn-box').addEventListener('click', function() {
    const  emailValue =document.getElementById('email-box')
    const emailBox =emailValue.value;
    emailValue.value ='';
    const passBox =document.getElementById('password-box').value;
    if (emailBox==='kmtanvir1111@gmail.com' && passBox==='#826847#'){
        window.location.href= '/src/index.html';
    }
    else {
        alert ('Wrong Way Please Try')
    }
})