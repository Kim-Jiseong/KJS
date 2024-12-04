import { Loader2 } from "lucide-react";
import React from "react";

function FullScreenLoader() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-background/80 flex flex-col justify-center items-center">
      <Loader2 className="text-brand h-10 w-10 animate-spin" />
    </div>
  );
}

export default FullScreenLoader;
