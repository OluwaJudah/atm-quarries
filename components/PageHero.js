import Image from 'next/image';

export default function PageHero({ eyebrow, title, text, image }) {
  const defaultImage = '/images/2101135.webp';
  const bgImage = image || defaultImage;

  return (
    <section className="page-hero">
      <Image
        src={bgImage}
        alt={typeof title === 'string' ? title : eyebrow || 'Hero image'}
        fill
        priority
        className="page-hero-image"
      />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        {eyebrow && <p className="eyebrow page-hero-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="page-hero-text">{text}</p>}
      </div>
    </section>
  );
}

