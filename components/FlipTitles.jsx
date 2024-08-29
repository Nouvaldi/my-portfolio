import { FlipWords } from "./ui/flip-words";

const FlipTitles = () => {
  const words = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ];
  return (
    <div>
      <FlipWords words={words} />
    </div>
  );
};

export default FlipTitles;
