export default function decorate(block) {
    // Find the <a> tag within the block
    const link = block.querySelector('a');
  
    if (link) {
      const href = link.href;
      const videoID = getYouTubeVideoID(href);
  
      if (videoID) {
        // Create an iframe element
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoID}`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute(
          'allow',
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        );
        iframe.setAttribute('allowfullscreen', '');
  
        // Clear the block content and append the iframe
        block.textContent = '';
        block.appendChild(iframe);
      }
    }
  }
  
  function getYouTubeVideoID(url) {
    const regExp =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  }