import { Canvas } from "@react-three/fiber";
import { Plane, Html, OrbitControls } from "@react-three/drei";

const WebGLRoom = () => {
  return (
    <Canvas shadows>
      {/* Add lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} castShadow intensity={0.8} />

      {/* Room walls */}
      <Plane
        position={[0, 0, -5]} // Back wall
        rotation={[0, 0, 0]}
        args={[100, 100]}
        receiveShadow
      >
        <meshStandardMaterial color="lightblue" />
        {/* Adding HTML content on the back wall */}
        <Html position={[0, 0, 0.1]}>
          <div
            style={{
              color: "white",
              padding: "10px",
              background: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1>This is an HTML element on the back wall</h1>
          </div>
        </Html>
      </Plane>

      <Plane
        position={[0, -5, 0]} // Floor
        rotation={[-Math.PI / 2, 0, 0]}
        args={[10, 10]}
        receiveShadow
      >
        <meshStandardMaterial color="lightgrey" />
      </Plane>

      {/* Add an interactive object */}
      <Plane
        position={[0, 0, 5]} // Front wall
        rotation={[0, Math.PI, 0]} // Rotate to face the camera
        args={[10, 10]}
        receiveShadow
      >
        <meshStandardMaterial color="lightcoral" />
        <Html position={[0, 0, 0.1]}>
          <button style={{ padding: "10px", fontSize: "18px" }}>
            Click me!
          </button>
        </Html>
      </Plane>

      {/* Camera controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default WebGLRoom;
