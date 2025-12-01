const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Built with <span className="text-primary">React</span>, <span className="text-primary">TypeScript</span>, 
            and <span className="text-primary">Tailwind CSS</span>
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Balaji Matta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
