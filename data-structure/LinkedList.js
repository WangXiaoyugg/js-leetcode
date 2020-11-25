class Node {
  constructor(el) {
    this.el = el
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // 增加元素
  append(el) {
    let node = new Node(el)
    let cur

    // 两种情况追加
    // 1. 链表是空的
    // 2. 链表不为空
    if (this.head == null) {
      this.head = node;
    } else {
      cur = this.head;
      while(cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length += 1;
  }

  removeAt(index) {
    // 上一个节点指向下一个节点，把自己干掉
    let cur = this.head;
    let prev;
    let i = 0;
    
    
    if (index == 0) {
      // 删除第一项
      this.head = cur.next;
    } else {
      while(i < index) {
        // 上一个和当前都要保存
        prev = cur;
        cur = cur.next;
        i++;
      }
      prev.next = cur.next;
      cur.next = null; // 释放内存
    }
    this.length-=1
    return cur.el;
  }

  print() {
    let cur = this.head;
    let ret = []
    while(cur) {
      ret.push(cur.el)
      cur = cur.next
    } 
    console.log(ret.join("=>"))
  }
}

let linkedList = new LinkedList()
linkedList.append('孙悟空')
linkedList.append('猪八戒')
linkedList.append('沙和尚')
linkedList.append('唐僧')
linkedList.print()
linkedList.removeAt(1)
linkedList.print()
