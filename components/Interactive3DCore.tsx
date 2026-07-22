'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Interactive3DCore() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 3D Audio Wireframe Sphere Geometry
    const geometry = new THREE.IcosahedronGeometry(1.8, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Inner Glowing Core
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 4);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x1d4ed8,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // Lighting
    const pointLight = new THREE.PointLight(0x38bdf8, 3, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Mouse Tracking for Interactive 3D Parallax Tilt
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();
    let reqId: number;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotation & Floating effect
      sphere.rotation.y = elapsedTime * 0.25;
      sphere.rotation.x = elapsedTime * 0.15;
      innerSphere.rotation.y = -elapsedTime * 0.4;

      // Mouse Smooth Interpolation
      sphere.rotation.y += (mouseX * 0.5 - sphere.rotation.y) * 0.05;
      sphere.rotation.x += (-mouseY * 0.5 - sphere.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-sky-400/70 uppercase pointer-events-none">
        [ Drag / Hover for Interactive 3D Audio Mesh ]
      </div>
    </div>
  );
}