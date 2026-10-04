const chunkSize = 4

class Grid {

  constructor (x, y, cx, cy, colour) {
    this.x = x
    this.y = y
    this.cx = cx
    this.cy = cy
    this.colour = colour
  }

  draw (player) {
    const vertices = this.calculateVertices(player)
    if (vertices == "out") {return}
    c.fillStyle = this.colour
    c.lineWidth = 0
    c.beginPath()
    c.moveTo(w/2 + vertices[0][0], h/2 - vertices[0][1])
    c.lineTo(w/2 + vertices[1][0], h/2 - vertices[1][1])
    c.lineTo(w/2 + vertices[2][0], h/2 - vertices[2][1])
    c.lineTo(w/2 + vertices[3][0], h/2 - vertices[3][1])
    c.lineTo(w/2 + vertices[0][0], h/2 - vertices[0][1])
    c.fill()
    c.stroke()
  }

  calculateVertices (player) {
    //let vertices = Array.from({length:4}, () => Array(2))
    let vertices = [[0, 0], [0, 1], [1, 1], [1, 0]]
    for (let v = 0; v < 4; v++) {
      const vertexPosition = [this.cx * chunkSize + this.x + vertices[v][0], this.cy * chunkSize + this.y + vertices[v][1], 0]
      const eyelineVector = vectorSub(vertexPosition, player.eyePosition)
      const angle = acos(vectorDot(player.lookingVector, eyelineVector) / (vectorMod(player.lookingVector) * vectorMod(eyelineVector)))
      if (angle >= 0.5 * pi) {return "out"}
      const vectorFactor = vectorDot(player.lookingVector, vectorSub(player.screenCentrePosition, player.eyePosition)) / vectorDot(player.lookingVector, eyelineVector)
      const screenPosition = vectorAdd(player.eyePosition, vectorScale(vectorFactor, eyelineVector))
      vertices[v][0] = w/2 * (screenPosition[1] - player.screenCentrePosition[1]) / (player.screenWidth / 2)
      vertices[v][1] = w/2 * (screenPosition[2] - player.screenCentrePosition[2]) / (player.screenWidth / 2)
    }
    return vertices
  }

}

class Chunk {

  colour = "green"

  constructor (cx, cy) {
    this.x = cx
    this.y = cy
    this.chunk = Array.from({length: chunkSize}, () => Array(chunkSize))
    for (let x = 0; x < chunkSize; x++) {
      for (let y = 0; y < chunkSize; y++) {
        this.chunk[x][y] = new Grid(x, y, cx, cy, this.colour)
      }
    }
  }

}

class World {

  chunks = {}

  validateChunk (x, y) {
    this.chunks[x.toString()] ??= {}
    this.chunks[x.toString()][y.toString()] ??= new Chunk(x, y)
  }

}

class Player {

  x = 0 // East
  y = 0 // North
  z = 0 // upwards
  yaw = 0 // looking sideways
  pitch = 0 // looking up and down
  roll = 0 // tilting head

  position = [0, 0, 0]
  eyePosition = [0, 0, 1.8]
  lookingVector = [1, 0, 0]
  screenCentrePosition = [0.5, 0, 0]

  chunkRadius = 2 // loads 2 chunks away including current chunk
  screenWidth = 0.5 // width of window is this many metres in the simulator
  distanceFromScreen = 0.5 // distance real-life user is expected as fraction of the width of the window

  constructor (world, height) {
    this.world = world
    this.height = height > 0.5 ? height : 0.5
    this.eyeline = this.height - 0.2
  }

  updatePerspective () {
    this.eyePosition = vectorAdd(this.position, [0, 0, this.eyeline])
    this.screenCentrePosition = vectorAdd(this.eyePosition, vectorScale(this.screenWidth * this.distanceFromScreen, this.lookingVector))
  }

  move (dx, dy, dz) {
    this.position[0] += dx
    this.position[1] += dy
    this.position[2] += dz
  }

  turn (yaw, pitch, roll) {
    // yaw - looking sideways | pitch - looking up and down | roll - tilting head
  }

  loadChunks () {
    const tc_x = flr(this.x / chunkSize)
    const tc_y = flr(this.y / chunkSize)
    const cr = this.chunkRadius
    for (let x = 1 + tc_x - cr; x < tc_x + cr; x++) {
      for (let y = 1 + tc_y - cr; y < tc_y + cr; y++) {
        this.world.validateChunk(x, y)
        for (let cx = 0; cx < chunkSize; cx++) {
          for (let cy = 0; cy < chunkSize; cy++) {
            this.world.chunks[x.toString()][y.toString()].chunk[cx][cy].draw(this)
          }
        }
      }
    }
  }

}

let world1 = new World()

let player1 = new Player(world1, 2)

function logic () {
  c.fillStyle = "gray"
  c.fillRect(0, 0, w, h)
  player1.updatePerspective()
  player1.loadChunks()
}
