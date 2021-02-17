/**
 * Slope's integer part multiplication by a value
 * @param {number} x The y value of the slope
 * @param {number} y The x value of the slope
 * @param {number} n The multiplicator
 */
function G(x, y, n) {
    return Math.floor(y / x) * n;
}

class NaryTree<T> extends Array<NaryTree<T>> {
    private _value: T;
    private _node: Array<NaryTree<T>>;

    /**
     * N - noded tree constructor
     * @param {T} value Value of the root's node
     * @param {Node | null} node Tree's Node list 
     * @returns {null} null
    */
    constructor(value: T, node: NodeListOf<NaryTree<T>> | null) { super()
        this._value = value;
        this._node = this.nextSibling;
    }
    
    public get getValue(): T { return this._value; }
    public get getNode(): Node { return this._node; }
    public getnNode = (id: number): Node => this._node.childNodes.item(id);

    public set setValue(value: T) { this._value = value; }
    public set setNodelist(node: Node) { this._node = node; }
    //public setNode = (id: number, node: NaryTree<T> | null) => { this._node.item(id)._value = node._value; this._node.item(id)._node = node._node; }
    

    public hasNode(): boolean {
        return this._node != null;
    }

    //public appendNode(refNode: NaryTree<T>, newNode: NaryTree<T>): void {
    //    let temp = new Node;
    //    let i = 0;
    //    while (this._node.item(i) != null) {
    //        temp.appendChild(this._node.item(i));
    //        i++;
    //    }
    //    temp.insertBefore(newNode, refNode);
    //    this._node;
        
    //}

    //public replaceChildTree(n: number, m: number): void {
    //    let temp = this._node.item(n).getRootNode();
    //    this._node.item(n).replaceChild(this._node.item(m), this._node.item(n));
    //    this._node.item(m).replaceChild(temp, this._node.item(m));
    //}

    //public replaceChildValue(n: number, m: number): void {
    //    let temp = this._node.item(n)._value;
        
    //}
}

class BinaryTree<T> {
    private _value: T;
    private _left: BinaryTree<T>;
    private _right: BinaryTree<T>;

    constructor(value: T, left: BinaryTree<T>, right: BinaryTree<T>) {
        this._value = value;
        this._left = left;
        this._right = right;
    }

    public getValue() { return this._value; }
    public getLeft() { return this._left; }
    public getRight() { return this._right; }

    public setValue(value: T) { this._value = value; }
    public setLeft(left: BinaryTree<T>) { this._left = left; }
    public setRight(right: BinaryTree<T>) { this._right = right; }

    public hasNode() {
        return this._left != null && this._right != null;
    }

    public appendRight(node: BinaryTree<T>) { if ( this._right != null ) { this._right = node; } }
    public appendLeft(node: BinaryTree<T>) { if ( this._left != null ) { this._left = node; } }

    public replaceChild() {
        let temp = this._left;
        this._left = this._right;
        this._right = temp;
    }

    public replaceChildValue() {
        let temp = this._left._value;
        this._left.setValue(this._right._value);
        this._right.setValue(temp);
    }

    public replaceChildParent(left = true) {
        let temp = this._value;
        this.setValue(left ? this._left._value : this._right._value);
        left ? this._left.setValue(temp) : this._right.setValue(temp);
    }
}

let tr = new NaryTree<number>(0, null);
//tr.nextSibling;