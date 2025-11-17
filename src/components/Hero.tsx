import { ArrowRight, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import WaveBackground from './WaveBackground';
import FloatingShapes from './FloatingShapes';
import Navigation from './Navigation';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <WaveBackground />
      <FloatingShapes />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-emerald-500/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <Navigation />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block animate-bounce-slow">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect border border-cyan-500/30 text-cyan-300 text-sm font-medium shadow-glow-cyan">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              Engineered for Scale. Built for Resilience.
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight animate-slide-up">
              <span className="block text-white drop-shadow-2xl">Smartly Built.</span>
              <span className="block text-white drop-shadow-2xl">Fearlessly Scaled.</span>
              <span className="block mt-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-2xl">
                Market-Resilient.
              </span>
            </h1>
          </div>

          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-300 leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
            We engineer <span className="text-cyan-400 font-semibold">adaptive systems</span> and <span className="text-emerald-400 font-semibold">elastic C2H + DRM teams</span> you fully control and own —
            systems that <span className="text-blue-400 font-semibold">don't break when the market does.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-base sm:text-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { text: 'You own your code', color: 'from-blue-400 to-cyan-400' },
              { text: 'You own your data', color: 'from-cyan-400 to-emerald-400' },
              { text: 'You own your team cadence', color: 'from-emerald-400 to-blue-400' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 group">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} animate-pulse`} />
                <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="#consultation"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white text-lg font-bold overflow-hidden shadow-glow-lg hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Calendar className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Book Strategy Call</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#whatsapp"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl glass-effect text-white text-lg font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {[
            { label: 'Direct Access', value: 'No Middle Layers', gradient: 'from-blue-500 to-cyan-500', icon: '⚡' },
            { label: 'Elastic Scale', value: 'On Demand', gradient: 'from-cyan-500 to-emerald-500', icon: '📈' },
            { label: 'Full Ownership', value: 'Day One', gradient: 'from-emerald-500 to-blue-500', icon: '🔑' },
            { label: 'Zero Lock-ins', value: 'Leave Anytime', gradient: 'from-blue-500 to-cyan-500', icon: '🚀' }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-8 rounded-2xl glass-effect hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${0.9 + index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500" style={{
                backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
              }} />
              <div className="text-4xl mb-3 animate-float-delayed">{stat.icon}</div>
              <div className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
