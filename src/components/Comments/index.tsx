import React from "react";
import Giscus from "@giscus/react";

export default function Comments(): JSX.Element {
  return (
    <div>
      <Giscus
        id="comments"
        repo="AltiumDeveloper/platform-api-docs"
        repoId="R_kgDOQOUdOw"
        category="General"
        categoryId="DIC_kwDOQOUdO84CxfBK"
        mapping="pathname"
        strict="1"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
