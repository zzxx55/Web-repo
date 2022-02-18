import { printError, printREsult } from './printResult.js'
import getDateDiff from './getDateDiff.js'

const form = document.getElementById('datecalc')


form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target)

  const firsDate = formData.get('firstDate')
  const secondDate = formData.get('secondDate')

  if (!firsDate || !secondDate) {
    printError('Oooooopppsss - введите текст!!!!')
  } else {
    const dateDiff = getDateDiff(firsDate, secondDate)
    printREsult(dateDiff)
  }
}

import { Timer } from './timer.js';

new Timer(
  document.querySelector(".timer")
);

// import { Howl, Howler } from 'howler'; //не понимаю почему не работает, билиблиотека подключена

// const sound = new Howl({
//   src: ['sound.webm', 'sound.mp3', 'sound.wav'],
//   autoplay: true,
//   loop: true,
//   volume: 0.5,
//   onend: function () {
//     console.log('Finished!');
//   }
// });