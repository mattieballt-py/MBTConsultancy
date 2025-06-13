const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 font-techy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-forest-green mb-4">MBT Consultancy</h3>
            <p className="text-muted-foreground mb-4">
              Leading robotics and mechatronics engineering solutions. 
              Transforming complex challenges into innovative automation systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-blue hover:text-sunset-orange transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-light-blue hover:text-sunset-orange transition-colors">
                Twitter
              </a>
              <a href="#" className="text-light-blue hover:text-sunset-orange transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-forest-green font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-sunset-orange transition-colors">Robotics Engineering</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sunset-orange transition-colors">Mechatronics Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sunset-orange transition-colors">Automation Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sunset-orange transition-colors">AI Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-forest-green font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="./" className="text-muted-foreground hover:text-sunset-orange transition-colors">Home</a></li>
              <li><a href="./projects" className="text-muted-foreground hover:text-sunset-orange transition-colors">Projects</a></li>
              <li><a href="./blog" className="text-muted-foreground hover:text-sunset-orange transition-colors">Blog</a></li>
              <li><a href="./contact" className="text-muted-foreground hover:text-sunset-orange transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 MBT Consultancy. All rights reserved. | Engineered by Mattie Ball
          </p>
        </div>
      </div>
    </footer>
  );
};

export const Footer = () => { ... };

