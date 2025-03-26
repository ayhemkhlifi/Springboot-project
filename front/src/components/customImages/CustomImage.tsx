import React from 'react';
import Image, { ImageProps } from 'next/image';

interface CustomImageProps extends Omit<ImageProps, 'style'> {
  objectFit?: React.CSSProperties['objectFit'];
  isAboveTheFold?: boolean; // Custom prop to prioritize above-the-fold images
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  objectFit = 'cover',
  isAboveTheFold = false,
  className,
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={isAboveTheFold} // Dynamically apply priority
      style={{ objectFit }}
      {...props}
    />
  );
};

export default CustomImage;
