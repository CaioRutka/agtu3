import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { isMobile } from 'react-device-detect';

const SpinningCoin = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {    
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let model: THREE.Object3D; // More generic type for the model
    let weightSize: number, heightSize: number;


    if (isMobile) {
      weightSize = 0.8;
      heightSize = 1;
    } else {
      weightSize = 0.3;
      heightSize = 1;
    }

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, (window.innerWidth * weightSize) / (window.innerHeight * heightSize), 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      
      renderer.setSize(window.innerWidth * weightSize, window.innerHeight * heightSize);

      if (canvasRef.current) {
        (canvasRef.current as HTMLElement).appendChild(renderer.domElement);
      }

       // Add ambient light to the scene
       const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft white light
       scene.add(ambientLight);

       // Add directional light to the scene
       const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
       directionalLight.position.set(1, 1, 1).normalize();
       scene.add(directionalLight);

      const loader = new GLTFLoader();
      
      loader.load(
        'earthquakes_-_2000_to_2019.glb', // Path to your 3D model file
        (gltf : any) => {
          model = gltf.scene;

          model.traverse((child : any) => {
            if (child.isMesh) {
              child.geometry.center();

              const diffuseTexture = new THREE.TextureLoader().load('T_LEO_Diffuse.png');
              const roughnessTexture = new THREE.TextureLoader().load('T_LEO_Roughness.png');
              const metallicTexture = new THREE.TextureLoader().load('T_LEO_Metallic.png');
              
              const material = new THREE.MeshStandardMaterial({
                map: diffuseTexture,
                roughnessMap: roughnessTexture,
                metalnessMap: metallicTexture,
              });
              
              child.material = material;
            }
          });

          /* gltf.scene.scale.set(0.5,0.5,0.5) */

          model.scale.set(0.1, 0.1, 0.1);

          scene.add(model);
        },
        undefined,
        (error : any) => {
          console.error('Error loading 3D model', error);
        }
      );

      camera.position.z = 20;

      const animate = () => {
        requestAnimationFrame(animate);
        if (model) {
          model.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    const handleResize = () => {
        camera.aspect = (window.innerWidth * weightSize) / (window.innerHeight * heightSize);
        camera.updateProjectionMatrix();
        
        // Defina o novo tamanho do renderer
        renderer.setSize(window.innerWidth * weightSize, window.innerHeight * heightSize);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={canvasRef} style={{ width: '100%', height: '100vh' }} />;
};

export default SpinningCoin;