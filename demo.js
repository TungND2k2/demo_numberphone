// hàm địn h nghĩa node 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Tạo danh sách liên kết từ một mảng giá trị
function createLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }

    const linkList = new Node(arr[0]);
    let current = linkList;

    for (let i = 1; i < arr.length; i++) {
        const newNode = new Node(arr[i]);
        current.next = newNode;
        current = newNode;
    }

    return linkList;
}
// hàm xóa bỏ node (b1)
function removeNode(linkList, a) {
    // Xóa các phần tử ở đầu danh sách có giá trị bằng a
    while (linkList !== null && linkList.value === a) {
        linkList = linkList.next;
    }

    let current = linkList;
    while (current !== null) {
        let nextNode = current.next;
        if (nextNode !== null && nextNode.value === a) {
            current.next = nextNode.next;
        } else {
            current = nextNode;
        }
    }

    return linkList;
}

// Hiển thị danh sách liên kết
function display(linkList) {
    let current = linkList;
    let result = "";
    while (current !== null) {
        result += current.value + " ";
        current = current.next;
    }
    console.log(result.trim());
}


// Hợp nhất hai danh sách liên kết đã được sắp xếp tăng dần(b2)
function mergeLinkedLists(linkListOne, linkListTwo) {
    if (linkListOne === null) {
        return linkListTwo;
    }
    if (linkListTwo === null) {
        return linkListOne;
    }

    let mergedHead;

    if (linkListOne.value <= linkListTwo.value) {
        mergedHead = linkListOne;
        mergedHead.next = mergeLinkedLists(linkListOne.next, linkListTwo);
    } else {
        mergedHead = linkListTwo;
        mergedHead.next = mergeLinkedLists(linkListOne, linkListTwo.next);
    }

    return mergedHead;
}

// Hợp nhất danh sách liên kết đã được sắp xếp tăng dần(b3)
function mergeLists(linkedListArr) {
    if (linkedListArr.length === 0) {
        return null;
    }

    while (linkedListArr.length > 1) {
        const newListArr = [];

        for (let i = 0; i < linkedListArr.length; i += 2) {
            const list1 = linkedListArr[i];
            const list2 = linkedListArr[i + 1];
            const mergedList = mergeLinkedLists(list1, list2);
            newListArr.push(mergedList);
        }

        linkedListArr = newListArr;
    }

    return linkedListArr[0];
}



console.log("BÀI 1 ");

console.log("Danh sách liên kết ban đầu:");
const arr1 = [1, 2, 3, 4, 5];
const linkList = createLinkedList(arr1);
display(linkList);

const a = 2;
const newLinkList = removeNode(linkList, a);

console.log(`Danh sách liên kết sau khi xóa phần tử có giá trị ${a}:`);
display(newLinkList);
console.log(" -------------------------------- ");
console.log("BÀI 2 ");
const arr2 = [1, 2, 3, 7];
const arr3 = [4, 5, 8];
const linkListOne = createLinkedList(arr2);
const linkListTwo = createLinkedList(arr3);

const mergedHead = mergeLinkedLists(linkListOne, linkListTwo);

console.log("Danh sách liên kết hợp nhất:");
display(mergedHead);

console.log(" -------------------------------- ");
console.log("BÀI 3 ");

const arr4 = [1, 2, 3, 7];
const arr5 = [4, 5, 8];
const arr6 = [6, 11, 13];
const arr7 = [9, 10, 14];
const linkList3 = createLinkedList(arr4);
const linkList4 = createLinkedList(arr5);
const linkList5 = createLinkedList(arr6);
const linkList6 = createLinkedList(arr7);
let linkedListArr = [];
linkedListArr.push(linkList3)
linkedListArr.push(linkList4)
linkedListArr.push(linkList5)
linkedListArr.push(linkList6)
const mergedHead3 = mergeLists(linkedListArr);

console.log("Danh sách liên kết hợp nhất:");
display(mergedHead3);