import React from 'react';
import { Magnet, Calculator as Calculator2, Zap, ArrowRight, ArrowLeft } from 'lucide-react';

interface ChapterThreeProps {
  onNavigate: (chapter: string) => void;
}

const ChapterThree: React.FC<ChapterThreeProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 rounded-full bg-gradient-to-r from-red-600 to-orange-600 mb-6">
          <Magnet className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Capítulo III
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          Tempo Magnético
        </h2>
        <p className="text-lg text-orange-300">
          Peso Magnético e a Curvatura do Tempo
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Peso Magnético */}
        <section className="bg-gradient-to-r from-black/40 to-red-900/20 rounded-2xl p-8 border border-red-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Calculator2 className="w-8 h-8 text-red-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Conceito de Peso Magnético</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              O <strong className="text-red-400">peso magnético</strong> representa um dos conceitos 
              mais revolucionários da física moderna: a conversão direta de energia magnética 
              em massa equivalente. Baseado na famosa equação de Einstein E=mc², podemos 
              calcular como campos magnéticos extremos adquirem propriedades similares à massa.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-red-500/20 mb-6">
              <h4 className="text-lg font-semibold text-red-300 mb-4">Fórmula do Peso Magnético</h4>
              <div className="font-mono text-center mb-4">
                <div className="text-2xl font-bold text-white mb-2">m_mag = (B²V)/(2μ₀c²)</div>
                <div className="text-red-400 text-sm">
                  onde B = campo magnético, V = volume, μ₀ = permeabilidade do vácuo
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-red-900/30 rounded-lg p-4">
                  <div className="text-red-400 font-medium">Campo de 10⁴ Tesla</div>
                  <div className="text-xl font-bold text-white">~4.0 × 10⁻⁴ kg/m³</div>
                  <div className="text-gray-400">Densidade magnética</div>
                </div>
                <div className="bg-orange-900/30 rounded-lg p-4">
                  <div className="text-orange-400 font-medium">Energia Magnética</div>
                  <div className="text-xl font-bold text-white">~4.0 × 10¹³ J/m³</div>
                  <div className="text-gray-400">Densidade energética</div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Em campos magnéticos de 10⁴ Tesla - encontrados em magnetares e laboratórios 
              extremos - o próprio espaço adquire uma densidade mensurável. O vácuo deixa 
              de ser vazio e torna-se um meio denso, carregado de energia magnética 
              equivalente a massa real.
            </p>
          </div>
        </section>

        {/* Campos Extremos */}
        <section className="bg-gradient-to-r from-black/40 to-orange-900/20 rounded-2xl p-8 border border-orange-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Zap className="w-8 h-8 text-orange-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Pressão em Campos de 10⁴ Tesla</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Campos magnéticos de <strong className="text-orange-400">10⁴ Tesla</strong> exercem 
              pressões que chegam a distorcer a própria estrutura do espaço-tempo. 
              Esta pressão magnética não é apenas uma força física, mas uma curvatura 
              na geometria da realidade, alterando as trajetórias tanto da matéria 
              quanto da luz.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-orange-500/20 mb-6">
              <h4 className="text-lg font-semibold text-orange-300 mb-4">Cálculo da Pressão Magnética</h4>
              <div className="space-y-4">
                <div className="bg-orange-900/30 rounded-lg p-4">
                  <div className="font-mono text-center">
                    <div className="text-xl font-bold text-white mb-2">P_mag = B²/(2μ₀)</div>
                    <div className="text-orange-400 text-sm">Pressão = Campo²/(2 × Permeabilidade)</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-black/40 rounded-lg p-3">
                    <div className="text-orange-400">Para B = 10⁴ T:</div>
                    <div className="text-white font-bold">P ≈ 4.0 × 10¹¹ Pa</div>
                    <div className="text-gray-400">400 GPa</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-3">
                    <div className="text-orange-400">Comparação:</div>
                    <div className="text-white font-bold">~4× pressão no núcleo terrestre</div>
                    <div className="text-gray-400">360 GPa</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Nestas condições extremas, o conceito clássico de "vácuo" perde todo 
              significado. O espaço torna-se um meio ativo, com propriedades mecânicas 
              bem definidas, capaz de transmitir forças e distorções que alteram 
              fundamentalmente as leis da física local.
            </p>
          </div>
        </section>

        {/* Frequência de Ciclotron */}
        <section className="bg-gradient-to-r from-black/40 to-yellow-900/20 rounded-2xl p-8 border border-yellow-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Magnet className="w-8 h-8 text-yellow-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Frequência de Ciclotron</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Quando elétrons são submetidos a campos magnéticos intensos, eles passam 
              a orbitar com a <strong className="text-yellow-400">frequência de ciclotron</strong>, 
              uma frequência fundamental que conecta diretamente o magnetismo ao tempo 
              quântico. Em campos de 10⁴ Tesla, esta frequência atinge ~10¹⁵ Hz, 
              colocando os elétrons em uma dança temporal extrema.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-yellow-500/20 mb-6">
              <h4 className="text-lg font-semibold text-yellow-300 mb-4">Cálculo da Frequência de Ciclotron</h4>
              <div className="font-mono text-center mb-4">
                <div className="text-2xl font-bold text-white mb-2">f_c = eB/(2πm_e)</div>
                <div className="text-yellow-400 text-sm">
                  e = carga eletrônica, B = campo magnético, m_e = massa do elétron
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-yellow-900/30 rounded-lg p-4 text-center">
                  <div className="text-yellow-400 font-medium">Campo: 1 T</div>
                  <div className="text-lg font-bold text-white">28 GHz</div>
                  <div className="text-gray-400">Microondas</div>
                </div>
                <div className="bg-yellow-900/30 rounded-lg p-4 text-center">
                  <div className="text-yellow-400 font-medium">Campo: 10³ T</div>
                  <div className="text-lg font-bold text-white">28 THz</div>
                  <div className="text-gray-400">Infravermelho</div>
                </div>
                <div className="bg-yellow-900/30 rounded-lg p-4 text-center">
                  <div className="text-yellow-400 font-medium">Campo: 10⁴ T</div>
                  <div className="text-lg font-bold text-white">280 THz</div>
                  <div className="text-gray-400">Luz visível</div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Esta progressão revela uma verdade profunda: campos magnéticos extremos 
              não apenas confinam elétrons espacialmente, mas os aceleram temporalmente, 
              forçando-os a experimentar frequências que normalmente requerem energias 
              de fótons luminosos. O magnetismo torna-se, literalmente, uma máquina 
              do tempo quântica.
            </p>

            <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl p-6 border border-yellow-500/20 mt-6">
              <h4 className="text-lg font-semibold text-yellow-300 mb-4">Implicações Temporais</h4>
              <blockquote className="italic text-yellow-200 leading-relaxed">
                "Quando um elétron gira a 280 terahertz, ele completa 280 trilhões 
                de órbitas por segundo. Em cada volta, ele experimenta um universo 
                diferente - um cosmos onde o tempo magnético dilata e contrai como 
                uma respiração cósmica, onde cada revolução é simultaneamente um 
                instante e uma eternidade."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-orange-500/30">
          <button
            onClick={() => onNavigate('chapter2')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-black/40 border border-orange-500/30 text-orange-300 hover:text-white hover:bg-orange-600/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior: Tempo Nuclear</span>
          </button>
          
          <button
            onClick={() => onNavigate('chapter4')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
          >
            <span>Próximo: Pressão Magnética sobre o Tempo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterThree;