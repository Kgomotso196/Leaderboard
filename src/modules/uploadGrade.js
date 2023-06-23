const Document = document.querySelector('form');
const uploadGrade = async (url, render) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: Document.name.valueOf,
        score: Document.score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    Document.name.valueOf = '';
    Document.score.value = '';
    render();
    return res.json();
  } catch (error) {
    return false;
  }
};
export default uploadGrade;