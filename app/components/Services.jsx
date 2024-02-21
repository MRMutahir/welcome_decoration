import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  let ServicesName = [
    "Barat",
    "Valima",
    "Rasme hina",
    "Dholki",
    "Engagement",
    "Birthday",
    "Ceremonys",
  ];
  return (
    <div className="rightBar overflow-auto w-screen h-screen ">
      <div className="h-screen">
        {/* <video
          // src="/video/video.mp4"
          // src="https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f1f97.appspot.com/o/video%2Fvideo.mp4?alt=media&token=d634aedf-3222-46cc-b05b-9c9b8e070f53"
          className="h-screen object-cover fixed"
          // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          src="https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f1f97.appspot.com/o/video%2Fvideotwo.MP4?alt=media&token=f509730f-d67a-48f6-8793-8c26ba69acf6"
          autoPlay
          loop
          muted
          // style={{ maxWidth: "100vw", height: "auto" }
        ></video> */}
        <div className="flex justify-center items-center flex-col relative top-0">
          <div className="flex  items-center justify-center flex-col  my-10 h-full gap-6">
            <h1 className="text-7xl font-semibold font-mono">Our Services</h1>
            <ul>
              <li>
                Weddings:<span> Barat, Valima, Rasme Hina, Dholki</span>
              </li>{" "}
              <li>
                Other Events:{" "}
                <span>Engagement, Birthday, Special Ceremonies</span>
              </li>
            </ul>
            <p>
              At welcome decoration, we provide a wide range of services to make
              your celebrations extraordinary. Contact us to learn more!
            </p>

            {/* <div className="ServicesButton">
              {ServicesName.map((ele) => (
                <button
                  key={ele}
                  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-4"
                >
                  {ele}
                </button>
              ))}
            </div> */}
          </div>
          <div className=" flex flex-col gap-4 my-10 h-full">
            <div className="flex justify-between items-center gap-6 w-full ">
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
            </div>
            <div className="flex justify-between items-center gap-6 w-full ">
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
