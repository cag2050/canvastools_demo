<template>
<div>
    <canvas id='canvas1'></canvas>
    <div id='tools'></div>
</div>
</template>

<script>
import '../assets/canvastools.css'
const canvasPackage = require('../assets/canvastools')

export default {
    name: '',
    data () {
        return {
        }
    },
    mounted () {
        let canvasObj = new canvasPackage.CanvasTools(document.getElementById('canvas1'), {
            container: document.getElementById('tools')
        })
        console.log(canvasObj)
    }

}
</script>

<style>
#canvas1 {
    width: 800px;
    height: 600px;
    border: 1px solid gray;
}
</style>
