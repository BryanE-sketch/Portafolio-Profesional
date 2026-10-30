import { useEffect, useState } from "react";
import type { Lang } from "../data/types";

const STORAGE_KEY = "portfolio-lang";

/** Idioma inicial: el guardado en una visita anterior o, si no hay, el del navegador. */
function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // Sin acceso al almacenamiento (p. ej. modo privado): usamos el idioma del navegador
  }
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

/** Idioma activo del portafolio, recordado entre visitas. */
export function useLang() {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Si no se puede guardar, el sitio sigue funcionando igual
    }
  }, [lang]);

  const toggleLang = () =>
    setLang((current) => (current === "es" ? "en" : "es"));

  return { lang, toggleLang };
}
