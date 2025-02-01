<!-- src/components/GameGrid.vue -->
<template>
  <div class="game-container">
    <h1 class="header-title">Ethereal Chronicles: The Veil of Arcane Eternity</h1>
    <div>
      <img
        src="~/assets/game-title-logo.webp"
        alt="Game Logo"
        class="game-logo"
        style="width: 20rem"
      />
    </div>

    <div id="game" class="game-grid">
      <span v-for="(cell, cellIndex) in grid.flat()" :key="cellIndex" class="cell">{{
        cell
      }}</span>
    </div>
    <p>Controls: W (Up), A (Left), S (Down), D (Right)</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
// import { logger } from 'workbox-core/_private'

const GRID_SIZE = 50

class Player {
  x: number
  y: number
  hp: number

  constructor(x: number, y: number, hp: number = 10) {
    this.x = x
    this.y = y
    this.hp = hp
  }

  move(dx: number, dy: number) {
    this.x += dx
    this.y += dy
  }
}

class Enemy {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

export default defineComponent({
  name: 'GameGrid',
  setup() {
    const grid = ref<string[][]>([])
    const player = new Player(0, 0)
    const enemies = ref<Enemy[]>([])

    const generateEnemies = () => {
      const enemiesArray: Enemy[] = []
      for (let i = 0; i < 5; i++) {
        const x = Math.floor(Math.random() * GRID_SIZE)
        const y = Math.floor(Math.random() * GRID_SIZE)
        enemiesArray.push(new Enemy(x, y))
      }
      return enemiesArray
    }

    const initializeGrid = () => {
      grid.value = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill('⬛'))
      grid.value[player.x]![player.y] = '😀'
      enemies.value = generateEnemies()
      for (const enemy of enemies.value) {
        grid.value[enemy.x]![enemy.y] = '👾'
      }
    }

    const displayGrid = computed(() => {
      console.log('displayGrid')

      return grid.value.map((row) => row.join(' ')).join('\n')
    })

    const movePlayer = (dx: number, dy: number) => {
      grid.value[player.x]![player.y] = '⬛'
      player.move(dx, dy)

      if (player.x < 0) player.x = 0
      if (player.y < 0) player.y = 0
      if (player.x >= GRID_SIZE) player.x = GRID_SIZE - 1
      if (player.y >= GRID_SIZE) player.y = GRID_SIZE - 1

      if (grid.value[player.x]![player.y] === '👾') {
        alert('You encountered an enemy!')
        player.hp -= 1
        if (player.hp <= 0) {
          alert('Game Over!')
          window.location.reload()
        }
      }

      grid.value[player.x]![player.y] = '😀'
    }

    const setupControls = () => {
      window.addEventListener('keydown', (event) => {
        switch (event.key) {
          case 'w':
            movePlayer(-1, 0)
            break // Up
          case 's':
            movePlayer(1, 0)
            break // Down
          case 'a':
            movePlayer(0, -1)
            break // Left
          case 'd':
            movePlayer(0, 1)
            break // Right
        }
      })
    }

    onMounted(() => {
      initializeGrid()
      setupControls()
    })

    return {
      gridDisplay: displayGrid,
      grid,
    }
  },
})
</script>

<style scoped>
.game-container {
  text-align: center;
  justify-content: center;
  flex-direction: column;
}

.game-grid {
  background-color: #1d1d1d; /* ダーク背景色 */
  color: #e0e0e0; /* 明るいテキスト色 */
  border: 1px solid #333; /* ダークボーダー */
  padding: 20px;
  border-radius: 8px;
  display: grid; /* グリッドレイアウト */
  grid-template-columns: repeat(50, 2.5ch); /* 幅を1chで固定 */
  grid-template-rows: repeat(50, 2.5ch); /* 高さも1chで固定 */
  margin: 20px auto;
  font-family: monospace;
  white-space: pre;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  /* line-height: 1ch; 縦幅を横幅に揃える */
}

/* .cell {
  width: 1ch;
  height: 1ch;
  text-align: center;
} */

.game-grid-item {
  background-color: #2c2c2c; /* アイテムのダーク背景色 */
  color: #e0e0e0; /* アイテムの明るいテキスト色 */
  border: 1px solid #444; /* アイテムのダークボーダー */
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
