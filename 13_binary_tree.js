// Бинарное дерево поиска - это структура данных, где каждый узел также является деревом, тоесть структура рекурсивна.
// Основная суть в том, что у каждого узла может быть только два потомка.
// Добавляются эти узлы также особым способом. Если добавляемое в дерево значение меньше по значению чем текущий угол,
// То значение уходит в левое дерево, если больше - в правое. Сравнение происходит с каждым узлом.
// И так получается, что правая часть поддерева выстраивается с большими значениями, левая - с меньшими.

class BinaryTree {
    constructor(props) {
        this.root = null;
    }

    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            let node = this.root;
            let newNode = new TreeNode(value);
            while (node) {
                if (value > node.value) {
                    if (!node.right) {
                        break;
                    }
                    node = node.right;
                } else {
                    if (!node.left) {
                        break;
                    }
                    node = node.left;
                }
            }
            if (value > node.value) {
                node.right = newNode;
            } else {
                node.left = newNode;
            }
        }
    }

    print(root = this.root) {
        if (!root) {
            return true;
        }
        console.log(root.value);
        this.print(root.left);
        this.print(root.right);
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinaryTree();

tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);
tree.add(7);
tree.print();

