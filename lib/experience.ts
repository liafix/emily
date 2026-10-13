export type Scene = 'arrival' | 'dossier' | 'details' | 'analysis' | 'invitation';
export type Response = 'yes' | 'maybe' | 'no' | null;
export const SCENES: Scene[] = ['arrival', 'dossier', 'details', 'analysis', 'invitation'];
export const labels = ['THE ARRIVAL', 'THE REQUEST', 'THE DETAILS', 'THE ANALYSIS', 'THE INVITATION'];
export const sceneNumber = (scene: Scene) => SCENES.indexOf(scene) + 1;
