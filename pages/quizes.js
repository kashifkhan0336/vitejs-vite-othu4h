import ArgonStorage from 'argon-storage';
const store = new ArgonStorage({ compress: true });
let score = 0;
let isSubmit = false;
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
function submit() {
  console.log('Submit function exec!');
  $('body').css('pointer-events', 'none').css('filter', 'blur(1px)');
  quiz.quiz_questions.forEach((q, q_i) => {
    // console.log(store.get(`q_${q_i}`)['ans']);
    if (store.get(`q_${q_i}`)['ans'] == parseInt(selection())) {
      console.log('correct answer');
      score += 1;
    } else {
      console.log('Wrong answer');
    }

    function selection() {
      if ($(`input:radio[name ='question-${q_i}']:checked`).val()) {
        return $(`input:radio[name ='question-${q_i}']:checked`).val();
      } else {
        return '0';
      }
    }
  });
  console.log(`${score}/${quiz.quiz_questions.length}`);
}
$(document).ready(function () {
  $('.submit').click(function () {
    submit();
    isSubmit = true;
  });
  quiz.quiz_questions.forEach((q, q_i) => {
    $(`input[type=radio][name=radio-${q_i}]`).change(function () {
      console.log('lol');
    });
  });
});
if (store.get('auth') == 'YXV0aF9zcw==') {
  var fiveSeconds =
    new Date().getTime() + parseInt(quiz.quiz_time_in_sec) * 1000;
  $('#timer')
    .countdown(fiveSeconds)
    .on('update.countdown', function (event) {
      var $this = $(this);

      $this.html(event.strftime('<span>%H:%M:%S</span>'));
    })
    .on('finish.countdown', function (event) {
      $(this).html('Time UP!');
      if (!isSubmit) {
        submit();
        isSubmit = true
      }
      localStorage.clear();
    });
  $('#app').append(`<h1>${quiz.quiz_name}</h1>`);
  $('#app').append(`<h1>${quiz.quiz_time_in_sec}</h1>`);
  $('#app').append(`<form id="myForm"></form>`);
  quiz.quiz_questions.forEach((q, q_i) => {
    store.set(`q_${q_i}`, { q: q.index, ans: q.correct_option_index });
    console.log(store.get('a'));
    $('#myForm').append(`<div class='question-${q_i}'></div>`);
    $(`.question-${q_i}`).append(`<h2>${q.text}</h2>`);
    q.options.forEach((o, i) => {
      $(`.question-${q_i}`).append(
        `<input type="radio" name="question-${q_i}" value=${i} /> ${o.text} <br />`
      );
    });
  });
  $('#app').append("<button class='submit'>Submit</button>");
} else {
  window.location.href = '/';
}
