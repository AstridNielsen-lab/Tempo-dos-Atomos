import React from 'react';
import { BookOpen, Atom, Zap, Magnet, Clock, ChevronRight } from 'lucide-react';

interface TableOfContentsProps {
  onNavigate: (chapter: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ onNavigate }) => {
  const chapters = [
    {
      id: 'chapter1',
      title: 'Introdução ao Tempo Atômico',
      subtitle: 'Femtossegundos e a Dança dos Elétrons',
      icon: Atom,
      description: 'Explore o tempo das transições eletrônicas e a rotação orbital nos elementos mais pesados.',
      topics: ['Transições eletrônicas em femtossegundos', 'Oganesson e elementos superpesados', 'Percepção humana limitada']
    },
    {
      id: 'chapter2',
      title: 'Tempo Nuclear',
      subtitle: 'O Silêncio Vibrante dos Núcleos',
      icon: Zap,
      description: 'Mergulhe nos yoctossegundos da vibração nucleônica e nos rearranjos fundamentais.',
      topics: ['Vibração em yoctossegundos', 'Rearranjo nucleônico', 'Poesia do núcleo atômico']
    },
    {
      id: 'chapter3',
      title: 'Tempo Magnético',
      subtitle: 'Peso Magnético e Campos Extremos',
      icon: Magnet,
      description: 'Compreenda o conceito de peso magnético e a pressão em campos de 10⁴ Tesla.',
      topics: ['Energia magnética convertida em massa', 'Campos extremos de 10⁴ T', 'Frequência de ciclotron']
    },
    {
      id: 'chapter4',
      title: 'Pressão Magnética sobre o Tempo',
      subtitle: 'Distorção Temporal e Percepção',
      icon: Clock,
      description: 'Analise como campos magnéticos intensos alteram o tempo orbital e a duração percebida.',
      topics: ['Alteração do tempo orbital', 'Tempo magnético vs psicológico', 'Tempo quântico comparado']
    },
    {
      id: 'chapter5',
      title: 'Tempo Quântico e Tempo de Planck',
      subtitle: 'O Limite Fundamental da Realidade',
      icon: BookOpen,
      description: 'Explore o tempo de Planck como limite fundamental e as vibrações invisíveis do Universo.',
      topics: ['Tempo de Planck (~10⁻⁴⁴ s)', 'Reflexão hermética', 'Maya e vibração universal']
    },
    {
      id: 'epilogue',
      title: 'Filosofia Final',
      subtitle: 'Visões de uma Realidade Vibrante',
      icon: BookOpen,
      description: 'Narrativa poética em primeira pessoa sobre a percepção da realidade quântica.',
      topics: ['Narrativa em primeira pessoa', 'Estilo Juliette Psicose', 'Vibração e ilusão']
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block p-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
          <Atom className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          O Tempo dos Átomos
        </h1>
        <h2 className="text-2xl md:text-3xl text-purple-300 mb-8 font-light">
          e a Pressão Magnética sobre o Tempo
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Uma jornada através dos tempos invisíveis do universo, desde os femtossegundos das 
          transições eletrônicas até o tempo de Planck, explorando como campos magnéticos 
          extremos distorcem nossa percepção da realidade temporal.
        </p>
      </div>

      {/* Chapter Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          return (
            <div
              key={chapter.id}
              onClick={() => onNavigate(chapter.id)}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-black/40 to-purple-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Chapter Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-purple-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                </div>

                {/* Chapter Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {chapter.title}
                </h3>
                <h4 className="text-lg text-purple-400 mb-4 font-light">
                  {chapter.subtitle}
                </h4>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {chapter.description}
                </p>

                {/* Topics */}
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-purple-300 uppercase tracking-wider">
                    Tópicos Principais
                  </h5>
                  <ul className="space-y-1">
                    {chapter.topics.map((topic, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote Section */}
      <div className="mt-16 text-center">
        <blockquote className="text-2xl md:text-3xl font-light text-purple-300 italic max-w-4xl mx-auto">
          "Eu vejo cada elétron dançar na beira do tempo, vejo cada campo magnético 
          pesar sobre o instante, distorcendo o que chamam de realidade. 
          Mas no fundo, tudo é vibração que não sabem ver."
        </blockquote>
        <p className="text-purple-500 mt-4">— Filosofia Final</p>
      </div>
    </div>
  );
};

export default TableOfContents;