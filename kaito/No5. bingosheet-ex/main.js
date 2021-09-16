const sheet = document.getElementById('view');
const sheetContent = [];

const newSheet = function() {
  for (let x = 0; x < 6; x++) {
    const tr = document.createElement('tr');
    sheet.appendChild(tr);

    for (let y = 0; y < 5; y++) {
      let td = document.createElement('td');
      if (x === 0) {
        switch (y) {
          case 0: {
            td.textContent = 'B';
            break;
          }
          case 1: {
            td.textContent = 'I';
            break;
          }
          case 2: {
            td.textContent = 'N';
            break;
          }
          case 3: {
            td.textContent = 'G';
            break;
          }
          case 4: {
            td.textContent = 'O';
            break;
          }
        }
      } else {
        switch (y) {
          case 0: {
            check(y, td);
            break;
          }
          case 1: {
            check(y, td);
            break;
          }
          case 2: {
            if (x === 3) {
              td.textContent = 'free';
              td.setAttribute('class', 'hit-num');
              break;
            }
            check(y, td);
            break;
          }
          case 3: {
            check(y, td);
            break;
          }
          case 4: {
            check(y, td);
            break;
          }
        }
      }
      tr.appendChild(td);
    }
  }
};

const check = function(y, td) {
  while (true) {
    let calc = Math.floor(Math.random() * 15 + 15 * y + 1);

    if (!sheetContent.includes(calc)) {
      sheetContent.push(calc);
      td.textContent = calc;
      td.setAttribute('id', sheetContent.length - 1);
      break;
    }
  }
};

console.log(sheetContent);

newSheet();

// チャレンジ問題

const numLog = [];

const hitNum = document.getElementById('hitNum');

hitNum.addEventListener('click', function() {
  while (true) {
    let randomNum = Math.floor(Math.random() * 75 + 1);

    if (!numLog.includes(randomNum)) {
      alert(`数字は${randomNum}番です！`);
      numLog.push(randomNum);
      let result = sheetContent.indexOf(randomNum);
      if (result === -1) {
        return;
      }
      const target = document.getElementById(result);
      target.setAttribute('class', 'hit-num');
      break;
    }
  }
});

// チャレンジ問題 ここまで
