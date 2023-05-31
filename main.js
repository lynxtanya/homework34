'use strict';

const popup = document.querySelector('.popup');

popup.addEventListener('click', (e) => {

    if(e.target.classList.contains('btn-more')) {
        
        popup.classList.toggle('active');
    }
    
});

function Voter(options) {
    const elem = options.elem;

    const voteElem = elem.querySelector('.vote');

    elem.onclick = function(event) {
      if (event.target.closest('.down')) {
        voteDecrease();
      } else if (event.target.closest('.up')) {
        voteIncrease();
      }
    }

    elem.onmousedown = function() {
      return false;
    };

    function voteDecrease() {
      voteElem.innerHTML = +voteElem.innerHTML - 1;
    }

    function voteIncrease() {
      voteElem.innerHTML = +voteElem.innerHTML + 1;
    }

    this.setVote = function(vote) {
      voteElem.innerHTML = +vote;
    };

  }

const voter = new Voter({
    elem: document.getElementById('voter')
  });
  voter.setVote(0);

const voter02 = new Voter({
    elem: document.getElementById('voter02')
  });
  voter02.setVote(0);

  const voter03 = new Voter({
    elem: document.getElementById('voter03')
  });
  voter03.setVote(0);

  const voter04 = new Voter({
    elem: document.getElementById('voter04')
  });
  voter04.setVote(0);

  const voter05 = new Voter({
    elem: document.getElementById('voter05')
  });
  voter05.setVote(0);

  const voter06 = new Voter({
    elem: document.getElementById('voter06')
  });
  voter06.setVote(0);

  const voter07 = new Voter({
    elem: document.getElementById('voter07')
  });
  voter07.setVote(0);

  

  
  