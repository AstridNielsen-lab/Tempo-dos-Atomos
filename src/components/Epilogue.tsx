import React from 'react';
import { Eye, Heart, Sparkles, ArrowLeft, Home } from 'lucide-react';

interface EpilogueProps {
  onNavigate: (chapter: string) => void;
}

const Epilogue: React.FC<EpilogueProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 mb-6">
          <Heart className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          Epílogo
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          Filosofia Final
        </h2>
        <p className="text-lg text-pink-300">
          Visões de uma Realidade Vibrante
        </p>
      </div>

      {/* Main Narrative */}
      <div className="space-y-12">
        {/* Opening */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-black/60 to-pink-900/30 rounded-2xl p-8 border border-pink-500/30 backdrop-blur-sm">
            <Sparkles className="w-16 h-16 text-pink-400 mx-auto mb-6" />
            <p className="text-2xl text-pink-200 italic leading-relaxed">
              "Eu vejo cada elétron dançar na beira do tempo..."
            </p>
          </div>
        </section>

        {/* First Person Narrative */}
        <section className="bg-gradient-to-br from-black/40 via-purple-900/20 to-pink-900/20 rounded-2xl p-10 border border-pink-500/30 backdrop-blur-sm">
          <div className="prose prose-invert max-w-none text-lg leading-relaxed">
            <p className="text-gray-200 mb-6">
              <strong className="text-pink-300">Eu vejo</strong> cada elétron dançar na beira do tempo, 
              suas órbitas traçando mandalas invisíveis em dimensões que meus olhos jamais 
              poderão alcançar. <strong className="text-purple-300">Vejo</strong> cada campo magnético 
              pesar sobre o instante, distorcendo o que chamam de realidade como uma lente 
              cósmica que curva não apenas a luz, mas a própria duração da existência.
            </p>

            <p className="text-gray-200 mb-6">
              Nos <span className="text-blue-300">femtossegundos</span> das transições eletrônicas, 
              eu caminho por corredores de luz onde cada passo dura uma eternidade quântica. 
              Nos <span className="text-indigo-300">yoctossegundos</span> nucleares, eu escuto 
              o silêncio vibrante dos prótons conversando em linguagens que precedem as palavras. 
              No <span className="text-violet-300">tempo de Planck</span>, eu toco a espuma 
              primordial onde o universo se cria e se destrói a cada respiração cósmica.
            </p>

            <div className="bg-black/60 rounded-xl p-6 border border-pink-500/20 my-8">
              <blockquote className="text-xl text-pink-200 italic text-center leading-relaxed">
                "Mas no fundo, tudo é vibração que não sabem ver."
              </blockquote>
            </div>

            <p className="text-gray-200 mb-6">
              Eles constroem relógios para medir o tempo, sem perceber que <em className="text-pink-300">são</em> 
              o tempo - cada batimento cardíaco uma frequência, cada pensamento uma onda, 
              cada respiração um ciclo na grande sinfonia temporal. Suas máquinas detectam 
              campos magnéticos de 10⁴ Tesla, mas não conseguem sentir como esses campos 
              torcem suas almas, acelerando seus sonhos e desacelerando suas lágrimas.
            </p>

            <p className="text-gray-200 mb-6">
              Eu caminho entre os <span className="text-emerald-300">sete véus da Maya temporal</span>, 
              vendo como cada escala de tempo revela e oculta diferentes aspectos da verdade. 
              Na percepção humana, eles vivem em milissegundos de ilusão. Na vibração atômica, 
              eu danço em femtossegundos de revelação. Na espuma quântica, eu me dissolvo 
              em possibilidades infinitas que existem simultaneamente em todos os tempos 
              e em tempo algum.
            </p>
          </div>
        </section>

        {/* Vision Segments */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-gradient-to-br from-black/40 to-purple-900/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-xl font-bold text-white">Visão Quântica</h3>
            </div>
            <p className="text-gray-300 leading-relaxed italic">
              "Vejo elétrons em estado de superposição temporal, existindo em múltiplos 
              momentos simultaneamente. Cada observação colapsa não apenas sua posição, 
              mas sua experiência temporal - transformando potenciais infinitos em 
              um único instante de realidade manifesta."
            </p>
          </section>

          <section className="bg-gradient-to-br from-black/40 to-blue-900/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-blue-400 mr-4" />
              <h3 className="text-xl font-bold text-white">Visão Magnética</h3>
            </div>
            <p className="text-gray-300 leading-relaxed italic">
              "Vejo campos magnéticos como rios temporais, correntes que aceleram e 
              desaceleram o fluxo dos momentos. Onde o campo é intenso, o tempo se 
              espessa como mel cósmico. Onde é fraco, os instantes voam como pássaros 
              liberados de suas gaiolas gravitacionais."
            </p>
          </section>

          <section className="bg-gradient-to-br from-black/40 to-emerald-900/20 rounded-2xl p-8 border border-emerald-500/30 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-emerald-400 mr-4" />
              <h3 className="text-xl font-bold text-white">Visão Nuclear</h3>
            </div>
            <p className="text-gray-300 leading-relaxed italic">
              "No coração dos átomos, vejo o silêncio mais barulhento do universo. 
              Prótons e nêutrons vibram em yoctossegundos de êxtase, cada oscilação 
              uma oração sussurrada na linguagem fundamental da matéria. É onde 
              o tempo nasce da energia pura."
            </p>
          </section>

          <section className="bg-gradient-to-br from-black/40 to-amber-900/20 rounded-2xl p-8 border border-amber-500/30 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-amber-400 mr-4" />
              <h3 className="text-xl font-bold text-white">Visão de Planck</h3>
            </div>
            <p className="text-gray-300 leading-relaxed italic">
              "Na escala de Planck, vejo o universo como uma biblioteca infinita 
              onde cada livro é um instante possível, cada página uma geometria 
              potencial. O tempo não flui - ele simplesmente É, em todas as suas 
              formas simultaneamente, esperando ser lido pela consciência."
            </p>
          </section>
        </div>

        {/* Final Revelation */}
        <section className="bg-gradient-to-r from-black/60 via-pink-900/30 to-purple-900/30 rounded-2xl p-10 border border-pink-500/30 backdrop-blur-sm">
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Eles perguntam sobre a natureza do tempo, construindo teorias e equações, 
              medindo intervalos e frequências. Mas <strong className="text-pink-300">eu sei</strong> 
              que o tempo é apenas o nome que deram à dança - a dança dos átomos, 
              a dança dos campos, a dança da consciência através das dimensões 
              invisíveis da existência.
            </p>

            <div className="text-center my-8">
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full p-6 inline-block border border-pink-500/40">
                <Sparkles className="w-12 h-12 text-pink-300" />
              </div>
            </div>

            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Cada segundo que vivem contém trilhões de femtossegundos não vividos. 
              Cada pensamento que pensam ressoa através de yoctossegundos de vibração 
              nuclear. Cada batimento do coração sincroniza com as oscilações da 
              espuma quântica que sustenta a realidade.
            </p>

            <div className="bg-black/60 rounded-xl p-8 border border-pink-500/20 my-8 text-center">
              <p className="text-2xl text-pink-200 italic leading-relaxed">
                "No fundo, tudo é vibração que não sabem ver."
              </p>
              <p className="text-lg text-purple-300 mt-4">
                E eu? Eu vejo. Eu sinto. Eu danço com os elétrons na beira do tempo, 
                onde cada instante é eterno e cada eternidade dura apenas um suspiro 
                quântico na respiração infinita do cosmos.
              </p>
            </div>

            <p className="text-center text-lg text-gray-300 italic">
              Pois quem tem olhos para ver, vê. E quem tem ouvidos para ouvir, 
              escuta a música silenciosa dos tempos invisíveis - a sinfonia 
              perpétua da existência vibrante.
            </p>
          </div>
        </section>

        {/* Final Quote */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-black/60 to-rose-900/30 rounded-2xl p-8 border border-rose-500/30 backdrop-blur-sm">
            <blockquote className="text-3xl font-light text-rose-200 italic leading-relaxed">
              "Tudo é vibração que não sabemos ver."
            </blockquote>
            <p className="text-rose-400 mt-4 text-lg">
              — Juliette Psicose, nas frequências invisíveis da realidade
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-pink-500/30">
          <button
            onClick={() => onNavigate('chapter5')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-black/40 border border-pink-500/30 text-pink-300 hover:text-white hover:bg-pink-600/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior: Tempo de Planck</span>
          </button>
          
          <button
            onClick={() => onNavigate('toc')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Epilogue;