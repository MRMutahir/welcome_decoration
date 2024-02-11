const VideoPlayer = () => {
  return (
    <>
      <h1>VideoPlayer</h1>
      <div className="backgroundvideo_Container">
        <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            src="https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f1f97.appspot.com/o/video%2FWedding%20Video%20in%20Black%20Grey%20Photocentric%20Style%20(1).mp4?alt=media&token=a8621f78-a168-47bd-8e66-e1e3aae3fb0d"
            type="video/mp4"
            id="videoSource"
          />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="backgroundvideo w-64  h-96"
          id="backgroundVideo"
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            // src="@/public/videos/next.mp4"
            type="video/mp4"
            id="videoSource"
          />
        </video>
      </div>
    </>
  );
};

export default VideoPlayer;
