document.addEventListener('DOMContentLoaded', function () {



// JavaScript for handling My Collections page

// Image Upload

const uploadForm = document.getElementById('upload-form');
const artworkTitle = document.getElementById('artwork-title');
const artworkImage = document.getElementById('artwork-image');
const artworkContainer = document.getElementById('artwork-container');

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = artworkTitle.value;
    const files = artworkImage.files;

    if (title.trim() === '' || files.length === 0) {
        alert('Please provide a title and select at least one image to upload.');
        return;
    }

    // Create a new artwork element for each selected image
    Array.from(files).forEach(file => {
        const artworkElement = createArtworkElement(title, file);
        artworkContainer.appendChild(artworkElement);
    });

    // Reset the form
    artworkTitle.value = '';
    artworkImage.value = '';
});


function createArtworkElement(title,file) {
    const div = document.createElement('div');
    div.classList.add('col-md-4', 'mt-3');

    const card = document.createElement('div');
    card.classList.add('card');


    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = URL.createObjectURL(file);
    img.alt = title;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;

    const likeButton = document.createElement('button');
    likeButton.classList.add('btn', 'btn-primary', 'mt-2');
    likeButton.textContent = 'Like';



   const shareButton = document.createElement('button');
    shareButton.classList.add('btn', 'btn-primary', 'mt-2', 'ml-2');
    shareButton.textContent = 'Share';

    const likesCount = document.createElement('span');
    likesCount.textContent = '0 likes';

    likeButton.addEventListener('click', () => {
        // Increment the likes count when the button is clicked
        const currentLikes = parseInt(likesCount.textContent, 10);
        likesCount.textContent = `${currentLikes + 1} likes`;
    });

    // Create the Facebook Share button
    const facebookShareButton = document.createElement('a');
    facebookShareButton.href = `https://www.facebook.com/sharer/sharer.php?u=URL_OF_ARTWORK_PAGE`;
    facebookShareButton.target = '_blank';
    facebookShareButton.classList.add('btn', 'btn-primary', 'mr-2');
    facebookShareButton.textContent = 'Share on Facebook';

    // Create the Twitter Share button
    const twitterShareButton = document.createElement('a');
    twitterShareButton.href = `https://twitter.com/intent/tweet?url=URL_OF_ARTWORK_PAGE&text=Check%20out%20this%20awesome%20artwork:%20${title}`;
    twitterShareButton.target = '_blank';
    twitterShareButton.classList.add('btn', 'btn-primary');
    twitterShareButton.textContent = 'Share on Twitter';



    cardBody.appendChild(cardTitle);
    cardBody.appendChild(likeButton);
    cardBody.appendChild(likesCount);


    cardBody.appendChild(facebookShareButton);
    cardBody.appendChild(twitterShareButton);


    card.appendChild(img);
    card.appendChild(cardBody);
    div.appendChild(card);

    return div;
}

});

