let ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.downloadAll(function () {
    let canvas = document.getElementById('gameWorld');
    let ctx = canvas.getContext('2d');
    let gameEngine = new GameEngine();
    gameEngine.init(ctx);

        

    let line = new Line(gameEngine);
    gameEngine.addEntity(line);



    gameEngine.start();


    console.log(ctx)
    const btn = document.getElementById('clear');
    console.log(btn);

    btn.addEventListener('click', () => {
    console.log('btn clicked');
    canvas = document.getElementById("gameWorld");
    location.reload()
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();
        context.fillStyle = "red"
    });
    });


   