import galleryMic from "@/assets/gallery-mic.jpg";
import galleryWorkspace from "@/assets/gallery-workspace.jpg";
import galleryBanner from "@/assets/gallery-banner.jpg";

const images = [
  { src: galleryMic, alt: "Professional microphone setup", label: "Recording Setup" },
  { src: galleryBanner, alt: "Shop banner", label: "Our Shop" },
  { src: galleryWorkspace, alt: "Editing workspace", label: "Editing Workspace" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-muted/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
          Our Setup
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Professional equipment for crystal-clear voice recordings
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden group aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-primary-foreground font-bold">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
