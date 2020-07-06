// Styles
import '../styles/index.scss';

// Modules
import 'phaser';

// Scenes
import SampleScene from './scenes/SampleScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [
    SampleScene
  ]
};

new Phaser.Game(config);
