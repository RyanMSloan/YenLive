const getLandingImages = async () => {
  let count = 1;
  const res = await fetch('/api/albums/1/photos');
  const photos = await res.json();

  const leftHalf = document.querySelector('#left-half');
  const rightHalf = document.querySelector('#right-half');

  photos.forEach(photo => {
    if (count <= 5) {
      let img = document.createElement('img');
      img.src = photo.url;
      img.style = 'width: 100%';
      leftHalf.appendChild(img);
    } else if (count <= 10) {
      let img = document.createElement('img');
      img.src = photo.url;
      img.style = 'width: 100%';
      rightHalf.appendChild(img);
    } else {
      return;
    }
    count++;
  });
}

//getLandingImages();