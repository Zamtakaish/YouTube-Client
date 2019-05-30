import addNewElement from './addHtmlElement';
import getStatistics from '../requests/getStatistics';

export default function renderVideos(videoArray) {
  const parent = document.getElementsByClassName('main__video-preview')[0];
  const videoId = [];
  for (let i = 0; i < videoArray.length; i += 1) {
    videoId.push(videoArray[i].id.videoId);
  }
  const idRequest = videoId.join();
  const statisticsResponse = getStatistics(idRequest);
  statisticsResponse.then((response) => {
    for (let i = 0; i < videoArray.length; i += 1) {
      let video = addNewElement('li', 'main__video-preview__video_wrapper', parent);
      video = addNewElement('div', 'main__video-preview__video', video);
      const image = addNewElement('img', 'main__video-preview__video__image', video);
      image.setAttribute('src', videoArray[i].snippet.thumbnails.high.url);
      const title = addNewElement('a', 'main__video-preview__video__title', video);
      title.innerHTML = videoArray[i].snippet.title;
      title.setAttribute('href', `https://www.youtube.com/watch?v=${videoArray[i].id.videoId}`);
      const author = addNewElement('p', 'main__video-preview__video__author', video);
      author.innerHTML = `Channel: ${videoArray[i].snippet.channelTitle}`;
      const date = addNewElement('p', 'main__video-preview__video__publish-date', video);
      date.innerHTML = `Published: ${Date.parse(videoArray[i].snippet.publishedAt)}`;
      const views = addNewElement('p', 'main__video-preview__video__views', video);
      views.innerHTML = `Views: ${response.items[i].statistics.viewCount}`;
      const description = addNewElement('p', 'main__video-preview__video__description', video);
      description.innerHTML = videoArray[i].snippet.description;
    }
  });
}