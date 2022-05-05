import robotoMedium from './Roboto-Medium.json'
import robotoRegular from './Roboto-Regular.json'
import robotoMediumPng from './Roboto-Medium.png'
import robotoRegularPng from './Roboto-Regular.png'
 
export const specs = {
  'Roboto-Medium': robotoMedium,
  'Roboto-Regular': robotoRegular
}

export function initShaders() {

  let aVertexShader = `
  precision highp float;

  // Attributes
  attribute vec3 position;
  attribute vec2 uv;
  attribute vec4 customColor;
  attribute vec4 fontUv;

  // Uniforms
  uniform mat4 viewProjection;

  // Varying
  varying vec2 vUV;
  varying vec4 vColor;

  #include<instancesDeclaration>

  void main(void) {
      #include<instancesVertex>
      
      gl_Position = viewProjection * finalWorld * vec4(position, 1.0);
      vUV = vec2(fontUv.x + uv.x * fontUv.z, fontUv.y + uv.y * fontUv.w);
      vColor = customColor;
  }
`

let aFragmentShader = `
  precision highp float;

  varying vec2 vUV;
  varying vec4 vColor;

  uniform sampler2D font;

  #include<instancesDeclaration>

  float median(float r, float g, float b) {
      return max(min(r, g), min(max(r, g), b));
  }

  void main(void) {
      vec4 pick = texture2D(font, vUV); //.rgb;
      float mid = median(pick.r, pick.g, pick.b);
      float dist = mid - 0.5;
      float inner = mid - 0.7;
      //float sigDist = pick.w - 0.5;
      float w = clamp(dist/fwidth(dist), 0.0, 1.0);
      float z = clamp(inner/fwidth(inner), 0.0, 1.0);
      vec4 white = vec4(1.0, 1.0, 1.0, 1.0);
      vec4 blue = vec4(0.2, 0.1, 0.6, 1.0);
      vec4 black = vec4(0.0, 0.0, 0.0, 1.0);
      vec4 red = vec4(0.4, 0.02, 0.22, 1.0);
      vec4 color = mix(red, white, pick.w);
      color = mix(color, black, w);
      color = mix(color, blue, z);

      gl_FragColor = color;
      if (gl_FragColor.a < 0.1) discard;
  }
  `

  BABYLON.Effect.ShadersStore['MoveableTypeFragmentShader'] = aFragmentShader;
  BABYLON.Effect.ShadersStore['MoveableTypeVertexShader'] = aVertexShader;
}

export function texture(fontName) {
  let png = fontName == 'Roboto-Medium' ? robotoMediumPng : robotoRegularPng
  let fontTexture = new BABYLON.Texture(png, scene) //, undefined, undefined, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  return fontTexture
}

export function material(fontName) {
  let tex = texture(fontName)
  let mat = new BABYLON.ShaderMaterial(fontName+"shader", scene, {
    vertex: "MoveableType",
    fragment: "MoveableType",
  },
  {
    attributes: ["position", "normal", "uv", "customColor", "fontUv"],
    uniforms: ["world", "worldView", "worldViewProjection", "view", "projection", "viewProjection", "font"],
    needAlphaBlending: true
  });

  mat.setTexture("font", tex);
  return mat
}

export function data(fontName) {
  let mat = material(fontName)
  let spec = specs[fontName];
  return {
    material: mat,
    spec
  }
}

let originShiftMatrix = BABYLON.Matrix.Translation(0.5, 0.5, 0)
let genBaseMatrix = function(glyph) {
    if (!glyph.planeBounds) return originShiftMatrix
    let selectWidth = glyph.planeBounds.right - glyph.planeBounds.left
    let selectHeight = glyph.planeBounds.top - glyph.planeBounds.bottom
    let scaleMatrix = BABYLON.Matrix.Scaling(selectWidth, selectHeight, 1.0)
    return originShiftMatrix.multiply(scaleMatrix)
}

let genUvs = function(s, fontData) {
    let bufferFontUv = new Float32Array(4 * s.length)      
    s.split('').forEach((c, index) => {
        let fontUv = fontData.atlasUvs[c]
        bufferFontUv.set(fontUv, index*4)
    })
    return bufferFontUv
}

let genMatrices = function(s, fontData, position, scale) {
    // x offset of character (relative to line origin)
    let x = 0
    let bufferMatrices = new Float32Array(16 * s.length)
    s.split('').forEach((c, i) => {
        let glyph = fontData.chars[c]

        // Create the right shape rectangle for the character and make the character origin bottom left
        let baseMatrix = genBaseMatrix(glyph)

        // Scaling
        let scalingMatrix = BABYLON.Matrix.Scaling(scale, scale, 1.0)

        let bottom = glyph.planeBounds.bottom
        //bottom *= 1 + (0.5 * i)
        let left = glyph.planeBounds.left
        //left *= 1 + (-1.5 * i)
        // Placement of a character relative to the other characters in the line
        let layoutMatrix = BABYLON.Matrix.Translation(
            x + left*scale,
            bottom*scale,
            0.0);
        // x offset of next character
        x += glyph.advance*scale

        // Offset of the line
        let originMatrix = BABYLON.Matrix.Translation(position.x, position.y, 0)

        // Scale char rectangle
        let scaled = baseMatrix.multiply(scalingMatrix)
        // Move the rectangle relative to the other characters
        let relative = scaled.multiply(layoutMatrix)
        // Move by the line offset
        let final = relative.multiply(originMatrix)

        final.copyToArray(bufferMatrices, i * 16);
    })
    return bufferMatrices
}

let genSameColor = function(s, color) {
    let bufferColors = new Float32Array(4 * s.length)
    for (var i = 0; i < s.length; i++) {
        bufferColors[i * 4] = color.r;
        bufferColors[i * 4 + 1] = color.g;
        bufferColors[i * 4 + 2] = color.b;
        bufferColors[i * 4 + 3] = color.a;
    }
    return bufferColors
}

let genText = function (s, fontData, position, color, material, scale, scene) {
    let bufferUvs = genUvs(s, fontData)
    let bufferMatrices = genMatrices(s, fontData, position, scale)
    let bufferColors = genSameColor(s, color)
    let text = BABYLON.MeshBuilder.CreatePlane("plane", {height: 1, width: 1}, scene);
    text.thinInstanceSetBuffer('matrix', bufferMatrices, 16)
    text.thinInstanceSetBuffer("customColor", bufferColors, 4);
    text.thinInstanceSetBuffer("fontUv", bufferUvs, 4)
    text.material = material
    return text
}

export function thin(string, data, position, color, size, scene) {
    let instance = genText(string, data.spec, position, color, data.material, size, scene)
    return instance
}
