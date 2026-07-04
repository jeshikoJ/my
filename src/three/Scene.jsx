import { Canvas } from "@react-three/fiber";
import Stars from "./Stars";

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <Stars />
      </Canvas>
    </div>
  );
}