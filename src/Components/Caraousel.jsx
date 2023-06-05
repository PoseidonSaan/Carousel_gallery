import React, { useEffect, useState, useRef } from "react";
import "./Caraousel.css";

function Caraousel({ handleImageClick }) {
  const [gridElement, setGridElement] = useState(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosX, setStartPosX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1330) {
        setGridElement(
          <div className="child-container grid8">
            <div className="grid-item">
              <div class="image-container-side">
                <div className="overlay-ext">Exterior</div>
                <img
                  key={0}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-fWJpP-JuC3-(edit).jpg?t=168073961512"
                  alt="main"
                  onClick={() => handleImageClick(0)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <img
                  key={1}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-wj1l3JCXCl-(edit).jpg?t=168074004002"
                  alt="main"
                  onClick={() => handleImageClick(1)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <img
                  key={2}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-f-MOYETdJy-(edit).jpg?t=168073965438"
                  alt="main"
                  onClick={() => handleImageClick(2)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <img
                  key={3}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-gbogBOrOPL-(edit).jpg?t=168073984049"
                  alt="main"
                  onClick={() => handleImageClick(3)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <div className="overlay-ext">Interior</div>
                <img
                  key={4}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-Gojasfq_5.jpg?t=167770202530"
                  alt="main"
                  onClick={() => handleImageClick(4)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <img
                  key={5}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-qI0N9S2rQuS.jpg?t=167770209284"
                  alt="main"
                  onClick={() => handleImageClick(5)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <img
                  key={6}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-xYOtaEqjKUp.jpg?t=167770208546"
                  alt="main"
                  onClick={() => handleImageClick(6)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <div class="overlay">ALL PHOTOS</div>
                <img
                  key={7}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=456,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-z3h4q_Ed9SX.jpg?t=167770208547"
                  alt="main"
                  onClick={() => handleImageClick(7)}
                />
              </div>
            </div>
          </div>
        );
      } else if (window.innerWidth > 768) {
        setGridElement(
          <div className="child-container grid4">
            <div className="grid-item">
              <div class="image-container-side">
                <div className="overlay-ext">Exterior</div>
                <img
                  key={0}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-fWJpP-JuC3-(edit).jpg?t=168073961512"
                  alt="main"
                  onClick={() => handleImageClick(0)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <img
                  key={2}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-f-MOYETdJy-(edit).jpg?t=168073965438"
                  alt="main"
                  onClick={() => handleImageClick(2)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <div className="overlay-ext">Interior</div>
                <img
                  key={4}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-Gojasfq_5.jpg?t=167770202530"
                  alt="main"
                  onClick={() => handleImageClick(4)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <div class="overlay">ALL PHOTOS</div>
                <img
                  key={7}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=456,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-z3h4q_Ed9SX.jpg?t=167770208547"
                  alt="main"
                  onClick={() => handleImageClick(7)}
                />
              </div>
            </div>
          </div>
        );
      } else if (window.innerWidth <= 768) {
        setGridElement(
          <div className="child-container grid2">
            <div className="grid-item">
              <div class="image-container-side">
                <div className="overlay-ext">Exterior</div>
                <img
                  key={0}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-fWJpP-JuC3-(edit).jpg?t=168073961512"
                  alt="main"
                  onClick={() => handleImageClick(0)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <img
                  key={1}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-wj1l3JCXCl-(edit).jpg?t=168074004002"
                  alt="main"
                  onClick={() => handleImageClick(1)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <img
                  key={2}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-f-MOYETdJy-(edit).jpg?t=168073965438"
                  alt="main"
                  onClick={() => handleImageClick(2)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <img
                  key={3}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-gbogBOrOPL-(edit).jpg?t=168073984049"
                  alt="main"
                  onClick={() => handleImageClick(3)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <div className="overlay-ext">Interior</div>
                <img
                  key={4}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-Gojasfq_5.jpg?t=167770202530"
                  alt="main"
                  onClick={() => handleImageClick(4)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <img
                  key={5}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-qI0N9S2rQuS.jpg?t=167770209284"
                  alt="main"
                  onClick={() => handleImageClick(5)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <img
                  key={6}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-xYOtaEqjKUp.jpg?t=167770208546"
                  alt="main"
                  onClick={() => handleImageClick(6)}
                />
              </div>
            </div>
            <div className="grid-item">
              <div class="image-container-side">
                <div class="overlay">ALL PHOTOS</div>
                <img
                  key={7}
                  src="https://media.carsandbids.com/cdn-cgi/image/width=456,quality=70/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-z3h4q_Ed9SX.jpg?t=167770208547"
                  alt="main"
                  onClick={() => handleImageClick(7)}
                />
              </div>
            </div>
          </div>
        );
      }
    };

    handleResize(); // Initial call to handleResize
    window.addEventListener("resize", handleResize); // Event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the event listener
    };
  }, []);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    if (
      e.target.tagName === "INPUT" ||
      e.target.tagName === "TEXTAREA" ||
      e.target.isContentEditable
    ) {
      return;
    }

    setIsDragging(true);
    setStartPosX(getPageX(e) - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (
      !isDragging ||
      e.target.tagName === "INPUT" ||
      e.target.tagName === "TEXTAREA" ||
      e.target.isContentEditable
    ) {
      return;
    }
    e.preventDefault();
    const x = getPageX(e);
    const walk = x - startPosX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const getPageX = (e) => {
    return e.pageX || e.touches[0].pageX;
  };

  return (
    <div className="Gallery-view">
      <div
        className="parent-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
      >
        <div className="child-container main">
          <div class="image-container-main">
            <img
              key={11}
              src="https://media.carsandbids.com/cdn-cgi/image/width=1800,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-Hl0k2YF863-(edit).jpg?t=168073955990"
              alt="main"
              onClick={() => handleImageClick(11)}
            />
          </div>
        </div>
        {gridElement}
      </div>
    </div>
  );
}

export default Caraousel;
