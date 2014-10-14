// revolutions per second
var angularSpeed = 0.2;
var lastTime = 0;
var sin = 0;
var cUp = true;
var cDown = false;
var cube;

// this function is executed on each animation frame
function animate(){
    // update
    if(cUp)
    {
        if(sin < 150)
        {
            sin++;
        }else{
            cUp = false;
            cDown = true;
        }
    }
    if(cDown)
    {
        if(sin > -150)
        {
            sin--;
        }else{
            cUp = true;
            cDown = false;
        }
    }
    console.log(wave);
    var time = (new Date()).getTime();
    var timeDiff = time - lastTime;
    var angleChange = angularSpeed * timeDiff * 2 * Math.PI / (1000);
    cube.rotation.y += angleChange;
    cube.rotation.x += angleChange;
    cube.position.x = sin;
    lastTime = time;

    cube.scale.x = (1-wave); // SCALE
    cube.scale.y = (1-wave); // SCALE
    //cube.scale.z = (1+wave); // SCALE
    // camera.lookAt(new THREE.Vector3(0, 0, 0));


    // render
    renderer.render(scene, camera);

    // request new frame
    requestAnimationFrame(function(){
        animate();
    });
}

// renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight );
document.body.appendChild(renderer.domElement);

// camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 500;

// scene
var scene = new THREE.Scene();

// cube
cube = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshNormalMaterial());
cube.overdraw = true;
scene.add(cube);


// start animation
animate();

