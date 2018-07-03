/**
 * @name LinkedList
 * @description Linked lists store ordered sets of elements, but they are different from arrays.
 *  the elements in the list are not continuously placed. Each element consists of a node of the
 *  storage element itself and a reference to the next element.
 */

//  构造函数
function LinkedList() {
  // 辅助 节点类
  let Node = function(element) {
    this.element = element;
    this.next = null;
  }

  let lenght = 0;
  let head = null;
  /**
   * append a node to LinkedList 
   */
  this.append = function(element) {
    let node = new Node(element),
      current;
    if (head === null) {
      // empty list
      head = node;
    } else {
      current = head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    lenght++;
  };
  /**
   * append a node at some place 
   */
  this.insert = function(position, element) {
    if (position >= 0 && position <= lenght) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0;
        if (position === 0) {
          node.next = current;
          head = node;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          head = node;
        }
        lenght++;
        return true;
    } else {
      return false;
    }
  };
  /**
   * remove a node at some place
   */
  this.removeAt = function(position) {
    if (!position) throw Error('please enter a position');
    if (position > -1 && position < lenght) {
      let current = head,
        previous,
        index = 0;
        if (position === 0) {
          head = current.next;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          previous.next = current.next;
        }
        lenght--;
        return current.element;
    } else {
      return null;
    }
  };
  this.remove = function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }
  this.indexOf = function(element) {
    let current = head,
      index = -1;
      while (current) {
        if (element === current.element) {
          return index;
        }
        index++;
        current = current.next;
      }
      return -1;
  };
  this.isEmpty = function() {
    return lenght === 0;
  };
  this.size = function() {
    return lenght;
  };
  this.getHead = function() {
    return head;
  };
  /**
   * LinkedList to string
   */
  this.toString = function() {
    let current = head,
      string = '';
    while (current) {
      string += current.element + (current.next ? ',' : '');
      current = current.next;
    }
    return string;
  };
  this.print = function() {};
}

let list = new LinkedList();
list.append(5);
list.append(10);
console.log(list.toString())

// ES6 class