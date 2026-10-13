/** Change only values here to personalize the invitation. No private data is shipped by default. */
export const invitationConfig = {
  recipient: 'Emily',
  reference: 'E–001',
  /** A real, optional accounting question. Keep empty until you've decided what to ask. */
  accountingQuestion: '',
  /** Optional. Supported: https://… or mailto:… . Leave empty for copy-message only. */
  contactUrl: '',
  contactLabel: 'Otvoriť kontakt',
  suggestedMessage: 'Ahoj, ten web bol celkom originálny 😄 Kedy dáme tú kávu?',
  /** Optional local audio file under /public (e.g. '/audio/ambient.mp3'). Empty uses gentle synthesized sound. */
  audioFile: '',
} as const;

/** Only safe, explicit URL schemes are allowed for user-supplied contact links. */
export function safeContactUrl(value: string): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return ['https:', 'mailto:'].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}
