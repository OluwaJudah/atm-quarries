import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Leaf, HeartPulse, Users, Recycle, Scale, Clock3 } from 'lucide-react';

const p = [
  ['Environmental Stewardship', 'Minimising environmental impact and promoting responsible land and resource management.', Leaf],
  ['Health & Safety', 'Maintaining a culture where the safety and wellbeing of our people and partners remain fundamental.', HeartPulse],
  ['Community Engagement', 'With a strong Community Development Agreement in place, we are building constructive relationships with communities connected to our operations.', Users],
  ['Resource Efficiency', 'Seeking efficient methods of extraction, processing and utilisation.', Recycle],
  ['Compliance & Governance', 'Operating in accordance with applicable laws, regulations, licences and industry standards.', Scale],
  ['Long-Term Value', 'Developing resources with a long-term perspective rather than short-term extraction alone.', Clock3]
];

export default function Page() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="SUSTAINABILITY"
        title={<>Mining With <em>Responsibility.</em></>}
        text="Mineral development should create value without compromising the environment, communities or future generations."
        image="/images/image-9.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="operations-grid">
            {p.map(([t, x, Icon], i) => (
              <article className="operation-card" key={t}>
                <span>0{i + 1}</span>
                <div className="card-header">
                  <Icon size={24} />
                  <h2>{t}</h2>
                </div>
                <p>{x}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="copper-band">
        <div className="container narrow">
          <p className="eyebrow">OUR COMMITMENT</p>
          <h2>Responsible resources. Stronger communities. Longer-term value.</h2>
        </div>
      </section>
      <Footer />
    </>
  );
}
