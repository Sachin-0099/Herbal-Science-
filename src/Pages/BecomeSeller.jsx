export default function BecomeSeller() {
    return (
      <div style={styles.container}>
        {/* Hero Section (from seller 1 1.png) */}
        <section style={styles.heroSection}>
          <div style={styles.heroContent}>
            <div style={styles.heroText}>
              <h1 style={styles.heroHeading}>Sell more! Unlock the MENA market.</h1>
              <p style={styles.heroParagraph}>
                Easily sell to the Middle East and North Africa (MENA) without opening a local office. Tens of thousands
                of verified wholesale buyers are only a few clicks away.
              </p>
              <button style={styles.ctaButton}>BECOME A SELLER</button>
              <div style={styles.backedBy}>
                Backed by: <img src="/Images/Dubai.png" alt="Dubai Government logo" />
              </div>
            </div>
            <div style={styles.heroImage}>
              <img
                src="/Images/Blog4.webp"
                alt="Tradeling platform with shipping boxes"
                style={styles.heroImg}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div style={styles.waveDivider}></div>
        </section>
  
        {/* Trust Section (from seller 1 1.png) */}
        <section style={styles.trustSection}>
          <div style={styles.trustContent}>
            <h2 style={styles.trustHeading}>
              Trade with confidence: we are backed by the Dubai Government and strategically located at the Dubai Airport
              Free Zone.
            </h2>
  
            <div style={styles.featuresGrid}>
              <div style={styles.featureCard}>
                <img style={styles.featureIcon} src="/placeholder.svg?height=60&width=60" alt="Globe icon" />
                <h3 style={styles.featureTitle}>Enter the wholesale market in MENA</h3>
                <p style={styles.featureDescription}>Our verified B2B buyers are looking for products like yours.</p>
              </div>
  
              <div style={styles.featureCard}>
                <img style={styles.featureIcon} src="/placeholder.svg?height=60&width=60" alt="Finance icon" />
                <h3 style={styles.featureTitle}>Access trade finance & credit insurance</h3>
                <p style={styles.featureDescription}>Access trade finance & credit insurance</p>
              </div>
  
              <div style={styles.featureCard}>
                <img style={styles.featureIcon} src="/placeholder.svg?height=60&width=60" alt="Logistics icon" />
                <h3 style={styles.featureTitle}>Convenient cross-border logistic services</h3>
                <p style={styles.featureDescription}>
                  Experience the integrated digital solutions for shipping, customs clearance, export licenses, product
                  registration and more.
                </p>
              </div>
  
              <div style={styles.featureCard}>
                <img style={styles.featureIcon} src="/placeholder.svg?height=60&width=60" alt="RFQ icon" />
                <h3 style={styles.featureTitle}>Find active buyers in the RFQ Marketplace</h3>
                <p style={styles.featureDescription}>
                  Submit bids on open RFQs to connect with buyers who are looking for products like yours.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* How it works section (from seller 1 2.png) */}
        <section style={styles.howItWorks}>
          <div style={styles.howItWorksContent}>
            <div style={styles.processImage}>
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="How it works process diagram"
                style={styles.processImg}
              />
            </div>
            <div style={styles.processSteps}>
              <h2 style={styles.processHeading}>How it works</h2>
  
              <div style={styles.step}>
                <h3 style={styles.stepTitle}>1. Easily upload and manage your products</h3>
                <p style={styles.stepDescription}>
                  Showcase your products in the best way. Our team will help you upload your catalogue and launch sales
                  promotions.
                </p>
              </div>
  
              <div style={styles.step}>
                <h3 style={styles.stepTitle}>2. Use Tradeling Logistics to get your products to market</h3>
                <p style={styles.stepDescription}>
                  Look no further for seamless support with import, export, customs, shipping, warehousing, and last-mile
                  delivery.
                </p>
                <a href="#" style={styles.learnMore}>
                  LEARN MORE &gt;
                </a>
              </div>
  
              <div style={styles.step}>
                <h3 style={styles.stepTitle}>3. Get world-class customer support</h3>
                <p style={styles.stepDescription}>
                  Count on hands-on support and account management from the moment you register. Your buyers will receive
                  fast and responsive customer service in the local languages of their choice.
                </p>
              </div>
  
              <div style={styles.step}>
                <h3 style={styles.stepTitle}>
                  4. Boost your sales: we offer finance and credit solutions to your buyers
                </h3>
                <p style={styles.stepDescription}>
                  Your buyers can apply for trade finance with us. You get paid immediately and the buyer has set
                  repayment terms with us; it eases their cashflow and encourages them to buy faster and with greater
                  confidence.
                </p>
                <a href="#" style={styles.learnMore}>
                  LEARN MORE &gt;
                </a>
              </div>
            </div>
          </div>
        </section>
  
        {/* Payment terms section (from seller 1 2.png and seller 1 3.png) */}
        <section style={styles.paymentSection}>
          <div style={styles.paymentContent}>
            <div style={styles.tabs}>
              <div style={styles.tabActive}>Payment terms</div>
              <div style={styles.tabInactive}>Commission structure</div>
            </div>
            <div style={styles.tabContent}>
              <p style={styles.tabParagraph}>
                We offer the widest range of payment terms. This ensures that you and your customers can conclude your
                transactions in a way that best suits your business needs. You will receive payment twice per month.
              </p>
              <p style={styles.tabParagraph}>Available payment terms include:</p>
  
              <div style={styles.paymentOptions}>
                <div style={styles.paymentOption}>
                  <span style={styles.checkmark}>✓</span> Debit Card
                </div>
                <div style={styles.paymentOption}>
                  <span style={styles.checkmark}>✓</span> Credit Card
                </div>
                <div style={styles.paymentOption}>
                  <span style={styles.checkmark}>✓</span> Bank transfer
                </div>
                <div style={styles.paymentOption}>
                  <span style={styles.checkmark}>✓</span> Cash on delivery
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* International sellers section (from seller 1 3.png) */}
        <section style={styles.internationalSection}>
          <div style={styles.internationalContent}>
            <div style={styles.internationalText}>
              <h2 style={styles.internationalHeading}>International sellers, we help you!</h2>
  
              <div style={styles.benefitsList}>
                <div style={styles.benefitItem}>
                  <span style={styles.checkmark}>✓</span>
                  <p style={styles.benefitText}>We help with Customs Clearance and Product Registration.</p>
                </div>
                <div style={styles.benefitItem}>
                  <span style={styles.checkmark}>✓</span>
                  <p style={styles.benefitText}>Easily sell in the Middle East. No need for your own local office.</p>
                </div>
                <div style={styles.benefitItem}>
                  <span style={styles.checkmark}>✓</span>
                  <p style={styles.benefitText}>
                    We offer Exporter of Record services, if you do not have an export licence.
                  </p>
                </div>
              </div>
            </div>
  
            <div style={styles.internationalImage}>
              <div style={styles.flagsContainer}>
                <img src="/placeholder.svg?height=30&width=50" alt="China flag" style={styles.flag} />
                <img src="/placeholder.svg?height=30&width=50" alt="UK flag" style={styles.flag} />
                <img src="/placeholder.svg?height=30&width=50" alt="India flag" style={styles.flag} />
                <img src="/placeholder.svg?height=30&width=50" alt="Turkey flag" style={styles.flag} />
                <img src="/placeholder.svg?height=30&width=50" alt="Taiwan flag" style={styles.flag} />
                <img src="/placeholder.svg?height=30&width=50" alt="UAE flag" style={styles.flag} />
                <img src="/placeholder.svg?height=30&width=50" alt="Spain flag" style={styles.flag} />
              </div>
              <img src="/placeholder.svg?height=300&width=400" alt="Global logistics" style={styles.globeImage} />
            </div>
          </div>
        </section>
  
        {/* Trade partners section (from seller 1 3.png and seller 1 4.png) */}
        <section style={styles.partnersSection}>
          <div style={styles.partnersContent}>
            <h2 style={styles.partnersHeading}>Our International trade partners</h2>
            <p style={styles.partnersSubheading}>Our trade partners gets exclusive benefits.</p>
  
            <div style={styles.partnersLogos}>
              <img src="/placeholder.svg?height=60&width=120" alt="Make it Kenya" style={styles.partnerLogo} />
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Malaysian Chamber of Commerce"
                style={styles.partnerLogo}
              />
              <img src="/placeholder.svg?height=60&width=120" alt="MODS" style={styles.partnerLogo} />
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Belarus Chamber of Commerce"
                style={styles.partnerLogo}
              />
              <img src="/placeholder.svg?height=60&width=120" alt="CEPIT" style={styles.partnerLogo} />
              <img src="/placeholder.svg?height=60&width=120" alt="CCI France UAE" style={styles.partnerLogo} />
            </div>
          </div>
        </section>
  
        {/* Success stories section (from seller 1 4.png) */}
        <section style={styles.successSection}>
          <div style={styles.successContent}>
            <h2 style={styles.successHeading}>Success stories</h2>
  
            <div style={styles.testimonials}>
              <div style={styles.testimonial}>
                <div style={styles.testimonialLogo}>
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Kensmatic Foods logo"
                    style={styles.testimonialImg}
                  />
                </div>
                <div style={styles.testimonialQuote}>
                  <span style={styles.quoteSymbol}>"</span>
                  <p style={styles.quoteText}>
                    Tradeling is helping us bring healthy foods to the MENA region. We are reaching more customers and
                    making more sales, at no additional cost.
                  </p>
                  <span style={styles.quoteSymbol}>"</span>
                </div>
                <p style={styles.testimonialAuthor}>Henry Haddad, General Manager, Kensmatic Foods</p>
              </div>
  
              <div style={styles.testimonial}>
                <div style={styles.testimonialLogo}>
                  <img src="/placeholder.svg?height=80&width=80" alt="BRF logo" style={styles.testimonialImg} />
                </div>
                <div style={styles.testimonialQuote}>
                  <span style={styles.quoteSymbol}>"</span>
                  <p style={styles.quoteText}>
                    Having our products listed on Tradeling definitely makes sense. All of our products are available
                    online for potential customers to see and get in touch with us directly.
                  </p>
                  <span style={styles.quoteSymbol}>"</span>
                </div>
                <p style={styles.testimonialAuthor}>Sao Marcos Sales Manager, BRF - Sadia Foods</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* FAQ section (from seller 1 4.png) */}
        <section style={styles.faqSection}>
          <div style={styles.faqContent}>
            <h2 style={styles.faqHeading}>Frequently asked questions</h2>
  
            <div style={styles.faqList}>
              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  <p>How do I register as a Seller on Tradeling?</p>
                  <span style={styles.faqArrow}>▼</span>
                </div>
              </div>
  
              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  <p>How do I start selling on Tradeling?</p>
                  <span style={styles.faqArrow}>▼</span>
                </div>
              </div>
  
              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  <p>What products can I sell on Tradeling?</p>
                  <span style={styles.faqArrow}>▼</span>
                </div>
              </div>
  
              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  <p>What is the benefit of being verified as a Seller?</p>
                  <span style={styles.faqArrow}>▼</span>
                </div>
              </div>
  
              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  <p>How to get verified as a Seller?</p>
                  <span style={styles.faqArrow}>▼</span>
                </div>
              </div>
  
              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  <p>Can I sell in the UAE?</p>
                  <span style={styles.faqArrow}>▼</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  // Internal CSS styles
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      lineHeight: 1.6,
      margin: 0,
      padding: 0,
    },
  
    // Hero section styles
    heroSection: {
      backgroundColor: "#003a4d",
      color: "white",
      padding: "60px 0 0",
      position: "relative",
      overflow: "hidden",
    },
    heroContent: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 20px",
      display: "flex",
      justifyContent: "space-between",
    },
    heroText: {
      width: "50%",
      paddingBottom: 100,
    },
    heroHeading: {
      fontSize: 42,
      marginBottom: 20,
      fontWeight: "bold",
    },
    heroParagraph: {
      fontSize: 16,
      marginBottom: 30,
      lineHeight: 1.6,
    },
    heroImage: {
      width: "50%",
      position: "relative",
    },
    heroImg: {
      width: "100%",
      maxWidth: 600,
    },
    ctaButton: {
      backgroundColor: "#ff5722",
      color: "white",
      padding: "12px 24px",
      border: "none",
      fontWeight: "bold",
      fontSize: 14,
      cursor: "pointer",
    },
    waveDivider: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 100,
      backgroundColor: "white",
      borderRadius: "100% 100% 0 0",
    },
    backedBy: {
      fontSize: 14,
      marginTop: 20,
      display: "flex",
      alignItems: "center",
    },
  
    // Trust section styles
    trustSection: {
      backgroundColor: "white",
      padding: "40px 0",
      textAlign: "center",
    },
    trustContent: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 20px",
    },
    trustHeading: {
      color: "#003a4d",
      fontSize: 24,
      marginBottom: 40,
      maxWidth: 800,
      marginLeft: "auto",
      marginRight: "auto",
    },
    featuresGrid: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginTop: 40,
    },
    featureCard: {
      width: "23%",
      textAlign: "left",
      marginBottom: 30,
    },
    featureIcon: {
      width: 60,
      height: 60,
      marginBottom: 15,
    },
    featureTitle: {
      color: "#003a4d",
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
    },
    featureDescription: {
      fontSize: 14,
      color: "#666",
    },
  
    // How it works section
    howItWorks: {
      backgroundColor: "#f5f5f5",
      padding: "60px 0",
    },
    howItWorksContent: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 20px",
      display: "flex",
    },
    processImage: {
      width: "45%",
    },
    processImg: {
      width: "100%",
      maxWidth: 500,
    },
    processSteps: {
      width: "55%",
      paddingLeft: 40,
    },
    processHeading: {
      color: "#003a4d",
      fontSize: 28,
      marginBottom: 30,
    },
    step: {
      marginBottom: 30,
    },
    stepTitle: {
      fontWeight: "bold",
      fontSize: 18,
      color: "#003a4d",
      marginBottom: 10,
    },
    stepDescription: {
      fontSize: 14,
      color: "#666",
      marginBottom: 10,
    },
    learnMore: {
      color: "#003a4d",
      fontSize: 14,
      fontWeight: "bold",
      textDecoration: "none",
    },
  
    // Payment terms section
    paymentSection: {
      backgroundColor: "white",
      padding: "40px 0",
    },
    paymentContent: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 20px",
    },
    tabs: {
      display: "flex",
      marginBottom: 0,
    },
    tabActive: {
      padding: "15px 30px",
      fontWeight: "bold",
      backgroundColor: "#003a4d",
      color: "white",
      cursor: "pointer",
    },
    tabInactive: {
      padding: "15px 30px",
      fontWeight: "bold",
      backgroundColor: "#e0e0e0",
      color: "#666",
      cursor: "pointer",
    },
    tabContent: {
      border: "1px solid #e0e0e0",
      padding: 30,
    },
    tabParagraph: {
      marginBottom: 15,
      fontSize: 14,
      color: "#666",
    },
    paymentOptions: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: 20,
    },
    paymentOption: {
      width: "25%",
      display: "flex",
      alignItems: "center",
      marginBottom: 10,
      fontSize: 14,
    },
    checkmark: {
      color: "#ff5722",
      marginRight: 10,
      fontWeight: "bold",
    },
  
    // International sellers section
    internationalSection: {
      backgroundColor: "white",
      padding: "60px 0",
    },
    internationalContent: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 20px",
      display: "flex",
    },
    internationalText: {
      width: "50%",
    },
    internationalHeading: {
      color: "#003a4d",
      fontSize: 28,
      marginBottom: 30,
    },
    benefitsList: {
      marginTop: 20,
    },
    benefitItem: {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: 20,
    },
    benefitText: {
      fontSize: 16,
      color: "#333",
      margin: 0,
    },
    internationalImage: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    flagsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginRight: 20,
    },
    flag: {
      marginBottom: 10,
      border: "1px solid #eee",
    },
    globeImage: {
      maxWidth: "100%",
    },
  
    // Partners section
    partnersSection: {
      backgroundColor: "white",
      padding: "40px 0",
      borderTop: "1px solid #eee",
    },
    partnersContent: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 20px",
      textAlign: "center",
    },
    partnersHeading: {
      color: "#003a4d",
      fontSize: 28,
      marginBottom: 10,
    },
    partnersSubheading: {
      fontSize: 16,
      color: "#666",
      marginBottom: 40,
    },
    partnersLogos: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: 30,
    },
    partnerLogo: {
      height: 60,
      objectFit: "contain",
    },
  
    // Success stories section
    successSection: {
      backgroundColor: "#f5f5f5",
      padding: "60px 0",
    },
    successContent: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 20px",
    },
    successHeading: {
      color: "#003a4d",
      fontSize: 28,
      marginBottom: 40,
      textAlign: "center",
    },
    testimonials: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    testimonial: {
      width: "48%",
      backgroundColor: "white",
      borderRadius: 8,
      padding: 30,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    testimonialLogo: {
      width: 80,
      height: 80,
      borderRadius: "50%",
      overflow: "hidden",
      marginBottom: 20,
    },
    testimonialImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    testimonialQuote: {
      position: "relative",
      marginBottom: 20,
    },
    quoteSymbol: {
      fontSize: 40,
      color: "#ddd",
      position: "relative",
      lineHeight: 0,
    },
    quoteText: {
      fontSize: 16,
      color: "#666",
      fontStyle: "italic",
      margin: "10px 0",
    },
    testimonialAuthor: {
      fontSize: 14,
      color: "#999",
    },
  
    // FAQ section
    faqSection: {
      backgroundColor: "white",
      padding: "60px 0",
    },
    faqContent: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 20px",
    },
    faqHeading: {
      color: "#003a4d",
      fontSize: 28,
      marginBottom: 40,
      textAlign: "center",
    },
    faqList: {
      maxWidth: 800,
      margin: "0 auto",
    },
    faqItem: {
      borderBottom: "1px solid #eee",
    },
    faqQuestion: {
      padding: "20px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
    },
    faqArrow: {
      fontSize: 12,
      color: "#003a4d",
    },
  }