import Link from "next/link"
import { ArrowRight, Check, ChevronRight, Clock, Download, Star, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700"></div>
            <div className="font-bold text-xl tracking-tight">IN Agencia</div>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#solution" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Solución
            </Link>
            <Link href="#comparison" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Comparativa
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Planes
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Resultados
            </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/20"
          >
            <Link href="#contact" className="flex items-center gap-2">
              Contacto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full border border-emerald-500/10 opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-emerald-500/10 opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full border border-emerald-500/10 opacity-30"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <Badge className="w-fit bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-0 px-4 py-1 text-sm">
                  Growth Partner 72™ – Tu máquina de generación de citas
                </Badge>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                    ¿Tu negocio merece leads o un sistema real de crecimiento?
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 text-xl md:text-2xl">
                    Montamos tu sistema completo de adquisición en solo{" "}
                    <span className="font-semibold text-emerald-400">72 horas</span>: campañas, automatización, CRM,
                    citas automáticas y dashboard en tiempo real.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/20 rounded-full px-8 h-14 text-base"
                  >
                    Quiero Clientes Reales en 72h
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 rounded-full px-8 h-14 text-base hover:bg-zinc-800"
                  >
                    Ver demostración
                  </Button>
                </div>
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>
                      Si tienes un equipo de ventas pero no tienes leads entrando, este es el sistema que necesitas.
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Trabajamos con una sola empresa por zona.</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Para negocios de servicios que están listos para escalar.</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10 transform rotate-3"></div>
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                          GP
                        </div>
                        <div>
                          <div className="font-medium text-white">Growth Partner 72™</div>
                          <div className="text-xs text-zinc-400">Tu sistema de crecimiento</div>
                        </div>
                      </div>
                      <Badge className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-0">
                        Activo
                      </Badge>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-zinc-400">Leads generados (últimos 7 días)</div>
                        <div className="text-3xl font-bold text-white">37</div>
                        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-[70%] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-800/50 rounded-xl p-4">
                          <div className="text-sm font-medium text-zinc-400">Conversión</div>
                          <div className="text-2xl font-bold text-white">12.4%</div>
                        </div>
                        <div className="bg-zinc-800/50 rounded-xl p-4">
                          <div className="text-sm font-medium text-zinc-400">Citas agendadas</div>
                          <div className="text-2xl font-bold text-white">9</div>
                        </div>
                      </div>
                      <div className="bg-zinc-800/50 rounded-xl p-4">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-medium text-white">Próxima cita</div>
                          <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-300">
                            Hoy
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="h-10 w-10 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium text-white">
                            JD
                          </div>
                          <div>
                            <div className="font-medium text-white">Juan Díaz</div>
                            <div className="text-xs text-zinc-400">15:30 - Consultoría inicial</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="w-full py-16 md:py-24 bg-zinc-900/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-3xl blur-xl -z-10"></div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden p-8">
                  <Badge className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-0 mb-6">
                    Caso de estudio gratuito
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    "Cómo un contratista pasó de 0 a 37 citas en 10 días con nuestro sistema"
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                        <Download className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-medium text-white">Video + PDF descargable ahora mismo</div>
                        <div className="text-sm text-zinc-400">Sin tarjeta. Sin spam. Solo valor real.</div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-zinc-900 font-bold border-0 shadow-lg shadow-amber-500/20 h-12">
                      Descargar Estudio de Caso
                    </Button>
                    <div className="text-sm text-zinc-400 text-center">Descarga inmediata. Sin compromisos.</div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-0">
                    Resultados reales
                  </Badge>
                  <h2 className="text-3xl font-bold text-white">
                    Descubre cómo implementamos nuestro sistema en un negocio real
                  </h2>
                  <p className="text-zinc-400 text-lg">
                    En este caso de estudio detallamos paso a paso cómo configuramos el sistema completo para un
                    contratista que necesitaba generar citas de calidad.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-amber-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="text-zinc-300">Implementación completa en 72 horas</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-amber-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="text-zinc-300">37 citas generadas en los primeros 10 días</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-amber-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="text-zinc-300">ROI positivo desde la primera semana</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-amber-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="text-zinc-300">Estrategia replicable para cualquier negocio de servicios</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="w-full py-20 md:py-32 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-red-500/10 text-red-400 hover:bg-red-500/20 border-0 px-4 py-1 text-sm">
                El problema
              </Badge>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Por qué tu negocio no está creciendo (aunque estés invirtiendo)
                </h2>
              </div>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-3xl blur-xl -z-10 transform -rotate-3"></div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="p-8">
                    <div className="space-y-8">
                      {[
                        {
                          icon: <X className="h-6 w-6 text-red-500" />,
                          title: "Inviertes en publicidad, pero no sabes si está funcionando",
                          description: "Gastas dinero en anuncios sin saber qué métricas realmente importan.",
                        },
                        {
                          icon: <X className="h-6 w-6 text-red-500" />,
                          title: "Tu equipo de ventas depende de referidos o llamadas en frío",
                          description: "Métodos inconsistentes que no escalan y dependen de la suerte.",
                        },
                        {
                          icon: <X className="h-6 w-6 text-red-500" />,
                          title: "No tienes un sistema de seguimiento",
                          description: "Pierdes oportunidades porque no hay un proceso estructurado.",
                        },
                        {
                          icon: <X className="h-6 w-6 text-red-500" />,
                          title: "No sabes qué canal trae resultados",
                          description: "Sin datos claros, es imposible optimizar tu inversión.",
                        },
                        {
                          icon: <X className="h-6 w-6 text-red-500" />,
                          title: "Estás improvisando",
                          description: "Sin un sistema, dependes de acciones reactivas en lugar de estratégicas.",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1 text-white">{item.title}</h3>
                            <p className="text-zinc-400">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">El problema no eres tú.</h3>
                  <p className="text-xl text-zinc-400">Es que aún no tienes un sistema real.</p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl blur-sm -z-10"></div>
                  <div className="rounded-2xl border border-emerald-900 bg-zinc-900/50 p-6 backdrop-blur-sm">
                    <p className="text-lg font-medium text-white">
                      Un sistema que convierta tráfico en contactos, contactos en citas, y citas en contratos.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2 p-4 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm">
                    <div className="text-4xl font-bold text-emerald-500">87%</div>
                    <div className="text-sm text-zinc-400">
                      de las empresas no tienen un sistema de captación automatizado
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm">
                    <div className="text-4xl font-bold text-emerald-500">3.2x</div>
                    <div className="text-sm text-zinc-400">más ingresos con un sistema de adquisición estructurado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="w-full py-20 md:py-32 relative overflow-hidden bg-zinc-900/50">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-0 px-4 py-1 text-sm">
                La solución
              </Badge>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Qué es lo que sí funciona: Growth Partner 72™
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl">
                  Creamos un sistema completo, listo para escalar, en solo 72 horas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-3 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl -z-10"></div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1 space-y-4">
                        <Badge className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-0">
                          Exclusivo
                        </Badge>
                        <h3 className="text-2xl font-bold text-white">Sistema Growth Partner 72™</h3>
                        <p className="text-zinc-400">
                          Un sistema completo de adquisición de clientes diseñado específicamente para empresas de
                          servicios que quieren dominar su mercado local.
                        </p>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-emerald-500" />
                          <span className="text-sm font-medium text-zinc-300">Implementación en solo 72 horas</span>
                        </div>
                      </div>
                      <div className="relative h-[200px] w-[200px] md:h-[250px] md:w-[250px] rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                        <div className="absolute inset-4 rounded-full border-2 border-dashed border-emerald-500/30 animate-[spin_60s_linear_infinite]"></div>
                        <div className="absolute inset-8 rounded-full border-2 border-dashed border-emerald-500/40 animate-[spin_40s_linear_infinite_reverse]"></div>
                        <div className="absolute inset-12 rounded-full border-2 border-dashed border-emerald-500/50 animate-[spin_30s_linear_infinite]"></div>
                        <div className="z-10 text-center p-4 bg-zinc-900 rounded-xl shadow-lg">
                          <div className="text-5xl font-bold text-emerald-500">72</div>
                          <p className="text-sm text-zinc-400">horas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {[
                {
                  title: "Landing optimizada para captar leads",
                  description:
                    "Diseñada específicamente para tu industria y optimizada para convertir visitantes en leads calificados.",
                  icon: "🎯",
                },
                {
                  title: "Campañas activas en Meta y Google",
                  description: "Comenzamos a generar tráfico de calidad inmediatamente, sin esperas ni excusas.",
                  icon: "📈",
                },
                {
                  title: "CRM + WhatsApp + IA para calificar leads",
                  description: "Comunicación multicanal que mantiene a tus prospectos comprometidos en cada etapa.",
                  icon: "🤖",
                },
                {
                  title: "Automatización de agendado en calendario",
                  description: "Los prospectos calificados reservan tiempo en tu agenda sin intermediarios.",
                  icon: "📅",
                },
                {
                  title: "Dashboard en tiempo real",
                  description: "Controla todos los aspectos de tu adquisición desde una interfaz intuitiva.",
                  icon: "📊",
                },
                {
                  title: "Soporte estratégico personalizado",
                  description: "Un experto dedicado a tu cuenta que conoce tu industria y objetivos.",
                  icon: "🚀",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="h-full bg-zinc-900 border border-zinc-800 rounded-2xl shadow-sm p-6 transition-all duration-200 group-hover:shadow-md group-hover:border-emerald-900">
                      <div className="flex flex-col h-full">
                        <div className="text-3xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-zinc-400 text-sm flex-grow">{item.description}</p>
                        <div className="mt-4 pt-4 border-t border-zinc-800">
                          <div className="flex items-center text-sm text-emerald-500 font-medium">
                            <span>Implementación día {(index % 3) + 1}</span>
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="md:col-span-3 mt-8">
                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="text-4xl">🚀</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        Lo configuramos todo. Tú solo enfócate en atender leads calificados.
                      </h3>
                      <p className="text-zinc-400">
                        Un experto dedicado a tu cuenta que conoce tu industria y objetivos, asegurando que tu sistema
                        esté siempre optimizado para máximo rendimiento.
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/20">
                      Conoce a tu Growth Partner
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-full py-16 md:py-24 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 border-0">
                    Historia real
                  </Badge>
                  <h2 className="text-3xl font-bold text-white">De la frustración a la solución</h2>
                  <p className="text-zinc-400 text-lg">
                    Después de gastar más de $8.000 en campañas sin resultados, creamos Growth Partner 72™ para resolver
                    el verdadero problema: no es que las campañas fallen, es que no hay sistema detrás.
                  </p>
                  <p className="text-zinc-400 text-lg">
                    Desde entonces, lo usamos para escalar negocios de servicios que sí tienen la capacidad de atender,
                    pero no saben cómo llenar su embudo.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2 p-4 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm">
                    <div className="text-4xl font-bold text-purple-500">$8K+</div>
                    <div className="text-sm text-zinc-400">gastados en campañas sin un sistema detrás</div>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm">
                    <div className="text-4xl font-bold text-purple-500">100%</div>
                    <div className="text-sm text-zinc-400">de clientes con sistema ven resultados en 30 días</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-3xl blur-xl -z-10"></div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-quote"
                          >
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                          </svg>
                        </div>
                        <div className="text-lg font-medium text-white">Testimonios de clientes reales</div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-zinc-800/50 rounded-xl p-4">
                          <p className="text-zinc-300 mb-3">
                            "Pasamos de tener 2-3 leads por semana a más de 5 por día. El sistema funciona solo y mi
                            equipo solo se enfoca en cerrar."
                          </p>
                          <div className="text-sm text-zinc-400">— Carlos M., Servicios Legales</div>
                        </div>
                        <div className="bg-zinc-800/50 rounded-xl p-4">
                          <p className="text-zinc-300 mb-3">
                            "Lo que más me gusta es que puedo ver todo desde mi celular. Sé exactamente cuánto me cuesta
                            cada lead y cada cliente."
                          </p>
                          <div className="text-sm text-zinc-400">— Laura S., Consultoría Financiera</div>
                        </div>
                        <div className="bg-zinc-800/50 rounded-xl p-4">
                          <p className="text-zinc-300 mb-3">
                            "Antes perseguía clientes, ahora ellos me buscan a mí. La calidad de los leads es
                            impresionante."
                          </p>
                          <div className="text-sm text-zinc-400">— Miguel A., Arquitectura y Diseño</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="w-full py-20 md:py-32 bg-zinc-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge className="bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border-0 px-4 py-1 text-sm">
                Comparativa
              </Badge>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  ¿Qué pasaría si intentaras hacerlo todo por separado?
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl">
                  Compara y descubre por qué somos la opción más inteligente para tu negocio.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl -z-10"></div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b-2 border-zinc-800">
                        <TableHead className="w-[300px] text-lg font-bold text-white">Servicio</TableHead>
                        <TableHead className="text-right text-lg font-bold text-white">Otros cobran</TableHead>
                        <TableHead className="text-right text-lg font-bold text-white">Con IN Agencia</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { service: "Página web profesional", others: "$800", inAgencia: "Incluido" },
                        { service: "Embudos + automatizaciones", others: "$900", inAgencia: "Incluido" },
                        { service: "CRM + WhatsApp + IA", others: "$500", inAgencia: "Incluido" },
                        { service: "Campañas Meta + Google", others: "$1,000", inAgencia: "Incluido" },
                        { service: "Soporte estratégico y seguimiento", others: "$500", inAgencia: "Incluido" },
                      ].map((row, index) => (
                        <TableRow key={index} className="border-b border-zinc-800">
                          <TableCell className="font-medium py-4 text-zinc-300">{row.service}</TableCell>
                          <TableCell className="text-right text-red-400 font-medium py-4">{row.others}</TableCell>
                          <TableCell className="text-right text-emerald-400 font-medium py-4">
                            {row.inAgencia}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-amber-900/20">
                        <TableCell className="font-bold text-lg py-4 text-white">TOTAL</TableCell>
                        <TableCell className="text-right font-bold text-lg text-red-400 py-4">$3,700+</TableCell>
                        <TableCell className="text-right font-bold text-lg text-emerald-400 py-4">
                          Desde $500 ✅
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-zinc-900 font-bold border-0 shadow-lg shadow-amber-500/20 rounded-full px-8 h-14 text-base">
                Ver desglose completo
              </Button>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="w-full py-16 md:py-24 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 border-0 px-4 py-1 text-sm">
                Bonos exclusivos
              </Badge>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Bonos incluidos si aplicas esta semana
                </h2>
                <p className="text-zinc-400 text-lg">Valor total: $991 USD – sin costo esta semana</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Script de WhatsApp con IA",
                  description: "Para calificar leads automáticamente",
                  value: "$297",
                  icon: "🤖",
                  color: "from-pink-500/10 to-purple-500/10",
                  textColor: "text-pink-400",
                },
                {
                  title: "Plantilla 80/20 para presupuestar",
                  description: "Campañas con rentabilidad real",
                  value: "$197",
                  icon: "📊",
                  color: "from-pink-500/10 to-purple-500/10",
                  textColor: "text-pink-400",
                },
                {
                  title: "Mini entrenamiento",
                  description: "Cómo cerrar leads en 5 minutos",
                  value: "$497",
                  icon: "🎓",
                  color: "from-pink-500/10 to-purple-500/10",
                  textColor: "text-pink-400",
                },
              ].map((bonus, index) => (
                <div key={index} className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${bonus.color} rounded-3xl blur-xl -z-10`}></div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden h-full">
                    <div className="p-6 flex flex-col h-full">
                      <div className="text-3xl mb-4">{bonus.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-white">{bonus.title}</h3>
                      <p className="text-zinc-400 text-sm mb-4">{bonus.description}</p>
                      <div className="mt-auto">
                        <div className={`text-2xl font-bold ${bonus.textColor} line-through mb-1`}>{bonus.value}</div>
                        <div className="text-emerald-400 font-bold">GRATIS</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="text-4xl">⏰</div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2 text-white">Oferta por tiempo limitado</h3>
                    <p className="text-zinc-400">
                      Estos bonos solo están disponibles hasta el domingo a las 23:59. ¡No pierdas esta oportunidad!
                    </p>
                  </div>
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-pink-500/20 px-8">
                    Quiero mis bonos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="w-full py-16 md:py-24 bg-zinc-900/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-0">
                    Nuestra garantía
                  </Badge>
                  <h2 className="text-3xl font-bold text-white">
                    Nuestra política es clara: entregamos resultados o no cobramos de más
                  </h2>
                  <p className="text-zinc-400 text-lg">
                    No prometemos ventas. Lo que sí garantizamos: te activamos un sistema completo y mínimo 20 leads
                    calificados en los primeros 30 días.
                  </p>
                  <p className="text-zinc-400 text-lg">
                    No hay más excusas: sabrás exactamente qué funciona, cuánto te cuesta y cómo escalar.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="text-zinc-300">Sistema completo activo en 72 horas</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="text-zinc-300">Mínimo 20 leads calificados en 30 días</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="text-zinc-300">Dashboard en tiempo real para monitorear resultados</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="text-zinc-300">Soporte estratégico continuo</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl -z-10"></div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-shield-check"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Garantía de satisfacción</h3>
                        <p className="text-zinc-400">Resultados o devolución</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-zinc-800/50 rounded-xl p-6">
                        <h4 className="text-lg font-bold mb-3 text-white">Si no cumplimos, no pagas</h4>
                        <p className="text-zinc-400">
                          Si no logramos entregarte al menos 20 leads calificados en los primeros 30 días, te devolvemos
                          el 100% de tu inversión.
                        </p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-xl p-6">
                        <h4 className="text-lg font-bold mb-3 text-white">Transparencia total</h4>
                        <p className="text-zinc-400">
                          Tendrás acceso a un dashboard en tiempo real donde podrás ver todos los resultados y métricas
                          de tu sistema.
                        </p>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/20 h-12">
                        Quiero esta garantía
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="testimonials" className="w-full py-20 md:py-32 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-0 px-4 py-1 text-sm">
                Prueba Social
              </Badge>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Resultados reales de nuestros clientes
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl">
                  Empresas que han usado nuestro sistema están cerrando contratos en menos de una semana.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl -z-10"></div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-white">Capturas de WhatsApp</h3>
                    <div className="space-y-4">
                      <div className="bg-zinc-800 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-8 w-8 rounded-full bg-zinc-700"></div>
                          <div className="text-sm font-medium text-white">Cliente potencial</div>
                        </div>
                        <div className="bg-blue-500/20 text-blue-100 p-3 rounded-lg max-w-[80%]">
                          ¿Puedes mañana a las 4 PM? Me interesa mucho su servicio.
                        </div>
                      </div>
                      <div className="bg-zinc-800 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-8 w-8 rounded-full bg-zinc-700"></div>
                          <div className="text-sm font-medium text-white">Cliente potencial</div>
                        </div>
                        <div className="bg-blue-500/20 text-blue-100 p-3 rounded-lg max-w-[80%]">
                          Gracias por contactarme tan rápido. Justo estaba buscando este tipo de servicio.
                        </div>
                      </div>
                      <div className="bg-zinc-800 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-8 w-8 rounded-full bg-zinc-700"></div>
                          <div className="text-sm font-medium text-white">Cliente potencial</div>
                        </div>
                        <div className="bg-blue-500/20 text-blue-100 p-3 rounded-lg max-w-[80%]">
                          Ya reservé mi cita en su calendario. Nos vemos el jueves.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl -z-10"></div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-white">Dashboards de resultados</h3>
                    <div className="space-y-6">
                      <div className="bg-zinc-800 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-sm font-medium text-white">Leads generados</div>
                          <Badge className="bg-blue-500/20 text-blue-300 border-0">Últimos 7 días</Badge>
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">37</div>
                        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-800 rounded-xl p-4">
                          <div className="text-sm font-medium text-zinc-400 mb-1">Costo por lead</div>
                          <div className="text-2xl font-bold text-white">$12.40</div>
                        </div>
                        <div className="bg-zinc-800 rounded-xl p-4">
                          <div className="text-sm font-medium text-zinc-400 mb-1">Conversión</div>
                          <div className="text-2xl font-bold text-white">18.3%</div>
                        </div>
                      </div>
                      <div className="bg-zinc-800 rounded-xl p-4">
                        <div className="text-sm font-medium text-white mb-2">Sectores con mejores resultados</div>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-zinc-300">Roofing</span>
                              <span className="text-blue-400">24 leads</span>
                            </div>
                            <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                              <div className="h-full w-[90%] bg-blue-500 rounded-full"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-zinc-300">Seguros</span>
                              <span className="text-blue-400">19 leads</span>
                            </div>
                            <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                              <div className="h-full w-[75%] bg-blue-500 rounded-full"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-zinc-300">Abogados</span>
                              <span className="text-blue-400">15 leads</span>
                            </div>
                            <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                              <div className="h-full w-[60%] bg-blue-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "120+", label: "Clientes satisfechos" },
                { number: "72h", label: "Tiempo de implementación" },
                { number: "3.2x", label: "ROI promedio" },
              ].map((stat, index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="w-full py-16 md:py-24 bg-zinc-900/50">
          <div className="container px-4 md:px-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-amber-500/10 rounded-3xl blur-xl -z-10"></div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-6">
                      <Badge className="bg-red-500/10 text-red-400 hover:bg-red-500/20 border-0">¿Por qué ahora?</Badge>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">No dejes pasar esta oportunidad</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                            <Check className="h-5 w-5" />
                          </div>
                          <div className="text-zinc-300">Solo aceptamos una empresa por zona</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                            <Check className="h-5 w-5" />
                          </div>
                          <div className="text-zinc-300">Cerramos inscripciones cada domingo a las 23:59</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                            <Check className="h-5 w-5" />
                          </div>
                          <div className="text-zinc-300">
                            Los cupos están limitados por nuestra capacidad operativa, no por marketing
                          </div>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0 shadow-lg shadow-red-500/20 px-8 h-12">
                        Reserva tu lugar ahora
                      </Button>
                    </div>
                    <div className="relative h-[250px] w-[250px] md:h-[300px] md:w-[300px]">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-amber-500/20 animate-pulse"></div>
                      <div className="absolute inset-4 rounded-full border-2 border-dashed border-red-500/30 animate-[spin_60s_linear_infinite]"></div>
                      <div className="absolute inset-8 rounded-full border-2 border-dashed border-amber-500/30 animate-[spin_40s_linear_infinite_reverse]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center bg-zinc-900 rounded-xl p-4 shadow-lg">
                          <div className="text-4xl font-bold text-white mb-1">Limitado</div>
                          <div className="text-sm text-zinc-400">Cupos disponibles</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 border-0 px-4 py-1 text-sm">
                Planes
              </Badge>
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Elige tu punto de partida
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl">
                  Soluciones adaptadas a diferentes etapas de crecimiento.
                </p>
              </div>
            </div>

            <Tabs defaultValue="monthly" className="w-full max-w-md mx-auto mb-12">
              <TabsList className="grid w-full grid-cols-2 bg-zinc-800">
                <TabsTrigger value="monthly" className="data-[state=active]:bg-zinc-900">
                  Mensual
                </TabsTrigger>
                <TabsTrigger value="annual" className="data-[state=active]:bg-zinc-900">
                  Anual (20% descuento)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="monthly" className="mt-0"></TabsContent>
              <TabsContent value="annual" className="mt-0"></TabsContent>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/10 to-zinc-500/10 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="h-full bg-zinc-900 border border-zinc-800 rounded-3xl shadow-sm p-8 transition-all duration-200 group-hover:shadow-xl group-hover:border-zinc-700">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="text-lg font-bold mb-1 text-white">1. SMMA Express</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">$100 USD</span>
                        <span className="text-zinc-400">setup</span>
                      </div>
                      <div className="text-zinc-400 mt-1">luego $500/mes</div>
                    </div>
                    <p className="text-zinc-400 mb-6">Sprint de adquisición con sistema básico listo en 72h.</p>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {[
                        "Campaña básica en Meta o Google",
                        "Configuración de WhatsApp Business",
                        "Leads directos a tu teléfono",
                        "Soporte por 30 días",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-zinc-400 flex-shrink-0" />
                          <span className="text-zinc-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full rounded-xl h-12 border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                    >
                      Empezar Ahora
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl -z-10"></div>
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                    Más Popular
                  </div>
                </div>
                <div className="h-full bg-zinc-900 border-2 border-purple-900/50 rounded-3xl shadow-xl p-8 mt-4">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="text-lg font-bold mb-1 text-white">2. Sistema Pro</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">$500 USD</span>
                        <span className="text-zinc-400">setup</span>
                      </div>
                      <div className="text-zinc-400 mt-1">luego $1,000/mes</div>
                    </div>
                    <p className="text-zinc-400 mb-6">Embudo + CRM + campañas + dashboard. Todo activo.</p>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {[
                        "Landing page optimizada",
                        "Campañas en Meta y Google",
                        "Automatización completa",
                        "CRM y seguimiento",
                        "Dashboard de resultados",
                        "Soporte prioritario",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white border-0 shadow-lg shadow-purple-500/20 rounded-xl h-12">
                      Quiero Mi Sistema
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/10 to-zinc-500/10 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="h-full bg-zinc-900 border border-zinc-800 rounded-3xl shadow-sm p-8 transition-all duration-200 group-hover:shadow-xl group-hover:border-zinc-700">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="text-lg font-bold mb-1 text-white">3. Growth Partner 72™</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">$2,500</span>
                        <span className="text-zinc-400">/mes</span>
                      </div>
                      <div className="text-zinc-400 mt-1">Exclusividad por zona</div>
                    </div>
                    <p className="text-zinc-400 mb-6">
                      Acceso completo, equipo estratégico y optimización continua. Exclusividad por zona.
                    </p>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {[
                        "Todo lo del Sistema Pro",
                        "Estrategia personalizada",
                        "Branding y contenido",
                        "Reuniones semanales",
                        "Escalado progresivo",
                        "Exclusividad territorial",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star className="h-5 w-5 text-amber-500 flex-shrink-0" />
                          <span className="text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full rounded-xl h-12 border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                    >
                      Consultar Disponibilidad
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block rounded-3xl bg-zinc-900/80 border border-zinc-800 p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400">
                    <Check className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-white">Garantía de satisfacción</div>
                    <div className="text-sm text-zinc-400">
                      Si no ves resultados en 30 días, te devolvemos tu dinero.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="w-full py-20 md:py-32 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl -z-10"></div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <Badge className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-0 mb-6">
                      ¿Estás listo para escalar?
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-white">
                      Haz lo que hacen los negocios serios: sistema, no suerte.
                    </h2>
                    <p className="text-zinc-400 text-lg mb-8">
                      Agenda tu diagnóstico. Si calificas, empezamos en las próximas 72h.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/20 rounded-full px-4 sm:px-8 h-14 text-sm sm:text-base break-words"
                      >
                        <span className="text-center">QUIERO MI SISTEMA ACTIVO EN 72H</span>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-zinc-700 text-zinc-300 rounded-full px-4 sm:px-8 h-14 text-sm sm:text-base hover:bg-zinc-800"
                      >
                        Ver demostración
                      </Button>
                    </div>
                  </div>
                  <div className="bg-zinc-800/50 p-8 md:p-12">
                    <h3 className="text-xl font-bold mb-6 text-white">Agenda una llamada</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                            Nombre
                          </label>
                          <input
                            id="name"
                            className="flex h-12 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                            placeholder="Tu nombre"
                            type="text"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium text-zinc-300">
                            Empresa
                          </label>
                          <input
                            id="company"
                            className="flex h-12 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                            placeholder="Tu empresa"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                          Email
                        </label>
                        <input
                          id="email"
                          className="flex h-12 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                          placeholder="tu@email.com"
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-zinc-300">
                          Teléfono
                        </label>
                        <input
                          id="phone"
                          className="flex h-12 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                          placeholder="+1 (555) 000-0000"
                          type="tel"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                          Mensaje (opcional)
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[100px] w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                          placeholder="¿Algo más que debamos saber?"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/20 rounded-xl h-12">
                        Enviar solicitud
                      </Button>
                      <p className="text-xs text-zinc-400 text-center">
                        Al enviar este formulario, aceptas nuestros{" "}
                        <Link href="#" className="underline underline-offset-2 hover:text-emerald-400">
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

      {/* Footer */}
      <footer className="w-full py-8 bg-zinc-900 border-t border-zinc-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700"></div>
              <div className="font-bold text-xl tracking-tight text-white">IN Agencia</div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="https://inagencia.com/politica-de-privacidad/"
                className="text-sm text-zinc-400 hover:text-emerald-400"
              >
                Política de Privacidad
              </Link>
              <Link
                href="https://inagencia.com/politica-de-cookies/"
                className="text-sm text-zinc-400 hover:text-emerald-400"
              >
                Política de Cookies
              </Link>
              <Link
                href="https://inagencia.com/terminos-y-condiciones/"
                className="text-sm text-zinc-400 hover:text-emerald-400"
              >
                Términos y Condiciones
              </Link>
              <Link href="/web-rapida" className="text-sm text-zinc-400 hover:text-emerald-400">
                Web24h
              </Link>
            </div>
            <p className="text-xs text-zinc-500">
              &copy; {new Date().getFullYear()} IN Agencia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
