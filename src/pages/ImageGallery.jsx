import React from "react";
import "./ImageGallery.css"; // Import the CSS file for styling

import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";

import craick from "../images/craick.jpg";
import vlu from "../images/vlu.jpg";
import ft from "../images/foodtalk.jpg";
import novi from "../images/novigrad.jpg";
import hotel from "../images/hotel.jpg";
import sketch from "../images/sketch.jpg";


class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedIndex: null, // Index of the focused image
      focusedText: "", // Text of the focused image
      focusedTitle: "", // Title of the focused image
      codeSrc: "",
    };
  }

  handleImageClick(index, text, title, code) {
    this.setState((prevState) => ({
      focusedIndex: prevState.focusedIndex === index ? null : index,
      focusedText: prevState.focusedIndex === index ? "" : text,
      focusedTitle: prevState.focusedIndex === index ? "" : title,
      codeSrc: prevState.focusedIndex === index ? "" : code,
    }));
  }

  render() {
    const { focusedIndex, focusedText, focusedTitle, codeSrc } = this.state;
    const images = [
      {
        src: p1,
        alt: "Image 1",
        text: "Crack the AI generated art! This simple web game allows users guess the prompt that was used to generate the AI art displayed. Mainly coded with Javascript.", // Text to display on hover
        title: "CRAICK",
        code: "http://craick.net/",
        focusedSrc: craick, // Image to display when focused
      },
      {
        src: p2,
        alt: "Image 2",
        text: "No more waiting in line on your feet! Virtually line up for stores or services using VLU or sign up your store for virtual queue. Implemented using React, Node.js and Javascript.",
        title: "VLU",
        code: "https://devpost.com/software/virtual-line-up",
        focusedSrc: vlu,
      },
      {
        src: p3,
        alt: "Image 3",
        text: "A simple app for restaurant owners to register their restaurant and offer online services to their customers! Implemented using Python, Firebase Database and Flask.",
        title: "FoodTalk",
        code: "https://devpost.com/software/foodtalk",
        focusedSrc: ft,
      },
      {
        src: p4,
        alt: "Image 3",
        text: "Service provider app that allows branches to register services and customers to apply for the services in a fictional world, Novigrad! Implemented using Python, Java, Firebase Database and Android Studio.",
        title: "Service Novigrad",
        code: null,
        focusedSrc: novi,
      },
      {
        src: p5,
        alt: "Image 3",
        text: "A Hotel Lookup app that allows customers to book a hotel room based location, capacity, rating, etc! Implemented using Java and PostgreSQL.",
        title: "Hotel Lookup",
        code: "https://github.com/SiaKong/HotelLookup",
        focusedSrc: hotel,
      },
      {
        src: p6,
        alt: "Image 3",
        text: "Fun sketch pad tool that allows users to draw and erase freely with adjustable bruch shape and size! Implemented using p5.js.",
        title: "Sketch",
        code: "https://github.com/SiaKong/Sketchpad",
        focusedSrc: sketch,
      },
    ]; // Array of image objects

    return (
      <div>
        <div className="image-gallery-container">
          <div className="image-gallery">
            {images.map((image, index, title, code) => (
              <div
                key={index}
                className={`image-card ${index === focusedIndex ? "focused" : ""}`}
                onClick={() => this.handleImageClick(index, image.text, image.title, image.code)}
              >
                <img src={index === focusedIndex ? image.focusedSrc : image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="projtext-container">
          <div className="projtext">
            <a href={codeSrc} id="projLink"><h2>{focusedTitle}</h2></a>
            <p>{focusedText}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGallery;