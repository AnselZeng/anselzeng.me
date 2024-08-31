import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/about/ivey.jpeg",
  "/about/everest.jpeg",
  "/about/van.jpeg",
  "/about/snowboard.jpeg",
  "/about/bloor.jpeg",
  "/about/klein.jpeg",
  "/about/pillows.jpeg",
];

const MotionBox = motion(Box);

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const imageHeight = 369;
  const imageSpacing = imageHeight * 0.269;
  const numVisible = 5;
  const halfVisible = Math.floor(numVisible / 2);

  useEffect(() => {
    controls.start({
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  }, [currentIndex, controls]);

  const handleImageClick = (index: number) => {
    const newIndex = (currentIndex + ((index - currentIndex + images.length) % images.length)) % images.length;
    setCurrentIndex(newIndex);
  };

  const visibleImages = Array.from({ length: numVisible }, (_, i) => 
    (currentIndex + i - halfVisible + images.length) % images.length
  );

  return (
    <Box position="relative" width="100%" height={`${imageHeight}px`}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        {visibleImages.map((index, pos) => {
          const src = images[index];
          const offset = (pos - halfVisible) * imageSpacing;
          const scale = 1 - Math.abs(pos - halfVisible) * 0.2;
          const opacity = 1 - Math.abs(pos - halfVisible) * 0.3;
          const rotateY = (pos - halfVisible) * 15;

          return (
            <MotionBox
              key={src}
              width={`${imageHeight * 0.75}px`}
              height={`${imageHeight}px`}
              backgroundImage={`url(${src})`}
              backgroundSize="cover"
              backgroundPosition="center"
              position="absolute"
              style={{
                transformOrigin: 'center center',
                borderRadius: 'md',
                zIndex: 100 - Math.abs(pos - halfVisible),
                opacity,
                transform: `translateX(${offset}px) scale(${scale}) rotateY(${rotateY}deg)`,
              }}
              initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
              animate={{
                opacity,
                scale,
                rotateY,
                x: offset,
                transition: { duration: 0.5 },
              }}
              cursor="pointer"
              onClick={() => pos !== halfVisible && handleImageClick(index)}
            />
          );
        })}
      </Box>
      <Box
        position="absolute"
        bottom="-20px"
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        alignItems="center"
        zIndex="10"
      >
        {images.map((_, index) => (
          <Box
            key={index}
            width="8px"
            height="8px"
            borderRadius="50%"
            backgroundColor={index === currentIndex ? "black" : "gray"}
            margin="0 4px"
            cursor="pointer"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </Box>
    </Box>
  );
}

const CarouselComponent = () => <Carousel />;

export default CarouselComponent;
