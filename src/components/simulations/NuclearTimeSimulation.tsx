import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere } from '@react-three/drei';
import { Mesh, Group } from 'three';
import { Zap, Play, Pause, Settings } from 'lucide-react';

interface NuclearTimeSimulationProps {
  onBack: () => void;
}

// Nucleon component (proton or neutron)
const Nucleon: React.FC<{ position: [number, number, number]; type: 'proton' | 'neutron'; vibrationSpeed: number }> = ({ position, type, vibrationSpeed }) => {
  const meshRef = useRef<Mesh>(null);
  const basePosition = useRef(position);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * vibrationSpeed;
      const vibrationAmplitude = 0.1;
      
      meshRef.current.position.x = basePosition.current[0] + Math.sin(time * 3.7) * vibrationAmplitude;
      meshRef.current.position.y = basePosition.current[1] + Math.cos(time * 2.3) * vibrationAmplitude;
      meshRef.current.position.z = basePosition.current[2] + Math.sin(time * 4.1) * vibrationAmplitude;
      
      // Pulsing effect
      const scale = 1 + Math.sin(time * 5) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  const color = type === 'proton' ? '#FF6B6B' : '#4ECDC4';

  return (
    <Sphere ref={meshRef} args={[0.15]} position={position}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </Sphere>
  );
};

// Nuclear force field visualization
const ForceField: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && isPlaying) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 4) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.2]} position={[0, 0, 0]}>
      <meshBasicMaterial color="#8B5CF6" transparent opacity={0.1} wireframe />
    </Sphere>
  );
};

// Main nucleus visualization
const NucleusVisualization: React.FC<{ isPlaying: boolean; vibrationSpeed: number }> = ({ isPlaying, vibrationSpeed }) => {
  const groupRef = useRef<Group>(null);

  // Simplified nucleus with protons and neutrons
  const nucleons = [
    // Inner shell
    { pos: [0, 0, 0] as [number, number, number], type: 'proton' as const },
    { pos: [0.3, 0, 0] as [number, number, number], type: 'neutron' as const },
    { pos: [-0.3, 0, 0] as [number, number, number], type: 'proton' as const },
    { pos: [0, 0.3, 0] as [number, number, number], type: 'neutron' as const },
    { pos: [0, -0.3, 0] as [number, number, number], type: 'proton' as const },
    { pos: [0, 0, 0.3] as [number, number, number], type: 'neutron' as const },
    { pos: [0, 0, -0.3] as [number, number, number], type: 'proton' as const },
    
    // Outer shell
    { pos: [0.4, 0.4, 0] as [number, number, number], type: 'neutron' as const },
    { pos: [-0.4, 0.4, 0] as [number, number, number], type: 'proton' as const },
    { pos: [0.4, -0.4, 0] as [number, number, number], type: 'neutron' as const },
    { pos: [-0.4, -0.4, 0] as [number, number, number], type: 'proton' as const },
    { pos: [0, 0.4, 0.4] as [number, number, number], type: 'neutron' as const },
    { pos: [0, -0.4, 0.4] as [number, number, number], type: 'proton' as const },
    { pos: [0, 0.4, -0.4] as [number, number, number], type: 'neutron' as const },
    { pos: [0, -0.4, -0.4] as [number, number, number], type: 'proton' as const },
  ];

  return (
    <group ref={groupRef}>
      <ForceField isPlaying={isPlaying} />
      
      {nucleons.map((nucleon, index) => (
        <Nucleon
          key={index}
          position={nucleon.pos}
          type={nucleon.type}
          vibrationSpeed={vibrationSpeed * (isPlaying ? 1 : 0)}
        />
      ))}
      
      <Text
        position={[0, -2, 0]}
        fontSize={0.3}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        Núcleo Atômico
      </Text>
      
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.2}
        color="#8B5CF6"
        anchorX="center"
        anchorY="middle"
      >
        Vibração em Yoctossegundos
      </Text>
    </group>
  );
};

const NuclearTimeSimulation: React.FC<NuclearTimeSimulationProps> = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [vibrationSpeed, setVibrationSpeed] = useState(2);
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Controls Panel */}
      <div className="bg-black/60 backdrop-blur-sm border-b border-blue-500/30 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Simulação: Tempo Nuclear</h3>
            </div>
            <div className="text-sm text-blue-300">
              Vibração nucleônica em yoctossegundos (10⁻²⁴ s)
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
            </button>
            
            <button
              onClick={() => setShowControls(!showControls)}
              className="p-2 rounded-lg bg-black/40 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-600/20 transition-all"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Extended Controls */}
        {showControls && (
          <div className="mt-4 grid md:grid-cols-3 gap-4 p-4 bg-black/40 rounded-lg border border-blue-500/20">
            <div>
              <label className="block text-sm font-medium text-blue-300 mb-2">
                Intensidade da Vibração
              </label>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.1"
                value={vibrationSpeed}
                onChange={(e) => setVibrationSpeed(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-gray-400 mt-1">{vibrationSpeed}x</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-blue-300 mb-2">
                Informações Nucleares
              </label>
              <div className="text-xs text-gray-300">
                <div>Prótons: 8 (vermelho)</div>
                <div>Nêutrons: 7 (azul)</div>
                <div>Força nuclear forte ativa</div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-blue-300 mb-2">
                Parâmetros Temporais
              </label>
              <div className="text-xs text-gray-300">
                <div>Período: ~10⁻²⁴ s</div>
                <div>Frequência: ~10²⁴ Hz</div>
                <div>Energia: ~1 MeV</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3D Canvas */}
      <div className="flex-1 relative">
        <Canvas camera={{ position: [4, 4, 4], fov: 60 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4ECDC4" />
          <pointLight position={[0, 0, 0]} intensity={0.8} color="#FF6B6B" />
          
          <NucleusVisualization isPlaying={isPlaying} vibrationSpeed={vibrationSpeed} />
          
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>

        {/* Info Overlay */}
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30 max-w-sm">
          <h4 className="text-lg font-semibold text-blue-300 mb-2">O Silêncio Vibrante</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            No coração do átomo, prótons e nêutrons executam uma dança perpétua 
            em yoctossegundos. Esta vibração nuclear é o "silêncio mais barulhento 
            do universo" - onde a matéria se mantém coesa através da força nuclear forte.
          </p>
          <div className="mt-3 text-xs text-blue-400">
            <div>• Prótons (vermelho) carregados positivamente</div>
            <div>• Nêutrons (azul) eletricamente neutros</div>
            <div>• Campo de força nuclear (roxo translúcido)</div>
          </div>
        </div>

        {/* Time Scale Indicator */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10⁻²⁴</div>
            <div className="text-sm text-blue-300">segundos</div>
            <div className="text-xs text-gray-400 mt-1">yoctossegundos</div>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">
          <h5 className="text-sm font-semibold text-blue-300 mb-2">Legenda</h5>
          <div className="space-y-1 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-gray-300">Prótons</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
              <span className="text-gray-300">Nêutrons</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500 opacity-30 mr-2"></div>
              <span className="text-gray-300">Campo Nuclear</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuclearTimeSimulation;