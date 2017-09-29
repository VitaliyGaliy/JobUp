// Default Helmet props
export default Object.freeze({
  htmlAttributes: { lang: 'en' },
  title: 'Title',
  defaultTitle: 'Default Title',
  titleTemplate: '%s - Daxx Online',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: '/css/roboto/roboto-fontface.css' },
    { rel: 'stylesheet', href: '/bootstrap.css' },
    { rel: 'stylesheet', href: '/custom.min.css' },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  link0ff: [
    { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
  ],
  script: [],
  script0ff: [
    {
      type: 'text/javascript',
      innerHTML: `{
          var WebFontConfig = {
            google: { families: [ 'Roboto:400,300,500:latin' ] }
          };
          (function() {
            var wf = document.createElement('script');
              wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
              wf.type = 'text/javascript';
              wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(wf, s);
          })();
      }`,
    },
    {
      type: 'text/javascript',
      innerHTML: `{
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-85369339-1', 'auto');
          ga('require', 'linkid');
          ga('send', 'pageview');
      }`,
    },
  ],
  style: [],
})
