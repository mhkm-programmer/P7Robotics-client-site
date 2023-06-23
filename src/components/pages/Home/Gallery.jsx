import React from "react";

const Gallery = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="h2 text-center mx-auto text-black mb-4">
            Discover Masterpieces product
             in Our Gallery
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-center mp-4">
            Experience the Beauty of Creativity through an Array of Captivating Images in Our Gallery. <br /> Be Enthralled by the Masterpieces and Creativity Showcased in Our Gallery
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1 shdow-lg">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://i.ibb.co/HDPdm5c/download-18.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://i.ibb.co/cgsNyH5/download-24.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://i.ibb.co/PFGWfV4/download-30.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://i.ibb.co/kgy7HBy/download-36.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://i.ibb.co/Tqqm7t9/download-27.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://i.ibb.co/R9ZzHst/download-14.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
