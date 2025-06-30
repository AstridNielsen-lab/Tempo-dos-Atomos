import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Torus } from '@react-three/drei';
import { Mesh, Group, Vector3 } from 'three';
import { Magnet, Play, Pause, Settings } from 'lucide-react';

interface MagneticTimeSimulationProps {
  onBack: () => void;
}

// Electron in magnetic field
const MagneticElectron: React.FC<{ fieldStrength: number; isPlaying: boolean }> = ({ fieldStrength, isPlaying }) => {
  const meshRef = useRef<Mesh>(null);
  const trailRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (meshRef.current && isPlaying) {
      // Cyclotron frequency calculation: f = eB/(2πm)
      const cyclotronFreq = fieldStrength * 0.1; // Scaled for visualization
      const time = state.clock.getElapsedTime() * cyclotronFreq;
      const radius = 2 / (fieldStrength * 0.1 + 1); // Smaller radius for stronger field
      
      meshRef.current.position.x = Math.cos(time) * radius;
      meshRef.current.position.z = Math.sin(time) * radius;
      meshRef.current.position.y = 0;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[0.1]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </Sphere>
      <group ref={trailRef} />
    </group>
  );
};

// Magnetic field lines
const MagneticFieldLines: React.FC<{ fieldStrength: number; isPlaying: boolean }> = ({ fieldStrength, isPlaying }) => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current && isPlaying) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      
      // Pulsing effect based on field strength
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * fieldStrength * 0.5) * 0.1;
      groupRef.current.scale.setScalar(scale);
    }
  });

  const fieldLines = Array.from({ length: 8 }, (_, i) => {
    const radius = 1 + i * 0.5;
    const intensity = Math.max(0.1, 1 - i * 0.1);
    return { radius, intensity };
  });

  return (
    <group ref={groupRef}>
      {fieldLines.map((line, index) => (
        <Torus
          key={index}
          args={[line.radius, 0.02, 8, 32]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial 
            color="#FF6B6B" 
            transparent 
            opacity={line.intensity * fieldStrength * 0.1} 
          />
        </Torus>
      ))}
    </group>
  );
};

// Pressure visualization
const PressureVisualization: React.FC<{ pressure: number; isPlaying: boolean }> = ({ pressure, isPlaying }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && isPlaying) {
      const time = state.clock.getElapsedTime();
      const distortion = 1 + Math.sin(time * 2) * pressure * 0.001;
      meshRef.current.scale.set(distortion, 1, distortion);
      meshRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[4, 32, 32]} position={[0, 0, 0]}>
      <meshBasicMaterial color="#8B5CF6" transparent opacity={0.05} wireframe />
    </Sphere>
  );
};

// Main magnetic simulation
const MagneticSimulation: React.FC<{ fieldStrength: number; isPlaying: boolean }> = ({ fieldStrength, isPlaying }) => {
  const pressure = (fieldStrength * fieldStrength) / (2 * 4 * Math.PI * 1e-7); // P = B²/(2μ₀)
  
  return (
    <group>
      <MagneticFieldLines fieldStrength={fieldStrength} isPlaying={isPlaying} />
      <MagneticElectron fieldStrength={fieldStrength} isPlaying={isPlaying} />
      <PressureVisualization pressure={pressure} isPlaying={isPlaying} />
      
      <Text
        position={[0, -3, 0]}
        fontSize={0.3}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        Campo Magnético: {fieldStrength.toFixed(1)} × 10⁴ T
      </Text>
      
      <Text
        position={[0, -3.5, 0]}
        fontSize={0.2}
        color="#FF6B6B"
        anchorX="center"
        anchorY="middle"
      >
        Pressão: {(pressure / 1e11).toFixed(1)} × 10¹¹ Pa
      </Text>
    </group>
  );
};

const MagneticTimeSimulation: React.FC<MagneticTimeSimulationProps> = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [fieldStrength, setFieldStrength] = useState(1.0);
  const [showControls, setShowControls] = useState(false);

  // Calculate derived values
  const cyclotronFreq = fieldStrength * 2.8e14; // Hz (scaled)
  const pressure = (fieldStrength * fieldStrength) * 4e10; // Pa (scaled)
  const magneticWeight = (fieldStrength * fieldStrength) * 4e-4; // kg/m³ (scaled)

  return (
    <div className="h-screen flex flex-col">
      {/* Controls Panel */}
      <div className="bg-black/60 backdrop-blur-sm border-b border-red-500/30 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Magnet className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-white">Simulação: Tempo Magnético</h3>
            </div>
            <div className="text-sm text-red-300">
              Campos extremos e frequência de ciclotron
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
            </button>
            
            <button
              onClick={() => setShowControls(!showControls)}
              className="p-2 rounded-lg bg-black/40 border border-red-500/30 text-red-300 hover:text-white hover:bg-red-600/20 transition-all"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Extended Controls */}
        {showControls && (
          <div className="mt-4 grid md:grid-cols-4 gap-4 p-4 bg-black/40 rounded-lg border border-red-500/20">
            <div>
              <label className="block text-sm font-medium text-red-300 mb-2">
                Intensidade do Campo (×10⁴ T)
              </label>
              <input
                type="range"
                min="0.1"
                max="3.0"
                step="0.1"
                value={fieldStrength}
                onChange={(e) => setFieldStrength(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-gray-400 mt-1">{fieldStrength.toFixed(1)} × 10⁴ T</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-red-300 mb-2">
                Frequência de Ciclotron
              </label>
              <div className="text-xs text-gray-300">
                <div>{(cyclotronFreq / 1e14).toFixed(1)} × 10¹⁴ Hz</div>
                <div className="text-gray-500">~{(cyclotronFreq / 1e12).toFixed(0)} THz</div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-red-300 mb-2">
                Pressão Magnética
              </label>
              <div className="text-xs text-gray-300">
                <div>{(pressure / 1e11).toFixed(1)} × 10¹¹ Pa</div>
                <div className="text-gray-500">{(pressure / 1e9).toFixed(0)} GPa</div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-red-300 mb-2">
                Peso Magnético
              </label>
              <div className="text-xs text-gray-300">
                <div>{(magneticWeight * 1000).toFixed(1)} g/m³</div>
                <div className="text-gray-500">Densidade equivalente</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3D Canvas */}
      <div className="flex-1 relative">
        <Canvas camera={{ position: [6, 6, 6], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B6B" />
          
          <MagneticSimulation fieldStrength={fieldStrength} isPlaying={isPlaying} />
          
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>

        {/* Info Overlay */}
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-red-500/30 max-w-sm">
          <h4 className="text-lg font-semibold text-red-300 mb-2">Peso Magnético</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Em campos de 10⁴ Tesla, o próprio espaço adquire densidade mensurável. 
            O elétron (dourado) orbita em frequências extremas, enquanto a pressão 
            magnética distorce a geometria local do espaço-tempo.
          </p>
          <div className="mt-3 text-xs text-red-400">
            <div>• Linhas de campo magnético (vermelho)</div>
            <div>• Elétron em órbita de ciclotron (dourado)</div>
            <div>• Distorção do espaço-tempo (roxo)</div>
          </div>
        </div>

        {/* Real-time Calculations */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
          <h5 className="text-sm font-semibold text-red-300 mb-2">Cálculos em Tempo Real</h5>
          <div className="space-y-1 text-xs text-gray-300">
            <div>f_c = eB/(2πm_e)</div>
            <div>P = B²/(2μ₀)</div>
            <div>m_mag = B²V/(2μ₀c²)</div>
          </div>
        </div>

        {/* Field Strength Indicator */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{fieldStrength.toFixed(1)}</div>
            <div className="text-sm text-red-300">× 10⁴ Tesla</div>
            <div className="text-xs text-gray-400 mt-1">
              {fieldStrength >= 2.5 ? 'Extremo' : fieldStrength >= 1.5 ? 'Alto' : 'Moderado'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagneticTimeSimulation;