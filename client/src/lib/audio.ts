class AudioManager {
  private audioContext: AudioContext | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private gainNode: GainNode | null = null;

  init() {
    this.audioContext = new AudioContext();
    this.audioElement = new Audio();
    this.gainNode = this.audioContext.createGain();
    
    const source = this.audioContext.createMediaElementSource(this.audioElement);
    source.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
  }

  async play(url: string) {
    if (!this.audioContext || !this.audioElement) {
      this.init();
    }
    
    if (this.audioElement) {
      this.audioElement.src = url;
      this.audioElement.play();
    }
  }

  pause() {
    this.audioElement?.pause();
  }

  stop() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
  }

  setVolume(value: number) {
    if (this.gainNode) {
      this.gainNode.gain.value = value;
    }
  }

  getDuration() {
    return this.audioElement?.duration || 0;
  }

  getCurrentTime() {
    return this.audioElement?.currentTime || 0;
  }

  seek(time: number) {
    if (this.audioElement) {
      this.audioElement.currentTime = time;
    }
  }
}

export const audioManager = new AudioManager();
