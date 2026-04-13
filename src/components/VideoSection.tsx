import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="apresentacao" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Conheça a M&S
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Apresentação da Empresa
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-card"
        >
          <video
            ref={videoRef}
            src="/videos/apresentacao.mp4"
            muted
            loop
            playsInline
            className="w-full aspect-video object-contain bg-black"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
