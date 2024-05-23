// components/SplineModel.tsx
"use client";
import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

const SplineModel: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let app: Application | null = null;

    if (canvasRef.current) {
      app = new Application(canvasRef.current);
      app.load("https://prod.spline.design/j-Q37SPqHVZHRPxq/scene.splinecode");
    }

    // Cleanup function to properly dispose of the Spline application
    return () => {
      if (app) {
        app.dispose();
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-screen" />;
};

export default SplineModel;
