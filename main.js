document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const userNameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const email = userNameInput.value.trim();
    const password = passwordInput.value.trim();

    emailError.textContent = '';
    passwordError.textContent = '';

    if (email === '') {
        // return emailError.textContent = 'Email is required';
        return alert("Must enter the email or phone number")
       }
       if(typeof email ===  Number && email.length === 10){
        return alert("phone number must be 10")
       }
   
       if (!validateEmail(email)) {
         return  emailError.textContent = 'Please enter a valid email address';
       }
   
       if (password === '') {
        //   return passwordError.textContent = 'Password is required';
        return alert("Must enter the password")
       }
   
       if (!validatePassword(password)) {
          return passwordError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
       }
       userNameInput.value = "";
       passwordInput.value = "";
       document.getElementById("btn").style.background = "green"
       document.getElementById("btn").textContent = "success"
       setTimeout(function(){
        document.getElementById("btn").style.background = "#00B2F9"
        document.getElementById("btn").textContent = "Log in"
       },2000)
       console.log(userNameInput.value);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(password);
}


document.getElementById("facebook").addEventListener("click" ,() => {
    window.open('https://www.facebook.com/','_blank');
})
document.getElementById("play-box").addEventListener("click" ,() => {
    window.open('https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D02B484D6-EA39-4342-A3B0-3D081ECE8496%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fwww.google.com%2F','_blank');
})
document.getElementById("facebook").addEventListener("click" ,() => {
    window.open('https://www.facebook.com/','_blank');
})