let Guess;
let Total = 0;
let currentQuestion = 0;
let timer;
let timeRemaining = 600; // 600 seconds = 10 minutes

const questions = [
    {
        question: "What is the only function all C++ programs must contain?",
        options: ["start ()", "system ()", "main()", "program ()"],
        correctAnswer: 2,
        score: 10
    },
    {
        question: "Which of the following is a correct comment to use?",
        options: ["*/ Comments */", "/* Comments */", "** Comments **", "{Comments }"],
        correctAnswer: 1,
        score: 10
    },
    {
        question: "The statement i++; is equivalent to:",
        options: ["i = i + i", "i = i + 1", "i = i - 1", "i--"],
        correctAnswer: 1,
        score: 10
    },
    {
        question: "In C++, 14 % 4 = ",
        options: ["3", "i", "4", "2"],
        correctAnswer: 3,
        score: 10
    },
    {
        question: "When a data type must contain decimal numbers, assign the type: ",
        options: ["int", "char", "double", "long int"],
        correctAnswer: 2,
        score: 10
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1,
        score: 10
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: 0,
        score: 10
    },
    {
        question: "Which of the following is NOT a programming language?",
        options: ["Python", "Java", "HTML", "Ruby"],
        correctAnswer: 2,
        score: 10
    },
    
    {
        question: "Which of the following is a correct JavaScript syntax to change the content of an HTML element with id 'demo'?",
        options: ["document.getElementByName('demo').innerHTML = 'Hello World!'", "document.getElementById('demo').innerHTML = 'Hello World!'", "document.getElement('demo').innerHTML = 'Hello World!'", "document.getElementByID('demo').innerHTML = 'Hello World!'"],
        correctAnswer: 1,
        score: 10
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "#", "/* */", "--"],
        correctAnswer: 0,
        score: 10
    },
   
    {
        question: "Which of the following is not a JavaScript framework?",
        options: ["React", "Angular", "Vue", "JavaFX"],
        correctAnswer: 3,
        score: 10
    },
   
    {
        question: "Which company developed JavaScript?",
        options: ["Google", "Facebook", "Netscape", "Microsoft"],
        correctAnswer: 2,
        score: 10
    },
   
    {
        question: "Which of the following is used to define variables in JavaScript?",
        options: ["let", "var", "const", "All of the above"],
        correctAnswer: 3,
        score: 10
    },
    

        {
            question: "What does DBMS stand for?",
            options: ["Database Management System", "Data Manipulation System", "Digital Binary Management System", "Diverse Business Management Software"],
            correctAnswer: 0,
            score: 10
        },
        {
            question: "Which of the following is not a type of database model?",
            options: ["Hierarchical model", "Network model", "Relational model", "Circular model"],
            correctAnswer: 3,
            score: 10
        },
        {
            question: "What is a primary key in a relational database?",
            options: ["A key that uniquely identifies each record in a table", "A key used for foreign key references", "A key used to secure the database", "A key that allows null values"],
            correctAnswer: 0,
            score: 10
        },
        {
            question: "Which SQL keyword is used to retrieve data from a database?",
            options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
            correctAnswer: 1,
            score: 10
        },
        {
            question: "In SQL, what is the purpose of the WHERE clause?",
            options: ["To specify the columns to be retrieved", "To specify the tables to be queried", "To specify conditions for selecting rows", "To specify the order of the result set"],
            correctAnswer: 2,
            score: 10
        },
        {
            question: "What is a foreign key in a relational database?",
            options: ["A key that uniquely identifies each record in a table", "A key used for referencing another table's primary key", "A key used for securing the database", "A key that allows null values"],
            correctAnswer: 1,
            score: 10
        },
        {
            question: "What is normalization in DBMS?",
            options: ["A process of organizing data in a database", "A process of reducing data redundancy", "A process of removing data from a database", "A process of encrypting data in a database"],
            correctAnswer: 0,
            score: 10
        },
        {
            question: "Which SQL command is used to add, modify, or drop columns in a table?",
            options: ["ALTER TABLE", "UPDATE TABLE", "MODIFY TABLE", "CHANGE TABLE"],
            correctAnswer: 0,
            score: 10
        },
        {
            question: "What does ACID stand for in the context of database transactions?",
            options: ["All Columns In Database", "Atomicity, Consistency, Isolation, Durability", "Advanced Caching and Indexing Design", "Automatic Change Identification and Deletion"],
            correctAnswer: 1,
            score: 10
        },
        {
            question: "What is the purpose of indexing in a database?",
            options: ["To provide additional security", "To improve the performance of data retrieval", "To encrypt sensitive data", "To prevent data loss"],
            correctAnswer: 1,
            score: 10
        }
    ];
    


    const quizContainer = document.getElementById('quiz');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');
    const timerElement = document.getElementById('timer');
    const startBtn = document.getElementById('startBtn');
    
    startBtn.addEventListener('click', startQuiz);
    
    function startQuiz() {
        // Get username from input field
        let username = document.getElementById("usernameInput").value.trim();
        if (username === "") {
            alert("Please enter your name to start the quiz.");
            return;
        }
        // Hide input field and start button
        document.getElementById("usernameInput").style.display = "none";
        startBtn.style.display = 'none';
        displayQuestion();
        startTimer();
    }
    
    function displayQuestion() {

        const progress = ((currentQuestion + 1) / questions.length) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        
            const currentQuestionData = questions[currentQuestion];
            questionElement.textContent = currentQuestionData.question;
            optionsElement.innerHTML = "";
            
            currentQuestionData.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = `${index + 1}. ${option}`;
                button.className = 'option';
                button.onclick = () => checkAnswer(index);
                optionsElement.appendChild(button);
            });
        }
        function checkAnswer(index) {
            if (index === questions[currentQuestion].correctAnswer) {
                Total += questions[currentQuestion].score;
            }
            currentQuestion++;
            if (currentQuestion < questions.length) {
                displayQuestion();
            } else {
                endQuiz();
            }
        }
    
    function endQuiz() {
        clearInterval(timer);
        questionElement.textContent = "";
        optionsElement.innerHTML = "";
        resultElement.textContent = `Your total score is ${Total} out of ${questions.length * 10}`;
        if (Total >= 50) {
            resultElement.textContent += ". Great, you passed the test!";
        } else {
            resultElement.textContent += ". Sorry, you failed the test. Better luck next time!";
        }
    }
    
    function startTimer() {
        timer = setInterval(updateTimer, 1000);
    }
    
    const leaderboardList = document.getElementById('leaderboard-list');
    
    function updateLeaderboard(username, score) {
        const listItem = document.createElement('li');
        listItem.textContent = `${username}: ${score}`;
        leaderboardList.appendChild(listItem);
    }
    updateLeaderboard("User1", 100);
    updateLeaderboard("User2", 90);
    updateLeaderboard("User3", 80);
    
    function updateTimer() {
        const minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerElement.textContent = `Time Remaining: ${minutes}:${seconds}`;
        if (timeRemaining === 0) {
            clearInterval(timer);
            endQuiz();
        } else {
            timeRemaining--;
        }
    }