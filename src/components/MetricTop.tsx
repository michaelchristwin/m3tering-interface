import { ParentComponent } from "solid-js";
import { createSignal, onMount } from "solid-js";
//@ts-expect-error"Could not find a declaration file for module '../../node_modules/colorthief/dist/color-thief.mjs'."
import ColorThief from "../../node_modules/colorthief/dist/color-thief.mjs";

const MetricTop: ParentComponent<{ image: string; fallbackColor?: string }> = (
  props
) => {
  const [gradientColor, setGradientColor] = createSignal("transparent");
  const [isLoaded, setIsLoaded] = createSignal(false);

  onMount(() => {
    if (props.image) {
      const colorThief = new ColorThief();
      const img = new Image();
      img.crossOrigin = "Anonymous";

      img.onload = () => {
        try {
          // Get dominant color
          const color = colorThief.getColor(img);
          setGradientColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.85)`);
          setIsLoaded(true);
        } catch (e) {
          console.error("Color extraction failed:", e);
          // Use fallback color if extraction fails
          setGradientColor(props.fallbackColor || "rgba(0, 0, 0, 0.5)");
          setIsLoaded(true);
        }
      };

      img.src = props.image;
    } else {
      // No background image, use fallback
      setGradientColor(props.fallbackColor || "rgba(0, 0, 0, 0.5)");
      setIsLoaded(true);
    }
  });
  return (
    <div
      class="rounded-lg shadow-sm lg:p-7 md:p-5 p-4 h-64 flex items-end text-center"
      style={{
        "background-image": `url(${props.image})`,
        "background-size": "cover",
        "background-position": "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        class="metric-overlay z-[0]"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          "pointer-events": "none",
          background: `linear-gradient(to bottom, transparent, ${gradientColor()})`,
          opacity: isLoaded() ? "1" : "0",
          transition: "opacity 0.3s ease",
        }}
      />
      {props.children}
    </div>
  );
};
export default MetricTop;
