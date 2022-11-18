// Алгоритмы, связанные с обходом дерева
// Деревья, это рекурсивная структура данных, где каждый узел является также деревом, но для данного дерева каждый узел является поддеревом.


const tree = [
    {
        v: 5,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
];

//Обойти дерево можно двумя способами: рекурсией и цикла

const recursive = (tree) => {
    let sum = 0;
    tree.forEach(node => {
        sum += node.v;
        if (!node.c) {
            return node.v;
        }
        sum += recursive(node.c);
    })
    return sum;
}

console.log(recursive(tree));

// В реализации данной функции нам понадобится такая структура данных как стек
// Элементы добавляются в конец структуры и извлекаются также из конца

const iteration = (tree) => {
    if (!tree.length) {
        return 0;
    }
    let sum = 0;
    let stack = [];
    tree.forEach(node => stack.push(node));
    while (stack.length) {
        const node = stack.pop();
        sum += node.v;
        if (node.c) {
            node.c.forEach(child => stack.push(child));
        }
    }
    return sum;
}

console.log(iteration(tree));