  const openModal = document.getElementById('openModal'); // header button
        const container = document.querySelector('.container'); // modal
        const closeBtn = document.querySelector('.close-btn');  // close X button

        // Open modal
        openModal.addEventListener('click', function(e) {
            e.preventDefault(); // stops page refresh
            container.style.display = 'flex';
        });

        // Close modal
        closeBtn.addEventListener('click', function() {
            container.style.display = 'none';
        });