import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Points, PointMaterial } from '@react-three/drei';
import { Mesh, Group, BufferGeometry, Float32BufferAttribute } from 'three';
import { Clock, Play, Pause, Settings, Infinity } from 'lucide-react';

interface PlanckTimeSimulationProps {
  onBack: () => void;
}

// Quantum foam particles
const QuantumFoam: React.FC<{ density: number; isPlaying: boolean }> = ({ density, isPlaying }) => {
  const pointsRef = useRef<any>(null);
  
  // Generate random points for quantum foam
  const particleCount = Math.floor(density * 1000);
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (pointsRef.current && isPlaying) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      
      // Fluctuation effect
      const time = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(time * 5) * 0.2;
      pointsRef.current.scale.setScalar(scale);
    }
  });

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));

  return (
    <Points ref={pointsRef} geometry={geometry}>
      <PointMaterial
        color="#8B5CF6"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </Points>
  );
};

// Spacetime fluctuation
const SpacetimeFluctuation: React.FC<{ intensity: number; isPlaying: boolean }> = ({ intensity, isPlaying }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && isPlaying) {
      const time = state.clock.getElapsedTime() * intensity;
      
      // Complex fluctuation pattern
      meshRef.current.scale.x = 1 + Math.sin(time * 3.7) * 0.3 * intensity;
      meshRef.current.scale.y = 1 + Math.cos(time * 2.3) * 0.3 * intensity;
      meshRef.current.scale.z = 1 + Math.sin(time * 4.1) * 0.3 * intensity;
      
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
      meshRef.current.rotation.z = time * 0.05;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 32, 32]} position={[0, 0, 0]}>
      <meshBasicMaterial color="#FF6B6B" transparent opacity={0.1} wireframe />
    </Sphere>
  );
};

// Virtual particles
const VirtualParticles: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current && isPlaying) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  const particles = Array.from({ length: 20 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6
    ] as [number, number, number],
    color: Math.random() > 0.5 ? '#00FFFF' : '#FF00FF',
    phase: Math.random() * Math.PI * 2
  }));

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <VirtualParticle
          key={index}
          position={particle.position}
          color={particle.color}
          phase={particle.phase}
          isPlaying={isPlaying}
        />
      ))}
    </group>
  );
};

// Individual virtual particle
const VirtualParticle: React.FC<{ 
  position: [number, number, number]; 
  color: string; 
  phase: number; 
  isPlaying: boolean 
}> = ({ position, color, phase, isPlaying }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && isPlaying) {
      const time = state.clock.getElapsedTime() * 10 + phase;
      
      // Quantum tunneling effect
      const opacity = (Math.sin(time) + 1) * 0.5;
      meshRef.current.material.opacity = opacity;
      
      // Random quantum jumps
      if (Math.random() < 0.01) {
        meshRef.current.position.x += (Math.random() - 0.5) * 0.5;
        meshRef.current.position.y += (Math.random() - 0.5) * 0.5;
        meshRef.current.position.z += (Math.random() - 0.5) * 0.5;
      }
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.05]} position={position}>
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </Sphere>
  );
};

// Main Planck scale visualization
const PlanckVisualization: React.FC<{ 
  foamDensity: number; 
  fluctuationIntensity: number; 
  isPlaying: boolean 
}> = ({ foamDensity, fluctuationIntensity, isPlaying }) => {
  return (
    <group>
      <QuantumFoam density={foamDensity} isPlaying={isPlaying} />
      <SpacetimeFluctuation intensity={fluctuationIntensity} isPlaying={isPlaying} />
      <VirtualParticles isPlaying={isPlaying} />
      
      <Text
        position={[0, -4, 0]}
        fontSize={0.3}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        Escala de Planck
      </Text>
      
      <Text
        position={[0, -4.5, 0]}
        fontSize={0.2}
        color="#8B5CF6"
        anchorX="center"
        anchorY="middle"
      >
        Espuma Quântica do Espaço-Tempo
      </Text>
      
      <Text
        position={[0, -5, 0]}
        fontSize={0.15}
        color="#666666"
        anchorX="center"
        anchorY="middle"
      >
        t_P ≈ 5.39 × 10⁻⁴⁴ segundos
      </Text>
    </group>
  );
};

const PlanckTimeSimulation: React.FC<PlanckTimeSimulationProps> = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [foamDensity, setFoamDensity] = useState(1.0);
  const [fluctuationIntensity, setFluctuationIntensity] = useState(1.0);
  const [showControls, setShowControls] = useState(false);

  const planckTime = 5.39e-44; // seconds
  const planckLength = 1.616e-35; // meters
  const planckEnergy = 1.956e9; // joules

  return (
    <div className="h-screen flex flex-col">
      {/* Controls Panel */}
      <div className="bg-black/60 backdrop-blur-sm border-b border-violet-500/30 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-violet-400" />
              <h3 className="text-xl font-bold text-white">Simulação: Tempo de Planck</h3>
            </div>
            <div className="text-sm text-violet-300">
              Espuma quântica e flutuações fundamentais
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
            </button>
            
            <button
              onClick={() => setShowControls(!showControls)}
              className="p-2 rounded-lg bg-black/40 border border-violet-500/30 text-violet-300 hover:text-white hover:bg-violet-600/20 transition-all"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Extended Controls */}
        {showControls && (
          <div className="mt-4 grid md:grid-cols-4 gap-4 p-4 bg-black/40 rounded-lg border border-violet-500/20">
            <div>
              <label className="block text-sm font-medium text-violet-300 mb-2">
                Densidade da Espuma
              </label>
              <input
                type="range"
                min="0.1"
                max="2.0"
                step="0.1"
                value={foamDensity}
                onChange={(e) => setFoamDensity(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-gray-400 mt-1">{foamDensity.toFixed(1)}x</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-violet-300 mb-2">
                Intensidade das Flutuações
              </label>
              <input
                type="range"
                min="0.1"
                max="3.0"
                step="0.1"
                value={fluctuationIntensity}
                onChange={(e) => setFluctuationIntensity(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-gray-400 mt-1">{fluctuationIntensity.toFixed(1)}x</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-violet-300 mb-2">
                Constantes de Planck
              </label>
              <div className="text-xs text-gray-300">
                <div>t_P = 5.39×10⁻⁴⁴ s</div>
                <div>l_P = 1.62×10⁻³⁵ m</div>
                <div>E_P = 1.96×10⁹ J</div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-violet-300 mb-2">
                Fenômenos Quânticos
              </label>
              <div className="text-xs text-gray-300">
                <div>• Criação/aniquilação</div>
                <div>• Flutuações métricas</div>
                <div>• Partículas virtuais</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3D Canvas */}
      <div className="flex-1 relative">
        <Canvas camera={{ position: [8, 8, 8], fov: 60 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
          <pointLight position={[0, 0, 0]} intensity={0.3} color="#FF6B6B" />
          
          <PlanckVisualization 
            foamDensity={foamDensity} 
            fluctuationIntensity={fluctuationIntensity} 
            isPlaying={isPlaying} 
          />
          
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>

        {/* Info Overlay */}
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-violet-500/30 max-w-sm">
          <h4 className="text-lg font-semibold text-violet-300 mb-2">Limite Fundamental</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Na escala de Planck, o próprio conceito de tempo se dissolve. 
            Aqui, a espuma quântica do espaço-tempo cria e destrói geometrias 
            em flutuações que transcendem nossa compreensão da causalidade.
          </p>
          <div className="mt-3 text-xs text-violet-400">
            <div>• Espuma quântica (pontos roxos)</div>
            <div>• Flutuações métricas (malha vermelha)</div>
            <div>• Partículas virtuais (cyan/magenta)</div>
          </div>
        </div>

        {/* Planck Units */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-violet-500/30">
          <h5 className="text-sm font-semibold text-violet-300 mb-2 flex items-center">
            <Infinity className="w-4 h-4 mr-2" />
            Unidades de Planck
          </h5>
          <div className="space-y-1 text-xs text-gray-300">
            <div>Tempo: 5.39×10⁻⁴⁴ s</div>
            <div>Comprimento: 1.62×10⁻³⁵ m</div>
            <div>Massa: 2.18×10⁻⁸ kg</div>
            <div>Energia: 1.96×10⁹ J</div>
          </div>
        </div>

        {/* Maya Reflection */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-violet-500/30 max-w-xs">
          <h5 className="text-sm font-semibold text-violet-300 mb-2">Reflexão Hermética</h5>
          <p className="text-xs text-gray-300 italic leading-relaxed">
            "Na escala de Planck, Maya revela sua face mais profunda - 
            onde tempo e espaço são apenas véus sobre a vibração primordial 
            que sustenta toda a existência."
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanckTimeSimulation;