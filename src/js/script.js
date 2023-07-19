const menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger'),
      close = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
});


//робота із span, % скіла
const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});


$(document).ready(function(){
  //валідація форм
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        check: {
          required: true
        }
      },
      messages: {
        name:
        {
          required: "Будь-ласка, введіть Ваше ім'я",
          minlength: jQuery.validator.format("Введіть {0} символа!")
        },
        email: {
          required: "Будь-ласка, введіть Вашу пошту",
          email: "Невірно введена адреса пошти"
        },
        check: {
          required: "Даний пункт є обов'язковим"
        }
      }
    });
  };

  validateForms('.contacts__form');
});

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(!$(this).valid()) {//щоб не відправлялися пусті форми
      return;//якщо форма не пройшла валідацію, то ми нічого не будемо робити
    }

    const formData = new FormData(form);

    fetch('mailer/smart.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      // Відобразити повідомлення про успішне відправлення або зробити інші дії
      console.log(data);
      // Очищення полів вводу
      form.reset();
    })
    .catch(error => {
      console.error('Помилка:', error);
    });
});