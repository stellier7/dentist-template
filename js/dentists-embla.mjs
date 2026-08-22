import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

/**
 * @param {HTMLElement} viewport
 * @param {{ delay?: number, reducedMotion?: boolean }} [options]
 */
export function initDentistsEmbla(viewport, options = {}) {
  const delay = options.delay ?? 5000;
  const reducedMotion = options.reducedMotion ?? false;

  const plugins = reducedMotion
    ? []
    : [
        Autoplay({
          delay,
          playOnInit: false,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
          stopOnFocusIn: false,
        }),
      ];

  const embla = EmblaCarousel(
    viewport,
    {
      loop: true,
      align: "center",
      containScroll: false,
      skipSnaps: false,
    },
    plugins
  );

  const autoplay = plugins[0] ?? null;

  return { embla, autoplay };
}
