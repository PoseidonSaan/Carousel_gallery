import React, { useState } from "react";
import Caraousel from "./Components/Caraousel";
import Gallery from "./Components/Gallery";

const App = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    if (index === 7) {
      setCurrentImageIndex(-1);
    } else {
      setCurrentImageIndex(index);
    }
    setShowGallery(true);
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  const images = [
    "https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-fWJpP-JuC3-(edit).jpg?t=168073961512",
    "https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-wj1l3JCXCl-(edit).jpg?t=168074004002",
    "https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-f-MOYETdJy-(edit).jpg?t=168073965438",
    "https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-gbogBOrOPL-(edit).jpg?t=168073984049",
    "https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-Gojasfq_5.jpg?t=167770202530",
    "https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-qI0N9S2rQuS.jpg?t=167770209284",
    "https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-xYOtaEqjKUp.jpg?t=167770208546",
    "https://media.carsandbids.com/cdn-cgi/image/width=456,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-z3h4q_Ed9SX.jpg?t=167770208547",
    "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-Jz9m4u28Es.jpg?t=167770201278",
    "https://media.carsandbids.com/cdn-cgi/image/width=1560,quality=80/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-l1CIReKiBh-(edit).jpg?t=168029728153",
    "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-9j3lowSOMx.jpg?t=167770202436",
    "https://media.carsandbids.com/cdn-cgi/image/width=1800,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-Hl0k2YF863-(edit).jpg?t=168073955990",
  ];

  return (
    <div>
      <Caraousel handleImageClick={handleImageClick} />
      {showGallery && (
        <Gallery
          images={images}
          currentIndex={currentImageIndex}
          onClose={handleCloseGallery}
        />
      )}
    </div>
  );
};

export default App;
