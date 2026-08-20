(() => {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const links = [
    ["index.html", "首页"],
    ["books.html", "绘本书架"],
    ["learn.html", "免费试读"],
    ["public.html", "市场与运营"],
    ["about.html", "关于我们"]
  ];

  const navLinks = (mobile = false) => links.map(([href, label]) => {
    const active = page === href;
    const className = mobile ? (active ? "active" : "") : `nav-link${active ? " active" : ""}`;
    return `<a class="${className}" href="./${href}"${active ? ' aria-current="page"' : ""}>${label}</a>`;
  }).join("");

  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.innerHTML = `
      <a class="skip-link" href="#main-content">跳到主要内容</a>
      <header class="site-header">
        <nav class="site-nav container" aria-label="主导航">
          <a class="brand" href="./index.html" aria-label="星语童阅首页">
            <img class="brand-logo-image" src="./assets/xingyu-logo.png" alt="" aria-hidden="true" />
            <span class="brand-lockup"><span class="brand-name">星语童阅</span><small>特殊儿童绘本与数字阅读</small></span>
          </a>
          <div class="desktop-nav">${navLinks()}<a class="nav-cta" href="./books.html">选绘本 <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div>
          <button class="btn-icon menu-toggle" type="button" aria-label="打开导航菜单" aria-controls="mobile-navigation" aria-expanded="false"><span aria-hidden="true">☰</span></button>
        </nav>
        <nav id="mobile-navigation" class="mobile-nav" aria-label="移动端导航">${navLinks(true)}</nav>
      </header>`;
  }

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="footer-main container">
          <div class="footer-brand">
            <a class="brand" href="./index.html"><img class="brand-logo-image" src="./assets/xingyu-logo.png" alt="" aria-hidden="true" /><span class="brand-lockup"><span class="brand-name">星语童阅</span><small>四系列绘本创编与数字阅读</small></span></a>
            <p>先把“指尖有光”做深，再把成熟经验延展到更多儿童的阅读需要。</p>
          </div>
          <div class="footer-col"><h2>首期成品</h2><a href="./learn.html?book=yueyue">玥玥的小手会说话</a><a href="./learn.html?book=kangkang">超人康康</a><a href="./learn.html?book=dongdong">鼓手冬冬</a></div>
          <div class="footer-col"><h2>四个系列</h2><a href="./books.html#finished">指尖有光</a><a href="./index.html#series">触见星空 · 心向远方 · 慢慢长大</a><a href="./public.html">市场与运营</a></div>
          <div class="footer-col"><h2>联系我们</h2><span><i class="fa-regular fa-envelope" aria-hidden="true"></i> 3826676920@qq.com</span><span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> 吉林师范大学创新创业项目</span></div>
        </div>
        <div class="footer-bottom container"><span>© 2026 星语童阅</span><span>阅读，让每种成长都被看见</span></div>
      </footer>`;
  }

  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const open = !mobileNav.classList.contains("open");
      mobileNav.classList.toggle("open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "关闭导航菜单" : "打开导航菜单");
      menuButton.querySelector("span").textContent = open ? "×" : "☰";
    });
  }

  document.querySelectorAll("[data-book-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.bookFilter;
      document.querySelectorAll("[data-book-filter]").forEach((item) => item.classList.toggle("active", item === button));
      let count = 0;
      let ready = 0;
      let planned = 0;
      document.querySelectorAll("[data-book-card]").forEach((card) => {
        const visible = filter === "all" || `${card.dataset.age} ${card.dataset.topic}`.includes(filter);
        card.hidden = !visible;
        if (visible) {
          count += 1;
          if (card.dataset.bookState === "ready") ready += 1;
          else planned += 1;
        }
      });
      document.querySelectorAll("[data-age-group]").forEach((group) => {
        group.hidden = !group.querySelector("[data-book-card]:not([hidden])");
      });
      const label = document.querySelector("[data-book-count]");
      if (label) label.textContent = `当前显示 ${count} 本：${ready}本可试读，${planned}本策划中`;
    });
  });
})();
