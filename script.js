// Define an array of phrases and their corresponding acceptable answers
const phrases = [
    { phrase: "The cat is on the mat.", answers: ["The feline is on the rug.", "A kitty is resting on the mat.", "The feline rests upon the mat.", "The cat lies on the mat.", "The cat is positioned on the mat.", "The mat has a cat on it.", "The mat has a feline on it.", "A mat is underneath the cat.", "The cat is perched on the mat."] },
    { phrase: "I enjoy playing the piano.", answers: ["I love tickling the ivories.", "I take pleasure in playing the piano.", "Playing the piano brings me joy.", "I derive enjoyment from playing the piano.", "I find delight in playing the piano.", "Playing the piano is a source of joy for me.", "The piano brings me happiness when I play.", "I get a sense of satisfaction from playing the piano.", "Playing the piano is enjoyable to me.", "I have fun playing the piano."] },
    { phrase: "The sun sets in the west.", answers: ["The sun goes down in the western sky.", "The sun sinks in the west.", "The western horizon is where the sun sets.", "The sun descends in the west.", "The sun drops below the western horizon.", "The sun moves towards the west as it sets.", "The west is where the sun sets.", "The sun dips below the western horizon.", "The sun disappears below the western horizon.", "The westward sky is where the sun sets."] },
    // Add more phrases with their corresponding answers
    { phrase: "She was incredibly tired.", answers: ["She was extremely exhausted.", "She was extremely fatigued.", "She was very weary.", "She was excessively worn out.", "She was absolutely drained.", "She was totally worn out.", "She was utterly fatigued.", "She was downright exhausted.", "She was completely knackered.", "She was seriously pooped."] },
    { phrase: "He is a skilled guitarist.", answers: ["He is a talented guitar player.", "He is a proficient guitar player.", "He is an accomplished guitarist.", "He is a skilled guitar player.", "He is a masterful guitarist.", "He is a capable guitar player.", "He is an expert guitarist.", "He is a gifted guitar player.", "He is a virtuoso guitarist.", "He is an outstanding guitar player."] },
    { phrase: "The car broke down on the highway.", answers: ["The car malfunctioned on the highway.", "The car experienced a breakdown on the highway.", "The car failed on the highway.", "The car stopped working on the highway.", "The car had a mechanical failure on the highway.", "The car ceased functioning on the highway.", "The car encountered a breakdown on the highway.", "The car had a breakdown on the highway.", "The car had engine trouble on the highway.", "The car came to a halt on the highway."] },
    { phrase: "The movie was captivating.", answers: ["The movie was engrossing.", "The movie was enthralling.", "The movie was mesmerizing.", "The movie was spellbinding.", "The movie was captivating.", "The movie was gripping.", "The movie was absorbing.", "The movie was riveting.", "The movie was thrilling.", "The movie was compelling."] },
    { phrase: "She ran as fast as lightning.", answers: ["She ran as swift as a thunderbolt.", "She ran as quick as a flash.", "She ran as rapid as lightning.", "She ran as fast as a bolt of lightning.", "She ran as speedy as a lightning strike.", "She ran as fleet as lightning.", "She ran as quick as a lightning bolt.", "She ran as swift as a lightning flash.", "She ran as rapid as a lightning strike.", "She ran as fast as a streak of lightning."] },
    { phrase: "He speaks fluently in three languages.", answers: ["He is proficient in three languages.", "He is skilled in three languages.", "He is fluent in three languages.", "He speaks three languages with fluency.", "He is conversant in three languages.", "He speaks three languages with ease.", "He has mastery over three languages.", "He is capable of speaking three languages fluently.", "He is adept at speaking three languages.", "He has a command of three languages."] },
    { phrase: "The rain poured heavily.", answers: ["The rain came down heavily.", "The rain fell heavily.", "The rain poured down in torrents.", "The rain poured down heavily.", "The rain showered intensely.", "The rain cascaded heavily.", "The rain descended heavily.", "The rain fell in a deluge.", "The rain came down in sheets.", "The rain gushed heavily."] },
];

// Get DOM elements
const sentencePrompt = document.getElementById("sentence-prompt");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const scoreValue = document.getElementById("score-value");

let currentPhraseIndex = 0;
let score = 0;

// Function to update the sentence prompt
function updateSentencePrompt() {
    sentencePrompt.textContent = phrases[currentPhraseIndex].phrase;
}

function resetGame() {
    scoreValue.textContent = score;
    score = 0;
    currentPhraseIndex = 0;
    updateSentencePrompt();
}

// Function to handle the player's submission
function submitAnswer() {
    const playerAnswer = answerInput.value.trim();

    // Retrieve the correct answers for the current phrase
    const correctAnswers = phrases[currentPhraseIndex].answers;

    // Check if the player's answer matches any of the correct answers
    const isCorrectAnswer = correctAnswers.some(answer => playerAnswer.toLowerCase() === answer.toLowerCase());

    if (isCorrectAnswer) {
        // Handle correct answer
        score += 10;
        scoreValue.textContent = score;
        alert("Correct answer!");
    } else {
        // Handle incorrect answer
        alert("Incorrect answer!");
        updateSentencePrompt();
    }

    // Move to the next phrase
    currentPhraseIndex++;
    if (currentPhraseIndex < phrases.length) {
        updateSentencePrompt();
    } else {
        // End of the game
        if(score / 10 === phrases.length){
            alert(`Your score is ${score}. You've answered all of the questions correctly.`);
        } else {
            alert(`Your score is ${score}. You got ${score / 10} questions correct out of ${phrases.length}`);
        }
    }

    // Clear the input field
    answerInput.value = "";
}

// Add event listener for the submit button
submitBtn.addEventListener("click", submitAnswer);

// Initialize the game
updateSentencePrompt();
