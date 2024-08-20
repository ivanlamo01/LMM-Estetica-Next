import ControlledCarousel from "./ui/components/carousel";
import slide1 from "@/Assets/1-slide-1635871910806-4683866691-3413156dfc93e58fe2fef435e5e6845c1635871925-1920-1920.webp";
import slide2 from "@/Assets/1-slide-1635871910808-5880505384-de4caa47f5cd60aeb10f2755adcc71331635871929-1920-1920.webp";
import slide3 from "@/Assets/1-slide-1654192557826-2839333007-f795d413869951bb7f11bee16aeaa7631654192564-1920-1920.webp"

export default function Home() {
  const images = [slide1.src, slide2.src, slide3.src];

  return (
    <>
      <ControlledCarousel images={images} />
    </>
  );
}
