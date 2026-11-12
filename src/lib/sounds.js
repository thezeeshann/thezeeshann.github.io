// Tiny synthesized UI sounds — no audio files to ship or load.

let ctx = null;
let noise = null;

const getContext = () => {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!ctx) ctx = new AudioCtx();
  // Browsers create the context suspended until a user gesture; every caller
  // here runs inside a click handler, so resuming is allowed.
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
};

const getNoise = (ac) => {
  if (noise) return noise;
  const length = Math.floor(ac.sampleRate * 0.05);
  noise = ac.createBuffer(1, length, ac.sampleRate);
  const data = noise.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  return noise;
};

/** A soft, short "tick": a filtered noise burst over a quick pitch drop. */
export const playClick = () => {
  try {
    const ac = getContext();
    if (!ac) return;
    const t = ac.currentTime;

    const out = ac.createGain();
    out.gain.value = 1;
    out.connect(ac.destination);

    // Crisp top: band-passed noise, ~25ms.
    const src = ac.createBufferSource();
    src.buffer = getNoise(ac);
    const band = ac.createBiquadFilter();
    band.type = "bandpass";
    band.frequency.value = 3200;
    band.Q.value = 1.2;
    const noiseGain = ac.createGain();
    noiseGain.gain.setValueAtTime(0.0001, t);
    noiseGain.gain.linearRampToValueAtTime(0.16, t + 0.002);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
    src.connect(band);
    band.connect(noiseGain);
    noiseGain.connect(out);
    src.start(t);
    src.stop(t + 0.05);

    // Body: a sine dropping from 520Hz to 140Hz, ~50ms.
    const osc = ac.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(520, t);
    osc.frequency.exponentialRampToValueAtTime(140, t + 0.05);
    const oscGain = ac.createGain();
    oscGain.gain.setValueAtTime(0.0001, t);
    oscGain.gain.linearRampToValueAtTime(0.12, t + 0.002);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    osc.connect(oscGain);
    oscGain.connect(out);
    osc.start(t);
    osc.stop(t + 0.06);
  } catch {
    // Sound is decoration; a blocked or missing AudioContext must never
    // break the button it decorates.
  }
};
