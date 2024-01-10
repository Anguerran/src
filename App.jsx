import imgTailwind from "./assets/Tailwind.png";
import imgHltml from "./assets/html.png";
import imgVb from "./assets/vb.png";
import imgCss from "./assets/css.png";
import Carousel from "./Components/Carousel";
import imgJs from "./assets/js.png";
function App() {
  const TableOfimage = [imgJs, imgTailwind, imgHltml, imgVb, imgCss];

  const ContentImg = TableOfimage.map((image) => (
    <img src={image} key={image} />
  ));

  return (
    <>
      <main>


        <div className="max-w-lg ">
          <Carousel iSautoSlide={true} slideInterval={3000}>
            {ContentImg}
          </Carousel>
        </div>

      </main>
    </>
  );
}

export default App;
