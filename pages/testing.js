import Enlarge from "../components/Enlarge";
import Head from "../components/Head";
export default function Testing() {
  return (
    <div className=''>
      <div className="relative mix-blend-lighten">
        <video autoPlay loop muted className="w-screen/2 h-scrren/2 ">
          <source src="/1.mp4" />
        </video>
        <div className="w-full h-full mix-blend-overlay w-screen/2 h-scrren/2 absolute top-0 bg-blue-400"></div>
      </div>
    </div>
  );
}
