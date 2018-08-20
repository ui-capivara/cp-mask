import IMask from 'imask';

export class CapivaraMask {
  public $constants;
  public $functions;
  public $bindings;

  private mask: any;

  constructor(public $scope, public $element) { }

  $onInit() {
    if (!this.$constants.mask) {
      throw new Error('mask é um parâmetro obrigatório.')
    }
    this.applyMask();
  }

  $destroy() {
    this.mask.off('accept');
    this.mask.off('complete');
    this.mask.destroy();
  }

  applyMask() {
    const maskOptions = {
      mask: this.$constants.mask,
      lazy: !!this.$constants.placeholder,
    };
    this.mask = new IMask(this.$element.querySelector('input'), maskOptions);
    this.mask.on('accept', () => this.$bindings.cpModel = null);
    this.mask.on('complete', () => {
      this.$bindings.cpModel = this.mask.unmaskedValue;
    });
    this.mask.value = this.$bindings.cpModel;
  }

}
