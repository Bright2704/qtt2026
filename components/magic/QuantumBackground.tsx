"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  duration: number;
  delay: number;
  blur: number;
}

interface Glow {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  duration: number;
  delay: number;
}

const COLORS = [
  "var(--lavender-400)",
  "var(--pink-400)",
  "var(--blue-500)",
  "var(--indigo-600)",
];

/**
 * Quantum-themed animated background
 * สร้างอนุภาคและแสงที่ลอยอยู่เบื้องหลัง สื่อถึงสถานะควอนตัม
 */
export default function QuantumBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [glows, setGlows] = useState<Glow[]>([]);

  useEffect(() => {
    // สร้างอนุภาคควอนตัม
    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 3 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: 0.2 + Math.random() * 0.4,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * -20,
      blur: Math.random() > 0.7 ? 2 : 0,
    }));
    setParticles(newParticles);

    // สร้างแสง superposition
    const newGlows: Glow[] = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      size: 150 + Math.random() * 250,
      color: COLORS[i % COLORS.length],
      opacity: 0.08 + Math.random() * 0.12,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * -8,
    }));
    setGlows(newGlows);
  }, []);

  return (
    <div className="quantum-bg" aria-hidden="true">
      {/* Grid lines สื่อถึง quantum circuit */}
      <div className="quantum-lines" />

      {/* Superposition glows */}
      {glows.map((glow) => (
        <div
          key={`glow-${glow.id}`}
          className="superposition-glow"
          style={{
            left: `${glow.x}%`,
            top: `${glow.y}%`,
            width: glow.size,
            height: glow.size,
            "--color": glow.color,
            "--op": glow.opacity,
            "--dur": `${glow.duration}s`,
            "--delay": `${glow.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Quantum particles */}
      {particles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="quantum-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            "--size": `${particle.size}px`,
            "--color": particle.color,
            "--op": particle.opacity,
            "--dur": `${particle.duration}s`,
            "--delay": `${particle.delay}s`,
            "--blur": `${particle.blur}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* Probability clouds */}
      <div
        className="probability-cloud"
        style={{
          left: "70%",
          top: "20%",
          "--size": "400px",
          "--dur": "30s",
          "--delay": "0s",
        } as React.CSSProperties}
      />
      <div
        className="probability-cloud"
        style={{
          left: "10%",
          top: "60%",
          "--size": "300px",
          "--dur": "25s",
          "--delay": "-10s",
        } as React.CSSProperties}
      />
    </div>
  );
}
