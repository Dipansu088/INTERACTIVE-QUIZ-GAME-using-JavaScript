# INTERACTIVE-QUIZ-GAME-using-JavaScript

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: DIPANSU PATTANAYAK

*INTERN ID*: CT04DM74

*DOMAIN*: FRONT-END DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

##This project is a simple, responsive, and interactive quiz application built using HTML, CSS, and JavaScript. The design and functionality are split across three main files: index.html, style.css, and script.js, each responsible for structure, styling, and logic, respectively.

1. index.html
The index.html file serves as the structural foundation of the quiz. It uses standard HTML5 elements to lay out a quiz interface. The page includes a central <div> element with the ID box, which contains:

A heading for the current question.

Four multiple-choice radio button inputs, each paired with a label.

A Submit button that triggers the quiz submission logic.

The HTML is linked with style.css for design and script.js for behavior. Semantic and responsive layout practices are followed, making the content easily readable and well-aligned on various screen sizes. Notably, the page uses a container with a class main to center all elements vertically and horizontally.

2. style.css
The style.css file is responsible for the visual styling and layout of the quiz. The background color is a deep blue shade (#182C61), providing a calm and focused atmosphere. The quiz box (#box) is styled with a white background, rounded corners, and a soft glowing shadow (box-shadow: 0px 0px 10px #F8EFBA), which gives it a modern card-like appearance.

The .row class is applied to each option’s container to provide padding and spacing, ensuring the UI remains clean and accessible. The custom styles for radio buttons (input[type="radio"].option) include a larger size and accent color (#F97F51), making them more touch-friendly and visually distinct.

Buttons (.btn) are styled with a bold coral background, rounded edges, and centralized text. The final score and message are displayed in a centered layout using the #tk ID. Overall, the styling ensures good usability and readability, even for users on smaller devices.

3. script.js
The script.js file powers the logic and interactivity of the quiz. It contains:

An array of question objects, each with the question text, four options labeled A–D, and the correct answer.

A set of functions to load questions (loadQuestion()), check user answers (getAnswer()), evaluate correctness (submitQuiz()), reset inputs (reset()), and display results (endQuiz()).

When a user selects an answer and clicks the submit button, their response is checked against the correct answer. Their score is tracked using right and wrong counters. After the final question, the endQuiz() function dynamically updates the HTML to show the score, percentage, and a “Play Again” button that reloads the page.


