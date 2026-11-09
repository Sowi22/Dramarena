/* =========================================================
   CONFIGURACIÓN EDITABLE — Dra. Marena Linero
   Cambia aquí los datos del cliente sin tocar el resto del código.
   ========================================================= */
window.SITE_CONFIG = {
  // Número de WhatsApp (tomado de la bio de Instagram @dra.marena)
  whatsapp: "573145794862",
  whatsappDisplay: "+57 314 579 4862",
  instagram: "https://www.instagram.com/dra.marena/",
  defaultLang: "es",

  // Ubicación (PENDIENTE: dirección exacta del consultorio)
  address: "Barranquilla, Atlántico — Colombia",
  // Enlace de Google Maps para el botón "Cómo llegar"
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Barranquilla%2C+Atl%C3%A1ntico%2C+Colombia",
  // Mapa embebido: en Google Maps > Compartir > Insertar un mapa, copia solo la URL del src="..."
  mapsEmbed: "https://www.google.com/maps?q=Barranquilla,+Atl%C3%A1ntico,+Colombia&z=13&output=embed",
  // Horario (PENDIENTE: confirmar)
  hours: {
    es: "Lunes a viernes · 8:00 a. m. – 6:00 p. m.<br>Sábados · 8:00 a. m. – 12:00 m.",
    en: "Monday to Friday · 8:00 a.m. – 6:00 p.m.<br>Saturday · 8:00 a.m. – 12:00 p.m.",
    pt: "Segunda a sexta · 8h – 18h<br>Sábado · 8h – 12h"
  },

  /* Testimonios reales (con autorización). Mientras la lista esté vacía, la sección no se muestra.
     Ejemplo:
     { name: "M. G.", country: "Miami, USA", proc: "lipo", es: "texto…", en: "text…", pt: "texto…" } */
  testimonials: [],

  /* Galería tipo Instagram.
     Para cargar los casos reales (o usa tools/optimizar-galeria.py):
     - Foto única:        image: "assets/gallery/caso-01.jpg"
     - Antes / después:   before: "assets/gallery/caso-02-antes.jpg", after: "assets/gallery/caso-02-despues.jpg"
     - Video / reel:      video: "assets/gallery/reel-01.mp4", poster: "assets/gallery/reel-01.jpg"
     - "url" = enlace del post en Instagram. likes / comments pueden quedar vacíos ("").
     Si no hay imagen se muestra un mosaico elegante de reemplazo. */
  gallery: [
    { id: 1, cat: "body",   proc: "lipo",      image: "", url: "https://www.instagram.com/dra.marena/", likes: "1.2K", comments: 86 },
    { id: 2, cat: "breast", proc: "augment",   image: "", url: "https://www.instagram.com/dra.marena/", likes: "980",  comments: 64 },
    { id: 3, cat: "body",   proc: "tummy",     image: "", url: "https://www.instagram.com/dra.marena/", likes: "1.5K", comments: 112 },
    { id: 4, cat: "body",   proc: "bbl",       image: "", url: "https://www.instagram.com/dra.marena/", likes: "2.1K", comments: 140 },
    { id: 5, cat: "face",   proc: "rhino",     image: "", url: "https://www.instagram.com/dra.marena/", likes: "870",  comments: 52 },
    { id: 6, cat: "breast", proc: "lift",      image: "", url: "https://www.instagram.com/dra.marena/", likes: "760",  comments: 41 },
    { id: 7, cat: "body",   proc: "mommy",     image: "", url: "https://www.instagram.com/dra.marena/", likes: "1.3K", comments: 97 },
    { id: 8, cat: "face",   proc: "bleph",     image: "", url: "https://www.instagram.com/dra.marena/", likes: "640",  comments: 33 },
    { id: 9, cat: "body",   proc: "lipo",      image: "", url: "https://www.instagram.com/dra.marena/", likes: "1.1K", comments: 75 }
  ]
};
