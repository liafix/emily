export const storyCopy = {
  arrival: {
    label: 'A NOTE, JUST FOR YOU',
    name: 'Emily',
    headline: 'Mám na teba jednu trochu netradičnú otázku.',
    detail: 'Ale keď už programujem, povedal som si, že obyčajná správa by bola nuda. 😄',
    action: 'Pozrieť otázku',
    footer: 'Sľubujem, nebude to test.',
  },
  dossier: {
    eyebrow: 'FILE NO. E–001 / CONFIDENTIAL',
    headline: 'Oficiálna žiadosť o konzultáciu.',
    intro: 'Viem, že chodíš na obchodnú, a napadlo mi, že by som sa ťa mohol spýtať na jednu vec z ekonomiky.',
    aside: 'Neboj, nechcem ťa skúšať. 😄 Len by ma zaujímal tvoj názor.',
    action: 'A prečo práve ja?',
  },
  details: [
    { title: 'Tvoj hudobný vkus?', answer: 'Fakt super.', index: '01', key: 'music' },
    { title: 'A mimochodom...', answer: 'Máš pekné oči.', index: '02', key: 'eyes' },
    { title: 'A tie vlasy?', answer: 'Veľmi ti pristanú.', index: '03', key: 'hair' },
  ],
  analysis: { title: 'Coffee with Emily.', intro: 'Myslím, že tento plán celkom dáva zmysel.', ending: 'Ale ešte mi chýba tvoj názor.', action: 'Zobraziť návrh' },
  invitation: {
    title: 'Tak čo, Emily?',
    question: 'Nechcela by si niekedy skočiť na kávu?',
    detail: 'Rád by som sa ťa spýtal na tú ekonomickú vec.',
    honesty: 'A úprimne, rád by som ťa aj trochu lepšie spoznal.',
    yes: 'Napíšem ti', maybe: 'Možno inokedy', no: 'Nie, ďakujem',
  },
} as const;
