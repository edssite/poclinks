export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`columns-${cols.length}-cols`);
  
    // setup FAQ accordion
    const questions = block.querySelectorAll('h3');
    
    questions.forEach((question) => {
      question.addEventListener('click', () => {
        const answer = question.parentElement.nextElementSibling.querySelector('p');
        console.log('answer-----', answer)
        question.classList.toggle('active');
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
  }
  