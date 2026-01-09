const TrailerSection = () => {
  return (
    <section id="trailers" className="bg-background py-24 lg:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      {/* Film Grain */}
      <div className="film-grain" />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 text-center">
          <p className="font-body text-sm tracking-megawide text-primary mb-4">
            OFFICIAL TRAILERS
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
            WATCH THE TRAILERS
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience the cinematic journey through our complete collection of official trailers
          </p>
        </div>
        
        {/* Video Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Cinematic Frame */}
          <div className="relative">
            {/* Film strip decoration - top */}
            <div className="absolute -top-4 left-0 right-0 h-4 bg-noir flex items-center gap-4 px-4 overflow-hidden z-10">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="w-3 h-2 bg-charcoal-light rounded-sm flex-shrink-0" />
              ))}
            </div>
            
            {/* YouTube Playlist Embed */}
            <div className="aspect-video bg-noir overflow-hidden relative">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLC5ux3WMgblTsgFZpojSI0ZFjoFeLijAD&rel=0&modestbranding=1&color=white&cc_load_policy=1&cc_lang_pref=en"
                title="Sougandhika Studios Trailers Playlist"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Smoke overlay on video */}
              <div className="absolute inset-0 pointer-events-none smoke-overlay opacity-30" />
            </div>
            
            {/* Film strip decoration - bottom */}
            <div className="absolute -bottom-4 left-0 right-0 h-4 bg-noir flex items-center gap-4 px-4 overflow-hidden z-10">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="w-3 h-2 bg-charcoal-light rounded-sm flex-shrink-0" />
              ))}
            </div>
          </div>
          
          {/* Red glow accent */}
          <div className="absolute -inset-8 bg-red-glow opacity-10 pointer-events-none blur-3xl" />
        </div>
        
        {/* Bullet Divider */}
        <div className="bullet-divider mt-24" />
      </div>
    </section>
  );
};

export default TrailerSection;
