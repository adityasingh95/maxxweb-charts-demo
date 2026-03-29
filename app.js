window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('tradingview_chart_widget');

  if (!container) {
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
  script.type = 'text/javascript';
  script.async = true;
  script.innerHTML = JSON.stringify({
    autosize: true,
    symbol: 'FX:EURUSD',
    interval: '60',
    timezone: 'Etc/UTC',
    theme: 'dark',
    backgroundColor: 'rgba(34, 34, 34, 1)',
    style: '1',
    locale: 'en',
    withdateranges: true,
    hide_side_toolbar: false,
    allow_symbol_change: true,
    save_image: true,
    details: true,
    hotlist: true,
    calendar: true,
    studies: [
      'ROC@tv-basicstudies',
      'StochasticRSI@tv-basicstudies',
      'MASimple@tv-basicstudies'
    ],
    watchlist: ['FX:EURUSD', 'FX:GBPUSD', 'FX:USDJPY', 'FX:USDCHF', 'FX:AUDUSD', 'OANDA:XAUUSD'],
    support_host: 'https://www.tradingview.com'
  });

  container.innerHTML = '';
  container.appendChild(script);
});
