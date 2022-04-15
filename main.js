import './style.css';
import ArgonStorage from 'argon-storage';
const store = new ArgonStorage({ compress: true });
import $ from 'jquery'
const quiz = {
  quiz_name: 'HTML QUIZ',
  quiz_time_in_sec: '20',
  quiz_questions: [
    {
      index: 0,
      text: 'What is HTML full form?',
      correct_option_index: 0,
      options: [
        {
          index: 0,
          text: 'Hyper Text Markup Language',
        },
        {
          index: 1,
          text: 'Hyper Text Markup Line',
        },
        {
          index: 2,
          text: 'Hyper Text Makeup Language',
        },
        {
          index: 3,
          text: 'Hyper Teeth Markup Language',
        },
      ],
    },
    {
      index: 1,
      text: 'What is HTML1 full form?',
      correct_option_index: 0,
      options: [
        {
          index: 0,
          text: 'Hyper Text Markup Language',
        },
        {
          index: 1,
          text: 'Hyper Text Markup Line',
        },
        {
          index: 2,
          text: 'Hyper Text Makeup Language',
        },
        {
          index: 3,
          text: 'Hyper Teeth Markup Language',
        },
      ],
    },
    {
      index: 2,
      text: 'What is HTML4 full form?',
      correct_option_index: 2,
      options: [
        {
          index: 0,
          text: 'Hyper Text Markup Language',
        },
        {
          index: 1,
          text: 'Hyper Text Markup Line',
        },
        {
          index: 2,
          text: 'Hyper Text Makeup Language',
        },
        {
          index: 3,
          text: 'Hyper Teeth Markup Language',
        },
      ],
    },
  ],
};
$(document).ready(function () {
  $('button').click(function () {
    console.log($("input[type='text']").val());
    console.log($("input[type='password']").val());
    if($("input[type='text']").val() === 'kashif' && $("input[type='password']").val() == 'khan'){
      store.set('auth', btoa('auth_ss'));
      store.set('c_qz',quiz, true)
      window.location.href = 'pages/quizes.html'
    }else{
      alert("Wrong username or password!")
    }

  });
});
