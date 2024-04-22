document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let score = 0;

    // Question 1
    if (document.getElementById('q1a').checked && document.getElementById('q1Correct').value === 'Islamabad') {
        score++;
    }

    // Question 2
    if (document.getElementById('q2a').checked && document.getElementById('q2Correct').value === 'Indus River') {
        score++;
    }

    // Question 3
    if (document.getElementById('q3a').checked && document.getElementById('q3Correct').value === 'Himalayas') {
        score++;
    }

    // Question 4
    if (document.getElementById('q4a').checked && document.getElementById('q4Correct').value === 'Field Hockey') {
        score++;
    }

    // Question 5
    if (document.getElementById('q5a').checked && document.getElementById('q5Correct').value === 'Indus Valley Civilization') {
        score++;
    }
    localStorage.setItem('quizScore', score);
    window.location.href = 'result.html';
});
