"use client";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import {
  Environment,
  OrbitControls,
  useFBX,
  useTexture,
} from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { BoardModel } from "./BoardModel";
type Props = {
  notes: any;
};

function Notes({ notes }: Props) {
  return (
    <>
      <Canvas style={{ height: 600 }}>
        <Suspense fallback={null}>
          <BoardModel />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
      {notes.map((note: any) => {
        return <h1 key={note._id}>{note.content}</h1>;
      })}
    </>
  );
}

export default Notes;
