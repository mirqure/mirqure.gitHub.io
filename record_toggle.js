document.addEventListener('DOMContentLoaded', function() {
    // Get all toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    // Add click event to each toggle button
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the filter type (boys, girls, varsity, freshman)
            const filter = this.getAttribute('data-filter');
            
            // Determine if this is a gender or level button
            const isGenderButton = filter === 'boys' || filter === 'girls';
            
            // Deactivate all buttons in the same container
            const siblingButtons = this.parentElement.querySelectorAll('.toggle-btn');
            siblingButtons.forEach(sibling => {
                sibling.classList.remove('active');
            });
            
            // Activate the clicked button
            this.classList.add('active');
            
            // Get the currently active gender and level
            const genderContainer = document.querySelector('.toggle-container:nth-of-type(1)');
            const levelContainer = document.querySelector('.toggle-container:nth-of-type(2)');
            
            const activeGender = genderContainer.querySelector('.toggle-btn.active').getAttribute('data-filter');
            const activeLevel = levelContainer.querySelector('.toggle-btn.active').getAttribute('data-filter');
            
            // Hide all tables
            const allTables = document.querySelectorAll('.record-table');
            allTables.forEach(table => {
                if (!table.classList.contains('diving')) {
                    table.classList.add('hidden');
                }
            });
            
            // Show the table that matches both active filters
            const activeTable = document.querySelector(`.record-table.${activeGender}.${activeLevel}`);
            if (activeTable) {
                activeTable.classList.remove('hidden');
            }
        });
    });
    
    // Initially trigger click on the default active buttons to set up the correct view
    const defaultButtons = document.querySelectorAll('.toggle-btn.active');
    if (defaultButtons.length > 0) {
        defaultButtons[0].click();
    }
});
