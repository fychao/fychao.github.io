<template>
  <v-row>
    <v-col cols="12">
      <div class="academy-header">
        <div>
          <div class="academy-title">Academic Publications &amp; Patents</div>
          <div class="academy-subtitle">Department of Computer Science and Information Engineering, National Penghu University of Science and Technology</div>
        </div>
      </div>
      <v-card class="pub-card academy-card">
        <blockquote class="academy-quote">
          <span>“In honor of Chao's and Ma's Families. Be A Happy Philosopher”</span>
          <span class="academy-quote-author">— August F.Y. Chao</span>
        </blockquote>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="12">
              <div id="journal" style="position:relative; top:-96px; height:0;"></div>
              <section class="academy-section">
                <h2 class="academy-section-title">Journal</h2>
                <v-card outlined class="mb-4 inner-full academy-section-card">
                  <div class="p-3" v-html="journalsHtml"></div>
                </v-card>
              </section>

              <div id="conference" style="position:relative; top:-96px; height:0;"></div>
              <section class="academy-section">
                <h2 class="academy-section-title">Conference</h2>
                <v-card outlined class="inner-full academy-section-card">
                  <div class="p-3" v-html="conferencesHtml"></div>
                </v-card>
              </section>

              <div id="patents" style="position:relative; top:-96px; height:0;"></div>
              <section class="academy-section">
                <h2 class="academy-section-title">Patents</h2>
                <v-card outlined class="mt-4 inner-full academy-section-card">
                  <div class="p-3" v-html="patentsHtml"></div>
                </v-card>
              </section>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import patentsMd from '../content/patents.md?raw'
import journalsMd from '../content/journals.md?raw'
import conferenceMd from '../content/conference.md?raw'

export default {
  name: 'PublicationsView',
  data() {
    return {
      patentsHtml: patentsMd,
      journalsHtml: journalsMd,
      conferencesHtml: conferenceMd
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=EB+Garamond:wght@400;700&display=swap');

:root {
  --academy-navy: #1a237e;
  --academy-gold: #bfa14a;
  --academy-bg: #f9f8f6;
  --academy-border: #d1c7b7;
}

.pub-card {
  width: 95%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background: #f7f3e9; /* parchment/ivory academic look */
  border: 2px solid var(--academy-border);
  box-shadow: 0 4px 24px 0 rgba(26,35,126,0.08);
  font-family: 'EB Garamond', 'Noto Serif TC', serif;
}

.academy-section-card {
  background: #fcfaf6; /* lighter parchment for section cards */
  border: 1.5px solid var(--academy-border);
  box-shadow: 0 2px 8px 0 rgba(26,35,126,0.04);
}

.academy-header {
  display: flex;
  align-items: center;
  margin: 2rem auto 1.5rem auto;
  width: 95%;
  max-width: 1200px;
  background: #fff;
  border-bottom: 3px solid var(--academy-navy);
  padding: 1.2rem 2rem 1.2rem 1rem;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 2px 8px 0 rgba(26,35,126,0.06);
}
.academy-title {
  font-size: 2.1rem;
  font-weight: 700;
  color: var(--academy-navy);
  font-family: 'EB Garamond', 'Noto Serif TC', serif;
  letter-spacing: 1px;
}
.academy-subtitle {
  font-size: 1.1rem;
  color: var(--academy-gold);
  font-family: 'Noto Serif TC', serif;
  margin-top: 0.2rem;
}

.academy-quote {
  font-size: 1.1rem;
  color: #444;
  border-left: 4px solid var(--academy-gold);
  margin: 2rem 0 2.5rem 0;
  padding: 0.7rem 1.5rem 0.7rem 1.2rem;
  background: #fffbe7;
  font-style: italic;
  font-family: 'EB Garamond', 'Noto Serif TC', serif;
}
.academy-quote-author {
  display: block;
  text-align: right;
  color: var(--academy-navy);
  font-size: 1rem;
  font-style: normal;
  margin-top: 0.5rem;
}

.academy-section {
  margin-bottom: 2.5rem;
}
.academy-section-title {
  font-size: 1.5rem;
  color: var(--academy-navy);
  font-family: 'EB Garamond', 'Noto Serif TC', serif;
  font-weight: 700;
  margin-bottom: 0.5rem;
  border-left: 6px solid var(--academy-gold);
  padding-left: 0.7rem;
  letter-spacing: 0.5px;
}
.academy-section-card {
  background: #fff;
  border: 1.5px solid var(--academy-border);
  box-shadow: 0 2px 8px 0 rgba(26,35,126,0.04);
}

.inner-full {
  width: 100%;
}

.p-3 {
  padding: 2rem;
}

.mb-4 { margin-bottom: 1rem }

.academy-big-a-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7.5rem;
  margin-bottom: 2rem;
  grid-row: span 2;
}
.academy-big-a {
  font-family: 'EB Garamond', 'Noto Serif TC', serif;
  font-size: 7rem;
  font-weight: 900;
  color: var(--academy-navy);
  letter-spacing: 0.1em;
  line-height: 1;
  text-shadow: 0 2px 8px rgba(26,35,126,0.10);
  border-bottom: 4px double var(--academy-gold);
  padding: 0 2rem 0.5rem 2rem;
  user-select: none;
}

@media (max-width: 768px) {
  .pub-card, .academy-header { width: 100%; padding: 0.5rem }
  .academy-title { font-size: 1.3rem; }
  .academy-logo { width: 40px; height: 40px; }
  .p-3 { padding: 1rem; }
}
</style>
