function animloop() {
    requestAnimationFrame(animloop);
    gameLoop();
}