document.querySelectorAll('.draggable').forEach(item => {
    let isDragging = false;
    let currentX = 0;
    let currentY = 0;
    let initialX = 0;
    let initialY = 0;

    item.style.position = 'absolute'; 

    item.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        isDragging = true;
        initialX = e.clientX - currentX;
        initialY = e.clientY - currentY;
        item.style.cursor = 'grabbing';
        item.style.zIndex = 1000; 
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            item.style.left = `${currentX}px`;
            item.style.top = `${currentY}px`;
        }
    }

    function dragEnd() {
        isDragging = false;
        item.style.cursor = 'grab';
        item.style.zIndex = 1;
    }
});

document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('mouseover', (e) => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.transition = 'transform 0.3s';
    });

    item.addEventListener('mouseout', (e) => {
        e.target.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.why-list li').forEach(item => {
    item.addEventListener('mouseover', e => {
      if (!e.target.contains(e.relatedTarget)) {
        e.target.style.backgroundColor = '#519fe7';
        e.target.style.color = '#e93944';
      }
    });
    item.addEventListener('mouseout', e => {
      if (!e.target.contains(e.relatedTarget)) {
        e.target.style.backgroundColor = '';
        e.target.style.color = '';
      }
    });
});