import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock3 } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="CONTACT"
        title={<>Let’s Talk <em>Resources.</em></>}
        text="Have a project, investment opportunity, mineral requirement or potential partnership? Our team would be pleased to hear from you."
        image="/images/image-20.jpg"
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">ATM QUARRIES LIMITED</p>
            <h2>Let’s Develop <span>Opportunities Together.</span></h2>
            <div className="contact-details">
              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <small>ADDRESS</small>
                  <p>3/4 Temidire Street<br />Araromi Ugbeshi<br />Omuo Ekiti, Ekiti State, Nigeria</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <small>EMAIL</small>
                  <p><a href="mailto:info@atmquarries.com">info@atmquarries.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <small>PHONE</small>
                  <p><a href="tel:+2347035098273">+234 703 509 8273</a><br /><a href="tel:+2348037192585">+234 803 719 2585</a></p>
                </div>
              </div>
              <div className="contact-item">
                <Clock3 size={20} />
                <div>
                  <small>OFFICE HOURS</small>
                  <p>Monday – Friday: 8:00 AM – 5:00 PM<br />Saturday: 8:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
