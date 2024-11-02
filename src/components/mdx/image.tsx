import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MDXImage = (props: any) => (
  <figure className="mx-auto" style={{ maxWidth: `${props.width}px` }}>
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <Image className="mx-auto" {...props} />
    {props.alt && (
      <figcaption className="text-center italic">{props.alt}</figcaption>
    )}
  </figure>
);

export default MDXImage;
