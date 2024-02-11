import React, { FC, useCallback } from "react";

type HighlightedTextProps = {
  text: string;
  wordToHighlight: string;
  highlightClass?: string;
};
/**
 * HighlightedText component
 * Highlight the text in this component
 *
 * @component
 * @param {string} text - The full text that viewed
 * @param {string} wordToHighlight - The fpart of the text that need to be highlighted
 * @param {string} highlightClass -Class that empasize the selected text
 * @returns {JSX.Element} The rendered HighlightedText component.
 *
 * @example
 * const search = "ol";
 * <HighlightedText text="Gold"  wordToHighlight={search} highlightClass="highlight" />;
 */
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
