import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Premium Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 premium-orb float-animation"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 premium-orb float-animation"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 premium-orb float-animation"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
               `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-8 flex items-center justify-center min-h-screen relative z-10">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="text-reveal">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-900/5 backdrop-blur-sm rounded-full border border-gray-200/50 mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="premium-text text-sm text-gray-600">
                  Available for projects
                </span>
              </div>
            </div>

            <div className="text-reveal">
              <h1 className="hero-title text-7xl lg:text-8xl text-gray-900 mb-6">
                Anna
                <span className="block text-gray-400 italic">Designer</span>
              </h1>
            </div>

            <div className="text-reveal">
              <p className="premium-text text-xl text-gray-600 max-w-lg leading-relaxed">
                Crafting sophisticated digital experiences that bridge
                <span className="italic"> beauty</span> and{" "}
                <span className="italic">functionality</span>
                for forward-thinking brands.
              </p>
            </div>

            <div className="text-reveal">
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full premium-text font-medium"
                >
                  View Selected Works
                  <Icon name="ArrowRight" size={18} />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-gray-600 hover:text-gray-900 px-8 py-4 premium-text font-medium"
                >
                  Download Resume
                  <Icon name="Download" size={18} />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Premium Visual Element */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200/50">
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=face"
                alt="Anna Designer"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>

              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg float-animation">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Icon name="Palette" size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="premium-text text-sm font-medium text-gray-900">
                      UI/UX Design
                    </div>
                    <div className="premium-text text-xs text-gray-500">
                      5+ Years
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg float-animation">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="premium-text text-sm font-medium text-gray-900">
                      50+ Projects
                    </div>
                    <div className="premium-text text-xs text-gray-500">
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 opacity-60">
          <span className="premium-text text-xs text-gray-500 rotate-90 origin-center mb-8">
            SCROLL
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
