// content.js

// Function to fetch the video URL using the YouTube Data API
function getYouTubeVideoUrl(videoId) {
  const apiKey = 'AIzaSyAM5YruDkxkMBcNSNCywv1gt2_4mgxsM2E'; // Replace with your actual API key
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.items && data.items.length > 0) {
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        console.log('YouTube Video URL:', videoUrl);
        // window.alert(videoUrl);
        // You can use the video URL as needed, e.g., for downloading.
      } else {
        console.error('Video not found on YouTube.');
      }
    })
    .catch(error => {
      console.error('Error fetching video data:', error);
    });
}

// Check if the current page is a YouTube video page
if (window.location.hostname === 'www.youtube.com' && window.location.pathname === '/watch') {
  // Extract the video ID from the URL
  const videoId = new URLSearchParams(window.location.search).get('v');
  if (videoId) {
    getYouTubeVideoUrl(videoId);
  } else {
    console.error('Video ID not found in the URL.');
  }
}
