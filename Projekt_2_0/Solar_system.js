const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  6000
);
const cameraDistance = 3000.0;
let cameraAngle =0.0;
camera.position.z = cameraDistance;
camera.lookAt(scene.position);


const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();

const textureLoader = new THREE.TextureLoader();



//tekstury
const starsTexture = "https://i.imgur.com/gLGNnkp.jpeg";
const sunTexture = "https://i.imgur.com/PWnSJQd.jpeg";
const mercuryTexture = "https://i.imgur.com/tJV7qzf.png";
const venusTexture = "https://i.imgur.com/xeaPIjD.jpeg";
const earthTexture = "https://i.imgur.com/vflkkqF.jpeg";
const marsTexture = "https://i.imgur.com/U6upjrv.jpeg";
const jupiterTexture = "https://i.imgur.com/4APG00k.jpeg";
const saturnTexture = "https://i.imgur.com/YKw0m4x.jpeg";
const saturnRingTexture = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c1827fcd-9fde-48eb-8da3-489166bd8542/d6xt63j-169c5f5a-9033-417c-a48a-496ec8d05f77.jpg";
const uranusTexture = "https://i.imgur.com/olpgGMo.jpeg";
const uranusRingTexture = "https://i.imgur.com/F1y9Ve4.png";
const neptuneTexture = "https://i.imgur.com/pycXdLM.jpeg";
const plutoTexture = "https://i.imgur.com/YNsmmHV.jpeg";

const SunSize = 200.0;

const MercurySize = 6.0;
const MercuryDistance = 260.0;
const MerkuryRotation = 0.006;

const WenusSize = 9.5;
const WenusDistance = 300.0;
const WenusRotation = 0.0032;

const EarthSize = 10.0;
const EarthDistance = 340.0;
const EarthRotation = 0.00192;

const MoonSize = 2.5;
const MoonDistance = 20.0
const MoonRotation = 0.05;

const MarsSize = 7.0;
const MarsDistance = 420.0;
const MarsRotation = 0.00096;

const JupiterSize = 130.0;
const JupiterDistance = 680.0;
const JupiterRotation = 0.00024;

const JupiterMoon_1Size = 4.0;
const JupiterMoon_1Distance = -150.0;
const JupiterMoon_1Rotation = 0.1;

const JupiterMoon_2Size = 5.0;
const JupiterMoon_2Distance = 163.0;
const JupiterMoon_2Rotation = 0.2;

const JupiterMoon_3Size = 6.0;
const JupiterMoon_3Distance = -180.0;
const JupiterMoon_3Rotation = 1.0;

const JupiterMoon_4Size = 8.0;
const JupiterMoon_4Distance = 200;
const JupiterMoon_4Rotation = 0.01;

const SaturnSize = 70.0;
const SaturnDistance = 1050.0;
const SaturnRotation = 0.00012;

const SaturnRingSize = SaturnSize * 1.7;
const SaturnRingWidth = SaturnRingSize * 0.18;

const UranSize = 50.0;
const UranDistance = 1380.0;
const UranRotation = 0.00004;

const NeptunSize = 45.0;
const NeptunDistance = 1550.0;
const NeptunRotation = 0.00002;

// Słońce
const SunGeo = new THREE.SphereBufferGeometry( SunSize, 32, 32);
const SunMat = new THREE.MeshBasicMaterial( { map: textureLoader.load(sunTexture), emissive: 0xffff44} );
const Sun = new THREE.Mesh( SunGeo, SunMat);
scene.add( Sun );

//Mercury
 
const MercuryGeo = new THREE.SphereBufferGeometry( MercurySize, 32, 32);
const MercuryMat = new THREE.MeshLambertMaterial({ map: textureLoader.load(mercuryTexture) });
const Mercury = new THREE.Mesh(MercuryGeo, MercuryMat);
Mercury.position.set( MercuryDistance, 0, 0);
Mercury.castShadow = true; 
Mercury.receiveShadow = true;
scene.add( Mercury );

//Wenus

const WenusGeo = new THREE.SphereBufferGeometry( WenusSize, 32, 32);
const WenusMat = new THREE.MeshLambertMaterial({ map: textureLoader.load(venusTexture) });
const Wenus = new THREE.Mesh(WenusGeo, WenusMat);
Wenus.position.set( WenusDistance, 0, 0);
Wenus.castShadow = true; 
Wenus.receiveShadow = true;
scene.add( Wenus );

//Ziemia + ksiezyc
const EarthGeo = new THREE.SphereBufferGeometry( EarthSize, 32, 32);
const EarthMat = new THREE.MeshLambertMaterial({ map: textureLoader.load(earthTexture) });
const Earth = new THREE.Mesh(EarthGeo, EarthMat);
Earth.castShadow = true;
Earth.receiveShadow = true;
const MoonGeo = new THREE.SphereBufferGeometry( MoonSize, 32, 32);
const MoonMat = new THREE.MeshLambertMaterial( {map: textureLoader.load(mercuryTexture)});
const Moon = new THREE.Mesh(MoonGeo, MoonMat);
Moon.castShadow = true;
Moon.receiveShadow = true;
Moon.position.x = MoonDistance

const EarthMoonGroup = new THREE.Group();
EarthMoonGroup.add( Earth );
EarthMoonGroup.add( Moon );
EarthMoonGroup.position.set( EarthDistance, 0 , 0 );
scene.add( EarthMoonGroup );

//Mars
const MarsGeo = new THREE.SphereBufferGeometry( MarsSize, 32, 32);
const MarsMat = new THREE.MeshLambertMaterial({ map: textureLoader.load(marsTexture) });
const Mars = new THREE.Mesh(MarsGeo, MarsMat);
Mars.position.set( MarsDistance, 0, 0);
Mars.castShadow = true; 
Mars.receiveShadow = true;
scene.add( Mars );


//Saturn + pierscien
const SaturnGeo = new THREE.SphereBufferGeometry( SaturnSize, 32, 32);
const SaturnMat = new THREE.MeshLambertMaterial({ map: textureLoader.load(saturnTexture) });
const Saturn = new THREE.Mesh( SaturnGeo, SaturnMat);
Saturn.receiveShadow = true;

const SaturnRingGeo = new THREE.TorusBufferGeometry( SaturnRingSize, SaturnRingWidth, 16, 64);
const SaturnRingMat = new THREE.MeshLambertMaterial({ map: textureLoader.load(saturnRingTexture), side: THREE.DoubleSide });
const SaturnRing = new THREE.Mesh( SaturnRingGeo, SaturnRingMat);
SaturnRing.receiveShadow = true;
SaturnRing.rotation.set( 0, -Math.PI/12.0, 0);
SaturnRing.scale.set( 1.0, 1.0, 0.01 );

const SaturnRingGroup = new THREE.Group();
SaturnRingGroup.add( Saturn );
SaturnRingGroup.add( SaturnRing );
SaturnRingGroup.position.set( SaturnDistance, 0, 0);
scene.add( SaturnRingGroup );

//Jowisz+4księżyce 

const JupiterGeo = new THREE.SphereBufferGeometry( JupiterSize, 32, 32);
const JupiterMat = new THREE.MeshLambertMaterial({ map: textureLoader.load(jupiterTexture) });
const Jupiter = new THREE.Mesh(JupiterGeo, JupiterMat);
Jupiter.position.set( JupiterDistance, 0, 0);
Jupiter.castShadow = true; 
Jupiter.receiveShadow = true;
scene.add( Jupiter );

const JupiterMoon_1Geo = new THREE.SphereBufferGeometry( JupiterMoon_1Size, 32, 32);
const JupiterMoon_1Mat = new THREE.MeshLambertMaterial( {map: textureLoader.load(mercuryTexture)});
const JupiterMoon_1 = new THREE.Mesh(JupiterMoon_1Geo, JupiterMoon_1Mat);
JupiterMoon_1.castShadow = true;
JupiterMoon_1.receiveShadow = true;
JupiterMoon_1.position.x = JupiterMoon_1Distance

const JupiterMoon_2Geo = new THREE.SphereBufferGeometry( JupiterMoon_2Size, 32, 32);
const JupiterMoon_2Mat = new THREE.MeshLambertMaterial( {map: textureLoader.load(mercuryTexture)});
const JupiterMoon_2 = new THREE.Mesh(JupiterMoon_2Geo, JupiterMoon_2Mat);
JupiterMoon_2.castShadow = true;
JupiterMoon_2.receiveShadow = true;
JupiterMoon_2.position.x = JupiterMoon_2Distance

const JupiterMoon_3Geo = new THREE.SphereBufferGeometry( JupiterMoon_3Size, 32, 32);
const JupiterMoon_3Mat = new THREE.MeshLambertMaterial( {map: textureLoader.load(mercuryTexture)});
const JupiterMoon_3 = new THREE.Mesh(JupiterMoon_3Geo, JupiterMoon_3Mat);
JupiterMoon_3.castShadow = true;
JupiterMoon_3.receiveShadow = true;
JupiterMoon_3.position.x = JupiterMoon_3Distance

const JupiterMoon_4Geo = new THREE.SphereBufferGeometry( JupiterMoon_4Size, 32, 32);
const JupiterMoon_4Mat = new THREE.MeshLambertMaterial( {map: textureLoader.load(mercuryTexture)});
const JupiterMoon_4 = new THREE.Mesh(JupiterMoon_4Geo, JupiterMoon_4Mat);
JupiterMoon_4.castShadow = true;
JupiterMoon_4.receiveShadow = true;
JupiterMoon_4.position.x = JupiterMoon_4Distance

const JupiterMoonGroup1 = new THREE.Group();
JupiterMoonGroup1.add( JupiterMoon_1 );
JupiterMoonGroup1.position.set( JupiterDistance, 0 , 0 );
scene.add( JupiterMoonGroup1 );

const JupiterMoonGroup2 = new THREE.Group();
JupiterMoonGroup2.add( JupiterMoon_2 );
JupiterMoonGroup2.position.set( JupiterDistance, 0 , 0 );
scene.add( JupiterMoonGroup2 );

const JupiterMoonGroup3 = new THREE.Group();
JupiterMoonGroup3.add( JupiterMoon_3 );
JupiterMoonGroup3.position.set( JupiterDistance, 0 , 0 );
scene.add( JupiterMoonGroup3 );

const JupiterMoonGroup4 = new THREE.Group();
JupiterMoonGroup4.add( JupiterMoon_4 );
JupiterMoonGroup4.position.set( JupiterDistance, 0 , 0 );
scene.add( JupiterMoonGroup4 );
//Uran 

const UranGeo = new THREE.SphereBufferGeometry( UranSize, 32, 32);
const UranMat = new THREE.MeshLambertMaterial({ map: textureLoader.load(uranusTexture) });
const Uran = new THREE.Mesh(UranGeo, UranMat);
Uran.position.set( UranDistance, 0, 0);
Uran.castShadow = true; 
Uran.receiveShadow = true;
scene.add( Uran );

//Neptun

const NeptunGeo = new THREE.SphereBufferGeometry( NeptunSize, 32, 32);
const NeptunMat = new THREE.MeshLambertMaterial({ map: textureLoader.load(neptuneTexture) });
const Neptun = new THREE.Mesh(NeptunGeo, NeptunMat);
Neptun.position.set( NeptunDistance, 0, 0);
Neptun.castShadow = true; 
Neptun.receiveShadow = true;
scene.add( Neptun );

//światła
const ambientLight = new THREE.AmbientLight( 0x404040 );
scene.add( ambientLight );
const pointLight = new THREE.PointLight( { color: 0xffffff} );
pointLight.castShadow = true;
pointLight.shadow.camera.near = 0.5;
pointLight.shadow.camera.far = 2000;
scene.add( pointLight );

renderer.render( scene, camera );

scene.background = new THREE.CubeTextureLoader()
	.setPath()
	.load( [
		starsTexture,
		starsTexture,
		starsTexture,
		starsTexture,
		starsTexture,
		starsTexture
	] );
//animacja
const animate = function(){
	
	requestAnimationFrame( animate );
	
	Mercury.rotation.z += MerkuryRotation;
	if ( Mercury.rotation.z > 2.0*Math.PI){
		Mercury.rotation.z = 0.0;
	}
	
	Mercury.position.set(
	MercuryDistance*Math.cos( Mercury.rotation.z),
	MercuryDistance*Math.sin( Mercury.rotation.z),
	0.0
	);
	
		Wenus.rotation.z += WenusRotation;
	if ( Wenus.rotation.z > 2.0*Math.PI){
		Wenus.rotation.z = 0.0;
	}
	
	Wenus.position.set(
	WenusDistance*Math.cos( Wenus.rotation.z),
	WenusDistance*Math.sin( Wenus.rotation.z),
	0.0
	);
	
	
	EarthMoonGroup.rotation.z += EarthRotation;
	if ( EarthMoonGroup.rotation.z > 2.0*Math.PI){
		EarthMoonGroup.rotation.z = 0.0;
	}
	EarthMoonGroup.position.set(
		EarthDistance*Math.cos( EarthMoonGroup.rotation.z),
		EarthDistance*Math.sin( EarthMoonGroup.rotation.z),
		0.0
		
	);
	

	
	
	
	Mars.rotation.z += MarsRotation;
	if ( Mars.rotation.z > 2.0*Math.PI){
		Mars.rotation.z = 0.0;
	}
	
	Mars.position.set(
	MarsDistance*Math.cos( Mars.rotation.z),
	MarsDistance*Math.sin( Mars.rotation.z),
	0.0
	);
	
		Jupiter.rotation.z += JupiterRotation;
	if ( Jupiter.rotation.z > 2.0*Math.PI){
		Jupiter.rotation.z = 0.0;
	}
	
	Jupiter.position.set(
	JupiterDistance*Math.cos( Jupiter.rotation.z),
	JupiterDistance*Math.sin( Jupiter.rotation.z),
	0.0
	);
	
		JupiterMoonGroup1.rotation.z += JupiterRotation;
	if ( JupiterMoonGroup1.rotation.z > 2.0*Math.PI){
		JupiterMoonGroup1.rotation.z = 0.0;
	}
	JupiterMoonGroup1.position.set(
		JupiterDistance*Math.cos( JupiterMoonGroup1.rotation.z),
		JupiterDistance*Math.sin( JupiterMoonGroup1.rotation.z),
		0.0
		
	);
	
			JupiterMoonGroup2.rotation.z += JupiterRotation;
	if ( JupiterMoonGroup2.rotation.z > 2.0*Math.PI){
		JupiterMoonGroup2.rotation.z = 0.0;
	}
	JupiterMoonGroup2.position.set(
		JupiterDistance*Math.cos( JupiterMoonGroup2.rotation.z),
		JupiterDistance*Math.sin( JupiterMoonGroup2.rotation.z),
		0.0
		
	);
	
			JupiterMoonGroup3.rotation.z += JupiterRotation;
	if ( JupiterMoonGroup3.rotation.z > 2.0*Math.PI){
		JupiterMoonGroup3.rotation.z = 0.0;
	}
	JupiterMoonGroup3.position.set(
		JupiterDistance*Math.cos( JupiterMoonGroup3.rotation.z),
		JupiterDistance*Math.sin( JupiterMoonGroup3.rotation.z),
		0.0
		
	);
	
			JupiterMoonGroup4.rotation.z += JupiterRotation;
	if ( JupiterMoonGroup4.rotation.z > 2.0*Math.PI){
		JupiterMoonGroup4.rotation.z = 0.0;
	}
	JupiterMoonGroup4.position.set(
		JupiterDistance*Math.cos( JupiterMoonGroup4.rotation.z),
		JupiterDistance*Math.sin( JupiterMoonGroup4.rotation.z),
		0.0
		
	);
	
	SaturnRingGroup.rotation.z += SaturnRotation;
	if ( SaturnRingGroup.rotation.z > 2.0*Math.PI ){
		SaturnRingGroup.rotation.z = 0.0;
	}
	
	SaturnRingGroup.position.set(
	SaturnDistance*Math.cos( SaturnRingGroup.rotation.z),
	SaturnDistance*Math.sin( SaturnRingGroup.rotation.z),
	0.0
	);
	
		Uran.rotation.z += UranRotation;
	if ( Uran.rotation.z > 2.0*Math.PI){
		Uran.rotation.z = 0.0;
	}
	
	Uran.position.set(
	UranDistance*Math.cos( Uran.rotation.z),
	UranDistance*Math.sin( Uran.rotation.z),
	0.0
	);

	Neptun.rotation.z += NeptunRotation;
	if ( Neptun.rotation.z > 2.0*Math.PI){
		Neptun.rotation.z = 0.0;
	}
	
	Neptun.position.set(
	NeptunDistance*Math.cos( Neptun.rotation.z),
	NeptunDistance*Math.sin( Neptun.rotation.z),
	0.0
	);
	
	renderer.render( scene, camera);
	
};

animate(); 
