import Navbar from "../components/landing/Navbar";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import HeroSection from "../components/landing/HeroSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import HowItWorks from "../components/landing/HowItWorks";
import Differentiators from "../components/landing/Differentiators";
import FinalCTA from "../components/landing/FinalCTA";

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* Navbar en ancho completo */}
      <div className="full-width">
        <Navbar />
      </div>

      {/* Contenido principal dentro del container */}
      <div className="container">
        <main>
          <HeroSection />
          <BenefitsSection />
          <HowItWorks />
          <Differentiators />
          <FinalCTA />
        </main>
      </div>

      {/* Footer en ancho completo */}
      <div className="full-width">
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">
                <img src="logo.png" alt="BankNet" />
              </div>

              <div className="footer-links">
                <div className="link-group">
                  <h4>Compañía</h4>
                  <Link href="/about">Sobre nosotros</Link>
                  <Link href="/careers">Trabaja con nosotros</Link>
                </div>

                <div className="link-group">
                  <h4>Soporte</h4>
                  <Link href="/help">Centro de ayuda</Link>
                  <Link href="/contact">Contáctanos</Link>
                </div>

                <div className="link-group">
                  <h4>Legal</h4>
                  <Link href="/privacy">Políticas de privacidad</Link>
                  <Link href="/terms">Términos y condiciones</Link>
                </div>
              </div>

              <div className="social-media">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="social-icon" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="social-icon" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="social-icon" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="social-icon" />
                </Link>
              </div>
            </div>

            <div className="copyright">
              <p>
                © {new Date().getFullYear()} BankNet. Todos los derechos reservados Grupo.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}