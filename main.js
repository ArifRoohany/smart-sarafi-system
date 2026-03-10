document.addEventListener("DOMContentLoaded", () => {

const themeBtn = document.getElementById("themeToggle")
const icon = document.getElementById("themeIcon")
const html = document.documentElement

// Elements for language
const titleSystem = document.getElementById("titleSystem")
const bankText = document.getElementById("bankText")
const welcomeText = document.getElementById("welcomeText")
const descText = document.getElementById("descText")
const loginTitle = document.getElementById("loginTitle")
const userLabel = document.getElementById("userLabel")
const passLabel = document.getElementById("passLabel")
const rememberText = document.getElementById("rememberText")
const forgotText = document.getElementById("forgotText")
const loginBtn = document.getElementById("loginBtn")

// Load saved theme
const savedTheme = localStorage.getItem("theme")

if(savedTheme === "dark"){
html.classList.add("dark")
icon.classList.replace("fa-moon","fa-sun")
}

// Dark Mode Toggle
themeBtn.addEventListener("click", () => {

html.classList.toggle("dark")

if(html.classList.contains("dark")){
icon.classList.replace("fa-moon","fa-sun")
localStorage.setItem("theme","dark")
}else{
icon.classList.replace("fa-sun","fa-moon")
localStorage.setItem("theme","light")
}

})

// Password Toggle
window.togglePassword = function(){

let input = document.getElementById("passwordInput")
let icon = document.getElementById("passwordIcon")

if(input.type === "password"){
input.type = "text"
icon.classList.replace("fa-eye","fa-eye-slash")
}else{
input.type = "password"
icon.classList.replace("fa-eye-slash","fa-eye")
}

}

// Language Switch
const langSwitch = document.getElementById("langSwitch")

langSwitch.addEventListener("change",function(){

if(this.value === "en"){

document.documentElement.dir="ltr"
document.documentElement.lang="en"

titleSystem.innerText="Smart Sarafi System"
bankText.innerText="Approved by Afghanistan Bank"
welcomeText.innerText="Welcome!"
descText.innerText="Login to your account and manage your dashboard."

loginTitle.innerText="Login to Smart Sarafi System"

userLabel.innerText="Username"
passLabel.innerText="Password"

rememberText.innerText="Remember me"
forgotText.innerText="Forgot password?"
loginBtn.innerText="Login"

}else{

document.documentElement.dir="rtl"
document.documentElement.lang="fa"

titleSystem.innerText="سیستم صرافی هوشمند"
bankText.innerText="تایید شده د افغانستان بانک"
welcomeText.innerText="خوش آمدید!"
descText.innerText="برای دسترسی به حساب کاربری خود وارد شوید و داشبورد خود را مدیریت کنید."

loginTitle.innerText="ورود به سیستم صرافی هوشمند"

userLabel.innerText="نام کاربری"
passLabel.innerText="رمز عبور"

rememberText.innerText="مرا به خاطر بسپار"
forgotText.innerText="رمز عبور خود را فراموش کرده‌اید؟"
loginBtn.innerText="ورود"

}

})

})