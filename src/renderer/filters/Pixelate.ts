import Filter from '../Filter';

export default class Pixelate extends Filter {
    name: string = 'Pixelate';

    parameters = {
        pixelSize: 1,
    };

    static get fragmentShader() {
        return `
            precision highp float;

            varying vec2 texCoord;
            uniform sampler2D image;
            uniform sampler2D source;
            uniform vec2 resolution;
            uniform float pixelSize;

            void main() {
                vec2 tileSize = vec2(pixelSize - 0.001);
                vec2 coord = (floor((gl_FragCoord.xy - 0.5) / tileSize) * tileSize + tileSize / 2.0) * resolution;
                vec4 color = texture2D(image, coord);

                gl_FragColor = color;
            }
        `;
    }
}
