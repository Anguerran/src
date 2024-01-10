
import imgTailwind from "./assets/Tailwind.png";
import imgHltml from "./assets/html.png";
import imgVb from "./assets/vb.png";
import imgCss from "./assets/css.png";
import Carousel from "./Components/Carousel";
import imgJs from "./assets/js.png"
function App() {
  const TableOfimage = [imgJs, imgTailwind, imgHltml, imgVb, imgCss];

  const ContentImg = TableOfimage.map((image) => (
    <img src={image} key={image} />
  ));

  return (
    <>
      <main>

{/* <div className="relative w-64 h-64">
  <img src={imgJs} alt="An image" className="absolute inset-0 w-60 h-60 object-cover"/>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="absolute bottom-0 left-0 p-4 text-white">
    <h2 className="text-2xl font-bold">Title</h2>
    <p className=" text-lg">Description</p>
  </div>
</div> */}

        <div className="max-w-lg ">
          <Carousel>{ContentImg}</Carousel>
        </div>
        
      </main>
    </>
  );
}

export default App;
