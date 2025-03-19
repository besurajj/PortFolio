// "use client";
// import React, { PureComponent } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Environment } from "@react-three/drei";
// import { useRef, useState, useEffect } from "react";
// import { isMobile } from "../../../utils/isMobile";
// import * as THREE from "three";
// import bgImage from "../../../assets/download3.jpg";

// const BoxWithEdges = ({ position, args, color }: any) => {
//   return (
//     <group position={position}>
//       <mesh>
//         <boxGeometry args={[0.5, 0.5, 0.5]} />
//         <meshPhysicalMaterial
//           color="#0070f3"
//           roughness={0.1}
//           metalness={0.8}
//           transparent={true}
//           opacity={0.9}
//           transmission={0.5}
//           clearcoat={1}
//         />
//       </mesh>
//       <lineSegments>
//         <edgesGeometry args={[new THREE.BoxGeometry(0.5, 0.5, 0.5)]} />
//         <lineBasicMaterial color="#214dbd" linewidth={2} />
//       </lineSegments>
//     </group>
//   );
// };

// const BoxLetter = ({ letter, position }) => {
//   const group = useRef();

//   const getLetterShape = (letter) => {
//     const shapes = {
//       M: [
//         [1, 0, 0, 0, 1],
//         [1, 1, 0, 1, 1],
//         [1, 0, 1, 0, 1],
//         [1, 0, 0, 0, 1],
//         [1, 0, 0, 0, 1],
//       ],
//       E: [
//         [1, 1, 1],
//         [1, 0, 0],
//         [1, 1, 0],
//         [1, 0, 0],
//         [1, 1, 1],
//       ],
//       R: [
//         [1, 1, 1, 1, 1],
//         [1, 0, 0, 0, 1],
//         [1, 1, 1, 1, 1],
//         [1, 0, 0, 1, 0],
//         [1, 0, 0, 0, 1],
//       ],
//       N: [
//         [1, 0, 0, 0, 1],
//         [1, 1, 0, 0, 1],
//         [1, 0, 1, 0, 1],
//         [1, 0, 0, 1, 1],
//         [1, 0, 0, 0, 1],
//       ],
//     };

//     return shapes[letter] || shapes["M"]; // Default to 'M' if letter is not found
//   };

//   const letterShape = getLetterShape(letter);

//   return (
//     <group ref={group} position={position}>
//       {letterShape.map((row, i) =>
//         row.map((cell, j) => {
//           if (cell) {
//             let xOffset =
//               j * 0.5 -
//               (letter === "N"
//                 ? 1
//                 : letter === "E"
//                 ? 0.5
//                 : letter === "R" || letter === "N"
//                 ? 1
//                 : 0.75);

//             if (letter === "M") {
//               if (j === 0) {
//                 xOffset = -0.5;
//               } else if (j === 1) {
//                 xOffset = 0;
//               } else if (j === 2) {
//                 xOffset = 0.25;
//               } else if (j === 3) {
//                 xOffset = 0.5;
//               } else if (j === 4) {
//                 xOffset = 1;
//               }
//             }

//             if (letter === "R") {
//               if (j === 0) {
//                 xOffset = -1;
//               } else if (j === 1) {
//                 xOffset = -0.75;
//               } else if (j === 2) {
//                 xOffset = -0.25;
//               } else if (j === 3) {
//                 xOffset = 0.25;
//               } else if (j === 4) {
//                 xOffset = 0.5;
//               }
//             }

//             return (
//               <BoxWithEdges
//                 key={`${i}-${j}`}
//                 position={[xOffset, (4 - i) * 0.5 - 1, 0]}
//               />
//             );
//           }
//           return null;
//         })
//       )}
//     </group>
//   );
// };

// const Scene = () => {
//   const orbitControlsRef = useRef();
//   const [isMobileDevice, setIsMobileDevice] = useState(false);

//   useEffect(() => {
//     setIsMobileDevice(isMobile());
//   }, []);

//   return (
//     <>
//       <group position={[-0.5, 0, 0]} rotation={[0, Math.PI / 1.5, 0]}>
//         <BoxLetter letter="M" position={[-3.75, 0, 0]} />
//         <BoxLetter letter="E" position={[-1.25, 0, 0]} />
//         <BoxLetter letter="R" position={[1.25, 0, 0]} />
//         <BoxLetter letter="N" position={[3.75, 0, 0]} />
//       </group>
//       <OrbitControls
//         ref={orbitControlsRef}
//         enableZoom={false} // Disabled zoom for background
//         enablePan={false} // Disabled pan for background
//         enableRotate
//         autoRotate
//         autoRotateSpeed={1} // Slowed down rotation
//       />
//       <ambientLight intensity={0.3} /> {/* Reduced light intensity */}
//       <directionalLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />
//       <Environment
//         files={
//           isMobileDevice
//             ? bgImage
//             : bgImage
//         }
//         background
//       />
//     </>
//   );
// };

// export default function Background3D() {
//   return (
//     <div className="fixed inset-0 z-10 opacity-50">
//       {/* Fixed position and reduced opacity */}
//       <Canvas
//         camera={{ position: [10.047021, -0.127436, -11.137374], fov: 50 }}
//       >
//         <Scene />
//       </Canvas>
//     </div>
//   );
// }
