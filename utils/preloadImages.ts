/**
 * Preload images for better performance
 * @param imagePaths Array of image paths to preload
 */
export function preloadImages(imagePaths: string[]): void {
  if (typeof window === "undefined") return;

  imagePaths.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
}

/**
 * Preload Next.js Image by creating a new Image object
 * This ensures the image is loaded and cached
 * @param imagePaths Array of image paths to preload
 */
export function preloadNextImages(imagePaths: string[]): void {
  if (typeof window === "undefined") return;

  imagePaths.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

