"use client";
import React from "react";
import { Typewriter, type TypewriterProps } from "react-simple-typewriter";

interface Props extends TypewriterProps {
    cursor?: boolean;
    cursorStyle?: string;
}

export default function CustomTypewriter(props: Props) {
  return <Typewriter {...props} />;
}
