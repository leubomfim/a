import { Helmet } from 'react-helmet';

interface PreloadImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width?: number;
  height?: number;
}

export const PreloadImage = ({ src, srcSet, sizes, alt, width, height }: PreloadImageProps) => (
  <>
    <Helmet>
      <link rel="preload" href={src} as="image" />
      {srcSet && <link rel="preload" href={srcSet.split(',')[0].split(' ')[0]} as="image" />}
    </Helmet>
    <img
      loading='lazy'
      src={src} 
      srcSet={srcSet} 
      sizes={sizes} 
      alt={alt} 
      width={width} 
      height={height} 
    />
  </>
);