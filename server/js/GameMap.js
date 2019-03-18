const Resource = require('./Resource.js');

module.exports = {
    GameMap: GameMap
}

class GameMap {
    constructor(width, height, num_resources) {
        this.width = width;
        this.height = height;
        this.resources = [];
        for(var i=0; i < num_resources; i++) {
            var resource = Resource.random(this.width, this.height);
            
            this.resources.push()
        }
    }
}