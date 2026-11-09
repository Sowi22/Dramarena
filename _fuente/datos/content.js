/* Contenido dinámico trilingüe (ES / EN / PT) */
window.CONTENT = {
  pillars: [
    { n: "01", es: ["Seguridad primero", "Cirugías en clínicas habilitadas, con anestesiólogo certificado y protocolos estrictos de prevención."],
               en: ["Safety first", "Surgery in accredited clinics, with a board-certified anesthesiologist and strict prevention protocols."],
               pt: ["Segurança em primeiro lugar", "Cirurgias em clínicas habilitadas, com anestesiologista certificado e protocolos rigorosos de prevenção."] },
    { n: "02", es: ["Naturalidad", "Proporciones armónicas que respetan tu anatomía. Resultados que se ven bien, no exagerados."],
               en: ["Natural results", "Harmonious proportions that respect your anatomy. Results that look beautiful, never overdone."],
               pt: ["Naturalidade", "Proporções harmônicas que respeitam sua anatomia. Resultados bonitos, nunca exagerados."] },
    { n: "03", es: ["Acompañamiento real", "Contacto directo durante toda tu recuperación, también cuando ya estás de regreso en casa."],
               en: ["Real support", "Direct contact throughout your recovery, including after you return home."],
               pt: ["Acompanhamento real", "Contato direto durante toda a recuperação, também quando você já voltou para casa."] }
  ],

  values: {
    es: ["Valoración honesta y personalizada", "Plan quirúrgico diseñado para tu cuerpo", "Equipo médico interdisciplinario", "Seguimiento postoperatorio cercano"],
    en: ["Honest, personalized consultation", "A surgical plan designed for your body", "Interdisciplinary medical team", "Close post-operative follow-up"],
    pt: ["Avaliação honesta e personalizada", "Plano cirúrgico desenhado para o seu corpo", "Equipe médica interdisciplinar", "Acompanhamento pós-operatório próximo"]
  },

  categories: [
    { id: "body",   es: "Corporal", en: "Body",    pt: "Corporal" },
    { id: "breast", es: "Senos",    en: "Breast",  pt: "Mamas" },
    { id: "face",   es: "Facial",   en: "Face",    pt: "Facial" },
    { id: "combo",  es: "Combinados", en: "Combined", pt: "Combinados" }
  ],

  procedures: [
    { id: "lipo", cat: "body", dur: "3–5 h", rec: { es: "2–3 semanas", en: "2–3 weeks", pt: "2–3 semanas" }, stay: { es: "10–14 días", en: "10–14 days", pt: "10–14 dias" },
      es: ["Lipoescultura HD · Técnica Linero", "Su técnica insignia: lipoescultura de alta definición que elimina la grasa localizada y diseña cintura, abdomen, espalda, brazos y muslos con precisión."],
      en: ["HD Liposculpture · Linero Technique", "Her signature technique: high-definition liposculpture that removes stubborn fat and sculpts your waist, abdomen, back, arms and thighs with precision."],
      pt: ["Lipo HD · Técnica Linero", "Sua técnica assinatura: lipoescultura de alta definição que elimina a gordura localizada e desenha cintura, abdômen, costas, braços e coxas com precisão."] },
    { id: "bbl", cat: "body", dur: "4–5 h", rec: { es: "3–4 semanas", en: "3–4 weeks", pt: "3–4 semanas" }, stay: { es: "14 días", en: "14 days", pt: "14 dias" },
      es: ["Transferencia glútea / BBL", "Transferencia de grasa propia a los glúteos para lograr volumen y proyección con una silueta armónica. Se combina con la lipoescultura en una sola cirugía."],
      en: ["Brazilian Butt Lift (BBL)", "Transfers your own fat to the buttocks for volume and projection with a balanced silhouette."],
      pt: ["Gluteoplastia / BBL", "Transferência de gordura própria para os glúteos, com volume e projeção em uma silhueta harmônica."] },
    { id: "tummy", cat: "body", dur: "3–4 h", rec: { es: "3–4 semanas", en: "3–4 weeks", pt: "3–4 semanas" }, stay: { es: "14–15 días", en: "14–15 days", pt: "14–15 dias" },
      es: ["Abdominoplastia", "Retira el exceso de piel y reafirma la pared abdominal, ideal después de embarazos o pérdida de peso."],
      en: ["Tummy tuck (Abdominoplasty)", "Removes excess skin and tightens the abdominal wall — ideal after pregnancy or weight loss."],
      pt: ["Abdominoplastia", "Retira o excesso de pele e firma a parede abdominal, ideal após gestações ou perda de peso."] },
    { id: "arms", cat: "body", dur: "2–3 h", rec: { es: "2 semanas", en: "2 weeks", pt: "2 semanas" }, stay: { es: "10 días", en: "10 days", pt: "10 dias" },
      es: ["Braquioplastia / Post bariátrica", "Corrige la flacidez de brazos, muslos y abdomen tras grandes pérdidas de peso."],
      en: ["Arm lift / Post-bariatric", "Corrects sagging skin on arms, thighs and abdomen after major weight loss."],
      pt: ["Braquioplastia / Pós-bariátrica", "Corrige a flacidez de braços, coxas e abdômen após grande perda de peso."] },
    { id: "augment", cat: "breast", dur: "1.5–2 h", rec: { es: "1–2 semanas", en: "1–2 weeks", pt: "1–2 semanas" }, stay: { es: "7–10 días", en: "7–10 days", pt: "7–10 dias" },
      es: ["Mamoplastia de aumento", "Implantes de última generación para aumentar volumen y mejorar la forma de los senos de manera natural."],
      en: ["Breast augmentation", "Latest-generation implants to add volume and improve breast shape naturally."],
      pt: ["Prótese de mama (aumento)", "Implantes de última geração para aumentar o volume e melhorar a forma das mamas com naturalidade."] },
    { id: "lift", cat: "breast", dur: "2–3 h", rec: { es: "2 semanas", en: "2 weeks", pt: "2 semanas" }, stay: { es: "10 días", en: "10 days", pt: "10 dias" },
      es: ["Mastopexia (levantamiento)", "Eleva y redefine los senos caídos, con o sin implantes, recuperando firmeza y juventud."],
      en: ["Breast lift (Mastopexy)", "Lifts and reshapes sagging breasts, with or without implants, restoring firmness."],
      pt: ["Mastopexia (lifting de mama)", "Eleva e redefine as mamas caídas, com ou sem implantes, devolvendo firmeza."] },
    { id: "reduct", cat: "breast", dur: "3 h", rec: { es: "2–3 semanas", en: "2–3 weeks", pt: "2–3 semanas" }, stay: { es: "10–12 días", en: "10–12 days", pt: "10–12 dias" },
      es: ["Mamoplastia de reducción", "Disminuye el tamaño de los senos, alivia molestias de espalda y mejora la proporción corporal."],
      en: ["Breast reduction", "Reduces breast size, relieves back discomfort and improves body proportion."],
      pt: ["Mamoplastia redutora", "Reduz o tamanho das mamas, alivia dores nas costas e melhora a proporção corporal."] },
    { id: "explant", cat: "breast", dur: "2 h", rec: { es: "1–2 semanas", en: "1–2 weeks", pt: "1–2 semanas" }, stay: { es: "7–10 días", en: "7–10 days", pt: "7–10 dias" },
      es: ["Recambio / retiro de implantes", "Sustitución o retiro de implantes mamarios con remodelación del tejido."],
      en: ["Implant exchange / removal", "Replacement or removal of breast implants with tissue reshaping."],
      pt: ["Troca / retirada de implantes", "Substituição ou retirada de implantes mamários com remodelação do tecido."] },
    { id: "rhino", cat: "face", dur: "2–3 h", rec: { es: "2 semanas", en: "2 weeks", pt: "2 semanas" }, stay: { es: "10 días", en: "10 days", pt: "10 dias" },
      es: ["Rinoplastia", "Armoniza la forma de la nariz con el resto del rostro, cuidando también la función respiratoria."],
      en: ["Rhinoplasty", "Harmonizes the shape of the nose with the rest of the face while preserving breathing function."],
      pt: ["Rinoplastia", "Harmoniza o formato do nariz com o restante do rosto, preservando a função respiratória."] },
    { id: "bleph", cat: "face", dur: "1–2 h", rec: { es: "7–10 días", en: "7–10 days", pt: "7–10 dias" }, stay: { es: "7 días", en: "7 days", pt: "7 dias" },
      es: ["Blefaroplastia", "Rejuvenece la mirada retirando el exceso de piel y bolsas de los párpados."],
      en: ["Blepharoplasty (eyelid surgery)", "Refreshes your eyes by removing excess eyelid skin and under-eye bags."],
      pt: ["Blefaroplastia", "Rejuvenesce o olhar retirando o excesso de pele e bolsas das pálpebras."] },
    { id: "bichat", cat: "face", dur: "1 h", rec: { es: "1 semana", en: "1 week", pt: "1 semana" }, stay: { es: "5 días", en: "5 days", pt: "5 dias" },
      es: ["Bichectomía", "Afina el tercio medio del rostro y define los pómulos retirando las bolsas de Bichat."],
      en: ["Buccal fat removal", "Slims the mid-face and defines the cheekbones by removing buccal fat pads."],
      pt: ["Bichectomia", "Afina o terço médio do rosto e define as maçãs retirando as bolsas de Bichat."] },
    { id: "mommy", cat: "combo", dur: "5–6 h", rec: { es: "4 semanas", en: "4 weeks", pt: "4 semanas" }, stay: { es: "15–21 días", en: "15–21 days", pt: "15–21 dias" },
      es: ["Mommy makeover", "Combinación personalizada de abdominoplastia, lipoescultura y cirugía de senos para recuperar tu figura después de la maternidad."],
      en: ["Mommy makeover", "A personalized combination of tummy tuck, liposculpture and breast surgery to restore your figure after motherhood."],
      pt: ["Mommy makeover", "Combinação personalizada de abdominoplastia, lipoescultura e cirurgia de mama para recuperar sua forma após a maternidade."] },
    { id: "lipoaug", cat: "combo", dur: "4–5 h", rec: { es: "3 semanas", en: "3 weeks", pt: "3 semanas" }, stay: { es: "14 días", en: "14 days", pt: "14 dias" },
      es: ["Lipoescultura + Mamoplastia", "Contorno corporal y aumento mamario en un mismo tiempo quirúrgico, optimizando tu viaje."],
      en: ["Liposculpture + Breast augmentation", "Body contouring and breast augmentation in a single surgery — making the most of your trip."],
      pt: ["Lipoescultura + Prótese de mama", "Contorno corporal e aumento de mama no mesmo tempo cirúrgico, otimizando sua viagem."] }
  ],

  timeline: [
    { es: ["Valoración virtual", "Videollamada con la doctora, revisión de fotos e historia clínica. Definimos el procedimiento ideal para ti."],
      en: ["Virtual consultation", "Video call with the doctor, photo and medical history review. We define the ideal procedure for you."],
      pt: ["Avaliação virtual", "Videochamada com a doutora, análise de fotos e histórico clínico. Definimos o procedimento ideal para você."] },
    { es: ["Plan y cotización", "Recibes tu plan quirúrgico, presupuesto detallado, exámenes requeridos y fechas disponibles."],
      en: ["Plan & quote", "You receive your surgical plan, a detailed quote, required lab tests and available dates."],
      pt: ["Plano e orçamento", "Você recebe seu plano cirúrgico, orçamento detalhado, exames necessários e datas disponíveis."] },
    { es: ["Llegada a Barranquilla", "Te recogemos en el aeropuerto Ernesto Cortissoz y te llevamos a tu alojamiento. Consulta presencial y exámenes."],
      en: ["Arrival in Barranquilla", "We pick you up at Ernesto Cortissoz Airport and take you to your accommodation. In-person consultation and labs."],
      pt: ["Chegada em Barranquilla", "Buscamos você no aeroporto Ernesto Cortissoz e levamos até sua hospedagem. Consulta presencial e exames."] },
    { es: ["Día de tu cirugía", "Procedimiento en clínica habilitada con equipo de anestesiología y enfermería. Seguridad en cada detalle."],
      en: ["Surgery day", "Procedure in an accredited clinic with anesthesiology and nursing teams. Safety in every detail."],
      pt: ["Dia da cirurgia", "Procedimento em clínica habilitada, com equipe de anestesiologia e enfermagem. Segurança em cada detalhe."] },
    { es: ["Recuperación acompañada", "Controles postoperatorios, drenajes linfáticos, enfermería y casa de recuperación según tu plan."],
      en: ["Supported recovery", "Post-op check-ups, lymphatic drainage massages, nursing care and recovery house according to your plan."],
      pt: ["Recuperação acompanhada", "Retornos pós-operatórios, drenagem linfática, enfermagem e casa de recuperação conforme seu plano."] },
    { es: ["Regreso y seguimiento", "Alta médica para volar y seguimiento virtual desde tu país hasta tu resultado final."],
      en: ["Return home & follow-up", "Medical clearance to fly and virtual follow-up from your home country until your final result."],
      pt: ["Retorno e acompanhamento", "Liberação médica para voar e acompanhamento virtual do seu país até o resultado final."] }
  ],

  includes: [
    { icon: "✈", es: "Traslados aeropuerto – alojamiento – clínica", en: "Airport – hotel – clinic transfers", pt: "Traslados aeroporto – hospedagem – clínica" },
    { icon: "⌂", es: "Alojamiento o casa de recuperación aliada", en: "Partner hotel or recovery house", pt: "Hospedagem ou casa de recuperação parceira" },
    { icon: "✚", es: "Enfermería y cuidados postoperatorios", en: "Nursing and post-op care", pt: "Enfermagem e cuidados pós-operatórios" },
    { icon: "≈", es: "Drenajes linfáticos post quirúrgicos", en: "Post-surgical lymphatic drainage", pt: "Drenagem linfática pós-cirúrgica" },
    { icon: "◎", es: "Prendas de compresión y kit de recuperación", en: "Compression garments & recovery kit", pt: "Cintas de compressão e kit de recuperação" },
    { icon: "☏", es: "Acompañante bilingüe y línea de soporte", en: "Bilingual concierge & support line", pt: "Acompanhante bilíngue e linha de suporte" }
  ],

  why: {
    es: ["Vuelos directos desde EE. UU.", "Ahorro de hasta 50–70 % frente a EE. UU.", "Clima caribeño ideal para recuperarte", "Atención en español, inglés y portugués"],
    en: ["Direct flights from the US", "Save up to 50–70% compared to the US", "Caribbean weather, ideal for recovery", "Care in English, Spanish and Portuguese"],
    pt: ["Voos diretos dos EUA", "Economia de até 50–70% em relação aos EUA", "Clima caribenho ideal para a recuperação", "Atendimento em português, espanhol e inglês"]
  },

  faq: [
    { es: ["¿Cómo agendo mi valoración si vivo en el exterior?", "Escríbenos por WhatsApp. Coordinamos una valoración virtual por videollamada y te enviamos tu plan y cotización personalizados."],
      en: ["How do I book a consultation if I live abroad?", "Message us on WhatsApp. We schedule a virtual video consultation and send you a personalized plan and quote."],
      pt: ["Como agendo minha avaliação se moro no exterior?", "Escreva para nós no WhatsApp. Agendamos uma avaliação virtual por videochamada e enviamos seu plano e orçamento personalizados."] },
    { es: ["¿Cuántos días debo quedarme en Barranquilla?", "Depende del procedimiento: entre 7 y 21 días. En la sección de Procedimientos verás la estadía sugerida para cada cirugía."],
      en: ["How many days should I stay in Barranquilla?", "It depends on the procedure: between 7 and 21 days. The Procedures section shows the suggested stay for each surgery."],
      pt: ["Quantos dias devo ficar em Barranquilla?", "Depende do procedimento: entre 7 e 21 dias. Na seção Procedimentos você vê a estadia sugerida para cada cirurgia."] },
    { es: ["¿Qué exámenes necesito antes de la cirugía?", "Te enviaremos la lista según tu edad, historia clínica y procedimiento. Algunos puedes hacerlos en tu país y otros a tu llegada."],
      en: ["Which tests do I need before surgery?", "We will send you the list based on your age, medical history and procedure. Some can be done at home and others upon arrival."],
      pt: ["Quais exames preciso antes da cirurgia?", "Enviaremos a lista conforme sua idade, histórico e procedimento. Alguns podem ser feitos no seu país e outros na chegada."] },
    { es: ["¿Puedo combinar varios procedimientos?", "Sí, siempre que sea seguro para ti. La doctora evalúa el tiempo quirúrgico y tu estado de salud para recomendar la mejor combinación."],
      en: ["Can I combine several procedures?", "Yes, as long as it is safe for you. The doctor evaluates surgical time and your health to recommend the best combination."],
      pt: ["Posso combinar vários procedimentos?", "Sim, desde que seja seguro para você. A doutora avalia o tempo cirúrgico e sua saúde para recomendar a melhor combinação."] },
    { es: ["¿Qué formas de pago aceptan?", "Aceptamos transferencias nacionales e internacionales, tarjetas y otros medios. Te explicaremos las opciones al enviarte tu cotización."],
      en: ["Which payment methods do you accept?", "We accept local and international transfers, cards and other methods. We will explain the options along with your quote."],
      pt: ["Quais formas de pagamento vocês aceitam?", "Aceitamos transferências nacionais e internacionais, cartões e outros meios. Explicaremos as opções junto com seu orçamento."] },
    { es: ["¿Cuándo puedo volar de regreso?", "La doctora te dará el alta para volar en tu último control presencial, normalmente entre 7 y 15 días después de la cirugía."],
      en: ["When can I fly back home?", "The doctor will clear you to fly at your last in-person check-up, usually 7 to 15 days after surgery."],
      pt: ["Quando posso voar de volta?", "A doutora dará a liberação para voar no último retorno presencial, normalmente entre 7 e 15 dias após a cirurgia."] }
  ],

  countries: ["Colombia", "Estados Unidos / United States", "Brasil / Brazil", "Portugal", "España / Spain", "Panamá", "Aruba", "Curaçao", "Puerto Rico", "República Dominicana", "México", "Venezuela", "Canadá / Canada", "Reino Unido / UK", "Italia / Italy", "Francia / France", "Alemania / Germany", "Suiza / Switzerland", "Chile", "Perú", "Ecuador", "Argentina", "Otro / Other"]
};
