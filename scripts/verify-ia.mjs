import { readFileSync } from 'node:fs';
import { localeToEnglish } from '../functions/locale-english.js';

const html = readFileSync('dist/index.html', 'utf8');
const h1 = [...html.matchAll(/<h1\b/gi)];
console.log('h1 count', h1.length);
console.log('html lang', /<html lang="en"/.test(html));
console.log('pubg classes', /pubg-/.test(html));
console.log('AggregateRating', html.includes('AggregateRating'));
console.log('FAQPage', html.includes('FAQPage'));
console.log('faq answers', (html.match(/site-faq__a/g) || []).length);
console.log('og:image:width', /og:image:width" content="1024"/.test(html));
console.log('og:image:height', /og:image:height" content="409"/.test(html));

const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
const graph = JSON.parse(ld[1]);
console.log(
	'graph types',
	graph['@graph'].map((n) => n['@type']).join(', '),
);
const product = graph['@graph'].find((n) => n['@type'] === 'Product');
console.log('Product.url', product?.url);
console.log('Offer.url', product?.offers?.url);
console.log('ImageObject', product ? graph['@graph'][0].primaryImageOfPage : null);
console.log('inLanguage', graph['@graph'][0].inLanguage);
console.log('lang-switcher present', html.includes('lang-switcher'));

const cases = {
	'/es/': '/',
	'/ja/': '/',
	'/es/features/': '/features/',
	'/ja/blog/phoenix-tarkov/': '/blog/comparing-tarkov-cheats/',
	'/fr/faq/foo/': '/faq/#foo',
	'/de/reviews/bar/': '/reviews/',
	'/es/sitemap.xml': '/sitemap.xml',
	'/pt/cheats-tarkov-esp/': '/tarkov-esp/',
};
let fail = 0;
for (const [from, want] of Object.entries(cases)) {
	const got = localeToEnglish(from);
	const ok = got === want;
	console.log(ok ? 'OK' : 'FAIL', from, '->', got, ok ? '' : `(want ${want})`);
	if (!ok) fail += 1;
}
if (fail) process.exit(1);
