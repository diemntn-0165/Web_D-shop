// const { default: axios } = require("axios");

$(document).ready(function() {
  const valueGetLogin = localStorage.getItem('login');
  // console.log(valueGetLogin);
  if (valueGetLogin === 'true') {
    $('.navbar__login--not').css('display', 'none');
    $('.navbar__login--logged').css('display', 'flex');
    $('.navbar__cart').css('display', 'block');

  } 
  $(".button3").click(async function (e) {
    e.preventDefault();
    const username = await $('.username').val();
    const password = await $('.password').val();
    axios.post('http://localhost:3000/login', { user_name: username, pass_word: password }).then((data, message) => {
  
      if (data.data.message === "Ok") {
        localStorage.setItem('login', true);
        $('.navbar__login--not').css('display', 'none');
        $('.navbar__login--logged').css('display', 'flex');
        // console.log('data', data.data);
        
        location.replace('/index.html');
      }
      else {
        alert("Failed password or username!!");
  
      }
    }).catch(err => {
      console.log('err', err);
    });
  });
  $(".notifications-item__logout").click(async function(e){
    e.preventDefault();
    localStorage.removeItem("login");
    $('.navbar__login--not').css('display', 'block');
    $('.navbar__login--logged').css('display', 'none');
    $('.navbar__cart').css('display', 'none');
  })
});
