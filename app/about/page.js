import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { ShieldCheck, Award, Leaf, Lightbulb, Handshake } from 'lucide-react';

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
            <h2>Integrated Across the <span>Nigerian Mineral Value Chain.</span></h2>
          </div>
          <div className="prose">
            <p>ATM Quarries is an integrated mining, exploration and mineral resources company established to participate across the Nigerian mineral value chain — from exploration and extraction to processing, distribution and trade.</p>
            <p>Our activities include the acquisition, exploration, development, mining, quarrying, processing and commercialisation of mineral resources and associated materials.</p>
            <p>We seek to build a resilient resource business founded on operational excellence, responsible stewardship and long-term value creation.</p>
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
          <h2>How We <span>Operate.</span></h2>
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
