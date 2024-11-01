import SVG from "react-inlinesvg";

// TODO: Add Interface for svg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Icon = ({ source, src, width = 28, ...props }: any) =>
  source || src ? <SVG src={source || src} {...props} width={width} /> : null;

export default Icon;
