import Link from "next/link"
import { ArrowRight, Check, Clock, Zap, FileCode, Gift } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

/**
 * Web Rápida Landing Page
 *
 * Esta página promociona el servicio de creación de sitios web en 24 horas por $20.
 * Utiliza un diseño oscuro con acentos en ámbar/naranja para transmitir urgencia y valor.
 *
 * Estructura:
 * - Header: Logo y CTA principal
 * - Hero: Oferta principal y beneficios clave
 * - Features: Lo que incluye y no incluye
 * - Why: Motivación detrás de la oferta
 * - Process: Requisitos y tiempo de entrega
 * - FAQ: Preguntas frecuentes
 * - CTA: Formulario de contacto y llamada a la acción final
 * - Footer: Enlaces legales y conexión con otras páginas
 */
export default function WebRapidaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      {/* 
        Header Navigation
        - Fijo en la parte superior con efecto de desenfoque al hacer scroll
        - Incluye logo de la agencia y CTA principal
      */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700"></div>
            <div className="font-bold text-xl tracking-tight">IN Agencia</div>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-lg shadow-amber-500/20"
          >
            <Link href="#comprar" className="flex items-center gap-2">
              Comprar ahora
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* 
          Hero Section
          - Presenta la oferta principal con un título grande y llamativo
          - Incluye elementos de fondo para crear profundidad visual
          - Adaptado para diferentes tamaños de pantalla con ajustes de texto
          - Incluye CTAs principales y características destacadas
        */}
        <section className="relative w-full py-12 md:py-20 lg:py-32 overflow-hidden">
          {/* Elementos de fondo con gradientes y desenfoque para crear profundidad */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              {/* Badge de oferta especial */}
              <Badge className="w-fit bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-0 px-4 py-1 text-sm">
                Oferta especial – Solo esta semana
              </Badge>

              {/* Título principal y descripción */}
              <div className="space-y-4">
                {/* Título con tamaño responsivo y gradiente de color */}
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                  ⚡️ ¡Tu web lista en 24 horas por solo $20!
                </h1>
                <p className="max-w-[600px] text-zinc-400 text-xl md:text-2xl mx-auto">
                  Sí, leíste bien. Una web profesional para tu negocio por solo $20 USD.
                  <span className="block mt-2 font-medium text-white">Nada de vueltas. Nada de letra pequeña.</span>
                </p>
              </div>

              {/* Botones de CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* 
                  Botón principal con diseño responsivo:
                  - En móviles: más pequeño con menos padding
                  - En desktop: más grande y espacioso
                */}
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-lg shadow-amber-500/20 rounded-full px-4 sm:px-8 h-12 sm:h-14 text-sm sm:text-base"
                  asChild
                >
                  <Link href="#comprar">QUIERO MI WEB POR SOLO $20</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 rounded-full px-8 h-14 text-base hover:bg-zinc-800"
                  asChild
                >
                  <Link href="#faq">Ver detalles</Link>
                </Button>
              </div>

              {/* Características destacadas en tarjetas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-8">
                {/* Característica 1: Tiempo de entrega */}
                <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                  <Clock className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span className="text-zinc-300">Lista en menos de 24 horas</span>
                </div>
                {/* Característica 2: Rendimiento */}
                <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                  <Zap className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span className="text-zinc-300">Rápida, liviana y funcional</span>
                </div>
                {/* Característica 3: Tecnología - ocupa 2 columnas en tablet */}
                <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 sm:col-span-2 md:col-span-1">
                  <FileCode className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span className="text-zinc-300">Entregada en HTML + CSS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          Features Section
          - Muestra lo que incluye y no incluye el servicio
          - Diseño de dos columnas en desktop, una columna en móvil
          - Usa iconos y listas para mejorar la legibilidad
        */}
        <section className="w-full py-16 md:py-24 bg-zinc-900/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Columna izquierda: Lo que incluye */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-0">Todo incluido</Badge>
                  <h2 className="text-3xl font-bold text-white">¿Qué incluye esta web?</h2>
                  <p className="text-zinc-400 text-lg">
                    Todo lo que necesitas para tener presencia online profesional, sin complicaciones.
                  </p>
                </div>
                {/* Lista de características incluidas con iconos */}
                <div className="space-y-4">
                  {[
                    "Página de inicio moderna y responsive",
                    "Sección de servicios o productos",
                    "Formulario de contacto funcional (sin backend)",
                    "Diseño visual limpio y profesional",
                    "Código editable para que lo uses como quieras",
                    "Entregado en HTML + CSS (zip o directo a tu hosting)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-amber-400">
                        <Check className="h-5 w-5" />
                      </div>
                      <div className="text-zinc-300">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna derecha: Lo que NO incluye */}
              <div className="relative">
                {/* Efecto de fondo con gradiente y desenfoque */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl -z-10"></div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-white">¿Qué NO incluye?</h3>
                    <div className="space-y-4">
                      {/* Elemento no incluido: Dominio */}
                      <div className="flex items-center gap-3 p-4 bg-zinc-800/50 rounded-xl">
                        <div className="text-zinc-300">
                          <span className="font-medium text-white block mb-1">Dominio</span>
                          Puedes usar el que tengas o comprar uno aparte
                        </div>
                      </div>
                      {/* Elemento no incluido: Hosting */}
                      <div className="flex items-center gap-3 p-4 bg-zinc-800/50 rounded-xl">
                        <div className="text-zinc-300">
                          <span className="font-medium text-white block mb-1">Hosting</span>
                          Puedes usar gratis como GitHub Pages o contratar uno
                        </div>
                      </div>
                      {/* Elemento no incluido: Panel administrador */}
                      <div className="flex items-center gap-3 p-4 bg-zinc-800/50 rounded-xl">
                        <div className="text-zinc-300">
                          <span className="font-medium text-white block mb-1">Panel administrador</span>
                          No es WordPress, es código limpio y editable
                        </div>
                      </div>
                    </div>
                    {/* Nota sobre servicios adicionales */}
                    <div className="mt-8 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                      <p className="text-amber-400 text-sm">
                        Si necesitas funcionalidades avanzadas, podemos cotizarte un proyecto personalizado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          Why Section
          - Explica la motivación detrás de la oferta
          - Diseño centrado con tres tarjetas de beneficios
          - Responsivo: una columna en móvil, tres en desktop
        */}
        <section className="w-full py-16 md:py-24 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              <Badge className="w-fit bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-0 px-4 py-1 text-sm">
                Nuestra motivación
              </Badge>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">💥 ¿Por qué lo hacemos?</h2>
                <p className="text-zinc-400 text-lg">
                  Porque queremos demostrarte lo rápido y bien que trabajamos. Y sí, también porque muchos negocios no
                  tienen ni siquiera una página web activa. Queremos ayudarte a dar el primer paso, sin excusas.
                </p>
              </div>

              {/* Tarjetas de beneficios - responsivas con grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                {/* Beneficio 1: Rapidez */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Rapidez</h3>
                  <p className="text-zinc-400 text-sm">Tu web lista en menos de 24 horas hábiles, sin esperas.</p>
                </div>
                {/* Beneficio 2: Calidad */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                    <FileCode className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Calidad</h3>
                  <p className="text-zinc-400 text-sm">Código limpio, optimizado y profesional que puedes editar.</p>
                </div>
                {/* Beneficio 3: Valor */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                    <Gift className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Valor</h3>
                  <p className="text-zinc-400 text-sm">Una web profesional por una fracción del precio habitual.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          Process Section
          - Explica los requisitos y el tiempo de entrega
          - Diseño de dos columnas en desktop, una columna en móvil
          - Incluye elementos visuales para destacar la urgencia
        */}
        <section className="w-full py-16 md:py-24 bg-zinc-900/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Columna izquierda: Requisitos */}
              <div className="relative">
                {/* Efecto de fondo con gradiente y desenfoque */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl -z-10"></div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-white">🛠️ ¿Qué necesitas?</h3>
                    <p className="text-zinc-400 mb-6">Solo completa el formulario, haz el pago y te pediremos:</p>
                    {/* Lista numerada de requisitos */}
                    <div className="space-y-4">
                      {[
                        "Tu logo (si tienes)",
                        "Tu nombre o el de tu negocio",
                        "Una breve descripción o tus servicios",
                        "Datos de contacto (correo, teléfono, redes)",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-xl">
                          <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                            <span className="font-bold">{index + 1}</span>
                          </div>
                          <div className="text-zinc-300">{item}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-white font-medium">👉 Y eso es todo. Nosotros hacemos el resto.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha: Tiempo de entrega y urgencia */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-0">
                    Proceso simple
                  </Badge>
                  <h2 className="text-3xl font-bold text-white">🕒 ¿Y cuánto tarda?</h2>
                  <p className="text-zinc-400 text-lg">
                    Tu web estará lista en menos de 24 horas hábiles.
                    <span className="block mt-2 font-medium text-white">Sin vueltas. Sin esperas. Sin sorpresas.</span>
                  </p>
                </div>

                {/* Elemento destacado: Oferta por tiempo limitado */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-3xl blur-sm -z-10"></div>
                  <div className="rounded-2xl border border-amber-900 bg-zinc-900/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">Oferta por tiempo limitado</h3>
                        <p className="text-zinc-400">Esta oferta es válida solo esta semana. No la repetiremos.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Elemento destacado: Oferta única */}
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-6">
                  <p className="text-lg font-medium text-white">
                    🔥 Esta es una oferta de entrada única, no la repetiremos. Puedes usarla para tu negocio o para
                    regalársela a un cliente.
                  </p>
                </div>

                {/* CTA secundario */}
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-lg shadow-amber-500/20 rounded-full px-8 h-14 text-base"
                  asChild
                >
                  <Link href="#comprar">QUIERO MI WEB POR SOLO $20</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 
          FAQ Section
          - Preguntas frecuentes con componente Accordion
          - Diseño centrado para mejor legibilidad
          - Cada pregunta se expande/colapsa al hacer clic
        */}
        <section id="faq" className="w-full py-16 md:py-24 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              <Badge className="w-fit bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-0 px-4 py-1 text-sm">
                Dudas comunes
              </Badge>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Preguntas frecuentes</h2>
                <p className="text-zinc-400 text-lg">
                  Resolvemos tus dudas para que puedas tomar una decisión informada.
                </p>
              </div>

              {/* Componente Accordion para preguntas frecuentes */}
              <div className="w-full mt-8">
                <Accordion type="single" collapsible className="w-full">
                  {/* Pregunta 1 */}
                  <AccordionItem value="item-1" className="border-zinc-800">
                    <AccordionTrigger className="text-white hover:text-amber-400 text-left">
                      ¿Es una plantilla?
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400">
                      No. La hacemos desde cero, pero usamos nuestro propio sistema para acelerar el proceso. Cada web
                      es única y adaptada a tu negocio.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Pregunta 2 */}
                  <AccordionItem value="item-2" className="border-zinc-800">
                    <AccordionTrigger className="text-white hover:text-amber-400 text-left">
                      ¿Puedo pedir cambios?
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400">
                      Sí, un ajuste menor. Si quieres una web personalizada a fondo, te cotizamos aparte. Nuestro
                      objetivo es entregarte algo funcional rápidamente.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Pregunta 3 */}
                  <AccordionItem value="item-3" className="border-zinc-800">
                    <AccordionTrigger className="text-white hover:text-amber-400 text-left">
                      ¿Puedo subirla a mi hosting?
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400">
                      ¡Claro! Te damos los archivos. Puedes usar cualquier hosting que acepte HTML, como GitHub Pages,
                      Netlify, Vercel o cualquier hosting tradicional.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Pregunta 4 */}
                  <AccordionItem value="item-4" className="border-zinc-800">
                    <AccordionTrigger className="text-white hover:text-amber-400 text-left">
                      ¿Cómo es el proceso de pago?
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400">
                      Aceptamos PayPal, tarjetas de crédito y transferencias bancarias. Una vez confirmado el pago,
                      comenzamos a trabajar en tu web inmediatamente.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Pregunta 5 */}
                  <AccordionItem value="item-5" className="border-zinc-800">
                    <AccordionTrigger className="text-white hover:text-amber-400 text-left">
                      ¿Qué pasa si no me gusta el resultado?
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400">
                      Ofrecemos garantía de satisfacción. Si no estás conforme con el resultado, te devolvemos tu dinero
                      sin preguntas.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* 
          CTA Section
          - Sección final de llamada a la acción con formulario
          - Diseño de dos columnas en desktop, una columna en móvil
          - Incluye formulario de contacto completo
        */}
        <section id="comprar" className="w-full py-20 md:py-32 relative overflow-hidden">
          {/* Elementos de fondo con gradientes y desenfoque */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="relative">
              {/* Efecto de fondo con gradiente y desenfoque */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl -z-10"></div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Columna izquierda: Mensaje principal */}
                  <div className="p-8 md:p-12">
                    <Badge className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-0 mb-6">
                      Oferta especial
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-white">
                      🎁 Tu negocio merece presencia online
                    </h2>
                    <p className="text-zinc-400 text-lg mb-8">
                      Empieza hoy por solo $20. Sin compromisos a largo plazo. Sin costos ocultos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-lg shadow-amber-500/20 rounded-full px-8 h-14 text-base"
                      >
                        SOLICITAR MI WEB AHORA
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-zinc-700 text-zinc-300 rounded-full px-8 h-14 text-base hover:bg-zinc-800"
                        asChild
                      >
                        <Link href="#faq">Ver preguntas frecuentes</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Columna derecha: Formulario de contacto */}
                  <div className="bg-zinc-800/50 p-8 md:p-12">
                    <h3 className="text-xl font-bold mb-6 text-white">Solicita tu web ahora</h3>
                    <form className="space-y-4">
                      {/* Campo: Nombre */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                          Nombre
                        </label>
                        <input
                          id="name"
                          className="flex h-12 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                          placeholder="Tu nombre o el de tu negocio"
                          type="text"
                        />
                      </div>

                      {/* Campo: Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                          Email
                        </label>
                        <input
                          id="email"
                          className="flex h-12 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                          placeholder="tu@email.com"
                          type="email"
                        />
                      </div>

                      {/* Campo: Teléfono (opcional) */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-zinc-300">
                          Teléfono (opcional)
                        </label>
                        <input
                          id="phone"
                          className="flex h-12 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                          placeholder="+1 (555) 000-0000"
                          type="tel"
                        />
                      </div>

                      {/* Campo: Descripción del negocio */}
                      <div className="space-y-2">
                        <label htmlFor="description" className="text-sm font-medium text-zinc-300">
                          Breve descripción de tu negocio
                        </label>
                        <textarea
                          id="description"
                          className="flex min-h-[100px] w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                          placeholder="Cuéntanos brevemente a qué te dedicas"
                        ></textarea>
                      </div>

                      {/* Botón de envío */}
                      <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-lg shadow-amber-500/20 rounded-xl h-12">
                        Pagar $20 y solicitar mi web
                      </Button>

                      {/* Nota legal */}
                      <p className="text-xs text-zinc-400 text-center">
                        Al enviar este formulario, aceptas nuestros{" "}
                        <Link
                          href="https://inagencia.com/terminos-y-condiciones/"
                          className="underline underline-offset-2 hover:text-amber-400"
                        >
                          Términos y Condiciones
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 
        Footer Simplificado
        - Diseño centrado y compacto
        - Incluye logo, enlaces legales y copyright
        - Enlace a la otra landing page (Growth Partner 72™)
      */}
      <footer className="w-full py-6 bg-zinc-900 border-t border-zinc-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700"></div>
              <div className="font-bold text-xl tracking-tight text-white">IN Agencia</div>
            </div>

            {/* Enlaces legales y a otras páginas */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://inagencia.com/politica-de-privacidad/"
                className="text-xs text-zinc-400 hover:text-amber-400 transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="https://inagencia.com/politica-de-cookies/"
                className="text-xs text-zinc-400 hover:text-amber-400 transition-colors"
              >
                Política de Cookies
              </Link>
              <Link
                href="https://inagencia.com/terminos-y-condiciones/"
                className="text-xs text-zinc-400 hover:text-amber-400 transition-colors"
              >
                Términos y Condiciones
              </Link>
              {/* Enlace a la landing page principal de Growth Partner 72™ */}
              <Link href="/" className="text-xs text-zinc-400 hover:text-amber-400 transition-colors">
                Sistema Growth Partner 72™
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-xs text-zinc-500">
              &copy; {new Date().getFullYear()} IN Agencia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
