import React from 'react';
import { Atom, Clock, Zap, ArrowRight } from 'lucide-react';

interface ChapterOneProps {
  onNavigate: (chapter: string) => void;
}

const ChapterOne: React.FC<ChapterOneProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
          <Atom className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Capítulo I
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          Introdução ao Tempo Atômico
        </h2>
        <p className="text-lg text-purple-300">
          Femtossegundos e a Dança Eterna dos Elétrons
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Transições Eletrônicas */}
        <section className="bg-gradient-to-r from-black/40 to-purple-900/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Clock className="w-8 h-8 text-purple-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">O Tempo das Transições Eletrônicas</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              No reino dos <strong className="text-purple-400">femtossegundos</strong> (10⁻¹⁵ segundos), 
              os elétrons executam sua dança quântica em velocidades que desafiam nossa 
              compreensão temporal. Cada transição eletrônica entre níveis energéticos 
              ocorre em intervalos de tempo tão breves que nossa percepção humana, 
              limitada aos milissegundos, não consegue sequer conceber.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-purple-500/20 mb-6">
              <h4 className="text-lg font-semibold text-purple-300 mb-4">Escalas Temporais Fundamentais</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <div className="text-purple-400 font-medium">Transição Eletrônica</div>
                  <div className="text-2xl font-bold text-white">~10⁻¹⁵ s</div>
                  <div className="text-gray-400">Femtossegundos</div>
                </div>
                <div className="bg-blue-900/30 rounded-lg p-4">
                  <div className="text-blue-400 font-medium">Percepção Humana</div>
                  <div className="text-2xl font-bold text-white">~10⁻³ s</div>
                  <div className="text-gray-400">Milissegundos</div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              A diferença temporal é astronômica: enquanto um elétron completa bilhões 
              de transições, nós mal conseguimos piscar os olhos. Esta desproporção 
              revela a natureza ilusória de nossa percepção temporal - vivemos em 
              um mundo de sombras projetadas por uma realidade que vibra muito além 
              de nossa capacidade sensorial.
            </p>
          </div>
        </section>

        {/* Elementos Superpesados */}
        <section className="bg-gradient-to-r from-black/40 to-blue-900/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Zap className="w-8 h-8 text-blue-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Oganesson e os Elementos Superpesados</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              No <strong className="text-blue-400">Oganesson</strong> (Z=118), o elemento mais pesado 
              sintetizado pelo homem, os elétrons orbitam em velocidades relativísticas. 
              Com 118 prótons concentrando uma força eletromagnética colossal, os elétrons 
              das camadas internas experimentam rotações orbitais em frequências próximas a:
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-blue-500/20 mb-6">
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Frequência Orbital do Oganesson</h4>
              <div className="font-mono text-center">
                <div className="text-3xl font-bold text-white mb-2">ν ≈ 6.58 × 10¹⁵ Hz</div>
                <div className="text-blue-400">Período: T ≈ 152 femtossegundos</div>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <p>Onde ν é calculado pela fórmula relativística:</p>
                <p className="font-mono mt-2">ν = (cα²Z⁴/n³) × [1 - (αZ)²/n²]⁻¹/²</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Nestes elementos extremos, a matéria se aproxima dos limites físicos da 
              estabilidade. Os elétrons, presos em órbitas quase-colapsadas pela força 
              gravitacional do núcleo hipermassivo, revelam os confins onde a química 
              encontra a física de partículas, onde o tempo atômico se curva sob o 
              peso da própria criação.
            </p>
          </div>
        </section>

        {/* Reflexões Filosóficas */}
        <section className="bg-gradient-to-r from-black/40 to-purple-900/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6">Reflexões sobre a Percepção Limitada</h3>
          
          <div className="prose prose-invert max-w-none">
            <blockquote className="border-l-4 border-purple-500 pl-6 italic text-lg text-purple-300 mb-6">
              "Somos espectadores de uma sinfonia cósmica tocada em frequências 
              que nossos sentidos jamais poderão ouvir. Cada átomo ao nosso redor 
              pulsa com uma urgência temporal que faz nossos corações parecerem 
              estátuas de mármore."
            </blockquote>

            <p className="text-gray-300 leading-relaxed mb-6">
              A consciência humana, evoluída para processar informações na escala 
              dos milissegundos, é fundamentalmente <em className="text-purple-400">anacrônica</em> 
              quando confrontada com a realidade quântica. Vivemos em um presente 
              ilusório, construído pela agregação estatística de trilhões de eventos 
              que ocorrem em escalas temporais incompreensíveis.
            </p>

            <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-lg font-semibold text-purple-300 mb-4">A Maya Temporal</h4>
              <p className="text-gray-300 leading-relaxed">
                Os antigos filósofos hindus falavam de <strong className="text-purple-400">Maya</strong>, 
                a ilusão que vela a verdadeira natureza da realidade. No contexto quântico, 
                nossa percepção temporal é a mais profunda das Mayas - uma cortina de 
                lentidão que nos impede de perceber a dança frenética dos constituintes 
                fundamentais da matéria.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-purple-500/30">
          <button
            onClick={() => onNavigate('toc')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-black/40 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/20 transition-all duration-300"
          >
            <span>← Voltar ao Índice</span>
          </button>
          
          <button
            onClick={() => onNavigate('chapter2')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <span>Próximo: Tempo Nuclear</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterOne;