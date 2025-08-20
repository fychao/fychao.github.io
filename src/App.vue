<template>
  <div class="container">
    <header>
      <h1>Dr. Fu-Yang Chao</h1>
      <p class="subtitle">研究領域：計算科學 · 機器學習 · 資料科學</p>
    </header>

    <main>
      <section class="card">
        <h2>About</h2>
        <p>我是一位專注於演算法與資料科學的學者，研究興趣包含深度學習、可解釋性模型，以及大型資料處理。</p>
      </section>

      <section class="card">
        <h2>Selected Publications</h2>
        <ul>
          <li><a href="#">An example paper title (2024)</a></li>
          <li><a href="#">Another paper title (2023)</a></li>
        </ul>
      </section>

      <section class="card">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:example@domain.tld">example@domain.tld</a></p>
      </section>
    </main>

    <footer>
      <small>Generated with Vite + Vue 3 — ready for GitHub Pages</small>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
}
header h1 {
  margin: 0 0 0.25rem 0;
}
.subtitle { color: #555; margin-top: 0 }
.card { background: #fff; border: 1px solid #eee; padding: 1rem; margin: 1rem 0; border-radius: 6px }
footer { text-align: center; color: #777; margin-top: 2rem }
</style>
