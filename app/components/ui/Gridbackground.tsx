import { cn } from "../lib/utils";
import React from "react";

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient mask to soften edges */}
      <div className="absolute inset-0 bg-gray-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black pointer-events-none" />
    </div>
  );
}
