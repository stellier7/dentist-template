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
      slides: ".dentist-card",
    },
    plugins
  );

  if (!embla.internalEngine().options.loop) {
    console.warn(
      "Dentists carousel: Embla loop was disabled because slides are too wide. Neighbors and seamless wrap require narrower slides."
    );
  }

  const autoplay = plugins[0] ?? null;

  return { embla, autoplay, loopActive: embla.internalEngine().options.loop };
}
