import React from "react";

import { ItemPreview } from ".ItemPreview";

const MOCK_IMAGE_URL = ""
export const Demo = () => {
  return (
    <div>
      <ItemPreview tittle="Hello World!" />
      <ItemPreview tittle="Hello World!" size="m" />
      <ItemPreview tittle="Hello World!" image={MOCK_IMAGE_URL} />
      <ItemPreview tittle="Hello World!" size = "m" image={MOCK_IMAGE_URL} />
      <ItemPreview tittle="Hello World!" starred image={MOCK_IMAGE_URL} />

      <ItemPreview
        tittle="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!
      Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!Hello World! Hello World! Hello World!
      Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!
      Hello World! Hello World! Hello World!"
      image={MOCK_IMAGE_URL} />

      <ItemPreview tittle="Hello World!" helper="this is some helper text" image={MOCK_IMAGE_URL} />
      <ItemPreview tittle="Hello World!" helper="this is some helper" image={MOCK_IMAGE_URL} >This is child</ItemPreview>

    </div>
  );
};

export default Demo;

import { ItemPreview } from "./ItemPreview";

export const Demo = () => {
  return (
    <div>
      <ItemPreview >Hello World</ItemPreview>
    </div>
  );
};
export default Demo;

