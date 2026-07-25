(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),(()=>{let e=(()=>{let e=window.location.pathname.split(`/`).pop()||`index.html`;return e===``?`index.html`:e})(),t=[[`index.html`,`首页`],[`books.html`,`手语绘本库`],[`learn.html`,`点句学语`],[`institution.html`,`特教机构专区`],[`public.html`,`公益服务`],[`about.html`,`关于我们`]],n=(n=!1)=>t.map(([t,r])=>{let i=e===t;return`<a class="${n?i?`active`:``:`nav-link${i?` active`:``}`}" href="./${t}"${i?` aria-current="page"`:``}>${r}</a>`}).join(``);function r(){let e=document.querySelector(`[data-site-header]`),t=document.querySelector(`[data-site-footer]`);e&&(e.innerHTML=`
        <a class="skip-link" href="#main-content">跳到主要内容</a>
        <header class="site-header">
          <nav class="site-nav container" aria-label="主导航">
            <a class="brand" href="./index.html" aria-label="星语童阅首页">
              <span class="brand-mark" aria-hidden="true"><span></span></span>
              <span class="brand-name">星语童阅</span>
            </a>
            <div class="desktop-nav">${n()}</div>
            <button class="btn-icon menu-toggle" type="button" aria-label="打开导航菜单" aria-controls="mobile-navigation" aria-expanded="false">
              <i class="fa-solid fa-bars" aria-hidden="true"></i>
            </button>
          </nav>
          <nav id="mobile-navigation" class="mobile-nav" aria-label="移动端导航">
            ${n(!0)}
          </nav>
        </header>`),t&&(t.innerHTML=`
        <footer class="site-footer">
          <div class="footer-main container">
            <div class="footer-brand">
              <a class="brand" href="./index.html">
                <span class="brand-mark" aria-hidden="true"><span></span></span>
                <span class="brand-name">星语童阅</span>
              </a>
              <p>特殊教育视域下原创手语绘本创编及数字化服务平台，面向3-8岁听障儿童提供2021版国家通用手语分级阅读与特教早期语言干预服务。</p>
            </div>
            <div class="footer-col">
              <h2>核心产品</h2>
              <a href="./books.html">原创手语绘本</a>
              <a href="./learn.html">点句学语伴读</a>
              <a href="./institution.html">机构教学后台</a>
            </div>
            <div class="footer-col">
              <h2>公益服务</h2>
              <a href="./public.html#free-books">公益绘本</a>
              <a href="./public.html#volunteer">志愿者招募</a>
              <a href="./public.html#cooperation">基层特教帮扶</a>
            </div>
            <div class="footer-col">
              <h2>联系我们</h2>
              <span><i class="fa-regular fa-envelope" aria-hidden="true"></i> 3826676920@qq.com</span>
              <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> 吉林师范大学创新创业项目</span>
              <a href="./about.html#contact">合作洽谈与资源申领</a>
            </div>
          </div>
          <div class="footer-bottom container">© 2026 星语童阅 · 手语筑梦启智，绘本赋能特教 · 基层特教公益帮扶</div>
        </footer>`),document.body.insertAdjacentHTML(`beforeend`,`<div class="video-modal" id="global-video-modal" role="dialog" aria-modal="true" aria-labelledby="modal-video-title" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-head">
            <div>
              <small class="eyebrow">2021版国家通用手语标准化演示</small>
              <h2 id="modal-video-title">手语视频伴读</h2>
            </div>
            <button class="btn-icon" type="button" data-modal-close aria-label="关闭手语视频弹窗">
              <i class="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
          </div>
          <video class="modal-video" id="modal-video" controls preload="metadata" poster="./img/learn-reference.jpg">
            <source src="./video/sign-demo.mp4" type="video/mp4">
            您的浏览器暂不支持视频播放。
          </video>
          <div class="modal-foot">
            <div class="modal-controls">
              <button class="btn btn-primary" type="button" data-modal-play><i class="fa-solid fa-play" aria-hidden="true"></i> 播放 / 暂停</button>
              <button class="btn btn-ghost active" type="button" data-modal-speed="1">常速</button>
              <button class="btn btn-ghost" type="button" data-modal-speed="0.65">慢速</button>
              <button class="btn btn-ghost" type="button" data-modal-loop aria-pressed="false"><i class="fa-solid fa-repeat" aria-hidden="true"></i> 单句循环</button>
            </div>
            <span id="modal-video-status" aria-live="polite">常速播放 · 循环关闭</span>
          </div>
        </div>
      </div>
      <div class="toast" id="site-toast" role="status" aria-live="polite"></div>`)}function i(){let e=document.querySelector(`.menu-toggle`),t=document.querySelector(`.mobile-nav`);if(!e||!t)return;let n=n=>{t.classList.toggle(`open`,n),e.setAttribute(`aria-expanded`,String(n)),e.setAttribute(`aria-label`,n?`关闭导航菜单`:`打开导航菜单`),e.querySelector(`i`).className=n?`fa-solid fa-xmark`:`fa-solid fa-bars`};e.addEventListener(`click`,()=>n(!t.classList.contains(`open`))),t.querySelectorAll(`a`).forEach(e=>e.addEventListener(`click`,()=>n(!1))),window.addEventListener(`resize`,()=>{window.innerWidth>=1180&&n(!1)})}function a(){let e=document.querySelectorAll(`.card-rise`);if(!e.length)return;if(!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`is-visible`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.12});e.forEach((e,n)=>{e.style.transitionDelay=`${Math.min(n%6,4)*65}ms`,t.observe(e)})}function o(){let e=document.querySelectorAll(`[data-count]`);if(!e.length)return;let t=e=>{let t=Number(e.dataset.count||0),n=e.dataset.suffix||``,r=performance.now(),i=a=>{let o=Math.min((a-r)/1350,1),s=1-(1-o)**3;e.textContent=`${Math.round(t*s)}${n}`,o<1&&requestAnimationFrame(i)};requestAnimationFrame(i)},n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t(e.target),n.unobserve(e.target))})},{threshold:.5});e.forEach(e=>n.observe(e))}function s(){let e=document.querySelector(`#global-video-modal`),t=document.querySelector(`#modal-video`);if(!e||!t)return;let n=document.querySelector(`#modal-video-title`),r=document.querySelector(`#modal-video-status`),i=document.querySelectorAll(`[data-video-open]`),a=null,o=()=>{let e=t.playbackRate===1?`常速`:`慢速`;r.textContent=`${e}播放 · 循环${t.loop?`开启`:`关闭`}`},s=()=>{t.pause(),e.classList.remove(`open`),e.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`modal-open`),a?.focus()};i.forEach(r=>{r.addEventListener(`click`,()=>{a=r,n.textContent=r.dataset.videoTitle||`手语视频伴读`;let i=t.querySelector(`source`),s=r.dataset.videoSrc||`./video/sign-demo.mp4`;i.getAttribute(`src`)!==s&&(i.setAttribute(`src`,s),t.load()),t.playbackRate=1,t.loop=!1,e.classList.add(`open`),e.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`modal-open`),e.querySelector(`[data-modal-close]`).focus(),o()})}),e.querySelector(`[data-modal-close]`).addEventListener(`click`,s),e.addEventListener(`click`,t=>{t.target===e&&s()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.classList.contains(`open`)&&s()}),e.querySelector(`[data-modal-play]`).addEventListener(`click`,()=>{t.paused?t.play().catch(()=>{}):t.pause()}),e.querySelectorAll(`[data-modal-speed]`).forEach(n=>{n.addEventListener(`click`,()=>{t.playbackRate=Number(n.dataset.modalSpeed),e.querySelectorAll(`[data-modal-speed]`).forEach(e=>e.classList.toggle(`active`,e===n)),o()})}),e.querySelector(`[data-modal-loop]`).addEventListener(`click`,e=>{t.loop=!t.loop,e.currentTarget.classList.toggle(`active`,t.loop),e.currentTarget.setAttribute(`aria-pressed`,String(t.loop)),o()})}function c(){let e=[...document.querySelectorAll(`[data-book-filter]`)],t=[...document.querySelectorAll(`[data-book-card]`)],n=document.querySelector(`[data-book-count]`);!e.length||!t.length||e.forEach(r=>{r.addEventListener(`click`,()=>{let i=r.dataset.bookFilter;e.forEach(e=>{let t=e===r;e.classList.toggle(`active`,t),e.setAttribute(`aria-pressed`,String(t))});let a=0;t.forEach(e=>{let t=`${e.dataset.age} ${e.dataset.topic}`,n=i===`all`||t.includes(i);e.hidden=!n,n&&(a+=1)}),n&&(n.textContent=`当前显示 ${a} 本`)})})}function l(){let e=document.querySelector(`#learn-video`),t=[...document.querySelectorAll(`[data-sentence]`)];if(!e||!t.length)return;let n=document.querySelector(`[data-current-sentence]`),r=document.querySelector(`[data-sign-word]`),i=document.querySelector(`[data-sign-position]`),a=document.querySelector(`[data-sign-palm]`),o=document.querySelector(`[data-sign-movement]`),s=document.querySelector(`[data-sentence-progress]`),c=document.querySelector(`[data-sentence-position]`),l=0,u=u=>{l=(u+t.length)%t.length,t.forEach((e,t)=>e.classList.toggle(`active`,t===l));let d=t[l];n.textContent=d.dataset.sentence,r.textContent=d.dataset.word,i.textContent=d.dataset.position,a.textContent=d.dataset.palm,o.textContent=d.dataset.movement,s.style.width=`${(l+1)/t.length*100}%`,c.textContent=`第 ${l+1} / ${t.length} 句`,e.currentTime=Number(d.dataset.time||0)};t.forEach((e,t)=>e.addEventListener(`click`,()=>u(t))),document.querySelector(`[data-learn-prev]`)?.addEventListener(`click`,()=>u(l-1)),document.querySelector(`[data-learn-next]`)?.addEventListener(`click`,()=>u(l+1)),document.querySelector(`[data-learn-play]`)?.addEventListener(`click`,()=>{e.paused?e.play().catch(()=>{}):e.pause()}),document.querySelectorAll(`[data-learn-speed]`).forEach(t=>{t.addEventListener(`click`,()=>{e.playbackRate=Number(t.dataset.learnSpeed),document.querySelectorAll(`[data-learn-speed]`).forEach(e=>e.classList.toggle(`active`,e===t))})}),document.querySelector(`[data-learn-loop]`)?.addEventListener(`click`,t=>{e.loop=!e.loop,t.currentTarget.classList.toggle(`active`,e.loop),t.currentTarget.setAttribute(`aria-pressed`,String(e.loop))}),u(0)}function u(){document.querySelectorAll(`[data-demo-form]`).forEach(e=>{e.addEventListener(`submit`,t=>{t.preventDefault(),d(e.dataset.success||`信息已记录，我们会尽快与您联系。`),e.reset()})})}function d(e){let t=document.querySelector(`#site-toast`);t&&(t.textContent=e,t.classList.add(`show`),window.clearTimeout(d.timer),d.timer=window.setTimeout(()=>t.classList.remove(`show`),3200))}r(),i(),a(),o(),s(),c(),l(),u()})();