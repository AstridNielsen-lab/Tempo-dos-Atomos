import React, { useState } from 'react';
import { Play, Atom, Zap, Magnet, Clock, BookOpen, ArrowRight, Settings, Info } from 'lucide-react';
import AtomicTimeSimulation from './simulations/AtomicTimeSimulation';
import NuclearTimeSimulation from './simulations/NuclearTimeSimulation';
import MagneticTimeSimulation from './simulations/MagneticTimeSimulation';
import PlanckTimeSimulation from './simulations/PlanckTimeSimulation';

interface SimulationsHubProps {
  onNavigate: (chapter: string) => void;
}

const SimulationsHub: React.FC<SimulationsHubProps> = ({ onNavigate }) => {
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);

  const simulations = [
    {
      id: 'atomic',
      title: 'Tempo Atômico',
      subtitle: 'Transições Eletrônicas em Femtossegundos',
      icon: Atom,
      timeScale: '10⁻¹⁵ s',
      description: 'Visualize elétrons saltando entre níveis energéticos em elementos superpesados como o Oganesson.',
      color: 'from-purple-600 to-blue-600',
      component: AtomicTimeSimulation
    },
    {
      id: 'nuclear',
      title: 'Tempo Nuclear',
      subtitle: 'Vibração Nucleônica em Yoctossegundos',
      icon: Zap,
      timeScale: '10⁻²⁴ s',
      description: 'Explore o "silêncio vibrante" dos prótons e nêutrons no núcleo atômico.',
      color: 'from-blue-600 to-indigo-600',
      component: NuclearTimeSimulation
    },
    {
      id: 'magnetic',
      title: 'Tempo Magnético',
      subtitle: 'Campos Extremos e Frequência de Ciclotron',
      icon: Magnet,
      timeScale: '~10¹⁵ Hz',
      description: 'Simule elétrons girando em campos magnéticos de 10⁴ Tesla com pressão extrema.',
      color: 'from-red-600 to-orange-600',
      component: MagneticTimeSimulation
    },
    {
      id: 'planck',
      title: 'Tempo de Planck',
      subtitle: 'Espuma Quântica do Espaço-Tempo',
      icon: Clock,
      timeScale: '10⁻⁴⁴ s',
      description: 'Mergulhe na escala fundamental onde o próprio tempo se dissolve em flutuações quânticas.',
      color: 'from-violet-600 to-purple-600',
      component: PlanckTimeSimulation
    }
  ];

  const activeSimData = simulations.find(sim => sim.id === activeSimulation);
  const ActiveSimComponent = activeSimData?.component;

  if (activeSimulation && ActiveSimComponent) {
    return (
      <div className="min-h-screen">
        {/* Simulation Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setActiveSimulation(null)}
              className="p-2 rounded-lg bg-black/40 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/20 transition-all duration-300"
            >
              ← Voltar às Simulações
            </button>
            <div>
              <h2 className="text-2xl font-bold text-white">{activeSimData.title}</h2>
              <p className="text-purple-300">{activeSimData.subtitle}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-purple-400">Escala Temporal</div>
            <div className="text-xl font-bold text-white">{activeSimData.timeScale}</div>
          </div>
        </div>

        {/* Active Simulation */}
        <ActiveSimComponent onBack={() => setActiveSimulation(null)} />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block p-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
          <Play className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Simulações 3D
        </h1>
        <h2 className="text-2xl md:text-3xl text-purple-300 mb-8 font-light">
          Visualizações Interativas dos Tempos Atômicos
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explore os diferentes tempos do universo através de simulações 3D interativas. 
          Desde femtossegundos das transições eletrônicas até o tempo de Planck, 
          visualize as escalas temporais que governam a realidade quântica.
        </p>
      </div>

      {/* Simulation Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {simulations.map((simulation) => {
          const Icon = simulation.icon;
          return (
            <div
              key={simulation.id}
              onClick={() => setActiveSimulation(simulation.id)}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-black/40 to-purple-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm"
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${simulation.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Simulation Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${simulation.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-purple-400">Escala</div>
                    <div className="text-lg font-bold text-white">{simulation.timeScale}</div>
                  </div>
                </div>

                {/* Simulation Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {simulation.title}
                </h3>
                <h4 className="text-lg text-purple-400 mb-4 font-light">
                  {simulation.subtitle}
                </h4>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {simulation.description}
                </p>

                {/* Launch Button */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105">
                    <Play className="w-4 h-4" />
                    <span>Iniciar Simulação</span>
                  </button>
                  <ArrowRight className="w-6 h-6 text-purple-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Panel */}
      <div className="bg-gradient-to-r from-black/60 to-purple-900/30 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm mb-8">
        <div className="flex items-center mb-6">
          <Info className="w-8 h-8 text-purple-400 mr-4" />
          <h3 className="text-2xl font-bold text-white">Como Usar as Simulações</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">Controles Interativos</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                Clique e arraste para rotacionar a visualização
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                Use a roda do mouse para zoom in/out
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                Ajuste parâmetros em tempo real
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">Escalas Temporais</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                Femtossegundos: 10⁻¹⁵ segundos
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                Yoctossegundos: 10⁻²⁴ segundos
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
                Tempo de Planck: 10⁻⁴⁴ segundos
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation to Encyclopedia */}
      <div className="text-center">
        <button
          onClick={() => onNavigate('toc')}
          className="flex items-center space-x-3 mx-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-lg font-medium"
        >
          <BookOpen className="w-6 h-6" />
          <span>Explorar a Enciclopédia Completa</span>
          <ArrowRight className="w-6 h-6" />
        </button>
        <p className="text-purple-300 mt-4">
          Aprofunde-se na teoria por trás das simulações
        </p>
      </div>
    </div>
  );
};

export default SimulationsHub;