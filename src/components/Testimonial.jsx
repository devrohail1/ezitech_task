import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    testimonial: "This is an amazing product. Highly recommend it!",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    testimonial: "Fantastic service and support. I am very impressed.",
  },
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    testimonial: "Top-notch quality! Couldn't be happier with the results.",
  },
  {
    name: "Bob Brown",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    testimonial: "Great value for money. I will definitely come back.",
  },
  {
    name: "Chris Wilson",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    testimonial: "Superb! Exceeded all my expectations.",
  },
  {
    name: "Diana Lee",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    testimonial: "Absolutely amazing experience! Five stars!",
  },
  {
    name: "Eric Taylor",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    testimonial: "The team is very professional and skilled.",
  },
  {
    name: "Fiona Moore",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    testimonial: "The best service I have ever used. Highly recommend!",
  },
  {
    name: "George Harris",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    testimonial: "Outstanding quality and support.",
  },
  {
    name: "Helen Clark",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    testimonial: "I am thoroughly impressed with their work.",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    infinite: true,
    speed: 10000, // Scroll speed
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    cssEase: "linear", // Smooth scrolling effect
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-12 overflow-hidden">
      {/* Ensure full width and no overflow */}
      <h2 className="text-3xl font-bold text-center mb-6">
        Testimonials <span className="text-4xl">😍</span>{" "}
      </h2>
      <p className="hidden xl:flex text-xl justify-center mb-10">
        Our interns consistently share positive experiences, highlighting the
        practical skills and professional growth they achieve with us
      </p>
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 italic mb-4">
                  "{item.testimonial}"
                </p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
