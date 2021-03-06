import renderVideos from '../rendering/renderVideos';

export default class SearchRequest {
  constructor(request) {
    this.nextPage = '';
    this.url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBK8Pu1ayQ3hN7xQCQEHUyDlzz7agLZOrc&type=video&part=snippet&maxResults=15&q=${request}`;
  }

  doFetch() {
    return fetch(this.url + this.nextPage)
      .then(response => response.json())
      .catch(alert);
  }

  render() {
    const data = this.doFetch();
    data.then((response) => {
      this.nextPage = `&pageToken=${response.nextPageToken}`;
      renderVideos(response.items);
    });
  }
}
