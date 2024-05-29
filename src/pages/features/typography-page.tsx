import type { ReactElement } from "react";

export const TypographyPage = (): ReactElement => {
  return (
    <div className="p-12 flex flex-col gap-8">
      <h1>h1: Heading</h1>
      <h2>h2: Heading</h2>
      <h3>h3: Heading</h3>
      <h4>h4: Heading</h4>
      <h5>h5: Heading</h5>
      <p>p. Paragraph</p>
      <span>span. Span</span>
    </div>
  );
};
