import './style.css';
import ArgonStorage from 'argon-storage';
const store = new ArgonStorage({ compress: true });
import $ from 'jquery'

$(document).ready(function () {
  $('button').click(function () {
    console.log($("input[type='text']").val());
    console.log($("input[type='password']").val());
    if($("input[type='text']").val() === 'kashif' && $("input[type='password']").val() == 'khan'){
      store.set('auth', btoa('auth_ss'));
      window.location.href = 'pages/quizes.html'
    }else{
      alert("Wrong username or password!")
    }

  });
});
