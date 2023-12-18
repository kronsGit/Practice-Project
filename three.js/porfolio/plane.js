import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( innerWidth,innerHeight );
renderer.setPixelRatio(devicePixelRatio); //Mejorar calidad de pixeles
document.body.appendChild( renderer.domElement );


//Cubo
const geometry = new THREE.BoxGeometry( 1, 2, 2 ); //Unit,width,height
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );//Creando el elementos
scene.add( cube ); //Agregando el elemento creado a la scena

camera.position.z = 5;

//Plano

const planeGeometry = new THREE.PlaneGeometry( 5, 5, 10,10 ); //Unit,width,height
const planeMaterial = new THREE.MeshBasicMaterial( {
     color: 0xff0000,
     side: THREE.DoubleSide
    });
const planeMesh = new THREE.Mesh( planeGeometry, planeMaterial );//Creando el elementos
scene.add( planeMesh ); //Agregando el elemento creado a la scena

// camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.03;
    planeMesh.rotation.x += 0.01;

    renderer.render( scene, camera );
}

animate();
