var modals = document.getElementsByClassName('modal');

function openProject(projectId) {
    document.getElementById(projectId).style.display = "block";
}

function closeProject(projectId) {
    document.getElementById(projectId).style.display = "none";
}

window.onclick = function(event) {
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

