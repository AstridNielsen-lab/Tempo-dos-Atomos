import React from 'react';
import { Clock, Brain, Waves, ArrowRight, ArrowLeft } from 'lucide-react';

interface ChapterFourProps {
  onNavigate: (chapter: string) => void;
}

const ChapterFour: React.FC<ChapterFourProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 mb-6">
          <Clock className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Capítulo IV
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          Pressão Magnética sobre o Tempo
        </h2>
        <p className="text-lg text-emerald-300">
          A Distorção Temporal nos Campos Extremos
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Alteração do Tempo Orbital */}
        <section className="bg-gradient-to-r from-black/40 to-emerald-900/20 rounded-2xl p-8 border border-emerald-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Waves className="w-8 h-8 text-emerald-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Alteração do Tempo Orbital</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Campos magnéticos intensos não apenas confinam elétrons em órbitas circulares, 
              mas <strong className="text-emerald-400">distorcem o próprio tecido temporal</strong> 
              em que essas órbitas existem. O tempo orbital - o período necessário para 
              um elétron completar uma revolução - torna-se uma função não apenas da 
              energia, mas da curvatura magnética do espaço-tempo local.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-emerald-500/20 mb-6">
              <h4 className="text-lg font-semibold text-emerald-300 mb-4">Dilatação Temporal Magnética</h4>
              <div className="space-y-4">
                <div className="bg-emerald-900/30 rounded-lg p-4">
                  <div className="font-mono text-center">
                    <div className="text-xl font-bold text-white mb-2">Δt/t₀ = √(1 - v²/c²) × (1 + eΦ_B/mc²)</div>
                    <div className="text-emerald-400 text-sm">
                      Correção relativística + potencial magnético
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-black/40 rounded-lg p-3">
                    <div className="text-emerald-400">Campo fraco (1 T):</div>
                    <div className="text-white font-bold">Δt/t₀ ≈ 1.000001</div>
                    <div className="text-gray-400">Correção desprezível</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-3">
                    <div className="text-emerald-400">Campo extremo (10⁴ T):</div>
                    <div className="text-white font-bold">Δt/t₀ ≈ 1.15</div>
                    <div className="text-gray-400">15% de dilatação</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Esta dilatação temporal não é apenas um efeito relativístico, mas uma 
              manifestação da interação profunda entre campo magnético e geometria 
              espaço-temporal. O elétron experimenta um "tempo próprio" diferente, 
              onde cada órbita se alonga ou contrai dependendo da intensidade magnética local.
            </p>
          </div>
        </section>

        {/* Tempos Comparativos */}
        <section className="bg-gradient-to-r from-black/40 to-teal-900/20 rounded-2xl p-8 border border-teal-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Brain className="w-8 h-8 text-teal-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Tempo Magnético vs Tempo Psicológico</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              A comparação entre <strong className="text-teal-400">tempo magnético</strong> e 
              <strong className="text-blue-400">tempo psicológico</strong> revela uma das 
              mais profundas assimetrias da existência consciente. Enquanto nossa 
              percepção temporal flui em intervalos de milissegundos, os elétrons 
              sob campos magnéticos extremos experimentam distorções temporais 
              em escalas de femtossegundos.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-teal-500/20 mb-6">
              <h4 className="text-lg font-semibold text-teal-300 mb-4">Escalas Temporais Comparativas</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-teal-900/30 rounded-lg">
                  <div>
                    <div className="text-teal-300 font-medium">Tempo Magnético (10⁴ T)</div>
                    <div className="text-gray-400 text-sm">Período orbital eletrônico</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">~3.6 fs</div>
                    <div className="text-teal-400 text-sm">10⁻¹⁵ s</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-900/30 rounded-lg">
                  <div>
                    <div className="text-blue-300 font-medium">Tempo Psicológico</div>
                    <div className="text-gray-400 text-sm">Menor intervalo perceptível</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">~1-10 ms</div>
                    <div className="text-blue-400 text-sm">10⁻³ s</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-900/30 rounded-lg">
                  <div>
                    <div className="text-purple-300 font-medium">Diferença de Escala</div>
                    <div className="text-gray-400 text-sm">Razão temporal</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">~10¹²</div>
                    <div className="text-purple-400 text-sm">1 trilhão de vezes</div>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-teal-500 pl-6 italic text-lg text-teal-300 mb-6">
              "Para um elétron em campo magnético extremo, nossa vida inteira 
              transcorre em um único piscar de seus olhos quânticos. Somos 
              estátuas temporais contemplando uma realidade que dança milhões 
              de vezes mais rápido que nossa capacidade de percepção."
            </blockquote>
          </div>
        </section>

        {/* Tempo Quântico */}
        <section className="bg-gradient-to-r from-black/40 to-cyan-900/20 rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Clock className="w-8 h-8 text-cyan-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Tempo Quântico e Superposição Temporal</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              O <strong className="text-cyan-400">tempo quântico</strong> transcende as 
              limitações lineares do tempo clássico. Em campos magnéticos extremos, 
              elétrons podem existir em superposições temporais - estados onde 
              múltiplas trajetórias temporais coexistem simultaneamente, criando 
              uma realidade temporal probabilística.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-cyan-500/20 mb-6">
              <h4 className="text-lg font-semibold text-cyan-300 mb-4">Características do Tempo Quântico</h4>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-cyan-900/30 rounded-lg p-4">
                    <h5 className="text-cyan-300 font-medium mb-2">Superposição Temporal</h5>
                    <p className="text-gray-300 text-sm">
                      Elétrons podem existir em múltiplos estados temporais 
                      simultaneamente até o momento da medição.
                    </p>
                  </div>
                  <div className="bg-cyan-900/30 rounded-lg p-4">
                    <h5 className="text-cyan-300 font-medium mb-2">Tunelamento Temporal</h5>
                    <p className="text-gray-300 text-sm">
                      Partículas podem "saltar" através de barreiras temporais, 
                      aparecendo no futuro sem experimentar o intervalo.
                    </p>
                  </div>
                  <div className="bg-cyan-900/30 rounded-lg p-4">
                    <h5 className="text-cyan-300 font-medium mb-2">Emaranhamento Temporal</h5>
                    <p className="text-gray-300 text-sm">
                      Partículas podem estar correlacionadas através do tempo, 
                      onde o estado futuro afeta o estado passado.
                    </p>
                  </div>
                  <div className="bg-cyan-900/30 rounded-lg p-4">
                    <h5 className="text-cyan-300 font-medium mb-2">Incerteza Temporal</h5>
                    <p className="text-gray-300 text-sm">
                      O princípio da incerteza se estende ao tempo: 
                      ΔE × Δt ≥ ℏ/2
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-xl p-6 border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-cyan-300 mb-4">Reflexão Filosófica</h4>
              <p className="text-gray-300 leading-relaxed italic">
                "O tempo quântico revela que nossa noção linear de passado, presente 
                e futuro é uma ilusão construída pela agregação estatística de 
                incontáveis eventos quânticos. Em escalas magnéticas extremas, 
                o tempo torna-se uma dimensão tão maleável quanto o espaço, 
                dobrando-se e curvando-se sob a pressão dos campos electromagnéticos. 
                A realidade temporal não é um rio que flui em uma direção, 
                mas um oceano quântico onde todas as direções são possíveis 
                simultaneamente."
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-emerald-500/30">
          <button
            onClick={() => onNavigate('chapter3')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-black/40 border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-600/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior: Tempo Magnético</span>
          </button>
          
          <button
            onClick={() => onNavigate('chapter5')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
          >
            <span>Próximo: Tempo de Planck</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterFour;