// Code to run on webpage load.

function element_drag(event) {
    // Prevent event default.
    event.preventDefault();
    // Get element.
    let element = event.target

    // Setup drag function.
    const drag = (move_event) => {
        move_event.preventDefault();
        switch (move_event.type) {
            case "touchmove":
                element.style.left = `${move_event.touches[0].pageX - element.offsetWidth/2}px`;
                element.style.top = `${move_event.touches[0].pageY - element.offsetHeight/2}px`;
                break;
        
            case "mousemove":
                element.style.left = `${move_event.pageX - element.offsetWidth/2}px`;
                element.style.top = `${move_event.pageY - element.offsetHeight/2}px`;
                break;
    
            default:
                return;
        }
    }

    let passed = true;

    // Switch to determine behaviour based on if event is touch or click.
    switch (event.type) {
        case "touchstart":
            element.style.left = `${event.touches[0].pageX - element.offsetWidth/2}px`;
            element.style.top = `${event.touches[0].pageY - element.offsetHeight/2}px`;

            document.addEventListener('touchmove', drag, {passive: false});
            
            document.addEventListener('touchend', () => {
                document.removeEventListener("touchmove", drag);
                widget_container.appendChild(element);
            }, {once: true, passive: false});

            break;
    
        case "mousedown":
            element.style.left = `${event.pageX - element.offsetWidth/2}px`;
            element.style.top = `${event.pageY - element.offsetHeight/2}px`;

            document.addEventListener('mousemove', drag);

            document.addEventListener('mouseup', () => {
                document.removeEventListener("mousemove", drag);
                widget_container.appendChild(element);
            }, {once: true});

            break;

        default:
            passed = false;
    }
    if (passed) {
        document.body.appendChild(element);
    }
}

window.onload = function() {
    const draggables = document.getElementsByClassName('widget');
    const widget_container = document.getElementById("widget_container");

    for (let i = 0; i < draggables.length; i++) {
        draggables[i].addEventListener("touchstart", element_drag, {passive: false});
        draggables[i].addEventListener("mousedown", element_drag);
    }
}    