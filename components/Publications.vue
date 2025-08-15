<template>
  <v-container class="py-4">
    <v-card elevation="2">
      <v-card-title>發表論文 Professional Publications</v-card-title>
      <v-card-text>
        <h3>Publish in Journal</h3>
        <v-list density="compact">
          <v-list-item v-for="item in journals" :key="item">
            <v-list-item-title v-html="item"></v-list-item-title>
          </v-list-item>
        </v-list>
        <h3>Publish in Conference</h3>
        <v-list density="compact">
          <v-list-item v-for="item in confs" :key="item">
            <v-list-item-title v-html="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script setup>
const journals = [
  '<strong>Chao, A. F.</strong>, Wang, C. S., Li, B. Y., & Chen, H. Y. (2024). From hate to harmony: Leveraging large language models for safer speech in times of COVID-19 crisis. Heliyon, 10(16). SCIE ',
  '鍾曉芳、謝承諭、楊惟婷、王淑琴、林蒔慧、<strong>趙逢毅</strong>、顏郁哲, 2023.12, \'跨語言空殼名詞平行語料庫建置\', 《外國語文研究》第三十八期, 第 1-35 頁。(THCI)',
  'Yang, Heng-Li;<strong>Chao, August F.Y.</strong>, 2018.04, \'Sentiment Annotations for Reviews: An Information Quality Perspective, \' Online Information Review,.(SSCI)',
  '<strong>Chao, August F.Y.</strong>;Yang, Heng-Li, 2018.01, \'Using Chinese Radical Parts for Sentiment Analysis and Domain-dependent Seed Set Extraction, \' Computer Speech & Language, Vol.47, pp.194-213.(SCIE)',
  '<strong>Chao, A. F.</strong>, & Lai, C. Y. (2015). SNS Opinion-Based Recommendation for eTourism: A Taipei Restaurant Example. In Multidisciplinary Social Networks Research (pp. 393-403). Springer Berlin Heidelberg. (EI)',
  'Yang, Heng-Li;<strong>Chao, August F.Y.</strong>, 2015.11, \'Sentiment Analysis for Chinese Reviews of Movies in Multi-genre ---Based on Morpheme-based Features and Collocations, \' Information Systems Frontiers, Vol.17, No.6, pp.1335-1352.(SCI)',
  '<strong>趙逢毅</strong>、鍾曉芳。2013。基於字典釋義關聯方法的同義詞概念擷取：以《同義詞詞林（擴展版）》為例。中文計算語言學期刊。Special Issue on Chinese Lexical Resources: Theories and Applications. 18(2). pp.35-56. (THCI)',
  '<strong>Chao,August F.Y.</strong>;Yang, Heng-Li, 2012.04, "Knowledge Sharing Effects on the Market of Used Durable Goods: Agent-based Simulation Approach," Journal of Convergence Information Technology, Vol.7, No.7, pp.253 – 264.(EI)',
  'Chung, Siaw-Fong, <strong>F. Y. August Chao</strong>, Tien-Yu Lan, and Yen-Yu Lin. 2011. “Analyses of the Semantic Features of the Lexical Bundle [(VERB) PREPOSITION the NOUN of].” Language Value, 3(1). pp. 138-152. Also presented at the Third International Seminar on Metaphor and Discourse: Verb-particle Constructions and their Underlying Semantic Systems. Universitat Jaume I, Castelló de la Plana, Spain. October 19-20. (ISOC)',
  '<strong>趙逢毅</strong>、鍾曉芳。2011。基於辭典詞彙釋義之多階層語義關聯程度計量 ─ 以「目」字部為例。中文計算語言學期刊。16（3-4）。21-40頁 。(THCI Core)',
  '楊亨利、<strong>趙逢毅</strong>，“基於知識本體之文獻多維度關聯視覺化導覽平台，電子商務學報，第十三卷，第一期，2011年，27~54。(TSSCI)',
];
const confs = [
  '<strong>August F. Y. Chao</strong>, "運用增強檢索生成技術在農業應用初探-以番茄種植為例"， to be announced in 第29屆資訊管理暨實務研討會(IMP 2024). ',
  '<strong>August F. Y. Chao</strong>, "Blending Visitor Familiarity and Site Significance: RAG Enhanced Heritage Interpretation," In 2024 IEEE 13th Global Conference on Consumer Electronics (GCCE 2024), IEEE. ',
  '<strong>August F. Y. Chao</strong>, Yi Lun Tseng, "From SSDs to AI: Evolving Data Center Architectures for the Next Generation," 2024, TANET, Taipei, Taiwan. ',
  'Y.-S. Liu, H.-C. Lai, J.-L. Huang and <strong>August F. Y. Chao</strong>, "On Detecting Cloud Container Failures from Computing Utility Sequences," Proceedings of Asia-Pacific Network Operations and Management Symposium (APNOMS), September 8-10, 2021. (Poster)',
  '劉昱劭, <strong>趙逢毅</strong>, 黃俊龍，Pytorchor Tensorflow? A Lightweight CNN for container utilization analytics on TWCC cloud platform.，2020, TANET, 台北, 台灣。',
  '方育斌，侯景祥， <strong>趙逢毅 </strong>，雲端運算平台之自動化軟體測試架構，第16屆 台灣軟體工程研討會，二○二○年七月，嘉義，台灣。',
  '胡芯瑜, 陳博文, 楊銘軒, <strong>趙逢毅</strong>, 應用人工智慧進行郵件預測處理時間的初探, 2019 Cyberspace, 2019-10-18, 大同大學。',
  'August F.Y. Chao, A General Domain Task for Benchmarking both Big Data Analytics and Deep Learning in Taiwan, 2018, TANET, 桃園, 台灣。',
  '王貞淑, <strong>趙逢毅</strong>, 賴正育, 以開放資料實作個人用藥安全管理應用程式, Open Data Conference, 2014-11-14, 台北大學。',
  '<strong>趙逢毅</strong>, 楊亨利, 2014五月, 使用情感運算方法分析澎湖景點旅遊評論, ICIM2014第25屆國際資訊管理學術研討會, 中興大學, 台中。 ',
  '<strong>Chao, F. Y. August</strong> and Siaw-Fong Chung. 2013. “A Corpus-driven Pattern Analysis in Locative Phrases: A Statistical Comparison of Co-appearing Concepts in Fixed Frames” (語料庫導向之方位短句於固定框架的共現概念統計分析). Poster presented and paper in the Proceedings of the 25th Conference on Computational Linguistics and Speech Processing (ROCLING 2013). Kaohsiung, Taiwan, October 4-5.',
  '<strong>Chao, F. Y. August</strong> and Siaw-Fong Chung. 2013. “A Lexico-Semantic Analysis of Chinese Locality Phrases – A Topic Clustering Approach.” Iin the Proceedings of the Sixth International Conference on the Generative Approaches to the Lexicon. Pisa, Italy. September 24-25.',
  'Chung, Siaw-Fong and <strong>F.Y. August Chao</strong>. 2012. “A Semantic Integrated Vocabulary Analyzing Tool for ESL Teaching.” Paper presented at the 3rd International Symposium on Lexicography and L2 Teaching & Learning. Shaanxi Normal University, China. October 20-22.',
  '<strong>Chao, F.Y. August</strong> and Siaw-Fong Chung. 2012. “VocabGraph: Semantic Graph Inspector with Referred Word List.” Poster presented at the International Conference on Applied Linguistics and Language Teaching (ALLT). National Taiwan University of Science and Technology, Taiwan. April, 19-21.',
  'Chung, Siaw-Fong and <strong>F. Y August Chao</strong>. 2011. “Preposition-Containing Lexical Bundles and Idiomatic Expressions in Economics Dissertations.” Presented at the 10th Conference for the American Association for Corpus Linguistics (AACL), Georgia State University in Atlanta, GA, USA, October 7-9.',
  'Yang, Heng-Li;<strong>Chao,August F.Y.</strong>, 2011.10, "Agent-based Modeling of Knowledge Sharing and Used-Car Market," The 4th International Workshop on Artificial Intelligence Applications for E-services at the 16th North-East Asia Symposium on Nano, Information Technology and Reliability.(EI)',
  '<strong>Chao, F. Y. August</strong> and Siaw-Fong Chung. 2010. “A Measurement of Metaphorical Relations in Mandarin Lexemes with Radical mu4: A Study based on Dictionary Explanation.” In the Proceedings of the Eleventh Chinese Lexical Semantics Workshop (CLSW 2010). Soochow University, China. May 21-23. pp. 148-154.',
  'Chung, Siaw-Fong, Chun-hung Chen and <strong>F.Y. August Chao</strong>. “Related Ontological Concepts of Mandarin Metaphors.”, Proceedings of the Third IEEE International Conference on Semantic Computing (ICSC). Berkeley, CA, USA. September 14-16, 2009.',
  '楊亨利、<strong>趙逢毅</strong>，“兩岸三地問答平台之比較初探，十五屆海峽兩岸資訊管理發展與策略學術研討會，2009年8月18-20日，同濟大學，中國上海。',
  'Heng-Li Yang, <strong>August F.Y. Chao</strong>, “Design and Implementation of SOA-Driven Campus Email Service”, Business and Information 2009, July 6~8, Kuala Lumpur, Malaysia.',
  '楊亨利、<strong>趙逢毅</strong>，“協助搜尋文獻的平台之芻議”，十三屆海峽兩岸資訊管理發展與策略學術研討會，2007年8月18-20日，北京交通大學，中國北京。',
  '楊亨利、<strong>趙逢毅</strong>，“建構在全國博、碩士論文資訊網上的視覺化文獻互動關聯式瀏覽平台架構”，第六屆管理新思維研討會，2007年11月2日，台灣科技大學，台灣台北。',
  '楊亨利、趙逢毅，“原位行動服務之個案探討”，第九屆電子化企業經營管理理論暨實務研討會，2008年5月24日，大葉大學，台灣彰化。',
  'Jiann-Min Yang, <strong>August F.Y. Chao</strong> and Hsuan Li, “A service-oriented framework of distributed elder house-care system: The enhanced data mining approach”, 2008 International Conference on Gerontic Technology and Service Management, May 20~21, NKU, Nantou, Taiwan.',
];
</script>
