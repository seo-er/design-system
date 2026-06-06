import alertImage from "../assets/Alert.png";

const iconModules = import.meta.glob("../assets/icons/*.{png,svg,webp}", {
  eager: true,
  import: "default",
});

export function getIconSrc(slug) {
  return (
    iconModules[`../assets/icons/${slug}.png`] ||
    iconModules[`../assets/icons/${slug}.svg`] ||
    alertImage
  );
}
