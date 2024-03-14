export const PAGESPEED_URL = 'https://pagespeed.web.dev/'
export const PAGESPEED_BASE = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?category=accessibility&category=performance&category=best-practices&category=seo&key=' 
export const PAGESPEED_API = PAGESPEED_BASE + import.meta.env.VITE_PAGESPEED_API_KEY + '&url=' + import.meta.env.VITE_PAGESPEED_PAGEWEB_URL

