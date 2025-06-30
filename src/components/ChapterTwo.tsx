import React from 'react';
import { Zap, Heart, Waves, ArrowRight, ArrowLeft } from 'lucide-react';

interface ChapterTwoProps {
  onNavigate: (chapter: string) => void;
}

const ChapterTwo: React.FC<ChapterTwoProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
          <Zap className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Capítulo II
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          Tempo Nuclear
        </h2>
        <p className="text-lg text-blue-300">
          O Silêncio Vibrante no Coração da Matéria
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Yoctossegundos */}
        <section className="bg-gradient-to-r from-black/40 to-blue-900/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Waves className="w-8 h-8 text-blue-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Vibração em Yoctossegundos</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Descendo ainda mais na escala temporal, chegamos aos <strong className="text-blue-400">yoctossegundos</strong> 
              (10⁻²⁴ segundos) - o domínio onde o núcleo atômico revela sua natureza 
              dinâmica. Aqui, prótons e nêutrons não são partículas estáticas, mas 
              entidades vibrantes em constante rearranjo, executando uma coreografia 
              quântica de complexidade inimaginável.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-blue-500/20 mb-6">
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Escala Temporal Nuclear</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                  <div className="text-blue-400 font-medium">Vibração Nuclear</div>
                  <div className="text-2xl font-bold text-white">10⁻²⁴</div>
                  <div className="text-gray-400">yoctossegundos</div>
                </div>
                <div className="bg-indigo-900/30 rounded-lg p-4 text-center">
                  <div className="text-indigo-400 font-medium">Frequência</div>
                  <div className="text-2xl font-bold text-white">~10²⁴</div>
                  <div className="text-gray-400">Hz</div>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4 text-center">
                  <div className="text-purple-400 font-medium">Energia Típica</div>
                  <div className="text-2xl font-bold text-white">~1</div>
                  <div className="text-gray-400">MeV</div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Nesta escala, as forças nucleares fortes dominam completamente, 
              criando um ambiente onde quarks e glúons interagem em padrões 
              que desafiam qualquer analogia macroscópica. É um universo dentro 
              do universo, onde as leis da física tomam formas extremas e 
              inimagináveis.
            </p>
          </div>
        </section>

        {/* Rearranjo Nucleônico */}
        <section className="bg-gradient-to-r from-black/40 to-indigo-900/20 rounded-2xl p-8 border border-indigo-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-indigo-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Rearranjo Nucleônico</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              O núcleo não é uma estrutura rígida, mas um <strong className="text-indigo-400">fluido quântico</strong> 
              em perpétuo movimento. Prótons e nêutrons se reorganizam continuamente, 
              respondendo às flutuações do campo quântico que permeia o espaço nuclear. 
              Cada rearranjo ocorre com a precisão de um metrônomo cósmico, 
              marcando o tempo na escala mais fundamental da matéria.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-indigo-500/20 mb-6">
              <h4 className="text-lg font-semibold text-indigo-300 mb-4">Dinâmica Nuclear</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-indigo-900/20 rounded-lg">
                  <span className="text-gray-300">Colisões próton-nêutron</span>
                  <span className="text-indigo-400 font-mono">~10⁻²³ s</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-900/20 rounded-lg">
                  <span className="text-gray-300">Flutuações de campo</span>
                  <span className="text-indigo-400 font-mono">~10⁻²⁴ s</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-900/20 rounded-lg">
                  <span className="text-gray-300">Criação/aniquilação virtual</span>
                  <span className="text-indigo-400 font-mono">~10⁻²⁵ s</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Neste balé subatômico, a energia se condensa em matéria e se dissolve 
              novamente em campo, num ciclo eterno que sustenta a própria existência 
              da matéria. É aqui que a estabilidade macroscópica nasce do caos 
              quântico microscópico.
            </p>
          </div>
        </section>

        {/* Poesia do Núcleo */}
        <section className="bg-gradient-to-r from-black/40 to-purple-900/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6">O Silêncio Vibrante</h3>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-purple-900/20 rounded-2xl p-8 border border-purple-500/20 mb-6">
              <blockquote className="text-xl leading-relaxed text-purple-200 italic">
                "No coração de cada átomo existe um silêncio que grita.<br/>
                Um vazio que pulsa com a força de mil sóis,<br/>
                onde prótons e nêutrons dançam uma valsa eterna<br/>
                em yoctossegundos de pura existência.<br/><br/>
                
                É o silêncio mais barulhento do universo,<br/>
                a quietude mais agitada da criação,<br/>
                onde cada vibração conta a história<br/>
                de como o nada se tornou tudo."
              </blockquote>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              O núcleo atômico representa uma das maiores contradições da física: 
              um volume quase vazio que concentra 99,9% da massa atômica, um espaço 
              silencioso que vibra com energia suficiente para alimentar estrelas. 
              Esta contradição não é um paradoxo a ser resolvido, mas uma verdade 
              fundamental sobre a natureza dual da realidade.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/40 rounded-xl p-6 border border-purple-500/20">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Densidade Nuclear</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A densidade no núcleo atinge ~2,3 × 10¹⁷ kg/m³ - uma única 
                  colher de chá de matéria nuclear pesaria 5 bilhões de toneladas, 
                  mais que uma montanha inteira.
                </p>
              </div>
              <div className="bg-black/40 rounded-xl p-6 border border-blue-500/20">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Energia de Ligação</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A energia que mantém o núcleo coeso é milhões de vezes maior 
                  que as forças químicas, revelando a intensidade das interações 
                  que ocorrem nesta escala temporal extrema.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-blue-500/30">
          <button
            onClick={() => onNavigate('chapter1')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-black/40 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-600/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior: Tempo Atômico</span>
          </button>
          
          <button
            onClick={() => onNavigate('chapter3')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span>Próximo: Tempo Magnético</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterTwo;