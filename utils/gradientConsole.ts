import gradient from "gradient-string";

const gradientConsole = (message: string): string => {
  return gradient.pastel.multiline(message);
};

export default gradientConsole;
