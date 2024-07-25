document.addEventListener('DOMContentLoaded', function() {
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const missionInput = document.getElementById('missionInput');
    const enterButton = document.getElementById('enterButton');
    const newMissionButton = document.getElementById('newMission');
    const missionNameDisplay = document.getElementById('missionName');
    const missionPassedElement = document.getElementById('missionPassed');
    const respectPlusElement = document.getElementById('respectPlus');
    const missionCompleteAudio = document.getElementById('missionCompleteAudio');

    // Initially set enterButton opacity to 0%
    enterButton.style.opacity = '0';

    // Event listener for missionInput input
    missionInput.addEventListener('input', function() {
        if (missionInput.value.trim() !== '') {
            enterButton.style.transition = 'opacity 0.5s ease-in-out'; // Smooth transition
            enterButton.style.opacity = '1'; // Increase opacity when input is not empty
        } else {
            enterButton.style.transition = 'opacity 0.5s ease-in-out'; // Smooth transition
            enterButton.style.opacity = '0'; // Decrease opacity when input is empty
        }
    });

    // Event listener for form submission on Enter key press
    document.getElementById('missionForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        if (enterButton.textContent === 'Enter') {
            enterButton.textContent = 'Mark Complete';
        } else {
            submitMission();
        }
        missionInput.blur(); // Blur the input field after form submission
    });

    // Event listener for enterButton click
    enterButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        if (enterButton.textContent === 'Enter') {
            enterButton.textContent = 'Mark Complete';
        } else {
            submitMission();
        }
        missionInput.blur(); // Blur the input field after button click
    });

    // Event listener for missionInput focus
    missionInput.addEventListener('focus', function() {
        this.setAttribute('data-placeholder', this.getAttribute('placeholder'));
        this.setAttribute('placeholder', '');
    });

    // Event listener for missionInput blur
    missionInput.addEventListener('blur', function() {
        this.setAttribute('placeholder', this.getAttribute('data-placeholder'));
        this.removeAttribute('data-placeholder');
    });

    // Function to handle form submission
    function submitMission() {
        const missionName = missionInput.value.trim();

        // Display mission name on screen 1 and screen 2
        missionNameDisplay.textContent = missionName;

        // Show screen 2 and hide screen 1
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');

        // Optional: Display mission passed and respect+ elements
        missionPassedElement.classList.remove('hidden');
        respectPlusElement.classList.remove('hidden');

        // Play mission complete audio
        missionCompleteAudio.play();

        missionInput.value = ''; // Clear the input field
    }

    // Event listener for newMissionButton click
    newMissionButton.addEventListener('click', function() {
        // Clear the input field and mission name display
        missionInput.value = '';
        missionNameDisplay.textContent = '';

        // Reset button text to "Enter"
        enterButton.textContent = 'Enter';

        // Hide screen 2 and show screen 1
        screen2.classList.add('hidden');
        screen1.classList.remove('hidden');

        // Optional: Hide mission passed and respect+ elements
        missionPassedElement.classList.add('hidden');
        respectPlusElement.classList.add('hidden');

        missionInput.blur(); // Ensure input field is not focused
    });
});