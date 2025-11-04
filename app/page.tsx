import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-600">Mi Portafolio</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">Sobre Mí</a>
              <a href="#skills" className="text-gray-700 hover:text-green-600 transition-colors">Habilidades</a>
              <a href="#projects" className="text-gray-700 hover:text-green-600 transition-colors">Proyectos</a>
              <Link href="/cv" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar CV
          </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Jorge Luis Castro Uribe
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Estudiante de Ingeniería de Sistemas en Uniminuto Villavicencio
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#about" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Conóceme
            </a>
            <a href="#projects" className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors">
              Ver Proyectos
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">¿Quién Soy Yo?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
             
              <img src="/capitan_movilidad.svg" alt="Foto de perfil" width={400} height={400} className="rounded-full mx-auto" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Perfil Profesional</h3>
              <p className="text-gray-600 mb-6">
                Soy Jorge Luis Castro Uribe, estudiante de Ingeniería de Sistemas en Uniminuto Villavicencio. 
                Me apasiona la tecnología y el desarrollo de soluciones innovadoras. Me caracterizo por mi capacidad 
                de aprendizaje rápido, trabajo en equipo y compromiso con los proyectos. Vivo en Villavicencio 
                y estoy constantemente actualizándome en nuevas tecnologías.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">Trabajo en Equipo</h4>
                  <p className="text-sm text-gray-600">Colaboración efectiva en proyectos grupales</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">Aprendizaje Continuo</h4>
                  <p className="text-sm text-gray-600">Constante actualización en tecnologías</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">Resolución de Problemas</h4>
                  <p className="text-sm text-gray-600">Análisis y solución de desafíos técnicos</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">Comunicación</h4>
                  <p className="text-sm text-gray-600">Habilidad para explicar conceptos técnicos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Herramientas y Tecnologías</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lenguajes de Programación</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">C++</span>
                  <span className="text-sm text-red-600">Bajo-Intermedio</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">C#</span>
                  <span className="text-sm text-red-600">Intermedio</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">C</span>
                  <span className="text-sm text-red-600">Básico</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Ensamblador</span>
                  <span className="text-sm text-red-600">Conceptos Básicos</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frameworks y Herramientas</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Unity</span>
                  <span className="text-sm text-green-600">Experiencia</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Next.js</span>
                  <span className="text-sm text-green-600">En Desarrollo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">React</span>
                  <span className="text-sm text-green-600">En Desarrollo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tailwind CSS</span>
                  <span className="text-sm text-green-600">En Desarrollo</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bases de Datos</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">MySQL</span>
                  <span className="text-sm text-red-600">Básico</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">PostgreSQL</span>
                  <span className="text-sm text-red-600">Básico</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">MongoDB</span>
                  <span className="text-sm text-red-600">Conceptos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <h1 className="text-2xl bg-green-600 text-white p-4 rounded-lg"> no hay XDD </h1>
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section id="resume" className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Descarga Mi Curriculum</h2>
          <p className="text-xl text-green-100 mb-8">
            Conoce más sobre mi formación académica, experiencia y habilidades en detalle
          </p>
          <Link 
            href="/cv" 
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Ver Opciones de CV
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Mi Portafolio Profesional. Desarrollado con Next.js y Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
