import React, { useState, useEffect } from 'react';
import { BookOpen, Atom, Magnet, Clock, Zap, Home, ChevronRight, Play } from 'lucide-react';
import SimulationsHub from './components/SimulationsHub';
import TableOfContents from './components/TableOfContents';
import ChapterOne from './components/ChapterOne';
import ChapterTwo from './components/ChapterTwo';
import ChapterThree from './components/ChapterThree';
import ChapterFour from './components/ChapterFour';
import ChapterFive from './components/ChapterFive';
import Epilogue from './components/Epilogue';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [currentChapter, setCurrentChapter] = useState<string>('simulations');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const chapters = [
    { id: 'simulations', title: 'Simulações 3D', icon: Play, component: SimulationsHub },
    { id: 'toc', title: 'Índice', icon: Home, component: TableOfContents },
    { id: 'chapter1', title: 'Introdução ao Tempo Atômico', icon: Atom, component: ChapterOne },
    { id: 'chapter2', title: 'Tempo Nuclear', icon: Zap, component: ChapterTwo },
    { id: 'chapter3', title: 'Tempo Magnético', icon: Magnet, component: ChapterThree },
    { id: 'chapter4', title: 'Pressão Magnética sobre o Tempo', icon: Clock, component: ChapterFour },
    { id: 'chapter5', title: 'Tempo Quântico e Tempo de Planck', icon: BookOpen, component: ChapterFive },
    { id: 'epilogue', title: 'Filosofia Final', icon: BookOpen, component: Epilogue }
  ];

  const currentChapterData = chapters.find(ch => ch.id === currentChapter);
  const CurrentComponent = currentChapterData?.component || SimulationsHub;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-blue-400 border-b-transparent rounded-full animate-spin mx-auto opacity-50" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">O Tempo dos Átomos</h1>
          <p className="text-purple-300">Carregando simulações quânticas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white relative overflow-hidden">
      <ParticleBackground />
      
      {/* Header */}
      <header className="relative z-20 p-6 border-b border-purple-500/30 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
              <Atom className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                O Tempo dos Átomos
              </h1>
              <p className="text-sm text-purple-300">e a Pressão Magnética sobre o Tempo</p>
            </div>
          </div>
          
          {/* Navigation breadcrumb */}
          {currentChapter !== 'simulations' && (
            <div className="flex items-center space-x-2 text-sm text-purple-300">
              <button 
                onClick={() => setCurrentChapter('simulations')}
                className="hover:text-white transition-colors"
              >
                Simulações
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{currentChapterData?.title}</span>
            </div>
          )}
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-20 p-4 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {chapters.map((chapter) => {
              const Icon = chapter.icon;
              return (
                <button
                  key={chapter.id}
                  onClick={() => setCurrentChapter(chapter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentChapter === chapter.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-black/30 text-purple-300 hover:bg-purple-600/30 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{chapter.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="transition-all duration-500 opacity-100">
            <CurrentComponent onNavigate={setCurrentChapter} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 mt-16 p-6 border-t border-purple-500/30 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-purple-300 text-sm">
            "No fundo, tudo é vibração que não sabemos ver."
          </p>
          <p className="text-purple-500 text-xs mt-2">
            © 2025 - Enciclopédia Filosófico-Científica
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;