
import { useEffect, useRef } from 'react';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadThree = async () => {
      // Dynamically import Three.js to avoid SSR issues
      const THREE = await import('three');
      
      if (!mountRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      mountRef.current.appendChild(renderer.domElement);

      // Create particle system
      const particleCount = 1000;
      const particles = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 100;
        positions[i + 1] = (Math.random() - 0.5) * 100;
        positions[i + 2] = (Math.random() - 0.5) * 100;

        colors[i] = 0.3 + Math.random() * 0.4;
        colors[i + 1] = 0.8 + Math.random() * 0.2;
        colors[i + 2] = 0.6 + Math.random() * 0.4;
      }

      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
      });

      const particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);

      // Add floating geometric shapes
      const geometries = [
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.SphereGeometry(0.8, 8, 6),
        new THREE.ConeGeometry(0.6, 1.5, 6),
      ];

      const material = new THREE.MeshBasicMaterial({
        color: 0x7EFFB2,
        transparent: true,
        opacity: 0.1,
        wireframe: true,
      });

      const shapes: any[] = [];
      for (let i = 0; i < 8; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const shape = new THREE.Mesh(geometry, material);
        
        shape.position.set(
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50
        );
        
        shape.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        
        shapes.push(shape);
        scene.add(shape);
      }

      camera.position.z = 30;

      sceneRef.current = scene;
      rendererRef.current = renderer;

      // Animation loop
      let time = 0;
      const animate = () => {
        frameRef.current = requestAnimationFrame(animate);
        time += 0.005;

        // Rotate particle system
        particleSystem.rotation.y += 0.001;
        particleSystem.rotation.x += 0.0005;

        // Animate shapes
        shapes.forEach((shape, index) => {
          shape.rotation.x += 0.005 + index * 0.001;
          shape.rotation.y += 0.003 + index * 0.001;
          shape.position.y += Math.sin(time + index) * 0.01;
        });

        // Animate camera
        camera.position.x = Math.sin(time * 0.5) * 2;
        camera.position.y = Math.cos(time * 0.3) * 1;

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    };

    loadThree();

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (rendererRef.current && mountRef.current && rendererRef.current.domElement) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground;
