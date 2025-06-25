function goTo(page) {
  switch(page) {
    case 'watch':
      window.location.href = 'watch-films.html';
      break;
    case 'behind':
      window.location.href = 'behind-the-scenes.html';
      break;
    case 'films':
      window.location.href = 'download-films.html';
      break;
    case 'gifs':
      window.location.href = 'download-gifs.html';
      break;
    case 'read':
      window.location.href = 'read-comics.html';
      break;
    case 'comics':
      window.location.href = 'download-comics.html';
      break;
    case 'subscribe':
      window.location.href = 'subscribe.html';
      break;
    default:
      alert('Page not found!');
  }
}
