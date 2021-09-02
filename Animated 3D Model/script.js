const model = new Zdog.Illustration({
  element: ".h",
  dragRotate: true,
})

new Zdog.Box({
  addTo: model,
  width: 100,
  height: 100,
  color: '#ec3750',
  stroke:20,
  translate: { z: -18 },
})

new Zdog.Box({
  addTo: model,
  depth:20,
  width: 20,
  height:80,
  color: '#fff',
  translate: { z: 18, x:-20},
})

new Zdog.Box({
  addTo: model,
  depth:20,
  width: 20,
  height:40,
  color: '#fff',
  translate: { z: 18, y:20,x:20,},
})

new Zdog.Box({
  addTo: model,
  depth:20,
  width: 40,
  height:20,
  color: '#fff',
  translate: { z: 18, x:10},
})

function animation () {
  model.updateRenderGraph();
  requestAnimationFrame(animation);
}

animation()
