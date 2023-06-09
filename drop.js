const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging') // Adding the items to other containers
        console.log("drop item successfully")
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')    // removing the items to other containers
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()  // this is change our cursor to drop the items
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)

    })
})


// clear the second container items
function clearItems() {
    var container2 = document.getElementById("container2");
    while (container2.firstChild) {
        container2.removeChild(container2.firstChild);
        console.log("Clear item successfully")
    }

}

