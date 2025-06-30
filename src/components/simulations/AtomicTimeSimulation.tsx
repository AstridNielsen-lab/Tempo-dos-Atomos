import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Ring } from '@react-three/drei';
import { Mesh, Group } from 'three';
import { Atom, Play, Pause, RotateCcw, Settings } from 'lucide-react';

interface AtomicTimeSimulationProps {
  onBack: () => void;
}

// Electron component
const Electron: React.FC<{ radius: number; speed: number; color: string; angle: number }> = ({ radius, speed, color, angle }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * speed + angle;
      meshRef.current.position.x = Math.cos(time) * radius;
      meshRef.current.position.z = Math.sin(time) * radius;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.1]} position={[radius, 0, 0]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </Sphere>
  );
};

// Orbital ring component
const OrbitalRing: React.FC<{ radius: number; color: string }> = ({ radius, color }) => {
  return (
    <Ring args={[radius - 0.02, radius + 0.02, 64]} rotation={[-Math.PI / 2, 0, 0]}>
      <meshBasicMaterial color={color} transparent opacity={0.3} />
    </Ring>
  );
};

// Nucleus component
const Nucleus: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.3]}>
      <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
    </Sphere>
  );
};

// Main atom component
const AtomVisualization: React.FC<{ isPlaying: boolean; speed: number; element: string }> = ({ isPlaying, speed, element }) => {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (groupRef.current && isPlaying) {
      groupRef.current.rotation.y += 0.005 * speed;
    }
  });

  // Oganesson electron configuration (simplified)
  const orbitals = [
    { radius: 1, electrons: 2, color: '#8B5CF6', speed: 2 },
    { radius: 1.5, electrons: 8, color: '#3B82F6', speed: 1.5 },
    { radius: 2, electrons: 18, color: '#10B981', speed: 1.2 },
    { radius: 2.5, electrons: 32, color: '#F59E0B', speed: 1 },
    { radius: 3, electrons: 32, color: '#EF4444', speed: 0.8 },
    { radius: 3.5, electrons: 18, color: '#EC4899', speed: 0.6 },
    { radius: 4, electrons: 8, color: '#8B5CF6', speed: 0.4 }
  ];

  return (
    <group ref={groupRef}>
      <Nucleus />
      
      {orbitals.map((orbital, orbitalIndex) => (
        <group key={orbitalIndex}>
          <OrbitalRing radius={orbital.radius} color={orbital.color} />
          {Array.from({ length: orbital.electrons }).map((_, electronIndex) => (
            <Electron
              key={`${orbitalIndex}-${electronIndex}`}
              radius={orbital.radius}
              speed={orbital.speed * speed * (isPlaying ? 1 : 0)}
              color={orbital.color}
              angle={(electronIndex / orbital.electrons) * Math.PI * 2}
            />
          ))}
        </group>
      ))}
      
      <Text
        position={[0, -5, 0]}
        fontSize={0.5}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        {element} (Z=118)
      </Text>
    </group>
  );
};

const AtomicTimeSimulation: React.FC<AtomicTimeSimulationProps> = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [element, setElement] = useState('Oganesson');
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Controls Panel */}
      <div className="bg-black/60 backdrop-blur-sm border-b border-purple-500/30 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Atom className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Simulação: Tempo Atômico</h3>
            </div>
            <div className="text-sm text-purple-300">
              Transições eletrônicas em femtossegundos (10⁻¹⁵ s)
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
            </button>
            
            <button
              onClick={() => setShowControls(!showControls)}
              className="p-2 rounded-lg bg-black/40 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/20 transition-all"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Extended Controls */}
        {showControls && (
          <div className="mt-4 grid md:grid-cols-3 gap-4 p-4 bg-black/40 rounded-lg border border-purple-500/20">
            <div>
              <label className="block text-sm font-medium text-purple-300 mb-2">
                Velocidade da Simulação
              </label>
              <input
                type="range"
                min="0.1"
                max="3"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-gray-400 mt-1">{speed}x</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-purple-300 mb-2">
                Elemento
              </label>
              <select
                value={element}
                onChange={(e) => setElement(e.target.value)}
                className="w-full px-3 py-2 bg-black/60 border border-purple-500/30 rounded text-white"
              >
                <option value="Oganesson">Oganesson (Z=118)</option>
                <option value="Moscovium">Moscovium (Z=115)</option>
                <option value="Flerovium">Flerovium (Z=114)</option>
                <option value="Nihonium">Nihonium (Z=113)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-purple-300 mb-2">
                Informações
              </label>
              <div className="text-xs text-gray-300">
                <div>Período orbital: ~152 fs</div>
                <div>Frequência: ~6.58 × 10¹⁵ Hz</div>
                <div>Velocidade: ~0.6c</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3D Canvas */}
      <div className="flex-1 relative">
        <Canvas camera={{ position: [8, 8, 8], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
          
          <AtomVisualization isPlaying={isPlaying} speed={speed} element={element} />
          
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>

        {/* Info Overlay */}
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 max-w-sm">
          <h4 className="text-lg font-semibold text-purple-300 mb-2">Tempo Atômico</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Observe os elétrons orbitando o núcleo em velocidades relativísticas. 
            Cada órbita completa ocorre em femtossegundos - trilhões de vezes mais 
            rápido que nossa percepção temporal.
          </p>
          <div className="mt-3 text-xs text-purple-400">
            <div>• Camadas eletrônicas coloridas por energia</div>
            <div>• Núcleo pulsante representa vibração nuclear</div>
            <div>• Velocidade proporcional à realidade quântica</div>
          </div>
        </div>

        {/* Time Scale Indicator */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10⁻¹⁵</div>
            <div className="text-sm text-purple-300">segundos</div>
            <div className="text-xs text-gray-400 mt-1">femtossegundos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtomicTimeSimulation;