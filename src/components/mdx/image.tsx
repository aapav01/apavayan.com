import Image, { ImageProps } from "next/image";

const MDXImage = (props: ImageProps) => (
  <figure className="mx-auto" style={{ maxWidth: `${props.width}px` }}>
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <Image className="mx-auto" {...props} />
    {props.alt && (
      <figcaption className="text-center italic">{props.alt}</figcaption>
    )}
  </figure>
);

export default MDXImage;
