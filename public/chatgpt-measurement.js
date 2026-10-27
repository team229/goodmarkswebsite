/* ChatGPT Ads: no form contents are passed by this integration. */
(function () {
  'use strict';
  if (window.gmcChatGPT) return;
  var key = 'gmc-chatgpt-measurement-v1';
  var allowed = false;
  var initialized = false;
  var pageSent = false;
  var seenLeads = new Set();
  function load() {
    if (initialized) return;
    initialized = true;
    if (!window.oaiq) {
      var q = function () { q.q.push(arguments); };
      q.q = [];
      window.oaiq = q;
      var script = document.createElement('script');
      script.async = true;
      script.src = 'https://bzrcdn.openai.com/sdk/oaiq.min.js';
      document.head.appendChild(script);
    }
    window.oaiq('consent', true);
    window.oaiq('init', { pixelId: 'H1CDLSCgNAy8pr9mVdChyz' });
  }
  function send(name, data, options) {
    if (!allowed) return;
    try {
      load();
      window.oaiq('measure', name, data, Object.assign({ opt_out: true }, options));
    } catch (_) { /* Measurement must never interrupt an enquiry. */ }
  }
  function pageView() {
    if (allowed && !pageSent) {
      pageSent = true;
      send('page_viewed', { type: 'contents' });
    }
  }
  window.gmcChatGPT = {
    lead: function (eventId) {
      if (!allowed || !eventId || seenLeads.has(eventId)) return;
      seenLeads.add(eventId);
      send('lead_created', { type: 'customer_action' }, { event_id: eventId });
    }
  };
  try { allowed = localStorage.getItem(key) === 'yes'; } catch (_) {}
  if (allowed) pageView();
  function ready() {
    var panel = document.getElementById('chatgpt-measurement-choice');
    var settings = document.getElementById('chatgpt-measurement-settings');
    if (!panel || !settings) return;
    var choice = null;
    try { choice = localStorage.getItem(key); } catch (_) {}
    panel.hidden = choice === 'yes' || choice === 'no';
    settings.addEventListener('click', function () { panel.hidden = false; });
    panel.querySelectorAll('[data-chatgpt-consent]').forEach(function (button) {
      button.addEventListener('click', function () {
        allowed = button.getAttribute('data-chatgpt-consent') === 'yes';
        try { localStorage.setItem(key, allowed ? 'yes' : 'no'); } catch (_) {}
        if (initialized && window.oaiq) window.oaiq('consent', allowed);
        panel.hidden = true;
        pageView();
      });
    });
    document.addEventListener('click', function (event) {
      var anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!anchor) return;
      var url;
      try { url = new URL(anchor.href); } catch (_) { return; }
      var name = url.protocol === 'tel:' ? 'phone_click' :
        (['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(url.hostname) ? 'whatsapp_click' : null);
      if (name) send('custom', { type: 'custom' }, { custom_event_name: name });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
