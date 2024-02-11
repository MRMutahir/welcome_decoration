const VideoPlayer = () => {
  return (
    <>
      <video autoPlay loop muted playsInline>
        <source
          // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          src="https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f1f97.appspot.com/o/video%2Fvideo.mp4?alt=media&token=d634aedf-3222-46cc-b05b-9c9b8e070f53"
          type="video/mp4"
          id="videoSource"
        />
      </video>
    </>
  );
};

export default VideoPlayer;
