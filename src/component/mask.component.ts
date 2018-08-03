import IMask from 'imask';

export class CapivaraMask {
    public $constants;
    public $functions;
    public $bindings;


    private capivaraMask: string
    private inputClass: string
    private lazyPlaceholder: boolean
    private mask: any
    private element: HTMLElement

    constructor(private $scope, private $element) {
        this.element = $element
    }

    $onInit() {
        if (!this.$bindings.capivaraMask) {
            throw new Error('capivaraMask é um parâmetro obrigatório')
        }

        // Check if has class to the input and placeholder
        this.inputClass = this.$bindings.inputClass ? this.$bindings.inputClass : 'form-control'
        this.lazyPlaceholder = this.$bindings.lazyPlaceholder ? this.$bindings.lazyPlaceholder : false

        this.capivaraMask = this.$bindings.capivaraMask

        var maskOptions = {
            mask: this.capivaraMask,
            lazy: this.lazyPlaceholder
        };
        this.mask = new IMask(this.element.getElementsByTagName('input')[0], maskOptions);
        this.mask.on()
    }
}
