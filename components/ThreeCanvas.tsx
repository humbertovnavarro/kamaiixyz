import { Component, createRef, RefObject } from 'react';
type ThreeCanvasProps = {
  scene: (canvas: HTMLCanvasElement, reactCanvas: ThreeCanvas) => void;
  className?: string;
  width?: number;
  height?: number;
}
class ThreeCanvas extends Component<ThreeCanvasProps> {
  ref: RefObject<HTMLCanvasElement>;
  update?: () => void;
  tearDown?: () => void;
  width = 0;
  height = 0;
  constructor(props: ThreeCanvasProps) {
    super(props);
    this.ref = createRef();
    this.onUpdate = this.onUpdate.bind(this);
  }
  onUpdate() {
    requestAnimationFrame(this.onUpdate);
    if(this.update)
    this.update();
  }
  render() {
    return (
      <div className={this.props.className}>
        <canvas ref={this.ref}></canvas>
      </div>
    )
  }
  componentDidMount() {
    const $canvas = this.ref.current;
    if($canvas) {
      this.width = $canvas.parentElement?.clientWidth || 640;
      this.height = $canvas.parentElement?.clientHeight || 480;
      this.props.scene($canvas, this);
      this.onUpdate();
    }
  }
  componentWillUnmount() {
    if(this.tearDown)
    this.tearDown();
  }
}
export default ThreeCanvas;
