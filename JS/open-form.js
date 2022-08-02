const musicStudioSelectionElement = document.getElementById('music-form-selected');
const photographyStudioSelectionElement = document.getElementById('photography-form-selected');
const musicFormElement = document.getElementById('music-form');
const photographyFormElement = document.getElementById('photography-form');


function openMusicForm() {
    musicFormElement.style.display = 'block';
    musicStudioSelectionElement.style.backgroundColor = 'rgb(31, 66, 244)';
    musicStudioSelectionElement.style.color = 'rgb(238, 238, 238)';


    photographyFormElement.style.display = 'none';
    photographyStudioSelectionElement.style.backgroundColor = 'rgb(243, 242, 242)';
    photographyStudioSelectionElement.style.color = 'rgb(33, 36, 39)';
}



function openPhotographyForm() {
    photographyFormElement.style.display = 'block';
    photographyStudioSelectionElement.style.backgroundColor = 'rgb(31, 66, 244)';
    photographyStudioSelectionElement.style.color = 'rgb(238, 238, 238)';


    musicFormElement.style.display = 'none';
    musicStudioSelectionElement.style.backgroundColor = 'rgb(243, 242, 242)';
    musicStudioSelectionElement.style.color = 'rgb(33, 36, 39)';
}


musicStudioSelectionElement.addEventListener('click', openMusicForm);
photographyStudioSelectionElement.addEventListener('click', openPhotographyForm);