window.addEventListener('DOMContentLoaded', () => {
  if (typeof TradingView === 'undefined') {
    return;
  }

  new TradingView.widget({
    autosize: true,
    symbol: 'FX:EURUSD',
    interval: '60',
    timezone: 'Etc/UTC',
    theme: 'dark',
    style: '1',
    locale: 'en',
    enable_publishing: false,
    hide_top_toolbar: false,
    withdateranges: true,
    allow_symbol_change: true,
    save_image: false,
    container_id: 'tradingview_chart'
  });
});
