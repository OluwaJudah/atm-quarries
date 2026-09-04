import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { ShieldCheck, Award, Leaf, Lightbulb, Handshake, Compass, Pickaxe, Factory, Truck, ArrowRight } from 'lucide-react';

const focus = [
  ['01', 'EXPLORE', 'Identifying mineral opportunities and evaluating deposits with commercial potential.', Compass],
  ['02', 'EXTRACT', 'Developing efficient and responsible mining and quarrying operations.', Pickaxe],
  ['03', 'PROCESS', 'Preparing, refining and processing minerals to meet market and industrial requirements.', Factory],
  ['04', 'TRADE', 'Connecting mineral resources with local and international markets and industrial users.', Truck]
];

const vals = [
  ['Integrity', 'We conduct our business transparently and responsibly.', ShieldCheck],
  ['Excellence', 'We pursue high standards across exploration, operations and delivery.', Award],
  ['Responsibility', 'We recognise our environmental, social and community obligations.', Leaf],
  ['Innovation', 'We embrace better technologies, methods and solutions.', Lightbulb],
  ['Partnership', 'We build lasting relationships with investors, communities, customers and strategic partners.', Handshake]
];

export default function Page() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow=""
        title={<>Building a <em>Resilient</em> Resource Business.</>}
        text="Integrated mining, exploration and mineral resources capabilities founded on operational excellence, responsible stewardship and long-term value creation."
        image="/images/image-19.jpg"
      />
      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">WHO WE ARE</p>
            <h2>Unlocking the Value <span>Beneath the Surface.</span></h2>
          </div>
          <div className="prose">
            <p>ATM Quarries is an integrated mining, exploration and mineral resources company established to participate across the Nigerian mineral value chain — from exploration and extraction to processing, distribution and trade.</p>
            <p>We are a mining and exploration company engaged in the identification, development, extraction, processing and commercialisation of mineral resources.</p>
            <p>Our business spans exploration and development of mineral deposits, quarrying and extraction operations, mineral processing, and supply and trade of materials for construction, manufacturing, energy and other industrial applications.</p>
            <p>We combine resource opportunity with commercial discipline and responsible stewardship to transform mineral assets into sustainable economic value.</p>
            <Link className="text-link" href="/contact">
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section focus-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Across the <span>Mineral Value Chain.</span></h2>
            </div>
            <p className="section-intro">Our capabilities is designed to take opportunities from geological potential to commercial value.</p>
          </div>
          <div className="focus-grid">
            {focus.map(([n, t, p, Icon]) => (
              <article className="focus-card" key={t}>
                <div className="card-number">{n}</div>
                <div className="card-header">
                  <Icon size={22} />
                  <h3>{t}</h3>
                </div>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="container vision-grid">
          <div>
            <p className="eyebrow">OUR VISION</p>
            <p className="large-copy">To become a trusted and leading force in responsible mineral resource development and commercialisation.</p>
          </div>
          <div>
            <p className="eyebrow">OUR MISSION</p>
            <p className="large-copy">To discover, develop and responsibly utilise mineral resources while creating sustainable value for our stakeholders, communities and the industries we serve.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">OUR VALUES</p>
          <h3>How We <span>Operate.</span></h3>
          <div className="values-grid">
            {vals.map(([t, p, Icon]) => (
              <div className="value-card" key={t}>
                <div className="card-header">
                  <Icon size={20} />
                  <h3>{t}</h3>
                </div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
