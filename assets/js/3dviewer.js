let renderer, scene, camera, mesh, isMouseClicked;

function modelLoader(modelPath, elementID)
{
    // Get model from HTML
    const element = document.getElementById(elementID);
    const extension = modelPath.toLowerCase().slice(-3);

    // Camera to look at model
    camera = new THREE.PerspectiveCamera(75, element.clientWidth/element.clientHeight, 1, 1000);
    camera.position.set(0, 0, 0);

    // Scene to place model in
    scene = new THREE.Scene();
    // scene.background = new THREE.Color('#2d2d2d');

    // Light the scene and model
    const hemisphereLight = new THREE.HemisphereLight('#ffffff', '#0f1013', 1);
    scene.add(hemisphereLight) ;

    const directionalLight = new THREE.DirectionalLight('#ffffff', 0.6);
    scene.add(directionalLight);
    
    // Load Model
    let loader;
    if (extension == 'stl')
        loader = new THREE.STLLoader();
    else
    {
        console.log('Model not supported. Must be STL');
        return;
    }

    loader.load(modelPath, function(geometry)
    {
        const material = new THREE.MeshPhongMaterial({ color: '#a3fe4c', specular: '#ffffff', shininess: 150 });
        mesh = new THREE.Mesh(geometry, material);
        mesh.receiveShadow = true;

        let center = new THREE.Vector3();
        geometry.computeBoundingBox();
        geometry.boundingBox.getCenter(center);
        geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(-center.x, -center.y, -center.z));

        let maxDimension = Math.max(geometry.boundingBox.max.x, geometry.boundingBox.max.y, geometry.boundingBox.max.z);
        camera.position.z = maxDimension*4;

        scene.add(mesh);
    });

    // Render the scene
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(element.clientWidth, element.clientHeight);
    element.appendChild(renderer.domElement)

    // Add controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableZoom = true;
    controls.rotateSpeed = 0.30;

    element.addEventListener('mousedown', () => {
        isMouseClicked = true;
    });
    element.addEventListener('mouseup', () => {
        isMouseClicked = false;
    });

    // Listen for resize
    window.addEventListener('resize', () => {
        camera.aspect = element.clientWidth/element.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(element.clientWidth, element.clientHeight)      
    });

    // Animate model
    animate();
}

function animate()
{
    requestAnimationFrame(animate);

    if (!isMouseClicked && mesh)
        mesh.rotation.y += 0.002;

    renderer.render(scene, camera);
}