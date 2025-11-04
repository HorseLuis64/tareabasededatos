'use client';

import Link from 'next/link';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Vitae</h1>
          <p className="text-xl text-gray-600">Descarga mi CV en diferentes formatos</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PDF Download Option */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Versión para Imprimir (PDF)</h3>
              <p className="text-gray-600 mb-6">
                Versión optimizada para impresión. Abre esta versión y usa la función de imprimir de tu navegador (Ctrl+P o Cmd+P) para guardar como PDF.
              </p>
              <a 
                href="/cv-desarrollador-software-print.html" 
                target="_blank"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir Versión de Impresión
              </a>
            </div>
          </div>

          {/* Online Version */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Versión Online</h3>
              <p className="text-gray-600 mb-6">
                Versión interactiva del CV que puedes ver directamente en el navegador. Ideal para compartir enlaces.
              </p>
              <a 
                href="/cv-desarrollador-software.html" 
                target="_blank"
                className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Ver Online
              </a>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-3">¿Cómo descargar el PDF?</h3>
          <ol className="list-decimal list-inside space-y-2 text-green-800">
            <li>Haz clic en "Abrir Versión de Impresión"</li>
            <li>En la nueva pestaña, presiona <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-sm">Ctrl+P</kbd> (Windows) o <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-sm">Cmd+P</kbd> (Mac)</li>
            <li>Selecciona "Guardar como PDF" como destino de impresión</li>
            <li>Configura las opciones de impresión según tus preferencias</li>
            <li>Haz clic en "Guardar"</li>
          </ol>
        </div>
      </div>
    </div>
  );
}