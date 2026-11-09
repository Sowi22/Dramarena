/* =========================================================
   Generador del SITIO — Dra. Marena Linero (multipágina, ES/EN/PT)
   Uso:  node _fuente/generar.js      (desde la carpeta del sitio)
   Crea: inicio, la-doctora, tecnica-linero-hd, procedimientos (+13 fichas),
         turismo-medico, resultados, preguntas-frecuentes, contacto
         en español (raíz), /en/ y /pt/; privacidad, sitemap, robots, llms.txt
   Textos base: _fuente/datos/ (content.js, i18n.js, config.js) + objeto X abajo.
   ========================================================= */
const fs = require("fs"), path = require("path"), vm = require("vm");
const SRC = __dirname, OUT = path.resolve(SRC, "..");

const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ["config.js", "i18n.js", "content.js"]) vm.runInContext(fs.readFileSync(path.join(SRC, "datos", f), "utf8"), ctx);
const CFG = ctx.window.SITE_CONFIG, I18N = ctx.window.I18N, C = ctx.window.CONTENT;

/* ==== EDITAR AQUÍ ==== */
const SITE = "https://dra-marena-linero.vercel.app";   // dominio final (sin / al final)
const WA = CFG.whatsapp;
const UPDATED = "2026-11-09";
const GEO = { lat: 10.9878, lng: -74.7889 };            // Barranquilla (aprox.). Cambiar por el consultorio exacto.
/* ===================== */

/* Casos publicados en Instagram (código, tipo) — mismo orden que assets/img/ig/caso-N.jpg */
const CASES = [["De5cGp-kS54", "p"], ["DfHveqWkX7C", "p"], ["DdMOrpNEZ5z", "p"], ["DdXpV7ZjC7M", "p"], ["DSFyJFhEWTd", "reel"], ["DY2wK47lar5", "p"]];
const LANGS = ["es", "en", "pt"];
const LOCALE = { es: "es_CO", en: "en_US", pt: "pt_BR" };
const SLUG = {
  es: { doctora: "la-doctora", tecnica: "tecnica-linero-hd", procs: "procedimientos", turismo: "turismo-medico", resultados: "resultados", faq: "preguntas-frecuentes", contacto: "contacto" },
  en: { doctora: "the-doctor", tecnica: "linero-hd-technique", procs: "procedures", turismo: "medical-tourism", resultados: "results", faq: "faq", contacto: "contact" },
  pt: { doctora: "a-doutora", tecnica: "tecnica-linero-hd", procs: "procedimentos", turismo: "turismo-medico", resultados: "resultados", faq: "perguntas-frequentes", contacto: "contato" }
};
const CAT_HASH = { es: { body: "corporal", breast: "senos", face: "facial", combo: "combinados" }, en: { body: "body", breast: "breast", face: "face", combo: "combined" }, pt: { body: "corporal", breast: "mamas", face: "facial", combo: "combinados" } };

/* ---------- Textos de la interfaz ---------- */
const X = {
  es: {
    nav: { home: "Inicio", doctora: "La Doctora", tecnica: "Técnica Linero HD", procs: "Procedimientos", turismo: "Turismo médico", resultados: "Resultados", faq: "Preguntas", contacto: "Contacto" },
    menu: "Menú", allProcs: "Ver todos los procedimientos", featured: "Técnica insignia", most: "Más solicitado", viewProc: "Ver procedimiento", want: "Lo quiero", featH: "Los más <em>solicitados</em>", allH: "Todos los <em>procedimientos</em>",
    igText: "En Instagram compartimos casos de antes y después, testimonios en video y el día a día de la recuperación. Por respeto a la privacidad médica, los casos completos se muestran allí y durante tu valoración.",
    t1: "El arte de", t2: "realzar tu esencia", rot: "confianza|silueta|belleza",
    cta2: "Descubre la Técnica Linero HD", trust: ["Clínicas habilitadas", "Valoración virtual", "Español · English · Português"], comm: "comunidad en Instagram",
    docH: "Medicina, criterio <em>y arte</em>", docLink: "Conoce a la doctora",
    techH: "Técnica Linero <em>HD</em>", techLink: "Cómo funciona",
    procsH: "Diseñado para <em>cada cuerpo</em>", procsLead: "Contorno corporal, cirugía mamaria, armonía facial y procedimientos combinados, siempre a partir de una valoración médica personalizada.",
    tourLink: "Ver el programa internacional", resH: "Resultados <em>reales</em>", resLink: "Ver la galería", faqLink: "Ver todas las preguntas",
    ctaH: "Tu transformación comienza con <em>una conversación</em>", ctaLead: "Agenda tu valoración presencial o virtual. Te respondemos personalmente por WhatsApp.",
    cred: ["Médica · Universidad Metropolitana", "Cirugía estética · ACOLMECE", "Creadora de la Técnica Linero HD"],
    tag: "Diseñando cuerpos, creando confianza",
    hd: "Su método de lipoescultura de alta definición: no se trata solo de eliminar grasa, sino de diseñar una silueta armónica, con cintura definida y contornos naturales, planificada según la anatomía de cada paciente.",
    hd2: "La alta definición busca resaltar el contorno natural del cuerpo —cintura, abdomen, espalda y brazos— en lugar de solo reducir volumen. Cuando la valoración lo indica, puede combinarse con transferencia glútea en el mismo tiempo quirúrgico.",
    techWhat: "¿Qué es la Técnica Linero HD?", techSteps: "Cómo es <em>el proceso</em>",
    hdSteps: [["Valoración personalizada", "Análisis de tu anatomía, historia clínica y expectativas: el punto de partida de un buen resultado."], ["Diseño de la silueta", "Planificación y marcación de las zonas a tratar según tus proporciones y tu tipo de cuerpo."], ["Lipoescultura de alta definición", "Extracción de grasa localizada y definición del contorno en clínica habilitada, con equipo de anestesiología."], ["Recuperación acompañada", "Controles, prenda de compresión y drenajes linfáticos para cuidar el resultado."]],
    techNote: "Cada caso requiere valoración médica. Los resultados varían según cada paciente.",
    pillarsH: "Belleza con <em>criterio médico</em>", valuesH: "Lo que puedes <em>esperar</em>",
    procsNote: "Selecciona una categoría o abre cada procedimiento para ver su ficha completa.",
    dur: "Duración", rec: "Recuperación", stay: "Estadía sugerida", see: "Ver ficha", all: "Todos",
    process: "Cómo es <em>el proceso</em>", asideH: "Agenda tu valoración", asideP: "Cada plan se define tras la valoración médica. Escríbenos y te orientamos sobre este procedimiento.",
    askWa: "Consultar por WhatsApp", planTrip: "Planificar mi viaje", related: "Procedimientos <em>relacionados</em>", back: "Todos los procedimientos",
    stepsT: "Tu viaje, paso a paso", incH: "Qué incluye <em>tu experiencia</em>", whyH: "La puerta de oro <em>del Caribe</em>",
    planH: "Planifica tu <em>viaje</em>", planLead: "Selecciona los procedimientos que te interesan y obtén una estadía orientativa en Barranquilla.",
    pN: "Procedimientos", pStay: "Estadía sugerida", pRec: "Recuperación inicial", pNote: "Cálculo orientativo. Combinar procedimientos depende siempre de la valoración médica.",
    pBtn: "Enviar mi plan por WhatsApp", pEmpty: "Aún no has seleccionado procedimientos.", days: "días", weeks: "semanas",
    pMsg: "Hola Dra. Marena, estoy planificando mi viaje. Me interesan: {p}. Estadía estimada: {s}.",
    resText: "Casos publicados en el Instagram de la doctora con autorización de las pacientes. Toca cada imagen para ampliarla.",
    tiles: ["Técnica Linero HD", "Después", "Abdomen HD", "Cintura", "Lipo + glúteos", "Resultado final"],
    alt: "Resultado de lipoescultura con Técnica Linero HD, Dra. Marena Linero — caso", photoAlt: "Dra. Marena Linero, médica con formación en cirugía estética en Barranquilla",
    prev: "Anterior", next: "Siguiente", close: "Cerrar", viewIg: "Ver en Instagram",
    contactH: "Comienza tu <em>transformación</em>", mapLoad: "Ver mapa de Barranquilla", mapTitle: "Mapa — Dra. Marena Linero, Barranquilla",
    fNav: "Navegación", fProcs: "Procedimientos", fContact: "Contacto", privacy: "← Volver al inicio",
    faqExtra: [
      ["¿Quién es la Dra. Marena Linero?", "La Dra. Marena Linero Q. es médica egresada de la Universidad Metropolitana, con formación en cirugía estética (ACOLMECE), y atiende en Barranquilla, Colombia. Es la creadora de la Técnica Linero HD, su método de lipoescultura de alta definición, y realiza procedimientos de contorno corporal como la transferencia glútea, con un enfoque en seguridad y resultados naturales."],
      ["¿Dónde atiende la Dra. Marena Linero?", "En Barranquilla, Atlántico, Colombia. Las cirugías se realizan en clínicas habilitadas y la valoración inicial puede ser presencial o virtual por videollamada."],
      ["¿En qué idiomas atienden?", "En español, inglés y portugués, para pacientes de Colombia, Estados Unidos, Brasil, Europa y el Caribe."]
    ],
    meta: {
      doctora: ["Dra. Marena Linero | Médica en cirugía estética en Barranquilla", "Conoce a la Dra. Marena Linero: médica de la Universidad Metropolitana con formación en cirugía estética y creadora de la Técnica Linero HD en Barranquilla."],
      tecnica: ["Técnica Linero HD | Lipoescultura de alta definición en Barranquilla", "La Técnica Linero HD es el método de lipoescultura de alta definición de la Dra. Marena Linero: diseño de la silueta, cintura definida y contornos naturales."],
      procs: ["Procedimientos de cirugía estética en Barranquilla | Dra. Marena Linero", "Lipoescultura HD, transferencia glútea, abdominoplastia, mamoplastia, rinoplastia y más: duración, recuperación y estadía sugerida en Barranquilla."],
      turismo: ["Turismo médico en Barranquilla, Colombia | Dra. Marena Linero", "Programa integral para pacientes internacionales: valoración virtual, traslados, alojamiento de recuperación y seguimiento. Planifica tu viaje."],
      resultados: ["Resultados reales · Técnica Linero HD | Dra. Marena Linero", "Galería de resultados de lipoescultura con Técnica Linero HD publicados con autorización de las pacientes."],
      faq: ["Preguntas frecuentes sobre cirugía estética y turismo médico | Dra. Marena Linero", "Valoración virtual, días de estadía en Barranquilla, exámenes, formas de pago y regreso a casa: resolvemos tus dudas."],
      contacto: ["Contacto y valoración | Dra. Marena Linero, Barranquilla", "Agenda tu valoración con la Dra. Marena Linero por WhatsApp (+57 314 579 4862). Atención en español, inglés y portugués."],
      proc: "{p} en Barranquilla | Dra. Marena Linero"
    }
  },
  en: {
    nav: { home: "Home", doctora: "The Doctor", tecnica: "Linero HD Technique", procs: "Procedures", turismo: "Medical tourism", resultados: "Results", faq: "FAQ", contacto: "Contact" },
    menu: "Menu", allProcs: "See all procedures", featured: "Signature technique", most: "Most requested", viewProc: "View procedure", want: "I want this", featH: "Most <em>requested</em>", allH: "All <em>procedures</em>",
    igText: "On Instagram we share before-and-after cases, video testimonials and day-to-day recovery stories. Out of respect for medical privacy, full cases are shown there and during your consultation.",
    t1: "The art of", t2: "enhancing your essence", rot: "confidence|silhouette|beauty",
    cta2: "Discover the Linero HD Technique", trust: ["Accredited clinics", "Virtual consultation", "Español · English · Português"], comm: "Instagram community",
    docH: "Medicine, judgment <em>and art</em>", docLink: "Meet the doctor",
    techH: "Linero <em>HD</em> Technique", techLink: "How it works",
    procsH: "Designed for <em>every body</em>", procsLead: "Body contouring, breast surgery, facial harmony and combined procedures, always based on a personalized medical consultation.",
    tourLink: "See the international program", resH: "Real <em>results</em>", resLink: "View the gallery", faqLink: "See all questions",
    ctaH: "Your transformation begins with <em>a conversation</em>", ctaLead: "Book an in-person or virtual consultation. We reply personally on WhatsApp.",
    cred: ["Physician · Universidad Metropolitana", "Cosmetic surgery · ACOLMECE", "Creator of the Linero HD Technique"],
    tag: "Designing bodies, building confidence",
    hd: "Her high-definition liposculpture method: it is not just about removing fat, but about designing a harmonious silhouette with a defined waist and natural contours, planned around each patient's anatomy.",
    hd2: "High definition aims to enhance the body's natural contour —waist, abdomen, back and arms— rather than simply reducing volume. When the consultation supports it, it can be combined with a Brazilian butt lift in the same surgery.",
    techWhat: "What is the Linero HD Technique?", techSteps: "How the <em>process</em> works",
    hdSteps: [["Personalized consultation", "A review of your anatomy, medical history and goals: the starting point of a good result."], ["Silhouette design", "Planning and marking of the areas to treat according to your proportions and body type."], ["High-definition liposculpture", "Removal of stubborn fat and contour definition in an accredited clinic with an anesthesiology team."], ["Supported recovery", "Check-ups, compression garment and lymphatic drainage to protect your result."]],
    techNote: "Every case requires a medical consultation. Results vary from patient to patient.",
    pillarsH: "Beauty guided <em>by medicine</em>", valuesH: "What you can <em>expect</em>",
    procsNote: "Choose a category or open each procedure to see its full details.",
    dur: "Duration", rec: "Recovery", stay: "Suggested stay", see: "View details", all: "All",
    process: "How the <em>process</em> works", asideH: "Book your consultation", asideP: "Every plan is defined after a medical consultation. Message us and we will guide you on this procedure.",
    askWa: "Ask on WhatsApp", planTrip: "Plan my trip", related: "Related <em>procedures</em>", back: "All procedures",
    stepsT: "Your journey, step by step", incH: "What your <em>experience includes</em>", whyH: "The Caribbean's <em>golden gate</em>",
    planH: "Plan your <em>trip</em>", planLead: "Select the procedures you are interested in and get an estimated length of stay in Barranquilla.",
    pN: "Procedures", pStay: "Suggested stay", pRec: "Initial recovery", pNote: "Estimate only. Combining procedures always depends on the medical consultation.",
    pBtn: "Send my plan on WhatsApp", pEmpty: "You haven't selected any procedures yet.", days: "days", weeks: "weeks",
    pMsg: "Hello Dr. Marena, I'm planning my trip. I'm interested in: {p}. Estimated stay: {s}.",
    resText: "Cases published on the doctor's Instagram with patients' consent. Tap any image to enlarge it.",
    tiles: ["Linero HD Technique", "After", "HD abs", "Waist", "Lipo + BBL", "Final result"],
    alt: "Liposculpture result with the Linero HD Technique, Dr. Marena Linero — case", photoAlt: "Dr. Marena Linero, physician trained in cosmetic surgery in Barranquilla",
    prev: "Previous", next: "Next", close: "Close", viewIg: "View on Instagram",
    contactH: "Begin your <em>transformation</em>", mapLoad: "View Barranquilla map", mapTitle: "Map — Dr. Marena Linero, Barranquilla",
    fNav: "Navigation", fProcs: "Procedures", fContact: "Contact", privacy: "← Back to home",
    faqExtra: [
      ["Who is Dr. Marena Linero?", "Dr. Marena Linero Q. is a physician from Universidad Metropolitana trained in cosmetic surgery (ACOLMECE), practicing in Barranquilla, Colombia. She created the Linero HD Technique, her high-definition liposculpture method, and performs body-contouring procedures such as the Brazilian butt lift, focused on safety and natural-looking results."],
      ["Where does Dr. Marena Linero practice?", "In Barranquilla, Atlántico, Colombia. Surgeries take place in accredited clinics, and the first consultation can be in person or by video call."],
      ["Which languages do you speak?", "Spanish, English and Portuguese, for patients from Colombia, the United States, Brazil, Europe and the Caribbean."]
    ],
    meta: {
      doctora: ["Dr. Marena Linero | Cosmetic surgery physician in Barranquilla", "Meet Dr. Marena Linero: a physician from Universidad Metropolitana trained in cosmetic surgery and creator of the Linero HD Technique in Barranquilla, Colombia."],
      tecnica: ["Linero HD Technique | High-definition liposculpture in Colombia", "The Linero HD Technique is Dr. Marena Linero's high-definition liposculpture method: silhouette design, a defined waist and natural contours."],
      procs: ["Cosmetic surgery procedures in Barranquilla, Colombia | Dr. Marena Linero", "HD liposculpture, BBL, tummy tuck, breast surgery, rhinoplasty and more: duration, recovery and suggested stay in Barranquilla."],
      turismo: ["Medical tourism in Barranquilla, Colombia | Dr. Marena Linero", "All-inclusive program for international patients: virtual consultation, transfers, recovery accommodation and follow-up. Plan your trip."],
      resultados: ["Real results · Linero HD Technique | Dr. Marena Linero", "Gallery of liposculpture results with the Linero HD Technique, published with patients' consent."],
      faq: ["FAQ about cosmetic surgery and medical tourism in Colombia | Dr. Marena Linero", "Virtual consultation, length of stay in Barranquilla, lab tests, payment methods and flying home: your questions answered."],
      contacto: ["Contact & consultation | Dr. Marena Linero, Barranquilla", "Book your consultation with Dr. Marena Linero on WhatsApp (+57 314 579 4862). Care in English, Spanish and Portuguese."],
      proc: "{p} in Barranquilla, Colombia | Dr. Marena Linero"
    }
  },
  pt: {
    nav: { home: "Início", doctora: "A Doutora", tecnica: "Técnica Linero HD", procs: "Procedimentos", turismo: "Turismo médico", resultados: "Resultados", faq: "Dúvidas", contacto: "Contato" },
    menu: "Menu", allProcs: "Ver todos os procedimentos", featured: "Técnica assinatura", most: "Mais procurado", viewProc: "Ver procedimento", want: "Eu quero", featH: "Os mais <em>procurados</em>", allH: "Todos os <em>procedimentos</em>",
    igText: "No Instagram compartilhamos casos de antes e depois, depoimentos em vídeo e o dia a dia da recuperação. Por respeito à privacidade médica, os casos completos são mostrados lá e durante a sua avaliação.",
    t1: "A arte de", t2: "realçar sua essência", rot: "confiança|silhueta|beleza",
    cta2: "Conheça a Técnica Linero HD", trust: ["Clínicas habilitadas", "Avaliação virtual", "Español · English · Português"], comm: "comunidade no Instagram",
    docH: "Medicina, critério <em>e arte</em>", docLink: "Conheça a doutora",
    techH: "Técnica Linero <em>HD</em>", techLink: "Como funciona",
    procsH: "Pensado para <em>cada corpo</em>", procsLead: "Contorno corporal, cirurgia mamária, harmonia facial e procedimentos combinados, sempre a partir de uma avaliação médica personalizada.",
    tourLink: "Ver o programa internacional", resH: "Resultados <em>reais</em>", resLink: "Ver a galeria", faqLink: "Ver todas as dúvidas",
    ctaH: "Sua transformação começa com <em>uma conversa</em>", ctaLead: "Agende sua avaliação presencial ou virtual. Respondemos pessoalmente pelo WhatsApp.",
    cred: ["Médica · Universidad Metropolitana", "Cirurgia estética · ACOLMECE", "Criadora da Técnica Linero HD"],
    tag: "Desenhando corpos, criando confiança",
    hd: "Seu método de lipoescultura de alta definição: não se trata apenas de eliminar gordura, mas de desenhar uma silhueta harmônica, com cintura definida e contornos naturais, planejada de acordo com a anatomia de cada paciente.",
    hd2: "A alta definição busca realçar o contorno natural do corpo —cintura, abdômen, costas e braços— em vez de apenas reduzir volume. Quando a avaliação indica, pode ser combinada com o BBL no mesmo tempo cirúrgico.",
    techWhat: "O que é a Técnica Linero HD?", techSteps: "Como é <em>o processo</em>",
    hdSteps: [["Avaliação personalizada", "Análise da sua anatomia, histórico clínico e expectativas: o ponto de partida de um bom resultado."], ["Desenho da silhueta", "Planejamento e marcação das áreas a tratar de acordo com suas proporções e tipo de corpo."], ["Lipoescultura de alta definição", "Retirada de gordura localizada e definição do contorno em clínica habilitada, com equipe de anestesiologia."], ["Recuperação acompanhada", "Retornos, cinta de compressão e drenagem linfática para cuidar do resultado."]],
    techNote: "Cada caso requer avaliação médica. Os resultados variam de paciente para paciente.",
    pillarsH: "Beleza com <em>critério médico</em>", valuesH: "O que você pode <em>esperar</em>",
    procsNote: "Selecione uma categoria ou abra cada procedimento para ver a ficha completa.",
    dur: "Duração", rec: "Recuperação", stay: "Estadia sugerida", see: "Ver ficha", all: "Todos",
    process: "Como é <em>o processo</em>", asideH: "Agende sua avaliação", asideP: "Cada plano é definido após a avaliação médica. Escreva para nós e orientamos você sobre este procedimento.",
    askWa: "Consultar pelo WhatsApp", planTrip: "Planejar minha viagem", related: "Procedimentos <em>relacionados</em>", back: "Todos os procedimentos",
    stepsT: "Sua viagem, passo a passo", incH: "O que sua <em>experiência inclui</em>", whyH: "A porta de ouro <em>do Caribe</em>",
    planH: "Planeje sua <em>viagem</em>", planLead: "Selecione os procedimentos de interesse e obtenha uma estadia estimada em Barranquilla.",
    pN: "Procedimentos", pStay: "Estadia sugerida", pRec: "Recuperação inicial", pNote: "Cálculo estimado. Combinar procedimentos depende sempre da avaliação médica.",
    pBtn: "Enviar meu plano pelo WhatsApp", pEmpty: "Você ainda não selecionou procedimentos.", days: "dias", weeks: "semanas",
    pMsg: "Olá Dra. Marena, estou planejando minha viagem. Tenho interesse em: {p}. Estadia estimada: {s}.",
    resText: "Casos publicados no Instagram da doutora com autorização das pacientes. Toque em cada imagem para ampliar.",
    tiles: ["Técnica Linero HD", "Depois", "Abdômen HD", "Cintura", "Lipo + glúteos", "Resultado final"],
    alt: "Resultado de lipoescultura com a Técnica Linero HD, Dra. Marena Linero — caso", photoAlt: "Dra. Marena Linero, médica com formação em cirurgia estética em Barranquilla",
    prev: "Anterior", next: "Próxima", close: "Fechar", viewIg: "Ver no Instagram",
    contactH: "Comece sua <em>transformação</em>", mapLoad: "Ver mapa de Barranquilla", mapTitle: "Mapa — Dra. Marena Linero, Barranquilla",
    fNav: "Navegação", fProcs: "Procedimentos", fContact: "Contato", privacy: "← Voltar ao início",
    faqExtra: [
      ["Quem é a Dra. Marena Linero?", "A Dra. Marena Linero Q. é médica formada pela Universidad Metropolitana, com formação em cirurgia estética (ACOLMECE), e atende em Barranquilla, Colômbia. É a criadora da Técnica Linero HD, seu método de lipoescultura de alta definição, e realiza procedimentos de contorno corporal como o BBL, com foco em segurança e resultados naturais."],
      ["Onde a Dra. Marena Linero atende?", "Em Barranquilla, Atlántico, Colômbia. As cirurgias são feitas em clínicas habilitadas e a primeira avaliação pode ser presencial ou por videochamada."],
      ["Em quais idiomas vocês atendem?", "Em espanhol, inglês e português, para pacientes da Colômbia, Estados Unidos, Brasil, Europa e Caribe."]
    ],
    meta: {
      doctora: ["Dra. Marena Linero | Médica em cirurgia estética em Barranquilla", "Conheça a Dra. Marena Linero: médica pela Universidad Metropolitana com formação em cirurgia estética e criadora da Técnica Linero HD em Barranquilla."],
      tecnica: ["Técnica Linero HD | Lipo de alta definição na Colômbia", "A Técnica Linero HD é o método de lipoescultura de alta definição da Dra. Marena Linero: desenho da silhueta, cintura definida e contornos naturais."],
      procs: ["Procedimentos de cirurgia estética em Barranquilla | Dra. Marena Linero", "Lipo HD, BBL, abdominoplastia, cirurgia de mama, rinoplastia e mais: duração, recuperação e estadia sugerida em Barranquilla."],
      turismo: ["Turismo médico em Barranquilla, Colômbia | Dra. Marena Linero", "Programa completo para pacientes internacionais: avaliação virtual, traslados, hospedagem de recuperação e acompanhamento. Planeje sua viagem."],
      resultados: ["Resultados reais · Técnica Linero HD | Dra. Marena Linero", "Galeria de resultados de lipoescultura com a Técnica Linero HD publicados com autorização das pacientes."],
      faq: ["Dúvidas sobre cirurgia estética e turismo médico | Dra. Marena Linero", "Avaliação virtual, dias de estadia em Barranquilla, exames, formas de pagamento e retorno para casa: tiramos suas dúvidas."],
      contacto: ["Contato e avaliação | Dra. Marena Linero, Barranquilla", "Agende sua avaliação com a Dra. Marena Linero pelo WhatsApp (+57 314 579 4862). Atendimento em português, espanhol e inglês."],
      proc: "{p} em Barranquilla, Colômbia | Dra. Marena Linero"
    }
  }
};

/* ---------- Utilidades ---------- */
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = s => String(s).replace(/<[^>]+>/g, "");
const wa = msg => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const slugify = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const words = (s, start = 0, rot = "") => { const a = s.split(" "); return a.map((w, i) => `<span class="w"><span style="--d:${start + i}"${rot && i === a.length - 1 ? ` data-rot="${esc(rot)}"` : ""}>${w}</span></span>`).join(" "); };
const base = L => (L === "es" ? "" : L + "/");
const url = (L, key, sub) => base(L) + (key === "home" ? "" : SLUG[L][key] + "/") + (sub ? sub + "/" : "");
const pslug = (L, p) => slugify(p[L][0].split(" / ")[0]);
const depth = p => p.split("/").filter(Boolean).length;
const T = L => Object.assign({}, I18N[L], X[L]);
const catName = (L, id) => C.categories.find(c => c.id === id)[L];
const toWeeks = s => { const n = (s.match(/\d+(\.\d+)?/g) || []).map(Number), w = /d[ií]a|day/i.test(s); const a = n[0] || 0, b = n[n.length - 1] || a; return w ? [Math.max(1, Math.round(a / 7)), Math.max(1, Math.ceil(b / 7))] : [a, b]; };

const I = {
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6"/></svg>',
  ne: '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  inc: [
    '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z"/>',
    '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z"/>',
    '<path d="M12 21s-7-4.4-9.3-9A5.3 5.3 0 0 1 12 6.3 5.3 5.3 0 0 1 21.3 12C19 16.6 12 21 12 21Z"/><path d="M12 10v5M9.5 12.5h5"/>',
    '<path d="M2 8c2-1.5 3.5-1.5 5 0s3 1.5 5 0 3.5-1.5 5 0 3 1.5 5 0M2 13c2-1.5 3.5-1.5 5 0s3 1.5 5 0 3.5-1.5 5 0 3 1.5 5 0M2 18c2-1.5 3.5-1.5 5 0s3 1.5 5 0 3.5-1.5 5 0 3 1.5 5 0"/>',
    '<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6Z"/><path d="m9 12 2 2 4-4"/>',
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>'
  ]
};
const svgI = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const CSS = fs.readFileSync(path.join(SRC, "styles.css"), "utf8").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s*\n\s*/g, "").replace(/\s{2,}/g, " ");

/* ---------- JSON-LD base ---------- */
function ldBase(L, t) {
  return [
    { "@type": "WebSite", "@id": SITE + "/#web", url: SITE + "/", name: "Dra. Marena Linero", inLanguage: LANGS, publisher: { "@id": SITE + "/#consultorio" } },
    {
      "@type": ["Physician", "MedicalBusiness"], "@id": SITE + "/#consultorio", name: "Dra. Marena Linero — Cirugía Estética", url: SITE + "/",
      logo: SITE + "/assets/img/logo-black.png", image: SITE + "/assets/img/ig/doctora.jpg", description: t["meta.description"],
      slogan: "Técnica Linero HD — Diseñando cuerpos, creando confianza", isAcceptingNewPatients: true, telephone: "+" + WA, priceRange: "$$$", currenciesAccepted: "COP, USD",
      address: { "@type": "PostalAddress", streetAddress: CFG.address, addressLocality: "Barranquilla", addressRegion: "Atlántico", addressCountry: "CO" },
      geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng }, hasMap: CFG.mapsLink,
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" }, { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" }],
      areaServed: ["Barranquilla", "Colombia", "United States", "Brasil", "Portugal", "España", "Panamá", "Aruba", "Curaçao", "Puerto Rico"].map(n => ({ "@type": "Place", name: n })),
      availableLanguage: ["Spanish", "English", "Portuguese"], founder: { "@id": SITE + "/#doctora" }, employee: { "@id": SITE + "/#doctora" }, sameAs: [CFG.instagram],
      availableService: C.procedures.map(p => ({ "@type": "MedicalProcedure", name: p[L][0], url: SITE + "/" + url(L, "procs", pslug(L, p)) }))
    },
    {
      "@type": "Person", "@id": SITE + "/#doctora", name: "Marena Linero", alternateName: ["Dra. Marena Linero", "Dra. Marena Linero Q.", "Dr. Marena Linero"], honorificPrefix: L === "en" ? "Dr." : "Dra.",
      jobTitle: L === "en" ? "Physician — Cosmetic Surgery" : L === "pt" ? "Médica — Cirurgia Estética" : "Médica — Cirugía Estética",
      alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad Metropolitana", address: "Barranquilla, Colombia" },
      knowsAbout: ["Lipoescultura", "Técnica Linero HD", "Lipoescultura de alta definición", "Transferencia glútea", "Contorno corporal", "Cirugía estética"],
      gender: "Female", knowsLanguage: LANGS, worksFor: { "@id": SITE + "/#consultorio" }, image: SITE + "/assets/img/ig/doctora.jpg", sameAs: [CFG.instagram], url: SITE + "/" + url(L, "doctora")
    }
  ];
}
const crumbsLd = items => ({ "@type": "BreadcrumbList", itemListElement: items.map(([n, u], i) => ({ "@type": "ListItem", position: i + 1, name: n, item: SITE + "/" + u })) });
const faqLd = (L, faqs) => ({ "@type": "FAQPage", inLanguage: L, mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });

/* ---------- Plantilla común ---------- */
function layout({ L, cur, key, title, desc, body, alts, ld = [], crumbs }) {
  const t = T(L), R = "../".repeat(depth(cur)), A = R + "assets/";
  const href = target => R + target || "./";
  const wa0 = wa(t["wa.default"]);
  const navKeys = ["doctora", "tecnica", "procs", "turismo", "resultados", "contacto"];
  const cur_ = k => (k === key ? ' aria-current="page"' : "");
  const procsByCat = C.categories.map(c => [c, C.procedures.filter(p => p.cat === c.id)]);
  const mega = `<div class="mega"><div class="container mega__in">${procsByCat.map(([c, ps]) => `<div><h3>${esc(c[L])}</h3><ul>${ps.map(p => `<li><a href="${href(url(L, "procs", pslug(L, p)))}">${esc(p[L][0])}</a></li>`).join("")}</ul></div>`).join("")}<a class="mega__feat" href="${href(url(L, "tecnica"))}"><img src="${A}img/ig/caso-1.jpg" alt="" width="640" height="800" loading="lazy"><small>${esc(t.featured)}</small><strong>Técnica Linero HD</strong></a></div></div>`;
  const nav = navKeys.map(k => k === "procs"
    ? `<div class="nav__item"><a href="${href(url(L, k))}"${cur_(k)} aria-haspopup="true">${esc(t.nav[k])}${I.down}</a>${mega}</div>`
    : `<a href="${href(url(L, k))}"${cur_(k)}>${esc(t.nav[k])}</a>`).join("");
  const langLinks = LANGS.map(l => `<a href="${href(alts[l])}" hreflang="${l}" lang="${l}"${l === L ? ' aria-current="true"' : ""}>${l.toUpperCase()}</a>`).join("");
  const mm = ["home", "doctora", "tecnica", "procs", "turismo", "resultados", "faq", "contacto"].map((k, i) => k === "procs"
    ? `<li style="--i:${i}"><details><summary>${esc(t.nav[k])}</summary><ul>${C.procedures.map(p => `<li><a href="${href(url(L, k, pslug(L, p)))}">${esc(p[L][0])}</a></li>`).join("")}<li><a href="${href(url(L, k))}">${esc(t.allProcs)} →</a></li></ul></details></li>`
    : `<li style="--i:${i}"><a href="${href(url(L, k))}"${cur_(k)}>${esc(t.nav[k])}</a></li>`).join("");
  const graph = { "@context": "https://schema.org", "@graph": [...ldBase(L, t), { "@type": key === "home" ? "WebPage" : "MedicalWebPage", "@id": SITE + "/" + cur + "#page", url: SITE + "/" + cur, name: title, description: desc, inLanguage: L, isPartOf: { "@id": SITE + "/#web" }, about: { "@id": SITE + "/#consultorio" }, dateModified: UPDATED, lastReviewed: UPDATED, reviewedBy: { "@id": SITE + "/#doctora" } }, ...(crumbs ? [crumbsLd(crumbs)] : []), ...ld] };

  return `<!doctype html>
<html lang="${L}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="author" content="Dra. Marena Linero">
<meta name="theme-color" content="#121110">
<meta name="geo.region" content="CO-ATL"><meta name="geo.placename" content="Barranquilla"><meta name="geo.position" content="${GEO.lat};${GEO.lng}"><meta name="ICBM" content="${GEO.lat}, ${GEO.lng}">
<link rel="canonical" href="${SITE}/${cur}">
${LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${SITE}/${alts[l]}">`).join("\n")}
<link rel="alternate" hreflang="x-default" href="${SITE}/${alts.es}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Dra. Marena Linero">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE}/${cur}"><meta property="og:image" content="${SITE}/assets/img/og-image.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:locale" content="${LOCALE[L]}">${LANGS.filter(l => l !== L).map(l => `<meta property="og:locale:alternate" content="${LOCALE[l]}">`).join("")}
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" href="${A}img/favicon.png"><link rel="apple-touch-icon" href="${A}img/apple-touch-icon.png">
<link rel="preload" href="${A}fonts/cormorant-garamond-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${A}fonts/jost-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="alternate" type="text/plain" href="${R}llms.txt" title="LLM summary">
<style>${CSS.split("/assets/").join(A)}</style>
<script>(function(d){d.classList.add("js");setTimeout(function(){if(!window.MLready)d.classList.remove("js")},2500)})(document.documentElement)</script>
<script type="speculationrules">{"prerender":[{"where":{"href_matches":"/*"},"eagerness":"moderate"}]}</script>
<script type="application/ld+json">${JSON.stringify(graph)}</script>
</head>
<body>
<a class="skip" href="#main">${esc(t.skip)}</a>
<div class="progress" aria-hidden="true"></div>
<header class="header">
  <div class="container header__in">
    <a class="brand" href="${href(url(L, "home"))}" aria-label="Dra. Marena Linero — ${esc(t.nav.home)}">
      <img class="on-dark" src="${A}img/logo-white.png" alt="Dra. Marena Linero" width="792" height="425">
      <img class="on-light" src="${A}img/logo-black.png" alt="" width="792" height="425">
    </a>
    <nav class="nav" aria-label="Principal">${nav}</nav>
    <div class="tools">
      <div class="lang" aria-label="Idioma / Language">${langLinks}</div>
      <a class="btn btn--gold btn--sm" href="${wa0}" target="_blank" rel="noopener">${esc(t["cta.consult"])}</a>
      <button class="burger" type="button" aria-label="${esc(t.menu)}" aria-expanded="false" aria-controls="mmenu"><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="mmenu" id="mmenu">
  <ol>${mm}</ol>
  <div class="mmenu__foot"><div class="lang" aria-label="Idioma / Language">${langLinks}</div><a class="btn btn--gold" href="${wa0}" target="_blank" rel="noopener">${I.wa}${esc(t["cta.whatsapp"])}</a></div>
</div>
<main id="main">
${body({ t, href, A, R, wa0 })}
</main>
<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand"><img src="${A}img/logo-white.png" alt="Dra. Marena Linero" width="792" height="425" loading="lazy"><p>“${esc(t.tag)}”</p></div>
      <div><h3>${esc(t.fNav)}</h3><ul>${["home", "doctora", "tecnica", "turismo", "resultados", "faq", "contacto"].map(k => `<li><a href="${href(url(L, k))}">${esc(t.nav[k])}</a></li>`).join("")}</ul></div>
      <div><h3>${esc(t.fProcs)}</h3><ul>${C.procedures.slice(0, 7).map(p => `<li><a href="${href(url(L, "procs", pslug(L, p)))}">${esc(p[L][0])}</a></li>`).join("")}<li><a href="${href(url(L, "procs"))}">${esc(t.allProcs)} →</a></li></ul></div>
      <div><h3>${esc(t.fContact)}</h3><address><a href="${wa0}" target="_blank" rel="noopener">WhatsApp ${esc(CFG.whatsappDisplay)}</a><a href="${CFG.instagram}" target="_blank" rel="noopener">Instagram @dra.marena</a><span>${esc(CFG.address)}</span><span>${CFG.hours[L]}</span></address></div>
    </div>
    <p class="footer__seo">${esc(t["footer.seo"])}</p>
    <div class="footer__bottom"><span>© 2026 Dra. Marena Linero · Barranquilla, Colombia. ${esc(t["footer.rights"])} · <a href="${R}privacidad.html">${esc(t["footer.privacy"])}</a></span><span class="lang">${langLinks}</span></div>
  </div>
</footer>
<a class="fab" href="${wa0}" target="_blank" rel="noopener" aria-label="WhatsApp — ${esc(t["cta.chat"])}">${I.wa}<span>${esc(t["cta.chat"])}</span></a>
<script src="${A}js/main.js" defer></script>
</body>
</html>
`;
}

/* ---------- Bloques reutilizables ---------- */
const phero = (t, href, { crumbs, eyebrow, h, lead, side = "" }) => `<section class="phero dark">
  <div class="container">
    <ol class="crumbs" aria-label="Breadcrumb">${crumbs.map(([n, u], i) => i < crumbs.length - 1 ? `<li><a href="${href(u)}">${esc(n)}</a></li>` : `<li aria-current="page">${esc(n)}</li>`).join("")}</ol>
    <div class="${side ? "phero__grid" : ""}"><div>
      <p class="eyebrow rv">${esc(eyebrow)}</p>
      <h1 class="h1 rv">${h}</h1>
      ${lead ? `<p class="lead rv">${esc(lead)}</p>` : ""}
    </div>${side}</div>
  </div>
</section>`;
const ctaBand = (t, wa0, href, L) => `<section class="section cta-band dark">
  <div class="container"><h2 class="h2 rv">${t.ctaH}</h2><p class="lead rv">${esc(t.ctaLead)}</p>
  <div class="ctas rv"><a class="btn btn--gold" href="${wa0}" target="_blank" rel="noopener">${I.wa}${esc(t["cta.whatsapp"])}</a><a class="btn btn--ghost" href="${href(url(L, "contacto"))}">${esc(t.nav.contacto)}</a></div></div>
</section>`;
/* Frases aspiracionales por procedimiento (ES / EN / PT) */
const TAGS = {
  lipo: ["Cintura definida, contornos en alta definición", "A defined waist, high-definition contours", "Cintura definida, contornos em alta definição"],
  bbl: ["Curvas con proyección y armonía", "Curves with projection and harmony", "Curvas com projeção e harmonia"],
  tummy: ["Un abdomen firme y plano otra vez", "A firm, flat tummy once again", "Um abdômen firme e plano outra vez"],
  arms: ["Firmeza después de tu gran cambio", "Firmness after your big change", "Firmeza depois da sua grande mudança"],
  augment: ["Volumen y forma, con naturalidad", "Volume and shape, naturally", "Volume e forma, com naturalidade"],
  lift: ["Firmeza y juventud para tu escote", "Lift and youth for your neckline", "Firmeza e juventude para o seu colo"],
  reduct: ["Ligereza, proporción y bienestar", "Lightness, proportion and comfort", "Leveza, proporção e bem-estar"],
  explant: ["Renueva tu cirugía con seguridad", "Renew your surgery safely", "Renove sua cirurgia com segurança"],
  rhino: ["Armonía para tu perfil", "Harmony for your profile", "Harmonia para o seu perfil"],
  bleph: ["Una mirada descansada y luminosa", "A rested, luminous look", "Um olhar descansado e luminoso"],
  bichat: ["Pómulos marcados, rostro estilizado", "Sculpted cheekbones, a refined face", "Maçãs marcadas, rosto estilizado"],
  mommy: ["Vuelve a sentirte tú después de ser mamá", "Feel like yourself again after motherhood", "Volte a se sentir você depois de ser mãe"],
  lipoaug: ["Silueta y busto en un solo tiempo", "Silhouette and bust in one surgery", "Silhueta e busto em um só tempo"]
};
const tagOf = (L, p) => TAGS[p.id][LANGS.indexOf(L)];
const PHOTO = { lipo: 1, bbl: 5 };
const BADGE = { lipo: "featured", bbl: "most" };
const ART = {
  body: '<path d="M34 6c-3 17 8 27 8 41S30 74 33 94M66 6c3 17-8 27-8 41s12 27 9 47"/><path d="M42 47c5 2 11 2 16 0" opacity=".5"/>',
  breast: '<path d="M10 20c16 11 64 11 80 0"/><path d="M18 40c2 24 31 26 32 4M50 44c1 22 30 20 32-4"/>',
  face: '<path d="M62 8C45 8 35 20 35 36c0 6-7 12-7 16 0 3 5 3 7 4-1 3 1 6 3 7-2 2 0 5 2 6 0 7 3 12 13 13 6 1 10 4 12 10"/><path d="M50 38c3-2 7-2 9 0" opacity=".6"/>',
  combo: '<circle cx="50" cy="50" r="34"/><path d="M50 18l7 25 25 7-25 7-7 25-7-25-25-7 25-7z"/>'
};
const art = (cat, n) => `<span class="pc__art pc__art--${cat}"><svg viewBox="0 0 100 100" aria-hidden="true">${ART[cat]}</svg><b>${String(n).padStart(2, "0")}</b></span>`;
const pcard = (L, t, href, p, i, A) => {
  const u = href(url(L, "procs", pslug(L, p))), ph = PHOTO[p.id], badge = BADGE[p.id];
  return `<article class="pc rv" data-cat="${CAT_HASH[L][p.cat]}" style="--d:${i % 3}">
  <a class="pc__media" href="${u}" tabindex="-1" aria-hidden="true">${ph ? `<img src="${A}img/ig/caso-${ph}.jpg" alt="" width="640" height="800" loading="lazy">` : art(p.cat, C.procedures.indexOf(p) + 1)}${badge ? `<em class="pc__badge">${esc(badge === "featured" ? t.featured : t.most)}</em>` : ""}</a>
  <div class="pc__body">
    <span class="pc__cat">${esc(catName(L, p.cat))}</span>
    <h3><a href="${u}">${esc(p[L][0])}</a></h3>
    <p class="pc__tag">${esc(tagOf(L, p))}</p>
    <p class="pc__desc">${esc(p[L][1])}</p>
    <ul class="pc__facts"><li><small>${esc(t.dur)}</small>${esc(p.dur)}</li><li><small>${esc(t.rec)}</small>${esc(p.rec[L])}</li><li><small>${esc(t.stay)}</small>${esc(p.stay[L])}</li></ul>
    <div class="pc__acts"><a class="btn btn--sm" href="${u}">${esc(t.viewProc)}</a><a class="pc__want" href="${wa(t["wa.default"] + " — " + p[L][0])}" target="_blank" rel="noopener">${I.wa}${esc(t.want)}<span class="sr"> — ${esc(p[L][0])}</span></a></div>
  </div>
</article>`;
};
const featured = (L, t, href, A) => `<div class="pfeat">${["lipo", "bbl"].map((id, i) => { const p = C.procedures.find(q => q.id === id), u = href(url(L, "procs", pslug(L, p))); return `<article class="pfeat__item rv" style="--d:${i}">
  <a class="pfeat__media" href="${u}" tabindex="-1" aria-hidden="true"><img src="${A}img/ig/caso-${PHOTO[id]}.jpg" alt="" width="640" height="800" loading="lazy"></a>
  <div class="pfeat__body"><em class="pc__badge">${esc(i ? t.most : t.featured)}</em><h3><a href="${u}">${esc(p[L][0])}</a></h3><p class="pc__tag">${esc(tagOf(L, p))}</p><p>${esc(p[L][1])}</p>
  <ul class="pc__facts"><li><small>${esc(t.dur)}</small>${esc(p.dur)}</li><li><small>${esc(t.rec)}</small>${esc(p.rec[L])}</li><li><small>${esc(t.stay)}</small>${esc(p.stay[L])}</li></ul>
  <div class="pc__acts"><a class="btn btn--gold btn--sm" href="${u}">${esc(t.viewProc)}</a><a class="pc__want" href="${wa(t["wa.default"] + " — " + p[L][0])}" target="_blank" rel="noopener">${I.wa}${esc(t.want)}</a></div></div>
</article>`; }).join("")}</div>`;
const faqList = faqs => `<div class="acc">${faqs.map(([q, a], i) => `<details class="rv"${i === 0 ? " open" : ""}><summary>${esc(q)}</summary><div class="ans"><p>${esc(a)}</p></div></details>`).join("")}</div>`;
/* Galería estilo Instagram (como la versión anterior): texto + tarjeta de perfil con mosaico */
const gallery = (L, t, A, head = true) => `<div class="igs">
  <div>
    ${head ? `<p class="eyebrow rv">${esc(t["res.eyebrow"])}</p><h2 class="h2 rv">${t.resH}</h2>` : ""}
    <p class="lead rv" style="margin:${head ? "26px" : "0"} 0 34px">${esc(t.igText)}</p>
    <a class="btn rv" href="${CFG.instagram}" target="_blank" rel="noopener">${I.ig}${esc(t.viewIg)}</a>
    <p class="note rv">${esc(t["res.disclaimer"])}</p>
  </div>
  <div class="igs__card rv">
    <div class="igs__top"><span class="igs__av"><img src="${A}img/ig/doctora.jpg" alt="" width="720" height="900" loading="lazy"></span><div><b>dra.marena</b><span>Dra. Marena Linero Q.</span></div></div>
    <div class="igs__stats"><div><b>430</b><span>${esc(t["res.posts"])}</span></div><div><b>15,4K</b><span>${esc(t["res.followers"])}</span></div></div>
    <div class="igs__grid">${CASES.map((c, i) => `<a href="https://www.instagram.com/dra.marena/${c[1]}/${c[0]}/" target="_blank" rel="noopener"><img src="${A}img/ig/caso-${i + 1}.jpg" alt="${esc(t.alt)} ${i + 1}" width="640" height="800" loading="lazy"><span>${esc(t.tiles[i])}</span></a>`).join("")}</div>
    <a class="btn btn--ghost" href="${CFG.instagram}" target="_blank" rel="noopener">${esc(t["res.follow"])} @dra.marena</a>
  </div>
</div>`;
const igcard = (L, t, A) => `<div class="igcard rv"><div class="igcard__who"><img src="${A}img/ig/doctora.jpg" alt="" width="720" height="900" loading="lazy"><div><b>@dra.marena</b><span>Dra. Marena Linero Q.</span></div></div><div class="igcard__stats"><div><b>430</b><span>${esc(t["res.posts"])}</span></div><div><b>15,4K</b><span>${esc(t["res.followers"])}</span></div></div><a class="btn" href="${CFG.instagram}" target="_blank" rel="noopener">${I.ig}${esc(t["res.follow"])}</a></div>`;

/* ---------- Páginas ---------- */
const allFaqs = L => [...X[L].faqExtra, ...C.faq.map(f => f[L])];
const PAGES = [];
const add = (key, L, sub, fn) => PAGES.push({ key, L, sub, fn });

for (const L of LANGS) {
  const alts = (k, sub) => Object.fromEntries(LANGS.map(l => [l, url(l, k, sub ? sub(l) : undefined)]));

  /* INICIO */
  add("home", L, null, () => {
    const t = T(L), cur = url(L, "home");
    return layout({ L, cur, key: "home", title: t["meta.title"], desc: t["meta.description"], alts: alts("home"), body: ({ href, A, wa0 }) => `
<section class="hero dark" aria-labelledby="hero-title">
  <div class="container hero__grid">
    <div>
      <p class="eyebrow">${esc(t["hero.eyebrow"])}</p>
      <h1 id="hero-title">${words(t.t1)} <em>${words(t.t2, 3, t.rot)}</em></h1>
      <p class="lead">${esc(t["hero.lead"])}</p>
      <div class="ctas"><a class="btn btn--gold" href="${wa0}" target="_blank" rel="noopener">${I.wa}${esc(t["cta.whatsapp"])}</a><a class="btn btn--ghost" href="${href(url(L, "tecnica"))}">${esc(t.cta2)}</a></div>
      <div class="trust">${t.trust.map(x => `<span>${I.check}${esc(x)}</span>`).join("")}</div>
    </div>
    <div class="portrait">
      <div class="portrait__frame"><img src="${A}img/ig/doctora.jpg" alt="${esc(t.photoAlt)}" width="720" height="900" fetchpriority="high"></div>
      <a class="float float--a" href="${href(url(L, "tecnica"))}"><small>${esc(t.featured)}</small><strong>Técnica Linero HD</strong></a>
      <a class="float float--b" href="${CFG.instagram}" target="_blank" rel="noopener"><strong>15,4K</strong><small>${esc(t.comm)}</small></a>
    </div>
  </div>
  <span class="scroll-cue" aria-hidden="true"></span>
</section>
<div class="marquee" aria-hidden="true"><div class="marquee__track">${[0, 1].map(() => C.procedures.map(p => `<span>${esc(p[L][0])}</span>`).join("")).join("")}</div></div>
<div class="white"><div class="container"><div class="stats">
  <div class="stat rv"><strong data-count="15.4" data-suffix="K">15,4K</strong><span>${esc(t["stats.community"])}</span></div>
  <div class="stat rv" style="--d:1"><strong>3</strong><span>${esc(t["stats.languages"])}</span></div>
  <div class="stat rv" style="--d:2"><strong data-count="360" data-suffix="°">360°</strong><span>${esc(t["stats.care"])}</span></div>
  <div class="stat rv" style="--d:3"><strong>24/7</strong><span>${esc(t["stats.support"])}</span></div>
</div></div></div>
<section class="section">
  <div class="container split">
    <figure class="frame frame--arch rv"><div class="media media--arch rv-img"><img src="${A}img/ig/doctora.jpg" alt="${esc(t.photoAlt)}" width="720" height="900" loading="lazy"></div></figure>
    <div>
      <p class="eyebrow rv">${esc(t["doctor.eyebrow"])}</p>
      <h2 class="h2 rv">${t.docH}</h2>
      <ul class="creds rv">${t.cred.map(c => `<li>${I.check}${esc(c)}</li>`).join("")}</ul>
      <p class="lead rv" style="margin-top:28px">${esc(t["doctor.lead"])}</p>
      <a class="link rv" href="${href(url(L, "doctora"))}">${esc(t.docLink)}${I.arrow}</a>
    </div>
  </div>
</section>
<section class="section dark">
  <div class="container split split--rev">
    <figure class="frame rv"><div class="media rv-img"><img src="${A}img/ig/caso-1.jpg" alt="${esc(t.alt)} 1" width="640" height="800" loading="lazy"></div></figure>
    <div>
      <p class="eyebrow rv">${esc(t.featured)}</p>
      <h2 class="h2 rv">${t.techH}</h2>
      <p class="rv" style="font:italic 300 clamp(1.5rem,2.4vw,2rem)/1.3 var(--serif);color:var(--gold-l);margin:26px 0 18px">“${esc(t.tag)}”</p>
      <p class="lead rv">${esc(t.hd)}</p>
      <a class="link rv" href="${href(url(L, "tecnica"))}">${esc(t.techLink)}${I.arrow}</a>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <header class="section-head section-head--row"><div><p class="eyebrow rv">${esc(t["proc.eyebrow"])}</p><h2 class="h2 rv">${t.procsH}</h2></div><a class="link rv" href="${href(url(L, "procs"))}">${esc(t.allProcs)}${I.arrow}</a></header>
    <p class="lead rv" style="margin:-40px 0 56px">${esc(t.procsLead)}</p>
    <div class="cats">${C.categories.map((c, i) => `<a class="cat rv" style="--d:${i}" href="${href(url(L, "procs"))}#${CAT_HASH[L][c.id]}"><b>0${i + 1}</b><svg class="cat__art" viewBox="0 0 100 100" aria-hidden="true">${ART[c.id]}</svg><h3>${esc(c[L])}</h3>${I.ne}<ul>${C.procedures.filter(p => p.cat === c.id).map(p => `<li>${esc(p[L][0])}</li>`).join("")}</ul></a>`).join("")}</div>
  </div>
</section>
<section class="section dark">
  <div class="container split split--top">
    <div>
      <p class="eyebrow rv">${esc(t["tour.eyebrow"])}</p>
      <h2 class="h2 rv">${esc(t["tour.title1"])} <em>${esc(t["tour.title2"])}</em></h2>
      <p class="lead rv" style="margin:26px 0 30px">${esc(t["tour.lead"])}</p>
      <a class="btn btn--gold rv" href="${href(url(L, "turismo"))}">${esc(t.tourLink)}</a>
    </div>
    <ul class="why">${C.why[L].map((w, i) => `<li class="rv" style="--d:${i}">${I.check}${esc(w)}</li>`).join("")}</ul>
  </div>
</section>
<section class="section ivory2">
  <div class="container">
    ${gallery(L, t, A)}
  </div>
</section>
<section class="section">
  <div class="container faq">
    <header class="section-head"><p class="eyebrow rv">${esc(t["faq.eyebrow"])}</p><h2 class="h2 rv">${esc(t["faq.title"])}</h2><a class="link rv" href="${href(url(L, "faq"))}">${esc(t.faqLink)}${I.arrow}</a></header>
    ${faqList(allFaqs(L).slice(0, 5))}
  </div>
</section>
${ctaBand(t, wa0, href, L)}` , ld: [faqLd(L, allFaqs(L).slice(0, 5))] });
  });

  /* LA DOCTORA */
  add("doctora", L, null, () => {
    const t = T(L), cur = url(L, "doctora"), cr = [[t.nav.home, url(L, "home")], [t.nav.doctora, cur]];
    return layout({ L, cur, key: "doctora", title: t.meta.doctora[0], desc: t.meta.doctora[1], alts: alts("doctora"), crumbs: cr, body: ({ href, A, wa0 }) => `
${phero(t, href, { crumbs: cr, eyebrow: t["doctor.eyebrow"], h: "Dra. Marena <em>Linero</em>", lead: t.tag })}
<section class="section">
  <div class="container split split--top">
    <div class="sticky-media"><figure class="frame frame--arch rv"><div class="media media--arch rv-img"><img src="${A}img/ig/doctora.jpg" alt="${esc(t.photoAlt)}" width="720" height="900" fetchpriority="high"><figcaption><span>Dra. Marena Linero Q.</span><a href="${CFG.instagram}" target="_blank" rel="noopener">@dra.marena</a></figcaption></div></figure></div>
    <div>
      <ul class="creds rv" style="margin-top:0">${t.cred.map(c => `<li>${I.check}${esc(c)}</li>`).join("")}</ul>
      <p class="lead rv" style="margin-top:28px;color:var(--ink)">${esc(t["doctor.lead"])}</p>
      <div class="signature rv"><small>Técnica Linero HD</small><p class="q">“${esc(t.tag)}”</p><p>${esc(t.hd)}</p></div>
      <p class="rv">${esc(t["doctor.p1"])}</p>
      <p class="rv">${esc(t["doctor.p2"])}</p>
      <div class="ctas rv" style="margin-top:32px"><a class="btn" href="${wa0}" target="_blank" rel="noopener">${esc(t["cta.consult"])}</a><a class="btn btn--ghost" href="${href(url(L, "tecnica"))}">${esc(t.cta2)}</a></div>
    </div>
  </div>
</section>
<section class="section white">
  <div class="container">
    <header class="section-head"><p class="eyebrow rv">${esc(t["pillars.eyebrow"])}</p><h2 class="h2 rv">${t.pillarsH}</h2></header>
    <div class="pillars">${C.pillars.map((p, i) => `<div class="pillar rv" style="--d:${i}"><b>${p.n}</b><h3>${esc(p[L][0])}</h3><p>${esc(p[L][1])}</p></div>`).join("")}</div>
    <header class="section-head" style="margin-top:clamp(64px,8vw,110px);margin-bottom:32px"><h2 class="h2 rv">${t.valuesH}</h2></header>
    <ul class="values rv">${C.values[L].map(v => `<li>${I.check}${esc(v)}</li>`).join("")}</ul>
  </div>
</section>
${ctaBand(t, wa0, href, L)}` });
  });

  /* TÉCNICA LINERO HD */
  add("tecnica", L, null, () => {
    const t = T(L), cur = url(L, "tecnica"), cr = [[t.nav.home, url(L, "home")], [t.nav.tecnica, cur]];
    const lipo = C.procedures.find(p => p.id === "lipo"), bbl = C.procedures.find(p => p.id === "bbl");
    return layout({ L, cur, key: "tecnica", title: t.meta.tecnica[0], desc: t.meta.tecnica[1], alts: alts("tecnica"), crumbs: cr,
      ld: [{ "@type": "MedicalProcedure", name: "Técnica Linero HD", alternateName: lipo[L][0], description: t.hd, procedureType: "https://schema.org/SurgicalProcedure", howPerformed: t.hdSteps.map(s => s[0]).join(" → ") }],
      body: ({ href, A, wa0 }) => `
${phero(t, href, { crumbs: cr, eyebrow: t.featured, h: t.techH, lead: t.tag, side: `<dl class="facts rv"><div><dt>${esc(t.dur)}</dt><dd>${esc(lipo.dur)}</dd></div><div><dt>${esc(t.rec)}</dt><dd>${esc(lipo.rec[L])}</dd></div><div><dt>${esc(t.stay)}</dt><dd>${esc(lipo.stay[L])}</dd></div></dl>` })}
<section class="section">
  <div class="container split split--top">
    <div>
      <h2 class="h2 rv">${esc(t.techWhat)}</h2>
      <p class="rv" style="font:400 clamp(1.3rem,1.9vw,1.6rem)/1.5 var(--serif);margin:28px 0 20px">${esc(t.hd)}</p>
      <p class="lead rv">${esc(t.hd2)}</p>
      <div class="ctas rv" style="margin-top:32px"><a class="btn" href="${wa(t["wa.default"] + " — Técnica Linero HD")}" target="_blank" rel="noopener">${I.wa}${esc(t.askWa)}</a><a class="btn btn--ghost" href="${href(url(L, "procs", pslug(L, bbl)))}">${esc(bbl[L][0])}</a></div>
    </div>
    <figure class="frame rv"><div class="media rv-img"><img src="${A}img/ig/caso-2.jpg" alt="${esc(t.alt)} 2" width="640" height="800" loading="lazy"></div></figure>
  </div>
</section>
<section class="section white">
  <div class="container narrow">
    <header class="section-head"><p class="eyebrow rv">Técnica Linero HD</p><h2 class="h2 rv">${t.techSteps}</h2></header>
    <ol class="steps">${t.hdSteps.map(([h, p]) => `<li class="rv"><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join("")}</ol>
    <p class="note">${esc(t.techNote)}</p>
  </div>
</section>
<section class="section ivory2">
  <div class="container">
    ${gallery(L, t, A)}
  </div>
</section>
${ctaBand(t, wa0, href, L)}` });
  });

  /* PROCEDIMIENTOS */
  add("procs", L, null, () => {
    const t = T(L), cur = url(L, "procs"), cr = [[t.nav.home, url(L, "home")], [t.nav.procs, cur]];
    return layout({ L, cur, key: "procs", title: t.meta.procs[0], desc: t.meta.procs[1], alts: alts("procs"), crumbs: cr,
      ld: [{ "@type": "ItemList", itemListElement: C.procedures.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: SITE + "/" + url(L, "procs", pslug(L, p)), name: p[L][0] })) }],
      body: ({ href, A, wa0 }) => `
${phero(t, href, { crumbs: cr, eyebrow: t["proc.eyebrow"], h: t["proc.title"].replace(/(\S+ \S+)$/, "<em>$1</em>"), lead: t["proc.lead"] })}
<section class="section ivory2">
  <div class="container">
    <header class="section-head"><p class="eyebrow rv">Dra. Marena Linero</p><h2 class="h2 rv">${t.featH}</h2></header>
    ${featured(L, t, href, A)}
  </div>
</section>
<section class="section">
  <div class="container">
    <header class="section-head"><h2 class="h2 rv">${t.allH}</h2></header>
    <div class="tabs" role="tablist" aria-label="${esc(t["proc.eyebrow"])}">
      <button class="tab" role="tab" type="button" data-cat="all" aria-selected="true" aria-controls="pgrid">${esc(t.all)} <i>${C.procedures.length}</i></button>
      ${C.categories.map(c => `<button class="tab" role="tab" type="button" data-cat="${CAT_HASH[L][c.id]}" aria-selected="false" tabindex="-1" aria-controls="pgrid">${esc(c[L])} <i>${C.procedures.filter(p => p.cat === c.id).length}</i></button>`).join("")}
    </div>
    <div class="pgrid2" id="pgrid" role="tabpanel">${C.procedures.map((p, i) => pcard(L, t, href, p, i, A)).join("")}</div>
    <p class="note">${esc(t["proc.disclaimer"])} ${esc(t.procsNote)}</p>
  </div>
</section>
${ctaBand(t, wa0, href, L)}` });
  });

  /* FICHA DE CADA PROCEDIMIENTO */
  for (const p of C.procedures) add("proc", L, p.id, () => {
    const t = T(L), cur = url(L, "procs", pslug(L, p)), name = p[L][0];
    const cr = [[t.nav.home, url(L, "home")], [t.nav.procs, url(L, "procs")], [name, cur]];
    const rel = C.procedures.filter(q => q.cat === p.cat && q.id !== p.id).concat(C.procedures.filter(q => q.cat !== p.cat && ["lipo", "bbl", "tummy"].includes(q.id) && q.id !== p.id)).slice(0, 4);
    const msg = t["wa.default"] + " — " + name;
    return layout({ L, cur, key: "procs", title: t.meta.proc.replace("{p}", name), desc: `${p[L][1]} ${t.dur}: ${p.dur} · ${t.rec}: ${p.rec[L]} · ${t.stay}: ${p.stay[L]}.`, alts: alts("procs", l => pslug(l, p)), crumbs: cr,
      ld: [{ "@type": "MedicalProcedure", name, description: p[L][1], procedureType: "https://schema.org/SurgicalProcedure", bodyLocation: { body: "Body", breast: "Breast", face: "Face", combo: "Body" }[p.cat], followup: `${t.rec}: ${p.rec[L]}`, howPerformed: C.timeline.map(s => s[L][0]).join(" → "), url: SITE + "/" + cur }],
      body: ({ href, wa0 }) => `
${phero(t, href, { crumbs: cr, eyebrow: catName(L, p.cat), h: esc(name), lead: tagOf(L, p), side: `<dl class="facts rv"><div><dt>${esc(t.dur)}</dt><dd>${esc(p.dur)}</dd></div><div><dt>${esc(t.rec)}</dt><dd>${esc(p.rec[L])}</dd></div><div><dt>${esc(t.stay)}</dt><dd>${esc(p.stay[L])}</dd></div></dl>` })}
<section class="section">
  <div class="container pdetail">
    <div>
      <p class="big rv">${esc(p[L][1])}</p>
      ${p.id === "lipo" ? `<div class="signature rv"><small>Técnica Linero HD</small><p class="q">“${esc(t.tag)}”</p><p>${esc(t.hd)}</p></div>` : ""}
      <h2 class="h2 rv" style="font-size:clamp(2rem,3.4vw,3rem);margin-top:40px">${t.process}</h2>
      <ol class="steps">${C.timeline.map(s => `<li class="rv"><h3>${esc(s[L][0])}</h3><p>${esc(s[L][1])}</p></li>`).join("")}</ol>
      <p class="note">${esc(t["proc.disclaimer"])}</p>
    </div>
    <aside class="aside rv">
      <p class="eyebrow" style="margin:0">${esc(name)}</p>
      <h2>${esc(t.asideH)}</h2>
      <p>${esc(t.asideP)}</p>
      <a class="btn btn--gold" href="${wa(msg)}" target="_blank" rel="noopener">${I.wa}${esc(t.askWa)}</a>
      <a class="btn btn--ghost" href="${href(url(L, "turismo"))}#planificador">${esc(t.planTrip)}</a>
      <a class="link" href="${href(url(L, "procs"))}" style="justify-self:start">${esc(t.back)}${I.arrow}</a>
    </aside>
  </div>
</section>
<section class="section white">
  <div class="container">
    <header class="section-head"><h2 class="h2 rv">${t.related}</h2></header>
    <div class="related">${rel.map(q => `<a class="rv" href="${href(url(L, "procs", pslug(L, q)))}"><small>${esc(catName(L, q.cat))}</small><strong>${esc(q[L][0])}</strong></a>`).join("")}</div>
  </div>
</section>
${ctaBand(t, wa0, href, L)}` });
  });

  /* TURISMO MÉDICO */
  add("turismo", L, null, () => {
    const t = T(L), cur = url(L, "turismo"), cr = [[t.nav.home, url(L, "home")], [t.nav.turismo, cur]];
    return layout({ L, cur, key: "turismo", title: t.meta.turismo[0], desc: t.meta.turismo[1], alts: alts("turismo"), crumbs: cr, body: ({ href, wa0 }) => `
${phero(t, href, { crumbs: cr, eyebrow: t["tour.eyebrow"], h: `${esc(t["tour.title1"])} <em>${esc(t["tour.title2"])}</em>`, lead: t["tour.lead"] })}
<section class="dark" style="padding-top:clamp(64px,8vw,110px)">
  <div class="hs">
    <div class="hs__sticky">
      <div class="container"><h2 class="hs__title">${esc(t.stepsT)}</h2></div>
      <ol class="hs__track" tabindex="0" aria-label="${esc(t.stepsT)}">${C.timeline.map(s => `<li class="step"><div><h3>${esc(s[L][0])}</h3><p>${esc(s[L][1])}</p></div></li>`).join("")}</ol>
      <div class="hs__bar" aria-hidden="true"><i></i></div>
    </div>
  </div>
  <div class="container section" style="padding-top:clamp(40px,6vw,80px)">
    <header class="section-head"><p class="eyebrow rv">${esc(t["tour.incEyebrow"])}</p><h2 class="h2 rv">${t.incH}</h2></header>
    <div class="bento">${C.includes.map((x, i) => `<div class="inc rv" style="--d:${i % 3}">${svgI(I.inc[i])}<p>${esc(x[L])}</p></div>`).join("")}</div>
    <div class="split split--top" style="margin-top:clamp(80px,10vw,140px)">
      <div><p class="eyebrow rv">${esc(t["tour.whyEyebrow"])}</p><h2 class="h2 rv">${t.whyH}</h2><p class="lead rv" style="margin-top:26px">${esc(t["tour.whyText"])}</p></div>
      <ul class="why">${C.why[L].map((w, i) => `<li class="rv" style="--d:${i}">${I.check}${esc(w)}</li>`).join("")}</ul>
    </div>
  </div>
</section>
<section class="section" id="planificador">
  <div class="container">
    <header class="section-head"><p class="eyebrow rv">${esc(t["tour.eyebrow"])}</p><h2 class="h2 rv">${t.planH}</h2><p class="lead rv">${esc(t.planLead)}</p></header>
    <div class="planner rv" data-wa="${WA}" data-days="${esc(t.days)}" data-weeks="${esc(t.weeks)}" data-empty="${esc(t.pEmpty)}" data-msg="${esc(t.pMsg)}" data-base="${esc(t["wa.default"])}">
      <div class="planner__pick">${C.categories.map(c => `<fieldset><legend>${esc(c[L])}</legend><div class="chips">${C.procedures.filter(p => p.cat === c.id).map(p => { const w = toWeeks(p.rec[L]); return `<label class="chip"><input type="checkbox" value="${esc(p[L][0])}" data-stay="${esc(p.stay.es)}" data-rec="${w[0]}-${w[1]}"><span>${esc(p[L][0])}</span></label>`; }).join("")}</div></fieldset>`).join("")}</div>
      <div class="planner__out" aria-live="polite">
        <p class="planner__sel"></p>
        <dl><div><dt>${esc(t.pN)}</dt><dd data-o="n">—</dd></div><div><dt>${esc(t.pStay)}</dt><dd data-o="stay">—</dd></div><div><dt>${esc(t.pRec)}</dt><dd data-o="rec">—</dd></div></dl>
        <p>${esc(t.pNote)}</p>
        <a class="btn" href="${wa0}" target="_blank" rel="noopener">${I.wa}${esc(t.pBtn)}</a>
      </div>
    </div>
  </div>
</section>
${ctaBand(t, wa0, href, L)}` });
  });

  /* RESULTADOS */
  add("resultados", L, null, () => {
    const t = T(L), cur = url(L, "resultados"), cr = [[t.nav.home, url(L, "home")], [t.nav.resultados, cur]];
    return layout({ L, cur, key: "resultados", title: t.meta.resultados[0], desc: t.meta.resultados[1], alts: alts("resultados"), crumbs: cr, body: ({ href, A, wa0 }) => `
${phero(t, href, { crumbs: cr, eyebrow: t["res.eyebrow"], h: t.resH, lead: t.resText })}
<section class="section">
  <div class="container">
    ${gallery(L, t, A, false)}
  </div>
</section>
${ctaBand(t, wa0, href, L)}` });
  });

  /* PREGUNTAS FRECUENTES */
  add("faq", L, null, () => {
    const t = T(L), cur = url(L, "faq"), cr = [[t.nav.home, url(L, "home")], [t.nav.faq, cur]];
    return layout({ L, cur, key: "faq", title: t.meta.faq[0], desc: t.meta.faq[1], alts: alts("faq"), crumbs: cr, ld: [faqLd(L, allFaqs(L))], body: ({ href, wa0 }) => `
${phero(t, href, { crumbs: cr, eyebrow: t["faq.eyebrow"], h: esc(t["faq.title"]) })}
<section class="section"><div class="container narrow">${faqList(allFaqs(L))}</div></section>
${ctaBand(t, wa0, href, L)}` });
  });

  /* CONTACTO */
  add("contacto", L, null, () => {
    const t = T(L), cur = url(L, "contacto"), cr = [[t.nav.home, url(L, "home")], [t.nav.contacto, cur]];
    return layout({ L, cur, key: "contacto", title: t.meta.contacto[0], desc: t.meta.contacto[1], alts: alts("contacto"), crumbs: cr, body: ({ href, R, wa0 }) => `
${phero(t, href, { crumbs: cr, eyebrow: t["contact.eyebrow"], h: t.contactH, lead: t["contact.lead"] })}
<section class="section">
  <div class="container contact">
    <form class="form rv" id="contactForm" novalidate data-wa="${WA}" data-tpl="${esc(t["wa.form"])}" data-err="${esc(t["form.required"])}">
      <div class="form__row">
        <label class="field"><span>${esc(t["form.name"])} *</span><input name="name" required autocomplete="name"></label>
        <label class="field"><span>${esc(t["form.country"])} *</span><select name="country" required autocomplete="country-name"><option value="">${esc(t["form.select"])}</option>${C.countries.map(c => `<option>${esc(c)}</option>`).join("")}</select></label>
      </div>
      <div class="form__row">
        <label class="field"><span>${esc(t["form.procedure"])} *</span><select name="procedure" required><option value="">${esc(t["form.select"])}</option>${C.procedures.map(p => `<option>${esc(p[L][0])}</option>`).join("")}<option>${esc(t["form.other"])}</option></select></label>
        <label class="field"><span>${esc(t["form.date"])}</span><input name="date" type="month"></label>
      </div>
      <label class="field"><span>${esc(t["form.message"])}</span><textarea name="message" rows="4"></textarea></label>
      <p class="form__err" role="alert"></p>
      <button class="btn" type="submit">${I.wa}${esc(t["form.submit"])}</button>
      <p class="form__note">${esc(t["form.note"])} <a href="${R}privacidad.html">${esc(t["footer.privacy"])}</a></p>
    </form>
    <aside class="info rv" aria-label="${esc(t["contact.eyebrow"])}">
      <div><h3>${esc(t["contact.whatsapp"])}</h3><a href="${wa0}" target="_blank" rel="noopener">${esc(CFG.whatsappDisplay)}</a></div>
      <div><h3>${esc(t["contact.location"])}</h3><p>${esc(CFG.address)}</p><a class="link" href="${CFG.mapsLink}" target="_blank" rel="noopener">${esc(t["contact.directions"])}${I.arrow}</a></div>
      <div><h3>${esc(t["contact.hours"])}</h3><p style="font-size:1.1rem">${CFG.hours[L]}</p></div>
      <div><h3>Instagram</h3><a href="${CFG.instagram}" target="_blank" rel="noopener">@dra.marena</a></div>
      <div><h3>${esc(t["contact.languages"])}</h3><p>Español · English · Português</p></div>
    </aside>
  </div>
  <div class="container"><div class="map rv"><button class="btn btn--gold" type="button" data-map="${CFG.mapsEmbed}" data-title="${esc(t.mapTitle)}">${esc(t.mapLoad)}</button></div></div>
</section>` });
  });
}

/* ---------- Privacidad ---------- */
function privacy() {
  const body = fs.readFileSync(path.join(SRC, "privacidad.html"), "utf8");
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Política de privacidad | Dra. Marena Linero</title><meta name="description" content="Política de tratamiento de datos personales de la Dra. Marena Linero, médica con formación en cirugía estética en Barranquilla, Colombia (Ley 1581 de 2012).">
<meta name="robots" content="index, follow"><link rel="canonical" href="${SITE}/privacidad.html"><meta name="theme-color" content="#121110">
<link rel="icon" type="image/png" href="assets/img/favicon.png"><style>${CSS.split("/assets/").join("assets/")}.legal{max-width:760px;padding-block:80px}.legal h1{font-size:clamp(2.4rem,6vw,3.6rem);margin:12px 0 24px;font-weight:300}.legal h2{font-size:1.7rem;margin:36px 0 12px}.legal li{margin-bottom:8px}</style></head>
<body><main class="container legal"><a class="link" href="./">${X.es.privacy}</a>${body}</main></body></html>`;
}

/* ---------- SEO / GEO ---------- */
function sitemap() {
  const groups = [];
  for (const k of ["home", "doctora", "tecnica", "procs", "turismo", "resultados", "faq", "contacto"]) groups.push(Object.fromEntries(LANGS.map(l => [l, url(l, k)])));
  for (const p of C.procedures) groups.push(Object.fromEntries(LANGS.map(l => [l, url(l, "procs", pslug(l, p))])));
  const out = [];
  for (const g of groups) for (const l of LANGS) out.push(`<url><loc>${SITE}/${g[l]}</loc><lastmod>${UPDATED}</lastmod>${LANGS.map(x => `<xhtml:link rel="alternate" hreflang="${x}" href="${SITE}/${g[x]}"/>`).join("")}<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/${g.es}"/></url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${out.join("\n")}\n<url><loc>${SITE}/privacidad.html</loc><lastmod>${UPDATED}</lastmod></url>\n</urlset>\n`;
}
const robots = () => `# Buscadores y asistentes de IA son bienvenidos (SEO + GEO)
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
function llms() {
  const t = T("es");
  return `# Dra. Marena Linero — Cirugía Estética en Barranquilla, Colombia

> La Dra. Marena Linero Q. es médica (Universidad Metropolitana) con formación en cirugía estética (ACOLMECE) en Barranquilla (Atlántico, Colombia). Es la creadora de la Técnica Linero HD, un método de lipoescultura de alta definición, y ofrece un programa de turismo médico para pacientes internacionales con atención en español, inglés y portugués.
> Dr. Marena Linero is a physician trained in cosmetic surgery in Barranquilla, Colombia, creator of the Linero HD Technique (high-definition liposculpture), offering an all-inclusive medical tourism program for international patients.

## Datos clave
- Nombre: Dra. Marena Linero Q. (Dr. Marena Linero)
- Formación: Médica, Universidad Metropolitana (Barranquilla) · Cirugía estética, ACOLMECE
- Técnica insignia: Técnica Linero HD (lipoescultura de alta definición) — "${t.tag}"
- Ciudad: Barranquilla, Atlántico, Colombia
- Idiomas: español, inglés, portugués
- Contacto: WhatsApp ${CFG.whatsappDisplay} · Instagram @dra.marena (${CFG.instagram})
- Valoración: presencial o virtual por videollamada

## Páginas principales
${["home", "doctora", "tecnica", "procs", "turismo", "resultados", "faq", "contacto"].map(k => `- [${t.nav[k]}](${SITE}/${url("es", k)}) · [EN](${SITE}/${url("en", k)}) · [PT](${SITE}/${url("pt", k)})`).join("\n")}

## Procedimientos (duración · recuperación · estadía sugerida en Barranquilla)
${C.procedures.map(p => `- [${p.es[0]}](${SITE}/${url("es", "procs", pslug("es", p))}) / ${p.en[0]}: ${p.es[1]} (${p.dur} · ${p.rec.es} · ${p.stay.es})`).join("\n")}

## Turismo médico — etapas
${C.timeline.map((s, i) => `${i + 1}. ${s.es[0]}: ${s.es[1]}`).join("\n")}

## Incluye
${C.includes.map(x => `- ${x.es}`).join("\n")}

## Preguntas frecuentes
${allFaqs("es").map(([q, a]) => `### ${q}\n${a}`).join("\n\n")}
`;
}

/* ---------- Escribir ---------- */
let n = 0, kb = 0;
const write = (rel, data) => { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, data); n++; kb += Buffer.byteLength(data) / 1024; };
for (const pg of PAGES) {
  const cur = pg.key === "proc" ? url(pg.L, "procs", pslug(pg.L, C.procedures.find(p => p.id === pg.sub))) : url(pg.L, pg.key);
  write(cur + "index.html", pg.fn());
}
write("privacidad.html", privacy());
write("sitemap.xml", sitemap());
write("robots.txt", robots());
write("llms.txt", llms());
write("assets/js/main.js", fs.readFileSync(path.join(SRC, "main.js"), "utf8").replace(/^\s*\/\*.*\*\/\s*$/gm, "").replace(/\n\s+/g, "\n"));
console.log(`✓ ${n} archivos (${PAGES.length} páginas HTML) · ${kb.toFixed(0)} KB en total`);
