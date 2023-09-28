//your code here
let draggingElement = null;

        // Event listener for when a drag starts
        document.addEventListener('dragstart', (event) => {
            draggingElement = event.target;
            event.dataTransfer.setData('text/plain', null); // Required for Firefox
            event.target.classList.add('dragging');
        });

        // Event listener for when a drag ends
        document.addEventListener('dragend', (event) => {
            draggingElement.classList.remove('dragging');
            draggingElement = null;
        });

        // Event listener for when a dragged item enters a drop target
        document.addEventListener('dragenter', (event) => {
            if (event.target.classList.contains('image')) {
                event.target.style.border = '2px dashed #000';
            }
        });

        // Event listener for when a dragged item leaves a drop target
        document.addEventListener('dragleave', (event) => {
            if (event.target.classList.contains('image')) {
                event.target.style.border = '';
            }
        });

        // Event listener for when a dragged item is over a drop target
        document.addEventListener('dragover', (event) => {
            event.preventDefault(); // Allow drop
        });

        // Event listener for when a dragged item is dropped onto a drop target
        document.addEventListener('drop', (event) => {
            event.preventDefault();
            if (event.target.classList.contains('image')) {
                event.target.style.border = '';
                swapImages(draggingElement, event.target);
            }
        });

        // Function to swap the positions of two images
        function swapImages(image1, image2) {
            const container = document.getElementById('parent');
            const images = Array.from(container.children);
            const index1 = images.indexOf(image1);
            const index2 = images.indexOf(image2);

            if (index1 !== -1 && index2 !== -1) {
                // Swap the images in the array
                [images[index1], images[index2]] = [images[index2], images[index1]];

                // Update the DOM to reflect the new order
                images.forEach((image) => container.appendChild(image));
            }
        }