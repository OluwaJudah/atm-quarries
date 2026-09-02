import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Mountain, Gem, Fuel, Layers3 } from 'lucide-react';

const groups = [
  ['Construction & Quarry Materials', 'Stone, aggregate and quarry materials for construction and infrastructure applications.', Mountain, ['Rocks', 'Stones', 'Sand', 'Gravel', 'Shingle', 'Ballast', 'Rubble',]],// 'Slate', 'Shale', 'Slag', 'Breeze'
  ['Industrial & Decorative Minerals', 'Materials serving industrial, architectural and decorative applications.', Gem, ['Marble', 'Gypsum', 'Limestone', 'Other industrial minerals', 'Dimension & architectural stone']],
  ['Energy Resources', 'Resource interests spanning selected mineral-based energy resources.', Fuel, ['Coal', 'Peat and related fuels', 'Oils and mineral-based energy resources']],
  ['Other Mineral Substances', 'Flexibility to explore, acquire, develop, process and commercialise additional resources where viable.', Layers3, ['Additional mineral resources', 'Associated materials', 'Future resource opportunities']]
];

export default function Page() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="MINERALS & RESOURCES"
        title={<>A Broad <em>Resource Portfolio.</em></>}
        text="We maintain a flexible resource strategy spanning quarry materials, industrial minerals, energy resources and additional mineral opportunities."
        image="/images/image-18.jpg"
      />
      <section className="section">
        <div className="container resource-catalog">
          {groups.map(([t, p, Icon, items]) => (
            <article className="resource-panel" key={t}>
              <div className="card-header">
                <Icon size={24} />
                <h3 className="uppercase">{t}</h3>
              </div>
              <p>{p}</p>
              <div className="chips large-chips">
                {items.map(x => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="stone-section section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">RESOURCE STRATEGY</p>
            <h2>Opportunity Guided by <span>Technical & Commercial Viability.</span></h2>
          </div>
          <p className="large-copy">We evaluate resource opportunities according to geological characteristics, recoverability, infrastructure access, market demand, regulatory considerations and long-term development potential.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
