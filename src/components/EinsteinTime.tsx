import React from 'react';
import { Clock, ArrowRight, Lightbulb, Atom, RefreshCw } from 'lucide-react';

interface EinsteinTimeProps {
  onNavigate: (chapter: string) => void;
}

const EinsteinTime: React.FC<EinsteinTimeProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 rounded-full bg-gradient-to-r from-amber-500 to-red-600 mb-6">
          <Lightbulb className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent">
          Einstein e o Tempo
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          O Limite da Luz e Além
        </h2>
        <p className="text-lg text-amber-300">
          A Conta Interrompida de Einstein
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Einstein's Limit */}
        <section className="bg-gradient-to-r from-black/40 to-amber-900/20 rounded-2xl p-8 border border-amber-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <div className="text-amber-400 mr-4 text-3xl">⚖️</div>
            <h3 className="text-2xl font-bold text-white">Einstein e o limite da luz: a conta interrompida</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Quando Einstein postulou que nada pode viajar mais rápido que a luz, ele definiu o limite de velocidade no espaço-tempo clássico. Mas há um ponto profundo onde ele parou:
            </p>

            <blockquote className="border-l-4 border-amber-500 pl-6 italic text-lg text-amber-300 mb-6">
              Ele tomou a luz como entidade última, mas não investigou o que gera a luz em sua essência.
            </blockquote>
          </div>
        </section>

        {/* What is Light */}
        <section className="bg-gradient-to-r from-black/40 to-blue-900/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <div className="text-blue-400 mr-4 text-3xl">🔬</div>
            <h3 className="text-2xl font-bold text-white">O que é a luz, afinal?</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <h4 className="text-xl font-semibold text-blue-300 mb-4">Fisicamente:</h4>
            <p className="text-gray-300 leading-relaxed mb-6">
              Luz é um fóton, partícula mediadora do campo eletromagnético.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Mas o fóton não existe isolado; ele é uma excitação do campo eletromagnético quântico, que permeia todo o universo.
            </p>

            <h4 className="text-xl font-semibold text-blue-300 mb-4">Hermeticamente:</h4>
            <p className="text-gray-300 leading-relaxed mb-6">
              A luz é manifestação de vibração.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Vibração é anterior à luz – é o ritmo primordial que cria o próprio campo onde a luz surge.
            </p>
          </div>
        </section>

        {/* Beyond Light */}
        <section className="bg-gradient-to-r from-black/40 to-purple-900/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <div className="text-purple-400 mr-4 text-3xl">⚛️</div>
            <h3 className="text-2xl font-bold text-white">O que gera a luz está além da luz</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Se a luz é apenas uma excitação, então:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>O campo eletromagnético que a gera está além da luz.</li>
              <li>Este campo existe independentemente da velocidade da luz.</li>
              <li>Sua natureza está além da percepção de tempo definida pela velocidade da luz, pois:</li>
            </ul>

            <div className="bg-black/60 rounded-xl p-6 border border-purple-500/20 mb-6">
              <div className="font-mono text-center mb-4">
                <div className="text-2xl font-bold text-white">
                  Tempo = <span className="text-purple-400">distância</span> / <span className="text-purple-400">velocidade</span>
                </div>
              </div>
              <p className="text-center text-gray-300">
                Se a velocidade é luz, o tempo é relativo a ela. Mas o campo que gera a luz não possui essa limitação, pois:
              </p>
            </div>

            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>Ele não se move, ele é.</li>
              <li>Vibra em frequências tão altas que transcendem a métrica espaço-tempo luminosa.</li>
            </ul>
          </div>
        </section>

        {/* Time Within Time */}
        <section className="bg-gradient-to-r from-black/40 to-teal-900/20 rounded-2xl p-8 border border-teal-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <div className="text-teal-400 mr-4 text-3xl">🔄</div>
            <h3 className="text-2xl font-bold text-white">O tempo dentro do tempo</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Cada elemento tem seu tempo:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>O tempo de um elétron orbitando (femtossegundos).</li>
              <li>O tempo do núcleo vibrando (yoctossegundos).</li>
              <li>O tempo das transições quânticas (zeptossegundos a attossegundos).</li>
              <li>O tempo do campo subjacente que cria esses elementos.</li>
            </ul>

            <div className="flex items-center mb-4">
              <div className="text-teal-400 mr-4 text-3xl">🔬</div>
              <p className="text-gray-300">
                Dentro de cada tempo existe outro tempo, pois cada frequência carrega múltiplas oscilações internas. O tempo não é linear; é fractal e infinito:
              </p>
            </div>

            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>Para frente: infinitas subdivisões de um segundo.</li>
              <li>Para trás: infinitas integrações de um segundo.</li>
            </ul>
          </div>
        </section>

        {/* Beyond Time */}
        <section className="bg-gradient-to-r from-black/40 to-blue-900/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <div className="text-blue-400 mr-4 text-3xl">🧠</div>
            <h3 className="text-2xl font-bold text-white">Se eu viajar mais rápido que o tempo</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Viajar mais rápido que o tempo, em sua reflexão, significa ultrapassar a frequência do campo que gera a percepção temporal atual. Isso implica:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>Observar níveis de realidade que não são processáveis por nosso sistema nervoso.</li>
              <li>Cada campo, frequência ou vibração possui seu próprio tempo interno.</li>
              <li>Ao viajar além da frequência do campo visível, entramos em outros "tempos" e outras realidades, pois:</li>
            </ul>

            <div className="bg-black/60 rounded-xl p-6 border border-blue-500/20 mb-6">
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-4 text-3xl">🌌</div>
                <h4 className="text-xl font-semibold text-blue-300">Tempo está dentro da frequência, e frequência dentro do campo</h4>
              </div>
              <div className="font-mono text-center mb-4">
                <div className="text-2xl font-bold text-white">
                  Tempo = 1 / <span className="text-blue-400">frequência</span>
                </div>
              </div>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Maior frequência → menor tempo.</li>
                <li>Mas a frequência não existe sozinha; ela surge de um campo.</li>
                <li>Assim, o tempo está dentro da velocidade da frequência, que está dentro do campo. O campo é o fundamento. Frequência é o movimento. Tempo é o efeito do movimento. Luz é apenas o mensageiro dessa dança.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-black/40 to-amber-900/20 rounded-2xl p-8 border border-amber-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <div className="text-amber-400 mr-4 text-3xl">⚖️</div>
            <h3 className="text-2xl font-bold text-white">Conclusão filosófico-científica</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <div className="text-green-400 mr-4">✅</div>
                <p className="text-gray-300">Einstein parou na luz, pois a luz era seu limite matemático de velocidade.</p>
              </li>
              <li className="flex items-start">
                <div className="text-green-400 mr-4">✅</div>
                <p className="text-gray-300">Mas a luz é filha do campo, e o campo não possui velocidade; ele possui frequência infinita, vibração absoluta.</p>
              </li>
              <li className="flex items-start">
                <div className="text-green-400 mr-4">✅</div>
                <p className="text-gray-300">Tempo é apenas a percepção de frequência, e cada elemento, em cada nível, carrega tempos dentro de tempos – como espelhos infinitos, para frente e para trás.</p>
              </li>
            </ul>

            <blockquote className="border-l-4 border-amber-500 pl-6 italic text-lg text-amber-300 mb-6">
              "Tudo é vibração. Tudo é campo. Tempo é apenas a projeção do movimento dentro do campo. E o que gera a luz está além da luz, pois aquilo que vibra antes de se tornar fóton não tem começo, nem fim."
            </blockquote>
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
            onClick={() => onNavigate('chapter1')}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-red-600 text-white hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
          >
            <span>Próximo: Introdução ao Tempo Atômico</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EinsteinTime;
