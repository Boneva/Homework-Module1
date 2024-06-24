document.addEventListener('DOMContentLoaded', function () {
    const selectableElements = document.querySelectorAll('.selectable');
    const modalBody = document.querySelector('.modal-body');
    const selectedActivities = [];

    selectableElements.forEach(element => {
        element.addEventListener('click', function () {
            const activityText = this.textContent.trim();

            if (!selectedActivities.includes(activityText)) {
                selectedActivities.push(activityText);
                this.classList.add('selected');
            } else {
                // If the activity is already selected, remove it from the array
                const index = selectedActivities.indexOf(activityText);
                if (index > -1) {
                    selectedActivities.splice(index, 1);
                    this.classList.remove('selected');
                }
            }

            updateModalContent();
        });
    });

    function updateModalContent() {
        modalBody.innerHTML = selectedActivities.join('<br>');
    }
});
