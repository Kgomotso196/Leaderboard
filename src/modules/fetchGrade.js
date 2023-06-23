import showGrade from './showGrade.js';

class Grades {
  constructor() {
    this.tbody = document.querySelector('.body-area');
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/';
  }

  render = () => {
    showGrade(this.tbody, this.url);
  };
}
export default Grades;