import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_0_1: THREE.Mesh;
    mesh_0_2: THREE.Mesh;
  };
  materials: {
    ["Material #1197"]: THREE.MeshStandardMaterial;
    ["Material #1194"]: THREE.MeshStandardMaterial;
    ["Material #1196"]: THREE.MeshStandardMaterial;
  };
};

export function BoardModel(props: JSX.IntrinsicElements["group"]) {
  // @ts-expect-error
  const { nodes, materials } = useGLTF("/bamboo_board.gltf") as GLTFResult;
  const texture = useTexture("/cork.jpg");
  return (
    <group {...props} dispose={null}>
      <group position={[0.02, -0.04, -6.56]} scale={0.005}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials["Material #1197"]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials["Material #1194"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials["Material #1196"]}
        />
      </group>
      <mesh position={[0.02, -0.04, -6.05]}>
        <planeGeometry args={[45, 30]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/bamboo_board.gltf");
