  /**
   * _ 私有属性和方法
   *
   * 无状态或纯pipe式处理 静态工具类
   */
  class GLStart {
    constructor() {}

    /**
     * 编译shader代码
     * @param {*} gl
     * @param {*} type
     * @param {*} source
     *  const vertexShader = _loadShader(gl, gl.VERTEX_SHADER, vsSource);
     * @returns
     */
    static _loadShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type) as WebGLShader // 创建着色器对象
      gl.shaderSource(shader, source) // 提供shader代码  绑定资源
      gl.compileShader(shader) // 编译 -> 生成着色器
      return shader
    }

    /**
     * 初始化一个着色程序
     * @param {*} gl
     * @param {*} vsSource
     * @param {*} fsSource
     * @returns
     */
    static initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
      const vertexShader = this._loadShader(gl, gl.VERTEX_SHADER, vsSource)
      const fragmentShader = this._loadShader(gl, gl.FRAGMENT_SHADER, fsSource)

      // Create the shader program
      const shaderProgram = gl.createProgram() as WebGLProgram
      gl.attachShader(shaderProgram, vertexShader) //程序附加上着色器
      gl.attachShader(shaderProgram, fragmentShader)
      gl.linkProgram(shaderProgram) //连接到程序
      return shaderProgram
    }
  }
  export{GLStart}