import React from 'react';
import { BookOpen, Infinity, Eye, ArrowRight, ArrowLeft } from 'lucide-react';

interface ChapterFiveProps {
  onNavigate: (chapter: string) => void;
}

const ChapterFive: React.FC<ChapterFiveProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 mb-6">
          <BookOpen className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
          Capítulo V
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          Tempo Quântico e Tempo de Planck
        </h2>
        <p className="text-lg text-violet-300">
          O Limite Fundamental da Realidade Temporal
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Tempo de Planck */}
        <section className="bg-gradient-to-r from-black/40 to-violet-900/20 rounded-2xl p-8 border border-violet-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Infinity className="w-8 h-8 text-violet-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">O Tempo de Planck: Limite Fundamental</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              O <strong className="text-violet-400">Tempo de Planck</strong> (t_P ≈ 5.39 × 10⁻⁴⁴ segundos) 
              representa o menor intervalo temporal fisicamente significativo no universo. 
              Abaixo desta escala, os conceitos clássicos de tempo e causalidade 
              perdem todo significado, e a própria estrutura do espaço-tempo 
              se dissolve em flutuações quânticas primordiais.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-violet-500/20 mb-6">
              <h4 className="text-lg font-semibold text-violet-300 mb-4">Definição do Tempo de Planck</h4>
              <div className="font-mono text-center mb-4">
                <div className="text-2xl font-bold text-white mb-2">t_P = √(ℏG/c⁵)</div>
                <div className="text-violet-400 text-sm">
                  ℏ = constante de Planck reduzida, G = constante gravitacional, c = velocidade da luz
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-violet-900/30 rounded-lg p-4 text-center">
                  <div className="text-violet-400 font-medium">Valor Numérico</div>
                  <div className="text-lg font-bold text-white">5.39 × 10⁻⁴⁴</div>
                  <div className="text-gray-400">segundos</div>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4 text-center">
                  <div className="text-purple-400 font-medium">Escala Comparativa</div>
                  <div className="text-lg font-bold text-white">10⁻³²</div>
                  <div className="text-gray-400">vezes menor que o átomo</div>
                </div>
                <div className="bg-indigo-900/30 rounded-lg p-4 text-center">
                  <div className="text-indigo-400 font-medium">Idade do Universo</div>
                  <div className="text-lg font-bold text-white">~10⁶¹</div>
                  <div className="text-gray-400">tempos de Planck</div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Nesta escala temporal extrema, a gravidade quântica domina, e o universo 
              torna-se uma espuma de espaço-tempo em constante criação e destruição. 
              Cada tempo de Planck representa um "quantum" fundamental de duração, 
              o menor "tick" possível no relógio cósmico universal.
            </p>
          </div>
        </section>

        {/* Espuma Quântica */}
        <section className="bg-gradient-to-r from-black/40 to-purple-900/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Eye className="w-8 h-8 text-purple-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">A Espuma Quântica do Espaço-Tempo</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Na escala de Planck, o espaço-tempo deixa de ser o palco suave e 
              contínuo da física clássica e revela sua verdadeira natureza: 
              uma <strong className="text-purple-400">espuma quântica</strong> turbulenta, 
              onde geometrias nascem e morrem em cada intervalo temporal fundamental.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-purple-500/20 mb-6">
              <h4 className="text-lg font-semibold text-purple-300 mb-4">Características da Espuma Quântica</h4>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h5 className="text-purple-300 font-medium mb-2">Flutuações Métricas</h5>
                    <p className="text-gray-300 text-sm">
                      A geometria do espaço-tempo oscila violentamente, 
                      criando micro-buracos negros e micro-universos virtuais.
                    </p>
                  </div>
                  <div className="bg-indigo-900/30 rounded-lg p-4">
                    <h5 className="text-indigo-300 font-medium mb-2">Causalidade Quebrada</h5>
                    <p className="text-gray-300 text-sm">
                      Causa e efeito perdem significado; eventos podem 
                      ser simultaneamente causa e consequência de si mesmos.
                    </p>
                  </div>
                  <div className="bg-violet-900/30 rounded-lg p-4">
                    <h5 className="text-violet-300 font-medium mb-2">Topologia Dinâmica</h5>
                    <p className="text-gray-300 text-sm">
                      O número de dimensões espaciais flutua; o universo 
                      pode ter 3, 4, ou infinitas dimensões simultaneamente.
                    </p>
                  </div>
                  <div className="bg-pink-900/30 rounded-lg p-4">
                    <h5 className="text-pink-300 font-medium mb-2">Informação Quântica</h5>
                    <p className="text-gray-300 text-sm">
                      Toda a informação do universo está codificada 
                      nas flutuações desta espuma primordial.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-purple-500 pl-6 italic text-lg text-purple-300 mb-6">
              "Na escala de Planck, o universo não é construído de partículas 
              ou campos, mas de possibilidades puras - geometrias potenciais 
              que se manifestam e desaparecem numa dança cósmica de criação 
              e aniquilação perpétuas."
            </blockquote>
          </div>
        </section>

        {/* Maya e Hermetismo */}
        <section className="bg-gradient-to-r from-black/40 to-amber-900/20 rounded-2xl p-8 border border-amber-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Eye className="w-8 h-8 text-amber-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Reflexão Hermética: Maya e Vibração Universal</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              A tradição hermética e a filosofia védica convergem com a física quântica 
              moderna numa verdade fundamental: o que percebemos como realidade sólida 
              é <strong className="text-amber-400">Maya</strong> - uma ilusão tecida pela 
              vibração primordial que opera muito além dos limites da percepção sensorial.
            </p>

            <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-xl p-8 border border-amber-500/20 mb-6">
              <h4 className="text-lg font-semibold text-amber-300 mb-6 text-center">Os Sete Véus da Maya Temporal</h4>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-black/40 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-sm mr-4">1</div>
                  <div>
                    <div className="text-amber-300 font-medium">Véu Psicológico</div>
                    <div className="text-gray-400 text-sm">Percepção humana limitada aos milissegundos</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-black/40 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-sm mr-4">2</div>
                  <div>
                    <div className="text-orange-300 font-medium">Véu Molecular</div>
                    <div className="text-gray-400 text-sm">Vibrações moleculares em picossegundos</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-black/40 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm mr-4">3</div>
                  <div>
                    <div className="text-red-300 font-medium">Véu Atômico</div>
                    <div className="text-gray-400 text-sm">Transições eletrônicas em femtossegundos</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-black/40 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm mr-4">4</div>
                  <div>
                    <div className="text-purple-300 font-medium">Véu Nuclear</div>
                    <div className="text-gray-400 text-sm">Oscilações nucleares em yoctossegundos</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-black/40 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm mr-4">5</div>
                  <div>
                    <div className="text-blue-300 font-medium">Véu Quântico</div>
                    <div className="text-gray-400 text-sm">Flutuações do vácuo em zeptossegundos</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-black/40 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm mr-4">6</div>
                  <div>
                    <div className="text-indigo-300 font-medium">Véu Gravitacional</div>
                    <div className="text-gray-400 text-sm">Ondas gravitacionais primordiais</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-black/40 rounded-lg border border-amber-500/30">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 flex items-center justify-center text-white font-bold text-sm mr-4">7</div>
                  <div>
                    <div className="text-amber-300 font-medium">Véu de Planck</div>
                    <div className="text-gray-400 text-sm">Espuma quântica do espaço-tempo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-lg font-semibold text-purple-300 mb-4">A Vibração Primordial</h4>
              <p className="text-gray-300 leading-relaxed italic">
                "Como acima, assim embaixo" - o axioma hermético encontra sua expressão 
                mais profunda na hierarquia das vibrações temporais. Desde as ondulações 
                grosseiras da consciência até as oscilações sutis da espuma quântica, 
                tudo é vibração em diferentes oitavas da existência. O sábio que 
                penetra o véu temporal percebe que mesmo o tempo de Planck não é 
                o fim, mas apenas outro degrau na escada infinita da vibração cósmica.
              </p>
            </div>
          </div>
        </section>

        {/* Tempos Invisíveis */}
        <section className="bg-gradient-to-r from-black/40 to-cyan-900/20 rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6">Os Tempos Invisíveis do Universo</h3>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Além do tempo de Planck, teorias especulativas sugerem a existência 
              de <strong className="text-cyan-400">tempos invisíveis</strong> - dimensões 
              temporais que operam em escalas ainda menores, governadas por leis 
              físicas ainda não descobertas. Estes tempos podem ser a chave para 
              compreender a natureza última da consciência e da realidade.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/40 rounded-xl p-6 border border-cyan-500/20">
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Tempo Consciencial</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Alguns teoristas propõem que a consciência opera em uma dimensão 
                  temporal própria, potencialmente mais fundamental que o tempo 
                  físico, onde o observador quântico colapsa ondas de probabilidade 
                  em realidades definidas.
                </p>
              </div>
              <div className="bg-black/40 rounded-xl p-6 border border-cyan-500/20">
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Tempo Informacional</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A teoria it from bit sugere que o tempo emerge da informação 
                  fundamental - cada bit de informação processada cria um quantum 
                  de duração, fazendo do tempo uma propriedade emergente da 
                  computação cósmica.
                </p>
              </div>
            </div>

            <blockquote className="text-center text-xl leading-relaxed text-cyan-200 italic p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30">
              "Nos tempos invisíveis do universo, cada pensamento é uma eternidade, 
              cada respiração contém éons, e cada batimento cardíaco ressoa através 
              das dimensões ocultas da existência. Somos bibliotecários do infinito, 
              catalogando os segundos numa realidade que não tem começo nem fim, 
              apenas transformação perpétua."
            </blockquote>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-violet-500/30">
          <button
            onClick={() => onNavigate('chapter4')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-black/40 border border-violet-500/30 text-violet-300 hover:text-white hover:bg-violet-600/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior: Pressão Magnética</span>
          </button>
          
          <button
            onClick={() => onNavigate('epilogue')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
          >
            <span>Finalizar: Filosofia Final</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterFive;