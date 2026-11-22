/* Gyaan Saathi static library: in-page PDF reader (pdf.js vendored locally,
   loaded on first tap), no login, no build step. */
(function () {
  'use strict';

  var ITEMS = {
    'list-selected': [
      { n: 18, title: 'बी.ए. द्वितीय वर्ष, पेपर 1: गद्य, दर्शन एवं व्याकरण', detail: '2022–23 के मध्य प्रदेश पाठ्यक्रम पर आधारित A2-SANS1T की चयनित अध्ययन-सहायिका। पूरी पाठ्यपुस्तक या प्रमाणित पुराने प्रश्नपत्रों का संकलन नहीं। धार/DAVV के वर्तमान पाठ्यक्रम से मिलान अपुष्ट है।', meta: '19 पेज • 2022–23 आधार • चयनित अध्ययन-सहायिका', file: 'ba2-paper1-selected-2022-23.pdf' },
      { n: 21, title: "बी.ए. द्वितीय वर्ष, पेपर 2: महाकाव्य एवं नाटक", detail: "A2-SANS2T की चयनित सहायता: रघुवंश, नाट्य-विषय और अभिज्ञानशाकुन्तल का परिचय। MP2022–23 पाठ्यक्रम पर आधारित; वर्तमान धार/DAVV मिलान अपुष्ट। पूरा मूलपाठ, पद-पद व्याख्या या प्रमाणित PYQ-संग्रह नहीं।", meta: "22 पेज • 2022–23 आधार • चयनित अध्ययन-सहायिका", file: "ba2-paper2-selected-2022-23.pdf" },
      { n: 19, title: 'एम.ए. सेमेस्टर 2, पेपर 5: कारकप्रकरण', detail: 'PGT-SANS5: डिजिटल स्रोत के सूत्र 532–645 (114 सूत्र), हिंदी अर्थ और उदाहरण सहित अध्ययन-सार। पूरी टीका या सम्पूर्ण परीक्षा-तैयारी नहीं। मुद्रित संस्करणों से तुलनात्मक पाठ-मिलान नहीं किया गया है; अपनी निर्धारित पुस्तक साथ रखें।', meta: '44 पेज • डिजिटल-स्रोत आधारित • सूत्र 532–645', file: 'ma2-paper5-karaka-digital-532-645.pdf' },
      { n: 17, title: 'एम.ए. संस्कृत: वेदान्तसार (सदानन्द), चयनित अंश', detail: 'डिजिटल क्रम के खण्ड 50–121: संस्कृत मूल पाठ, जी. ए. जैकब का अंग्रेज़ी अनुवाद और हिंदी व्याख्या। यह पूरा वेदान्तसार, पूरा पेपर 6 या पूरे पाठ्यक्रम के नोट्स नहीं हैं।', meta: '47 पेज • केवल चयनित खण्ड 50–121', file: 'vedantasara-chayanit-50-121.pdf' },
      { n: 22, title: "एम.ए. सेमेस्टर 3, पेपर 9: नाट्यशास्त्रम्", detail: "PGT-SANS9: नाट्यशास्त्र और दशरूपक के चुने हुए सिद्धान्त, हिंदी विवेचन और मौलिक अभ्यास। MP2025–26 मॉडल पर आधारित; कॉलेज-अंगीकरण अपुष्ट। संक्षिप्त सहायता है, पूरा मूलग्रन्थ, हर कारिका की व्याख्या या सम्पूर्ण परीक्षा-तैयारी नहीं। अभ्यास पुराने प्रश्नपत्र नहीं हैं।", meta: "26 पेज • MP 2025–26 • संक्षिप्त अध्ययन-सहायिका", file: "ma3-paper9-natyashastra-selected-mp2025-26.pdf" },
      { n: 23, title: "एम.ए. सेमेस्टर 3, पेपर 10: नाट्यम्", detail: "PGT-SANS10: मुद्राराक्षस, मृच्छकटिक और उत्तररामचरित के निर्धारित अंकों का कथाक्रम, पात्र, विवेचन और चयनित पद्य। MP2025–26 मॉडल पर आधारित; कॉलेज-अंगीकरण अपुष्ट। पूरा मूलग्रन्थ या पद-पद व्याख्या नहीं; मौलिक अभ्यास को पुराने प्रश्नपत्र न मानें।", meta: "26 पेज • MP 2025–26 • चयनित अध्ययन-सहायिका", file: "ma3-paper10-natya-selected-mp2025-26.pdf" },
      { n: 25, title: "एम.ए. सेमेस्टर 3, पेपर 11: काव्यम्", detail: "PGT-SANS11: मेघदूत के 13 चुने पद्य, नलचम्पू के चयनित अंश और हर्षचरित का कथासार। उद्धृत हर्षचरित-पाठ संक्षिप्त लघुसंग्रह से है, पूरा पंचम उच्छ्वास नहीं। MP2025–26 मॉडल; कॉलेज-अंगीकरण अपुष्ट। पूरा मूलपाठ या सम्पूर्ण टीका नहीं। मौलिक अभ्यास पुराने प्रश्नपत्र नहीं हैं।", meta: "39 पेज • MP 2025–26 • चयनित अध्ययन-सहायिका", file: "ma3-paper11-kavya-selected-mp2025-26.pdf" },
      { n: 26, title: "एम.ए. सेमेस्टर 3, पेपर 12: काव्यप्रकाश", detail: "PGT-SANS12: काव्य, शब्दशक्ति और ध्वनि की चयनित अवधारणाएँ। प्रथम से षष्ठ उल्लास की पढ़ाई के लिए परिचय और उत्तरलेखन अभ्यास। MP2025–26 मॉडल; कॉलेज-अंगीकरण अपुष्ट। पूरा मूलपाठ या सम्पूर्ण टीका नहीं। मौलिक अभ्यास पुराने प्रश्नपत्र नहीं हैं।", meta: "13 पेज • MP 2025–26 • चयनित अध्ययन-सहायिका", file: "ma3-paper12-kavyaprakasha-selected-mp2025-26.pdf" },
      { n: 27, title: "एम.ए. सेमेस्टर 4, पेपर 13: काव्यप्रकाश", detail: "PGT-SANS13: दोष, गुण और अलंकार का चयनित परिचय। सप्तम से दशम उल्लास के विषयों की रूपरेखा और उदाहरण-विश्लेषण। MP2025–26 मॉडल; कॉलेज-अंगीकरण अपुष्ट। पूरा मूलपाठ या सम्पूर्ण टीका नहीं। मौलिक अभ्यास पुराने प्रश्नपत्र नहीं हैं।", meta: "15 पेज • MP 2025–26 • चयनित अध्ययन-सहायिका", file: "ma4-paper13-kavyaprakasha-selected-mp2025-26.pdf" },
      { n: 28, title: "एम.ए. सेमेस्टर 4, पेपर 14: ध्वन्यालोक और औचित्यविचारचर्चा", detail: "PGT-SANS14: ध्वनि और औचित्य के चुनिंदा सिद्धान्त, तुलना और उदाहरणों को समझने की सहायता। हर पद्य और वृत्ति का अनुवाद नहीं। MP2025–26 मॉडल; कॉलेज-अंगीकरण अपुष्ट। पूरा मूलपाठ या सम्पूर्ण टीका नहीं। मौलिक अभ्यास पुराने प्रश्नपत्र नहीं हैं।", meta: "14 पेज • MP 2025–26 • चयनित अध्ययन-सहायिका", file: "ma4-paper14-dhvani-aucitya-selected-mp2025-26.pdf" },
      { n: 29, title: "एम.ए. सेमेस्टर 4, पेपर 15: काव्यमीमांसा और वक्रोक्तिजीवित", detail: "PGT-SANS15: कविशिक्षा, प्रतिभा और वक्रता पर चयनित सहायता। अध्यायों की दिशा, प्रमुख विचार और उत्तरलेखन अभ्यास। MP2025–26 मॉडल; कॉलेज-अंगीकरण अपुष्ट। पूरा मूलपाठ या सम्पूर्ण टीका नहीं। मौलिक अभ्यास पुराने प्रश्नपत्र नहीं हैं।", meta: "15 पेज • MP 2025–26 • चयनित अध्ययन-सहायिका", file: "ma4-paper15-kavyamimamsa-vakrokti-selected-mp2025-26.pdf" },
      { n: 24, title: "एम.ए. सेमेस्टर 4, पेपर 16: काव्यशास्त्र के पाँच सम्प्रदाय", detail: "PGT-SANS16: रस, ध्वनि, अलंकार, रीति और औचित्य का संक्षिप्त परिचय, चयनित सूत्र, हिंदी विवेचन और मौलिक अभ्यास। MP2025–26 मॉडल पर आधारित; कॉलेज-अंगीकरण अपुष्ट। पूरे मूलग्रन्थों का अनुवाद, पूरा इतिहास या सम्पूर्ण परीक्षा-तैयारी नहीं। अभ्यास पुराने प्रश्नपत्र नहीं हैं।", meta: "26 पेज • MP 2025–26 • संक्षिप्त अध्ययन-सहायिका", file: "ma4-paper16-poetics-schools-selected-mp2025-26.pdf" },
      { n: 20, title: 'एम.ए. सेमेस्टर 3–4: पाठ्यक्रम और अध्ययन-सीमा मानचित्र', detail: 'MP मॉडल पाठ्यक्रम 2025–26: आठ प्रश्नपत्रों की इकाइयों और मूलग्रन्थ-सीमा का मानचित्र। यह अध्ययन-नोट्स या सामग्री पूरी होने का प्रमाण नहीं है। अपने कॉलेज में इस पाठ्यक्रम का अंगीकरण अलग से जाँचें; यहाँ उसकी पुष्टि नहीं हुई है।', meta: '7 पेज • MP 2025–26 • कॉलेज-अंगीकरण अपुष्ट', file: 'ma3-ma4-curriculum-scope-map-mp2025-26.pdf' },
    ],
    'list-jobs': [
      { n: 1, title: 'India ki sarkari bhartiyan, 22 नवंबर 2026', detail: '53 catalogue entries + UPPSC RO/ARO follow-up. हर entry में qualification, age, fees, official link और source-check की तारीख. बड़े अक्षरों वाली PDF.', meta: '93 पेज • 22 नवंबर 2026', file: 'sarkari-bhartiyan-22-nov-2026.pdf' }
    ],
    'list-ma': [
      { n: 2, title: 'पेपर 1: वैदिक वाङ्मय, निरुक्त एवं पाणिनीयशिक्षा', detail: 'DAVV के पुराने पेपरों का विश्लेषण, तैयारी की प्राथमिकता, अभ्यास-प्रश्न और अध्ययन-नोट्स।', meta: '66 पेज', file: 'ma1-ved-nirukta-shiksha.pdf' },
      { n: 3, title: 'पेपर 2: दर्शनशास्त्र (तर्कभाषा, सांख्यकारिका, योगसूत्र)', detail: 'पुराने पेपर और कक्षा में बताई गई प्राथमिकता का मिलान, अभ्यास-प्रश्न, कारिका और सूत्र का मूल पाठ सहित।', meta: '114 पेज', file: 'ma2-darshan.pdf' },
      { n: 4, title: 'पेपर 3: व्याकरण एवं भाषा-विज्ञान', detail: 'पुराने पेपरों का विश्लेषण, प्राथमिकता-सूची, अभ्यास-प्रश्न और सूत्र-व्याख्या लिखने की विधि।', meta: '71 पेज', file: 'ma3-vyakaran-bhashavigyan.pdf' },
      { n: 5, title: 'पेपर 4: संस्कृत साहित्येतिहास (रामायण, महाभारत, राजतरंगिणी)', detail: 'पाठ्यक्रम-आधारित प्राथमिकता, अभ्यास-प्रश्न और प्रथम तरङ्ग के पद्य-समूहों का अध्ययन।', meta: '70 पेज', file: 'ma4-sahityetihas.pdf' },
      { n: 6, title: 'महत्त्वपूर्ण मन्त्र, श्लोक, सूत्र एवं कथन-संग्रह', detail: 'चारों पेपरों का एक ही संग्रह, पेपरवार खण्ड, सरल हिंदी अर्थ और प्रश्न-उपयोग के साथ।', meta: '33 पेज', file: 'ma-shlok-sangrah.pdf' },
      { n: 7, title: 'MA संस्कृत पाठ्यक्रम 2025-26 (official दस्तावेज़)', detail: 'विश्वविद्यालय के official पाठ्यक्रम की प्रति, हर पेज पर संस्था के हस्ताक्षर-मुहर सहित। दस्तावेज़ जैसा मिला वैसा रखा गया है; मौजूदा exam-नियमों के रूप में प्रमाणित नहीं, अपने college या विश्वविद्यालय से अवश्य मिलाएँ।', meta: '20 पेज • official दस्तावेज़', file: 'MA-Sanskrit-1st-Year-Syllabus-2025-26-Official.pdf' }
    ],
    'list-ba': [
      { n: 8, title: 'पेपर 1: वेद ज्ञान परम्परा', detail: 'वेद ज्ञान परम्परा के अध्ययन-नोट्स, मन्त्रों के सरल भावार्थ सहित।', meta: '76 पेज', file: 'ba1-ved-gyan-parampara.pdf' },
      { n: 9, title: 'पेपर 2: व्याकरण', detail: 'व्याकरण के टॉपिकवार अध्ययन-नोट्स, अभ्यास-प्रश्न और उत्तर-लेखन की विधि सहित।', meta: '93 पेज', file: 'ba2-vyakaran.pdf' },
      { n: 10, title: 'पेपर 3: अर्ष काव्य परम्परा', detail: 'रामायण और महाभारत खण्डों के अध्ययन-नोट्स, पद्य-विश्लेषण सहित।', meta: '41 पेज', file: 'ba3-arsha-kavya-parampara.pdf' },
      { n: 11, title: 'पाठ्यक्रम एवं पुराने प्रश्नपत्रों का विश्लेषण', detail: 'मध्य प्रदेश उच्च शिक्षा विभाग के अनुमोदित पाठ्यक्रम (2025-26) की जानकारी और पुराने पेपरों से तैयारी की दिशा।', meta: '7 पेज', file: 'ba-syllabus-pyq-analysis.pdf' },
      { n: 12, title: 'Core-1 वेद: ज्ञान परम्परा — official पाठ्यक्रम (scan)', detail: 'संस्था के हस्ताक्षर वाले official पाठ्यक्रम दस्तावेज़ का scan। जैसा मिला वैसा साझा किया गया है; certified current exam rules नहीं, अपने college से मिलाएँ।', meta: '3 पेज • scan', file: 'BA-Sanskrit-Core-1-Ved-Syllabus-Official-Scan.pdf' },
      { n: 13, title: 'Core-2 संस्कृत व्याकरण — official पाठ्यक्रम (scan)', detail: 'संस्था के हस्ताक्षर वाले official पाठ्यक्रम दस्तावेज़ का scan। जैसा मिला वैसा साझा किया गया है; certified current exam rules नहीं, अपने college से मिलाएँ।', meta: '3 पेज • scan', file: 'BA-Sanskrit-Core-2-Vyakaran-Syllabus-Official-Scan.pdf' },
      { n: 14, title: 'Core-3 आर्ष काव्य परम्परा — official पाठ्यक्रम (scan)', detail: 'संस्था के हस्ताक्षर वाले official पाठ्यक्रम दस्तावेज़ का scan। जैसा मिला वैसा साझा किया गया है; certified current exam rules नहीं, अपने college से मिलाएँ।', meta: '3 पेज • scan', file: 'BA-Sanskrit-Core-3-Arsh-Kavya-Syllabus-Official-Scan.pdf' }
    ],
    'list-ebook': [
      { n: 15, title: 'The Myth of Sisyphus (कैमू) — हिंदी सारांश', detail: 'कैमू के absurd विचार, Sisyphus की कहानी और मुख्य संदेश का आसान हिंदी नोट्स-रूपी सारांश।', meta: '4 पेज • सारांश', file: 'Myth-of-Sisyphus-Saaransh-Hindi.pdf' },
      { n: 16, title: 'How to Read a Book (Adler) — हिंदी सारांश', detail: 'पढ़ने के चार स्तर, अलग-अलग किताबें कैसे पढ़ें और बौद्धिक विकास में पढ़ने की भूमिका, आसान हिंदी में।', meta: '7 पेज • सारांश', file: 'How-to-Read-a-Book-Saaransh-Hindi.pdf' }
    ]
  };

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  // Render the catalog
  Object.keys(ITEMS).forEach(function (listId) {
    var list = document.getElementById(listId);
    ITEMS[listId].forEach(function (it) {
      var item = el('div', 'lib-item');
      item.id = 'gs-resource-' + it.n;
      var head = el('div', 'lib-item-head');
      head.appendChild(el('span', 'lib-num', String(it.n)));
      head.appendChild(el('span', 'lib-title', it.title));
      item.appendChild(head);
      item.appendChild(el('p', 'lib-detail', it.detail));
      var foot = el('div', 'lib-foot');
      foot.appendChild(el('span', 'lib-meta', it.meta));
      var actions = el('span', 'lib-actions');
      var read = el('a', 'btn', 'पढ़ें');
      read.href = it.file;
      read.setAttribute('role', 'button');
      read.addEventListener('click', function (e) { e.preventDefault(); openReader(it, read); });
      var dl = el('a', 'btn btn-secondary', 'डाउनलोड');
      dl.href = it.file;
      dl.setAttribute('download', it.file);
      actions.appendChild(read);
      actions.appendChild(dl);
      foot.appendChild(actions);
      item.appendChild(foot);
      var err = el('p', 'lib-error', 'PDF अभी नहीं खुल पाई। एक बार फिर टैप करें, या डाउनलोड करके पढ़ें।');
      err.setAttribute('role', 'alert');
      err.hidden = true;
      item.appendChild(err);
      it._err = err;
      it._btn = read;
      list.appendChild(item);
    });
  });

  // Lazy-load pdf.js on first tap
  var pdfjsLoading = null;
  function loadPdfJs() {
    if (!pdfjsLoading) {
      pdfjsLoading = new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = 'vendor-pdf.min.js';
        s.onload = function () {
          try {
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'vendor-pdf.worker.min.js';
            resolve();
          } catch (e) { reject(e); }
        };
        s.onerror = function () { s.remove(); reject(new Error('PDF reader script failed to load')); };
        document.head.appendChild(s);
      });
      pdfjsLoading = pdfjsLoading.catch(function (err) { pdfjsLoading = null; throw err; });
    }
    return pdfjsLoading;
  }

  // Reader
  var ZOOMS = [1, 1.5, 2, 3];
  var dlg = document.getElementById('reader-dlg');
  var canvas = document.getElementById('r-canvas');
  var scrollBox = document.getElementById('r-scroll');
  var loadingEl = document.getElementById('r-loading');
  var failedEl = document.getElementById('r-failed');
  var pageEl = document.getElementById('r-page');
  var sliderWrap = document.getElementById('r-slider-wrap');
  var slider = document.getElementById('r-slider');
  var state = null; // {pdf, item, page, zoomIdx}
  var renderSeq = 0;

  function openReader(it, btn) {
    it._err.hidden = true;
    btn.textContent = 'खुल रही है…';
    loadPdfJs().then(function () {
      return window.pdfjsLib.getDocument({ url: it.file }).promise;
    }).then(function (pdf) {
      btn.textContent = 'पढ़ें';
      state = { pdf: pdf, item: it, page: 1, zoomIdx: 0 };
      document.getElementById('r-title').textContent = it.n + '. ' + it.title;
      document.getElementById('r-download').href = it.file;
      document.getElementById('r-download').setAttribute('download', it.file);
      slider.max = pdf.numPages;
      sliderWrap.style.display = pdf.numPages > 3 ? '' : 'none';
      if (!dlg.open) { try { dlg.showModal(); } catch (_) { dlg.setAttribute('open', ''); } }
      renderPage();
    }).catch(function () {
      btn.textContent = 'पढ़ें';
      it._err.hidden = false;
    });
  }

  function renderPage() {
    if (!state) return;
    var seq = ++renderSeq;
    loadingEl.hidden = false;
    failedEl.hidden = true;
    pageEl.textContent = 'पेज ' + state.page + ' / ' + state.pdf.numPages;
    slider.value = state.page;
    document.getElementById('r-prev').disabled = state.page <= 1;
    document.getElementById('r-next').disabled = state.page >= state.pdf.numPages;
    document.getElementById('r-zoom-out').disabled = state.zoomIdx === 0;
    document.getElementById('r-zoom-in').disabled = state.zoomIdx === ZOOMS.length - 1;
    state.pdf.getPage(state.page).then(function (page) {
      if (seq !== renderSeq) return;
      var base = page.getViewport({ scale: 1 });
      var avail = Math.max(280, scrollBox.clientWidth - 28);
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var scale = (avail / base.width) * ZOOMS[state.zoomIdx] * dpr;
      var viewport = page.getViewport({ scale: scale });
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      canvas.style.width = Math.floor(viewport.width / dpr) + 'px';
      canvas.setAttribute('aria-label', 'पेज ' + state.page);
      return page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise.then(function () {
        if (seq !== renderSeq) return;
        loadingEl.hidden = true;
        scrollBox.scrollTop = 0;
      });
    }).catch(function () {
      if (seq !== renderSeq) return;
      loadingEl.hidden = true;
      failedEl.hidden = false;
    });
  }

  function closeReader() {
    if (state && state.pdf) { try { state.pdf.destroy(); } catch (_) {} }
    state = null;
    ++renderSeq;
    try { dlg.close(); } catch (_) { dlg.removeAttribute('open'); }
  }

  document.getElementById('r-back').addEventListener('click', closeReader);
  dlg.addEventListener('cancel', function (e) { e.preventDefault(); closeReader(); });
  document.getElementById('r-prev').addEventListener('click', function () { if (state && state.page > 1) { state.page--; renderPage(); } });
  document.getElementById('r-next').addEventListener('click', function () { if (state && state.page < state.pdf.numPages) { state.page++; renderPage(); } });
  document.getElementById('r-zoom-in').addEventListener('click', function () { if (state && state.zoomIdx < ZOOMS.length - 1) { state.zoomIdx++; renderPage(); } });
  document.getElementById('r-zoom-out').addEventListener('click', function () { if (state && state.zoomIdx > 0) { state.zoomIdx--; renderPage(); } });
  slider.addEventListener('input', function () { if (state) { state.page = Math.min(state.pdf.numPages, Math.max(1, +slider.value)); renderPage(); } });
})();
