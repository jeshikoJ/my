import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars as DreiStars } from "@react-three/drei";

export default function Stars() {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <DreiStars ref={ref} radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}