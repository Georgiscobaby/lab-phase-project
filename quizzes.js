// JavaScript code in "your-quiz-script.js"
document.addEventListener('DOMContentLoaded', function () {
    let quizDuration = 120; // 2 minutes
    const countdownElement = document.getElementById('timer');
    let timerInterval;

    function updateTimer() {
        let minutes = Math.floor(quizDuration / 60);
        let seconds = quizDuration % 60;
        countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Add an event listener to start the timer when the button is clicked
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', function () {
        // Disable the start button to prevent multiple starts
        startButton.disabled = true;

        // Start the timer
        updateTimer();

        timerInterval = setInterval(function () {
            if (quizDuration > 0) {
                quizDuration--;
                updateTimer();
            } else {
                clearInterval(timerInterval);
                countdownElement.textContent = 'Time is up!';
                // You can trigger quiz submission or any other action here
            }
        }, 1000);
    });

    // Your code to generate quiz questions and handle submissions should go here
    const questions = [
        {
            question: "What is the name of Ben 10's first alien form?",
            correctAnswer: "Heatblast",
            falseAnswers: ["XLR8", "Four Arms"]
        },
        {
            question: "Which alien has super speed?",
            correctAnswer: "XLR8",
            falseAnswers: ["Heatblast", "Four Arms"]
        },
        {
            question: "What is the name of the device that allows Ben Tennyson to transform into various alien creatures?",
            correctAnswer: "Omnitrix",
            falseAnswers: ["Exotrix", "Transforminator"]
        },
        {
            question: "Which alien form has the ability to shoot fire from its hands?",
            correctAnswer: "Heatblast",
            falseAnswers: ["Firestorm", "Inferno"]
        },
        {
            question: "What is the name of Ben's cousin who also possesses a unique device called the Ultimatrix?",
            correctAnswer: "Gwen Tennyson",
            falseAnswers: ["Julie Levin", "Sarah Johnson"]
        },
        {
            question: "Which alien form has incredible strength and four arms?",
            correctAnswer: "Four Arms",
            falseAnswers: ["Strongarm", "Powerfist"]
        },
        {
            question: "What is the name of Ben's arch-nemesis and fellow wielder of the Omnitrix?",
            correctAnswer: "Kevin Levin",
            falseAnswers: ["Victor Volt", "Ethan Steel"]
        },
        {
            question: "Who is the main antagonist of the original Ben 10 series and the wielder of the Nemetrix?",
            correctAnswer: "Vilgax",
            falseAnswers: ["Malware", "Hexxor"]
        },
        {
            question: "What is the name of Ben's grandfather, who is a legendary Plumber and a mentor to Ben?",
            correctAnswer: "Max Tennyson",
            falseAnswers: ["Grandpa Phil", "Professor Wilson"]
        },
        {
            question: "Which alien form has the ability to manipulate time and space?",
            correctAnswer: "Clockwork",
            falseAnswers: ["Timewarp", "Chronomaster"]
        }
        // Add more questions and answers here
    ];
    const submitButton = document.getElementById('submit-button');
    const quizContainer = document.getElementById('quiz-container');
    let correctAnswers = 0;

    // Create question elements (replace this with your code to generate questions)
    // Create question elements
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.id = `question${index + 1}`;
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <h2>Question ${index + 1}:</h2>
            <p>${question.question}</p>
        `;

        // Create radio buttons and labels for all options
        const options = [question.correctAnswer, ...question.falseAnswers];
        options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('form-check');
            optionDiv.innerHTML = `
                <input type="radio" class="form-check-input" name="q${index + 1}" value="${option}" id="q${index + 1}_option${i}">
                <label class="form-check-label" for="q${index + 1}_option${i}">${option}</label>
            `;
            questionDiv.appendChild(optionDiv);
        });

        quizContainer.appendChild(questionDiv);
    });

    // Add event listener for submit button
    submitButton.addEventListener('click', function () {
        correctAnswers = 0;

        questions.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name=q${index + 1}]:checked`);

            if (selectedAnswer) {
                const userAnswer = selectedAnswer.value;
                if (userAnswer === question.correctAnswer) {
                    correctAnswers++;
                }
            }
        });

        const percentageCorrect = (correctAnswers / questions.length) * 100;

        if (percentageCorrect >= 80) {
            alert("Congratulations! You win a free collection from the merchandise page!");
        } else {
            alert("Sorry, you did not win this time. Try again!");
        }
        // Replace the alert for success with custom modal
        
if (percentageCorrect >= 80) {
    $('#success-modal').modal('show'); // Show success modal
} else {
    $('#failure-modal').modal('show'); // Show failure modal
}




    });

    
});
