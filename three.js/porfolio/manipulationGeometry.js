import * as THREE from 'three';

console.log(dat)



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( innerWidth,innerHeight );
renderer.setPixelRatio(devicePixelRatio); //Mejorar calidad de pixeles
document.body.appendChild( renderer.domElement );


//Plano

const planeGeometry = new THREE.PlaneGeometry( 5, 5, 10,10 ); //Unit,width,height
const planeMaterial = new THREE.MeshPhongMaterial( {
     color: 0xff0000,
     side: THREE.DoubleSide,
    flatShading: true,
    // wireframe:true,
    // vertexColors:true
    });
const planeMesh = new THREE.Mesh( planeGeometry, planeMaterial );//Creando el elementos
scene.add( planeMesh ); //Agregando el elemento creado a la scena

//Usar la destructuracion para acortar el array
const{array} = planeMesh.geometry.attributes.position; //Esto se hizo para simplificar la ruta del array que necesitabamos y asi podes utilizarlo mas condensado

for(let i=0;i < array.length; i+=3){
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];

    array[i + 2] = z + Math.random();

}


//Creando la Luz
const light = new THREE.DirectionalLight(0xffffff,1) //Color, Intennsidad
light.position.set(0,0,1); //Planos del x,y,z 
scene.add(light);


camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    planeMesh.rotation.x += 0.03;
    planeMesh.rotation.y += 0.03;

    renderer.render( scene, camera );
}

animate();
