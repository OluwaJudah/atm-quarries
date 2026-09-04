import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { ArrowUpRight, MapPinned, SearchCheck, TrendingUp, Route, Leaf, FileCheck, Factory } from 'lucide-react';

const c = [
  ['Resource potential', SearchCheck],
  ['Geological characteristics', MapPinned],
  ['Commercial viability', TrendingUp],
  ['Infrastructure access', Route],
  ['Environmental considerations', Leaf],
  ['Regulatory requirements', FileCheck],
  ['Market demand', TrendingUp],
  ['Long-term development potential', Factory]
];

export default function Page() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="PROJECTS"
        title={<>Building Our <em>Resource Portfolio.</em></>}
        text="We are building a portfolio of mineral exploration, mining, quarrying and processing opportunities across strategic locations."
        image="/images/image-21.jpeg"
      />
      <section className="section">
        <div className="container project-feature">
          <div className="">
            <h2>ATM Quarries Limited <span>is Building a Strong Resource Portfolio.</span></h2>
            <p className="muted">We are actively evaluating mineral opportunities and strategic partnerships across selected resource segments.</p>
            <Link className="button button-dark" href="/contact">
              Discuss an Opportunity <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="project-mark">
            <strong>ATM</strong>
            <span>RESOURCE PORTFOLIO</span>
          </div>
        </div>
      </section>
      <section className="section criteria-section">
        <div className="container">
          <p className="eyebrow">PROJECT EVALUATION</p>
          <h2>Disciplined <span>Development Criteria.</span></h2>
          <div className="criteria-grid">
            {c.map(([x, Icon]) => (
              <div key={x}>
                <Icon size={22} />
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

