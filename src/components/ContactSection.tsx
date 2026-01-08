import { Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-background py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-sm tracking-megawide text-primary mb-4">
            GET IN TOUCH
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
            LET'S CREATE
            <span className="block text-primary">SOMETHING EPIC</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            Have a story that needs to be told? A vision that demands to be seen? 
            Join the Yashaverse.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://www.instagram.com/sougandhika_studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 border border-primary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <span className="font-body text-sm text-silver-muted tracking-wide group-hover:text-foreground transition-colors">
                @sougandhika_studios
              </span>
            </a>
            
            <a
              href="mailto:rockymasproduction@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 border border-primary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-body text-sm text-silver-muted tracking-wide group-hover:text-foreground transition-colors">
                rockymasproduction@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
