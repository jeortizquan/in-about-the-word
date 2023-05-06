import { Component } from '@angular/core';
import Phaser  from 'phaser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'in-about-the-word';
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [MainScene, Menu, Demo],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      }
    };
    this.phaserGame = new Phaser.Game(this.config);
  }
}

class MainScene extends Phaser.Scene {
 
  constructor() {
    super({ key: 'main' });

  }

  create() : void {
    console.log('create method');
    this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'sky').setDisplaySize(800,600);
    let logo = this.physics.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'logo').setInteractive();
    logo.setScale(0.45); 
    let particles = this.add.particles('red');

    let emitter = particles.createEmitter({
        speed: 250,
        scale: { start: 2, end: 0 },
        blendMode: 'ADD'
    });

    //  Pass in a basic style object with the constructor
    let titleGame = this.add.text(this.cameras.main.width / 2-3*64, 200, 'In & About\n  the Word', { fontFamily: 'Bungee', fontSize: '64px', color: '#ffffff' });
    titleGame.setStroke('#de77ae', 16).setShadow(2, 2, '#333333', 2, true, true);

    logo.on('pointerdown', this.clickHandler(logo), this);

    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo, 20, -100);
  }


  preload() : void {
    console.log('preload method');
     this.load.setBaseURL('http://localhost:4200');

    this.load.image('sky', 'assets/sky.png');
    this.load.image('logo', 'assets/logo_iatw2.svg');
    this.load.image('red', 'assets/particles/red.png');
    this.load.image('blue', 'assets/particles/blue.png');
  }

  override update() {
    //console.log('update method');
  }

  private clickHandler(logo: Phaser.Physics.Arcade.Image): () => void {
   return () => {
     console.log('clicked button');
     logo.input.enabled = false;
     logo.setVisible(false);
     this.scene.start('menu');
    }
  }

}

class Menu extends Phaser.Scene {
    constructor () {
        super('menu');
    }

    create() : void {
      console.log('create method menu');
        this.add.text(10, 10, 'Press 1, 2 or 3', { font: '16px Courier', color: '#00ff00' });

        this.input.keyboard.once('keyup-ONE',  () => {
            this.scene.start('demo', { id: 0, image: 'acryl-bladerunner.png' });
        }, this);

        this.input.keyboard.once('keyup-TWO',  () => {
            this.scene.start('demo', { id: 1, image: 'babar-phaleon-coco.png' });
        }, this);

        this.input.keyboard.once('keyup-THREE',  () => {
            this.scene.start('demo', { id: 2, image: 'babar-pym-wait.png' });

        }, this);

        this.input.keyboard.once('keyup-ESC',  () => {
            this.scene.start('main');

        }, this);

        this.events.on('shutdown', this.shutdown, this);
    }

    shutdown ()
    {
        //  We need to clear keyboard events, or they'll stack up when the Menu is re-run
        this.input.keyboard.shutdown();
    }
}

class SceneData {
  imageID : string;
  imageFile: string;

  constructor(id: string, image: string) {
    this.imageFile = image;
    this.imageID = id;
  }
}

class Demo extends Phaser.Scene {
  private imageID: string;
  private imageFile: string;

    constructor () {
        super({ key: 'demo' });
        this.imageFile = '';
        this.imageID = '';
    }

    init (data: SceneData) {
        console.log('init', data);

        this.imageID = data.imageID;
        this.imageFile = data.imageFile;
    }

    preload () {
        this.load.image(`pic${this.imageID}`, `assets/pics/${this.imageFile}`);
    }

    create ()
    {
        this.add.text(10, 10, 'Click to Return', { font: '16px Courier', color: '#00ff00' });

        this.add.image(400, 300, `pic${this.imageID}`).setScale(2);

        this.input.once('pointerup',  () =>
        {

            this.scene.start('menu');

        }, this);
    }
}

class PlayerRegistration extends Phaser.Scene {

}

class QuestionQuest extends Phaser.Scene {

}