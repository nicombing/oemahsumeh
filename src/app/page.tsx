import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* TopNavBar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={`${styles.navLogo} ${styles.headline}`}>
            <Image src="/logo.png" alt="Oemah Sumeh Logo" width={40} height={40} className={styles.logoImg} />
            <span>Oemah Sumeh</span>
          </div>
          <div className={`${styles.navLinks} ${styles.headline}`}>
            <a className={styles.navLinkActive} href="#">Home</a>
            <a className={styles.navLink} href="#">Our Programs</a>
            <a className={styles.navLink} href="#">The Smile Centre</a>
            <a className={styles.navLink} href="#">Contact</a>
          </div>
          <button className={`${styles.navButton} ${styles.headline}`}>
            Book a Consultation
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <img
              alt="misty green mountains of Getasan Indonesia during early morning sunrise"
              className={styles.heroImage}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4feDvxHJ4z-NPcrM1fs_5dWyIUTbkVGtnv_k-FqFpYVaZah9p3OYIspxtEYYIxbEoH3lE3JLQdoEg-NxhCBNRVK-ldv7fTGauKZtSFWNs5CIFlcFxgAgvA5pFzQlJP9c3bNg6PPiRnhQd89OwheXPN94q9nQ1kgWkGuRN5-mxeSOwb_GkM6RXxlQlHuZB06p7OjdEY11zHXWmHUqb-KhwtsACLBW2deugyaaKBhDoMZPnPkXcVpBa7skfZzquosSlXjq_0of9_I0"
            />
            <div className={styles.heroGradient}></div>
          </div>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroContent}>
              <h1 className={`${styles.heroTitle} ${styles.headline}`}>
                Your Sanctuary for the Mind and Body.
              </h1>
              <p className={`${styles.heroText} ${styles.bodyText}`}>
                Escape the noise. We offer comprehensive, compassionate care for mental well-being, depression, and holistic physical recovery in the heart of Java.
              </p>
              <div className={styles.heroButtons}>
                <button className={`${styles.btnPrimaryLarge} ${styles.headline}`}>
                  Begin Your Journey
                </button>
                <button className={`glass-effect ${styles.btnOutlineLarge} ${styles.headline}`}>
                  View Programs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* The Approach */}
        <section className={styles.approachSection}>
          <div className={styles.approachContainer}>
            <span className={`${styles.subtitle} ${styles.headline}`}>Latar Belakang</span>
            <h2 className={`${styles.sectionTitle} ${styles.headline}`}>Healing is a Return to Yourself.</h2>
            <div className={`${styles.approachTextSpace} ${styles.bodyText}`}>
              <div className={styles.leadText}>
                Oemah Sumeh dibangun oleh kerinduan untuk menolong banyak jiwa yang menderita akibat cara berpikir/mindset yang memberikan dampak buruk kepada kesehatan mental dan bahkan kepada kesehatan fisik.<br /><br />
                Dalam perjalanannya, Oemah Sumeh juga melihat salah satu sumber dari tekanan mental berasal hubungan pernikahan. Konflik dalam pernikahan tidak hanya berdampak pada Suami atau Isteri namun terlebih juga pada anak-anak. Itu sebabnya Oemah Sumeh merancang program Marriage and Relationship untuk membantu pasangan suami dan isteri menemukan solusi untuk permasalahan dalam hubungan mereka agar kebahagiaan pernikahan menjadi milik mereka.
              </div>
              <p className={styles.leadText}>
                Kami percaya bahwa Sang Pencipta adalah sumber kesembuhan sejati — baik fisik maupun mental. Namun insan manusia juga harus melakukan bagian mereka sehingga kerja sama Ilahi dengan manusia akan menghasilkan kesehatan yang seutuhnya.
              </p>
            </div>
          </div>
        </section>

        {/* Our Core Programs */}
        <section className={styles.programsSection}>
          <div className={styles.programsContainer}>
            <div className={styles.programsHeader}>
              <h2 className={`${styles.sectionTitle} ${styles.headline}`}>Our Program</h2>
              <p className={styles.leadText}>----Abelard----</p>
            </div>
            <div className={styles.programsGrid}>
              <div className={styles.card}>
                <div className={styles.cardIconBox}>
                  <span className="material-symbols-outlined cardIcon">psychology</span>
                </div>
                <h3 className={`${styles.cardTitle} ${styles.headline}`}>Wellness Program</h3>
                <p className={`${styles.cardDesc} ${styles.bodyText}`}>
                  Sebuah program yang dirancang untuk membantu perubahan mindset (cara pandang) terhadap masalah yang terjadi dan aplikasi gaya hidup sehat yang akan membantu pemulihan kesehatan secara holistik.
                </p>
                <a className={`${styles.cardLink} ${styles.bodyText}`} href="#">Learn more <span className="material-symbols-outlined" style={{ marginLeft: "4px" }}>arrow_forward</span></a>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIconBox}>
                  <span className="material-symbols-outlined cardIcon">sentiment_satisfied</span>
                </div>
                <h3 className={`${styles.cardTitle} ${styles.headline}`}>Marriage and Relationship Program</h3>
                <p className={`${styles.cardDesc} ${styles.bodyText}`}>
                  Sebuah program untuk menjelajahi lebih dalam desain indah dan prinsip -prinsip yang telah Sang Pencipta tetapkan untuk kebahagiaan suami dan istri serta seluruh anggota keluarga. Pernikahan diciptakan untuk kebahagiaan bukan untuk penderitaan.
                </p>
                <a className={`${styles.cardLink} ${styles.bodyText}`} href="#">Learn more <span className="material-symbols-outlined" style={{ marginLeft: "4px" }}>arrow_forward</span></a>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIconBox}>
                  <span className="material-symbols-outlined cardIcon">spa</span>
                </div>
                <h3 className={`${styles.cardTitle} ${styles.headline}`}>Holiday Camp</h3>
                <p className={`${styles.cardDesc} ${styles.bodyText}`}>
                  Sebuah program untuk mengenalkan konsep diri dan konsep berpikir kepada anak remaja dan dewasa muda agar mereka memahami tujuan hidup dan karakter yang dibutuhkan dalam menjalani kehidupan di dunia ini.
                </p>
                <a className={`${styles.cardLink} ${styles.bodyText}`} href="#">Learn more <span className="material-symbols-outlined" style={{ marginLeft: "4px" }}>arrow_forward</span></a>
              </div>
            </div>
          </div>
        </section>

        {/* The Transformation */}
        <section className={styles.impactSection}>
          <div className={styles.impactContainer}>
            <div className={styles.impactImageWrapper}>
              <div className={styles.impactImageBg}></div>
              <img
                alt="Serene person practicing mindfulness"
                className={styles.impactImage}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnFo1HmHXM-7c25EbdII773dN1-f2nWDYzkiJ9Xpa-mosDgfkqka8QrFUr4hwddLhHqX-GAaBuI6PghPJyZu51WRxG1q47xcGMofEB6NbUIT3vT74jgOR9A4zzBzsd0ebcvEm9fV3EkvgeWrX5wN2QETY8aFtCqhqJiaZ9TvJXu7aZjc1QdtjncrKsyqdTY_Sr-4xa9UqfVdd3kQCVGtvC1dSUvgSOFsThdfWcUJ-Uu6HSV0yKnGUzep_tLiDnlhfGIpe62YD10tg"
              />
            </div>
            <div className={styles.impactContent}>
              <span className={`${styles.subtitle} ${styles.headline}`}>Our Impact</span>
              <h2 className={`${styles.sectionTitle} ${styles.headline}`} style={{ marginBottom: "0" }}>Beyond a Retreat: Equipping You for Life.</h2>
              <p className={styles.leadText}>
                Our program is more than a temporary pause; it&apos;s a transformative experience. You won&apos;t just leave feeling better—you&apos;ll leave with a practical framework and a resilient mindset for your everyday life.
              </p>
              <ul className={styles.impactList}>
                <li className={styles.impactListItem}>
                  <span className={`material-symbols-outlined ${styles.impactIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div>
                    <h4 className={`${styles.impactItemTitle} ${styles.headline}`}>Restored Mental Clarity</h4>
                    <p className={styles.impactItemDesc}>Quiet the noise and find focus through clinical guidance and natural stillness.</p>
                  </div>
                </li>
                <li className={styles.impactListItem}>
                  <span className={`material-symbols-outlined ${styles.impactIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div>
                    <h4 className={`${styles.impactItemTitle} ${styles.headline}`}>Practical Stress-Management Tools</h4>
                    <p className={styles.impactItemDesc}>Evidence-based techniques you can apply immediately in your professional and personal life.</p>
                  </div>
                </li>
                <li className={styles.impactListItem}>
                  <span className={`material-symbols-outlined ${styles.impactIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div>
                    <h4 className={`${styles.impactItemTitle} ${styles.headline}`}>Holistic Lifestyle Education</h4>
                    <p className={styles.impactItemDesc}>Sustainable habits for nutrition, sleep, and movement tailored to your needs.</p>
                  </div>
                </li>
                <li className={styles.impactListItem}>
                  <span className={`material-symbols-outlined ${styles.impactIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div>
                    <h4 className={`${styles.impactItemTitle} ${styles.headline}`}>Renewed Physical Vitality</h4>
                    <p className={styles.impactItemDesc}>Reconnect with your body through restorative movement and pristine mountain air.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Voices of Healing */}
        <section className={styles.testimonialsSection}>
          <div className={`${styles.testimonialsHeader} ${styles.programsContainer}`}>
            <h2 className={`${styles.sectionTitle} ${styles.headline}`}>Voices of Healing</h2>
            <p className={styles.leadText}>Real stories of transformation from our guests, shared with respect for their privacy.</p>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <span className={`material-symbols-outlined ${styles.quoteIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <p className={`${styles.quoteText} ${styles.bodyText}`}>
                &quot;The depression recovery program didn&apos;t just give me medicine; it gave me back my perspective. The combination of clinical therapy and the quiet of the mountains was exactly what I needed to breathe again.&quot;
              </p>
              <div className={styles.quoteAuthorBox}>
                <p className={`${styles.quoteAuthor} ${styles.headline}`}>— Previous Guest, 2023</p>
                <p className={`${styles.quoteProgram} ${styles.headline}`}>Depression Recovery</p>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <span className={`material-symbols-outlined ${styles.quoteIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <p className={`${styles.quoteText} ${styles.bodyText}`}>
                &quot;I arrived exhausted from city life. Oemah Sumeh provided a sanctuary where I could finally hear my own thoughts. The nature here is a healer in itself, and the staff&apos;s kindness is unparalleled.&quot;
              </p>
              <div className={styles.quoteAuthorBox}>
                <p className={`${styles.quoteAuthor} ${styles.headline}`}>— Previous Guest, 2023</p>
                <p className={`${styles.quoteProgram} ${styles.headline}`}>Holistic Wellness</p>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <span className={`material-symbols-outlined ${styles.quoteIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <p className={`${styles.quoteText} ${styles.bodyText}`}>
                &quot;What surprised me most was the community support. Even as an introvert, the gentle way we were guided through workshops made me feel seen and supported without being overwhelmed.&quot;
              </p>
              <div className={styles.quoteAuthorBox}>
                <p className={`${styles.quoteAuthor} ${styles.headline}`}>— Previous Guest, 2023</p>
                <p className={`${styles.quoteProgram} ${styles.headline}`}>Community Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Oemah Sumeh */}
        <section className={styles.featuresSection}>
          <div className={`${styles.programsHeader} ${styles.programsContainer}`}>
            <h2 className={`${styles.sectionTitle} ${styles.headline}`}>Where Clinical Care Meets Natural Serenity.</h2>
            <p className={styles.leadText}>We offer a unique bridge between medical excellence and restorative peace.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>
                <span className={`material-symbols-outlined ${styles.featureIcon}`}>landscape</span>
              </div>
              <h3 className={`${styles.cardTitle} ${styles.headline}`}>Immersive Nature</h3>
              <p className={`${styles.cardDesc} ${styles.bodyText}`} style={{ marginBottom: "0" }}>
                Nestled in the lush Getasan landscape, our retreat utilizes the therapeutic benefits of mountain air and greenery to accelerate mental healing.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>
                <span className={`material-symbols-outlined ${styles.featureIcon}`}>verified_user</span>
              </div>
              <h3 className={`${styles.cardTitle} ${styles.headline}`}>Professional Affiliation</h3>
              <p className={`${styles.cardDesc} ${styles.bodyText}`} style={{ marginBottom: "0" }}>
                Backing from The Smile Centre ensures all our programs meet the highest clinical psychiatric and medical standards for your safety and results.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>
                <span className={`material-symbols-outlined ${styles.featureIcon}`}>volunteer_activism</span>
              </div>
              <h3 className={`${styles.cardTitle} ${styles.headline}`}>Compassionate Community</h3>
              <p className={`${styles.cardDesc} ${styles.bodyText}`} style={{ marginBottom: "0" }}>
                Experience a non-judgmental support system and education-focused care designed to build your long-term emotional resilience.
              </p>
            </div>
          </div>
          <div className={styles.featureActionBox}>
            <button className={`${styles.btnPrimaryAction} ${styles.headline}`}>
              Take the First Step – Contact Us Today
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Gallery */}
        <section className={styles.gallerySection}>
          <div className={`${styles.galleryHeader} ${styles.programsContainer}`}>
            <span className={`${styles.subtitle} ${styles.headline}`}>Visual Journey</span>
            <h2 className={`${styles.sectionTitle} ${styles.headline}`}>A Glimpse of Serenity.</h2>
            <p className={styles.leadText}>Explore the restorative environment of Oemah Sumeh, where nature and clinical care coexist.</p>
          </div>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryImageCard}>
              <img alt="Lush Mountain Vistas" className={styles.galleryImage} src="/images/gal1.webp" />
              <div className={styles.galleryImageOverlay}></div>
              <div className={`${styles.galleryImageTitle} ${styles.headline}`}>Lush Mountain Vistas</div>
            </div>
            <div className={`${styles.galleryImageCard} ${styles.galleryOffset}`}>
              <img alt="Inner Stillness Space" className={styles.galleryImage} src="/images/gal2.webp" />
              <div className={styles.galleryImageOverlay}></div>
              <div className={`${styles.galleryImageTitle} ${styles.headline}`}>Inner Stillness Space</div>
            </div>
            <div className={styles.galleryImageCard}>
              <img alt="Restorative Suites" className={styles.galleryImage} src="/images/gal3.webp" />
              <div className={styles.galleryImageOverlay}></div>
              <div className={`${styles.galleryImageTitle} ${styles.headline}`}>Restorative Suites</div>
            </div>
            <div className={styles.galleryImageCard}>
              <img alt="Wholesome Nutrition" className={styles.galleryImage} src="/images/gal4.webp" />
              <div className={styles.galleryImageOverlay}></div>
              <div className={`${styles.galleryImageTitle} ${styles.headline}`}>Wholesome Nutrition</div>
            </div>
            <div className={`${styles.galleryImageCard} ${styles.galleryOffset}`}>
              <img alt="Nature-Based Therapy" className={styles.galleryImage} src="/images/gal5.webp" />
              <div className={styles.galleryImageOverlay}></div>
              <div className={`${styles.galleryImageTitle} ${styles.headline}`}>Nature-Based Therapy</div>
            </div>
            <div className={styles.galleryImageCard}>
              <img alt="Morning Serenity" className={styles.galleryImage} src="/images/gal6.webp" />
              <div className={styles.galleryImageOverlay}></div>
              <div className={`${styles.galleryImageTitle} ${styles.headline}`}>Morning Serenity</div>
            </div>
          </div>
        </section>

        {/* Clinical Affiliation */}
        <section className={styles.clinicalSection}>
          <div className={styles.clinicalContainer}>
            <div className={styles.clinicalImageWrapper}>
              <div className={styles.clinicalImageBg}></div>
              <img alt="The Smile Centre Facility" className={styles.clinicalImage} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwnJ2sWmA_qKfpHH7PxjO5hdsMzuUmeIisy8YrkEj5yBJqd7orxE8rUayUGN97AxRL4AGxW26UiEbKKqtad_wB8OByL0p0RsXQ9KyeXL9lw5cae6fA2vEPS75ufH6yoxx-d2PNuC5VVnkDsUmUkWJejkfQ-riCx0Gld2gaJFe0KEGGB6efoywOdrE-ke-5zQLp90k7JbutL5hzsomFdi_uceCv6c45IqwEN846j6BLDN0TAWs3h5Vhecrq0KrYs7oUaNIHVpU-0Ok" />
            </div>
            <div className={styles.clinicalContent}>
              <h2 className={`${styles.clinicalTitle} ${styles.headline}`}>Backed by The Smile Centre.</h2>
              <p className={styles.clinicalDesc}>
                While our environment is focused on tranquility, our foundation is clinical excellence. Oemah Sumeh is seamlessly integrated with The Smile Centre, ensuring every guest has access to world-class psychological and medical standards.
              </p>
              <ul className={styles.impactList}>
                <li className={styles.impactListItem}>
                  <span className={`material-symbols-outlined ${styles.impactIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div style={{ alignSelf: "center", fontWeight: "600", color: "var(--color-on-surface-variant)"}}>Certified Psychiatric Oversight</div>
                </li>
                <li className={styles.impactListItem}>
                  <span className={`material-symbols-outlined ${styles.impactIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div style={{ alignSelf: "center", fontWeight: "600", color: "var(--color-on-surface-variant)"}}>Evidence-Based Therapeutic Protocols</div>
                </li>
                <li className={styles.impactListItem}>
                  <span className={`material-symbols-outlined ${styles.impactIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div style={{ alignSelf: "center", fontWeight: "600", color: "var(--color-on-surface-variant)"}}>24/7 Professional Medical Support</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerCol}>
            <div className={`${styles.footerTitle} ${styles.headline}`} style={{ fontSize: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Image src="/logo.png" alt="Oemah Sumeh Logo" width={32} height={32} />
              Oemah Sumeh
            </div>
            <p className={`${styles.footerText} ${styles.bodyText}`}>
              Your journey to mental wellness begins with a single, courageous step. Reach out to us for a confidential conversation.
            </p>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <input className={styles.formControl} placeholder="Full Name" type="text" />
              <input className={styles.formControl} placeholder="Email Address" type="email" />
              <textarea className={styles.formControl} placeholder="How can we help?" rows={3}></textarea>
              <button className={`${styles.formBtn} ${styles.headline}`} type="button">Send Message</button>
            </form>
          </div>
          <div className={styles.footerCol}>
            <h3 className={`${styles.footerTitle} ${styles.headline}`}>Our Location</h3>
            <div className={styles.mapContainer}>
              <img alt="Map of Getasan Central Java" className={styles.mapImage} src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHM39qIgbq5Z18ijGo5BggZ2r1CykU2KqEad_v9tAD-oeBiYbOtSdE-55ifivhSUrcx_QMC-JG3iVQLhv7knJKBLKMwlZ-lhYcYN4O5NGkZuaz2zbdZqU8bSkLF5ZA9dz_SYT2FPtFybAhtbJBJ6MS8bbH96T8HcclhkIWyJG8K1BBafniWicLHt-V5zul2zJiHqLz72b13wkShHQgSGWvwLySXjPqTyiPRYS5nCws5ZQbpO5wSujPSiwD8N5X4YrESNY506AwuSk" />
              <div className={styles.mapOverlay}>
                <span className={`${styles.mapBtn} ${styles.headline}`}>Open in Maps</span>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactRow}>
                <span className="material-symbols-outlined" style={{ color: "var(--color-secondary)" }}>location_on</span>
                <span>Getasan, Semarang Regency,<br />Central Java, Indonesia</span>
              </div>
              <div style={{ paddingTop: "1rem" }}>
                <button className={`${styles.whatsappBtn} ${styles.headline}`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  WhatsApp Support
                </button>
              </div>
            </div>
          </div>
          <div className={styles.footerCol}>
            <h3 className={`${styles.footerTitle} ${styles.headline}`}>Navigation</h3>
            <nav className={styles.footerNav}>
              <a className={`${styles.footerNavLink} ${styles.bodyText}`} href="#">Privacy Policy</a>
              <a className={`${styles.footerNavLink} ${styles.bodyText}`} href="#">Terms of Service</a>
              <a className={`${styles.footerNavLink} ${styles.bodyText}`} href="#">The Smile Centre Portal</a>
              <a className={`${styles.footerNavLink} ${styles.bodyText}`} href="#">Contact Support</a>
            </nav>
            <div className={styles.footerBottom}>
              <p className={styles.bodyText}>© 2024 Oemah Sumeh Holistic Wellness Retreat. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
