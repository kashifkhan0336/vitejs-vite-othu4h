import ArgonStorage from 'argon-storage';
import '../lib/jquery-3.6.0.js'
import '../lib/jquery.countdown.js'
const quiz = {
  quiz_name: 'HTML QUIZ',
  quiz_time_in_sec: '600',
  quiz_questions: [
    {
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
  ],
};
$(document).ready(function () {
  $('#myForm input').on('change', function () {
    alert($('input[name=radioName]:checked', '#myForm').val());
  });
});
const store = new ArgonStorage({ compress: true });
console.log(store.get('auth'));
if (store.get('auth') == 'YXV0aF9zcw==') {
  var fiveSeconds = new Date().getTime() + 5000;
  $('#timer')
    .countdown(fiveSeconds)
    .on('update.countdown', function (event) {
      var $this = $(this);

      $this.html(event.strftime('<span>%H:%M:%S</span>'));
    })
    .on('finish.countdown', function (event) {
      $(this).html('Time UP!')
      alert('countdown finished!');
      store.remove('auth')
    });
  $('#app').append(`<h1>${quiz.quiz_name}</h1>`);
  $('#app').append(`<h1>${quiz.quiz_time_in_sec}</h1>`);
  $('#app').append(`<form id="myForm"></form>`);
  quiz.quiz_questions.forEach((q, q_i) => {
    $('#myForm').append(`<div class='question-${q_i}'></div>`);
    $(`.question-${q_i}`).append(`<h2>${q.text}</h2>`);
    q.options.forEach((o, i) => {
      $(`.question-${q_i}`).append(
        `<input type="radio" name="radioName-${q_i}" value=${i} /> ${o.text} <br />`
      );
    });
  });
} else {
  window.location.href = '/';
}
