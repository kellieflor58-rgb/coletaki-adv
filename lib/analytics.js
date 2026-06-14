import posthog from 'posthog-js';

export const EV = {
  ADV_VIEWED: 'adv_viewed',
  ADV_SCROLL_50: 'adv_scroll_50',
  ADV_SCROLL_100: 'adv_scroll_100',
  CTA_INICIAR_CADASTRO_CLICADO: 'cta_iniciar_cadastro_clicado',
  CTA_ACESSAR_SITE_CLICADO: 'cta_acessar_site_clicado',
  LEIA_TAMBEM_CLICADO: 'leia_tambem_clicado',
};

export function track(event, props = {}) {
  if (typeof window === 'undefined') return;
  try {
    posthog.capture(event, props);
  } catch (e) {
    console.error('[analytics] erro:', e);
  }
}
