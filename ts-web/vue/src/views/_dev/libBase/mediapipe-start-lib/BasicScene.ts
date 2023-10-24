import * as THREE from 'three'
/**
 * 基础场景辅助展示
 */
class BasicScene {
    cubes: null|Array<any>;
    labelRenderers: never[];
    width: number;
    height: number;
    canvas: HTMLElement | null;
    scene: any;
    camera: any;
    renderer: any;
    lastTime: any;
    constructor(dom: string) {
        // null 标记
        this.cubes = null;
        this.labelRenderers = [];
        this.width = 1000;
        this.height = 1000;
        this.canvas = document.getElementById(dom); // 得到canvas对象的引用
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.width / this.height,
            0.1,
            1000
        );
        this.camera.position.z = 2;
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas as any,
            antialias: true,
        });
        this.renderer.setSize(this.width, this.height);
        this.renderer.render(this.scene, this.camera);
        // const cubeNew = this.addCube({x:0,y:0,z:0})
        // this.addCubeWithLabel([{ x: 0, y: 0, z: 0 }]);
        // this.addLabel(cubeNew,'test')
        this.render();
        window.addEventListener("resize", this.resize.bind(this));
    }

    /**
     * 添加标记体
     * @param {*} position
     * @returns
     */
    addCube(position: { x: number; y: number; z: number }, color: undefined) {
        // 添加mesh和纹理
        const geometry = new THREE.BoxGeometry(0.01, 0.01, 0.01);
        let material:THREE.MeshBasicMaterial
        if (color) 
        { material = new THREE.MeshBasicMaterial({ color: color }) }
        else {
            material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        }

        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        cube.position.x = -position.x;
        cube.position.y = -position.y;
        cube.position.z = position.z;
        return cube;
    }

    addLabel(cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>, number: string | number | null) {
        const labelDiv = document.createElement("div") as any;
        labelDiv.className = "label";
        labelDiv.textContent = number;
        labelDiv.style.marginTop = "-1em";
        const label = new CSS2DObject(labelDiv);
        label.position.set(0, 0, 0);
        label.layers.set(0);
        const labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(this.width, this.height);
        labelRenderer.domElement.style.position = "absolute";
        labelRenderer.domElement.style.top = "0px";
        labelRenderer.domElement.style.color = "red";
        document.body.appendChild(labelRenderer.domElement);
        cube.add(label);
        labelRenderer.render(this.scene, this.camera);
        return labelRenderer;
    }

    /**
     * 添加标记
     * @param {*} positions
     */
    addCubeWithLabel(positions: string | any[]) {
        this.cubes = [];
        for (let index = 0; index < positions.length; index++) {
            const position = positions[index];
            const cube = this.addCube(position);
            if (index == 50 || index == 280) {
                const labelRenderer = this.addLabel(cube, index);
                this.labelRenderers.push(labelRenderer);
            }
            this.cubes.push(cube);
        }
    }

    /**
     * 添加标记
     * @param {*} positions
     */
    updateCubeWithLabel(positions: any[]) {
        for (let index = 0; index < this.cubes.length; index++) {
            const cube = this.cubes[index];
            const position = positions[index];
            cube.position.x = -position.x;
            cube.position.y = -position.y;
            cube.position.z = position.z;
        }
        for (let index = 0; index < this.labelRenderers.length; index++) {
            const labelRenderer = this.labelRenderers[index];
            labelRenderer.render(this.scene, this.camera);
        }
    }

    resize() {
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.render(this.scene, this.camera);
    }
    render(time = this.lastTime) {
        const delta = (time - this.lastTime) / 1000;
        this.lastTime = time;
        this.renderer.render(this.scene, this.camera);

        // Request next frame
        requestAnimationFrame((t) => this.render(t));
    }
}



export { BasicScene }