document.addEventListener('DOMContentLoaded', function () {
  const langToggle = document.getElementById('langToggle');
  const langSwitcher = document.getElementById('langSwitcher');
  const langOptions = document.querySelectorAll('.lang-option');
  const welcomeTitle = document.getElementById('welcomeTitle');
  const welcomeText = document.getElementById('welcomeText');

  if (!langToggle || !langSwitcher) {
    return;
  }

  const translations = {
    es: {
      title: 'BIENVENIDO A BIBLIOPERÚ',
      text: 'BiblioPerú es tu sistema de gestión bibliotecaria institucional. Aquí puedes explorar nuestro catálogo de más de 1,200 libros, gestionar tus préstamos activos, revisar tu historial de lectura y descubrir nuevas obras de autores peruanos e internacionales. Nuestra plataforma está diseñada para ser accesible y fácil de usar.'
    },
    en: {
      title: 'WELCOME TO BIBLIOPERÚ',
      text: 'BiblioPerú is your institutional library management system. Here you can explore our catalog of over 1,200 books, manage your active loans, review your reading history, and discover new works by Peruvian and international authors. Our platform is designed to be accessible and easy to use.'
    },
    ru: {
      title: 'ДОБРО ПОЖАЛОВАТЬ В BIBLIOPERÚ',
      text: 'BiblioPerú — это ваша институциональная система управления библиотекой. Здесь вы можете изучить наш каталог из более чем 1200 книг, управлять активными займами, просматривать историю чтения и открывать для себя новые произведения перуанских и международных авторов. Наша платформа разработана так, чтобы быть доступной и простой в использовании.'
    },
    zh: {
      title: '欢迎来到 BIBLIOPERÚ',
      text: 'BiblioPerú 是您的机构图书馆管理系统。在这里，您可以浏览我们超过 1200 本书的目录，管理当前借阅，查看阅读历史，并发现秘鲁和国际作者的新作品。我们的平台旨在方便访问且易于使用。'
    },
    it: {
      title: 'BENVENUTO A BIBLIOPERÚ',
      text: 'BiblioPerú è il tuo sistema istituzionale di gestione bibliotecaria. Qui puoi esplorare il nostro catalogo di oltre 1.200 libri, gestire i tuoi prestiti attivi, rivedere la tua storia di lettura e scoprire nuove opere di autori peruviani e internazionali. La nostra piattaforma è progettata per essere accessibile e facile da usare.'
    }
  };

  const toggleMenu = () => {
    langSwitcher.classList.toggle('open');
    langToggle.setAttribute('aria-expanded', String(langSwitcher.classList.contains('open')));
  };

  langToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  langOptions.forEach((option) => {
    option.addEventListener('click', function () {
      const lang = this.getAttribute('data-lang');
      langOptions.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
      langToggle.querySelector('span').textContent = this.textContent.toUpperCase();
      if (translations[lang]) {
        welcomeTitle.textContent = translations[lang].title;
        welcomeText.textContent = translations[lang].text;
      }
      langSwitcher.classList.remove('open');
      langToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function () {
    langSwitcher.classList.remove('open');
    langToggle.setAttribute('aria-expanded', 'false');
  });
});
