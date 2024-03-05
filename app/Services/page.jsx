import Services from "../components/Services";
import MDNav from "../components/MDNav";
import Footer from "../components/Footer";
import ServiceSlider from "../components/ServiceSlider";

const page = () => {
  return (
    <>
      <MDNav />
      {/* <Services /> */}
      <ServiceSlider />
      <Footer />
    </>
  );
};

export default page;
