import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPinIcon, PhoneIcon, MailIcon, Facebook, Instagram, Youtube } from "lucide-react"

function SocialIcon({ icon, href = "#", label }: { icon: React.ReactNode; href?: string; label: string }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full bg-primary hover:bg-secondary flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-white">{icon}</div>
    </Link>
  )
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
      >
        {text}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90">
      {/* Newsletter Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
          <div className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
          <div className="absolute right-1/3 bottom-0 w-80 h-80 rounded-full bg-highlight blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mantente informado</h2>
            <p className="text-white/80 text-lg mb-8">
              Suscríbete a nuestro newsletter y recibe las últimas noticias, eventos y oportunidades del sector.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/20 shadow-xl">
              <form className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="sr-only">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                    aria-required="true"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                    aria-required="true"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-secondary hover:bg-secondary/80 text-white font-medium px-6 py-3 rounded-xl transition-colors duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  Suscribirme
                </button>
              </form>
              <p className="text-xs text-white/60 mt-4 text-left">
                Al suscribirte, aceptas nuestra{" "}
                <Link href="#" className="underline hover:text-white focus:text-white focus:outline-none">
                  Política de Privacidad
                </Link>{" "}
                y recibirás comunicaciones de la Asociación.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <div>
              <div className="mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_301999676_440908768057419_4288196654255133379_n-removebg-preview-2GnIqwrwfq61J7dOsZi32GMLkhSszs.png"
                  alt="Logo Villa del Dique"
                  width={180}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-white/80 mb-6">
                La Asociación de Comercio y Turismo de Villa del Dique trabaja desde 2014 para el desarrollo del
                comercio y el turismo en nuestra comunidad.
              </p>
              <div className="flex space-x-4">
                <SocialIcon
                  icon={<Facebook className="h-5 w-5" />}
                  href="https://www.facebook.com/vivivilladeldique/"
                  label="Facebook"
                />
                <SocialIcon
                  icon={<Instagram className="h-5 w-5" />}
                  href="https://www.instagram.com/vivivilladeldique/"
                  label="Instagram"
                />
                <SocialIcon icon={<Youtube className="h-5 w-5" />} href="https://youtube.com" label="YouTube" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Enlaces rápidos</h3>
              <ul className="space-y-3">
                <FooterLink href="#" text="Sobre nosotros" />
                <FooterLink href="#" text="Servicios" />
                <FooterLink href="/eventos" text="Eventos" />
                <FooterLink href="/noticias" text="Noticias" />
                <FooterLink href="#" text="Contacto" />
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Servicios</h3>
              <ul className="space-y-3">
                <FooterLink href="#" text="Asesoramiento" />
                <FooterLink href="#" text="Capacitación" />
                <FooterLink href="#" text="Beneficios" />
                <FooterLink href="#" text="Directorio Comercial" />
                <FooterLink href="#" text="Estadísticas" />
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">
                    Formosa 236, Barrio Comercial
                    <br />
                    Villa del Dique
                    <br />
                    Córdoba, Argentina
                  </span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                  <a href="tel:+5493546404083" className="text-white/80 hover:text-white">
                    +54 9 3546 404083
                  </a>
                </li>
                <li className="flex items-center">
                  <MailIcon className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                  <a href="mailto:info@villadeldique.org" className="text-white/80 hover:text-white">
                    info@villadeldique.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Asociación de Comercio, Turismo y Afines de Villa del Dique. CUIT:
              30-71499090-6. Fundada el 28 de agosto de 2014. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-sm mt-2 md:mt-0 text-center md:text-left">
              Sitio web patrocinado y desarrollado por{" "}
              <a
                href="https://dualitydomain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline focus:text-white focus:outline-none"
              >
                Duality Domain
              </a>
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-white/60 hover:text-white text-sm focus:text-white focus:outline-none">
                Términos y Condiciones
              </Link>
              <Link href="#" className="text-white/60 hover:text-white text-sm focus:text-white focus:outline-none">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-white/60 hover:text-white text-sm focus:text-white focus:outline-none">
                Mapa del Sitio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

