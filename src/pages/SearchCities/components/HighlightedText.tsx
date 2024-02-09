import React, { FC, useCallback } from "react";

type HighlightedTextProps = {
  text: string;
  wordToHighlight: string;
  highlightClass?: string;
};

const HighlightedText: FC<HighlightedTextProps> = ({
  text,
  wordToHighlight,
  highlightClass,
}) => {
  const highlightWords = useCallback(
    (text: string, wordToHighlight: string) => {
      const regex = new RegExp(`(${wordToHighlight})`, "gi");
      return text.split(regex).map((word, index) =>
        word.toLowerCase() === wordToHighlight.toLowerCase() ? (
          <span key={index} className={highlightClass}>
            {word}
          </span>
        ) : (
          <React.Fragment key={index}>{word}</React.Fragment>
        )
      );
    },
    [highlightClass]
  );

  return <>{highlightWords(text, wordToHighlight)}</>;
};
export default HighlightedText;
