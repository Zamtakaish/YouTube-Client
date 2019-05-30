import addNewElement from './addHtmlElement';

export default function renderVideos(videoArray) {
  const parent = document.getElementsByClassName('main__video-preview')[0];
  for (let i = 0; i < videoArray.length; i += 1) {
    const video = addNewElement('li', 'main__video-preview__video', parent);
    const image = addNewElement('img', 'main__video-preview__video__image', video);
    image.setAttribute('src', videoArray[i].snippet.thumbnails.default.url);
    const title = addNewElement('p', 'main__video-preview__video__title', video);
    title.innerHTML = videoArray[i].snippet.title;
    const author = addNewElement('p', 'main__video-preview__video__author', video);
    author.innerHTML = videoArray[i].snippet.channelTitle;
    const description = addNewElement('p', 'main__video-preview__video__author', video);
    description.innerHTML = videoArray[i].snippet.description;
    const date = addNewElement('p', 'main__video-preview__video__publish-date', video);
    date.innerHTML = Date.parse(videoArray[i].snippet.publishedAt);
  }
}
